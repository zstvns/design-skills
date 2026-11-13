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
| **Texture library** | Each named texture (grain, paper, halftone, noise) with its values and the code that renders it — plus the system's one shader treatment, if the concept earns one (see Shader Treatments below). |
| **Where it applies** | Surfaces and mediums — and which carry the motif without the logo or brand color present. |
| **Where it doesn't** | E.g. never behind body text, never at full contrast, never animated except in X. |
| **Never** | E.g. dot-grids as the default backdrop, a texture that collides with a competitor's. |

### Shader Treatments

A shader treatment feeds an image through a fragment shader — **halftone, pencil or ink, CRT, bokeh** — and renders the result. It's an entry in the texture library, **not a new motif**: the motif still comes from `creative-direction`. Build it in custom code — WebGL/GLSL for live surfaces, the same shader rendered to files for everything static. Most systems don't have one; the ones that do have exactly one.

| Field | What to specify |
|---|---|
| **Earned by** | The muse or idea it traces to, in one line, named in `.agents/design.md` — e.g. "halftone because the muse is 1960s newsprint." If it doesn't trace, it's decoration and fails review. |
| **Treatment** | The one signature treatment and its parameters as values — cell size and screen angle, stroke weight and hatch density, scanline pitch and curvature, blur radius and highlight threshold. |
| **Palette** | The direction's approved color stops, in hex — the only colors the shader may output. It maps luminance onto those stops and **never creates a new hue.** Halftone and ink render in brand ink on brand paper; CRT phosphor and bokeh glow stay in palette. The protected action color is held back from every treatment. |
| **Fixed core / flexible range** | Core: the same treatment, applied the same way, everywhere it appears. Flex: **intensity only** (e.g. cell size 4–8px, mix 60–100%). A different treatment per surface is drift, not range. |
| **Static fallback** | The pre-rendered or static output for every use — print, email, OG and social, reduced-motion, no-WebGL. It has to deliver the brand **at print fidelity** on its own. |
| **Interaction** | *n/a* for most. If pointer-reactive (e.g. smudge on drag): the reduced-motion static version, the performance budget (frame time, GPU cost, shader and texture weight), and the surfaces it may run on. Motion character and the reduced path come from `motion-design`. |
| **Source images** | Which approved-library images it runs on. Each keeps its manifest license and labeling. |
| **Where it applies / doesn't** | The surfaces it lives on. Never the logo; never stacked with a second treatment; reactive versions never on primary content or CTAs. |
| **Never** | E.g. a treatment with no muse behind it, output outside the palette, the action color in the effect, two treatments on one surface, a live-only version with no static. |

The rules behind those fields:

- **Earned by the concept.** The treatment traces back to the direction's muse or idea and is named in `.agents/design.md` with the reason. "It looks cool" and "it feels techy" aren't reasons — re-ground it in a muse, or cut it.
- **Approved palette only.** The shader is a mapping onto the system's color stops, not a color source. If the output introduces a hue the palette doesn't have, the shader is wrong, not the palette.
- **One signature treatment per system.** It's a fixed core item, used the same way everywhere; the flexible range changes intensity only. **Never stack two treatments on one surface**, and **never apply one to the logo** — place the locked file from `.agents/assets/logo/` on top, and the mark must pass SAD without the effect (`logo-design`: Simple holds in plain black & white).
- **Static first.** Approve the static render before the live one. Every treatment has a pre-rendered or static fallback that still delivers the brand at print fidelity — **if the brand only works with the shader running, it fails.** The live version is a layer on a brand that already works.
- **Pointer-reactive effects are motion.** A smudge on drag, a lens that follows the cursor — each needs a reduced-motion static version and a performance budget, takes its character from `motion-design`, and **never sits on primary content or CTAs.** The effect never stands between the reader and the message or the action.
- **The treatment doesn't launder an image.** Images fed into a shader keep their original license and labeling in the manifest. Halftoning an unlicensed or reference-only image doesn't make it usable, and an AI stand-in stays labeled as one after treatment.
- **Cover the logo, then cover the shader.** Run the cover-the-logo test with the treatment off. If the shader is the only thing making the work distinct, the system is weak — type, color, composition, and imagery should already read as this brand underneath it.

