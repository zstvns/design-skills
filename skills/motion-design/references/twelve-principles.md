# The Twelve Principles of Animation, in Code

The canon from Disney's *The Illusion of Life* (Frank Thomas & Ollie Johnston, 1981), translated to UI motion in **custom code**. The recipes below are illustrative CSS/JS — adapt them to the project's stack (a JS motion library expresses the same ideas). The principle is the point; the syntax is interchangeable.

**The through-line for all twelve: imitate a real physical body.** Every good UI motion decision traces to how a thing with mass actually moves. When you're unsure, picture the real-world equivalent — a card is a physical card; a menu is a thing with weight that has to accelerate and settle — and animate *that*.

Assume a shared easing/duration system (see [motion-floor.md](motion-floor.md)); the recipes reference tokens like `--ease-standard` and `--ease-overshoot`.

---

## 1 · Squash & stretch — weight and give

Give an element the illusion of mass by changing its shape/scale as it moves. The emotional lever: **overshoot = playful, slow settle = premium** on the identical element.

```css
/* Playful: a springy overshoot */
.btn--fun { transition: transform .28s var(--ease-overshoot); }
.btn--fun:hover { transform: scale(1.12); }

/* Premium: slower, no bounce, a deliberate settle */
.btn--serious { transition: transform .6s var(--ease-standard); }
.btn--serious:hover { transform: scale(1.06); }
```

Wrap the animated element in a parent that never changes size, and scale the child — otherwise a scale that crosses the hover boundary causes a flicker/bounce loop as the pointer falls in and out of the target.

---

## 2 · Anticipation — telegraph the *action*

A cursor change says "this is clickable." Anticipation says "here's what will happen when you do." A small wind-up that hints at the outcome.

```css
/* Accordion chevron rotates toward where the panel will open */
.accordion__chevron { transition: transform .25s var(--ease-standard); }
.accordion__trigger:hover .accordion__chevron { transform: rotate(90deg) translateX(4px); }
```

The tell of good anticipation: someone who has never seen the component can predict what it does *before* they commit to the click.

---

## 3 · Staging — direct the eye

Use motion to establish hierarchy — draw attention to the single most important element. A slow, looping pulse on the primary CTA; or a sequenced entrance that resolves *on* the CTA last.

```css
@keyframes cta-pulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.04); }
}
.cta--primary { animation: cta-pulse 1.2s var(--ease-standard) infinite; }
```

Staging is mostly done in the *design* (contrast, scale, placement); motion is one more tool to point the eye. Use it on the one thing, not every thing.

---

## 4 · Straight-ahead vs. pose-to-pose — work backward from rest

You author the **key states** (from → to) and the engine tweens between them (this is "pose-to-pose"; the tween is the "straight-ahead" the software does for you). The craft move: **design the final resting state first, then define where it came from.**

```css
/* Rest state is the real design; the entrance is defined relative to it */
.card { opacity: 1; transform: none; }
@keyframes card-in {
  from { opacity: 0; transform: translateY(16px); }  /* the "came from" */
  to   { opacity: 1; transform: none; }              /* the resting pose */
}
```

Scroll-linked sequences are pose-to-pose along a timeline — the scroll position *is* the playhead:

```css
/* CSS scroll-driven animation — no library needed where supported */
.reveal { animation: card-in linear both; animation-timeline: view(); animation-range: entry 0% cover 40%; }
```

Where scroll-driven CSS isn't available, an IntersectionObserver toggling a class, or a scroll library (e.g. GSAP ScrollTrigger), expresses the same idea. Tool-agnostic.

---

## 5 · Follow-through & overlapping action — THE biggest lever

Parts of a body move at different rates and keep moving after the main action stops. In UI: grouped elements enter **together but staggered**, and trailing elements **overshoot and settle** rather than stopping dead.

The amateur pattern is sequential — each element waits for the previous to *finish*. That reads slow and static. The fix costs almost nothing: same duration, same easing, just add small **overlapping** delays.

```css
/* Everything shares timing; only the delay differs — they overlap, not queue */
.stagger > *      { animation: card-in .6s var(--ease-standard) both; }
.stagger > *:nth-child(1) { animation-delay: .00s; }
.stagger > *:nth-child(2) { animation-delay: .06s; }
.stagger > *:nth-child(3) { animation-delay: .12s; }
.stagger > *:nth-child(4) { animation-delay: .18s; }
```

Or drive the stagger with an index custom property so it scales to any count:

```css
.stagger > * { animation: card-in .6s var(--ease-standard) both;
               animation-delay: calc(var(--i) * .06s); }
```

```html
<div class="stagger"><div style="--i:0">…</div><div style="--i:1">…</div>…</div>
```

**Follow-through** = the trailing settle. An overshoot curve on the entrance gives it for free (`--ease-overshoot`). This one principle, applied well, is most of the distance between "fine" and "expensive."

---

## 6 · Slow in & slow out — ease everything

Real objects accelerate and decelerate; they never start or stop instantly. **Linear is the single most common amateur tell.** Everything gets an ease.

```css
.menu { transition: transform .6s var(--ease-standard), opacity .6s var(--ease-standard); }
```

- **`ease-out` is the workhorse** for both entrances and exits — it accelerates immediately and decelerates into rest, so the motion reads responsive (see [practical-tips.md](practical-tips.md) → tip 4). Responsiveness beats physical purity on screen.
- **State changes** in place: symmetric ease-in-out.
- Reserve a true **ease-in** (slow start, accelerate away) only for the rare, deliberate "flies away" exit — its slow start otherwise reads as lag.

