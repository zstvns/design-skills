# Print

Most collateral never goes to a commercial press — it's a digital PDF, an office/laser print, a screen export. **Reach for this reference only when the piece is genuinely going to a print shop / offset run**, where you can't patch it after the fact. For a laser-printed one-pager or a PDF someone prints at their desk, RGB and sensible margins are fine; don't over-engineer CMYK and bleed for a job that doesn't need it.

*When* it is a real press run, print punishes screen habits hardest: RGB color, px units, "close enough" edges, and low DPI all become defects on paper. The rules below are the production floor for that case — miss them and the piece comes back wrong from the printer, at cost.

## Light First — Printed Black Is the Exception

**Design print light, and make the dark version second.** A near-black printed piece is genuinely rare: it soaks ink, shows every scuff and fingerprint, costs more, and goes muddy on uncoated stock. Even when the brand's screen identity is dark, its printed expression should normally be a light ground with dark ink — the brand earns a **light expression** for paper. Reserve dark stock for a deliberate, premium-feeling exception, and when you do go dark, give it depth (a gradient with light in it) rather than flat black. **Business cards are the notable exception** — a card is small, held, and premium by nature, so a dark card (often dark on *both* sides) is genuinely strong rather than odd. Judge it by the piece, not the rule. Full reasoning in [composition.md](composition.md).

## The Back of a Business Card

Keep it almost empty. The back of a card is **the logo — and at most one creative mark or motif crop.** That's it.

**The spec that works:** place the logo **dead centre of the card, uncropped, at its delivered proportions** — no container, no box, no recolour. If the motif is radial/concentric, **centre it on the card's true centre so it radiates from the logo**; a radial that's off-centre reads as a mistake instantly. Nothing else on the surface: no tagline, no chips, no capability words, no second wordmark, no contact details. It is the one surface in the whole family that exists purely to be an identity moment, and it works by restraint. Resist adding taglines, capability lists, chips, contact details (those belong on the front), or a second wordmark. A dark back with the mark centred and generous space around it is the strong default.

## Margin Is the Space *Inside* the Trim

Print inverts the web's vocabulary: **margin is interior** — the breathing room between the trim edge and the content. Be generous, but **scale it to the format**: a letter sheet wants roughly **1/2–3/4in** (well past the safe line), while a **business card's content may run right up to the safe line** (1/8in) — that is the working edge, not a boundary to hold far off; sitting well inside it strands the type and makes the card read empty. Align just inside safe, then add margin in proportion to the piece's size. Anything meant to run off the edge — a background wash, a cropped pattern, a photo — ignores the margin entirely and extends into the bleed.

## Work in Real Dimensions, Not Pixels

Print is physical. Set the document in **mm or inches at final trim size** — never px. Common sizes:

- **Business card** — 3.5 × 2 in (US) / 85 × 55 mm (EU), plus bleed.
- **Flyer / sell sheet** — US Letter 8.5 × 11 in / A4 210 × 297 mm.
- **Poster** — A3/A2/A1, or 18×24 / 24×36 in.
- **Tri-fold brochure** — Letter/A4 folded into three panels (mind panel widths — the inner fold panel is slightly narrower so it tucks).

## Bleed, Trim, and Safe Margin

Three nested boundaries. Get them wrong and you ship white slivers at the edge or critical text sheared off by the cutter.

- **Trim** — the final cut line; the finished size.
- **Bleed** — extend any color/image that touches the edge **past** the trim, usually **3 mm / 0.125 in**. Cutting is imprecise; bleed guarantees no white edge when the blade drifts.
- **Safe margin** — keep all critical content (text, logo, anything you can't lose) **inside** the trim by ~3–5 mm / 0.125–0.25 in, so nothing important gets cut.

Content to the edge → it needs bleed. Content that must not be cut → keep it inside safe. State both when you set the document up.

**Set the document up at bleed size, not trim size.** A 3.5×2in card is a **3.75×2.25in document** with the trim 1/8in inside it; an 8.5×11in sheet is **8.75×11.25in**. Designing at trim and "adding bleed later" is how pieces ship with white slivers — the background art has to actually exist out there. And **show the bleed when you present it**: a review needs to see the background wash or pattern genuinely running past the trim line, so everyone can confirm nothing critical is out there and nothing stops short of the cut.

## Color: CMYK, Not RGB

Screens are RGB (light); print is **CMYK** (ink). Brand colors defined in hex/RGB **shift on press** — bright screen blues and vivid greens especially. Don't ship an RGB file to a printer and hope.

- **Convert to CMYK and check the translation** against the brand's intended color; if a brand color is critical and shifts badly, consider a **spot / Pantone** color for it (extra cost, exact match).
- **Rich black vs. registration black.** For large solid black areas use a rich black (e.g. C40 M30 Y30 K100) so it reads deep, not washed grey — but **never use registration black (all four at 100%) for artwork or text**; it's for printer's marks only and over-inks/smears. Small black text is 100% K only.
- **Mind ink coverage** on heavy dark designs (total ink limit, typically ~300%) — over-inked areas smear and don't dry.

## Resolution

- **Raster images: 300 DPI at final print size.** A screen image that looks crisp is usually 72 DPI — it will be soft or pixelated on paper. Check the effective DPI *at placed size*, not the source file's nominal size.
- **Prefer vector** for the logo, type, icons, and any line art — vectors are resolution-independent and stay razor-sharp at any size. Keep the mark as vector into the final file.

## Folds, Panels, and Reading Order

A fold **reorders reading.** A tri-fold isn't three columns on one flat sheet — the reader opens it in sequence: front panel → first inside reveal → full inside spread. Design *to* the fold:

- Lay out by panel, in the order the reader encounters them, not as a flat 3-column grid.
- Don't run critical content across a fold line where the crease will break it.
- Account for panel-width differences on tuck folds.

## Stock, Finish, and the Physical Object

The paper is part of the design. **Stock** (weight/gsm, coated vs. uncoated), **finish** (matte, gloss, soft-touch, spot UV), and any **special** (foil, emboss, die-cut) change how color and the piece feel — a color prints differently on uncoated vs. coated. If the brand's feeling is "premium," the stock and finish carry as much of that as the layout does. Note the intended stock/finish in the handoff.

## Ship a Press-Ready PDF

The deliverable is a **print-ready PDF**, not a screenshot or a web export:

- Correct trim size **with bleed included** and (if the printer wants them) crop/registration marks.
- **CMYK** color, fonts **embedded or outlined**, images at 300 DPI, vectors preserved.
- One final read **at size** — spelling, numbers, phone/URL, alignment — because there is no post-ship patch. A typo on a screen is an edit; a typo on 5,000 printed cards is a reprint.
