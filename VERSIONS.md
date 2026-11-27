# Design Skills Versions

Plugin version: **1.8.0** — see [CHANGELOG.md](CHANGELOG.md).

Current versions of all skills. Agents can compare against local versions to check for updates.

| Skill | Version | Status | Last Updated |
|-------|---------|--------|--------------|
| brand | 1.29.0 | Built | 2026-10-28 |
| design-principles | 1.13.0 | Built | 2026-11-26 |
| brand-strategy | 1.12.2 | Built | 2026-10-28 |
| creative-direction | 1.21.1 | Built | 2026-11-26 |
| art-direction | 1.3.0 | Built | 2026-11-18 |
| logo-design | 1.13.2 | Built | 2026-11-26 |
| design-system | 1.1.0 | Built | 2026-11-26 |
| web-design | 1.13.1 | Built | 2026-11-25 |
| collateral-design | 1.15.1 | Built | 2026-11-18 |
| motion-design | 1.6.2 | Built | 2026-11-18 |
| product-film | 1.0.0 | Built | 2026-11-18 |
| design-critique | — | Planned | — |
| email-design | — | Folded into `collateral-design` | — |
| social-design | — | Folded into `collateral-design` | — |
| brand-naming | — | Planned | — |

## Unreleased Skill Changes

- **design-principles 1.13.0** — house-bans Space Grotesk, Fraunces, Instrument (any cut), and Cormorant (any cut) by default; only the owner can lift them with an explicit override in that project's typography foundation or brief, and agents never self-override.
- **design-system 1.1.0** — `check-foundations.py` flags those house-banned families unless `allowBannedTypefaces` records the owner's override; a `foundations-ignore` comment does not lift them.
- **creative-direction 1.21.1** — type sourcing and the boilerplate point at the house bans; the stylescapes specimen example no longer uses Cormorant Garamond.
- **logo-design 1.13.2** — wordmark guidance points at the house bans (owner override only).
- **creative-direction 1.21.0** — FaceTypes is the go-to free source for distinctive type: browse the site or its `fonts.json` catalog, pick against `brand.md`, download from the official source it names, and have the operator read each font's own licence (a listing is not a licence; licences are not all OFL). Self-host approved files as WOFF2 with `@font-face` and a preload. New `references/type-sources.md`.
- **logo-design 1.13.1** — wordmark licensing points at FaceTypes as the go-to free source and at the official-source licence check, not a blanket 'OFL Google fonts' assumption.
- **design-system 1.0.1** — typography foundations record self-hosted font files and point at FaceTypes / type-sources when a role still needs sourcing.
- **web-design 1.13.1** — craft floor and ship check: self-host brand faces (WOFF2, `@font-face`, preload); no production dependency on a third-party font stylesheet.
