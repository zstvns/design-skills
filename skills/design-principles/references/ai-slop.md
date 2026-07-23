# AI Slop — The Generated-Design Tells

A catalog of the tropes that mark a design as AI-generated or template-default. Each is the path of least resistance — what you get when *no one made a decision*. Presence is a **finding, not a style**: it caps a dimension's distinctiveness score no matter how "clean" the result looks. Use this in the competitive audit (`brand`) and in any critique.

## Layout & structure
- **Accent rail / left border** — a colored left-border bar on every card or callout. The single most common generated-UI tell.
- **No variety between sections** — every section the same centered, single-column stack; no alternating structure, no inversion, no rhythm. A page that scrolls as one repeated block.
- **Cramped container** — an over-narrow `max-width` that boxes everything into a thin center column with vast empty side margins.
- **Everything centered** — center-aligned headings, body, and elements all the way down.
- **Banded sections** — alternating white / gray / white hard-edged horizontal bands to fake separation.
- **`rounded-lg` everywhere** — the same medium border-radius on every card, button, input, and image.
- **Three-up card grids** for everything, regardless of content.
- **Dot-before-the-eyebrow** — a small colored dot (or tiny pill) glued in front of an uppercase eyebrow/kicker label above every section heading. The default "this is a section label" decoration, repeated down the whole page.

## Color
- **Purple-to-blue gradient** — the signature "AI startup" hero/button/section gradient.
- **Single acid accent on near-black** — a lone vermilion or acid-green pop on a dark canvas.
- **Oversaturated / purple palette** chosen to read "techy" rather than for any emotional intent.
- **Ten tints and shades** per color when five would do.

## Type
- **The try-hard trendy face** — reaching for a fashionable "designer" typeface (**Space Grotesk, Fraunces, Instrument Serif, Syne, Geist-outside-Vercel**, the Fontshare wave — **Satoshi, Clash Display, General Sans** — and their cohort) as a shortcut to looking designed. These now read as AI/startup-template costume — a characterful face doing the differentiation the *system* should be doing. **Banned in these skills.** Full catalog, cohorts, and the wave law (the ban list decays; the *test* doesn't): [cliche-typefaces.md](cliche-typefaces.md).
- **The lazy-neutral default** — a neutral face (Inter, Geist, Helvetica) reached for because *no type decision was made*. Note the nuance: a neutral face is **not** slop when chosen *deliberately* — Inter, used so that color, motif, composition, and treatment carry the distinction, beats a try-hard characterful face every time. The slop is the absence of a decision, not neutrality itself.
- **The costume face** — the face that literally *is* the muse or category (Trajan/Cinzel for epic-or-Roman, Papyrus for ancient, Copperplate for law firms, blackletter for medieval). An abstraction failure, not a taste error — see cliche-typefaces.md cohort 6.
- **Bold as the default weight** — everything heavy, so nothing leads.
- **Serif-display-on-cream + terracotta** — the other cliché pole (warm #F4F1EA, a serif headline, a clay accent).
- **Near-black canvas + high-contrast serif display + one jewel-tone accent + tasteful mono** — the current "premium AI tool" default.
- **The "Vercel knockoff"** — near-black canvas, a geometric grotesk (Geist / Inter), and a monospace bolted on for "technical" flavor. The mono is decoration, not because the content is code. (The tell here is the *combination* worn as costume — not the neutral face itself; see the lazy-neutral nuance above.)
- **Mismatched mono** — pairing a mono with a primary family that *already ships its own mono cut*. Use the family's mono (or a deliberate companion) for a coherent type system; an unrelated mono stapled on is a cohesion failure (see `design-principles` → Contrast, Not Competition).

## Iconography & imagery
- **Generic icon-pack** glyphs; the **same icon reused** for different concepts.
- **Emoji as section markers.**
- **Raw product screenshots** dropped in instead of branded abstractions.
- **No illustration**, or stock / obviously-AI illustration with no owned style.

## Motion
- **Fade-up-on-scroll on every element**, identically, regardless of importance.
- **A looping gradient or particle background** untethered to any story.

## Execution defects (breakage, not just taste)
- **Broken decorative grid** — a masonry or justified grid that doesn't resolve: uneven gaps, orphaned or cut-off cells, items failing to align. Ambition the build can't hold.
- **No container discipline** — content that ignores a consistent max-width: sections starting and ending at different widths, elements spilling past the container edge with no intent, text running full-bleed on wide screens.
- **Inconsistent / sparse color** — a palette barely used, or used differently section to section, so nothing reads as a system.

## The tell behind the tells
All of these share one root: a default substituted for a decision. A design carrying several of them is *assembled*, not *designed* (see `design-principles` → Designed vs. Assembled). When auditing, name each trope you find and let it cap the score — "clean" is not the same as "considered."
