---
name: product-film
description: "Make product films in code with Remotion — launch videos, muted landing-page hero loops, and promo or social cuts — built from the product's real tokens, components, locked logo files, and voice, cut to the beat, and verified frame by frame before anything ships. Use when the user mentions 'launch video,' 'product film,' 'launch film,' 'hero loop,' 'landing page video,' 'hero video,' 'background video loop,' 'promo video,' 'promo cut,' 'social cut,' 'video ad cut,' 'teaser,' 'demo reel,' 'explainer video,' 'animate our logo for the video,' 'end card,' or 'Remotion.' Not UI motion on a live page (that's motion-design) and not static ads or graphics (that's collateral-design)."
metadata:
  version: 1.0.0
---

# Product Film

You make **films about the product, built out of the product** — a launch video, a muted hero loop for the landing page, a promo or a social cut. Every deliverable is code: a Remotion project that imports the product's real tokens, components, and copy, renders to video, and stays editable. A film that looks like the product made it is the whole goal; a film that looks like a template made it is the failure.

Read `design-principles` first. A film is those beliefs stretched across time: **the message comes first** (the beat sheet is written before a frame is drawn), **hierarchy** (one idea per scene, one thing the eye goes to per beat), **restraint** (one motif, one treatment, one logo reveal), and **judge it on the rendered thing** (decoded frames, not the Studio preview).

> **Position in the sequence:** an Application skill, sibling to `motion-design` and `collateral-design`. It **consumes** the identity — the system from `creative-direction`, the locked mark from `logo-design`, the imagery and treatment from `art-direction`, the motion character from `motion-design` — and puts it in time. It does not define any of them.

## Front-Door Diagnosis — Is There a Brand to Film?

Open `.agents/brand.md` and `.agents/design.md`. A film can't be on-brand if the brand isn't written down.

- **`.agents/design.md` missing, or the system being reworked** → stop and route to `creative-direction`. A film is the most expensive place to discover a palette is still moving.
- **No locked logo files in `.agents/assets/logo/`** → route to `logo-design`. The end card places the locked file; it never draws one.
- **No Motion System — as built in `.agents/design.md`** → use `motion-design`'s token defaults ([motion-floor.md](../motion-design/references/motion-floor.md)) tuned by the directional Motion note, and list that as an assumption in the beat sheet for the brand lead to confirm.
- **No copy, or no `.agents/product-marketing.md`** → route to the marketing library's `copywriting` first. **Copy is written before motion.** A film with placeholder lines is a placeholder film, no matter how well it moves.

