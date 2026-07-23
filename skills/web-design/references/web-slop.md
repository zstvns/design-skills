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
- **CTA color = text color** — the button painted in the same hue as the headlines and graphics, so it blends instead of reading as *the* action. The CTA color must be a distinct forward color.

## Layout

- **Banded sections** — alternating white/gray/white with hard edges.
- **Uniform grids everywhere** — every section a 3-column icon grid, no rhythm.
- **Only the column trio** — 2-col / 3-col / left-right and nothing more adventurous; the page never surprises, so it reads as safe/assembled.
- **An eyebrow on every section** — a mono/uppercase kicker over each block, which flattens hierarchy instead of building it. Use them sparingly.
- **A busy motif behind the hero** — pattern, grid, and scanlines competing with the headline and primary action in the one section that most needs to be clear.
- **Wireframe-first thinking** — a template filled with copy, instead of a layout built around the words.
- **Text-only sections that should carry a visual** — a claim that needs a product shot left as a wall of words.
- **Filling leftover space** — logos, key claims, and hero assets dropped wherever there's a gap rather than given their own lane.
- **Under-scaled headlines** — section titles sized like body copy, so no section has an anchor.

## Components

- **Identical CTA treatments** — primary and secondary buttons the same, especially on hover.
- **Squared-off CTA** — the primary action shaped like every other card and input, with no differentiated (pill/rounded) form.
- **Icon-plus-text instead of real logos** — "📷 Instagram" stand-ins in a trust/integration strip where the actual brand marks exist and should be pulled.
- **Low-contrast logo strip** — real logos, but dimmed until they're barely visible; the trust beat evaporates.
- **Same icon for different concepts** — a generic checkmark/lightbulb reused across features.
- **Generic screenshots** — raw product screenshots dropped in where a branded, layered mockup would be more intentional.
- **A product visual that misses its own story** — an illustration that decorates instead of showing what the product actually does.
- **Scattered logos** — trust marks at mismatched sizes and weights, tucked beside other elements.

## Motion

- **Motion for motion's sake** — everything fading in on scroll, parallax on everything, endless loops that guide nothing.
- **No motion at all** — a fully static page, no hover states, no response to interaction.

## Craft

- **No optical alignment** — icon buttons with equal padding all sides; bullets centered on wrapped text.
- **Eyeballed nested radii** — inner elements sharing the container's radius (should be `max(0, outer − padding)`).
- **Fixed pixel sizing** — px instead of rem/`clamp()`, breaking fluid scaling.
- **Mobile fixes that break desktop** — base values changed to fix mobile instead of additive smaller-breakpoint overrides.
