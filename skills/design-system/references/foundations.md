# The Foundations

What each foundation page covers. The sections are the defaults; split or merge them to fit the system, but keep every section's mockup and keep the edge cases on the page. **Source** is where the decision already lives, so the page encodes it instead of inventing it. **Checked** is what `check-foundations.py` catches. Everything else is a self-check a person or agent answers.

Thresholds come from the library's own rules: contrast from `web-design` → accessibility-report.md, nested radii from `web-design` → craft-details.md, the motion floor from `motion-design`, and restraint (five stops, one protected action color) from `design-principles` and `creative-direction`.

## Color

- **Source:** `.agents/design.md` → color system (roles, ramps, the protected action color).
- **Sections:** roles (bg, surface, text, muted, action, focus, status); ramps (five stops); text-on-ground pairings; the action color and where it may appear; status colors; dark mode or themes.
- **Mockups:** each role on its real ground; a pairing matrix with ratios; a page fragment where the action color appears only on CTAs, beside the wrong version with action color bleeding into headlines and icons.
- **Edge cases:** muted text on a surface that's lighter or darker than the page; text over imagery (needs a scrim token); disabled states (exempt from contrast, but must still read as disabled); focus ring on the action color itself; translucent overlays; status colors for color-blind users (never color alone); every theme, not only light.
- **Checked:** contrast for every listed pair in every theme (4.5:1 body text, 3:1 large text, focus rings, and UI boundaries); raw colors in code; default Tailwind palette classes.

## Typography

- **Source:** design.md → type roles, scale, weights; `design-principles` → cliche-typefaces.md for the faces you don't swap in, including the house bans (Space Grotesk, Fraunces, Instrument, Cormorant) which only the owner can override in this project's typography foundation or brief. If a role's face still needs sourcing, `creative-direction` → [type-sources.md](../../creative-direction/references/type-sources.md): [FaceTypes](https://facetypes.xyz) is the go-to free catalog; download from the official source it names, and have the operator check that face's own licence.
- **Sections:** faces by role; the scale (size + leading pairs); weights and when bold is allowed; tracking; measure (line length); numerals (`tabular-nums` for figures, not a third face); files (WOFF2, `@font-face`, preload — self-hosted, same method whether the official source was Google Fonts or a foundry).
- **Mockups:** the scale as a specimen in real copy; a section using three body sizes or fewer, beside the sprawl version; a heading that wraps, balanced and unbalanced.
- **Edge cases:** long words and URLs; headlines at the smallest breakpoint; 200% zoom; translated strings 30% longer; missing font (fallback stack that keeps the metrics); numbers in tables.
- **Checked:** raw or off-scale `font-size`; arbitrary `text-[…]` classes; house-banned typefaces (Space Grotesk, Fraunces, Instrument, Cormorant) unless `allowBannedTypefaces` records an owner override. Self-hosting and licence filing are self-checks on the typography page (keep the licence file with the fonts when the licence asks; preload only the critical cut).

## Spacing

- **Source:** design.md → spacing logic; `.agents/design.md` → Component records for component padding.
- **Sections:** the scale; component padding; section rhythm; related-vs-unrelated gaps (proximity); density modes if any.
- **Mockups:** the scale as blocks; a card with its padding labeled by token; a section stack with rhythm right and wrong.
- **Edge cases:** content that's empty or one word; very long content; touch targets (44px minimum, met with padding, not with off-scale values); negative margins (only for optical alignment, as a named token).
- **Checked:** raw and off-scale padding, margin, and gap; arbitrary spacing classes.

## Radius and nested corners

- **Source:** design.md → shape language.
- **Sections:** the scale and what each step is for; **nested corners**; pills and circles; which elements are square on purpose.
- **Nested corners rule:** inner = max(0, outer − padding). Subtract the border width too. Write the inner radius as a token or as `calc()` on tokens (`max(0px, calc(var(--radius-lg) - var(--space-2)))`), never as a typed number. With unequal padding, compute from the smaller side. Apply the rule at every level of nesting.
- **Mockups:** a card, its image, and a button inside, with each radius labeled; the same card where the child repeats the parent's radius and the gap pinches at the corner.
- **Edge cases:** padding ≥ outer radius (inner is 0); flush media (clip with `overflow: hidden` on the parent instead of rounding the child); pills inside pills (both stay pills); responsive radius (keep the `calc()` so it stays correct); avatars and icons, which are exempt and named as such.
- **Checked:** raw and off-token `border-radius`; arbitrary `rounded-[…]`; declared nested pairs whose token math is wrong; `calc()` radius tokens that go negative; a padded rounded element whose next child repeats its radius (a warning; it's a heuristic).

## Elevation

- **Source:** design.md; Component records.
- **Sections:** levels and what lives on each; shadow tokens (layered, never one heavy blur); borders vs. shadows; z-index layers.
- **Mockups:** each level on the real ground; a dialog over the page; the wrong version with stacked shadows and card-in-card cages.
- **Edge cases:** dark mode (shadows vanish, so elevation moves to surface tint or a border); sticky headers over content; popovers inside dialogs (layer order); scrolled containers clipping shadows.
- **Checked:** raw `box-shadow`; raw `z-index` when `--z-*` layers exist.

## Grid and layout

- **Source:** design.md → composition and grid; `web-design` → section-patterns.md.
- **Sections:** breakpoints; columns and gutters; max widths and measure; the intentional grid break; alignment defaults (left, top-aligned).
- **Mockups:** the grid overlaid on a real section at each breakpoint; the break used once, deliberately.
- **Edge cases:** ultra-wide screens; 320px phones; odd item counts in a grid; content that doesn't fill a row.
- **Checked:** spacing tokens on gaps. Breakpoints and alignment are self-checks on the rendered page.

## Motion

- **Source:** design.md → Motion System (as built by `motion-design`). If it isn't there, mark the page pending and route to `motion-design`. Don't invent curves.
- **Sections:** easing tokens; durations; stagger; what animates (transform and opacity only); reduced motion.
- **Mockups:** a hover, a press, and an entrance, each labeled with its tokens; the wrong version with raw `linear` and a 600ms hover.
- **Edge cases:** `prefers-reduced-motion`; long lists (cap the stagger); interrupted animations; motion on low-power devices.
- **Checked:** raw durations and raw easing in `transition` and `animation` when the tokens exist.

## Iconography

- **Source:** design.md → Icon Library (as adopted by `art-direction`).
- **Sections:** the library; sizes on the type scale; stroke and fill rules; color (currentColor); icon + label pairing; accessible names.
- **Mockups:** the size tiers beside real text; an icon button with its label; the wrong version mixing two libraries and emoji.
- **Edge cases:** icon-only buttons (need an accessible name); missing icon for a concept (route to `art-direction`, never mix libraries); optical alignment with text.
- **Checked:** raw colors on icons. The library and stroke rules are self-checks.

## Optional foundations

Add these only when the system has them:

- **Focus and states** — hover, focus-visible, pressed, disabled, loading, and error for each interactive piece, on Radix, React Aria, or Base UI (or shadcn if present).
- **Imagery treatment** — the grade from `art-direction`, as tokens or a filter recipe.
- **Data-viz** — series colors that pass contrast against the ground and each other, plus patterns for color-blind readers.
