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

**4. Show the piece at trim by default; reveal bleed only when guides are on — and never move the piece to do it.** Bleed is a production concern, not how the piece looks, so the default view is the piece **cropped to trim**, exactly as it will exist after cutting. Flipping guides reveals the bleed area plus **bleed**, **trim/cut**, and **safe** as distinct labeled, color-coded guides (1/8in for bleed and safe) with a legend. Building the doc at bleed size makes both views possible from one artifact. Only offer the toggle where it means something.

**Anchor the trim box.** The toggle must reveal the bleed *outward, around* a piece that stays exactly where it was — same size, same position, same place on screen. If flipping guides reflows the layout and the artwork jumps, the reviewer loses their place and can't compare the two states, which defeats the point of a toggle. Concretely: size the wrapper to the **trim** dimensions permanently and offset the oversized artboard into it, then switch only `overflow` (hidden → visible) so the bleed spills out without changing geometry:

```js
// wrapper is always the TRIM box — geometry never changes
frame.style.transform = `translate(${-trim*s}px, ${-trim*s}px) scale(${s})`;
wrap.style.width  = (w - 2*trim) * s + 'px';
wrap.style.height = (h - 2*trim) * s + 'px';
wrap.style.overflow = showBleed ? 'visible' : 'hidden';   // the ONLY thing that changes
```

Leave permanent breathing room in the stage padding and grid gaps so the revealed bleed has somewhere to spill — adding that room *on toggle* would reintroduce exactly the movement you're avoiding. **General rule: no review overlay — guides, safe zones, grids, rulers — may reposition or resize the artifact it's describing.**

**4b. Only show controls that apply to the current format.** Every control implies the thing it toggles is a real variable. A static/motion switch on a one-pager suggests a one-pager might animate — it can't; it's print. Hide motion controls on static print formats, hide print guides on screen formats, hide zoom on the deck. And **put the controls near what they affect** rather than banking them all in a far corner of a top bar — proximity to the piece being changed beats a tidy toolbar.

**5. Present pieces on a neutral canvas, with a visible outline.** Treat the stage like a press table or a light table: a **mid-gray neutral background**, never white and never the brand's own colors. Two reasons — a light piece needs a darker ground to read as an object, and a **dark piece disappears into a dark stage**. Give every piece a crisp edge (a hairline plus a real drop shadow) so its boundary is unmistakable. If you can't see where the artifact ends, you can't judge its margins.

**6. Show social in real platform context — and more than one platform.** An asset in isolation doesn't tell you how it lands. Mount each post inside a **device frame with the actual platform UI** — and cover the platforms it will actually run on: **Instagram feed and story/reel, LinkedIn, X/Twitter, Facebook**. Each has different chrome, different crop, and different text treatment, so each is a real test. Pair that with the **varied format set** (square, 4:5 portrait, 9:16 vertical, 1.91:1 link) so the review sees every placement.

**7. Animate the social and screen pieces.** Social is a moving medium; judging it static is judging half of it. Show **both** — a static state and a motion state, with a replay control. Useful, restrained moves: text sliding/rising in, staggered list reveals, a background element drifting, a considered button entrance, a story progress bar filling. Blog thumbnails and deck transitions benefit from the same treatment. Keep it purposeful and defer to `motion-design` for the craft (easing, duration, restraint).

**7b. Add a scroll test for feed-scale formats.** Thumbnails and social posts are consumed in a *list*, so review them in one: render the set at **real feed scale (~150px wide for a blog/OG card)** stacked in a mock list with their titles and meta, exactly as someone scrolling would meet them. This is the fastest way to catch type that's too small and headlines that are too long — a thumbnail whose headline is mush at 150px needs fewer words and bigger type, not a smaller font. Build it from the same artboards so it can never drift from the real asset.

**7c. Measure the canvas, don't eyeball it.** Build an **overflow audit** into the viewer rather than judging by eye — eyes pass work that a measurement fails. Walk every content element in each piece, compare its bounding box to the safe box, and print the violations with the element and the overspill in artboard px:

```js
const fr = frame.getBoundingClientRect(), sc = fr.width / w;   // w = artboard width
const L = fr.left + safe*sc, R = fr.right - safe*sc, T = fr.top + safe*sc, B = fr.bottom - safe*sc;
// for each content el (skip .bgwash/.bgdots/guides — decoration is allowed out):
//   r.bottom > B  → `bottom ${((r.bottom-B)/sc).toFixed(0)}px` … etc.
```

