#!/usr/bin/env python3
"""Design-system self-check. Run it before you say you're finished.

Python 3.9+, standard library only. Checks:
  contrast  WCAG 2 contrast for token pairs, per theme
  values    raw colors, raw px/rem, off-scale values, and Tailwind arbitrary or
            default-palette classes where a token should be used
  nested    nested corners follow inner = max(0, outer - padding)
  docs      foundation pages match the tokens file and keep their required sections

Usage:
  python3 check-foundations.py --tokens src/styles/tokens.css [src ...]
  python3 check-foundations.py            # reads foundations.check.json

Exit code 1 when anything fails (warnings too, with --strict).
Suppress one finding with a `foundations-ignore: <reason>` comment on the same or
previous line. Suppressions are counted in the summary.
"""

from __future__ import annotations

import argparse
import json
import math
import re
import sys
from pathlib import Path

CONFIG_NAME = "foundations.check.json"
CODE_EXT = {".css", ".scss", ".less", ".html", ".htm", ".jsx", ".tsx", ".js", ".ts",
            ".vue", ".svelte", ".astro", ".mdx"}
STYLE_EXT = {".css", ".scss", ".less"}
SKIP_DIRS = {"node_modules", ".git", "dist", "build", "out", ".next", "coverage",
             ".turbo", ".vercel", "vendor"}
ROOT_PX = 16.0

# category -> (token prefixes, CSS properties, raw values that are always fine)
CATEGORIES = {
    "spacing": (("--space", "--spacing"),
                re.compile(r"^(padding|margin|gap|row-gap|column-gap)(-[a-z-]+)?$"),
                {"0", "0px", "auto"}),
    "radius": (("--radius", "--rounded"),
               re.compile(r"^border(-[a-z]+)*-radius$"),
               {"0", "0px", "50%", "9999px", "999px", "100%"}),
    "font-size": (("--text", "--font-size", "--fs"), re.compile(r"^font-size$"),
                  {"inherit", "100%", "1em"}),
    "shadow": (("--shadow", "--elevation"), re.compile(r"^box-shadow$"), {"none"}),
    "duration": (("--duration", "--dur", "--motion"),
                 re.compile(r"^(transition|animation)(-duration|-delay)?$"), {"0s", "0ms", "none"}),
    "z-index": (("--z", "--layer"), re.compile(r"^z-index$"), {"0", "-1", "1", "auto"}),
}

HEX = r"#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})(?![0-9a-zA-Z_-])"
COLOR_FN = r"\b(?:rgba?|hsla?|oklch|oklab|lab|lch|hwb)\(\s*[\d.]"
RAW_COLOR = re.compile(rf"(?<![\w&/-]){HEX}|{COLOR_FN}")
LENGTH = re.compile(r"(?<![\w.-])(-?\d*\.?\d+)(px|rem)\b")
TIME = re.compile(r"(?<![\w.-])(\d*\.?\d+)(ms|s)\b")
TW_PALETTE = ("slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|"
              "teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose")
TW_DEFAULT_COLOR = re.compile(
    rf"(?<![\w-])(?:[a-z0-9-]+:)*(?:bg|text|border(?:-[trblxy])?|ring|fill|stroke|outline|"
    rf"divide|from|via|to|decoration|accent|caret|placeholder|shadow)-(?:{TW_PALETTE})-"
    rf"(?:50|[1-9]00|950)(?:/\d+)?(?![\w-])")
TW_ARBITRARY = re.compile(
    r"(?<![\w-])(?:[a-z0-9-]+:)*(bg|text|border(?:-[trblxy])?|ring|fill|stroke|outline|from|via|to|"
    r"p[xytrblse]?|m[xytrblse]?|gap(?:-[xy])?|space-[xy]|rounded(?:-[trblse]{1,2})?|leading|"
    r"tracking|shadow|duration|z)-\[([^\]\s]+)\]")
