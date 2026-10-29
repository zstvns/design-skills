# Creative Direction — Magister
<!-- This file is .agents/design.md. With no project folder (the Claude app), it lives in the Claude Project's knowledge: read it from there, and whenever you change it, hand back the complete updated file so the user can replace the old one. -->

*Last updated: 2026-10-29 · Status: system finalized; living record open*
*Depth: Revolution · Source: .agents/brand-strategy.md + .agents/brand.md*
*Chosen direction: 01 Mission Control · Published copy: none · Claude Design kit: `.agents/assets/design-system/` (prepared, not yet synced)*

## Emotional Target (carried from brand-strategy)
**Command · Precision · Confidence.** The operator runs the operation; every number is exact; it's safe to let it run.

## Concepts Explored
The full boards: `skills/creative-direction/examples/magister-stylescapes.html` (in this repo).

### Concept 01 — Mission Control *(chosen)*
- **Muses → abstractions:** Apollo Mission Control → the deck, telemetry, the launch verbs (arm · hold · fire · go). Teenage Engineering OP-1 → the intensity dial and the keycaps. Apollo 11 launch → the payload in motion, the dotted trajectory.
- **Through-line / signature element:** the throttle — a dial whose meter runs sync-blue → amber as it climbs. Supporting: keycap buttons, the mission log, the +218% trajectory chart.
- **Why it answers the feeling:** the operator *is* flight control, not a spectator of charts. Command, precision, and confidence are literally the job of the room it borrows from.
- **Why chosen:** it maps natively to what the product does (an agent executing while you watch the telemetry) and it held up best when applied — homepage, logo, collateral. It became the fidelity bar the other two were measured against.

### Concept 02 — The Conductor *(not chosen)*
- **Muses → abstractions:** a Bach manuscript → the score, each asset a note; a conductor → the hairpin, the cue, the playhead; a concert hall → the ensemble, channels seated.
- **Through-line:** a draggable dynamics hairpin (pp → ff) that drives a live waveform; a playhead that "ships" notes across four movements. Light ivory ground — the only light board.
- **Why not chosen:** the board itself called it *the stronger idea* — orchestration is what the product does, and it's far less reached-for than "mission control." But the music motifs slid toward kitsch in execution ("trite," "trying too hard"), and it needed the most work. **Kept here because it's the right seed for a later flex** — campaign or launch moments that want warmth and light.

### Concept 03 — Magister *(not chosen)*
- **Muses → abstractions:** the porphyry Tetrarchs → the porphyry ground and bronze rule; a signet ring → press-and-hold ratification; a Corinthian capital → vertical fluting, abstracted.
- **Through-line:** a press-and-hold seal that ratifies the register.
- **Why not chosen:** "the trust position" in an unoccupied lane (porphyry + bronze), but it risked coldness, and early versions wore the muse (an all-caps Roman face, rejected) and showed no product function.

## The System (chosen direction)
*As built — the homepage and collateral are the source of truth where they refined the stylescape. Changes from the board are noted in Application Notes below.*

### Color
| Role | Name | Hex | Notes |
|------|------|-----|-------|
| Background | Ground | `#0F0C07` | Panels `#1B160E` `#221B11` `#2A2114`; seams `#3A3020` `#4A3D24` |
| Background (light) | Paper | `#F6F1E7` | Print, decks, one-pagers — the sanctioned light flex |
| Text — primary | Bone | `#ECE4D6` | `#14100A` on light |
| Text — secondary | Dim / Faint | `#C2B69C` / `#988B71` | Lightened from the board for contrast |
| Brand energy & status | Amber | `#E8830C` | `#F4A93C` lo; `#AD5D03` as text on light. **Never a button.** |
| **Action / CTA (protected)** | Go green | `#3FA968` → `#63C98A` | `#1B7345` on light. Pill-shaped, the only green-and-round thing on the page |
| Support — syncing / idle | Sync blue | `#4E7BC4` | The cold end of the throttle |
| Support — abort only | Alert | `#D2542E` | Errors and abort, nowhere else |

