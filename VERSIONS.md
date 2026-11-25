# Design Skills Versions

Plugin version: **1.8.0** — see [CHANGELOG.md](CHANGELOG.md).

Current versions of all skills. Agents can compare against local versions to check for updates.

| Skill | Version | Status | Last Updated |
|-------|---------|--------|--------------|
| brand | 1.29.0 | Built | 2026-10-28 |
| design-principles | 1.12.0 | Built | 2026-11-18 |
| brand-strategy | 1.12.2 | Built | 2026-10-28 |
| creative-direction | 1.21.0 | Built | 2026-11-25 |
| art-direction | 1.3.0 | Built | 2026-11-18 |
| logo-design | 1.13.1 | Built | 2026-11-25 |
| design-system | 1.0.1 | Built | 2026-11-25 |
| web-design | 1.13.1 | Built | 2026-11-25 |
| collateral-design | 1.15.1 | Built | 2026-11-18 |
| motion-design | 1.6.2 | Built | 2026-11-18 |
| product-film | 1.0.0 | Built | 2026-11-18 |
| design-critique | — | Planned | — |
| email-design | — | Folded into `collateral-design` | — |
| social-design | — | Folded into `collateral-design` | — |
| brand-naming | — | Planned | — |

## Unreleased Skill Changes

- **creative-direction 1.21.0** — FaceTypes is the go-to free source for distinctive type: browse the site or its `fonts.json` catalog, pick against `brand.md`, download from the official source it names, and have the operator read each font's own licence (a listing is not a licence; licences are not all OFL). Self-host approved files as WOFF2 with `@font-face` and a preload. New `references/type-sources.md`.
- **logo-design 1.13.1** — wordmark licensing points at FaceTypes as the go-to free source and at the official-source licence check, not a blanket 'OFL Google fonts' assumption.
- **design-system 1.0.1** — typography foundations record self-hosted font files and point at FaceTypes / type-sources when a role still needs sourcing.
- **web-design 1.13.1** — craft floor and ship check: self-host brand faces (WOFF2, `@font-face`, preload); no production dependency on a third-party font stylesheet.
