---
name: logo-design
description: "Design or evaluate a logo against the SAD bar — Simple, Appropriate, Distinct — always judged in context. Use when designing a new mark, refining one, or assessing whether an existing logo is any good. Triggers on 'logo,' 'wordmark,' 'brandmark,' 'mark,' 'monogram,' 'favicon/app icon,' 'is our logo good,' 'redesign our logo,' 'logo critique,' or 'logo concepts.' Reads the brand's emotional target and competitor set first — a logo is never judged in a vacuum."
metadata:
  version: 1.10.0
---

# Logo Design

You design and evaluate logos. A logo is the most distilled expression of a brand — it has to do the most work with the least. Read `design-principles` and `.agents/brand.md` before you judge or draw anything.

> **A logo is never judged on its own.** Every part of the assessment happens in a context: against the competition, against the feeling the brand must produce, and against every place the mark has to live. Pull the brand context and the competitor set *first* — without them you cannot actually evaluate a mark, only react to it.

## The Bar: SAD

A good logo is **S**imple, **A**ppropriate, **D**istinct. The acronym is easy; the discipline is that **each dimension is only judgeable against a specific context.** Skip the context and you're just expressing taste.

### Simple — judged across *every implementation*

Simple doesn't mean minimal or sparse. It means **one idea that survives every reduction**, drawn the same way everywhere. The baseline test is **black and white**: a logo must work with all *color* removed. If it needs its color, a gradient, or a glow to read, it isn't simple — color is the last layer, not a crutch. **"Black and white" does not mean solid 100% black, though** — opacity steps and tints of a single value (a mark built from 30/60/100% of one hue) are legitimate and still pass, because the mark is *monochrome*; it isn't leaning on color to read. The failure is dependence on *hue/gradient*, not the use of tints. Then verify across the whole implementation set, never just the hero lockup:

- Does it hold at a 16px favicon? In a circle-cropped social avatar? A rounded-square app icon? Reversed on dark? Single-color? Etched, embroidered, foil-stamped?
- Is it the **same** construction in all of them — or did someone quietly draw a *different* simplified version to survive the favicon? If the mark needs a second drawing to work small, it isn't simple yet.
- Is there a **single source of truth**? Multiple versions in the wild with inconsistent light source, shadow direction, or orientation is a Simple failure — the mark has no defined construction. Establish the canonical drawing and the rules around it.
- Judge the **wordmark/lockup**, not just the mark glyph. Inconsistent weight or size between words (e.g. "Cash Flow" bold + "Portal" light) raises cognitive load and can imply an unintended sub-brand. Unify the lockup, or drop the trailing word and reserve it for the legal/URL name.
- Lay the implementations out side by side (see [references/sad-checklist.md](references/sad-checklist.md)). Consistent + instantly legible everywhere = simple.
- **Recognition failure caps Simple.** If the mark misreads as something else at small sizes — a mascot that reads as a different animal in the favicon, a "G" that reads as a "C" — that's a Simple failure, not a footnote. Flag it and let it move the score; an unrecognizable-at-small-size mark isn't doing its job.

This is why gathering the logo in *all* its forms (the `brand` skill does this) is non-negotiable: simplicity is an observation across the set, not a property of one file.

### Appropriate — judged against the *core feelings*

A logo can be beautiful and wrong. Appropriate means it produces the feelings the brand is built to produce — the **Emotional Target** in `.agents/brand.md` — for *this* audience, in *this* category.

- A playful, bouncing mark is wrong for a brand whose job is to feel like a vault; a severe, serious mark is wrong for a kids' product.
- You cannot judge appropriateness without the core feelings. If `.agents/brand.md` has no Emotional Target, stop and define it (`brand-strategy`) — otherwise "appropriate" collapses into "do I like it."

### Distinct — judged against the *direct competition*

Distinctiveness only exists relative to the field.

- Put the mark on a shelf with the **direct competitors' logos** and the category's visual conventions. Does it stand out, or dissolve into the set?
- **Compare silhouettes**, not just details — a triangle/arrow mark nearly identical in silhouette to a high-profile competitor's (e.g. Vercel's) is a direct recognition conflict, even if the execution differs.
- Check it against famous and well-known logos too — unintentional resemblance is a liability, not a coincidence.
- The real test: cover the name. Would the audience know it's *them* and not a competitor?
- A mark that executes the category default (see `design-principles` → Coherent Is Not the Same as Good) is competent, not distinct. Name that when you see it.
- **Run the shelf for real.** If you haven't placed the mark beside the actual competitor logos and compared silhouettes, you have *not* assessed Distinct — don't infer it from the mark alone. Distinct is **independent of Simple**: passing black & white tells you nothing about distinctiveness. A clean, attractive, B&W-legible mark that shares a silhouette with a high-profile competitor (e.g. Vercel's triangle) **fails** — and because **SAD is not averaged, one failed criterion sinks the whole logo.** Never report a colliding mark as "passes SAD cleanly."

## Assess (get) vs. Design (make)

**Assessing an existing mark** — the live, common case:
1. Make sure you're judging the **current** mark — take it from the live navigation bar, not a favicon, OG image, or press kit (those are often stale). Then gather it in *every* form, plus the competitor set (the `brand` skill's Step 1 handles this).
2. **Confirm whether there's a symbol at all** — inspect the favicon, app icon, and full lockup, not just the nav wordmark. Brands routinely pair a wordmark with a glyph (or carry a motif inside the mark); missing it produces a false "wordmark-only, no mark" verdict. Don't penalize a wordmark for being a wordmark, either — a wordmark can be genuinely distinct.
3. Run SAD-in-context and report **per dimension, with the evidence** — the implementation grid for Simple, the emotional-target check for Appropriate, the competitor shelf for Distinct.
4. Be honest about the spread: most marks pass **Simple**, many pass **Appropriate**, and far fewer pass **Distinct**. "Distinct" is where good logos are separated from competent ones — don't soften it.
5. Write the verdict into the **Logo** section of `.agents/brand.md`.

