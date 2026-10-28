---
name: art-direction
description: "Turn the creative direction into the brand's actual imagery — photography, illustration, iconography, and pattern & texture, and how they combine. Implies each style from the brand strategy, finds real reference images on the web that fit the mood, writes a spec tight enough that two people would converge on it, then produces assets with whatever the operator has (ChatGPT or Gemini prompt packs, a connected generator like Flora, or treated free stock), reviews every result against the spec, and files an approved library. Use while building creative-direction stylescapes, whenever a page or piece needs on-brand imagery, or when the user mentions 'art direction,' 'photo style,' 'photography direction,' 'illustration style,' 'icon style,' 'image style,' 'find reference photos,' 'mood images,' 'what should our photos look like,' 'generate brand images,' 'ChatGPT image prompts,' 'make our images on-brand,' 'pattern,' or 'texture.'"
metadata:
  version: 1.0.0
---

# Art Direction

You make the brand's **imagery** — every picture, drawing, icon, and surface it shows — look like it came from one world, and that world is the one the strategy described. `creative-direction` decides the direction; this skill turns it into four concrete styles and the assets themselves:

- **Photography** — what's in frame, how it's lit, shot, and graded
- **Illustration** — the drawn language, including branded product abstractions
- **Iconography** — the symbol set and its rules
- **Pattern & texture** — the motif's deployments and the surface library
- **…and the combination** — how the classes coexist on one surface

Read `design-principles` first. Everything here is its rules applied to pixels: emotion before execution, restraint, coherence not repetition, and "state why, or the default stands."

> **Position in the sequence:** an extension of `creative-direction`. It runs **inside** it for the stylescapes (the *board pass*), again on the **approved direction** (the *system pass* — before or after `logo-design`), and any time an application skill needs imagery the library doesn't have yet.

## Prerequisites

Open `.agents/brand.md` and, for a system pass, `.agents/design.md`. You need:

- The **Emotional Target** and the **Muses** with their stealable cues — if missing, stop and route to `brand-strategy`. An image style chosen without them is stock-photo taste.
- For a system pass, the **chosen direction** in `.agents/design.md` — if there isn't one, route to `creative-direction`. Don't art-direct a system that hasn't been picked.
- The **Toolkit** — what the operator can generate with, and their tier. If it's missing, run the capture step from `brand` (detect what's connected; ask once about tools they run by hand) and write it back.

## Two Depths

- **Board pass** (inside `creative-direction`, once per concept) — enough to make each stylescape real: the four styles in a paragraph each, a reference set, and a handful of hero assets produced and treated. Breadth across concepts, not a library.
- **System pass** (the approved direction) — the full spec per class, the anchor set, the treatment recipe, the combination rules, and an approved library the application skills draw from.

## Step 1 — Imply the Styles From the Strategy

Before you search or generate anything, write each style in plain words, derived from the emotional target and the muses — the same **abstract the muse** move `creative-direction` makes, applied to imagery. For each class, one short paragraph a non-designer could picture:

> *Photography:* "Working hands and materials, close and unposed. Hard window light from one side, deep shadow, nothing lit evenly. Warm highlights, cool blacks, visible grain. Never a face looking at the camera."

- **Trace every sentence to a muse cue or a feeling.** "Hard side light" because the muse is a machinist's workshop at dusk; "never a face to camera" because the target is *quiet competence*, not *friendly*. Untraceable lines are defaults — cut them.
- **"None" is a valid answer, stated explicitly.** A brand with no photography or no illustration says so, with the reason — otherwise every future deck fills the vacuum with mismatched stock (see `creative-direction` → element-standards.md).
- **Name what the category does, and step out of it.** If every competitor runs bright, diverse-team-around-a-laptop stock, that's the lane you're leaving — say so in the paragraph.

## Step 2 — Show, Don't Describe: Find References on the Web

