# Practical Production Defaults — Emil Kowalski

Sources & further reading (Emil Kowalski, *Animations on the Web*):
- **[emilkowal.ski/ui/7-practical-animation-tips](https://emilkowal.ski/ui/7-practical-animation-tips)** — the seven tips below.
- **[emilkowal.ski/ui/you-dont-need-animations](https://emilkowal.ski/ui/you-dont-need-animations)** — the restraint case; see *When not to animate at all* at the end.

Where [the twelve principles](twelve-principles.md) give the *why* and [Zajno's eight](ui-motion-techniques.md) give the *moves*, these are the **hard production defaults** — the specific numbers and gotchas that separate motion that feels polished from motion that feels off. Kowalski's premise matches this skill's: good animation is a **learnable craft**, not innate magic, and *unseen details compound* into polish.

---

## 1 · Scale buttons on press

Add a subtle scale-down on `:active` so the interface feels like it's *listening* — immediate feedback the instant a user presses.

```css
.btn { transition: transform var(--dur-fast) var(--ease-out); }
.btn:active { transform: scale(0.97); }
```

`0.97` is the sweet spot — perceptible, not cartoonish. (Principle 1, squash & stretch, at the smallest useful scale.)

## 2 · Don't animate from `scale(0)`

Starting an entrance at zero scale looks like the element **materializes out of nothing**. Start from `~0.9–0.93` instead — like a balloon that's deflated but still has visible shape. The movement reads gentler and more natural.

```css
@keyframes pop-in { from { opacity: 0; transform: scale(0.93); } to { opacity: 1; transform: scale(1); } }
```

This is the default for *natural* entrances (popovers, menus, cards). It refines the arc-in recipe in [twelve-principles.md](twelve-principles.md): the `scale(0)` wide-then-tall arc there is a deliberate *stylized* reveal — use it when you want theatrical emphasis, but for the everyday soft entrance, start at ~0.9.

## 3 · Don't delay subsequent tooltips

The **first** tooltip in a group should have its open delay (so hovering across a toolbar doesn't flash tooltips everywhere). Once one is open, **subsequent** tooltips in that group should open **instantly** — it feels faster without losing the point of the initial delay.

```css
[data-tooltip] { transition-delay: 300ms; }
[data-tooltip][data-instant] { transition-duration: 0ms; transition-delay: 0ms; }
```

Radix and Base UI expose this behavior out of the box; if hand-rolling, track "is a tooltip already open in this group" and flip the instant flag.

## 4 · Choose the right easing — `ease-out` is the workhorse

Easing is **the most important part of any animation.** For UI enter/exit, **`ease-out` is the default**: it accelerates immediately and decelerates into rest, so the element responds the instant it's summoned. **Avoid `ease-in`** for things a user is waiting on — its slow start reads as lag/unresponsiveness.

The CSS built-in `ease-out` is usually **not strong enough** — reach for a custom curve with more pull (see the `--ease-out` token in [motion-floor.md](motion-floor.md); build variations at **[easings.co](https://easings.co/)**). A `300ms` custom `ease-out` *feels faster* than the same 300ms on `ease-in`.

> Note on exits: classical animation sometimes accelerates exits away (an ease-in). Kowalski's practical UI stance — and the modern web consensus — is that **ease-out reads better for both enter and exit** because responsiveness beats physical purity on screen. Default to ease-out; reserve ease-in for the rare intentional "flies away" exit.

## 5 · Make animations origin-aware

A popover, dropdown, or zoom must scale **from its trigger**, not from `center` (the default, "wrong in most cases"). This is the same rule as Zajno's *zoom* — the motion should emanate from what the user acted on.

```css
/* Radix exposes the origin as a CSS var; Base UI as --transform-origin */
.content { transform-origin: var(--radix-dropdown-menu-content-transform-origin, center); }
```

Subtle on its own — but *unseen details compound* (Kowalski cites Paul Graham: all the unseen details combine into something stunning).

## 6 · Keep animations fast — under ~300ms

**Rule of thumb: UI animations stay under `300ms`.** A `180ms` transition feels more responsive than `400ms`; perceived performance is real ("a faster-spinning spinner makes the app seem to load faster"). Common effective values: **`125ms`, `180ms`, `300ms`.**

**And the restraint rule that matters most: remove animation (or hover states) from actions a user performs dozens or hundreds of times a day.** A flourish that's delightful once is friction on the 50th repeat — it makes the interface feel *slower*. High-frequency = fast or none.

This scopes the duration scale in [motion-floor.md](motion-floor.md): the sub-300ms band is for **micro-interactions and standard UI transitions** (the common case). The longer "expressive/expensive" durations are reserved for rare, deliberate hero moments — and even those must earn the wait.

## 7 · Use blur when nothing else works

When easing and duration tuning still leave a transition feeling abrupt, add a touch of `filter: blur()` to **bridge the visual gap** between old and new states — it tricks the eye into reading a smooth transition instead of two distinct snapshots.

```css
@keyframes blur-in { from { opacity: 0; filter: blur(2px); } to { opacity: 1; filter: blur(0); } }
```

`~2px` is usually enough. Use it as a finishing touch, not a crutch, and remember `filter` is heavier than transform/opacity (see performance notes in [motion-floor.md](motion-floor.md)) — fine for a hero transition, costly across many elements at once.

---

## When not to animate at all

Kowalski's companion argument: **sometimes the best animation is no animation.** Motion must serve a purpose — explain, give feedback, or delight — and for frequently-repeated interactions it usually does the opposite: initial delight curdles into friction, and the interface feels *slower*.

**Never animate keyboard-initiated actions.** Arrow-keying through a list, menu, or command palette must be instant — an animated selection feels slow, delayed, and disconnected from the key press. Tools built for speed (Raycast is the reference) animate almost nothing for exactly this reason.

A simple decision test:

**Animate when —**
- You're **explaining** something complex (a feature demo, an onboarding step).
- You're giving **micro-feedback** (the button press-scale — a single, fast, connected response).
- You're establishing **spatial consistency** (a toast sliding in from and out to the same edge, so the user learns where it lives).
- The interaction is **rare** — a delightful surprise, not a daily tax.

**Skip it when —**
- The action is **keyboard-initiated** (never animate these).
- It's **high-frequency** — performed dozens or hundreds of times a day.
- The user has a **clear, immediate goal** and motion sits between them and it.

This is the same spine as `design-principles` → restraint: motion is subject to hierarchy, and *no motion* is a legitimate, often superior, choice. Add movement where it earns its place; everywhere else, get out of the user's way.

## The through-line

Every tip is the same discipline in miniature: **feedback as soon as possible, motion that reads responsive (ease-out, fast), origins and start-states that mimic the physical world, and restraint — up to and including none — on anything repeated.** Perceived performance matters as much as real performance, and the unseen details are what compound into polish.