TW_ROUNDED = re.compile(r"(?<![\w-])rounded(?:-([a-z0-9]+))?(?![\w\[-])")
TW_PADDING = re.compile(r"(?<![\w-])p[xy]?-(\d+(?:\.\d+)?|\[[^\]]+\])(?![\w-])")
CLASS_ATTR = re.compile(r"\bclass(?:Name)?\s*=\s*(?:\{\s*)?[\"'`]([^\"'`]*)[\"'`]")
VAR = re.compile(r"var\(\s*(--[\w-]+)\s*(?:,\s*([^()]*(?:\([^()]*\))?[^()]*))?\)")
IGNORE = "foundations-ignore"


# ---------------------------------------------------------------- tokens

def parse_tokens(paths):
    """Return (themes, lines). themes: {context: {name: value}}; 'base' is :root/html/@theme."""
    themes, where = {}, {}
    for path in paths:
        text = re.sub(r"/\*.*?\*/", lambda m: "\n" * m.group(0).count("\n"),
                      Path(path).read_text(encoding="utf-8"), flags=re.S)
        stack, buf, line = [], "", 1
        for ch in text:
            if ch == "{":
                stack.append(" ".join(buf.split()))
                buf = ""
            elif ch in ";}":
                decl = buf.strip()
                if decl.startswith("--") and ":" in decl:
                    name, value = decl.split(":", 1)
                    ctx = context_name(stack)
                    themes.setdefault(ctx, {})[name.strip()] = " ".join(value.split())
                    where.setdefault(name.strip(), f"{path}:{line - decl.count(chr(10))}")
                buf = ""
                if ch == "}" and stack:
                    stack.pop()
            else:
                buf += ch
            if ch == "\n":
                line += 1
    themes.setdefault("base", {})
    return themes, where


def context_name(stack):
    base = {":root", "html", ":host", ":root, :host", "@theme", "@theme inline", "@theme static"}
    parts = [p for p in stack if p]
    if not parts or all(p in base for p in parts):
        return "base"
    return " ".join(parts)


def theme_view(themes, ctx):
    merged = dict(themes["base"])
    if ctx != "base":
        merged.update(themes[ctx])
    return merged


def resolve(value, tokens, depth=0):
    if depth > 20:
        return value
    def sub(m):
        name, fallback = m.group(1), m.group(2)
        if name in tokens:
            return resolve(tokens[name], tokens, depth + 1)
        return resolve(fallback, tokens, depth + 1) if fallback else m.group(0)
    return VAR.sub(sub, value)


def to_px(value):
    """Evaluate a length: px, rem, em, calc(), max()/min() of +/- terms. None if unknown."""
    v = value.strip()
    m = re.fullmatch(r"(?:calc|max|min)?\((.*)\)", v)
    fn = re.match(r"(calc|max|min)\(", v)
    if fn and m:
        inner = m.group(1)
        if fn.group(1) in ("max", "min"):
            args = [to_px(a) for a in split_top(inner)]
            if None in args:
                return None
            return max(args) if fn.group(1) == "max" else min(args)
        return to_px_sum(inner)
    return to_px_sum(v)


def split_top(s):
    out, depth, cur = [], 0, ""
    for ch in s:
        depth += ch == "("
        depth -= ch == ")"
        if ch == "," and depth == 0:
            out.append(cur)
            cur = ""
        else:
            cur += ch
    return out + [cur]


def to_px_sum(expr):
    expr = expr.strip()
    if re.fullmatch(r"(?:calc|max|min)\(.*\)", expr):
        return to_px(expr)
    terms = re.findall(r"([+-]?)\s*((?:calc|max|min)\([^()]*(?:\([^()]*\)[^()]*)*\)|-?\d*\.?\d+(?:px|rem|em)?)", expr)
    if not terms:
        return None
    total = 0.0
    for sign, term in terms:
        if re.match(r"(calc|max|min)\(", term):
            val = to_px(term)
        else:
            n = re.fullmatch(r"(-?\d*\.?\d+)(px|rem|em)?", term)
            if not n:
                return None
            val = float(n.group(1)) * (ROOT_PX if n.group(2) in ("rem", "em") else 1)
        if val is None:
            return None
        total += -val if sign == "-" else val
    return total


# ---------------------------------------------------------------- color