**Confirm the tool.** Remotion is free for individuals and small teams, but a company license may be required above that size ([remotion.dev/license](https://www.remotion.dev/license)). Confirm with the brand owner before standardizing on it for their films.

## The Workflow

Seven steps, in order. The beat sheet and the style frames are checkpoints — nothing gets built in full until both pass.

1. **Quick discovery.** Just enough to ask good questions: the product's tokens (colors, type, radius, the easing the UI already uses), its components and which ones run their own clock, the **logo** — the locked files and any logo motion already recorded in `.agents/design.md` — the landing page as it actually renders, the real features and their screens, and `.agents/brand.md` + `.agents/design.md`. → [references/story-and-beats.md](references/story-and-beats.md) → Discovery.
2. **Interview.** Two short rounds. **The brief:** where it plays (landing loop, launch, social), length, format, sound or silent, which features must appear. **The ingredients:** what carries the brand (end-card logo, wordmark, UI only), how words appear, how scenes connect, what else goes in (cursor, partner logos, proof). Offer options named from what discovery found, never generic ones; don't ask what the code already answers.
3. **Message-first beat sheet → the brand owner.** The message, then the words, then the beats: what the viewer should know at each bar, the line on screen, the real UI that proves it. Planned on the music's measured grid. The brand owner approves the message before motion is designed. → [references/story-and-beats.md](references/story-and-beats.md).
4. **Three style frames → the brand lead, then the brand owner.** Rendered stills from the real Remotion project: the opening, one feature scene, and the strongest moment (or the end card). The **brand lead gives the on-brand verdict on all three first**; only frames that pass go to the brand owner. Fold every note into the film's brief before building.
5. **Build.** One Remotion composition per film, scenes as pure functions of time, cues on the bar grid, timing and easing from the brand's tokens. → [references/engine.md](references/engine.md).
6. **Review loop.** Stills at every handoff and key beat, then a half-resolution draft, then fix and repeat. Show frames to the brand owner as each round becomes coherent. → [references/render-and-verify.md](references/render-and-verify.md) → Review.
7. **Final render + verify → the brand lead → the brand owner.** Render, decode every deliverable, and run the checks (duration, seamless loop, color). The brand lead reviews the **end card, the color, and the slop check**; then the brand owner approves. **Nothing is posted or published without the brand owner.** → [references/render-and-verify.md](references/render-and-verify.md).

## The Engine — Every Frame Is a Pure Function of Time

Remotion renders each frame independently, in any order, across many processes. Anything that depends on a clock other than the frame number renders differently every run. So:

- **No CSS transitions or `@keyframes`, no timers (`setTimeout`, `setInterval`, `requestAnimationFrame`), no `Date.now()`, no state carried between frames.** Every value is computed from `useCurrentFrame()` and the cue sheet.
- **A component that runs its own clock gets a frame-driven twin** — same structure, classes, and tokens, with the clock swapped for the frame. Spinners, motion-library components, async image loaders, live shaders.
- **Cues live on the grid, never as literal frame numbers.** Beats come from the audio; scenes cut on bars. A silent loop still gets a tempo grid.
- **Timing and easing come from the brand.** Durations from `motion-design`'s `--dur-*` scale and curves from its named easings (`--ease-standard`, `--ease-out`, `--ease-in`, `--ease-overshoot`) — as recorded in the brand's **Motion System** in `.agents/design.md`. Mirror those values into the film's tokens file with a source comment; **never define a new curve or duration.** The beat decides *when*; the brand decides *how*.

## Brand in Motion — the Rules That Don't Bend

Full rules, with the reasoning and the review checks: [references/brand-in-motion.md](references/brand-in-motion.md).

**Logo.** One reveal per film, in the end card. Allowed: the lockup assembling from its own parts (icon then wordmark, or a stroke draw-on), a mask or wipe reveal, a fade, or a scale settle with **at most 4% overshoot**, and the icon resolving out of the signature motif — all on the brand's motion tokens. Every frame reads as the real mark; it **ends on the exact locked file** from `.agents/assets/logo/`, at correct clear space and minimum size, in the right variant for its ground, and **holds the resolved state for at least 1.5s**. Logo motion is designed once per brand, recorded in `.agents/design.md`, and reused. **Banned:** redraw, morph, squash/stretch/skew, recolor, gradients, glows, flares, chrome, 3D extrude, particles, glitch, shake, rotating the wordmark, adding a tagline to the lockup, letters bouncing in one by one, and a logo never seen at rest. The mark must pass SAD (`logo-design`) as a still.

**Motif and texture.** One motif and one treatment, both from `.agents/design.md`, moving the way they move in the muse's world — otherwise held still or drifting slowly. Intensity stays inside the `art-direction` range; there is never a second motif. The motif sits **behind** content, never over product UI or text. Grain or halftone is applied at render and stays steady across shots, with no per-frame boiling unless the spec calls for it. Shaders follow `art-direction` → [style-specs.md](../art-direction/references/style-specs.md) → Shader Treatments: earned by the concept, palette only, with a static poster fallback.

**Color.** Render and check in sRGB. Pick colors from rendered frames and compare them to the token hexes — **ΔE ≤ 2** for brand colors. Tag BT.709. Check near-black grounds, banding, and chroma subsampling on thin colored type. The **protected action color goes only on real CTAs or actions**, never on decoration.

**Content truth.** Real product UI only — no invented screens, features, numbers, or testimonials. Stand-in or AI footage is labeled as such until it's licensed. VO and on-screen copy follow the voice rules in `.agents/brand.md`, and the copy is written before the motion.

## Craft Floor — Every Film, Whatever the Ingredients

- **Something moves on every beat.** A bar where nothing changes reads as a stall; give it beat-synced life or cut the bar. The one deliberate rest is the end-card hold.
- **Text is never covered** — not by a cursor, a chip, the motif, or a transition — and **a line never re-centers while it builds**: every word holds its final slot from the start, so the line doesn't slide as words arrive.
- **Readable at the delivered size.** Fewer words beat smaller words. Cut any label that restates the picture.
- **Only the product's own surfaces, borders, and shades.** No invented card backgrounds, outlines, or tints.
- **A loop's last frame equals its first.** Verified by decoding, not by eye.
- **Landing loops work muted.** The story reads with the sound off; nothing depends on a line of VO.
- **Keep every render version** — `v1`, `v2`, … — never overwrite one.

## The Deliverables

- **The Remotion project** — one composition per film, the cue sheet as data, the tokens file mirrored from `.agents/design.md`, frame-driven twins documented with what they twin and why.
- **The rendered files, versioned** — per film and per cut, in `out/<film>/vN/`: the master for review, the delivery encodes (muted MP4 + WebM for a landing loop, with-sound MP4 for launch and social), the poster frame, and the verification report.
- **For a hero loop, the handoff to `web-design`:** the encodes, the poster, the reduced-motion behavior, and the size and length budget it met.
- **The logo motion record** — if this film designed the brand's logo reveal, append it to `.agents/design.md` under the Motion System (dated, with the why) so every later film reuses it instead of inventing another.

## Non-Negotiables

- [ ] Front door run: `.agents/design.md`, locked logo files, and approved copy exist — or routed to `creative-direction` / `logo-design` / `copywriting`
- [ ] Remotion licensing confirmed with the brand owner before standardizing on it
- [ ] Discovery, then the two-round interview; options drawn from the real product
- [ ] Message-first beat sheet approved by the brand owner before motion is built
- [ ] Three style frames: brand lead's on-brand verdict first, then the brand owner
- [ ] Every frame a pure function of time — no CSS transitions/keyframes, timers, `Date.now()`, or carried state; clocked components twinned
- [ ] Beats from the audio, scenes cut on bars, something moves on every beat
- [ ] Timing and easing from `motion-design`'s tokens and the brand's Motion System — none redefined
- [ ] One logo reveal, end card only, from the allowed set; ends on the exact locked file, correct variant, clear space, and minimum size; holds ≥ 1.5s; passes SAD as a still; nothing from the banned list
- [ ] One motif, one treatment, behind content, inside the art-direction range; grain steady; shaders per the Shader Treatments spec with a static poster
- [ ] Text never covered; no line re-centers while it builds
- [ ] Real product UI only; stand-in or AI footage labeled until licensed; copy written before motion
- [ ] Protected action color only on real CTAs and actions
- [ ] Every deliverable decoded and checked: duration, loop seam (last frame = first), color (ΔE ≤ 2 to tokens, near-black ground, BT.709 tags, banding, chroma on thin colored type)
- [ ] Hero loops: muted, on-brand poster, reduced-motion shows the poster, inside the size and length budget
- [ ] Every render version kept, none overwritten
- [ ] Final render: brand lead (end card, color, slop check), then brand owner approval; nothing posted or published without the brand owner

## Related Skills

- `design-principles` — the beliefs every rule here traces to (message first, hierarchy, restraint, judge the rendered thing)
- `motion-design` — the timing and easing tokens and the brand's motion character this skill consumes; UI motion on a live page stays there
- `art-direction` — the motif, the one treatment, the imagery library, and the Shader Treatments spec
- `logo-design` — the locked mark the end card resolves to, and the SAD bar it must pass as a still
- `collateral-design` — static ads, social graphics, and the self-serve kit; routes launch films, hero loops, and video cuts here
- `web-design` — places the hero loop on the page (poster, reduced-motion, pause control, performance budget)
- `creative-direction` — the system; route back if it's missing or moving
- marketing library: `copywriting` (the words come first)
- references: [story-and-beats.md](references/story-and-beats.md) (discovery, interview, beat sheet, music grid, scenes and transitions); [engine.md](references/engine.md) (the Remotion workspace, pure-function scenes, twins); [brand-in-motion.md](references/brand-in-motion.md) (logo, motif, color, content truth, sign-off); [render-and-verify.md](references/render-and-verify.md) (review loop, render, decode-and-check, hero loop delivery)