**The mark is equity, not scripture.** Don't preserve a weak logo just because it exists. If the creative direction is shifting significantly (Revolution or serious Evolution), the logo is on the table too — say so plainly rather than protecting a mark that fails SAD.

**Designing a new mark** — new brand, or the existing one fails the bar:
1. Work from `.agents/brand.md`: the Emotional Target and muses are the brief; the competitor set defines what "distinct" requires.
2. **Find the thematic idea first.** The strongest marks *distill a brand concept into one form* — a derivative of a bigger story pared to a single mark (e.g. three data points joined by a circle = a closed-loop system; the Roman standard = command). The mark should *mean* something traceable to the brand, not just decorate. A mark with no thematic root reads as arbitrary — the "no thematic element" failure. Pull it from the muses/abstraction (`creative-direction`) or the brand's own story.
3. **Generate sketches broadly across the three families** — **typographic / wordmark** (letterforms and their expression, graphic motifs *in* the letters, or letters fused with a pictorial/abstract element — explore the **full wordmark**, e.g. the whole name, not just the initial letter), **pictorial** (a stylized representation, Apple-style), **abstract** (a non-literal mark that evokes a feeling, Nike-style). Three rules the sketch phase lives or dies by:
   - **Generate, don't hand-draw.** Produce the options with a generative tool — see [references/generative-tooling.md](references/generative-tooling.md). An agent hand-authoring SVG primitives cannot construct a usable mark; the sketches must come from a generative surface (or, absent one, be labeled low-fidelity).
   - **Show every option as a mark + wordmark lockup**, so orientation reads and the mark is judged the way it will actually ride.
   - **Don't force one per family.** Pick the ones that actually work — they can all be abstract. Family is a lens for coverage, not a quota.
   Show the client "the ugly" — many options — then your **top three plus alternatives, with your recommendation**. Don't marry the first idea.
4. Resolve in **black and white first.** If it doesn't work in one value, color won't save it — color comes after the form is right. If the client is hesitant, show B&W before finalizing.
5. **Construct it properly.** The mark's vector comes from a generative tool, not typed-out `<path>` coordinates; the wordmark is set in a **licensed face and outlined** — never *generated* (generative type garbles the letterforms). A designer then refines to the bar: geometric harmony (golden-ratio circles/squares) corrected by eye, unified paths, hand-tracked type, an optically balanced **and centered** mark-to-wordmark lockup (**no tagline in the lockup** — the wordmark stands alone). This is where geometric cohesion, type quality, and ratios are won or lost: [references/logo-construction.md](references/logo-construction.md) and [references/generative-tooling.md](references/generative-tooling.md).
6. Build the **full system**: primary lockup, secondary/stacked (only if used), the standalone mark, clear space, minimum size, reversed and single-color variants.
7. Test against SAD *and* the implementation grid before calling it done.

For a **redesign or refinement**, diagnose the *move* first — the gap from weak to strong is usually one structural fix, not "add polish": resolve an ambiguous glyph into one clear idea; **kill a weak mark and make the wordmark itself distinctive**; give fragile hairline type real weight; swap a literal/cliché metaphor for a fresher one tied to positioning; never ship a system default font. Full patterns with worked before→after cases: [references/logo-fixes.md](references/logo-fixes.md).

**An agent hand-drawing SVG cannot construct a logo — and a rough mark is not a resolved mark.** Agent-authored / "parametric" SVG comes out rough every time: uneven curve tension, awkward optical weight, near-misses that misread (a disc-with-wedge reading as Pac-Man). The fix is not more polish — it's the **right tool**: generate the mark with a generative vector tool ([references/generative-tooling.md](references/generative-tooling.md)) and hand the vector to a designer to resolve. Whatever you put in front of the client, say what it is — "this is a rough cut / a wireframe stand-in; the construction still needs a real vector pass" — rather than scoring it bulletproof. Presenting an unresolved mark as finished is how the whole logo ships at a quality the brand can't use.