def parse_color(value):
    v = value.strip().lower()
    if v in ("white", "#fff"):
        return (1.0, 1.0, 1.0, 1.0)
    if v == "black":
        return (0.0, 0.0, 0.0, 1.0)
    if v == "transparent":
        return (0.0, 0.0, 0.0, 0.0)
    m = re.fullmatch(r"#([0-9a-f]{3,8})", v)
    if m:
        h = m.group(1)
        if len(h) in (3, 4):
            h = "".join(c * 2 for c in h)
        if len(h) not in (6, 8):
            return None
        parts = [int(h[i:i + 2], 16) / 255 for i in range(0, len(h), 2)]
        return tuple(parts + [1.0])[:4]
    if re.fullmatch(r"[\d.]+\s+[\d.]+%\s+[\d.]+%(\s*/\s*[\d.]+%?)?", v):  # bare shadcn hsl
        v = f"hsl({v})"
    m = re.fullmatch(r"(rgba?|hsla?|oklch)\((.*)\)", v)
    if not m:
        return None
    fn, args = m.group(1), m.group(2).replace(",", " ").replace("/", " / ")
    nums = args.split()
    alpha = 1.0
    if "/" in nums:
        i = nums.index("/")
        alpha, nums = pct(nums[i + 1], 1), nums[:i]
    elif len(nums) == 4:
        alpha, nums = pct(nums[3], 1), nums[:3]
    if len(nums) != 3:
        return None
    try:
        if fn.startswith("rgb"):
            r, g, b = (pct(n, 255) for n in nums)
            return (r, g, b, alpha)
        if fn.startswith("hsl"):
            h = float(nums[0].replace("deg", "")) % 360
            s, l = pct(nums[1], 100), pct(nums[2], 100)
            return hsl_to_rgb(h, s, l) + (alpha,)
        L = pct(nums[0], 1)
        C = float(nums[1].rstrip("%")) * (0.004 if nums[1].endswith("%") else 1)
        H = float(nums[2].replace("deg", ""))
        return oklch_to_rgb(L, C, H) + (alpha,)
    except ValueError:
        return None


def pct(token, scale):
    token = token.strip()
    if token.endswith("%"):
        return float(token[:-1]) / 100
    return float(token) / scale


