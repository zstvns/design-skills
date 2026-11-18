# Design Skills Versions

Plugin version: **1.5.0** — see [CHANGELOG.md](CHANGELOG.md).

Current versions of all skills. Agents can compare against local versions to check for updates.

| Skill | Version | Status | Last Updated |
|-------|---------|--------|--------------|
| brand | 1.29.0 | Built | 2026-10-28 |
| design-principles | 1.11.1 | Built | 2026-08-07 |
| brand-strategy | 1.12.2 | Built | 2026-10-28 |
| creative-direction | 1.19.0 | Built | 2026-11-18 |
| art-direction | 1.3.0 | Built | 2026-11-18 |
| logo-design | 1.13.0 | Built | 2026-11-11 |
| web-design | 1.12.0 | Built | 2026-11-17 |
| collateral-design | 1.15.0 | Built | 2026-11-17 |
| motion-design | 1.6.1 | Built | 2026-08-07 |
| design-critique | — | Planned | — |
| email-design | — | Folded into `collateral-design` | — |
| social-design | — | Folded into `collateral-design` | — |
| brand-naming | — | Planned | — |

## Unreleased Skill Changes

- **collateral-design 1.15.0** (2026-11-17) — self-serve building-block kit: points to design.md and the art-direction specs, 2–3 approved examples per format, every slot locked / flexible / off limits, render checks, and governance for new examples (new `references/self-serve-kit.md`).
- **web-design 1.12.0** (2026-11-17) — interactive pieces built on a tested headless behavior library (stay with shadcn/Radix if present, otherwise Radix, React Aria, or Base UI), never hand-rolled ARIA; ship check tabs through each piece and confirms focus returns to the trigger.
- **web-design 1.11.0** (2026-11-17) — self-reported accessibility checklist in the ship check; each item reported as Passed / Issue found / Needs manual testing / N/A, never Passed unless fully tested (new `references/accessibility-report.md`).
- **art-direction 1.3.0** (2026-11-18) — Shader Treatments spec in style-specs.md (earned by the muse, palette-only, one per system, static first, rights travel with the image), shader tells in imagery-slop.md, and a CRT/chromatic-aberration eval.
- **collateral-design 1.14.0** (2026-11-12) — "shaders where the brand warrants" now links to `art-direction` → Shader Treatments so both skills use one rule.
- **creative-direction 1.19.0** (2026-11-18) — five-field record for every adopted component (what it is, how it's built, behavior, use / don't use, must meet) in the design doc's Application Notes.
- **web-design 1.10.0** (2026-11-12) — match loop against the source for replications/redesigns; agent-parity item in the ship checklist.
- **art-direction 1.2.1** (2026-11-18) — creative-direction's mockup kit added to the related-skills line (base plates for the fixed mockup scenes).
- **creative-direction 1.18.0** (2026-11-11) — present directions in the CF Stylescapes app with a fixed mockup kit (new `references/mockup-kit.md` and `references/presenting-directions.md`).
- **art-direction 1.2.0** (2026-11-11) — node-based generator paths and Adobe MCPs (new `references/node-generators.md`, `references/adobe-mcps.md`, `references/tool-sources.md`).