**Ownership vs. the competitor set:** the category runs flat SaaS blues and purple AI gradients (Jasper, Copy.ai, Writer, HubSpot, Mutiny, AdCreative.ai). Amber-on-near-black with bone type is unoccupied there.

### Typography
| Role | Typeface | Foundry / license | Weights | Notes |
|------|----------|-------------------|---------|-------|
| Display | Chakra Petch | Cadson Demak · OFL | 600 (700 for hero + bignum) | Cut corners = machined; also the wordmark |
| Body | IBM Plex Sans | IBM · OFL | 300–600 | 16px / 1.55 |
| Telemetry | JetBrains Mono | JetBrains · OFL | 400–600 | Eyebrows, labels, data, buttons — uppercase, tracked |
All three free for commercial use; Latin coverage confirmed for the launch markets.

### Motif / Pattern & Texture
**The trajectory** — planned work dotted, done work solid, the live point amber — abstracted from the launch arc. Deployed with the 48px grid, machined corner brackets, a slow amber light sweep, and (print/social) oversized dotted concentric rings. CRT scanlines live only inside the photo treatment. Works with no logo and no amber present.

### Iconography
Material Symbols Sharp — see Art Direction below and `assets/imagery/approved/icons/README.md`.

### Illustration / Product abstraction
Flight plans — see Art Direction below.

### Photography
Operations, not portraits; archive or present-day; one amber grade — see Art Direction below.

### Motion (directional note)
Quick, precise, no bounce on UI; the one overshoot is reserved for things that land (a chevron, a stamp). Signature moves perform the concept: a line drawing itself in, a log stacking up, a throttle climbing. Full system below.

### Design tokens
```css
:root{
  --ground:#0F0C07; --panel:#1B160E; --panel2:#221B11; --panel3:#2A2114;
  --seam:#3A3020; --seam2:#4A3D24;
  --bone:#ECE4D6; --dim:#C2B69C; --faint:#988B71;
  --accent:#E8830C; --lo:#F4A93C; --sync:#4E7BC4; --alert:#D2542E;   /* amber = energy & status, NOT the CTA */
  --cta:#3FA968; --cta-lo:#63C98A; --go:#5BA772;                     /* the one forward color, action only */
  --disp:'Chakra Petch',sans-serif; --body:'IBM Plex Sans',system-ui,sans-serif; --mono:'JetBrains Mono',ui-monospace,monospace;
  --radius:8px; --pad:clamp(1.1rem,2.4vw,1.5rem); --gap:clamp(1rem,2vw,1.5rem);
  --ease-out:cubic-bezier(.16,1,.3,1); --ease-standard:cubic-bezier(.4,0,.2,1); --ease-overshoot:cubic-bezier(.34,1.56,.64,1);
}
```
Light tokens for print and collateral: `.agents/assets/design-system/tokens.css` → `[data-theme="light"]`.

