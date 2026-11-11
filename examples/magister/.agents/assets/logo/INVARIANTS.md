# Magister — locked logo assets

**Place these files. Never rebuild, re-space, recolour, crop, box, or re-typeset the mark.**

## The files

| Asset | File | Use |
|---|---|---|
| Primary lockup | `logo-lockup.svg` | default, everywhere |
| Icon / mark alone | `logo-icon.svg` · `logo-icon-white.svg` | favicon, avatar, tight spaces |
| Inverse | `logo-lockup-inverse.svg` | dark grounds |
| Mono | `logo-lockup-black.svg` · `-white.svg` · `-gray.svg` | 1-colour, print, etch |
| Social avatar · app icon | `avatar.svg` · `app-icon.svg` | square · rounded square |
| Raster | `raster/` | surfaces that can't take SVG |

## Construction (why the proportions are what they are)

The mark is **"A — the Command Point"** (`cmd2`), the recorded recommendation out of `logo-design`: a bold open ring with a needle to the gap — a gauge reading a live system.

- Logotype **cap height = 100 units**; the wordmark ships **outlined**, so it cannot re-render in a substitute face.
- **Icon height = 118 units** (1.18 × cap height), optically centred on the cap band — not on the full bounding box, which the `g` descender would skew.
- **Gap = 42 units** (0.42 × cap height) between icon and logotype.
- Lockup `viewBox="0 -9 753.23 140.04"` — contains the whole drawing including the descender. Verified by rendering each file standalone at 520px and 140px.

## Invariants

- **Clear space:** 0.42 × cap height (one gap-width) on all four sides. Nothing enters it.
- **Minimum size:** lockup **60px / 15mm** wide; icon alone **24px / 8mm**. Below that the needle and the ring's gap start to close up — place `logo-icon.svg`, or go bigger. *(Verified against the smallest real placement in the set: the business card at 196px @300dpi = 16.6mm. An earlier draft of this file claimed a 32mm floor, which the card would have failed — the number was invented rather than measured.)*
- **Colour is fixed and enumerated.** Near-black `#14100A` · cream `#F2EBDD` · `#000000` · `#FFFFFF` · gray `#8A8171`. Pick the variant that suits the ground; **a ground is a variant choice, not a colour edit.**

## Misuse — each of these has actually happened

- **No recolouring.** Not to an accent, not "just for print." The green-tinted mark on a deck slide was misuse.
- **No `currentColor`.** Never leave a file colour-inheriting so consumer CSS decides the mark's colour. These files carry explicit fills for exactly that reason.
- **No second `viewBox`.** The file's own `viewBox` is part of the asset. Wrapping it in another one nests viewports and silently re-maps the artwork; stripping it renders a fragment. Size the placement with width/height.
- **No rebuilding the lockup.** Don't set the wordmark next to the icon yourself, don't adjust the gap, don't swap the cut. `logo-icon.svg` is a *named variant* for tight spaces — not licence to re-lockup.
- **No boxing, cropping, stretching, or effects.** `avatar.svg` / `app-icon.svg` are the only containered forms.
- **No medium-specific ornament** added around it.

## Provenance / open item

Generated from `logo-design`'s recorded recommendation (`quiver-marks/cmd2.svg`) plus its outlined logotype (`wordmark-outlined.svg`). The **colour set above was taken from the design tokens, not from a colour spec `logo-design` had written down** — confirm it there and reconcile if it differs. If a surface needs a variant that isn't in this folder, go back to `logo-design` and have it added; never improvise one at the point of use.