Implement it once, the way the treatment recipe is:

```glsl
// Halftone in brand ink on brand paper — the only two colors it can output
precision mediump float;
uniform sampler2D u_image;
uniform vec2 u_resolution;
uniform float u_cell;   // px — the flexible range moves this, nothing else
uniform vec3 u_ink;     // #1b1f2a as 0–1 values
uniform vec3 u_paper;   // #efe6d6 as 0–1 values
varying vec2 v_uv;

void main() {
  vec2 px = v_uv * u_resolution;
  vec2 center = floor(px / u_cell) * u_cell + u_cell * 0.5;
  float lum = dot(texture2D(u_image, center / u_resolution).rgb, vec3(0.299, 0.587, 0.114));
  float radius = (1.0 - lum) * u_cell * 0.7071;
  float dot_ = 1.0 - step(radius, distance(px, center));
  gl_FragColor = vec4(mix(u_paper, u_ink, dot_), 1.0);
}
```

Render the same shader headless (e.g. a Playwright page with a WebGL canvas, exported at print resolution) to produce the static files, so live and static come from one source. Serve the static file under `prefers-reduced-motion` and wherever WebGL isn't available, and show static and live side by side on the board.

## Combination Rules

The classes have to live together. Write down:

- **Which classes share a surface**, and which never do (e.g. "illustration never sits on photography").
- **Layer order** — what's the base, what overlays (e.g. "photo base, motif at 8% in the shadows, icons never over imagery").
- **Shared DNA** — what ties them together on purpose (the illustration's line weight matches the icon stroke; the photo grade and the texture share one grain).
- **Which class leads where** — e.g. web hero: photography; feature sections: illustration; social: illustration + motif; decks: photography as full-bleed dividers.
- **Ratio across a set** — e.g. a 10-post social grid is ~6 illustration, 3 photography, 1 type-only.

## The Style Test

A spec is a hypothesis until it's been run against subjects it wasn't written for. The test sheet is one surface — a grid of results from the same spec — that the user approves the style on.

| Class | The sheet | What it proves |
|---|---|---|
| **Illustration** | 6–8 tiles: a person · an object · a place · an abstract idea the brand must explain (e.g. "handoff," "trust," "speed") · the product as a branded abstraction · a crowded scene · one spot illustration at its real small size · one hero at full width | The technique, line, palette count, perspective, and detail level hold across subjects and scale — and the style can explain this brand's actual ideas, not just draw nice objects. |
| **Photography** | 4–6 tiles: different subjects and settings (people, object, environment, detail) under the same light, lens, and grade | The look lives in the spec's light and grade, not in one lucky subject. |
| **Iconography** | The brand's real concept set (8–12) at every size tier, next to body text in the brand face | Stroke and corners match the type; nothing breaks at the smallest size; one concept per glyph. |
| **Pattern & texture** | The motif and each texture at three scales, behind a headline and behind body text | It stays a backdrop — never fighting the type — at every scale. |

How to run and read it:

- **Same prompt structure for every tile**; only the subject changes. If you change the wording per tile, you're testing your prompts, not the style.
- **Run the sheet twice** (again, or in a second tool). Siblings → the spec holds. Not siblings → name the field that drifted and tighten it, then rerun the tiles that failed.
- **Put two tiles in place** — a website section and a social post — so the style is judged where it will live, with real type and the brand's color around it.
- **Lay the sheet next to the references the user picked.** The style should read as the same world.
- **Record the verdict on the sheet itself**: which tiles passed, what drifted, what changed in the spec. Passing tiles are anchor candidates.

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
