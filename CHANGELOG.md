# Changelog

Plugin-level releases. Per-skill versions live in [VERSIONS.md](VERSIONS.md).

## 1.0.0 — 2026-08-04

Initial public release. Eight skills, installable as a Claude Code plugin or symlinked into any Agent Skills host.

**Skills**

| Skill | Version |
|---|---|
| `brand` | 1.26.1 |
| `brand-strategy` | 1.12.1 |
| `design-principles` | 1.11.1 |
| `creative-direction` | 1.14.1 |
| `logo-design` | 1.11.2 |
| `web-design` | 1.7.1 |
| `collateral-design` | 1.11.1 |
| `motion-design` | 1.6.1 |

**Packaging**

- Added `.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json` — installable via `/plugin marketplace add zstvns/design-skills`
- Added `INSTALL.md` documenting the (entirely optional) recommended connections: Quiver API, Figma MCP, Adobe MCP, Paper MCP, and Flora or Higgsfield for generative rich media
- Rewrote `README.md` with an install path, a five-minute getting-started, an intent → skill routing table, and a roadmap

**Documentation**

- Documented the full context-document architecture. The library reads and writes four `.agents/` documents plus a logo asset directory; only `brand.md` had been documented, while `design.md` — which `web-design` and `collateral-design` both hard-gate on — was not mentioned anywhere.

**Cross-reference correctness**

- Removed every routing reference to a skill that doesn't exist yet. Shipped skills previously handed off to `email-design`, `social-design`, `art-direction`, `brand-naming`, and `design-critique` as though they were installed.
  - `email-design` / `social-design` → `collateral-design`, which already owns social posts, OG images, and email graphics as fixed formats
  - `art-direction` → `creative-direction`, which owns asset direction until a v2 art-direction skill can assume it
  - `brand-naming` → described as a separate naming exercise rather than a skill handoff
  - `design-critique` → prose reworded to "a later critique"; Related Skills entries annotated *(planned — not yet shipped)* so the roadmap signal survives without implying availability
