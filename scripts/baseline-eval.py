#!/usr/bin/env python3
"""Helpers for the baseline-eval process in CONTRIBUTING.md.

This does not call a model. It lists a skill's evals, prints prompts and
the PR results table, and blinds output files so a judge can pick a winner
without knowing which run is which.
"""

from __future__ import annotations

import argparse
import json
import random
import shutil
import sys
from datetime import datetime, timezone
from pathlib import Path

VARIANTS = ("no-skill", "previous", "candidate")
LABELS = ("A", "B", "C")
EXTENSIONS = (".md", ".txt")


def repo_root() -> Path:
    root = Path(__file__).resolve().parent.parent
    if not (root / "skills").is_dir():
        sys.exit("Could not find skills/ — run this from the design-skills repo.")
    return root


def skill_dir(root: Path, skill: str) -> Path:
    path = root / "skills" / skill
    if not path.is_dir():
        known = sorted(p.name for p in (root / "skills").iterdir() if p.is_dir())
        sys.exit(f"Unknown skill {skill!r}. Known: {', '.join(known)}")
    return path


def load_evals(root: Path, skill: str) -> tuple[str, list[dict]]:
    path = skill_dir(root, skill) / "evals" / "evals.json"
    if not path.is_file():
        sys.exit(f"No evals file at {path.relative_to(root)}")
    data = json.loads(path.read_text())
    evals = data.get("evals")
    if not isinstance(evals, list) or not evals:
        sys.exit(f"{path.relative_to(root)} has no evals array")
    return data.get("skill_name", skill), evals


def select_evals(evals: list[dict], ids: list[str] | None) -> list[dict]:
    if not ids:
        return evals
    by_id = {str(item.get("id")): item for item in evals}
    missing = [i for i in ids if i not in by_id]
    if missing:
        sys.exit(f"Unknown eval id(s): {', '.join(missing)}")
    return [by_id[i] for i in ids]


def first_line(text: str, width: int = 88) -> str:
    line = " ".join((text or "").split())
    if len(line) <= width:
        return line
    return line[: width - 1] + "…"


def cmd_list(root: Path, skill: str) -> int:
    name, evals = load_evals(root, skill)
    print(f"{name}  ({len(evals)} evals)")
    print()
    for item in evals:
        assertions = item.get("assertions") or []
        files = item.get("files") or []
        extra = f"{len(assertions)} assertion{'s' if len(assertions) != 1 else ''}"
        if files:
            extra += f", {len(files)} fixture file{'s' if len(files) != 1 else ''}"
        print(f"  {item.get('id')}  {first_line(item.get('prompt', ''))}")
        print(f"     {extra}")
    if len(evals) < 3:
        print()
        print("This skill has fewer than 3 evals — run all of them.")
    return 0


def cmd_prompt(root: Path, skill: str, ids: list[str] | None) -> int:
    name, evals = load_evals(root, skill)
    chosen = select_evals(evals, ids)
    blocks = []
    for item in chosen:
        lines = [
            f"=== {name} eval {item.get('id')} ===",
            "",
            "Prompt:",
            item.get("prompt", "").rstrip(),
            "",
            "Expected output:",
            (item.get("expected_output") or "").rstrip(),
            "",
            "Assertions:",
        ]
        assertions = item.get("assertions") or []
        if assertions:
            lines.extend(f"- {a}" for a in assertions)
        else:
            lines.append("- (none)")
        files = item.get("files") or []
        lines.append("")
        lines.append("Files: " + (", ".join(str(f) for f in files) if files else "(none)"))
        blocks.append("\n".join(lines))
    print("\n\n".join(blocks))
    return 0


def results_template(skill: str, evals: list[dict]) -> str:
    rows = [
        "| Eval | vs no-skill | vs previous | Notes |",
        "|------|-------------|-------------|-------|",
    ]
    if evals:
        for item in evals:
            rows.append(f"| {item.get('id')} | win / lose / tie | win / lose / tie | |")
    else:
        rows.append("| #    | win / lose / tie | win / lose / tie | |")
    table = "\n".join(rows)
    ids = ", ".join(str(item.get("id")) for item in evals) if evals else ""
    return (
        "## Baseline evals\n"
        "\n"
        f"Skill: {skill}\n"
        f"Evals run (id + why chosen): {ids}\n"
        "Judge (human / model, and which model if any):\n"
        "\n"
        f"{table}\n"
        "\n"
        "Win rate vs no-skill: _ / _\n"
        "Win rate vs previous: _ / _\n"
        "\n"
        "A rule or reference that lost or tied against the no-skill baseline was cut or rewritten: yes / n/a\n"
    )


