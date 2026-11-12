# The Mockup Kit — One Set of Scenes, Every Direction

A founder can't compare three directions on three different sets of mockups. If concept A is shown on a billboard and a phone, and concept B on packaging and a tote, the founder is comparing *scenes*, not directions — and whichever designer picked the flattering scene wins. The fix is a **fixed kit**: the same scenes, the same angles, the same words, decided once per engagement before any direction is built. Each direction's assets get applied to it. Only the direction changes.

That makes the mockups a controlled experiment. The founder sees exactly what each direction is going after, because everything else is held still.

> **Board vs. kit.** The stylescape board is where each direction gets its *own* architecture (see [stylescapes.md](stylescapes.md) → Break the template). The mockup kit is the opposite: the scene is the constant, so the direction is the only variable. Vary the board; hold the kit.

## The Kit

**Core scenes — every engagement, every direction (7):**

| # | Scene | What it proves |
|---|---|---|
| D1 | **Laptop — homepage hero.** Desktop browser in a laptop, three-quarter angle, hero and the first fold below it. | The system at its primary touchpoint: type scale, color roles, imagery, CTA. |
| D2 | **Phone — app screen or mobile homepage**, plus the **app icon on a home screen** if the brand has (or will have) an app. Held in hand or on a surface. | Whether the system survives a narrow screen and an icon-sized mark area. |
| D3 | **Social — one feed post and the OG/link card.** Use the platform where the audience actually lives (LinkedIn for B2B, Instagram for consumer); show the link card as it unfurls in a feed or message. | The system at thumbnail scale, competing in a feed. |
| D4 | **Email — newsletter or announcement**, header and first content block, in an inbox or phone frame. | The system inside someone else's chrome, with limited type and layout control. |
| P1 | **Business card and stationery** — card front and back, with a letterhead or envelope, on a desk surface. | The system in print, small, at arm's length; how the motif behaves without a screen. |
| P2 | **Out-of-home — billboard or poster in place** (street, roadside, transit). | The system at maximum scale and minimum read time: one line, one image, one mark. |
| P3 | **Merch — a tee** (or hoodie / tote where that fits the audience better), worn or flat-laid. | The system as something people would choose to wear: one or two colors, the motif or a line alone. |

**Business-type module — add 2–3, chosen by how the business makes money:**

| Business type | Add | Why |
|---|---|---|
| **Software / SaaS** | **Product UI tile** (a key screen or dashboard close-up, rendered in the direction) · **Conference booth or event backdrop** · **Swag set** (sticker sheet, laptop sticker, notebook) | Software has no physical product; events, swag, and the product UI are where it lives off the homepage. |
| **Physical product / CPG / DTC** | **Primary packaging** (box, bottle, bag, label — front and three-quarter) · **Shelf or unboxing** (retail shelf next to neutral competitors, or a shipping mailer opened) · **Product detail page** (digital) | The pack is the brand's most-seen surface; it has to win on a shelf and in a thumbnail. |
| **Services / local / hospitality** | **Storefront or office signage** · **Vehicle, uniform, or wayfinding** · **Proposal or pitch-deck cover** (or a **menu** for hospitality) | The brand is met in a place and in a sales document, not a product. |

A hybrid business picks the module for its **primary revenue surface** and may borrow one scene from another. Cap the kit at **10–12 scenes**. More scenes don't add evidence, they add work and dilute the compare.

**Lock the kit before any direction starts.** Write it into `.agents/design.md` (Presentation → Mockup kit) with each scene's number, camera note, and the copy-deck slots it uses. Every designer works to the same list. No direction gets a bonus scene, and no direction drops one because it looks weak there. A direction that looks weak on the billboard has told the founder something true.

## Rules for Applying a Direction

