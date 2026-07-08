# AGENTS.md

Guidelines for AI agents working in this repository.

## Repository Overview

This repository contains **Agent Skills** that give AI agents design competency — brand strategy, visual identity, logo, and application across mediums. Skills follow the [Agent Skills specification](https://agentskills.io/specification.md) and install to `.agents/skills/` (the cross-agent standard).

- **Name**: Design Skills
- **License**: MIT

## Repository Structure

```
design-skills/
├── skills/
│   └── <skill-name>/
│       ├── SKILL.md          # Required — the skill
│       ├── references/*.md    # Optional — deep dives, templates, specs
│       └── evals/evals.json   # Optional — test cases
├── README.md
├── VERSIONS.md
├── CONTRIBUTING.md
└── LICENSE
```

## The Shared Context Document

The keystone skill `brand` produces and maintains **`.agents/brand.md`** in the *user's* project — the single source of truth for a brand's visual identity. Other design skills read it before acting. If `.agents/product-marketing.md` exists (from the marketing-skills library), skills link to it for audience, voice, and positioning rather than duplicating — and the brand audit pulls its **competitor set** from that file's Competitive Landscape (or the `competitor-profiling` skill) rather than guessing. Collect once, use everywhere.

## Authoring Rules

- **Voice is universal.** State the craft with authority. Do not tie principles to one agency's process or org chart — process-specific workflows belong in a consuming repo, not here.
- **`name` matches the directory exactly.** Lowercase, hyphens, 1–64 chars.
- **`description` carries trigger phrases.** It's how the skill auto-loads — include the verbs and phrases a user would actually type.
- **Add `metadata.version`** (semver) to every skill and record it in `VERSIONS.md`.
- **Cross-reference** related skills by name in a Related Skills section.
- **Principles defer to `design-principles`.** When a skill states a rule, it should be traceable to a belief in `design-principles`; don't restate the whole philosophy in each skill.

## Verify (content-only, no build step)

- YAML frontmatter is valid; `name` matches the directory
- `description` is 1–1024 characters and includes trigger phrases
- `evals/evals.json` (if present) parses as valid JSON