def cmd_template(root: Path, skill: str, ids: list[str] | None) -> int:
    name, evals = load_evals(root, skill)
    chosen = select_evals(evals, ids)
    print(results_template(name, chosen), end="")
    return 0


def find_variant(directory: Path, variant: str) -> Path | None:
    for ext in EXTENSIONS:
        path = directory / f"{variant}{ext}"
        if path.is_file():
            return path
    return None


def discover_eval_dirs(run_dir: Path) -> list[Path]:
    if not run_dir.is_dir():
        sys.exit(f"Not a directory: {run_dir}")
    if all(find_variant(run_dir, v) for v in VARIANTS):
        return [run_dir]
    found = []
    for child in sorted(run_dir.iterdir(), key=lambda p: p.name):
        if child.is_dir() and all(find_variant(child, v) for v in VARIANTS):
            found.append(child)
    if not found:
        sys.exit(
            f"No eval outputs found in {run_dir}. Expected no-skill.md, "
            "previous.md, and candidate.md in the directory or in subdirectories."
        )
    return found


def cmd_blind(run_dir: Path, force: bool) -> int:
    eval_dirs = discover_eval_dirs(run_dir.resolve())
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    blinded = 0
    for directory in eval_dirs:
        blind_dir = directory / "blind"
        key_path = blind_dir / "KEY.md"
        if key_path.exists() and not force:
            sys.exit(
                f"{key_path} already exists. Refusing to re-shuffle after "
                "judging may have started. Pass --force to overwrite."
            )
        if blind_dir.exists():
            shutil.rmtree(blind_dir)
        blind_dir.mkdir()
        order = list(VARIANTS)
        random.shuffle(order)
        key_lines = [
            "# Blind key — do not show the judge",
            "",
            f"Shuffled {now}.",
            "",
            f"## {directory.name}",
        ]
        for letter, variant in zip(LABELS, order):
            src = find_variant(directory, variant)
            dest = blind_dir / f"{letter}{src.suffix}"
            shutil.copyfile(src, dest)
            key_lines.append(f"- {letter} = {variant}")
        key_lines.append("")
        key_path.write_text("\n".join(key_lines))
        blinded += 1
    where = "each eval's blind/ folder" if blinded > 1 or eval_dirs[0] != run_dir.resolve() else "blind/"
    print(
        f"Blinded {blinded} eval{'s' if blinded != 1 else ''}. "
        f"Judge the A/B/C files in {where}. Keep KEY.md hidden until after judging."
    )
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    sub = parser.add_subparsers(dest="command", required=True)

    p_list = sub.add_parser("list", help="List eval ids and prompt summaries for a skill")
    p_list.add_argument("skill")

    p_prompt = sub.add_parser("prompt", help="Print full prompts, expected output, and assertions")
    p_prompt.add_argument("skill")
    p_prompt.add_argument("ids", nargs="*", help="Eval ids to print (default: all)")

    p_template = sub.add_parser("template", help="Print the PR results table for the chosen evals")
    p_template.add_argument("skill")
    p_template.add_argument("ids", nargs="*", help="Eval ids to include (default: all)")

    p_blind = sub.add_parser(
        "blind",
        help="Shuffle no-skill/previous/candidate outputs into unlabeled A/B/C files",
    )
    p_blind.add_argument("run_dir", type=Path)
    p_blind.add_argument(
        "--force",
        action="store_true",
        help="Overwrite an existing blind/ folder and KEY.md",
    )
    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)
    if args.command == "blind":
        return cmd_blind(args.run_dir, args.force)
    root = repo_root()
    if args.command == "list":
        return cmd_list(root, args.skill)
    ids = args.ids or None
    if args.command == "prompt":
        return cmd_prompt(root, args.skill, ids)
    if args.command == "template":
        return cmd_template(root, args.skill, ids)
    parser.error(f"unknown command {args.command}")
    return 2


if __name__ == "__main__":
    sys.exit(main())
