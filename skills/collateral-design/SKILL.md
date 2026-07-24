---
name: collateral-design
description: "Apply a brand's defined visual system to fixed-format collateral — pitch and sales decks, one-pagers and sales sheets, print pieces (brochures, flyers, posters, business cards), and paid ads (social, display). Use when the user mentions 'design a deck,' 'pitch deck,' 'sales deck,' 'presentation,' 'slides,' 'one-pager,' 'sales sheet,' 'leave-behind,' 'brochure,' 'flyer,' 'poster,' 'print,' 'business card,' 'ad creative,' 'display ad,' 'banner,' or wants a branded document or graphic that isn't a website. This is where the approved identity is applied to mediums that ship in one shot — a slide on a projector, a sheet in someone's hand, an ad in a feed."
metadata:
  version: 1.0.0
---

# Collateral Design

You apply a brand's **defined visual system** to the collateral family: **decks, one-pagers, print pieces, and ads.** This is an Application skill — the color roles, type rules, motif, and mark from `creative-direction` and `logo-design` become finished, fixed-format artifacts. It sits beside `web-design`: same identity, different mediums.

Read `design-principles` first. Everything here is that skill meeting a page that can't scroll, can't reflow, and often can't be revised after it ships. Hierarchy is the job; restraint protects the message; coherence is *not* repetition — a deck, a sell sheet, and a feed ad can each look different and still be unmistakably one brand.

> **Position in the sequence:** after `creative-direction` (the system), `logo-design` (the mark), and alongside `web-design` — an Application skill. It **consumes** the identity; it does not define one. The medium is not one surface but a *family* of fixed-format deliverables, each with hard constraints web doesn't have: a set trim size, a projector's contrast floor, a thumbnail's legibility, a fold that reorders reading — and **no second chance**. The piece lands in one shot or not at all.

## The Thing That Makes Collateral Different

Web reflows, responds, and ships in commits you can revise tomorrow. Collateral does none of that. Three constraints run through every format here and shape every decision:

- **Fixed format.** A 16:9 slide, a US-Letter sheet, a 1080×1350 ad, a tri-fold's panel — the frame is set before you start, and the content is designed *to* it, not poured into whatever height it needs.
- **One shot.** No hover to reveal, no scroll to continue, no "fold" to push detail below. A projected slide has ~3 seconds; a feed ad has ~1. What doesn't land immediately doesn't land.
- **Often offline / off-platform.** A printed piece is CMYK on stock, not RGB on a screen. A deck gets emailed as a PDF and read with no presenter. A design that only works in your editor, in your color space, with you narrating, is not finished.

Name the format and its constraints *before* you design — that's this skill's version of the front door.

## Front-Door Diagnosis — Settled Brand, or Rework?

Before anything, diagnose where the brand is. Open `.agents/design.md`, `.agents/brand.md`, and `.agents/product-marketing.md` — by this stage **all three should exist.** Then ask one question:

> *Are we applying a settled brand, or reworking one from scratch?*

- **Refine / apply the existing system** ("we have our brand, we need a deck") → Optimization or light Evolution. **Proceed** — this is the skill's home.
- **The system is being defined or changed** (full rebrand, heavy Evolution, or the new type/color/graphics aren't recorded yet) → **stop and route back to `creative-direction`.** Do not design collateral on an undefined system — you'll produce one-off art that nothing else will match, which is the opposite of collateral's job.

**If `.agents/design.md` is missing, that *is* the "go back" signal.** If `.agents/product-marketing.md` is missing or the piece has no copy, route to the marketing library's `copywriting` (or `sales-enablement` for a sales asset's substance) first: **the piece is built around the message, never the reverse.** Routing back holds even if the user already has a logo — a mark without the system around it isn't enough to keep a deck, a sheet, and an ad coherent.

## Message First — Especially Here

Collateral exists to carry a *specific message to a specific moment*: a deck persuades a room, a one-pager survives being left on a desk, an ad interrupts a scroll. The single most important input is what it needs to say and to whom. Read `product-marketing.md` (audience, voice, positioning) and the actual copy. **Your job is to give that message proper emphasis, joy, and delight** — not to build a template and drop text into the boxes. Template-first is the fastest tell of assembled collateral: the deck where every slide is a title and three bullets, the sheet that's a wall of equal-weight paragraphs.

If the copy isn't written, get it written first. **Size follows content, not a grid** — one killer proof point deserves a whole slide; a feature list deserves consolidation, not a cramped two columns.

## Apply the System — By Role, Across the Family

Pull the system from `.agents/design.md`; don't re-derive it, don't invent alongside it. The same role discipline as `web-design`, tuned for fixed formats:

