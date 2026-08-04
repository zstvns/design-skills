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
├── README.md
├── INSTALL.md                # Optional connections (Quiver, Figma, Adobe, Paper, Flora)
├── CHANGELOG.md              # Plugin-level releases
├── VERSIONS.md               # Per-skill versions
├── CONTRIBUTING.md
└── LICENSE
```

**Two version numbers.** Per-skill `metadata.version` in each SKILL.md (tracked in `VERSIONS.md`), and the plugin version in both `.claude-plugin/*.json` (tracked in `CHANGELOG.md`). Bump the plugin version only for a release; keep the two manifests in sync with each other.

## The Shared Context Documents

Skills read and write plain markdown in the *user's* project under `.agents/`. Collect once, use everywhere — never make the user re-explain their brand.

| Document | Owner | Role |
|---|---|---|
| `.agents/brand.md` | `brand` | **The keystone.** Distilled source of truth; every skill reads it before acting. |
| `.agents/brand-strategy.md` | `brand-strategy` | Full coaching record — verbatim answers, muses with stealable cues, concept directions. `brand.md` gets the synthesis. |
| `.agents/design.md` | `creative-direction` | Full creative-direction spec, and a **living record**: `logo-design`, `motion-design`, and the application skills append their decided assets as the pipeline advances. |
| `.agents/assets/logo/` | `logo-design` | The locked logo *files*. Downstream skills place them; they never redraw the mark. |
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
