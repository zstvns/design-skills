# Generating the Mark — Tooling

The single hardest-won lesson of this skill: **an agent hand-authoring SVG primitives cannot construct a logo.** Typed-out `<path>` coordinates come out as rough clip-art — uneven curve tension, wrong optical weight, marks that misread. No amount of "trust your eyes" fixes it, because the agent has neither. The mark has to come from a **generative tool**, and the resolved artwork from a **designer**. This reference is how to run that step well.

## The rule

- **Generate the icon/abstract marks; never hand-draw them.** Use a generative surface to produce the sketch options and the candidate vectors.
- **Set the wordmark in a licensed face and *outline* it — never generate the wordmark.** Generative tools garble letterforms (misspellings, broken glyphs). The logotype is chosen type, hand-tracked, then converted to paths (see *Outlining the wordmark* below).
- **An agent-rendered mark is a wireframe stand-in, not delivery art.** Label it as such; a designer refines curve tension, optical weight, and the lockup ratio before it ships.

## Tool-agnostic by design

Do **not** hardcode a provider or an API key into the skill — most users won't have one, and the skill must still run. Route to whatever generative surface the agent has, in rough order of fit for logo work:

- **QuiverAI** — text → **SVG** (best fit: real editable vectors, not raster). Worked example below.
- **Flora** (MCP) — generative design surface.
- **GPT Image 2.0** / any image model — raster sketches; vectorize the winner (e.g. an image→SVG vectorizer) before construction.
- **Figma** (`use_figma` / generative) — draw/assemble vectors on a real canvas a designer can take over.

**Read the key from the environment** (e.g. `QUIVER_API_KEY`) and **degrade gracefully** when it's absent: fall back to code/vector sketches, clearly labeled *low-fidelity*, and still produce breadth across the families. These tools are **optional** — but the results are **substantially better** with them, and the skill should say so rather than pretend hand-drawn output is acceptable.

## Worked example — QuiverAI (text → SVG)

```
POST https://api.quiver.ai/v1/svgs/generations
Authorization: Bearer $QUIVER_API_KEY
Content-Type: application/json
{ "model": "arrow-1.1", "prompt": "<the mark, described>", "instructions": "<constraints>", "n": 1, "stream": false }
```

- Response: `data[].svg` — an SVG string (may contain literal newlines; parse leniently). Debits ~one generation's credits per `n`.
- Output is usually a single/multi `<path>` with no `fill` → **recolor by setting `fill` on the wrapping `<svg>`**, so one generation yields every color variant.
- Prompt discipline: say **"icon only, no text"** (it will otherwise append the name); ask for **flat, single-color, transparent, geometric, production-ready**. Generate several, keep the few that work — and keep the honest rejects (the too-literal one, the collision) for the "walk the ugly" step.

## Outlining the wordmark

The deliverable wordmark must be **font-free vector paths** so the file never re-renders in a fallback. Convert the chosen licensed face to outlines — a designer does this in Illustrator (Type → Create Outlines); headless, `fonttools` does it:

```python
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
font = TTFont("Face.ttf"); gs = font.getGlyphSet(); cmap = font.getBestCmap()
x = 0
for ch in "Wordmark":
    pen = SVGPathPen(gs); gs[cmap[ord(ch)]].draw(pen)
    # emit <path transform="translate(x 0)" d="{pen.getCommands()}"/>, advance x by glyph width + tracking
# wrap in <g transform="translate(0 ascent) scale(1 -1)"> to flip font y-up into SVG y-down
```

Confirm the face's **commercial license** first (OFL Google fonts, Adobe, Pangram Pangram, etc.) — see [logo-construction.md](logo-construction.md).

## Honesty (non-negotiable)

Every mark an agent renders itself is a **wireframe**. Say so, route the construction to real tooling, and never score an agent-drawn SVG as a resolved, distinct mark. This ties directly to the SKILL's Simple/Distinct bar: distinctiveness implied by a rough sketch is not distinctiveness — re-judge once the real vector exists.