1. **Color by role, in the right color space.** Background, text (primary/secondary), action/accent, support — five stops, not ten. **For anything going to print, work in CMYK and check the translation** — brand RGB/hex often shifts on press (see [references/print.md](references/print.md)). For decks and screen-PDF, RGB is fine, but mind projector contrast: subtle low-contrast pairs that read on your monitor die in a bright room.
2. **Type by role, for contrast not competition.** Display, heading, body — each with a job. Bold is not the default; body is a reading weight. **Fixed formats punish under-scaled type**: a deck read from the back of a room and an ad seen at thumbnail size both demand bigger, more decisive type than a website. Use the licensed brand faces; embed them in the file (PDF/PPTX) so they survive the handoff.
3. **The mark is present but rarely the hero.** A logo belongs on collateral — footer of a slide, corner of a sheet, sign-off of an ad — sized for recognition, not dominance (the exception is a cover or a pure brand piece). Give it clear space; never stretch, recolor off-system, or drop it onto a busy field. Pull the real mark from the identity, not a redrawn approximation.
4. **The motif carries the brand across the family — with restraint where the message must win.** The signature element (pattern, texture, recurring detail) is how a deck slide and an ad read as the *same brand* without being the same layout. This is where distinctiveness must **survive application** (see `design-principles`). Calm it wherever the message leads — a cover, a hero stat, an ad's one line — and let it work harder on connective, lower-stakes surfaces.
5. **One accent, reserved.** Whatever signals "the point / the action" — the one CTA on an ad, the key number on a slide — stays scarce. Sprinkled on every heading and box, it stops meaning anything.

## Design to the Format — Each Has Its Own Craft

Pick the format, then design to its real constraints. Deep dives per medium:

- **Decks & presentations** → [references/decks.md](references/decks.md). One idea per slide; the deck is a *sequence* with an arc, not a stack of independent slides. **Decide presented vs. read up front** — a talk-track deck (sparse, big visuals, the presenter carries the words) and a leave-behind/send deck (self-contained, denser, works with no narrator) are different artifacts, and building one as the other is the classic failure. Kill bullet soup: one statement + one visual beats five bullets. Data slides get **one takeaway, and the takeaway is the title** (charts via `dataviz`). A shared master (margins, safe title zone, footer) holds it together — but **vary the layouts** so it isn't 30 identical slides (rhythm across a deck is the same discipline as rhythm across web sections).
- **One-pagers, sales sheets & leave-behinds** → covered in [references/decks.md](references/decks.md) (the "self-contained surface" section). One primary message + ranked proof, on a single frame that works with **no presenter and no scroll** — it has to answer "what is this and why should I care" the instant it's picked up. Dense is fine; flat is not.
- **Print** → [references/print.md](references/print.md). Real dimensions in mm/in (never px), **bleed / trim / safe-margin** set correctly, **CMYK** and a checked color translation, **300 DPI** raster / vector where possible, rich vs. registration black, fold panels that respect reading order, stock and finish. Ship a **press-ready PDF**, not a screenshot.
- **Ads (paid social & display)** → [references/ads.md](references/ads.md). The **squint / scroll-stop test**: one message, legible at thumbnail, in ~1 second. Design to each **platform's size and safe zones** (feed 1:1 / 4:5, stories & reels 9:16 with UI-safe margins, IAB display sizes). Text discipline — a few decisive words, not a paragraph. **One CTA**, mark present but not shouting. Variations at scale: `ad-creative` owns the copy variants; you own the visual system that holds them together. Motion/video ad → route to `motion-design`.

## Coherence Across the Family — the Whole Point of Collateral

A single beautiful slide is not the job; a *set* that reads as one brand is. When you produce more than one piece — and you usually will — run the family test:

- **Same system, different layouts.** The deck, the sheet, and the ad should share color roles, type, mark, and motif but **must not be the same layout stamped three times.** Coherence is strategic (same feeling, same rules), not literal (same grid). A pile of identical templates is as much a failure as three pieces that don't look related.
- **Coherent with the site.** If `web-design` already shipped, the collateral extends that surface's system — same tokens, same mark treatment, same motif logic — so a prospect who saw the site recognizes the deck.
- **A legitimate flex is allowed.** A conference banner, an event one-pager, a premium leave-behind may stretch the everyday system *if it stays true to the strategy* (see `design-principles` → coherence, not repetition, and `design-critique` for the flex-vs-drift call).

## Tooling & References — Use What's Connected, Fall Back Gracefully

Collateral is produced in the format's native tooling, not custom web code. Lean on what's connected; **never block on a missing tool — degrade to the next option** (full map in [references/tooling.md](references/tooling.md)):