## Present it: the identity presentation

A mark is sold (and sign-off is won) in context, not on a white artboard. Present the **identity presentation**: the sketches and creative direction that led here, the inspiration, the mark itself, its **black-and-white** form, and — the load-bearing part — the mark **applied**: business cards, signage, billboards, social, ephemera (hats, shirts), a sub-brand side by side if there is one, and **on the shelf next to the competitors**. Show the application of everything and *make the case objectively* — "this stands out in your market" — with the competitor lineup right there to prove it. This is where Distinct stops being an assertion and becomes visible.

## Output & delivery

Write the **Logo** section of `.agents/brand.md`: lockups, the mark, clear space, minimum size, color/reversed variants, **misuse** — and, for an assessment, the SAD verdict with the evidence behind each dimension. **Also append the Logo section of `.agents/design.md`** (the living record — see `creative-direction` → design-doc-template.md): the same spec with the fuller rationale — construction/geometry notes, why the mark answers the Emotional Target, file locations — dated. `brand.md` carries the distilled rules; `design.md` carries the record.

On finalize, hand over a **downloadable, ordered package** the client can house and reuse:

- **Assets:** the full lockup (icon + logotype), the **icon** alone, a **social avatar** (square), and the **app icon** (rounded + square, ± name).
- **Formats:** each in **SVG, PNG, and JPEG**. In the SVG the **logotype is outlined** — the licensed face converted to paths — so the file carries no font dependency and never re-renders in a fallback.
- **Color variants:** full-color, **inverse** (the icon holds its color, the wordmark flips for dark grounds), all-white, all-black, grayscale. Work in RGB (Apple RGB for digital). Tools like Logo Package Express automate the export once the mark + logotype are set.
- Confirm commercial type licenses — see [references/logo-construction.md](references/logo-construction.md) → Delivery.

### The logo is one locked element

The lockup is a **single, grouped, proportioned unit with one source of truth** — the same construction, ratio, spacing, and colorway *everywhere*. You do not use the logo in a different capacity in a new medium; it is the same thing all over the place. A logo is **placed**, never re-assembled, re-spaced, or re-proportioned to suit a card, a deck, or a sign. The misuse this rule prevents — each one a real failure, not hypothetical:

- **Never recolor it.** A color outside the defined variant set — even "just for print" — is misuse. Pull a variant; never tint the mark to taste.
- **Never crop, box, or contain it.** Dropping the mark in an arbitrary square, letting it clip, or cutting off part of the construction breaks the single-element rule. Give it its **clear space**, and when it stands alone (e.g. dead-center on a card) *actually center it*.
- **Never drop the name or swap the face.** The logotype is part of the mark. A lockup missing the wordmark, set in the wrong typeface, or filled with placeholder/AI-slop copy is not the logo.
- **Never invent medium-specific ornament.** Lines, frames, or decorations added "just for the business card / the deck" that aren't in the brand system are off-brand *by definition* — applying an identity means placing the system's elements, not adding new ones.

Layout, print safe-zones/bleed, and deck-vs-web composition live in `collateral-design`; logo-design guarantees only that the mark itself stays **locked and on-system** wherever it lands.

## Non-Negotiables

- [ ] Brand context read — Emotional Target *and* competitor set — before judging or drawing
- [ ] Mark has a **thematic idea** traceable to the brand, not arbitrary decoration
- [ ] Logo seen in *every* implementation, not just the hero lockup
- [ ] **Distinct** judged against the direct competitor set, not in isolation (and shown on the shelf in the presentation)
- [ ] **Appropriate** judged against the Emotional Target
- [ ] **Simple** verified across the implementation grid (favicon → large, 1-color, reversed)
- [ ] Resolves in black and white (opacity/tints OK; hue/gradient dependence is not)
- [ ] **Construction sound** — geometric harmony (golden ratio, optically corrected), unified paths, hand-tracked type, balanced lockup ratio
- [ ] Commercial type licenses confirmed
- [ ] Delivered as **one locked element** — same construction/proportion/colorway everywhere; never recolored, cropped, boxed, or re-set per medium
- [ ] Delivery package: lockup · icon · square avatar · app icon, each in SVG/PNG/JPEG × the color-variant set, **logotype outlined** in the SVG
- [ ] Verdict / spec written to `.agents/brand.md`; Logo section appended to `.agents/design.md` (the living record)

## Related Skills

- `design-principles` — distinctiveness vs. the default; coherent isn't good
- `brand` — gathers the logo in all forms + the competitor set; records the Logo section
- `brand-strategy` — the Emotional Target and competitive landscape this skill judges against
- `creative-direction` — the wider visual system the mark anchors
- `collateral-design` — the mediums the locked mark is *placed* into (cards, decks, print safe-zones/bleed); this skill only guarantees the mark stays locked and on-system
- `design-critique` — judges the mark in use against the brand