---

## 7 · Arc — natural motion curves

Bodies move along arcs, not straight lines. A modal rising from a button, a menu opening — give it a curved trajectory, not a rigid axis-aligned slide.

A cheap, effective "fake arc": grow **wide first, then tall** (decouple the X and Y of a scale with a tiny offset), so the corner traces a curve instead of a diagonal.

```css
@keyframes arc-in {
  0%   { transform: scale(0, 0); }
  40%  { transform: scale(1, 0); }   /* full width, no height yet — the long way around */
  100% { transform: scale(1, 1); }
}
.popover { transform-origin: bottom left; animation: arc-in .4s var(--ease-standard) both; }
```

For true path motion, `offset-path` / `offset-distance` (CSS motion path) or a JS tween along a curve.

> This wide-then-tall `scale(0,…)` arc is a deliberate *stylized* reveal. For an ordinary soft entrance (a popover, a card), **don't start from `scale(0)`** — it looks like the element materializes from nothing. Start from `~0.9` instead ([practical-tips.md](practical-tips.md) → tip 2).

---

## 8 · Secondary action — reinforce cause and effect

A supporting motion on a *related* element makes the main action legible. Hovering a control should visibly affect the thing it controls.

```css
/* Hovering the trash icon previews its effect on the modal it will act on */
.trash:hover               { color: var(--danger); }
.trash:hover ~ .modal      { background: var(--danger-tint); transition: background .3s var(--ease-standard); }
```

Secondary action is what turns a set of independent animations into a scene that *behaves* — one thing clearly drives another.

---

## 9 · Timing — speed is mood

Frame count sets speed; speed sets character. Two rules do the heavy lifting:

- **Small fast, big slow.** Match duration to the mass of the moving thing.
- **Fast cheap, slow expensive.** Snappy reads casual/utility; unhurried reads luxury.

```css
:root {
  --dur-cheap: .25s;     /* snappy, small, utilitarian */
  --dur-expensive: 1.1s; /* unhurried, premium */
}
/* Identical elements; only the timing differs — and they feel like different products */
.toast   { transition: transform var(--dur-cheap)     var(--ease-standard); }  /* small → fast */
.panel   { transition: transform var(--dur-expensive) var(--ease-standard); }  /* big → slow */
```

Timing alone, with no other principle applied, gives an element its personality.

---

## 10 · Exaggeration — push past the literal

A perfect imitation of reality looks static and dull. Exaggerate the characteristic property so the interaction is *satisfying*. **Easier to pull back than to add** — overshoot on purpose, then tune down.

```css
/* An underline that's thicker and more emphatic than the default text-decoration */
.link { background-image: linear-gradient(var(--accent), var(--accent));
        background-size: 0% 3px; background-position: 0 100%; background-repeat: no-repeat;
        transition: background-size .3s var(--ease-out); }
.link:hover { background-size: 100% 3px; }

/* A disabled button shakes its "head" — no, you can't click this */
@keyframes head-shake { 0%,100%{transform:none} 25%{transform:translateX(6px)} 75%{transform:translateX(-6px)} }
.btn:disabled:active { animation: head-shake .3s var(--ease-standard); }
```

The move: take one small existing property of an element and make it wilder than it currently is.

---

## 11 · Solid drawing — volume in 3D space

Respect the three-dimensional space flat elements occupy. Give them depth with rotation, perspective, layered shadow, blur-for-distance, and scale-toward-the-viewer.

```css
/* A stack of cards that fans out like held photos on hover */
.stack:hover .card:nth-child(1) { transform: translateX(-30%) rotate(-14deg); filter: blur(2px); }
.stack:hover .card:nth-child(2) { transform: translateX(0) rotate(0deg) scale(1.08); } /* front, toward viewer */
.stack:hover .card:nth-child(3) { transform: translateX(30%)  rotate(14deg);  filter: blur(1px); }
.stack .card { transition: transform .5s var(--ease-overshoot), filter .5s var(--ease-standard); }
```

Elements set *back* in space blur slightly and shrink; the one in *front* scales up. Shadows come in layered stacks, never a single flat `box-shadow` (see `web-design` → craft details).

---

## 12 · Appeal — charisma and delight (the hardest)

Appeal is downstream of simply being a good designer — pleasing color, type, and composition come first. Motion adds the final magnetism: a soft glow on hover, a tasteful gradient shift, and **ambient, almost-imperceptible motion** that makes a page feel alive and invites exploration.

```css
/* Ambient parallax: background scrims drift subtly with the pointer, heavily damped */
/* JS sets --mx / --my from pointer position, lerped toward the target each frame */
.scrim { transform: translate(calc(var(--mx) * 20px), calc(var(--my) * 20px)); }
```

Damp it hard — the motion should be barely perceptible, felt more than seen. The whole purpose of appeal: make a person *want* to stay on the page and explore it.

---

## They stack

Real interactions combine several principles at once — an entrance is timing (9) + slow-in/out (6) + overlapping stagger (5) + a touch of squash (1) + follow-through overshoot; a fanning card stack is solid drawing (11) + exaggeration (10) + secondary action (8). Learn them individually, then layer them. And always: **design the artifact to be structurally sound first, animate second** — motion enhances a good page; it cannot rescue a bad one.
