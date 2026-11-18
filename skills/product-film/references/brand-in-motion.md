# Brand in Motion — Logo, Motif, Color, Truth, Sign-Off

A film is the place a brand is most tempted to show off and least able to take it back. Every rule here exists because the failure it prevents ships to every viewer at once. Each one traces to `design-principles` (restraint, hierarchy, distinctiveness that survives application) and to the skill that owns the asset.

## The Logo

The mark is the brand's most controlled asset. In a film it gets **one reveal, in the end card** — and the reveal exists to land the real, locked mark, not to perform.

### Allowed

- **The lockup assembling from its own parts** — the icon, then the wordmark; or a stroke draw-on of the mark's real paths followed by its real fill.
- **A mask or wipe reveal** — the locked file uncovered by a moving mask.
- **A fade, or a scale settle with at most 4% overshoot** — measured on the rendered scale: the mark never exceeds 104% of its resting size.
- **The icon resolving out of the signature motif** — the motif's own geometry gathering into the mark, when the mark was built from it.

All on the brand's motion tokens — durations from the `--dur-*` scale, curves from the named easings in the Motion System. A premium brand's reveal is slow and settles without overshoot; a playful brand may use `--ease-overshoot` inside the 4% cap.

### Required

- **Every frame reads as the real mark.** Partial, yes — a wipe halfway across, a stroke half drawn. Distorted, never. Render a pose sheet (start, two midpoints, resolved) and check each against the locked file.
- **It ends on the exact locked file** from `.agents/assets/logo/` — placed, not redrawn; the final frames are pixel-identical to the file rendered at that size.
- **Correct clear space and minimum size**, from the Logo section of `.agents/design.md`, measured on the frame at the delivered resolution.
- **The right variant for its ground** — the primary on light, the inverse or white file on dark. A variant is a file choice, never a color edit.
- **It holds the resolved state for at least 1.5s.** A logo the viewer never sees at rest was never seen.
- **Designed once per brand, recorded, reused.** The first film to need a reveal designs it, gets the brand lead's verdict, and appends it to `.agents/design.md` under the Motion System — the reveal type, the parts and their order, durations and curves by token name, the hold, the variant per ground. Every later film reads it and reuses it.
- **The mark passes SAD as a still** (`logo-design`) — the resolved frame, alone.

### Banned

Redraw · morph · squash, stretch, or skew · recolor · gradients · glows · lens flares · chrome or metallic finishes · 3D extrude · particles · glitch · shake · rotating the wordmark · adding a tagline to the lockup (the tagline sits beside it, set separately) · letters bouncing in one by one · a logo never seen at rest.

**When asked for a banned reveal** — "a glowy particle logo reveal," "make it glitch in" — say no plainly, name what breaks (the mark stops being the mark; it can't pass SAD mid-effect), and offer the approved alternative that gets the energy the request was after: an assemble from the mark's own parts on the beat, ending on the locked file and holding for 1.5s. If the brand wants more energy, it goes into the cut and the music, not into the mark.

## Motif and Texture in Motion

- **One motif and one treatment**, both from `.agents/design.md`. Never a second motif, not even quietly — a background grid sitting under the real pattern is a second motif.
- **It moves the way it moves in the muse's world** — a tide pattern swells, a print halftone holds, a blueprint line draws. If the source world doesn't move it, it holds still or drifts slowly.
- **Intensity stays inside the `art-direction` range** recorded for the treatment. The flexible range moves intensity only, never the kind of treatment.
- **Behind content, always.** Never over product UI, never over text. Thin it behind words rather than adding a panel.
- **Grain and halftone are applied at render and stay steady across shots.** One seed, one scale, one intensity for the whole film. **No per-frame boiling** (fresh noise every frame) unless the treatment spec says the texture lives that way.
- **Shaders** follow `art-direction` → [style-specs.md](../../art-direction/references/style-specs.md) → Shader Treatments: earned by the concept and named in `design.md`, mapping only onto the palette's stops, never on the logo, one per system, with a **static poster fallback** that carries the brand on its own. A shader driven by its own clock breaks the pure-function rule — drive its time uniform from the frame.

## Color

- **Render and check in sRGB.** Brand hexes are sRGB; compare like with like.
- **Pick colors from rendered frames**, decoded the way the browser or player will decode them, and compare to the token hexes: **ΔE (CIEDE2000) ≤ 2** for every brand color — ground, ink, accent, the action color where it appears.
- **Tag BT.709** — matrix, primaries, and transfer — on every delivery encode. Untagged files are decoded by guess, and players guess differently.
- **Near-black grounds get an extra check.** A dark ground matching within ΔE 2 can still show as a box edge against the same color on the page; check per-channel code values too (± 2) and view the file over the real page ground.
- **Banding** in gradients, vignettes, and soft shadows: check, and fix it at the encode (see [render-and-verify.md](render-and-verify.md)), never by adding a texture the system doesn't have.
- **Chroma subsampling on thin colored type:** 4:2:0 encoding halves color resolution, and thin colored type fringes. Use 4:4:4 for text-heavy cuts where the destination plays it, or test the 4:2:0 encode and fix what fringes.
- **The protected action color goes only on real CTAs or actions** — the button the viewer would press, the action being taken in the UI. Never on decoration, a motif, a highlight word, or a transition.

## Content Truth

- **Real product UI only.** No invented screens, features, numbers, or testimonials. Demo data comes from what the product and the landing page already show.
- **Stand-in or AI footage is labeled as such** — on the frame in review cuts, in the beat sheet, and in the imagery manifest — until it's licensed or replaced. A treatment doesn't launder it.
- **VO and on-screen copy follow the voice rules** in `.agents/brand.md` — casing, banned words, reading level, claims limits.
- **Copy is written before motion.** The beat sheet's words are approved before a scene is animated around them.

## Sign-Off

| Checkpoint | Who | What they judge |
|---|---|---|
| Beat sheet | **Brand owner** | The message: what the viewer learns, in what order, in which words |
| Style frames (all 3) | **Brand lead first**, then brand owner | On-brand verdict per frame; then the brand owner's reaction |
| Final render | **Brand lead**, then **brand owner** | Brand lead: end card, color, slop check. Brand owner: approval |
| Posting or publishing | **Brand owner** | Nothing goes out without them |

**The film-slop check** — list what you find, per cut; "none" is a reflex, not a result:

- a second motif, or the motif over UI or text
- grain or noise boiling frame to frame
- a shade, border, or card the product doesn't use
- the action color on decoration
- uniform motion — every element entering the same way on the same curve
- linear easing, or a curve or duration not in the tokens
- a bar where nothing moves (other than the end-card hold)
- text covered, crossed, or re-centering while it builds
- any banned logo move, a logo held under 1.5s, or a lockup with a tagline inside it
- invented UI, numbers, or quotes; unlabeled stand-in footage
- a gray box around a dark loop on the page