A paragraph about light is abstract until the user can point at it. **Go find real images that fit each style and put them in front of the user** — *"Based on your strategy, here are a few photos I found that have the feeling we're after."* Full method, sources per class, and the board format: [references/sourcing-references.md](references/sourcing-references.md).

- **4–6 per class, each captioned with the one quality it contributes** — "the light," "the crop," "the grain," "how the figure sits in the space." A reference is a pointer to a specific quality, not a vote for the whole image.
- **Include one deliberate near-miss per class** and say why it's close but wrong. Where the user draws that edge tells you more than ten approvals.
- **Let them point.** Record which images landed, which didn't, and *what about them* — then revise the paragraph from Step 1 to match what they actually responded to.
- **Mark every reference `reference only` or `usable (license)`.** Unsplash and Pexels images and public-domain museum collections can ship; a photographer's portfolio or a Behance piece cannot. Reference-only images never appear in a deliverable.
- **Icons and texture are rendered, not just found.** For icons, render the brand's own concepts in 2–3 candidate libraries side by side at real size. For texture, render CSS/SVG candidates directly next to the material references.

## Step 3 — Write the Spec

Turn the agreed paragraph and the picked references into a spec tight enough that **two people working separately would produce images that look like siblings**. Field-by-field templates per class, plus the combination rules: [references/style-specs.md](references/style-specs.md).

- **Specifics, not adjectives.** "Moody" is not a spec; "single hard source at 45°, shadows held at 10–15% luminance, no fill light" is.
- **Palette anchors in hex**, from the system's color roles. The action color stays out of imagery unless the spec says exactly where it may appear.
- **A never list per class** — the things that would instantly pull an image out of the brand world. It's often the most useful part of the spec.
- **Combination rules** — which classes share a surface, what layers over what, how icons relate to the illustration's line, where texture unifies everything, and which class leads in which medium.
- **The treatment recipe** — the one grade every image runs through, whatever its source. Write it as values (duotone stops, grain amount, contrast curve), and implement it once in code: an ImageMagick or `sharp` script for files, an SVG filter or CSS for the web. Show it as a before→after.

## Step 4 — Pick the Anchors

Choose **3–6 anchor images per class** — the best embodiments of the spec, from usable references or approved generations. They are the brand's visual memory: every later generation is made *with the anchors attached as references*, which is what keeps image #40 looking like image #1. Store them in `.agents/assets/imagery/anchors/`.

## Step 5 — Produce, by Tier

Read the Toolkit and take the most capable path available. Full playbooks — the ChatGPT Project / Gemini Gem primer, prompt anatomy per class, edit-first iteration, and connected-tool notes: [references/generation.md](references/generation.md).

- **Tier 2 — a generator connected to you** (Flora, Adobe Firefly, Higgsfield…): generate directly, anchors attached as style references. Where the tool can train a style model on the anchors, do it once the anchor set is approved — it's the strongest consistency lever there is.
- **Tier 1 — a generator the operator runs** (ChatGPT, Gemini, Midjourney): write a **primer** — one block of instructions for a ChatGPT Project or Gemini Gem that carries the whole spec — so each request becomes one line plus 2–3 attached anchors. Save the primer and every prompt pack to `.agents/assets/imagery/prompts.md` for reuse. The operator saves results to `.agents/assets/imagery/inbox/`; you take it from there.
- **Tier 0 — Claude only:** usable free stock (Unsplash, Pexels, public-domain collections) chosen against the spec and run through the treatment; icons from the chosen library; illustration and texture in SVG/CSS where the style allows. Say plainly that generated photography isn't available at this tier rather than faking it.

**Edit before you regenerate.** When an image is 80% right, ask for the specific fix ("keep everything; drop the second figure; cool the shadows") — current models edit in place. Regenerating throws away what was working.

## Step 6 — Review Every Image Against the Spec

