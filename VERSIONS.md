# Design Skills Versions

Plugin version: **1.7.0** — see [CHANGELOG.md](CHANGELOG.md).

Current versions of all skills. Agents can compare against local versions to check for updates.

| Skill | Version | Status | Last Updated |
|-------|---------|--------|--------------|
| brand | 1.29.0 | Built | 2026-10-28 |
| design-principles | 1.12.0 | Built | 2026-11-18 |
| brand-strategy | 1.12.2 | Built | 2026-10-28 |
| creative-direction | 1.20.0 | Built | 2026-11-18 |
| art-direction | 1.3.0 | Built | 2026-11-18 |
| logo-design | 1.13.0 | Built | 2026-11-11 |
| design-system | 1.0.0 | Built | 2026-11-24 |
| web-design | 1.13.0 | Built | 2026-11-24 |
| collateral-design | 1.15.1 | Built | 2026-11-18 |
| motion-design | 1.6.2 | Built | 2026-11-18 |
| product-film | 1.0.0 | Built | 2026-11-18 |
| design-critique | — | Planned | — |
| email-design | — | Folded into `collateral-design` | — |
| social-design | — | Folded into `collateral-design` | — |
| brand-naming | — | Planned | — |

## Unreleased Skill Changes

- **design-system 1.0.0** — new skill: design-system foundations agents can't skip. One page per foundation (color, typography, spacing, radius and nested corners, elevation, grid and layout, motion, iconography), each with sections, a mockup per section, edge cases with fixes, and Instructions for agents (steps, self-checks, do's and don'ts); written with the owner and approved before it counts. Tokens in code are the single source of truth, the design file (Paper by default) and `.agents/foundations/` stay in sync with them, and `scripts/check-foundations.py` (stdlib Python) checks WCAG contrast on token pairs per theme, raw and off-scale values, Tailwind arbitrary and default-palette classes, nested corners, and pages that drift from the tokens.