- **Same scene file.** Every direction sits on the identical base plate: same camera, angle, crop, lens, lighting, and background. Never regenerate the scene per direction. Image models drift on angle and light between runs, and drift reads as a difference between directions.
- **Same words, from the copy deck.** Every line on every mockup comes from the shared copy deck ([presenting-directions.md](presenting-directions.md) → The Shared Copy Deck), slot by slot: the billboard line is the same line in all three, the business card carries the same name and title. Different copy makes the founder judge the writing instead of the design.
- **Same slots, same order.** Every direction's mockup board has the same scenes in the same positions, so a slider or side-by-side compare lines up tile for tile.
- **Only the direction's assets change:** color roles, typefaces, the motif and texture, the imagery and its treatment, icons, the signature treatment, and material choices that are genuinely part of the direction (tee color, paper stock, a foil or a deboss the direction calls for). Scene geometry is never one of them.
- **Same mark treatment.** In Revolution work the logo isn't designed yet: use the same placeholder (the current logo, or a plain set wordmark) in the same position in every direction, labelled as a placeholder. Never let one direction carry a draft mark the others don't have.
- **Apply to the surface, don't float on it.** Artwork follows the surface's perspective, curvature, folds, and lighting: displacement on fabric, specular highlights on gloss, ink sitting *in* uncoated stock. A flat graphic pasted over a photo reads as a comp, and it makes the direction look cheaper than it is.
- **Real production limits.** Print what could be printed: one to three spot colors on a screen-printed tee, a deboss only where the stock takes it, signage legible at its real viewing distance. A mockup that's physically impossible proves nothing about the direction.
- **Digital scenes run live code where the shell allows it.** D1, D2, D4, and the product UI tile are best as real HTML set in a device frame (the direction's tokens and faces, actually rendering), not screenshots, so they stay crisp at any zoom and track changes to the direction.
- **Never let a generator set the type.** Generated images garble lettering and substitute faces. Composite real type in the direction's actual faces on top of the base plate.

## Sourcing the Base Scenes

Build each scene in two layers: a **base plate** (the photo or render of the empty surface, shared by all directions) and an **artwork layer** (each direction's assets, composited onto it).

- **Get the base plates from `art-direction`.** Brief it with the scene list and camera notes; it produces the plates by the Toolkit's tier, the same way it produces any imagery ([../../art-direction/references/generation.md](../../art-direction/references/generation.md)): generated directly with a connected tool, prompt packs for a generator the operator runs, or licensed stock and mockup files. If your installed `art-direction` has node-based or canvas generator references for scenes, use them. Don't assume they exist.
- **Brief the plates neutral.** Empty, blank, or white surfaces, no lettering, no logos, neutral daylight, no brand color in the set. A scene lit warm or staged in one direction's palette biases the compare before any artwork goes on.
- **Generate once, composite per direction.** If you use an image model to apply artwork (an edit or inpaint pass), feed it the *same* base plate every time, then check the result against the plate: angle, crop, light. Anything that moved gets redone.
- **Record the rights.** File the plates in the imagery library under `.agents/assets/imagery/mockup-scenes/`, with a line in `manifest.md` (source or tool, prompt or license, date). Licensed mockup templates carry usage terms. Note them.
- **Reuse across engagements.** A good plate set (laptop, phone, card, billboard, tee) is reusable from client to client. Only the business-type module usually needs new plates.

## How It Maps to the Presentation App

In a presentation app (see [presenting-directions.md](presenting-directions.md)), the kit **is** the Mockups view: one fixed board per direction, the same tile grid and order in each, digital scenes and physical scenes both on it. Because the slots line up, the app's slider and side-by-side compares work on the Mockups view: drag across and the same billboard switches direction. Delivered as a single HTML file instead, the kit is a mockups section per concept, with the same grid in each.

## Per-Direction Mockup Checklist

Run this on every direction before it's presented. Check the rendered mockups, not the plan:

- [ ] Every scene in the locked kit is present, in kit order. None added, none dropped.
- [ ] Each scene sits on the shared base plate: angle, crop, and light match the other directions.
- [ ] Every line of copy comes from the copy deck, in its assigned slot. No lorem, no direction-specific rewrites.
- [ ] Placeholder mark used, in the same position as the other directions, and labelled.
- [ ] Color roles hold: the action color appears only where the system reserves it, even on merch and signage.
- [ ] The direction's own faces render (no fallback fonts in the live digital scenes).
- [ ] Imagery is from the approved or board-pass library, run through the direction's treatment.
- [ ] The motif or signature treatment appears in at least the physical scenes, and works there without the logo.
- [ ] Artwork follows each surface (perspective, folds, light). Nothing floats.
- [ ] Every physical piece could actually be produced as shown.
- [ ] Cover-the-logo on the billboard and the phone: still recognizably this direction (see `design-principles` → Distinctiveness Must Survive Application).
- [ ] Squint at the kit next to the other directions: the scenes are identical and the directions are not.