def hsl_to_rgb(h, s, l):
    c = (1 - abs(2 * l - 1)) * s
    x = c * (1 - abs((h / 60) % 2 - 1))
    m = l - c / 2
    r, g, b = [(c, x, 0), (x, c, 0), (0, c, x), (0, x, c), (x, 0, c), (c, 0, x)][int(h // 60) % 6]
    return (r + m, g + m, b + m)


def oklch_to_rgb(L, C, H):
    a, b = C * math.cos(math.radians(H)), C * math.sin(math.radians(H))
    l_ = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3
    m_ = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3
    s_ = (L - 0.0894841775 * a - 1.2914855480 * b) ** 3
    lin = (4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
           -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
           -0.0041960863 * l_ - 0.7034186147 * m_ + 1.7076147010 * s_)
    enc = lambda c: 12.92 * c if c <= 0.0031308 else 1.055 * c ** (1 / 2.4) - 0.055
    return tuple(min(1.0, max(0.0, enc(c))) for c in lin)


def over(fg, bg):
    a = fg[3]
    return tuple(fg[i] * a + bg[i] * (1 - a) for i in range(3)) + (1.0,)


def luminance(c):
    lin = [x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in c[:3]]
    return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2]


def contrast(fg, bg):
    hi, lo = sorted((luminance(fg), luminance(bg)), reverse=True)
    return (hi + 0.05) / (lo + 0.05)


def default_pairs(tokens):
    """Guess pairs from common names when the config lists none."""
    names = set(tokens)
    alias = lambda n: re.fullmatch(r"var\(\s*(--[\w-]+)\s*\)", tokens[n].strip())
    texts = [n for n in names if re.fullmatch(r"--(?:color-)?(text|fg|foreground|muted-foreground|"
                                               r"text-(?:muted|secondary|subtle)|muted)", n)
             and n != "--muted" and not alias(n)]
    grounds = [n for n in names if re.fullmatch(r"--(color-)?(bg|background|surface[\w-]*|card)", n)
               and not alias(n)]
    pairs = [(t, g, 4.5) for t in sorted(set(texts)) for g in sorted(grounds)]
    for n in sorted(names):
        m = re.fullmatch(r"--(?:color-)?on-([\w-]+)", n) or re.fullmatch(r"--([\w-]+)-foreground", n)
        if m:
            base = next((b for b in (f"--color-{m.group(1)}", f"--{m.group(1)}") if b in names), None)
            if base and (n, base, 4.5) not in pairs:
                pairs.append((n, base, 4.5))
    for n in ("--color-focus", "--ring", "--color-ring"):
        for g in grounds:
            if n in names:
                pairs.append((n, g, 3.0))
    return pairs


# ---------------------------------------------------------------- report

class Report:
    def __init__(self):
        self.items, self.suppressed = [], 0

    def add(self, section, level, where, msg, fix=""):
        self.items.append((section, level, where, msg, fix))

    def count(self, level):
        return sum(1 for i in self.items if i[1] == level)


def suppressed(lines, idx):
    return IGNORE in lines[idx] or (idx > 0 and IGNORE in lines[idx - 1])


# ---------------------------------------------------------------- checks

def check_contrast(themes, pairs, rep):
    for ctx in themes:
        tokens = theme_view(themes, ctx)
        for fg_name, bg_name, need in pairs:
            if fg_name not in tokens or bg_name not in tokens:
                if ctx == "base":
                    rep.add("contrast", "error", "config", f"pair {fg_name} / {bg_name}: token not defined")
                continue
            if ctx != "base" and fg_name not in themes[ctx] and bg_name not in themes[ctx]:
                continue
            fg = parse_color(resolve(tokens[fg_name], tokens))
            bg = parse_color(resolve(tokens[bg_name], tokens))
            if fg is None or bg is None:
                rep.add("contrast", "warn", f"[{ctx}]", f"{fg_name} on {bg_name}: can't evaluate the color value",
                        "use hex, rgb(), hsl(), or oklch() so it can be checked")
                continue
            ground = parse_color(resolve(tokens.get("--color-bg", tokens.get("--background", "#fff")), tokens)) \
                or (1.0, 1.0, 1.0, 1.0)
            if bg[3] < 1:
                bg = over(bg, ground if ground[3] == 1 else (1.0, 1.0, 1.0, 1.0))
            fg = over(fg, bg)
            ratio = contrast(fg, bg)
            label = f"{fg_name} on {bg_name} [{ctx}]"
            if ratio + 1e-9 < need:
                rep.add("contrast", "error", label, f"{ratio:.2f}:1, needs {need}:1",
                        f"change {fg_name} or {bg_name} in the tokens file, never the threshold")
            else:
                rep.add("contrast", "ok", label, f"{ratio:.2f}:1 (needs {need}:1)")


def token_scale(tokens, category):
    prefixes = CATEGORIES[category][0]
    scale = {}
    for name, value in tokens.items():
        if name.startswith(prefixes):
            px = to_px(resolve(value, tokens))
            if px is not None:
                scale[name] = px
    return scale


def check_values(files, themes, cfg, rep):
    tokens = theme_view(themes, "base")
    has = {cat: any(n.startswith(CATEGORIES[cat][0]) for n in tokens) for cat in CATEGORIES}
    has_ease = any(n.startswith("--ease") for n in tokens)
    has_colors = any(n.startswith(("--color", "--background", "--foreground", "--primary")) for n in tokens)
    scales = {cat: token_scale(tokens, cat) for cat in ("spacing", "radius", "font-size")}
    allow = set(cfg.get("allow", []))
    banned = [(re.compile(b["pattern"]), b.get("message", "banned class")) for b in cfg.get("bannedClasses", [])]
    decl = re.compile(r"(?<![\w-])([a-zA-Z-]+)\s*:\s*([^;{}\n]+)")
    js_decl = re.compile(r"\b([a-z][a-zA-Z]+)\s*:\s*[\"'`]([^\"'`\n]+)[\"'`]")

    for path in files:
        lines = path.read_text(encoding="utf-8", errors="replace").splitlines()
        is_style = path.suffix in STYLE_EXT
        for i, line in enumerate(lines):
            if line.lstrip().startswith(("//", "* ", "/*")) and not is_style:
                continue
            here = f"{path}:{i + 1}"
            found = []
            for m in RAW_COLOR.finditer(line):
                if is_style and re.match(r"\s*--[\w-]+\s*:", line):
                    break
                before = line[:m.start()] or " "
                if not is_style and m.group(0).startswith("#") and (
                        not re.search(r"[\"'`\[(\s:,]$", before)
                        or re.search(r"(href|to|id|for|xlinkHref|xlink:href)\s*=\s*\{?[\"'`]$", before)):
                    continue
                shown = re.match(r"#\w+|\w+\([^)]*\)?", line[m.start():]).group(0)
                found.append(("values", "error", f"raw color {shown}",
                              "use a color token (var(--color-...) or its utility class)"))
            pairs = decl.findall(line) if is_style else \
                [(re.sub(r"[A-Z]", lambda c: "-" + c.group(0).lower(), p), v) for p, v in js_decl.findall(line)]
            for prop, value in pairs:
                prop = prop.lower()
                if prop.startswith("--"):
                    continue
                for cat, (prefixes, props, ok) in CATEGORIES.items():
                    if not props.match(prop) or not has[cat]:
                        continue
                    raw = re.sub(r"\s*!important\s*$", "", VAR.sub("", value)).strip()
                    if raw in ok or raw in allow or not raw:
                        continue
                    if cat in ("spacing", "radius", "font-size"):
                        for n in LENGTH.finditer(raw):
                            if n.group(0) in ok or n.group(0) in allow:
                                continue
                            px = float(n.group(1)) * (ROOT_PX if n.group(2) == "rem" else 1)
                            found.append(("values", "error", *scale_message(cat, n.group(0), px, scales[cat])))
                    elif cat == "duration":
                        if TIME.search(raw):
                            found.append(("values", "error", f"raw duration in {prop}: {value.strip()}",
                                          f"use a duration token ({family(tokens, prefixes)}-*)"))
                        if has_ease and re.search(r"cubic-bezier\(|(?<![\w-])(linear|ease(-in|-out|-in-out)?)(?![\w-])", raw):
                            found.append(("values", "error", f"raw easing in {prop}: {value.strip()}",
                                          "use an easing token (--ease-*)"))
                    elif cat == "shadow" and raw != "none" and re.search(r"\d", raw):
                        found.append(("values", "error", f"raw box-shadow: {value.strip()}",
                                      "use an elevation token (--shadow-*)"))
                    elif cat == "z-index" and re.fullmatch(r"-?\d+", raw):
                        found.append(("values", "error", f"raw z-index {raw}", "use a --z-* layer token"))
            for cls in (CLASS_ATTR.findall(line) if not is_style else []) + ([line] if is_style and "@apply" in line else []):
                for m in TW_ARBITRARY.finditer(cls):
                    if m.group(2).startswith("var(--") or m.group(2) in allow:
                        continue
                    found.append(("values", "error", f"arbitrary class {m.group(0)}",
                                  "use the token's utility class, or add the value to the scale with the owner's yes"))
                if has_colors:
                    for m in TW_DEFAULT_COLOR.finditer(cls):
                        found.append(("values", "error", f"default palette class {m.group(0)}",
                                      "use a semantic color token class (bg-surface, text-muted, ...)"))
                for rx, msg in banned:
                    for m in rx.finditer(cls):
                        found.append(("values", "error", f"class {m.group(0)}", msg))
            for sec, lvl, msg, fix in found:
                if suppressed(lines, i):
                    rep.suppressed += 1
                else:
                    rep.add(sec, lvl, here, msg, fix)


def family(tokens, prefixes):
    return next((p for p in prefixes if any(n.startswith(p) for n in tokens)), prefixes[0])


def scale_message(cat, literal, px, scale):
    on = [n for n, v in scale.items() if abs(v - px) < 0.01]
    if on:
        return f"raw {cat} {literal}", f"use {on[0]}"
    if not scale:
        return f"raw {cat} {literal}", f"define a --{cat}-* token scale first"
    below = max(((v, n) for n, v in scale.items() if v < px), default=None)
    above = min(((v, n) for n, v in scale.items() if v > px), default=None)
    near = " or ".join(f"{n} ({v:g}px)" for v, n in (below, above) if n)
    return f"off-scale {cat} {literal}", f"nearest: {near}"


def check_nested(themes, files, cfg, rep):
    tokens = theme_view(themes, "base")
    for name, value in tokens.items():
        if name.startswith(CATEGORIES["radius"][0]) and "-" in resolve(value, tokens) and "calc" in value:
            px = to_px(resolve(value, tokens))
            if px is not None and px < 0:
                rep.add("nested", "error", name, f"resolves to {px:g}px",
                        "wrap it: max(0px, calc(outer - padding))")
    for rule in cfg.get("nested", []):
        vals = {k: to_px(resolve(tokens.get(rule[k], rule[k]), tokens)) for k in ("outer", "padding", "inner")}
        label = f"{rule['inner']} inside {rule['outer']} with {rule['padding']}"
        if None in vals.values():
            rep.add("nested", "error", label, "a token in this rule is missing or not a length")
            continue
        want = max(0.0, vals["outer"] - vals["padding"])
        if abs(vals["inner"] - want) > 0.5:
            rep.add("nested", "error", label, f"inner is {vals['inner']:g}px, should be {want:g}px",
                    f"inner = max(0, {vals['outer']:g} - {vals['padding']:g})")
        else:
            rep.add("nested", "ok", label, f"{vals['inner']:g}px = max(0, {vals['outer']:g} - {vals['padding']:g})")
    for path in files:  # heuristic: a padded rounded box whose next child repeats its radius
        if path.suffix in STYLE_EXT:
            continue
        lines = path.read_text(encoding="utf-8", errors="replace").splitlines()
        prev = None
        for i, line in enumerate(lines):
            for cls in CLASS_ATTR.findall(line):
                r = TW_ROUNDED.findall(cls)
                pad = TW_PADDING.search(cls)
                if prev and r and r[0] == prev[0] and r[0] not in ("none", "full") and i - prev[1] <= 3:
                    if suppressed(lines, i):
                        rep.suppressed += 1
                    else:
                        rep.add("nested", "warn", f"{path}:{i + 1}",
                                f"child repeats the parent's rounded-{r[0] or 'DEFAULT'} inside padding",
                                "inner radius = max(0, outer - padding); use the smaller radius token")
                prev = (r[0], i) if r and pad else None


def check_docs(docs, themes, where, rep):
    tokens = theme_view(themes, "base")
    pages = sorted(p for p in Path(docs).glob("*.md") if p.name.lower() not in ("readme.md", "index.md"))
    if not pages:
        rep.add("docs", "warn", str(docs), "no foundation pages found")
        return
    documented = set()
    for page in pages:
        text = page.read_text(encoding="utf-8")
        for need in ("## Edge cases", "## Instructions for agents", "### Steps", "### Self-checks", "### Do"):
            if need.lower() not in text.lower():
                rep.add("docs", "error", str(page), f"missing section '{need}'", "follow the foundation page template")
        sections = re.split(r"\n### ", text.split("## Sections", 1)[1].split("\n## ", 1)[0]) if "## Sections" in text else []
        for sec in sections[1:]:
            if "mockup" not in sec.lower():
                rep.add("docs", "error", str(page), f"section '{sec.splitlines()[0]}' has no mockup",
                        "every section shows the rule in use")
        for n, line in enumerate(text.splitlines(), 1):
            for name in re.findall(r"`(--[\w-]+)`", line):
                documented.add(name)
                if name not in tokens:
                    rep.add("docs", "error", f"{page}:{n}", f"page names {name}, which isn't in the tokens file",
                            "fix the page or add the token: they must agree")
            row = re.match(r"\s*\|\s*`(--[\w-]+)`\s*\|\s*`([^`]+)`", line)
            if row and row.group(1) in tokens:
                actual = tokens[row.group(1)]
                if " ".join(row.group(2).split()).lower() != actual.lower():
                    rep.add("docs", "error", f"{page}:{n}", f"page says {row.group(1)} is {row.group(2)}; tokens say {actual}",
                            "code is the source of values: update the page and the design file")
    missing = sorted(set(tokens) - documented)
    if missing:
        rep.add("docs", "warn", str(docs), f"{len(missing)} token(s) not on any foundation page: {', '.join(missing)}",
                "document each token on its foundation page, or delete it if nothing uses it")


# ---------------------------------------------------------------- main

def collect(paths, exclude):
    out = []
    for p in paths:
        p = Path(p)
        if p.is_file():
            out.append(p)
            continue
        for f in p.rglob("*"):
            if f.suffix in CODE_EXT and f.is_file() and not (set(f.parts) & SKIP_DIRS) \
                    and f.resolve() not in exclude and not any(part.startswith(".") and part not in (".", "..")
                                                               for part in f.relative_to(p).parts[:-1]):
                out.append(f)
    return sorted(set(out))


def main():
    ap = argparse.ArgumentParser(description="Design-system self-check (contrast, tokens, nested corners, docs).")
    ap.add_argument("paths", nargs="*", help="files or folders to scan (default: config 'scan', or src app components)")
    ap.add_argument("--tokens", action="append", help="tokens file(s) — the single source of truth")
    ap.add_argument("--docs", help="folder of foundation pages (default: config 'docs', or .agents/foundations)")
    ap.add_argument("--config", help=f"config file (default: ./{CONFIG_NAME} if present)")
    ap.add_argument("--strict", action="store_true", help="warnings fail too")
    ap.add_argument("--quiet", action="store_true", help="hide passing contrast and nested lines")
    args = ap.parse_args()

    cfg_path = Path(args.config or CONFIG_NAME)
    cfg = json.loads(cfg_path.read_text()) if cfg_path.is_file() else {}
    token_files = args.tokens or cfg.get("tokens") or []
    if not token_files:
        sys.exit("No tokens file. Pass --tokens path/to/tokens.css or set \"tokens\" in " + CONFIG_NAME)
    for t in token_files:
        if not Path(t).is_file():
            sys.exit(f"Tokens file not found: {t}")
    themes, where = parse_tokens(token_files)
    scan = args.paths or cfg.get("scan") or [d for d in ("src", "app", "components", "pages", "styles") if Path(d).is_dir()] or ["."]
    exclude = {Path(t).resolve() for t in token_files}
    files = collect(scan, exclude)
    docs = args.docs or cfg.get("docs") or ".agents/foundations"

    rep = Report()
    pairs = [(p["fg"], p["bg"], float(p.get("min", 4.5))) for p in cfg.get("contrast", [])] \
        or default_pairs(theme_view(themes, "base"))
    check_contrast(themes, pairs, rep)
    check_values(files, themes, cfg, rep)
    check_nested(themes, files, cfg, rep)
    if Path(docs).is_dir():
        check_docs(docs, themes, where, rep)

    n_tokens = len(theme_view(themes, "base"))
    print(f"design-system self-check · {n_tokens} tokens from {', '.join(token_files)} · "
          f"themes: {', '.join(themes)} · {len(files)} files scanned"
          + ("" if Path(docs).is_dir() else f" · no docs at {docs}"))
    titles = {"contrast": "Contrast (WCAG 2)", "values": "Tokens and classes",
              "nested": "Nested corners", "docs": "Foundation pages vs tokens"}
    tags = {"error": "FAIL", "warn": "WARN", "ok": " ok "}
    for sec, title in titles.items():
        items = [i for i in rep.items if i[0] == sec and not (args.quiet and i[1] == "ok")]
        if sec == "contrast" and not pairs:
            print(f"\n{title}\n  WARN no contrast pairs — list them under \"contrast\" in {CONFIG_NAME}")
            rep.add("contrast", "warn", "config", "no pairs")
            continue
        if sec == "docs" and not Path(docs).is_dir():
            print(f"\n{title}\n  skip no foundation pages at {docs}")
            continue
        if not items:
            print(f"\n{title}\n   ok  nothing to flag")
            continue
        print(f"\n{title}")
        for _, level, where_, msg, fix in items:
            print(f"  {tags[level]} {where_}  {msg}" + (f"\n         fix: {fix}" if fix and level != "ok" else ""))
    errors, warns = rep.count("error"), rep.count("warn")
    failed = errors or (args.strict and warns)
    print(f"\n{errors} error(s), {warns} warning(s)"
          + (f", {rep.suppressed} suppressed by {IGNORE}" if rep.suppressed else "")
          + (" — FAIL. Fix these before you say you're done." if failed else " — PASS"))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