- **`canvas-design` skill** — static art to PNG/PDF (posters, one-pagers, ads, print pieces) with design philosophy built in. A strong default for a single fixed-format graphic.
- **`slide-deck` (makerskills) / presentation tooling** — deck generation and structure.
- **`dataviz` skill** — *any* chart, stat tile, or dashboard on a slide or sheet. Read it before drawing the first chart so the data reads as one system.
- **Adobe MCP** (when connected) — layout and document rendering (`document_render_layout` / `render_vector`), InDesign / IDML for print production, Express, and `font_recommend` / `find_fonts` for licensed faces.
- **Paper / Pencil / Figma MCP** — design canvases when you want to compose visually and export.
- **Marketing library** — `ad-creative` (ad copy variants at scale), `sales-enablement` (one-pager / battle-card *substance*), `copywriting` (the words). This skill designs; those supply the message.
- **HTML/CSS as a fallback layout engine** — for a screen-PDF deck or a web-hosted one-pager, clean HTML/CSS → print-to-PDF is a legitimate path when no design tool is connected. For print, still export to the right size and color space.

## Validate Before You Ship

Run your own output through the same gauntlet the audit runs — **adversarially, on the rendered artifact, in its real context** (see `design-principles` → Judge Your Own Work on the Competitor's Bar):

- **Score it against the audit categories** vs. the confirmed competitor set at a rival's harshness — Creative Direction, Color, Type, Layout. Would this earn a 4–5?
- **Run the collateral-slop check** ([references/collateral-slop.md](references/collateral-slop.md)) and **list what it finds** — bullet soup, template-underneath decks, centered-everything sheets, clip-art icons, stock-photo clichés, CTA/accent bleed, low-contrast-on-projector, RGB-headed-to-print. "No slop here" is a reflex, not a result; produce the list or an earned, specific "none, because —."
- **Test it in its real moment, not your editor.** Project the slide (is it legible from the back, in a bright room?). Shrink the ad to thumbnail (does one message survive the squint?). Export the print piece to a press-ready PDF and check bleed/trim/CMYK. Read the deck as a silent PDF (does it stand without you talking?).
- **Cover-the-logo carry-through.** With the mark hidden, is the piece still recognizably this brand? If the distinctiveness lived only in the logo, the system didn't survive application.
- **Family coherence.** Lay the pieces side by side: one brand, or three unrelated templates? Same feeling, varied layout?
- **Proof the words.** Spelling, grammar, numbers, and — for anything printed — a final read *at size*, because you can't patch a printed run.

## The Deliverable

- **The finished artifact(s)** in the correct output format: a presentable/sendable deck (PDF, and editable source where relevant), a print-ready PDF (CMYK, bleed, correct trim), sized ad exports per placement, or a screen/print one-pager.
- **Optional: a short note** on how the system was applied (which tokens, mark treatment, master/template conventions) appended to the project so later collateral and other mediums stay coherent. Don't duplicate `.agents/design.md` — reference it.

## Non-Negotiables

- [ ] Format and its constraints named up front (trim/size, color space, presented-vs-read, platform safe zones)
- [ ] Front-door diagnosis run; system being defined/changed routed back to `creative-direction` (even if a logo exists)
- [ ] `.agents/design.md`, `brand.md`, `product-marketing.md` read; system applied, not re-invented
- [ ] Message exists and drives the layout — no template-first, no bullet soup, size follows content
- [ ] Color in the right space (CMYK + checked translation for print), five stops, accent reserved; type by role, bold not the default, scaled for the real viewing distance; brand faces embedded
- [ ] Real mark pulled and given clear space, present-not-dominant; motif carries the brand, calmed where the message leads
- [ ] Designed to the format's craft — decks: one idea/slide, presented-vs-read decided, varied masters, one-takeaway data slides; print: bleed/trim/safe, 300 DPI, folds; ads: squint test, safe zones, one CTA
- [ ] Family coherence checked — same system, varied layouts; coherent with the shipped site; any flex is deliberate, not drift
- [ ] Adversarial self-audit on the *rendered* artifact in its real moment (collateral-slop tropes listed, not "none"); cover-the-logo carry-through
- [ ] Correct output format shipped (press-ready PDF / sized exports / sendable deck); spelling, grammar, numbers proofed at size

## Related Skills

- `design-principles` — the craft beliefs this skill applies
- `creative-direction` — supplies the visual system (hard prerequisite); route back for Revolution / heavy Evolution
- `logo-design` — the mark, applied here
- `brand` — the audit whose categories are this skill's acceptance test
- `web-design` — the same system on the web surface; keep collateral coherent with it
- `email-design` / `social-design` / `motion-design` — apply the same system to other mediums; motion/video ads route to `motion-design`
- `design-critique` — judges the finished collateral against the emotional target and the flex-vs-drift latitude
- marketing library: `copywriting` (the words come first), `sales-enablement` (one-pager / battle-card substance), `ad-creative` (ad copy variants at scale)
- tooling (use when connected, fall back gracefully): **`canvas-design`** (static PNG/PDF art), **`slide-deck`** (decks), **`dataviz`** (charts), **Adobe MCP** (layout / print / InDesign), **Paper / Pencil / Figma MCP** (design canvases); see [references/tooling.md](references/tooling.md)
