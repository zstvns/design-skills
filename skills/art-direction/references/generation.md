# Producing Imagery — by Tier

Read `.agents/brand.md` → Toolkit first. The spec, the anchors, and the review are the same at every tier; only who presses "generate" changes.

## Tier 1 — the Operator Runs the Generator

Most operators have ChatGPT or Gemini. The trap is a fresh 200-word prompt per image: every one drifts a little, and by the tenth the set has wandered. The fix is to **set the style up once** and keep each request short.

### Set up the workspace once

- **ChatGPT:** create a **Project** for the brand and paste the primer below into the Project's instructions.
- **Gemini:** create a **Gem** for the brand and paste the primer as its instructions.
- **Either:** attach **2–3 anchors from the relevant class to every request.** Attached references are what actually carry the look; the primer carries the rules.
- Save the primer and every prompt pack to `.agents/assets/imagery/prompts.md` so the setup can be rebuilt, shared, or moved to another tool.

### The primer

Write it from the spec — condensed, concrete, no adjectives the spec didn't earn:

```
You generate images for [Brand]. Every image must match this art direction.

FEELING: [the emotional target, one line]

PHOTOGRAPHY: [subjects + casting] · [light: source, direction, hardness] ·
[lens: focal feel, depth of field, angle] · [composition: subject placement,
negative space for type] · [palette: #hex, #hex, #hex dominate] ·
[grade: highlights / shadows / temperature] · [grain]

ILLUSTRATION: [technique] · [line weight + terminals] · [shape language] ·
[palette: exactly these hexes, max N per image] · [perspective] · [detail level]

TEXTURE: [materials, scale, contrast range]

NEVER: no text, letters, numbers, logos, or watermarks. [Class never lists.]

Attached images are the style to match — match their light, palette, grain, and
technique, not their subject.
When I ask for an edit, change only what I name and keep everything else identical.
Default aspect ratio: [e.g. 16:9 for photography, 1:1 for illustration].
```

### Each request

One line, plus the attached anchors:

```
[class] · [subject / scene] · [where it's used + aspect ratio] · [anything unusual]
e.g. Photography · hands sanding a walnut tabletop, late light · web hero 16:9, keep the left third empty for the headline
```

Give each request an id (`photo-hero-01`) and ask the operator to save results with it into `.agents/assets/imagery/inbox/`. Then review (SKILL.md Step 7) and send back either approvals or the next edit.

## Prompt Anatomy — for Standalone Prompts

When there's no primer (a one-off, a tool without projects), write the full prompt in this order — the order models weigh it:

- **Photography:** subject and action → setting → light → lens and camera → composition (and where the negative space goes) → palette hexes → grade and grain → aspect ratio → exclusions.
- **Illustration:** subject → technique → line → shape language → exact palette hexes and color count → perspective → detail level → background → exclusions.
- **Texture:** material → scale → lighting (flat and even, so it tiles) → tonal range → exclusions. Generators don't produce seamless tiles reliably; make it tile in code (crop, mirror, or blend the seams), and prefer a CSS/SVG texture whenever the style allows.
- **Icons:** **don't generate UI icons** — use the chosen library or a custom set on one grid. Generate only larger storytelling or spot icons — as SVG directly with Arrow (Quiver API, or inside Flora or Paper) where you can, otherwise as raster and then vectorized (see `logo-design` → generative-tooling.md → Raster to SVG) so they can be recolored and scaled.

Always end with **no text, no letters, no logos, no watermark.** Type and the mark are placed in layout, never generated.

## Edit Before You Regenerate

Current image models edit in place. When an image is mostly right:

- **Name what to keep, then the one thing to change:** *"Keep the composition, light, and subject identical. Only change: remove the mug on the left."*
- **One change per edit.** Stacked changes come back as a different image.
- **Three edits without convergence → re-prompt.** Something in the base prompt is fighting the spec; fix it there.
- **Promote winners to references.** When an image is approved, attach it alongside the anchors for the next requests in that set — consistency compounds.

## Tier 2 — a Generator Connected to You

Same spec, same anchors, same review — you run it yourself.

- **Flora (MCP):** generate on a project canvas with the anchors attached as references. Flora also hosts Quiver's **Arrow** models, so flat and line-led illustration and spot icons can come out as real SVG, not raster. Once 10+ approved images exist in a class, train a style model on them if the workspace supports it — the strongest consistency lever available. Quote the cost before generating; the operator is paying for every run.
- **Adobe (MCP):** Firefly generation, plus the fix-up tools that make Tier 1 output usable too — generative fill and expand, background removal, select-and-adjust, and vectorizing.
- **Higgsfield, or any connected video generator:** start from an **approved still** (image-to-video) rather than text-to-video, so the grade and composition carry. Take the motion character from `.agents/design.md` (see `motion-design`); keep loops short and seamless; no text.

## Tier 0 — Claude Only

- **Stock, chosen against the spec.** Turn the spec into search terms (the light, the subject, the crop) and search Unsplash, Pexels, and public-domain collections. Pick against the spec and the never list, not against "nice." Record the license.
- **Treat everything.** The grade is what makes free stock read as this brand's.
- **Draw what code draws well** — texture, pattern, geometric illustration, diagrams, product abstractions in SVG.
- **Be honest about the gap.** No generated photography at this tier. If the spec calls for images stock can't supply, write the prompt pack anyway and say which tier would produce them.
