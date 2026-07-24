# The Collateral Viewer — Reviewable at True Size

Collateral is a *set* of fixed-format pieces, and a set is genuinely hard to review. A folder of PNGs makes you open them one at a time; a scaled-down contact sheet flatters everything, because type that's illegible at final size still looks fine at 30%. So **ship a viewer** — one self-contained HTML file, next to the real exports, that renders every piece at true size and plays the deck as a deck.

This isn't a nicety. A card whose contact line was ~3.6pt looked perfectly good on a contact sheet and only revealed itself as broken when rendered at true 3.5×2in. **If a piece was only ever reviewed scaled down, it wasn't reviewed.**

## What the Viewer Must Do

**1. Switch between formats.** Tabs for each format in the set — one-pager, social, cards, thumbnails, deck. The point is comparing the *family* in one place: same system, varied layouts, or three unrelated templates?

**2. Render at true size, with an honest zoom control.** Three modes:
- **Fit** — scale to the stage, for taking in a whole tall piece at once.
- **100%** — 1:1 native pixels. The right default for screen-native formats (social, OG, thumbnails).
- **Actual size** — true *physical* scale, derived from the piece's DPI. This is the one that matters for print: a 1050×600px card at 300dpi renders at 3.5×2in (≈336×192 CSS px), which is the only honest test of a card.

Store each piece's real dimensions and DPI on the element and let the viewer do the math:

```html
<div class="frame" data-w="1050" data-h="600" data-dpi="300" data-safe="38">…</div>
```
```js
// scale factor per mode
if (mode === 'one')  s = 1;
if (mode === 'phys') s = 96 / dpi;          // CSS px per inch ÷ asset DPI
if (mode === 'fit')  s = Math.min(1, availW / w, availH / h);
// then: frame.style.transform = `scale(${s})` with transform-origin: top left,
// and size the wrapper to (w*s, h*s) so layout flows correctly
```

Design each piece at its **native pixel dimensions** and scale only for display — never design at a reduced size, or the type sizes you pick will be wrong for the real output.

**3. Present the deck as a deck.** Static thumbnails hide a deck's pacing and arc. The deck view needs:
- One slide visible at a time, scaled to fit the stage
- **Arrow keys, space, and click-to-advance** (a wide right-hand click zone forward, narrower left-hand back)
- A **slide counter** (`4 / 7`) and prev/next buttons
- A **filmstrip** of live thumbnails to jump around, with the current slide marked
- **Fullscreen present mode** (`requestFullscreen`, bound to a key like `F`), hiding the filmstrip

**4. Toggle print guides — all three boundaries.** For print-bound pieces, overlay **bleed**, **trim/cut**, and **safe** as distinct, labeled, color-coded guides (1/8in for bleed and safe), with a legend. The piece must be built at bleed size so the review can *see* the background art running past the trim line — that's the whole point. Only show the toggle where it means something.

**5. Present pieces on a neutral canvas, with a visible outline.** Treat the stage like a press table or a light table: a **mid-gray neutral background**, never white and never the brand's own colors. Two reasons — a light piece needs a darker ground to read as an object, and a **dark piece disappears into a dark stage**. Give every piece a crisp edge (a hairline plus a real drop shadow) so its boundary is unmistakable. If you can't see where the artifact ends, you can't judge its margins.

**6. Show social in real platform context — and more than one platform.** An asset in isolation doesn't tell you how it lands. Mount each post inside a **device frame with the actual platform UI** — and cover the platforms it will actually run on: **Instagram feed and story/reel, LinkedIn, X/Twitter, Facebook**. Each has different chrome, different crop, and different text treatment, so each is a real test. Pair that with the **varied format set** (square, 4:5 portrait, 9:16 vertical, 1.91:1 link) so the review sees every placement.

**7. Animate the social and screen pieces.** Social is a moving medium; judging it static is judging half of it. Show **both** — a static state and a motion state, with a replay control. Useful, restrained moves: text sliding/rising in, staggered list reveals, a background element drifting, a considered button entrance, a story progress bar filling. Blog thumbnails and deck transitions benefit from the same treatment. Keep it purposeful and defer to `motion-design` for the craft (easing, duration, restraint).

**8. Show the specs.** A small info strip per format: what it is, its real dimensions (`1050 × 600 px · 3.5×2in @300dpi`), and what to look for. Review is faster when the reviewer doesn't have to ask "what size is this?"

**9. Make it deep-linkable.** Read state from the query string (`?v=cards&z=phys&s=4&guides=1`) so a specific piece, zoom, or slide can be pointed at directly in review — and so it can be screenshotted programmatically for a self-audit.

## Keep the Chrome Out of the Artifact

The viewer is a frame around the work, not part of it. Two rules:

- **Neutral shell.** Plain dark grey UI, a subtle checkerboard stage, mono labels. **Never style the chrome in the brand's own colors** — if the shell is amber-and-near-black too, you can't tell where the brand ends and the viewer begins, and the chrome starts flattering the work.
- **Nothing overlapping the piece.** Helper text ("← → to advance") floating over a slide reads as slide content and contaminates the judgment. Put guidance in the info strip or the filmstrip bar, outside the artifact's bounds. Give each piece a caption *below* its frame, not on it.

## Self-Auditing Through the Viewer

Because the viewer is deep-linkable, you can drive your own adversarial review with it — render each format headlessly at each meaningful zoom and *look*:

```bash
# any Chromium: system Chrome, or Playwright's cached Chrome for Testing
CHROME="…/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
"$CHROME" --headless=new --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1600,1000 --virtual-time-budget=6000 \
  --screenshot=/tmp/cards.png "http://localhost:8751/viewer.html?v=cards&z=phys&guides=1"
```

Two gotchas worth knowing: `--screenshot` captures only the **window height**, so set a tall `--window-size` (or crop after) to catch content below the fold; and the piece must be served over `http://` for fonts to load, not opened as `file://`.

Then run the checks from the skill's Validate step on what you actually see — the collateral-slop list, cover-the-logo, family coherence, and the size floors (a card's role/contact lines at ~7pt minimum, a name at ~10–12pt).
