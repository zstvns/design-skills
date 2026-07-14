# Logo Construction & Craft

The build-level craft that separates a resolved mark from a rough one. This is where "no geometric cohesion," "weak typography," and "off ratios" get fixed — the exact failures a generated mark ships with when it skips construction.

## Geometric harmony — the golden ratio, corrected by eye

Build the mark on an underlying geometry so its parts relate, instead of floating at arbitrary sizes.

- **Construct with circles and squares in ~1.618 ratios.** Size elements so their proportions echo the golden ratio (1.618) — a shape 1.618× another, a circle whose radius relates to a square's side. This is what produces "geometric harmony": the parts feel like one family, not a pile.
- **Stick to geometry; use the pen tool.** Draw from circles, squares, and their intersections rather than freehand blobs. Curves should have deliberate tension, not wobble.
- **But trust your eyes over the math.** You are going for *visual coherence and aesthetic*, not mathematical certainty. Optical alignment beats numeric alignment — the eye plays tricks (equal-length strokes can look unequal; a circle sitting on a baseline must overshoot it to look aligned). If a mathematically "correct" element looks wrong, adjust it until it looks right. Math gets you close; the eye finalizes.
- **Unify the paths.** Outline all strokes; merge into a single uniform shape where the mark is one color (keep genuinely separate colors/shapes separate). The goal: circles that visibly *match* the squares they meet, one clean construction — not overlapping fragments.

## Typography & tracking — the wordmark is drawn, not typed

Most "weak logo" verdicts are really weak *type* handling.

- **Licensed faces only.** Commercial license confirmed (free Google fonts, Adobe Typekit, Pangram Pangram, etc.). Never ship a mark on a face the client can't legally use — and never a system default (Arial/Helvetica-as-drawn is placeholder, not a logo).
- **Choose a face with character** appropriate to the emotional target — then *draw* it, don't just set it.
- **Be picky about letterform spacing.** Kern individual pairs by hand — pull a letter in where a default sidebearing leaves a hole (e.g. an "A" that opens too much negative space). Track for *even color* across the word: no letter reads loose or tight against its neighbors.
- **The wordmark must read as one unified graphic**, not a row of separate glyphs. Test on black-on-white at size: scan for any letter spaced oddly relative to the rest. Wide letterspacing is fine *if* it's even and intentional (a spaced wordmark can be distinct); uneven spacing never is.

## Lockup ratio — mark to wordmark

The relationship between the symbol and the wordmark is its own design decision, and a common failure point.

- **Balance them optically, not by bounding box.** The mark and the wordmark should feel equally weighted — match cap-height to mark-height by eye, align optical centers, set the gap so they read as one lockup. A mark that dwarfs or is dwarfed by its wordmark is the "ratios are off" tell.
- **Define the spacing and alignment** as a rule (x-based clear space), so the lockup is reproducible, not eyeballed each time.
- Build the lockup variants that the system needs (horizontal, and a stacked/vertical only if it's actually used — many brands don't need one).

## Delivery & variants

- **Color mode:** work in RGB (most clients are digital); print/CMYK only if the deliverable demands it.
- **Variants:** full-color, black, white, grayscale, inverted — each checked to spec, not just auto-generated. **Black-and-white does not mean solid 100% black:** opacity steps / tints within a single value are legitimate (a mark built from 30/60/100% of one hue still passes B&W, as long as it's *monochrome* — it isn't leaning on color or a gradient to read).
- **App icon** (often a separate delivery): rounded + square, with and without the name, sized to the target grid (e.g. 240×240 at 2×), PNG + SVG.
- Tools like Logo Package Express automate the variant export once the mark + logotype are set.

## The construction check

Before calling a mark done: geometry relates (golden-ratio-derived, optically corrected) · paths unified · type licensed, characterful, and hand-tracked · lockup optically balanced · holds in black-and-white (opacity OK) · survives the implementation grid ([sad-checklist.md](sad-checklist.md)). A mark that fails any of these is *rough*, not resolved — say so (see [logo-fixes.md](logo-fixes.md)).
