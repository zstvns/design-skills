# Brand Context — Magister
<!-- This file is .agents/brand.md. With no project folder (the Claude app), it lives in the Claude Project's knowledge: read it from there, and whenever you change it, hand back the complete updated file so the user can replace the old one. -->

*Last updated: 2026-10-29*
*Sources ingested: the three-concept stylescape, the logo identity presentation and locked logo files, the built homepage (v5) and its motion pass, the collateral viewer. Worked example — see `../README.md` for what was reconstructed.*

## Brand at a Glance
**Name:** Magister
**Name usability:** Passes the radio test (one obvious spelling) and the mouth test (three clean syllables). Latin *magister* — "master," "teacher," and the title of a late-Roman supreme commander; the command reading is the one the identity leans on, abstracted rather than worn (no Roman type, no laurels).
**One-liner:** Your autonomous AI marketing agent — describe the work in plain English; it executes across 100+ real tools and hands it back for your approval before anything ships.
**Category:** AI marketing agents. The shelf people put it on: "AI marketing tools" — next to copy generators and marketing suites.
**REO depth:** Revolution — a new brand with nothing to keep. Three concepts were explored; 01 Mission Control was chosen.

## Emotional Target (Big Three)
The feelings this brand must produce. Everything is judged against these.
1. **Command** — the operator runs the operation; the software reports to them.
2. **Precision** — every number, label, and motion is exact. Nothing vague, nothing decorative.
3. **Confidence** — it's safe to let it run: nothing ships without approval, and you can see everything it did.

## Muses
| Muse | What we steal (the visual cue) |
|------|-------------------------------|
| Apollo Mission Control (NASA, public domain) | The deck: rows of consoles reporting to one room; telemetry readouts; the launch verbs — arm, hold, fire, go. Amber-on-black as the light of a working room at night. |
| Teenage Engineering OP-1 | The intensity dial and the keycaps — machined, tactile controls with exact labels. The throttle that runs sync-blue to amber as it climbs. |
| Apollo 11 launch (NASA, public domain) | The payload in motion — the trajectory arc, plotted and dotted ahead of the craft. |

## Audience
See `.agents/product-marketing.md` for ICP and positioning when it exists. In short:
**Primary:** SaaS founders doing their own marketing, solo marketers, and small growth teams.
**They already find these beautiful / trustworthy / premium:** precise hardware (Teenage Engineering), terminal tools, real operations rooms — things that show their work.

## Visual System

### Color
| Role | Color | Value | Ramp (base +2 shades +2 tints) |
|------|-------|-------|-------------------------------|
| Background | Ground | `#0F0C07` (web) · `#F6F1E7` (light — print and collateral) | panels `#1B160E` `#221B11` `#2A2114` · seams `#3A3020` `#4A3D24` |
| Text — primary | Bone | `#ECE4D6` (on dark) · `#14100A` (on light) | `#7C725C` `#B4A88F` `#D4C8B4` **`#ECE4D6`** `#F7F1E6` |
| Text — secondary | Dim / Faint | `#C2B69C` / `#988B71` | — |
| Accent — brand energy & status | Amber | `#E8830C` (text on light: `#AD5D03`) | `#8A4B06` `#B8660A` **`#E8830C`** `#F4A93C` `#FBD08A` |
| **Action — the CTA** | Go green | `#3FA968` (on light: `#1B7345`) | `#2E5A3E` … `#3FA968` `#63C98A` … `#B4E2C4` |
| Support — syncing / idle | Sync blue | `#4E7BC4` | `#2C4A78` `#3C6199` **`#4E7BC4`** `#7BA0DC` `#B0C9F0` |
| Support — abort only | Alert red | `#D2542E` | `#7A2E18` … `#EFB09A` |
**Action-color protection:** green appears only on things that do something — CTAs, the recommended plan, the "Shipped" state. Amber is never a button. Red is abort/error only.

### Typography
| Role | Typeface | Weights allowed | Style rules |
|------|----------|-----------------|-------------|
| Display | Chakra Petch (OFL) | 600 leads · 700 for the hero and the bignum only | Sentence case; tight (−.01em); `text-wrap: balance` |
| Heading | Chakra Petch | 600 | — |
| Body | IBM Plex Sans (OFL) | 300 · 400 · 500 · 600 | 16px base, 1.55 line height |
| Telemetry / labels | JetBrains Mono (OFL) | 400 · 500 · 600 | Uppercase, tracked .14–.22em, small; for eyebrows, labels, data, buttons |
**Prohibited:** italics in labels or data; bold as a default weight; system fonts for the wordmark (it ships outlined); any Roman/inscriptional face.

