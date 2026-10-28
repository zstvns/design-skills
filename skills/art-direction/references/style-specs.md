# Style Specs — the Format per Class

The bar each class must clear lives in `creative-direction` → element-standards.md. This is the **format** that turns the approved style into something two people could execute separately and still converge on. Fill every field or write *n/a — because…*; an empty field is where drift starts.

Every spec opens with its **one-paragraph style** (SKILL.md Step 1) and closes with its **never list**. The fields in between are the paragraph made precise.

## Photography

| Field | What to specify |
|---|---|
| **Subjects** | What's in frame — people, product, place, objects, hands. What's the *ratio* across a set? |
| **Casting** | If people: who, how many, age range, how they relate to camera (never looking / candid / direct), styling and wardrobe. |
| **Environment & props** | Real places vs. sets; what's allowed in frame, what's cleared out. |
| **Light** | Source (natural / practical / studio), direction, hardness, contrast ratio, time of day. |
| **Lens & camera feel** | Wide and close vs. long and compressed; depth of field; height and angle; film vs. digital feel. |
| **Composition & crop** | Where the subject sits; negative space for type; tight crops vs. environmental; the aspect ratios used and where. |
| **Palette anchors** | 2–4 hex values from the system that should dominate; what the action color may and may not do in an image. |
| **Grade** | Highlights, shadows, saturation, temperature — and the treatment recipe it runs through. |
| **Grain & texture** | Amount, size, whether it's in the image or added by the treatment. |
| **Never** | E.g. eye contact with the camera, even lighting, laptops, handshakes, glossy HDR skin, staged diversity-team shots. |

## Illustration

| Field | What to specify |
|---|---|
| **Role** | Where illustration is used and what it does there — explain, delight, abstract the product, fill empty states. |
| **Technique** | Line-led vs. shape-led; flat vs. dimensional; digital-clean vs. hand-made texture. |
| **Line** | Weight (relative to the icon stroke and the body type), terminals, consistency or variation. |
| **Shape language** | Geometric vs. organic; corner radius; how it relates to the mark's geometry. |
| **Fill & palette** | Hex values allowed, how many per illustration, use of tints, whether black is allowed. |
| **Perspective** | Flat, isometric, true perspective — pick one. |
| **Figures** | If people appear: proportions, level of detail, whether faces have features. |
| **Detail level** | How much is drawn vs. implied; what the minimum size is before detail drops out. |
| **Product abstraction** | How the product's UI is distilled — what chrome is cut, what's kept, how real data is represented. |
| **Never** | E.g. the big-limbed "corporate Memphis" figure, gradients-on-everything, 3D clay renders, mixed perspectives. |

## Iconography

| Field | What to specify |
|---|---|
| **Source** | Named library and version, or custom. One source of truth. |
| **Grid & sizes** | Base grid (e.g. 24px), the size tiers used, optical padding. |
| **Stroke** | Weight at each size; how it relates to the body face's stem weight. |
| **Corners & terminals** | Round / square / mixed — and match it to the type. |
| **Fill policy** | Outline only, filled only, or filled-for-active-state; never mixed arbitrarily. |
| **Color** | Default (usually the text color); when color is allowed; never the action color unless it's an action. |
| **Tiers** | Utility (UI) vs. storytelling (feature/marketing) — whether they differ, and how. |
| **Metaphors** | One icon = one concept; the brand's canonical icon for each recurring idea. |
| **Never** | E.g. mixing libraries, emoji as icons, two glyphs for one concept, multicolor icons in UI. |

## Pattern & Texture

`creative-direction` decides the **motif** and where it comes from. This spec covers how it — and the texture library around it — actually gets deployed.

| Field | What to specify |
|---|---|
| **Motif construction** | How it's built (from the mark's geometry, from a muse) — enough that it can be regenerated at any size. |
| **Scale & density** | Allowed scales; how dense it gets; how it crops at edges. |
| **Contrast** | The tonal range it lives in — backdrop, never a fight with the text. |
| **Texture library** | Each named texture (grain, paper, halftone, noise) with its values and the code that renders it. |
| **Where it applies** | Surfaces and mediums — and which carry the motif without the logo or brand color present. |
| **Where it doesn't** | E.g. never behind body text, never at full contrast, never animated except in X. |
| **Never** | E.g. dot-grids as the default backdrop, a texture that collides with a competitor's. |

## Combination Rules

The classes have to live together. Write down:

- **Which classes share a surface**, and which never do (e.g. "illustration never sits on photography").
- **Layer order** — what's the base, what overlays (e.g. "photo base, motif at 8% in the shadows, icons never over imagery").
- **Shared DNA** — what ties them together on purpose (the illustration's line weight matches the icon stroke; the photo grade and the texture share one grain).
- **Which class leads where** — e.g. web hero: photography; feature sections: illustration; social: illustration + motif; decks: photography as full-bleed dividers.
- **Ratio across a set** — e.g. a 10-post social grid is ~6 illustration, 3 photography, 1 type-only.

## The Treatment Recipe

One grade, applied to every image regardless of source. Write the values, then the implementation:

```bash
# Files — e.g. a duotone from the system's ink and paper colors, plus grain
magick in.jpg -colorspace gray +level-colors '#1b1f2a','#efe6d6' \
  -attenuate 0.35 +noise Gaussian out.jpg
```

```html
<!-- Web — the same duotone at render time (ink #1b1f2a → paper #efe6d6, as 0–1 channel values) -->
<svg width="0" height="0" style="position:absolute">
  <filter id="brand-duotone" color-interpolation-filters="sRGB">
    <feColorMatrix type="saturate" values="0"/>
    <feComponentTransfer>
      <feFuncR type="table" tableValues="0.106 0.937"/>
      <feFuncG type="table" tableValues="0.122 0.902"/>
      <feFuncB type="table" tableValues="0.165 0.839"/>
    </feComponentTransfer>
  </filter>
</svg>
<style>.brand-photo { filter: url(#brand-duotone); }</style>
```

The exact recipe is brand-specific — a warm-paper wash, a cool split-tone, a hard black-and-white with grain. What isn't optional: **one recipe, implemented once, run on everything**, and shown as a before→after on the board.
