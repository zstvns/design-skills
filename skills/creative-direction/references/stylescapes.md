# Stylescapes — Building and Presenting the Three Concepts

For **Revolution** (and serious Evolution) engagements: the discovery from `brand-strategy` becomes three distinct creative concepts, each expressed as a stylescape.

## What a stylescape is (and isn't)

A stylescape is a wide, composed board that shows a concept as **real intended assets** — the actual color palette, the actual typeface pairing set in real headlines, the motif in use, sample UI/hero fragments, photography treatment, iconography — arranged as one continuous visual statement.

- **Not a mood board.** A mood board collects *other people's* work as inspiration; a stylescape shows *this brand's* intended language. Everything on it is a candidate asset, not a reference.
- **Not a CSS-block comp.** The single most common failure is a "stylescape" that is really a tidy web section: a flat neutral canvas, one editorial sans headline, a swatch row, a mono "code" caption, and a dot-grid. That is the category default with a color picker — it is the thing the audit exists to catch, rebuilt by your own hand. A stylescape is a *rendered, art-directed surface*: treated imagery, real texture, depth, overlap, scale contrast, bleed.
- **Expressive and free.** At this stage the concept is not yet constrained by buildability — the point is to make the client *feel* each direction at full strength. Engineering reality gets applied later, in the application skills.

## The anatomy — every element, every board

A concept board that is missing any of these reads as under-built. Work through the list; a stylescape is the *whole set*, composed, not a headline over a swatch row.

1. **A hero line, set for real.** The largest thing on the board is a real brand line, tagline, or a borrowed quote that carries the feeling — set in the actual display face at full scale. Never lorem in the hero. A specific, human line ("It either sounds good or it doesn't." — Duke Ellington; "Own your rebellion"; "Stop being the middleware") does more to fix a direction than any swatch.
2. **Treated imagery or a committed illustration style.** Real photography with a consistent grade/treatment, *or* a single deliberate illustration language (retro-industrial, 8-bit, comic-halftone, engraving, watercolor, 3D render). This is where most AI output is thinnest — it reaches for flat vector shapes and gradients. A strong board almost always carries photographic or illustrative richness with its own treatment, not CSS primitives.
3. **A type specimen — named, by role.** Show the full character set (Aa–Zz, numerals, punctuation/glyphs) of each face, labeled by role (**Primary/Display**, **Secondary/Body**, and any **Special/Mono**). Name the actual typefaces. "A geometric grotesk" is not a decision; "Bebas Neue / Arimo," "Cormorant Garamond / Armin Soft," "Blacker Shield / Barlow," "Special Gothic Expanded / Oxygen" are. Faces with genuine character do more work than any effect.
4. **A color system with roles.** Swatch blocks with named roles (background, ink, action/CTA — protected, support), hex values, and at least one ramp. Color assigned by *meaning*, not decoration.
5. **An ownable motif or texture, derived from the concept.** Something specific: a Greek-key meander, isometric cubes, engraving hatching, a halftone field, topographic arcs, a pixel-block pattern, deco corner frames, drips, a paper/marble/grunge texture. It should trace to the muse or the idea and be deployable without the logo. A dot-grid on flat canvas is the *default*, not an ownable motif — push past it.
6. **A custom icon set** in the concept's voice (stroke, fill, grid consistent).
7. **Applied mockups.** The concept shown *on a real thing* — a phone/laptop/tablet, a product (bottle, package, business card), a poster, an OG image. This is non-negotiable: it is how you prove the direction survives contact with application, and it is exactly the step a concept-only board skips. If you can't show it applied, you haven't finished the concept.
8. **Composition with depth.** Collage layering, overlap, rotation, full-bleed imagery, dramatic scale contrast, asymmetry. A board where everything sits in a centered single column at one scale is assembled, not designed (see `design-principles` → Designed vs. Assembled).

## The three concepts

- Each is a **genuinely different answer to the same Emotional Target** — different muses, different color story, different type pairing, different attitude, different imagery language. Not three tints of one idea. The bar: shown side by side, a stranger would not guess they were for the same brand until told. (Three real directions for one client look as unlike each other as *serious-monochrome*, *3D-vivid-modern*, and *editorial-serif* — or *monster-graffiti*, *hand-drawn-horror*, and *cinematic-poster*.)
- Anchor each in 1–2 of the muses from `brand-strategy`, and name the connection ("Concept B steals the quiet confidence of the Leica body: machined neutrals, engraved type, one red dot of action color").
- Build each to the full anatomy above — far enough to be *felt*, not sketched.

