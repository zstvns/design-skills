# Craft Details

The tells that separate a site that was *designed* from one that was *assembled*. None of these are visible in a glance, and all of them are felt. This is the floor for shipped web work — the philosophy behind it lives in `design-principles`; this is its concrete web application.

## Typography Craft

- **Secondary text color.** Body copy is never the exact color of headings. Soften it (lower opacity or a secondary shade) so hierarchy reads even within a single typeface.
- **Weight.** Don't default to bold — bold is a tool, not a starting point. Body is regular/book. Reserve heavier weights for moments that earn emphasis; use lighter weights for supporting text.
- **Casing as a tool.** Uppercase for labels and metadata, sentence case for readability, all-lowercase for a deliberate casual feel. Casing is a design decision, not an accident.
- **Leading.** Headings 1.1–1.3. Body 1.5–1.6.
- **Size hierarchy.** The type scale (golden ratio ~1.618 is a fine baseline) gives order; breaking it intentionally gives interest. An `h1` need not be the biggest thing on the page — HTML tags are semantics, not a visual contract.

## Color Discipline

- **The CTA color is one deliberate, always choice.** Pick it once and use it for the primary action across the entire site.
- **It is not a text or graphic color.** The CTA color must be *chromatically distinct* from the color carrying headlines, icons, and decoration — pick one that reads as *progression forward* (green or blue, heuristically). If the button is the same color as the text around it, it blends instead of popping.
- **Reserve it.** Minimize it everywhere else — icons, borders, decoration — so it detonates when it lands on a button.
- **Differentiate the shape, too.** Give the CTA a pill or rounded form distinct from the squared rectangles of cards and inputs, so the action reads at a glance.
- **Five stops, not ten.** Base + 2 shades + 2 tints per color. Resist the AI reflex to generate full ramps you'll never use.
- **Secondary CTAs stay distinct** from primary in every state, hover included — never converging to the same appearance.

## Work Systematically, Not Ad Hoc

Think through the whole page before touching one section. Global decisions get made once, in a single swoop — not re-decided section by section.

- **Batch global changes.** Recoloring every body paragraph to the secondary text color, restyling every card, swapping a typeface — do it across the page at once, ideally through a token/variable, never one element at a time.
- **Define tokens up front** (text-primary, text-secondary, the CTA color, the 5-stop ramps) so a later change is one edit, not fifty.
- **Pre-ship pass:** spelling and grammar check, and an Open Graph image for the page.

## Depth and Light

- **Multi-layer shadows.** Realistic depth is 3–5 stacked shadows at increasing spread and decreasing opacity. A single `shadow-md` / `shadow-lg` reads flat and generic. A CTA should feel juicy — tactile, like a jewel.
- **Grids and line work** are alternatives to shadow for structure.
- **Light effects** (glows, gradients, sheen) must tie to the brand story — metallic for industrial, soft glow for wellness. Gratuitous light that fills space reads as filler.
- **Flat and minimal is a valid choice** — when the brand calls for it, not as a default.

## Surface Transitions

- **No banded sections.** Hard-edged white/gray/white alternation is the path of least resistance. Use gradual background shifts, cards, depth, or layout changes to break sections.
- **Earn the dark/light flip.** It marks a narrative shift or spotlights a section (a CTA block), it doesn't alternate for variety.

## Optical Alignment

- **Icon buttons** need asymmetric padding — the icon side gets ~75% of the base padding for optical balance.
- **Bullets** align with the *first line* of their text, not the vertical center of wrapped text. `items-start` with a small top offset, never `items-center` when text wraps.
- **Nested radii.** `inner_radius = max(0, outer_radius − padding)`. Never eyeball a nested border-radius.

## Spacing and Responsive

- **All spacing in rem**, never px in production.
- **`clamp()` for fluid sizing** — never fixed pixel font sizes. Horizontal page padding percentage-based (e.g. `px-[5%]`); section vertical padding fluid.
- **Never let a mobile fix cascade up.** The base classes represent the desktop design; add smaller-breakpoint overrides (`max-*:`) to adjust down. Don't touch desktop base values to fix mobile.

## Interaction

- **Interactive elements signal interactivity** before the click — a hover cue, a state change.
- **Primary vs. secondary CTAs** feel distinct on hover — different transition, different treatment.
- **Footer and nav links** are secondary by default, primary on hover. Not everything can be a focal point.