### Composition
**Grid / spacing logic:** 1180px shell; sections `clamp(3.5rem, 8vw, 6.5rem)` tall; a 48px background grid; 8px panel radius; 999px pills reserved for actions.
**Density:** dense where the product reports (logs, telemetry, tables), quiet everywhere else — dense instruments in an open room.
**How the eye is directed:** one amber "live" element per view; dim headlines with a single bone-white word (`.dim-head`); giant ghost numerals behind the statements they number.

### Pattern & Texture
**Patterns:** the 48px grid; the dotted trajectory arc (dash 2·7); concentric dotted rings (print and social).
**Textures / surface treatment:** CRT scanlines (inside photography only); a slow amber light sweep; machined corner brackets on panels.
**Motifs:** the trajectory — planned work dotted, done work solid, the live point amber.
**Where they apply / don't:** never behind body text; scanlines never on UI or type; the grid always faint (≤ .03 alpha).

### Illustration
**Style:** "flight plans" — technical line diagrams. Bone line at 1.5px, one amber active element, planned paths dotted, mono labels, orthographic. People are never drawn; the operator is a marked point.
**When used:** explaining how the product works; feature cards; empty states.
**Branded / product abstractions:** the agent's work as a trajectory (brief → draft → review → shipped), never as a screenshot dump.

### Iconography
**System / source:** Material Symbols Sharp — sharp right angles read as machined console.
**Rules:** one glyph per concept; 20/24px; weight 400; outline by default, fill only for an active state; text color, never the action color unless it's an action.

### Photography
**Photo styling:** operations, not portraits — rooms, consoles, screens, hands on controls; people from behind or in silhouette, never to camera. Archive = the real NASA public-domain archive. Generated = present-day only.
**Treatment / grade:** grayscale → amber duotone → CRT scanlines (recipe in `.agents/design.md` → Art Direction).
**Art-direction notes:** one warm light source; deep blacks; the left third left dark when type will sit on it.

## Logo
**Locked assets:** `.agents/assets/logo/` — `logo-lockup.svg` (primary) · `logo-icon.svg` (mark) · `-inverse` / `-black` / `-white` / `-gray` · `avatar.svg` · `app-icon.svg` (rules: `INVARIANTS.md` in that folder)
**Primary lockup:** "The Command Point" — a bold open ring with a needle to the gap, a gauge reading a live system — beside the Chakra Petch 700 wordmark, outlined.
**Secondary / mark:** `logo-icon.svg` alone, for 24–120px spaces.
**Clear space:** 0.42 × cap height on all four sides.
**Minimum size:** lockup 60px / 15mm wide; icon 24px / 8mm.
**Misuse:** never recolour (one-colour variants only: `#14100A` · `#F2EBDD` · black · white · `#8A8171`), crop, box, re-space, re-typeset, or wrap in a second viewBox; a ground picks the variant, never CSS.

## Voice
**Tone:** an operator talking to an operator — short, specific, dry. Verbs over adjectives. Numbers over claims.
**Personality (3–5 adjectives):** exact, calm, capable, a little wry.
*In practice:* "Stop being the middleware." · "While you were away." · "Nothing ships without approval."

## Fixed Core vs. Flexible Range
*The section that lets a later critique tell a legitimate flex from a drift.*

**Fixed core — must ALWAYS hold:**
- The Command Point mark, placed from the locked files, one colour.
- Chakra Petch display + IBM Plex Sans body + JetBrains Mono telemetry; semibold leads.
- Amber = energy and status; green = the only action color; red = abort only.
- The trajectory motif and machined corner brackets; one amber live element per view.
- Instruments, not decoration: everything on screen reports something true.

**Flexible range — free to flex:**
- **Ground:** dark on the web and in product; light (`#F6F1E7`) for print, decks, and one-pagers.
- **Pattern scale:** concentric dotted rings oversized and cropped in social and print.
- **Photography source:** real NASA archive or present-day generated, as long as both go through the grade.
- **Motion:** expressive signature moves on marketing surfaces; near-zero on high-frequency product UI.

**A flex is legitimate when:** it still produces command, precision, and confidence — even if it drops the dark ground or the everyday layout.

## In Use
- Stylescape (three concepts): `../../skills/creative-direction/examples/magister-stylescapes.html`
- Logo identity: `deliverables/logo-identity.html`
- Homepage: `deliverables/homepage.html` · with the motion pass: `deliverables/homepage-motion.html`
- Collateral (one-pager, cards, social, thumbnails, deck): `deliverables/collateral.html`

## Toolkit
*What the operator can actually use to produce assets — about the person running the skills, not the brand. Captured once by `brand`; every skill reads it before choosing a tool path and updates it when something changes.*

**Tier:** 2 — generators connected to the agent
**Generators the operator runs by hand:** ChatGPT (GPT Image)
**Connected to the agent:** Flora (GPT Image 2.5, Arrow 2.0), `QUIVER_API_KEY`, Figma, Adobe
**Design canvas:** Figma; Claude Design (kit prepared, not yet synced)
**Last confirmed:** 2026-10-29
