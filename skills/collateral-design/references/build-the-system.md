# Build the System First, Then Cascade

The heart of collateral design isn't decorating one piece — it's **building a small system and cascading content through it.** Almost all collateral comes in *sets*: a slide deck, a run of conference-speaker social posts, a family of OG images, ten localized one-pagers. Design the template once, stress-test it, then pour the content in. This is the same design discipline the rest of the library already teaches (grids, hierarchy, brand adherence) — pointed at repeated, fixed-format output.

(A note on tooling: CF's original SOP for this was a Figma component/variant/data-merge workflow. Those *mechanics* are Figma-specific and don't apply here — our medium is code you can export, or Paper/Figma when you want a canvas. The **principle** is what carries over: set up the right structure — borders, grids, a design system, patterns — and anything you'd build in Figma you can build in code and export. Keep the principle, drop the plugin steps.)

## 1. Identify the Format and Size First

Before any design, pin the **destination and its dimensions** — fixed-format means you can't defer this:

- **What is it and where does it live?** A 16:9 slide, an 8.5×11 PDF, a 1080×1350 post, an OG image, a printed banner. The destination sets everything downstream.
- **If it's printing**, set up for a **PDF export** with the print constraints handled — **bleed, safe margin, and carryover** across the trim, real dimensions, CMYK. Full detail in [print.md](print.md). Print is *one* destination, not the default — most collateral is screen-first.
- **If it's screen** (social, OG, deck, digital PDF), size to the exact placement and export at native resolution.

Assume you can **export a PDF** for print-bound pieces and sized images for screen — design *to* that output from the start.

## 2. Build One Template — the System for This Set

Design a **single, reusable template** that carries the whole set, built on the same fundamentals as everything else in the library:

- **Structure:** a grid, consistent borders/margins, a spacing rhythm, defined slots for the elements that repeat and the elements that change. Get the structure right and every instance inherits it.
- **Brand adherence:** same typography, same colors, same motif as `.agents/design.md` — the collateral is an extension of the identity, not a fresh look. (Coherence across the family is the whole job.)
- **Mixed media, with variety:** don't let the set go monotonous. Alternate photography, vector, icon, illustration; vary the content-vs-image balance slot to slot; use richer treatments where the brand warrants — gradients, texture, even **shaders** if that's the system's register. Variety *within* one template is what keeps a cascaded set alive instead of feeling stamped.

Anything you can compose in Figma or Paper you can compose in code, **provided you set up that structure first** — the template *is* the system.

## 3. Stress-Test Against the Worst-Case Content — Before You Cascade

The template has to survive the hardest instance, not the tidy mock-up one. Find the edge cases and design to them up front:

- **Longest name / longest headline.** Building speaker posts for a conference? Find the speaker with the **longest name** and design the type treatment around *them* — set the type scale, wrapping, and box so the worst case fits cleanly. If it holds for the longest, every shorter one fits.
- **Most content / least content.** The densest bio, the shortest stat, the missing headshot — make sure the template doesn't break at either extreme (boolean/optional slots for elements that aren't always present).
- **Widest asset, smallest logo.** Odd logo aspect ratios, a portrait vs. landscape photo — the slots must absorb the range.

Setting the system up against the extremes is what lets you cascade with confidence instead of hand-fixing every copy.

## 4. Cascade the Content Through the System

With the template proven, run the real content through it — each instance inheriting the grid, type, color, and treatments, varying only what should vary. The result is a **coherent set**: unmistakably one brand and one system, with enough media and layout variety that no two pieces feel like carbon copies. That balance — *one system, varied content* — is the target for every collateral set.

## The Intake to Pin Down First (CF pattern)

Before designing, get the same things every CF collateral request asks for:

- **What is it** and **what's it for** (the objective — a deck to pitch a room, a PDF to hook a reply, speaker posts to promote a conference).
- **Deliverables** — exact outputs and how many.
- **Design specs** — **dimensions and form factor** (the size-first rule above).
- **Context & the creative-liberty dial** — customer interviews, demos, survey/analytics, past versions; the client sets how much liberty to take (fill the gaps when context is thin, execute tightly when it's rich).

## The CF Collateral Scope — Not Mostly Print

The full family this skill applies a brand system to (CF's "Every Design Deliverable List"), so the scope stays broad:

- Printed collateral (one-sheets, business cards) and **printed banners**
- **Digital marketing assets** — marketing graphics, feature graphics, **open-graph images**
- **Social ads and templates**; **social profile elements** (avatars, headers, covers)
- **Slide decks** (sales, pitch, demo)
- Case studies, enterprise one-pager PDFs, lead magnets / ebooks
- Email and social graphics live here too — this skill owns the static, fixed-format core across every medium. Animated pieces route to `motion-design`. (Dedicated `email-design` and `social-design` skills may split out later; until then, treat those formats as collateral.)
