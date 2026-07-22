# Frontend / Production-Craft Boilerplate

The non-negotiable craft floor for anything rendered — stylescapes here, and every applied surface the application skills (`web-design`, `collateral-design`, …) build later. Establish it in creative-direction; the application skills inherit and execute against it.

*Adapted from the "Frontend Design Skill" by joepro (x.com/joepro). Kept: the token scaffold, texture techniques, interaction-state and abomination checklists. Adapted: reframed to feed `.agents/brand.md` and this library's `design-principles` / `brand` audit rather than a one-off build.*

## Success criteria

- Distinct visual identity with a clear narrative and a **signature element**
- Production-grade: complete states, responsive behavior, real failure paths
- Accessibility by default (WCAG AA intent)
- **Token-driven** — a design system, not one-off styling
- **Zero reliance on recognizable AI tropes** (see `design-principles` → ai-slop.md)

## 1. Commit to one radical art direction — derived from the muses, never picked from a list

This is our **three-distinct-concepts** rule (see [stylescapes.md](stylescapes.md)) stated as craft: pick one extreme per concept and execute it with precision. Bold maximalism and refined minimalism both work — but **the direction always comes from the brand's muses and Emotional Target** (from `brand-strategy`), not from a style catalog. That's the whole method: the muses hone the direction.

**The named styles below are examples of what *committing to an extreme* looks like — not a menu to choose from.** Editorial magazine · neo-brutalist industrial · luxury refined · retro-futurist CRT · organic tactile · punk zine · Bauhaus precision · psychedelic surreal. Use them only to calibrate *how far to push*; reaching for one of these *instead of* the brand's own muses is the exact failure that produces generic, templated work. If a concept can't be traced back to a specific muse cue, it's off-method — go back to the muses.

**No two concepts converge** on the same fonts, palette, layout, or energy.

## 2. Invent a signature element

Every direction includes **one unforgettable, functional hook** — not decoration. It's the thing that makes the concept unmistakably this brand. Valid hooks: a morphing frame that responds to scroll/state; a typographic hero with deliberate optical kerning; a navigation pattern with spatial logic; a custom cursor that aids discovery; a texture system that carries hierarchy; a branded data-viz language; an orchestrated scroll reveal. The signature element is usually where the **muse's stealable cue** becomes literal (the OP-1's dimensional knobs, the console's amber telemetry).

## 3. Define tokens before layout

The visual system is expressed as tokens — this is the concrete form of `creative-direction`'s color-by-role and type-by-role decisions, and what the application skills consume. Fill every slot from the concept; don't leave defaults.

```css
:root {
  /* Color — by role, not by swatch */
  --color-bg:; --color-surface:; --color-text:; --color-muted:;
  --color-accent:; --color-focus:; --color-success:; --color-warning:; --color-danger:;
  /* Typography — named faces (see hard rules), by role */
  --font-display:; --font-body:; --font-mono:;
  --text-xs:; --leading-xs:; --text-sm:; --leading-sm:; --text-base:; --leading-base:;
  --text-lg:; --leading-lg:; --text-xl:; --leading-xl:; --text-2xl:; --leading-2xl:;
  /* Spacing */
  --space-1:; --space-2:; --space-3:; --space-4:; --space-6:; --space-8:;
  /* Radius + Shadow */
  --radius-sm:; --radius-md:; --radius-lg:; --shadow-sm:; --shadow-md:; --shadow-lg:;
  /* Motion */
  --duration-fast:; --duration-base:; --duration-slow:; --ease-out:; --ease-spring:;
}
```

## Aesthetic hard rules

**Typography** — make a *decision*; the two failures are drifting to an *undecided* default and grabbing a *try-hard trendy* face. **Banned: Space Grotesk, Fraunces** and their cohort (costume that reads as AI-slop — see `design-principles` → ai-slop.md). A **neutral face used deliberately (Inter) is legitimate** when motif/color/composition/treatment carry the distinction; a characterful face earns its place only when it's the muse abstracted. Tune tracking and leading deliberately; use typographic contrast as a primary tool; provide fallbacks that preserve tone. (Names, by role.) **Hard rules that separate a real system from an amateur one:** the **subhead uses the secondary/body face, never the headline face**; **body is never set in a monospace** (mono is for labels, telemetry, code only); type must show **real hierarchy** — contrast via a deliberate pairing *or* decisive weight/size/tracking within one neutral family (a single face at one weight everywhere is the amateur tell, not the use of one family); **no italic/oblique serif display** (it reads dated — near-universal no-go); and **weight discipline: default is regular-to-semibold — bold is reserved, used sparingly for specific emphasis, never as the default** (everything-bold means nothing leads).

**Color** — no emoji icons anywhere; **no default purple/blue gradient on white SaaS**; one dominant hue + 1–3 accents with *defined roles*; contrast and focus colors are functional; dark mode only if it strengthens the direction.

**Layout** — **no predictable center-hero → three cards → icon row**; consistent grid logic *plus at least one intentional grid break*; asymmetry when it clarifies hierarchy; responsive must preserve narrative and rhythm. (Bento-grid / overlap composition: see [stylescapes.md](stylescapes.md) → Composition.)

**Motion** — communicates structure, feedback, affordance; prefer *one orchestrated entrance* over scattered micro-animation; scroll reveals only when meaningful; respect `prefers-reduced-motion`; prefer transform/opacity.

**Texture & material** — *the anti-austerity rule.* **Avoid flat, sterile backgrounds unless austerity is a deliberate, stated choice.** Texture must support hierarchy, not add noise; depth language stays consistent; glass only if fully committed and readable. Allowed techniques: subtle grain overlay · SVG parametric patterns · noise-driven gradients · paper-fold shadows · CRT scanlines (retro) · procedural canvas texture (perf permitting). This is how a muse's *material* (see `brand-strategy` → muses at physical fidelity) survives into the render instead of being flattened.

## Required interaction states

Every interactive element: **default · hover · active/pressed · focus-visible · disabled · loading · error · empty** (where applicable). Focus styling is integrated into the aesthetic, never bolted on.

## Production requirements

- **A11y:** semantic HTML; ARIA only where needed; full keyboard nav; visible focus; form-validation messaging where forms exist.
- **Responsive:** ≥3 breakpoints; narrative + hierarchy preserved; touch targets ≥44px.
- **Performance:** avoid heavy effects by default; canvas/WebGL/particles require a reduced mode + lazy init; GPU-friendly animation.
- **Failure handling:** design network-failure/offline, partial/delayed data, and user-error recovery. Failure states are visually intentional, on-brand, informative. **No silent failures; no default browser error states.**

## Reject the output if any are true

- **Narrative incoherence** — typography, motion, layout, or copy feel authored by different systems; polished components that are conceptually disconnected; microcopy tone contradicting the direction.
- **Placeholder energy** — lorem/filler, vague marketing language, empty states without guidance, labels that ignore the established voice. All copy is authored, contextual, deliberate.
- **Abominations** — Inter + purple gradient + rounded cards + generic icons; generic chatbot bubbles with no branded concept; default-Tailwind appearance with minimal tokenization; missing focus/keyboard access; no error/loading states; marketplace-template resemblance; visual polish without usability completeness; convergence on the common AI aesthetic.

## Final quality gate

Signature element exists and is functional · tokens drive styling · a11y met · all interaction states implemented · failure/recovery designed · narrative consistency holds · responsive rhythm preserved · no AI-trope patterns. **If any check fails, the output is invalid.**

> Don't hold back. Every surface should feel authored by a designer with a clear point of view — not averaged from templates.
