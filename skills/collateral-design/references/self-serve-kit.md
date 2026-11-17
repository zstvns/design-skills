# The Self-Serve Kit — Building Blocks Anyone Can Assemble

A brand system works like a set of building blocks. The core elements — the mark, the type styles, the color roles, the grid, the motif, the imagery, the voice — are pieces with fixed shapes. Hand someone the pieces and the approved examples, and they can build a new one-pager, post, or slide without breaking the brand. Hand them a blank canvas and the hex codes, and they can't.

The kit is how collateral stops depending on a designer for every request. It serves two users: **an agent** producing collateral on request, and **a non-designer** (a marketer, a salesperson, a founder) assembling a piece themselves. Both get the same rules.

## The Kit Points; It Never Copies

Every block is a **pointer to its source file**, not a copy of it. `.agents/design.md`, `.agents/brand.md`, `.agents/assets/logo/`, and `.agents/assets/imagery/` stay the source of truth; the kit tells you which piece of them to use and how. A copied hex value or a pasted spec goes stale the day `design.md` changes, and then the kit is quietly teaching the old brand.

Record the kit in `.agents/design.md` → **Application Notes** (the living-record section application skills append to), dated, with its version number. If `.agents/assets/design-system/` exists (built by `creative-direction` for Claude Design), point at its `tokens.css` rather than restating tokens.

## The Seven Blocks

| Block | What the kit specifies | Points to |
|---|---|---|
| **1. Logo** | Which file goes on which ground: `logo-lockup.svg` on light, `logo-lockup-inverse.svg` or `-white.svg` on dark, `logo-icon.svg` in tight or constrained spaces, `-black.svg` / `-white.svg` where one ink is the point. Clear space and minimum size. | `.agents/assets/logo/` · `design.md` → Logo (locked-assets table, clear space, minimum size) |
| **2. Type** | **Named styles** — display, heading, body, and mono or label — each with face, size, weight, and leading per format. Agents and editors pick a named style; they never set a raw value. | `design.md` → Typography + Design tokens (`--font-*`, `--text-*`, `--leading-*`) · `brand.md` → Typography (Prohibited) |
| **3. Color roles** | **Roles, not swatches:** ground, ink, accent, and the **protected action color**. Each role lists its stops and the **pairings that pass contrast** — ink on ground, ground on accent — so nobody tests combinations by eye. | `design.md` → Color (roles, hex, ramps) · `brand.md` → Color (Action-color protection) |
| **4. Grid & spacing** | The 8-column grid with its margins and gutters per format, and the spacing scale. Slots snap to it. | `brand.md` → Composition · `design.md` → Design tokens (`--space-*`) · [composition.md](composition.md) |
| **5. Motif & treatment** | **One** signature motif or pattern and **one** texture or treatment, each with the code or file that renders it and an **intensity range** (scale, density, contrast) the piece may move within. | `design.md` → Motif / Pattern & Texture · Art Direction → Pattern & Texture (Motif construction, Scale & density, Contrast, Texture library) |
| **6. Imagery** | The approved library and the grade every image runs through. A new image is a **request**, not an asset, until a designer or the brand lead approves it. | `.agents/assets/imagery/approved/` · `manifest.md` (rights, alt text) · Art Direction → Treatment recipe |
| **7. Voice** | Tone rules, the **locked strings** (tagline, product names, approved lines), and the banned lines. Copy is flexible; voice is locked. | `brand.md` → Voice · `.agents/product-marketing.md` |

If a block's source doesn't exist — no clear space recorded, no contrast-tested pairs, no approved lines — the kit isn't ready. Route the gap to its owner (`logo-design`, `creative-direction`, `art-direction`, or the brand lead for voice) rather than filling it yourself. If locked or banned lines exist nowhere in writing, get them from the brand lead and record them in the kit entry until they're promoted to `brand.md` → Voice.

## Per Format: Approved Examples and Marked Slots

Each format in the kit — the one-pager, the 4:5 post, the content slide, the OG image — carries two things.

**2–3 approved examples as its spec.** An example shows how the blocks combine in that format better than any rule can. Only pieces that have **passed brand review and the brand owner's sign-off** qualify. A designer liking something doesn't make it a reference, and neither does shipping it.

**Every slot marked locked, flexible, or off limits.**

**Always locked, in every format:**

- Logo files, placement, and clear space
- Type styles and their pairing
- Color roles and the action color's job
- Grid and margins
- Motif and treatment rules
- Voice
- The emotional target (`brand.md` → Emotional Target)

**Flexible:**

- Copy, within the voice
- Images from the approved library
- The customer or partner logo — in a **defined slot with a size cap**, never carrying more visual weight than the brand's own mark
- Currency, units, date formats, and locale spelling

**Off limits — refuse, don't negotiate:**

- Redrawing, recoloring, stretching, adding effects to, or adding a tagline to the logo
- Fonts outside the system, and substitutes — including system fallbacks
- New hues or gradients
- Unlicensed or AI stand-in images in shipped work
- A second motif
- Stock icon sets the system didn't choose

A locale change is the common trap. Localizing a one-pager changes currency, spelling, and dates; it does **not** translate or adapt a locked string. The tagline and product names stay exactly as written unless the brand lead has approved a localized version.

## Check the Rendered File Before It Goes Back

Every self-serve piece runs these checks on the **rendered export**, not the source, and reports results — pass, fail, and coverage — alongside the file:

- **Text overflow** — the overflow audit from [viewer.md](viewer.md) → 7c, with its safe box, coverage count, and self-test. Add the type-floor audit (7d) for anything printed.
- **Fonts** — every face embedded and on the system list; nothing missing, nothing substituted. A fallback that renders "close enough" is a fail.
- **Dimensions** — the exact size for the placement, at the right DPI.
- **Contrast** — every text-on-ground pair is one of the kit's passing pairings.
- **Logo version against its ground** — the right variant for the ground it sits on, at or above minimum size, with clear space intact.
- **Print** — bleed and safe margin set correctly ([print.md](print.md) → Bleed, Trim, and Safe Margin).
- **Imagery** — every image traces to `.agents/assets/imagery/approved/` and its `manifest.md` line.

Then the final pass, both from `art-direction` → [imagery-slop.md](../../art-direction/references/imagery-slop.md): the **imagery slop check** on every image in place, and the **cover-the-logo test** on the whole piece (see `design-principles` → Distinctiveness Must Survive Application).

## Governance — How the Kit Grows Without Drifting

- **Flagship work feeds the kit, through the gate.** Custom pieces a designer makes go back in as new approved examples only after brand review and the brand owner's sign-off.
- **The kit is versioned.** Each kit carries a version number and the `design.md` *Last updated* date it was built against. When `design.md` changes, regenerate the blocks and recheck every approved example against the new system; an example that no longer passes comes out.
- **Uncovered requests become input, not improvisation.** When a request needs something the kit doesn't cover — a new format, a new hue, a slot that doesn't exist — log it and send it to the brand lead as input to the system. That's how the flexible range grows on purpose instead of by accident. A rough first pass at the uncovered request never ships: it's either labeled **draft — internal only** or held back.
- **The readiness test is fixed.** Two failed renders on the same request means the format isn't ready for self-serve. It stays designer-made until the kit is fixed.
