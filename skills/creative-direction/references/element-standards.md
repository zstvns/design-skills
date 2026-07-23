# Element Standards — the Bar per Asset Class

The per-element detail behind `creative-direction`. Each element ends with the same two tests: *does it trace to a muse or the emotional target?* and *would it score 4–5 in the audit against the confirmed competitor set?*

## Color

- **Roles first, values second:** background, text primary, text secondary, **action/CTA**, support. The action color is sacred — minimize it outside conversion elements so it means something when it appears.
- **Five stops per color** (base + 2 shades + 2 tints). Build the ramps; don't ship a flat accent (`Blue100 == Blue500` is a system that was never finished).
- **Verify ownership:** lay the palette against every confirmed competitor. Sharing the category's lane (the teal-greens, the tech-blues) means unowned, however consistently applied. Look for the lane nobody holds — and check the *conceptual* territory too (a name that implies a spectrum when a rival owns the rainbow).
- Supporting colors may be saturated and contextual; bold vs. restrained is a brand decision driven by the emotional target, not a rule.
- **Demonstrate the palette *coordinating* — don't let support colors vanish.** Reserving the accent is not the same as never showing the rest: a board that resolves to one accent + neutrals reads as an unfinished palette. Every declared color must appear *somewhere*, even briefly (a status, a second data series, a state), so the system reads as a coordinated whole. If a color is only ever named in a swatch and never used, either use it or cut it.
- **Color transitions are a source of delight.** A control that shifts hue with state (a throttle that runs cool→warm as it climbs, a meter that crosses from support-color to accent at threshold) shows two palette colors coordinating *and* rewards interaction. Small, deliberate, on every concept.
- WCAG AA pairs documented for every text/background combination.

## Typography

- **Contrast, not competition:** the display face and body face should have unmistakably different jobs. Almost-alike pairs create tension with no payoff.
- **System cohesion:** need a mono or a third register? Prefer a superfamily's own cut or a deliberate companion — never an unrelated face stapled on for flavor.
- **Restrictions are part of the spec:** allowed weights, style rules (italic policy, casing conventions), prohibited faces/fallbacks.
- **Weight discipline — default regular-to-semibold; reserve bold.** Full bold is rarely needed; semibold usually leads cleanly enough. Use bold sparingly, for specific deliberate emphasis, never as the default weight — when everything is heavy, nothing leads (see `design-principles` → ai-slop.md).
- **Licensing checkpoint (before approval):** foundry and license type (desktop/web/app), budget, and character + ligature coverage for every target market's language.
- A distinctive face is high-leverage in a same-sans category — but an expressive face badly systematized loses to a plain face perfectly systematized. Choose what you can execute.
- **Evoke the muse, don't costume it.** The literal muse-matched face is the costume trap — an all-caps Roman for an imperial muse, a blackletter for a medieval one — and it reads cliché and on-the-nose. Muse-derived type is rare; more often you evoke the feeling with a strong, clean pairing (e.g. an authoritative sans against a characterful accent) and let motif, color, and composition carry the muse. The more on-the-nose the literal face, the harder you look for the oblique pairing that still lands the feeling.
- **A different body face per concept.** In a three-concept set, repeating one body/paragraph face across concepts is a differentiation failure even when headlines and palettes differ — each concept gets a body face chosen for *its* world.
- **Neutral beats try-hard; the system carries the distinction.** Differentiation comes from motif, color, composition, and treatment — not from a fashionable typeface. A neutral workhorse chosen *deliberately* (Inter) outperforms a trendy "designer" face grabbed to look designed. **Banned faces** (they now read as AI-slop / try-hard): **Space Grotesk, Fraunces** and their cohort — see `design-principles` → ai-slop.md. A characterful face earns its place only when it's genuinely the muse abstracted, never as costume.

## Composition & Layout

- Define the grid, container widths, spacing rhythm, and density.
- **Section variety is a requirement**, not a nicety: alternate structures (3-col → 1-col → 2-col), create interest through inversion, give each section's most important element its own lane and scale.
- Decide how the eye is directed — emphasis, recession, repetition — and write it down.

## Pattern & Texture

- The most brand-coherent motif source is the **mark's own geometry** (two trapezoids → a hexagon; a node-box → a diagram grid). Derive, don't invent from nothing.
- The motif must work **without the logo and without the brand color** — tonal, abstracted, croppable, scalable. That's what makes it a passive cohesion tool across ads, decks, social, and email.
- Check collisions: a motif that reads as a competitor's mark or texture is counterproductive (a rain-like pattern in a category with a rain-mark rival).
- Define usage: where it appears, at what contrast (subtle backdrop, not a fight with the text — the blown-out-pattern failure), and where it must *not* appear.

## Iconography

- One source of truth: a single library or a custom set with documented grid (e.g. 24px), stroke weight, corner treatment, and fill policy.
- Plan the **tiers**: utility (UI affordances) now; storytelling (feature/narrative) and illustration (personality) as the brand matures. Tiers may differ in style *deliberately* — contrast, not competition.
- One icon = one concept. Never reuse a glyph for different meanings.

## Illustration & Product Abstraction

- **Branded abstractions over raw screenshots:** distill the product to the story being told — cut the chrome, keep the meaning, style it in brand color/shape language. A screenshot dump reads as assembled.
- If illustration exists, define its style (line, fill, texture, perspective, palette) tightly enough that two illustrators would converge.
- "No illustration" is a valid, *explicit* decision — absence by design, not by omission.

## Photography

- Define subjects (people? product? environment?), treatment/grade (warm/cool, contrast, grain), composition conventions, and sourcing (shot, stock with rules, or generated with rules).
- If photography isn't part of the brand, say so explicitly — otherwise every future deck fills the vacuum with mismatched stock.

## Motion (directional)

- Name the brand's motion character in one line (e.g. "quick, precise, no bounce" vs. "soft, buoyant").
- Intent hierarchy: state-change/hover (highest value) > page-load > scroll (must serve narrative) > ambient loops (lowest — use sparingly).
- **Motion can *communicate the concept*, not just decorate it.** For a music muse, a waveform or scale that actually *moves* says "music" faster than any static graphic; a launch muse wants a ramp, a governance muse a seal that stamps. When a concept feels flat or "trite," missing motion is often why — the idea isn't being performed. Interactive elements must read as **intentional, load-bearing** parts of the system, never afterthoughts bolted on.
- Full motion specs live with the application skills; here you set the *feel* so they don't improvise it.
