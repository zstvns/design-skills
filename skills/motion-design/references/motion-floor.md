# The Motion Floor — Tokens, Performance, Accessibility

The technical craft beneath the twelve principles. Because this skill ships real code, these are not optional polish — they are the difference between motion that feels engineered and motion that feels janky and cheap. `web-design` keeps a *light* motion floor and points the deeper craft here.

## A named easing system — never raw `linear`, never one `ease` everywhere

Linear motion is the loudest amateur tell (nothing physical moves at a constant rate). But the opposite failure is nearly as common: a single default `ease` applied to everything, which flattens all motion into one texture. Define a small **system of curves by role** and use them deliberately.

```css
:root {
  /* Standard in-place state changes — symmetric */
  --ease-standard:  cubic-bezier(.4, 0, .2, 1);
  /* Entrances — decelerate into rest (more slow-out) */
  --ease-out:       cubic-bezier(.16, 1, .3, 1);
  /* Exits — accelerate away (more slow-in) */
  --ease-in:        cubic-bezier(.5, 0, .75, 0);
  /* Springy overshoot — the playful / follow-through curve */
  --ease-overshoot: cubic-bezier(.34, 1.56, .64, 1);
}
```

Tune the curves to the brand's motion character: a premium brand leans on longer, gentler standard curves with little or no overshoot; a playful brand leans on `--ease-overshoot`. The *feeling* (from `.agents/design.md` / the emotional target) picks the curve.

## A duration scale mapped to the emotion lever

Don't invent a new duration per element. Pull from a scale, and remember the two rules: **small/fast/cheap ↔ big/slow/expensive**, and **small things move faster than big things.**

```css
:root {
  --dur-instant: 100ms;  /* micro-feedback: press, tiny toggles */
  --dur-fast:    180ms;  /* hover states, small transitions */
  --dur-base:    280ms;  /* standard component transitions */
  --dur-slow:    500ms;  /* larger panels, expressive entrances */
  --dur-xslow:   900ms;  /* "expensive" premium moments, big surfaces */
  /* Ambient loops live longer still — 1.2s+ — and should be barely perceptible */
}
```

Guideline ranges, not laws: micro-interactions ~100–200ms, most transitions ~200–400ms, expressive/premium moments ~500–1200ms. Anything faster than ~80ms reads as an instant snap (sometimes correct); anything slower than ~1s must earn the wait or it feels sluggish.

## Stagger with a consistent step

Overlapping entrances (principle 5) need a stagger step small enough to overlap, large enough to read as sequence. **~40–80ms per item** is the usable band. Drive it with an index custom property so it scales:

```css
.stagger > * { animation: card-in var(--dur-slow) var(--ease-out) both;
               animation-delay: calc(var(--i) * 60ms); }
```

Cap the total: a 20-item list staggered at 60ms takes over a second to finish arriving. For long lists, stagger only the first several items, or shrink the step.

## Animate compositor-friendly properties only

The browser can animate `transform` and `opacity` on the compositor thread without re-running layout or paint — these stay smooth at 60fps. Animating **layout properties (`width`, `height`, `top`, `left`, `margin`) or paint properties (`box-shadow`, `background-position` on large areas)** forces work on every frame and causes jank — and that jank is itself a "cheap build" tell.

- Move things with `transform: translate()`, not `top`/`left`/`margin`.
- Resize things with `transform: scale()`, not `width`/`height`.
- For shadow depth changes, cross-fade two stacked shadow layers via `opacity` rather than animating `box-shadow`.
- `filter` (blur, saturate) is GPU-accelerated but heavier than transform/opacity — fine for a hover or two, costly if animated on many elements at once.
- Use `will-change` **sparingly and temporarily** — on a handful of elements about to animate, not as a blanket. Overusing it wastes memory and can *cause* the jank it's meant to prevent.

## `prefers-reduced-motion` is non-negotiable

Vestibular disorders and motion sensitivity are real; large or continuous motion can make people physically ill. Every non-trivial animation needs a reduced path — usually opacity-only or instant. This is a defect if omitted, not a nicety.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
```

A blanket reset like the above is a safe floor. Better: keep meaningful *opacity* transitions (they don't cause motion sickness) and kill only the *movement* — reduced-motion means calmer, not necessarily zero feedback. Kill ambient/parallax/looping motion entirely under reduced-motion; those are the worst offenders.

## The motion-slop checklist (what to catch in your own build)

Extends `design-principles` → ai-slop's Motion section. If the page does these, it reads assembled, not designed:

- **Fade-up-on-scroll on every element, identically** — motion with no hierarchy. The signature AI-motion tell.
- **A looping gradient / particle / blob background untethered to any story** — movement as filler.
- **Everything on `linear`** or one undifferentiated `ease`.
- **Sequential (not overlapping) entrances** — elements queuing one-after-another like a slideshow.
- **Uniform durations regardless of element size** — a tiny toggle and a full-screen panel taking the same time.
- **Janky layout-property animations** — visible stutter from animating `width`/`top`/`box-shadow`.
- **No reduced-motion path** — the animation can't be turned down.
- **Motion that fights the message** — a busy hero animation competing with the headline and CTA (`web-design` → calm the motif in the hero).

The root of every item is the same as all slop: a default substituted for a decision. Name each one you find on your own rendered page and cut or fix it.
