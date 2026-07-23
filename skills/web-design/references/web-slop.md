# Web Slop — the AI-Generated Tells

Patterns that immediately signal a site was *generated* rather than *designed*. This is the web-specific complement to `design-principles` → ai-slop.md — don't restate the general philosophy here; this is the checklist you run on a **rendered page**. List what you actually find; "none" is a reflex, not a result.

## Typography

- **Bold as default** — bold everywhere, so nothing is emphasized. Body should be regular weight.
- **No secondary text color** — every heading and paragraph the same color/opacity, so there's no hierarchy within a face.
- **Flat hierarchy** — headline and body too close in size; no "guitar solo," everything at one volume.
- **Missing casing variation** — everything sentence case. Uppercase labels, lowercase accents, and sentence case are design tools.

## Color

- **Purple / oversaturated palettes** — electric blue, neon gradients chosen because they look "techy," not because they mean something.
- **Too many tints and shades** — 10 stops where 5 (base + 2 shades + 2 tints) would do.
- **CTA color everywhere** — the action color on icons, borders, backgrounds, decoration, diluting its power.

## Layout

- **Banded sections** — alternating white/gray/white with hard edges.
- **Uniform grids everywhere** — every section a 3-column icon grid, no rhythm.
- **Wireframe-first thinking** — a template filled with copy, instead of a layout built around the words.
- **Filling leftover space** — logos, key claims, and hero assets dropped wherever there's a gap rather than given their own lane.
- **Under-scaled headlines** — section titles sized like body copy, so no section has an anchor.

## Components

- **Identical CTA treatments** — primary and secondary buttons the same, especially on hover.
- **Same icon for different concepts** — a generic checkmark/lightbulb reused across features.
- **Generic screenshots** — raw product screenshots dropped in where a branded abstraction would be more intentional.
- **Scattered logos** — trust marks at mismatched sizes and weights, tucked beside other elements.

## Motion

- **Motion for motion's sake** — everything fading in on scroll, parallax on everything, endless loops that guide nothing.
- **No motion at all** — a fully static page, no hover states, no response to interaction.

## Craft

- **No optical alignment** — icon buttons with equal padding all sides; bullets centered on wrapped text.
- **Eyeballed nested radii** — inner elements sharing the container's radius (should be `max(0, outer − padding)`).
- **Fixed pixel sizing** — px instead of rem/`clamp()`, breaking fluid scaling.
- **Mobile fixes that break desktop** — base values changed to fix mobile instead of additive smaller-breakpoint overrides.
