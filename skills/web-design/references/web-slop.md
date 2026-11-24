# Web Slop — the AI-Generated Tells

Patterns that immediately signal a site was *generated* rather than *designed*. This is the web-specific complement to `design-principles` → ai-slop.md — don't restate the general philosophy here; this is the checklist you run on a **rendered page**. List what you actually find; "none" is a reflex, not a result.

## Typography

- **Bold as default** — bold everywhere, so nothing is emphasized. Body should be regular weight.
- **No secondary text color** — every heading and paragraph the same color/opacity, so there's no hierarchy within a face.
- **Flat hierarchy** — headline and body too close in size; no "guitar solo," everything at one volume.
- **Body-size sprawl** — more than three font sizes below the hero, extra in-between steps around 20–24px, or a large `.lead` paragraph followed by smaller ones. The scale dissolves. Lock three body sizes (hero display type and the nav wordmark don't count); set subheads, buttons, and labels apart with weight and color, not another size. A fourth compact step is only for a dense dashboard or data table that actually needs it. Keep body paragraphs and lists at the same size.
- **Missing casing variation** — everything sentence case. Uppercase labels, lowercase accents, and sentence case are design tools.
- **A third mono font just for numbers** — a monospace face pulled in only for prices, timers, or counts. That's a third family doing a job the body face can handle. Use `tabular-nums` (`font-variant-numeric: tabular-nums`) on the body font instead, unless the product is actually a code, docs, or terminal tool.

## Color

- **Purple / oversaturated palettes** — electric blue, neon gradients chosen because they look "techy," not because they mean something.
- **Too many tints and shades** — 10 stops where 5 (base + 2 shades + 2 tints) would do.
- **CTA color everywhere** — the action color on icons, borders, backgrounds, decoration, diluting its power.
- **CTA color = text color** — the button painted in the same hue as the headlines and graphics, so it blends instead of reading as *the* action. The CTA color must be a distinct forward color.
- **Forward color as decoration** — the CTA color sprinkled on headlines, icons, and accents, so it no longer signals "act." It belongs on CTAs only; emphasis is a separate brand accent's job.
- **A negative brand color** — dramatizing a before/after by tinting the "bad" side with a brand color, instead of the clean neutral-vs-color dichotomy.

## Layout

- **Banded sections** — alternating white/gray/white with hard edges.
- **Uniform grids everywhere** — every section a 3-column icon grid, no rhythm.
- **Only the column trio** — 2-col / 3-col / left-right and nothing more adventurous; the page never surprises, so it reads as safe/assembled.
- **An eyebrow on every section** — a mono/uppercase kicker over each block, which flattens hierarchy instead of building it. Use them sparingly.
- **Centering everything** — every section headline and column centered by reflex; centered pairs drift off the grid. Left-align by default; top-align columns; center only truly-centered blocks.
- **Sections that blur together** — a run of L-R-L-R feature rows with no headers or spacing between groups, so distinct features read as one tied-together block.
- **One instrument the whole song** — the same card/panel idiom repeated down the page with only the column count changing; no shift in *medium* (no video, photo, illustration, pinned scroll-tell, or scale contrast). Tidy, but assembled.
- **A lone hook headline** — a giant one-liner hero with no follow-through, when the copy needed a completing second line and a smaller headline.
- **The 50/50 template hero** — a half-width H1 stacked with a long paragraph, a button, a secondary link, and a rule, sitting beside a media box. The headline gets trapped in half the screen, and every site starts to look like the same template. Let the headline and the lead visual command the full width, the center, or the depth of the viewport.
- **A KPI/spec strip under the hero** — a row of three or four stats along the bottom of the hero (users, uptime, funding, "trusted by"). It pads the opening and turns a value proposition into a spec sheet. Keep stats out of the hero; if they earn a place, give them their own tight social-proof beat after it.
- **Widows** — a single word stranded on a headline's last line.
- **A fake CTA** — a non-interactive element (a diagram node, a label) styled like a button.
- **Dump-it-all** — every detail shown at once where a layer of discovery (hover-to-reveal, expand) would be cleaner; interactive things that don't look interactive; a marquee that snaps back instead of looping seamlessly.
- **A busy motif behind the hero** — pattern, grid, and scanlines competing with the headline and primary action in the one section that most needs to be clear.
- **Wireframe-first thinking** — a template filled with copy, instead of a layout built around the words.
- **Text-only sections that should carry a visual** — a claim that needs a product shot left as a wall of words.
- **Filling leftover space** — logos, key claims, and hero assets dropped wherever there's a gap rather than given their own lane.
- **Under-scaled headlines** — section titles sized like body copy, so no section has an anchor.

## Components

- **Identical CTA treatments** — primary and secondary buttons the same, especially on hover.
- **Button walls** — a row of separate bordered buttons for choosing a mode, size, or filter. That's a selection control dressed as a pile of CTAs. Use a segmented toggle, tabs, or radios instead. Marketing sections still get at most one primary CTA — and a secondary only when the workflow genuinely needs two actions.
- **Squared-off CTA** — the primary action shaped like every other card and input, with no differentiated (pill/rounded) form.
- **Icon-plus-text instead of real logos** — "📷 Instagram" stand-ins in a trust/integration strip where the actual brand marks exist and should be pulled.
- **Low-contrast logo strip** — real logos, but dimmed until they're barely visible; the trust beat evaporates.
- **Same icon for different concepts** — a generic checkmark/lightbulb reused across features.
- **Generic screenshots** — raw product screenshots dropped in where a branded, layered mockup would be more intentional.
- **A product visual that misses its own story** — an illustration that decorates instead of showing what the product actually does.
- **Scattered logos** — trust marks at mismatched sizes and weights, tucked beside other elements.
- **Nested card cages** — cards inside cards, boxes inside boxes, every group wrapped in another border. The page turns into a wireframe of containers. Group with whitespace, a 1px divider, or a surface tint.

## Motion

- **Motion for motion's sake** — everything fading in on scroll, parallax on everything, endless loops that guide nothing.
- **No motion at all** — a fully static page, no hover states, no response to interaction.

## Craft

- **No optical alignment** — icon buttons with equal padding all sides; bullets centered on wrapped text.
- **Eyeballed nested radii** — inner elements sharing the container's radius (should be `max(0, outer − padding)`).
- **Fixed pixel sizing** — px instead of rem/`clamp()`, breaking fluid scaling.
- **Mobile fixes that break desktop** — base values changed to fix mobile instead of additive smaller-breakpoint overrides.

---

Some of these tells were sharpened against Google's [gemini-frontend-design](https://github.com/google-gemini/demolab/tree/main/skills/gemini-frontend-design) skill (Apache-2.0) — especially the 50/50 template hero, the hero KPI strip, body-size sprawl, a third mono face for numbers, button walls, and nested card cages.
