# Asset Intake — What to Extract

Used in `brand` Step 1. Pull the **concrete specifics**, not impressions. The goal is values you could hand to another designer and get the same result.

## Autonomous discovery: from a URL to a full asset set

Default to finding things yourself before asking the user. From a single domain:

1. **Crawl key pages** — `/`, product/features, pricing, `/about`, a blog post. Don't judge a brand from one page.
2. **Scrape the footer** — it almost always lists the brand's own social profiles, app-store links, and sometimes a press/brand page. Collect and follow them.
3. **Probe common brand paths** — `/brand`, `/brand-assets`, `/press`, `/media-kit`, `/about/brand`, `/newsroom`. Press kits hand you logos, palettes, and usage rules directly.
4. **Get the *current* logo from the live nav.** The rendered `<header>`/`<nav>` is the source of truth — pull the exact `<img src>`, inline `<svg>`, or CSS `background-image` it uses (read the DOM or screenshot it; a markdown fetch strips it). Favicon, OG image, apple-touch-icon, manifest icons, and press kits are often **stale** — use them for other forms, but reconcile against the nav logo; if they differ, the nav wins and the gap is a finding.
5. **Screenshot** the site and each social feed via browser automation — for treatment that markup can't convey.
6. **Prefer the codebase** when you're in the repo — tokens/CSS/Tailwind config are exact; inference from a screenshot is not.

Only after you've exhausted what you can reach, ask the user for the unreachable: gated Figma, internal decks, print collateral, off-site photography, and the *why* behind decisions.

## How to access each channel

| Channel | How to ingest |
|---------|---------------|
| Live website | Fetch the HTML/CSS; screenshot key pages; pull computed colors, fonts, spacing. The rendered site beats any description of it. |
| Site codebase | Read the CSS / Tailwind config / token files directly — the single most precise source for color, type scale, spacing, radii. |
| Logo files (SVG/AI/PNG) | Open/inspect; note formats available, lockups, color variants, construction. SVG gives exact colors and geometry. |
| Style-guide PDF | Read it — but treat it as *stated* rules to verify against the live assets, not ground truth. |
| Figma | Read via the Figma connection — variables/tokens, type styles, components. |
| Social feeds | Screenshot the actual feed; read captions. This is where the brand's real *range* shows. |
| Decks / collateral / PDFs | Read and screenshot; note layout systems, long-form type, data-viz style. |
| Email | Screenshot; note constrained-client type/color and CTA treatment. |

## What to pull, by asset type

**Website / product UI** — palette by role (background, text, action, support) with exact values; type faces + scale + weights; spacing rhythm and grid; component styling (buttons, cards, radii, shadows); motion; voice from the copy. *Most precise from the codebase/tokens.*

**Logo files** — anchor on the **current** mark from the live nav (see step 4 above); treat favicon/OG/press-kit copies as possibly outdated. Then catalog: primary and secondary lockups; the mark alone; clear space; minimum size; color/reversed variants; what formats exist (and what's missing for handoff).

**Style guide** — the stated rules for color, type, logo, voice. Capture them, then **flag every place the live assets contradict them** (drift is the story).

**Social posts** — how the brand behaves in a fast, loose medium: recurring templates, motifs, type/color shortcuts, tone. Where it *deviates* from the website is a signal about the flexible range — not necessarily a mistake.

**Collateral / decks / one-pagers** — layout systems under real content density; how type behaves in long form; data-visualization style; print vs. screen treatment.

**Ads** — the most compressed expression of the brand. What it leads with, and what survives when space is tiny — that residue is often the true fixed core.

**Photography** — subjects, treatment/grade, art direction, styling, crop conventions. Is it shot, sourced, or generated?

## Synthesizing the intake

- **Reconcile across mediums.** Build the picture from where sources agree; treat disagreements as explicit findings.
- **Fixed vs. flexes.** What's identical *everywhere* is the fixed core. What changes by medium is the existing flexible range. This populates the Fixed-core / Flexible-range section.
- **Name the gaps.** Missing logo formats, no defined photography style, inconsistent type — each is a to-do, and in an Optimization, the work itself.
- **Stated vs. practiced.** Where the guide and the reality diverge, the reality usually wins for *describing* the brand; the divergence is a decision the user needs to make.