## Composing a stylescape — a coalesced board, not a webpage

**This is the format that separates a stylescape from a comp.** A stylescape is *one composed surface where every element coalesces* — the hero line, the treated imagery, the type specimen, the color ramp, the motif, and the applied mockup all **overlap, interlock, and bleed into each other** so you see how the whole language behaves *together*. It is **not** a vertical stack of full-width website sections (hero, then a color row, then a type row, then a mockup). If it reads like a scrolling landing page, it's wrong — that's the exact failure that makes a concept feel flat and templated.

- **Think bento grid, then break it.** Lay the elements as tiles of *different sizes* — a large hero-image tile, a color tile, a type-specimen tile, a motif tile, an applied-mockup tile — then deliberately **overlap the tile boundaries** so imagery, texture, and illustration spill across cells. The grid is the underlying order; the overlaps are what make it one composition instead of a spreadsheet. Tiles should *talk to each other*, not sit in isolation.
- **Recurring layout archetypes from strong boards** (pick per concept, don't default to one):
  - *Left-anchor hero + right-bleed collage* — display type / a treated subject anchored left; imagery bleeding off the right edge; specimen and color ramp tucked into the midground; a device mockup overlapping the edge.
  - *Full-bleed atmosphere + floating cards* — a textured or photographic full-bleed ground, with type/color/mockups as overlapping cards, polaroids, or torn-paper scraps layered on top.
  - *Panel collage (bento)* — distinct sized panels, but with a subject, motif, or texture crossing panel seams so it reads as one surface.
  - *Diagonal / scattered energy* — rotated photos, torn edges, stickers, scattered motif elements, hand marks (for expressive, high-energy directions).
- **Depth is mandatory:** layering, overlap, rotation, full-bleed imagery, dramatic scale contrast, shadow/lift. Flat elements sitting in a centered single column at one scale = assembled, not designed (`design-principles` → Designed vs. Assembled).
- **Read order still holds** underneath the collage — roughly *foundation* (color, type) → *expression* (motif, imagery) → *application* (mockup) — but expressed as a composition, not a stack.
- Use **real copy** from the brand — lorem hides whether the type serves the message and starves the hero line.
- Include the current logo (Evolution) or a placeholder lockup (Revolution — the mark comes later via `logo-design`; don't let a throwaway logo sketch hijack the concept discussion).

*(The [frontend-boilerplate.md](frontend-boilerplate.md) art-direction, token, typography, texture, and abomination rules apply to the board. Its **build** mechanics — website sections, interaction states, breakpoints, failure paths — are for the application skills, not the stylescape itself. The stylescape shows the language; the application skills build the site.)*

## The board is a live, interactive canvas — not a static image

When the board is delivered digitally (an HTML artifact), **use the medium** — a flat PNG leaves half the tools on the table. Interactivity and motion also *demonstrate* the brand's behavior, which a static image can't.

- **A slow sweeping background element** — a light sweep, a drifting gradient, a moving scan — gives the whole composition dynamism. Add one to *every* concept; it's a reliable lift.
- **Ambient loops and glow** on the signature element and accents (a pulsing telemetry glow, a breathing amber) — subtle, looping, `prefers-reduced-motion`-aware.
- **Hover reveals and shifts** — tiles lift, labels appear, detail surfaces on hover.
- **Tabbed / clickable exploration** — cycle candidate typefaces as **tabs** in the specimen; make **color swatches clickable** (reveal/copy the hex). Let the viewer *operate* the board.
- **Make the signature element genuinely operable, not a picture of one.** If the concept's signature is a knob, it should *turn* (drag to rotate); if it's a motif, it should *respond*. An operable signature demonstrates the brand's behavior and is the single biggest source of delight — a static render of an interactive idea is a missed shot.
- **Reduce the color on screen; reveal the rest on interaction.** Don't lay the whole palette out at once — that reads busy and undoes restraint (`design-principles` → Restraint). Show the dominant neutral + the one accent; let the full ramp/roles expand on click or hover. Hiding-then-revealing is itself interactivity.
- **Run the concept's texture as a living background motif — everywhere.** The concept's signature texture (CRT scanlines, dot-grid, trajectory lines, a staff, an imperial rule) shouldn't sit in one swatch; let it run *through the background* of the whole board and react subtly to interaction. One motif, deployed pervasively, is what makes it feel like a world.
- **Prefer a stylized, moving drop-shadow to a blur-glow on type.** A soft blur-glow reads as the default "make it pop" move; an intentional, slightly-animated *offset* shadow (in the accent color) reads as designed. Small distinction, big difference in whether the type feels authored.
- Keep motion purposeful and reduced-motion-safe (frontend-boilerplate → Motion). The point is life, not a light show.

## Getting the specifics right (the details that separate it from a comp)

- **Balance all text** (`text-wrap: balance`); set an even type rhythm; no orphaned or lopsided lines.
- **Overlaps are intentional and never obscure.** Overlap for depth and to show elements *interacting* — but nothing the viewer needs to read or assess may be hidden behind another element. **Clip and mask cleanly**; keep the underlying grid tidy so the collage reads as composed, not collided.
- **Color, presented as a system — never a single strip.** Each color is its **own block with space around it**, its **shades and tints laid out directly below it**, wrapping to multiple rows. The *presentation* of color is itself a design decision; a row of touching swatches is a spec sheet, a spaced set of color blocks with ramps is a system.
- **Type specimen: name the faces and show real samples** — the actual typeface names by role, with a large character sample for each, cycled via tabs where you're showing options.
- **Show the muse reference image** on the board — the actual thing you're stealing from — next to the abstraction it produced, so the derivation is legible (reference → abstracted element).

## Length: fit it, or extend it — don't cram

A single screen is fine, but only if the content genuinely *fits* with breathing room. If it's crowded or clipping, **extend to a fuller, scrollable page** rather than jamming everything into one viewport. Match the canvas to the content, not the reverse.

## Presenting the set — all concepts, one surface, judged together

Deliver the concepts **navigable on a single surface** so the client sees all three and judges them against each other — never three disconnected files, and never a thin top tab-strip that hides two-thirds of the work.

- **A floating side nav** — the three concepts *stacked*, each showing its **number, name, and a one-line descriptor**, so the whole set is legible at a glance and one click switches the stage.
- **Put the concept's name inside the composition itself** (not only in the nav) — the board should announce what it is.
- **Offer a compare view** — all three side by side, or a horizontal scroll — so they can be weighed directly against one another, not just toggled between.
- **Build all three to the same fidelity.** A stub next to two finished boards biases the pick; if you present three, present *three*.

## The self-audit — adversarial, on the pixels

Before presenting, audit the **rendered board**, not the concept in your head. The concept can be distinctive while the execution is generic — that gap is the default failure mode, and a self-audit that grades intent will miss it every time.

- **Run [../../design-principles/references/ai-slop.md](../../design-principles/references/ai-slop.md) against your own output and *list what it finds*.** Name the tropes actually present on the board — a mono "telemetry/terminal" readout, a dot-grid, a left accent rail, a purple→blue gradient, `rounded-lg` on everything, a centered column with no variety. "No slop here" is not an audit result; a list of what you found (or a genuine, specific "none, because —") is.
- **"Clean" counts as *unassessed*, not passed** (see `design-principles` → Coherent Is Not the Same as Good). A calm, tidy board is a first impression. Inspect for the execution tells before awarding anything.
- **Score against the confirmed competitor set, on the same harsh bar you used on them.** Would this board earn 4–5 on Creative Direction, Color, and Pattern *in its actual category*? Cover the logo: is it unmistakably this brand?
- **The applied mockup must pass too.** A distinctive board with a generic applied screen is a fail, not a pass — the distinctiveness has to survive into application (see `design-principles` → Distinctiveness Must Survive Application).

## Presenting

- Present each concept with its **story first** — the feeling, the muses, why this answers the emotional target — then the board. A stylescape without its narrative is just tasteful arrangement.
- Present all three together so they're judged against each other, not in isolation.
- Ask for a **decision, not a critique**: which one is the brand? Gather reactions per concept, but drive to a pick.

## Synthesis vs. averaging (the "little of each" line)

"Resist a little of each" and "a deliberate graft is allowed" are not in tension — the test is whether **one story survives**:

- **Averaging** takes the safe middle of three directions and produces a fourth that means nothing — the failure mode.
- **Synthesis** is legitimate when the combined direction has its *own* single story that is stronger than either parent, and you can state it in one sentence ("the instrument on the desk *is* the room's console at a smaller scale — one idea at two zoom levels"). If you graft, say plainly that you are combining and re-tell the story; don't present a merge as if the client had simply picked one. Re-validate the graft against the Emotional Target before accepting it.

## After the pick

- Develop the chosen concept into the full element spec ([element-standards.md](element-standards.md)).
- Run the adversarial self-audit above one more time on the developed system.
- Record the system and its rationale in `.agents/brand.md`, then proceed to `logo-design`.
