# The UI-Native Motion Toolkit — Zajno's Eight Techniques

Source & further reading: **[motion.zajno.com](https://motion.zajno.com/)** (Zajno Digital Studio).

If [the twelve principles](twelve-principles.md) are the *physics and emotion* of motion — **why** a moving thing feels alive — these eight are the *practical move-set*: the **techniques** you actually reach for in an interface. The twelve tell you how motion should feel; the eight are the vocabulary of moves that produce it on a screen. They map onto the principles rather than replacing them.

Zajno's framing thesis, which matches this skill's: **motion is a strategic tool, not decoration** — it emphasizes the details a user should pay attention to and helps them navigate. Every technique below is a way to *direct attention*.

One useful distinction it draws: **real-time** motion (responds live as the user interacts — hover, drag, scroll) vs. **non-real-time** motion (plays after an interaction completes — a transition, an entrance). Reach for real-time when the motion should feel *connected to the user's hand*, non-real-time when it's a scripted response.

Recipes below assume the shared easing/duration system in [motion-floor.md](motion-floor.md).

---

## 1 · Easing — the foundation

Objects accelerate and decelerate; never constant velocity. This *is* principle 6 (slow-in/slow-out). Zajno's vocabulary — Linear, Ease, Ease-in, Ease-out, and cubic variants — is exactly the named-curve system in [motion-floor.md](motion-floor.md). Everything else here rides on top of it. **Linear is only ever correct for genuinely mechanical, continuous motion** (a marquee, a spinner); everything expressive gets a curve.

## 2 · Offset & delay — stagger for hierarchy

Multiple elements appearing on a staggered offset reads as *soft* and *directs the eye* in sequence. This is principle 5 (overlapping action) — **the biggest lever** — seen from the UI side. Keep the step small enough to overlap (see the stagger step in [motion-floor.md](motion-floor.md)); the offset itself becomes a hierarchy cue (what arrives first reads as more important).

## 3 · Fade in / fade out — but never alone

Opacity transitions for appearance/disappearance. The key rule Zajno stresses and that catches most amateurs: **a fade is weak on its own — pair it with a position or scale change.** A bare opacity fade has no direction and no weight; `opacity` + a small `translateY` or `scale` gives it both.

```css
/* Fade coupled with movement — never a naked opacity change */
@keyframes fade-rise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
.reveal { animation: fade-rise var(--dur-base) var(--ease-out) both; }
```

## 4 · Transform & morph — continuity of focus

One shape smoothly becomes another, keeping the viewer's eye locked on a single continuous object instead of a cut. In UI this is the **shared-element transition**: a card that grows into a detail page, an icon that morphs into a close button, a search pill that expands into a bar. The point is *continuity* — the user never loses the thread.

```css
/* Icon morph via animating SVG path data or clip-path; simple case: a play/pause toggle */
.morph-shape { transition: clip-path var(--dur-base) var(--ease-standard), border-radius var(--dur-base) var(--ease-standard); }
```

For layout-level morphs (card → page), use a **FLIP** technique (measure First & Last positions, invert with a transform, play) or the View Transitions API where available — both animate `transform` only, staying on the compositor. Avoid morphing by animating `width`/`height`.

## 5 · Masking — reveal within a boundary

A shape acts as a **container/window**, and content scales, moves, or rotates *within* its bounds — the reveal happens through the mask, not by moving the whole element. Great for text reveals (wipe a headline in line by line), image reveals, and clipped shape transitions.

```css
/* A headline that wipes in behind a mask edge */
.mask-reveal { clip-path: inset(0 100% 0 0); transition: clip-path var(--dur-slow) var(--ease-out); }
.mask-reveal.is-in { clip-path: inset(0 0 0 0); }
```

Use `clip-path` or `mask-image`; animate the clip/mask, not the element's box. Masking is how you get a *directional* reveal (left-to-right, center-out) instead of a flat fade.

## 6 · Dimension — "floating dimensionality"

Volume and depth conveyed through **layered movement and spatial relationships** — elements at different depths respond differently. This is principle 11 (solid drawing) as an ambient, layered system rather than a single object: soft layered shadows, subtle `perspective`/`rotate` on hover, foreground elements that lift while background settles. Depth is built from *relationships between layers*, not one element's shadow.

## 7 · Parallax — depth through differential speed

Layered objects move at **different rates** across an axis; distant layers move less than foreground ones, exactly as the real world reads to the eye. A close cousin of dimension (6) and of principle 12's ambient appeal.

```css
/* Scroll-driven parallax — background lags the foreground */
.layer--back  { animation: rise linear; animation-timeline: scroll(); }  /* small translate range */
.layer--front { animation: rise linear; animation-timeline: scroll(); }  /* larger translate range */
```

**Restraint is the whole game with parallax** — subtle depth invites exploration; heavy parallax induces motion sickness and reads gimmicky. Damp it hard, and kill it entirely under `prefers-reduced-motion` (parallax is one of the worst offenders for vestibular discomfort — see [motion-floor.md](motion-floor.md)).

## 8 · Zoom — transition between states and depth

Smooth zoom transitions move between interface states while **communicating depth and revealing hidden content** — zooming into a thumbnail to open it, pushing the current view back as a modal comes forward. Often the mechanism behind a transform/morph (4) transition. Scale from the correct `transform-origin` so the zoom appears to emanate from the thing the user acted on, not the center of the screen.

```css
.zoom-in { transform-origin: var(--origin, center); transition: transform var(--dur-slow) var(--ease-standard); }
```

---

## How the two lenses fit together

| Zajno technique (the *move*) | Twelve-principle root (the *why*) |
|---|---|
| Easing | 6 slow-in/slow-out |
| Offset & delay | 5 follow-through / overlapping action |
| Fade in/out (+ movement) | 3 staging · pairs with 1/6 |
| Transform & morph | 4 pose-to-pose · 7 arc |
| Masking | 3 staging · 10 exaggeration |
| Dimension | 11 solid drawing |
| Parallax | 11 solid drawing · 12 appeal |
| Zoom | 7 arc · 9 timing |

Use the **principles** to decide what a motion should *feel* like and whether it earns its place; use the **techniques** to build it. And the same discipline governs both: motion is a tool to direct attention, subject to hierarchy and restraint — never decoration applied uniformly.
