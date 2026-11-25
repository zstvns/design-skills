# Enforcement: Tokens and the Self-Check

Pages tell the agent what to do. This is the part that catches it when it doesn't.

## Tokens are the single source of truth

- **Every value lives in one tokens file** as CSS custom properties: `:root` for the base theme, a selector or media block per theme (`[data-theme="dark"]`, `.dark`, `@media (prefers-color-scheme: dark)`), or Tailwind's `@theme`. If Tailwind's config holds the values, move them into CSS variables and have the config reference them, so the check can read them.
- **Name by role**, not by look: `--color-text-muted`, `--radius-card`, `--dur-fast`. A role survives a palette change; a name like `--gray-500` doesn't.
- **Derived values are expressions, not copies.** A nested radius is `max(0px, calc(var(--radius-lg) - var(--space-2)))` or a named step that the config's `nested` rule verifies.
- **Components use tokens only.** No hex, no `rgb()`, no raw px or rem for spacing, radius, or type, no raw shadows, durations, easing, or z-index, no Tailwind arbitrary values for those, and no default palette classes like `text-gray-500`.

## The self-check script

`scripts/check-foundations.py` is one file, Python 3.9+, standard library only. Copy it into the project and run it from the project root:

```bash
python3 scripts/check-foundations.py                     # reads foundations.check.json
python3 scripts/check-foundations.py --tokens src/styles/tokens.css src
python3 scripts/check-foundations.py --strict            # warnings fail too
```

Add it to `package.json` so every agent and person runs the same command:

```json
{ "scripts": { "check:design": "python3 scripts/check-foundations.py" } }
```

It exits 1 when anything fails, so it can also run in a pre-commit hook or CI. Output is grouped by check, one line per finding with the file and line and a `fix:` line under it.

### What it checks

| Check | Catches |
|---|---|
| **Contrast** | WCAG 2 ratio for every pair in `contrast`, in every theme the tokens file defines. Reads hex, `rgb()`, `hsl()`, bare shadcn HSL triples, and `oklch()`, resolves `var()` chains, and composites translucent colors before measuring. With no pairs configured it guesses common ones (text, muted, and foreground tokens on bg, surface, and background tokens; `--on-x` and `x-foreground` on `x`; focus and ring at 3:1), but list them explicitly. |
| **Tokens and classes** | Raw colors in code. Raw or off-scale px and rem in padding, margin, gap, `border-radius`, and `font-size`, with the token it should be or the nearest steps on the scale. Raw `box-shadow`, durations, easing, and `z-index` when that token family exists. Tailwind arbitrary values (`p-[13px]`, `rounded-[10px]`, `bg-[#fff]`) unless they wrap a `var(--token)`. Default palette classes (`bg-blue-500`). Anything in `bannedClasses`. |
| **Nested corners** | Each `nested` rule: inner = max(0, outer − padding), within 0.5px. Radius tokens whose `calc()` goes negative. A padded rounded element whose next child repeats the same `rounded-*` class (a warning, since markup heuristics can be wrong). |
| **Foundation pages** | Each page in `docs` has `## Sections` with a mockup per section, `## Edge cases`, and `## Instructions for agents` with Steps, Self-checks, and Do / don't. Every token a page names exists. Every token row's value matches the tokens file. Tokens that no page documents are listed (a warning). |

Token files themselves are not scanned for raw values, since that's where values belong. `node_modules`, build output, and dot-folders are skipped.

### What it doesn't check

Hierarchy, rhythm, whether the action color is used only on CTAs, focus order, grid breaks, and anything that needs the rendered page. Those stay on the page as manual self-checks and in `web-design`'s ship check. Say which is which on every page.

## Suppressions

A finding can be suppressed with a comment on the same or previous line:

```tsx
{/* foundations-ignore: partner logo color, required by their brand guidelines */}
```

- **Every suppression needs a reason** after the colon.
- **The summary counts suppressions**, so a reviewer sees them.
- **Never suppress to finish faster.** Never lower a contrast `min`, add a value to `allow`, or widen a scale to make the check pass. Those are rule changes: they go on the page first, with the owner's yes.

## When the check fails

1. Read each `fix:` line and apply it in the component, not in the config.
2. A contrast failure means a token is wrong. Changing a brand color is a brand change, so propose the token change (or a new role token, such as a darker muted text for small sizes) to the owner, and to the brand lead when it touches the fixed core. Don't quietly shift the color.
3. A docs failure means the page and the code disagree. Code is the source of values, so update the page and the design file, unless the code change itself was the mistake.
4. Run the check again. Report the final summary line in your handoff, including the suppression count.
