# Tooling for Collateral

Collateral is produced in the format's native tooling, not custom web code (that's `web-design`'s medium). The rule from every skill in this library holds: **use what's connected, never block on a missing tool, degrade to the next option.** Pick by format and by what's available.

## By Format

| Format | First choice | Fallbacks |
|--------|--------------|-----------|
| One fixed-format graphic (poster, one-pager, ad, flyer) | **`canvas-design`** skill (PNG/PDF, design philosophy built in) | Adobe MCP render; Paper/Pencil/Figma canvas → export; HTML/CSS → print-to-PDF |
| Deck / presentation | **`slide-deck`** (makerskills) / presentation tooling | HTML/CSS slides → PDF; Figma Slides; Adobe MCP |
| Any chart / stat / dashboard on a slide or sheet | **`dataviz`** skill (read before drawing) | — (always route charts through it) |
| Print production (brochure, business card, multi-page) | **Adobe MCP** — InDesign / IDML, `document_render_layout` / `render_vector` | `canvas-design` → CMYK PDF export; layout in a design canvas → press-ready PDF |
| Visual composition you want to see and iterate | **Paper / Pencil / Figma MCP** design canvas | — |

## The Tools

- **`canvas-design` skill** — creates static visual art in PNG and PDF with design philosophy baked in. The strong default for a single fixed-format piece (poster, ad, one-pager, print flyer). Original work only — never copy an existing artist's piece.
- **`slide-deck` (makerskills)** — deck generation and structure. Good for getting a full deck scaffolded to the brand's system, then refined.
- **`dataviz` skill** — the mandatory stop before *any* chart, stat tile, meter, KPI row, or dashboard on a slide or sheet. It makes the data read as one system (form heuristic, color formula, mark specs) and takes a brand palette. Don't hand-draw charts around it.
- **Adobe MCP** (when connected) — `document_render_layout` / `document_render_vector` for laid-out documents, `convert_pdf_to_indd` / `export_idml` for InDesign print production, Express for quick branded pieces, `font_recommend` / `find_fonts` for licensed faces. The most complete path for real print and multi-page layout.
- **Paper / Pencil / Figma MCP** — design canvases for composing visually and exporting to code or image. Use when you want to lay out by eye and pull exact values on export.
- **HTML/CSS as a layout engine** — a legitimate fallback for a screen-PDF deck or a web-hosted one-pager: clean HTML/CSS, then print-to-PDF. For **print**, still export at the correct trim size **and convert to CMYK** — HTML is RGB by default (see [print.md](print.md)).

## Where the Message Comes From (not a design tool — a prerequisite)

- **`copywriting`** — the words for any piece. Design serves the message; the message comes first.
- **`sales-enablement`** — the *substance* of a sales one-pager / battle card (what to claim, proof points, competitive positioning). You rank and stage it; this supplies it.
- **`ad-creative`** — ad copy variants at scale. Pair it with a visual system flexible enough to carry the variants and coherent enough to read as one brand (see [ads.md](ads.md)).

## Fonts and Assets

- Use the **licensed brand faces** from `.agents/design.md`. **Embed them** in the deliverable (PDF/PPTX embed, or outline for print) so the file survives handoff without the fonts installed.
- Pull the **real mark** from the identity, not a redraw. For print, keep it **vector**.
- Never block on a missing MCP or skill — if the preferred tool isn't connected, drop to the next row of the table and note the substitution.
