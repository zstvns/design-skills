# Sourcing References — Show the User Their Brand's Imagery

The fastest way to agree on an image style is to look at images together. This is the step where "warm, honest, a little raw" stops being three adjectives and becomes *that* photo's light, *that* illustration's line, *that* icon set's weight. Do the legwork yourself — the operator shouldn't have to go hunting.

## The Loop

1. **Search from the Step 1 paragraph, not from the brand name.** Translate each sentence into searchable visual terms: "hard window light, workshop, hands, shallow depth of field" — not "authentic B2B." Search the muse's own world too; the strongest references are often from outside the category entirely.
2. **Pull 4–6 per class, plus one near-miss.** Fewer than four and there's no pattern to read; more than six and the user skims.
3. **Put them on one board.** A simple local HTML page (or a connected canvas if the Toolkit has one) — images grouped by class, each with a caption naming the *one quality it contributes* and its source + license status. Use the same neutral gray stage the collateral viewer uses, so the images read on their own terms.
4. **Walk it with the user.** *"These are what I found for photography — I picked each one for a specific thing. This one's for the light, this one's for the crop. The last one's close but wrong — it's too polished. What's right, what's off?"*
5. **Record and revise.** Note which landed, which didn't, and *what about them* — then rewrite the style paragraph to match what they actually responded to. Save the board and a source list to `.agents/assets/imagery/references/`.

## Where to Look, by Class

| Class | Usable (license permits shipping) | Reference only |
|---|---|---|
| **Photography** | Unsplash, Pexels; public-domain museum and archive collections (the Met Open Access, Rijksmuseum, Library of Congress, Smithsonian Open Access) | Photographer portfolios, editorial features, Are.na, Savee, Cosmos, Pinterest, other brands' sites |
| **Illustration** | Public-domain collections (botanical plates, engravings, old diagrams, patent drawings) | Behance, Dribbble, illustrator portfolios, Are.na, picture books, editorial illustration |
| **Iconography** | Open icon libraries — Phosphor, Lucide, Tabler, Iconoir, Material Symbols, Heroicons (check each license) | Other products' custom sets |
| **Pattern & texture** | Public-domain textiles, papers, and print ephemera; textures you render in CSS/SVG | Material and architecture photography, other brands' surfaces |

Always check the license on the page itself — "free to download" is not "free to use commercially," and licenses change.

## Per-Class Notes

**Photography.** Caption for the photographic decision, not the subject: light direction and hardness, lens feel (wide and close vs. long and compressed), depth of field, where the subject sits in the frame, color temperature, grain. A user who loves a photo of a kitchen may be responding to the light, not the kitchen.

**Illustration.** Group references by technique (line weight, fill vs. outline, flat vs. dimensional, texture, perspective) rather than by subject. Two references with the same subject and different techniques make the choice obvious.

**Iconography.** Don't just show libraries' marketing pages. **Render the same 8–12 concepts the brand actually needs** (its features, its nav, its states) in 2–3 candidate libraries, side by side, at the real UI size, in the brand's text color. Check stroke weight against the body face — an icon set should feel like it was drawn with the same pen as the type. If no library fits, that's the case for a custom set, built on one documented grid.

**Pattern & texture.** Pair each material reference (a weave, a paper grain, a stone, a print process like risograph or letterpress) with a CSS/SVG render of how it would actually appear on screen. Texture is the class where code renders the real thing best — show the real thing.

## The Near-Miss

Each class gets one reference that is *almost* right — the over-polished version of the light, the too-cute version of the illustration, the icon set that's a hair too heavy. Name why it's wrong. The user's reaction sets the edge of the brand world more precisely than any approval does, and it becomes the first entry on that class's never list.

## What to Record

For each reference: URL, class, the quality it was picked for, the user's verdict (in / out / near-miss) and why, and the status (`reference only` or `usable — <license>`). Usable references that the user loves are anchor candidates (SKILL.md Step 5). Reference-only images inform the spec and the prompts; they never ship.
