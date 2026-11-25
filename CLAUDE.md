# AGENTS.md

Guidelines for AI agents working in this repository.

## Repository Overview

This repository contains **Agent Skills** that give AI agents design competency — brand strategy, visual identity, logo, and application across mediums. Skills follow the [Agent Skills specification](https://agentskills.io/specification.md) and install to `.agents/skills/` (the cross-agent standard).

- **Name**: Design Skills
- **Plugin name**: `designskills` (one word — the marketplace and plugin identifier)
- **Repository**: `zstvns/design-skills`
- **License**: MIT

## Repository Structure

```
design-skills/
├── .claude-plugin/
│   ├── plugin.json           # Plugin manifest — version, author, skills path
│   └── marketplace.json      # Marketplace manifest — /plugin marketplace add
├── skills/
│   └── <skill-name>/
│       ├── SKILL.md          # Required — the skill
│       ├── references/*.md    # Optional — deep dives, templates, specs
│       └── evals/evals.json   # Optional — test cases
├── examples/
│   └── magister/             # Worked example — one brand through every skill (.agents/ + deliverables)
├── README.md
├── INSTALL.md                # Tooling tiers + optional connections (Quiver, Figma, Adobe, Paper, Flora)
├── CHANGELOG.md              # Plugin-level releases
├── VERSIONS.md               # Per-skill versions
├── CONTRIBUTING.md
└── LICENSE
```

**Two version numbers.** Per-skill `metadata.version` in each SKILL.md (tracked in `VERSIONS.md`), and the plugin version in both `.claude-plugin/*.json` (tracked in `CHANGELOG.md`). Bump the plugin version only for a release; keep the two manifests in sync with each other. Every plugin version also gets a matching GitHub Release — see [Releases](#releases).

## The Shared Context Documents

Skills read and write plain markdown in the *user's* project under `.agents/`. Collect once, use everywhere — never make the user re-explain their brand.

| Document | Owner | Role |
|---|---|---|
| `.agents/brand.md` | `brand` | **The keystone.** Distilled source of truth; every skill reads it before acting. |
| `.agents/brand-strategy.md` | `brand-strategy` | Full coaching record — verbatim answers, muses with stealable cues, concept directions. `brand.md` gets the synthesis. |
| `.agents/design.md` | `creative-direction` | Full creative-direction spec, and a **living record**: `logo-design`, `art-direction`, `motion-design`, `product-film`, and the other application skills append their decided assets as the pipeline advances. |
| `.agents/assets/logo/` | `logo-design` | The locked logo *files*. Downstream skills place them; they never redraw the mark. |
| `.agents/assets/design-system/` | `creative-direction` | The kit published to Claude Design via `/design-sync` when no site repo exists — `tokens.css`, licensed fonts, logo copies, rights-cleared imagery, preview cards. A published copy; `.agents/design.md` stays the source of truth. |
| `.agents/foundations/` | `design-system` | One page per foundation (sections, mockups, edge cases, instructions for agents) plus `README.md` as the index. Mirrors the design file (Paper by default) and is checked against the project's tokens file, which stays the source of every value. |
| `.agents/assets/imagery/` | `art-direction` | The image library — anchors, approved assets per class, references, prompt packs, and `manifest.md` (source, rights, alt text). Application skills place from it and route new needs back. |
| `.agents/product-marketing.md` | *external* | From the marketing-skills library. Read, never written. |

Rules that follow from this:

- **Link, don't duplicate.** If `.agents/product-marketing.md` exists, link it for audience, voice, and positioning. The brand audit pulls its **competitor set** from that file's Competitive Landscape (or the `competitor-profiling` skill) rather than guessing.
- **A missing document is a routing signal.** `web-design` and `collateral-design` both gate on `.agents/design.md` existing — its absence means route back to `creative-direction`, not improvise a system.
- **When you add a document or change ownership, update this table, the README's Context Documents table, and the owning skill in the same commit.** An undocumented artifact is invisible to everyone installing the library.

## Authoring Rules

- **Voice is universal.** State the craft with authority. Do not tie principles to one agency's process or org chart — process-specific workflows belong in a consuming repo, not here.
- **`name` matches the directory exactly.** Lowercase, hyphens, 1–64 chars.
- **`description` carries trigger phrases.** It's how the skill auto-loads — include the verbs and phrases a user would actually type.
- **Add `metadata.version`** (semver) to every skill and record it in `VERSIONS.md`.
- **Cross-reference** related skills by name in a Related Skills section.
- **Never route to a skill that isn't shipped.** A skill listed in `VERSIONS.md` as Planned does not exist for the agent reading your file — handing off to it produces a dead end. If a planned skill is worth naming, annotate it *(planned — not yet shipped)* and say what to do in the meantime. Check `VERSIONS.md` before adding any cross-reference.
- **Principles defer to `design-principles`.** When a skill states a rule, it should be traceable to a belief in `design-principles`; don't restate the whole philosophy in each skill.

## Verify (content-only, no build step)

- YAML frontmatter is valid; `name` matches the directory
- `description` is 1–1024 characters and includes trigger phrases
- `evals/evals.json` (if present) parses as valid JSON
- Skill behavior changes include baseline-eval results in the PR — see [Baseline evals](#baseline-evals)

## Baseline evals

Valid JSON is not a test of whether the skill helps. A change that loses to the model with no skill is not an improvement.

- **Every skill behavior change is tested in a blind head-to-head** on **3 or more evals** from that skill's `evals/evals.json` (all of them, if there are fewer than 3). Prefer the evals that exercise the change.
- Run the same prompt three ways: **no skill**, the **previous** version on `main`, and this **candidate**. Blind the outputs. A judge (human or model) that does not know which is which picks a winner against the eval's `expected_output` and `assertions`, or calls a tie.
- **Report win rates in the PR** using the table in `CONTRIBUTING.md`. `python3 scripts/baseline-eval.py` lists evals, prints that table, and blinds output files.
- **A rule or reference that does not beat the no-skill baseline gets cut or rewritten**, not shipped. Also report the head-to-head against the previous version so a regression is visible.
- Typos, changelog-only, and process or docs changes that don't alter skill behavior can mark the section N/A.

See [CONTRIBUTING.md](CONTRIBUTING.md#baseline-evals) for the procedure.

## Releases

Skill aggregators and installers subscribe to GitHub Releases, not to commits on `main`. A plugin version that exists only in `.claude-plugin/*.json` and `CHANGELOG.md` is invisible to them.

- **Every plugin version gets a matching GitHub release.** When you cut a plugin version — bump both `.claude-plugin/*.json` files and move the Unreleased Skill Changes into a `CHANGELOG.md` entry — create a `v<version>` git tag at that commit and a GitHub Release titled `v<version>` whose notes are that changelog entry. Do this in the same release PR or immediately after it merges. Never leave a shipped plugin version without a release.
- **Point the tag at the commit that landed the version**, not at a later `main` that already has unreleased skill changes.
- A workflow at `.github/workflows/release.yml` creates the tag and release when the plugin version changes on `main` and no `v<version>` release exists yet, using the matching `CHANGELOG.md` section as the notes. If the workflow is skipped or fails, create the release by hand the same way. Do not invent notes.