**Nothing enters the library unreviewed.** Look at each image — actually look — and check it rule by rule against its class spec and the never list, then against [references/imagery-slop.md](references/imagery-slop.md) — the tells that mark an image as generic or AI-made.

- **List what you find**, per image. "Looks on-brand" is a reflex, not a review; "clean" counts as unassessed.
- **Give one verdict per image:** **approve** · **edit** (with the exact edit prompt) · **re-prompt** (what to change in the prompt and why) · **reject**.
- **Judge it in place, not alone.** Drop the candidate into the surface it's for — the hero, the post, the slide — next to the approved set. An image can pass on its own and still break the family.

## Step 7 — Treat, File, Record

- **Run every approved image through the treatment recipe.** Mixed sources — generated, stock, shot — only read as one world after one grade.
- **File it:** `.agents/assets/imagery/approved/<photography|illustration|icons|texture>/`, and add a line to `.agents/assets/imagery/manifest.md` — file, class, source or tool, prompt (or source URL), rights, **alt text**, date, intended use.
- **Record the spec** as the **Art Direction** section of `.agents/design.md` (living record — see its template), and the distilled lines into the Photography, Illustration, Iconography, and Pattern & Texture fields of `.agents/brand.md`.

## Rules That Don't Bend

- **No logo and no brand type inside generated imagery.** Generators garble both, and a baked-in mark can't be reused or updated. Set the type and place the locked logo files (`.agents/assets/logo/`) on top, in layout.
- **Never prompt "in the style of [a living artist or photographer]."** Describe the qualities you want — light, line, palette, texture. It's both the ethical line and the better prompt.
- **Never fabricate the real.** No generated "customers," "team members," or testimonial portraits presented as real people; no generated likeness of a real person; no generated product shots passed off as the actual product. Show the product through real screenshots or branded abstractions (see `creative-direction` → element-standards.md).
- **Reference-only never ships.** If the right image is a reference you can't license, generate or shoot toward it with the anchors — don't use it.
- **Rights are recorded, not assumed.** Note each tool's commercial-use terms and each stock license in the manifest.

## The Deliverable

1. **The Art Direction section in `.agents/design.md`** — the four specs, combination rules, treatment recipe, anchor list, and the tool notes (which generator, which primer).
2. **The distilled lines in `.agents/brand.md`** — Photography, Illustration, Iconography, Pattern & Texture.
3. **The library** — `.agents/assets/imagery/` with `anchors/`, `approved/`, `manifest.md`, the reference board and its source list in `references/`, and `prompts.md` at Tier 1.
4. For a board pass: the produced, treated hero assets handed back to `creative-direction` for the stylescapes.

## Non-Negotiables

- [ ] Emotional target, muses, and (system pass) the chosen direction read first — or routed upstream
- [ ] Toolkit read; production path matches the tier, and the tier is stated honestly
- [ ] Each style written in plain words and traced to a muse or the feeling; "none" stated explicitly where it applies
- [ ] Web references shown per class, captioned, with a near-miss; picks recorded; every reference marked reference-only or usable
- [ ] Spec per class with hex anchors, a never list, combination rules, and one treatment recipe
- [ ] Every image reviewed against its spec and the imagery-slop list — findings listed, one verdict each, judged in place
- [ ] No logo or brand type in generated images; no fabricated people or product; no reference-only image shipped
- [ ] Library filed with manifest (rights + alt text); spec written to `.agents/design.md`, distilled to `.agents/brand.md`

## Related Skills

- `design-principles` — the craft beliefs every spec traces to
- `brand-strategy` — supplies the emotional target and the muses (hard prerequisite)
- `creative-direction` — decides the direction and the motif; calls this skill for the board pass; its element-standards.md sets the bar each class must clear
- `logo-design` — the locked mark placed over imagery, never generated into it; its geometry seeds the pattern
- `web-design` / `collateral-design` — draw imagery from the approved library; route back here for anything new
- `motion-design` — motion character for any generated video or animated asset