Four things decide whether that audit is real or theatre:

- **Every format gets a safe box, screen included.** A safe line is not a print concept — a screen piece has an **interior margin**, and a story/reel has **platform UI-safe bands** top and bottom. Carry the *required minimum* inset on each artboard (`data-safe="64"`, or CSS-order `data-safe="250 64 290 64"` for a 9:16), and measure against **that standard** rather than against the piece's own padding, which it can never fail. A print frame can default to trim + another ⅛in. Skipping screen formats is how "clean" gets reported for a whole family when only one piece was ever measured.
- **Measure leaves and skinned boxes, not layout containers.** A full-width flex column touches the artboard edge by design while its content sits safely inside its own padding; flagging it produces noise, and noise is how an audit gets ignored. Measure elements with no element children, plus any box with a background or border (those are visible, so they count). Mark deliberate full-bleed media (`.bleed`) so it's excluded rather than weakening the rule for everything.
- **Report coverage, not just a verdict.** Print *how many artboards were measured and with what safe box*. A "clean" result over zero artboards — a selector that misses the deck's slides, say — reads exactly like a pass, and that is the single easiest way to ship a broken piece while believing you checked it.
- **Prove it can still fail.** Give the audit a **self-test**: plant a deliberately overflowing probe element, confirm it's reported, remove it, then measure for real. Wire it to a query (`?audit=selftest`) and run it per view. An audit that always passes isn't running (see `design-principles` → Judge Your Own Work).

**7d. Audit the type sizes too — in points, at the piece's DPI.** The canvas audit catches spills and says nothing about type that is simply too small for the delivered size. Convert and hold the floor mechanically:

```js
const pt = parseFloat(getComputedStyle(el).fontSize) / dpi * 72;   // dpi from the artboard
if (pt < 7) report(el);          // ~7pt floor for contact / role / meta lines
```

On a 300dpi card, 25px is **6pt** — comfortable on your monitor, gone in the hand. This is the defect that hid through several review rounds on work that had already been signed off, because nothing about it looks wrong on screen. Same principle as the canvas: it's a measurement, not a look.

**7e. Cache-bust at page load, not at build time.** If the viewer loads external JS/CSS, the stamp must be generated **when the page loads** — inject the scripts with a `Date.now()` query. A stamp *baked into the HTML* is worse than none: the URL never changes, so the browser serves its cached copy forever and edits to those files stay invisible until someone regenerates the stamp. Reviewing a stale script and reporting on a version that no longer exists wastes a whole round — theirs and yours.

```html
<script>['pieces.js','viewer.js'].forEach(src =>
  document.write('<script src="'+src+'?b='+Date.now()+'"><\/script>'));</script>
```

**8. Show the specs.** A small info strip per format: what it is, its real dimensions (`1050 × 600 px · 3.5×2in @300dpi`), and what to look for. Review is faster when the reviewer doesn't have to ask "what size is this?"

**9. Make it deep-linkable.** Read state from the query string (`?v=cards&z=phys&s=4&guides=1`) so a specific piece, zoom, or slide can be pointed at directly in review — and so it can be screenshotted programmatically for a self-audit.

## Give the Reviewer a Content Layer They Own

**Copy is the gate, so review means changing words.** The reviewer will want to try a shorter headline, cut a row, or push a type size — and if doing that means editing markup, they either can't or their edit gets destroyed the next time you touch the file. Both happened: scripted whole-file rewrites overwrote a reviewer's copy edits, and there was no history to recover them from.

So split the artifact:

- **A content file the reviewer owns** — plain data only (headline, type size, rows, CTA, URL, per format), no markup, no logic. Say so at the top of the file: *this file is yours; I don't rewrite it.* Then honour that.
- **Rendering code you own** — reads the content file and lays it out. You change layout freely without ever touching their words.

Two rules follow. **Never run a scripted whole-file rewrite over a region the reviewer edits** — a regex pass that reads and rewrites the file will silently clobber their work; make targeted edits instead. And when a piece is over-full, the skill's answer is *cut content, don't shrink type* — which is a **content** decision. Make it possible as a data edit (render the optional panel only when its rows exist), then say what should be cut and let them cut it.

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