## Documented Styles & Asset Sources
- **Photography:** NASA public-domain archive (Wikimedia Commons) + present-day generations (GPT Image 2.5 in Flora), all through `assets/imagery/treat.sh`. Manifest: `assets/imagery/manifest.md`.
- **Illustration:** original SVG, plus Arrow 2.0 (Quiver, via Flora) for SVG generation.
- **Icons:** Material Symbols Sharp (Google Fonts, Apache 2.0).
- **Type:** Google Fonts, OFL.
- **Integration logos (homepage marquee):** Simple Icons 13.21.0 (CC0 files; the marks are their owners' trademarks — shown only to indicate integrations).

## Application Proof
- Website: `deliverables/homepage.html` (and `homepage-motion.html` for the motion pass)
- Ads / social / deck / print: `deliverables/collateral.html`
- Logo applied: `deliverables/logo-identity.html` §§ applications

## Challenges & Differentiation
- **On-the-nose risk.** "Mission control for X" is a reached-for metaphor in AI. The defence is abstraction: no rockets in the identity (the `rocket_launch` glyph is a product icon only), no NASA insignia, no space-age type — the room's *behaviour* (report, approve, fire), not its costume.
- **Dark-by-default.** The category is dark too. Distinction comes from the warm amber/bone palette and the instrument language, not darkness; the light ground is a sanctioned flex for print and decks.
- **Dense UI temptation.** Telemetry invites clutter. Rule: one amber live element per view; dense instruments in an open room.
- **Vs. competitors:** soft glyphs, sprockets, and flat blue dashboards across the set; Magister is the only instrument on the shelf.

## Self-Audit (adversarial, on the rendered board)
Run on the chosen board and the applied homepage. **AI-slop tropes found:** a mono "telemetry" register (a named trope — kept because the product *is* telemetry, and it's confined to labels and data); a background grid (kept at ≤ .03 alpha, masked); near-black canvas with one hot accent (mitigated by the bone/amber warmth and the green action split). **Cover-the-logo:** passes on the board and on the homepage — the throttle, the trajectory, and the amber-on-bone instrument voice identify it without the mark. **Foundational scores vs. the set** *(scored for this write-up; the original run didn't record numbers)*: Creative Direction 4 · Color 4 · Pattern 4 · Logo 3 (Distinct pending — see Logo).

---
<!-- ============ LIVING RECORD — appended by downstream skills ============ -->

## Logo *(appended by logo-design · 2026-07-23)*
**The Command Point** — a bold open ring with a needle to the gap: a gauge reading a live system. From the Abstract family; chosen over the Aperture (read "a shade camera/lens") and the Trajectory arc. Wordmark: Chakra Petch 700, outlined. **SAD:** Simple — pass (holds 16px → hero, one colour, reversed). Appropriate — pass (the machined dial *is* command, precision, confidence). Distinct — **pending**: the competitor shelf passed cover-the-name, disappearance, and resemblance tests, but at favicon resolution only, and the rough-cut vector hasn't had a designer's construction pass.

**Locked assets** — place, never rebuild:

| Asset | Canonical file | Use |
|-------|----------------|-----|
| Primary lockup | `.agents/assets/logo/logo-lockup.svg` | default, on light grounds |
| Icon / mark alone | `.agents/assets/logo/logo-icon.svg` · `-white` | favicon, avatar, tight spaces |
| Inverse | `.agents/assets/logo/logo-lockup-inverse.svg` | dark grounds (the web) |
| Mono | `.agents/assets/logo/logo-lockup-black.svg` · `-white.svg` · `-gray.svg` | 1-colour, print, etch |
| Social avatar · app icon | `.agents/assets/logo/avatar.svg` · `app-icon.svg` | square · rounded |
| Raster | `.agents/assets/logo/raster/` | PNG for surfaces that can't take SVG |

**Clear space:** 0.42 × cap height · **Minimum size:** lockup 60px / 15mm, icon 24px / 8mm · **Colour:** one colour per file — `#14100A` · `#F2EBDD` · black · white · `#8A8171`. Full rules: `assets/logo/INVARIANTS.md`.

## Art Direction *(appended by art-direction · 2026-10-29)*
Tested on a style sheet before locking: `assets/imagery/tests/style-test.html`. References the user pointed at: `assets/imagery/references/board.html`.

### Photography
*Operations, not portraits.* The room where the operation runs and the hands that run it — consoles, screens, rows of operators from behind, a key under a thumb. Low warm light from screens in a dark room; deep blacks; one highlight. A documentary still. Archive and today, one grade.

| Field | Spec |
|---|---|
| Subjects | Rooms, consoles, screens, hands on controls. Ratio across a set: ~2 rooms : 2 details : 1 archive |
| Casting | People only from behind or in silhouette; never to camera; no posed teams |
| Environment & props | Present-day operations spaces, dark. Screens show marketing work (calendars, one rising chart, drafts) — never trading tickers |
| Light | Screens or one practical lamp; hard; falls off to black. Never evenly lit, never ceiling-lit |
| Lens & camera | Long lens from the back of the room, slightly high; or close macro on a control |
| Composition & crop | Subject right of centre; **left third dark** when type sits on it. 16:9 heroes, 3:2 elsewhere |
| Palette anchors | Ground `#0F0C07` → amber `#B8660A` → warm bone `#F7E3C4` (via the treatment) |
| Grade | The treatment recipe below — applied to every source |
| Grain | Added by the treatment; generated images also carry their own film grain |
| **Never** | Eye contact; smiling teams; laptops as the subject; potted plants and tidy home offices; trading/stock charts; teal-orange; HDR glow; **a generated "archival" photo** — use the real NASA archive instead |

### Illustration
*Flight plans.* Technical line diagrams of the work — the trajectory from brief to shipped, the gate where you approve, the orbit of tools. Thin bone lines on the dark ground; one amber line for what's happening now; dotted for what's planned.

| Field | Spec |
|---|---|
| Role | Explain how it works; feature cards; empty states. Never decoration |
| Technique | Line-led, flat, digital-clean |
| Line | Bone `#ECE4D6` at 82%; **1.5px per 400px of width** (scale with output); round caps |
| Shape language | Arcs and straight runs; nodes as small dots; frames with machined corner brackets |
| Fill & palette | No fills except node dots. Bone + **one** amber element per illustration. Faint lines at 28% for grids/axes |
| Perspective | Orthographic only |
| Figures | **Never drawn.** The operator is a marked point (a square marker — a ring would echo the logo) |
| Detail level | Labels are live text, JetBrains Mono, uppercase, tracked .14em — set in layout, never generated. **Spot rule (< 160px):** 2px stroke, no labels, max three nodes |
| Product abstraction | The agent's work as a trajectory: brief → draft → review → shipped |
| **Never** | Rockets or space hardware; characters or mascots; isometric 3D; gradients; more than one amber element |

### Iconography
| Field | Spec |
|---|---|
| Source | Material Symbols Sharp (Google Fonts) |
| Grid & sizes | 20 dense UI · 24 default · 40 feature cards; `opsz` follows size |
| Stroke | Weight 400 — matches IBM Plex's stems |
| Corners & terminals | Sharp — matches Chakra Petch's cut corners |
| Fill policy | Outline; `FILL 1` only for active/selected |
| Color | Text colour; green only if the icon *is* the action |
| Tiers | One tier; larger storytelling images come from the illustration style, not from bigger icons |
| Metaphors | Canonical glyph per idea — `assets/imagery/approved/icons/README.md` |
| **Never** | Mixing libraries; emoji; `rocket_launch` as the brand mark |

### Pattern & Texture
`creative-direction` set the motif (the trajectory). Deployments, as tested: the **48px grid** on the web (24px reads as graph paper; 96px only for full-bleed heroes); **oversized, cropped dotted rings** in print and social (small rings read as a target); **scanlines only inside the photo treatment** (they muddy type); machined corner brackets on panels; one amber sweep per page. Code: `assets/imagery/approved/texture/textures.css`.

### Combination rules
- **Illustration never sits on photography.** Photography is full-bleed or framed; illustration lives on the ground.
- **Layer order:** ground → grid (≤ .03) → photography or illustration → type. Scanlines only within the photo.
- **Shared DNA:** illustration's line weight and the icon stroke both sit at Plex's stem weight; the photo grade and the illustration share one amber.
- **Who leads where:** web hero — illustration or product UI; the filmstrip — photography; feature cards — spot illustrations + Sharp icons; social — photography or illustration + rings; decks — photography as section dividers, illustration in content slides.
- **One amber thing per view**, across all classes combined.

### Treatment recipe
Grayscale → three-stop amber tone map (`#0F0C07` → `#B8660A` → `#F7E3C4`) → CRT scanlines (1px in 3 at 22%) → fine grain. Files: `assets/imagery/treat.sh`. Web parity: the filmstrip's CSS grade on the homepage. Archive frames run brighter (flash-lit) — place them where brightness is welcome; use the generated set where type needs dark space.

### Anchors & library
Anchors: `assets/imagery/anchors/` (3 archive, 2 generated). Library + rights + alt text: `assets/imagery/manifest.md`. Primer and prompts: `assets/imagery/prompts.md`. Generator: Flora (GPT Image 2.5 for photography, Arrow 2.0 for SVG illustration).

## Icon Library — as adopted *(appended by art-direction · 2026-10-29)*
Material Symbols Sharp, loaded from Google Fonts (`opsz,wght,FILL,GRAD@20..48,400..700,0..1,0`). As implemented on the homepage and collateral. No divergence from the spec above.

## Motion System — as built *(appended by motion-design · 2026-07-24)*
- **Easing:** `--ease-out cubic-bezier(.16,1,.3,1)` is the workhorse; `--ease-standard (.4,0,.2,1)` for state changes; `--ease-overshoot (.34,1.56,.64,1)` only for things that land (FAQ chevron). No raw linear except ambient loops.
- **Durations:** .2s press/transform · .24s shadow/background · .25–.3s disclosure · .55s reveal · 1.15s chart draw. *(Literal values — no duration tokens yet; open item.)*
- **Stagger:** 70ms step, up to six children; on section headers, grids, plans, FAQ, metrics, feature rows — never on nav, footer, or ambient layers.
- **Press:** `scale(.97)` on every button; the CTA keeps its 1px hover lift, the press wins.
- **Signature moves:** the hero line types itself once (46ms/char); the shipped-work stack cycles once, then rests; the metric line draws in; the orbit turns slowly (34s / 26s counter).
- **Reduced motion:** everything above sits behind `prefers-reduced-motion: no-preference`; the sweep and orbit stop.
- **Where it lives:** `deliverables/homepage-motion.html` — applied to homepage v4, before the filmstrip and pinned scroll-telling sections existed (open item: port to v5).

## Application Notes *(appended by web-design / collateral-design / art-direction)*
- **2026-07 · web-design — the action colour moved from amber to green.** The board used amber for action. In the build, amber was doing too much (energy, status, hero accent, *and* buttons), so a CTA no longer stood out. Amber became brand energy and status; `#3FA968` green became the one forward colour, pill-shaped and used only for action. Collateral adopted it (`#1B7345` on light). **Ruling: canon** — reflected in the system above and in `brand.md`.
- **2026-07 · web-design — `--dim` and `--faint` lightened** (`#B4A88F` → `#C2B69C`, `#7C725C` → `#988B71`) — most likely for legibility on panels (the build doesn't record why). Canon.
- **2026-07 · web-design — the board's CRT scanlines and glitch headline were dropped from the site.** The glitch read as noise at reading distance; scanlines muddied type. Scanlines survive inside the photo treatment. Canon.
- **2026-08 · collateral-design — light ground for print and decks** (`#F6F1E7`) and the oversized dotted-ring motif. A sanctioned flex: still command/precision/confidence. Canon.
- **2026-10-29 · art-direction — the homepage placed the locked logo.** v5 had used a Material Symbol `rocket_launch` in a keycap as the nav mark (it predated the locked files). Replaced with `logo-lockup-inverse.svg` in nav and footer; the keycap container was removed (boxing the mark is misuse). `rocket_launch` remains a product glyph only.
- **2026-10-29 · art-direction — the filmstrip got a real image.** v5's filmstrip used a random placeholder with no source or licence; it now uses `approved/photography/filmstrip.jpg`.

### Open items
- **Logo colour.** The identity presentation specified a bone ring with an amber pointer and showed an amber icon; the locked files are one colour by construction (a single path), so a two-colour mark would need the vector split. Locked files win until `logo-design` decides — and if amber returns, it's a new named variant, not a recolour.
- **Logo Distinct = pending** until the competitor shelf is re-run at full resolution and the vector has a designer's construction pass.
- **Motion on v5.** Port the motion pass to the current homepage; add duration tokens.
- **One domain.** Deliverables use magister.io, magister.com, and magistermarketing.com interchangeably; pick one and sweep.
- **Claude Design.** The kit is built (`assets/design-system/`); run `/design-sync` when someone will use it.
