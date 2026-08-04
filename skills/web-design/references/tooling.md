# Tooling & References — Use What's Connected

The build is faster, and the rhythm richer, when you lean on real tools. The rule is simple: **use what's connected; if it isn't, fall back to the next option and keep moving.** Never block a build on a missing MCP.

## Relume MCP — preferred accelerator

When connected, Relume runs the front half of the build:

- **Sitemap** — map all pages, top-level and parent/child (e.g. `case-studies` → individual case studies). Get the whole map down before wireframing; you don't need every page built, but a clean map keeps the structure honest.
- **Wireframe** — pull base components from its library and arrange flow. The library's variety is a rhythm engine — it pushes you past the default column grid. Mixing and combining components is expected; get the base ones in for a working flow.
- **Style guide** — bring in the fonts and the base color; it expands to the right amount of tints/shades (≈5 stops — don't add more). **The button color you set here is the always-CTA color.** Buttons and cards get defined once and port into the build.
- **Group by format** — keep pages that share a structure grouped (all solution pages one format, varied content), so the system stays legible.

Relume's output is a starting point for **custom code**, not a Webflow handoff — this skill ships bespoke markup (see SKILL.md).

## Fallbacks and enrichments (when Relume isn't there)

- **`frontend-design` skill** — distinctive, production-grade frontend generation. The default when there's no component accelerator.
- **`web-design-guidelines` skill** — the UX/UI and accessibility compliance pass; run before ship regardless of the rest of the stack.
- **Mobbin / Refero MCP** — pattern intake. Before building a pricing table, an onboarding flow, or a comparison section, study how strong products solved it. Understand the pattern, then adapt — don't copy.
- **Reference-site intake** — ask for (or take in) the popular sites the client admires. Name explicitly what to steal (a rhythm, a hero mechanic, a motion idea) and what to avoid.
- **three.js / WebGL** — when a brand genuinely warrants ambitious 3D or interactive depth and the emotional target supports it. Ambition in service of the story, never decoration for its own sake.

## The point

These tools change *how fast* and *how varied* you can build — they don't change the standard. Everything they produce still has to pass the same validation: hierarchy, the reserved forward-CTA, varied rhythm, real assets, distinctiveness that survives cover-the-logo.
