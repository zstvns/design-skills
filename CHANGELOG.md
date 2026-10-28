# Changelog

Plugin-level releases. Per-skill versions live in [VERSIONS.md](VERSIONS.md).

## 1.2.0 — 2026-10-28

**New skill: `art-direction`.** It was held for v2 on the grounds that it needed a connected generator. With the 1.1.0 Toolkit, Claude + ChatGPT or Gemini is a full working tier, so it ships now. It turns the creative direction into the brand's actual imagery across four classes — photography, illustration, iconography, pattern & texture — plus the rules for combining them.

- **Imply, then show.** Each style is first written as a plain paragraph traced to the muses and the emotional target. Then the agent finds real web references for each class (4–6, each captioned with the one quality it contributes, plus a deliberate near-miss), and the user points at what's right. References are marked reference-only or usable. Icons are rendered in candidate libraries using the brand's own concepts rather than shown from marketing pages.
- **A spec two people would converge on.** Field-by-field formats per class, hex palette anchors, a never list, combination rules, and one treatment recipe implemented in code (ImageMagick for files, an SVG filter for the web).
- **Produce by tier.** Tier 2 generates directly (Flora, Adobe, Higgsfield) with anchors attached. Tier 1 gets a primer for a ChatGPT Project or Gemini Gem, so each request is one line plus attached anchors, with an edit-first loop. Tier 0 uses treated free stock and draws in code, and is honest about what it can't produce.
- **Nothing enters the library unreviewed.** Every image is checked against its spec and a new imagery-slop list, judged in place next to the approved set, and given one verdict (approve / edit / re-prompt / reject). Approved files are treated, filed, and logged in `manifest.md` with rights and alt text.
- **Hard rules.** No logo or brand type inside generated images. No "in the style of" a living artist. No fabricated customers, team members, or product shots.
- **New context location: `.agents/assets/imagery/`**, owned by `art-direction` (documented in the README and CLAUDE.md context tables). `.agents/design.md` gains an Art Direction living-record section.

**Wiring**

- `creative-direction` 1.16.0 — the stylescape board gets its imagery from `art-direction`'s board pass; items 4–7 of the system are decided as direction and spec'd there.
- `logo-design` 1.12.0 — new **Raster to SVG** section. ChatGPT and Gemini output raster only, and SVG they write by hand is the hand-drawn failure. Real vectorizing paths are Quiver (`/v1/svgs/vectorizations`, `arrow-2`), Adobe `image_vectorize`, local Potrace, and Vectorizer.AI, plus how to prompt a sketch so it traces cleanly. Quiver examples updated to `arrow-2`.
- `web-design` 1.8.0, `collateral-design` 1.12.0 — place imagery from the `art-direction` library; route new needs back to it.
- `brand` 1.27.1 — lists `art-direction` among the skills that write into `brand.md`.

| Skill | Version |
|---|---|
| `art-direction` | 1.0.0 *(new)* |
| `creative-direction` | 1.16.0 |
| `logo-design` | 1.12.0 |
| `web-design` | 1.8.0 |
| `collateral-design` | 1.12.0 |
| `brand` | 1.27.1 |

## 1.1.0 — 2026-10-28

Ask about tools once, and treat Claude + ChatGPT as a real working setup. Four skills used to ask "what image tools do you have?" separately, and INSTALL described anything short of a connected generator as low-fidelity.

- **Toolkit section in `.agents/brand.md`.** `brand` checks for itself which generator and canvas MCPs are connected and whether keys like `QUIVER_API_KEY` are set, asks one plain question about tools you run by hand (ChatGPT, Gemini, Midjourney…), and records a tier: **0** Claude only · **1** plus a generator you run yourself · **2** a generator connected to the agent. `creative-direction`, `logo-design`, `web-design`, and `collateral-design` read it instead of asking, and write back anything new they find connected. Existing `brand.md` files without the section still work — the first skill that needs it asks once and fills it in.
- **INSTALL leads with the tiers.** Tier 1 (Claude + a generator you run yourself) is documented as a complete working setup: the agent writes the prompt packs, you run them and bring the images back. Connected tools (Quiver, Flora / Higgsfield, Adobe, Figma, Paper) are listed under Tier 2.
- ChatGPT and Gemini are now named explicitly in the prompt-pack path in `creative-direction` and `logo-design`.

| Skill | Version |
|---|---|
| `brand` | 1.27.0 |
| `creative-direction` | 1.15.0 |
| `logo-design` | 1.11.3 |
| `web-design` | 1.7.2 |
| `collateral-design` | 1.11.2 |

## 1.0.1 — 2026-08-21

Documents the `npx` install path. No skill content changed — this worked at 1.0.0, it just wasn't written down anywhere.

- `npx skills add zstvns/design-skills --all` installs all 8 skills into `.agents/skills/` via the [skills](https://github.com/vercel-labs/skills) CLI, wiring up every detected agent (Claude Code, Codex, Cursor, Amp, Cline, Antigravity, and more) and writing a `skills-lock.json`. Verified end to end against the live repo: all 8 discovered with correct descriptions, every `references/` and `evals/` file intact after install.
- README and `INSTALL.md` now lead with npx for non-Claude-Code hosts and demote the manual clone-and-symlink to the "manage it yourself" option.
- Documented that re-syncing is safe: these skills never write state inside their own folder, so an update that replaces the skill files can't destroy a user's brand context, strategy record, or logo assets. (This is the failure mode that cost `makerskills` its users' archives — worth stating as a deliberate property rather than luck.)

## 1.0.0 — 2026-08-07

Initial public release. Eight skills, installable as a Claude Code plugin or symlinked into any Agent Skills host.

**Skills**

| Skill | Version |
|---|---|
| `brand` | 1.26.1 |
| `brand-strategy` | 1.12.1 |
| `design-principles` | 1.11.1 |
| `creative-direction` | 1.14.2 |
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
