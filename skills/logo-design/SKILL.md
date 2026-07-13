---
name: logo-design
description: "Design or evaluate a logo against the SAD bar — Simple, Appropriate, Distinct — always judged in context. Use when designing a new mark, refining one, or assessing whether an existing logo is any good. Triggers on 'logo,' 'wordmark,' 'brandmark,' 'mark,' 'monogram,' 'favicon/app icon,' 'is our logo good,' 'redesign our logo,' 'logo critique,' or 'logo concepts.' Reads the brand's emotional target and competitor set first — a logo is never judged in a vacuum."
metadata:
  version: 1.7.0
---

# Logo Design

You design and evaluate logos. A logo is the most distilled expression of a brand — it has to do the most work with the least. Read `design-principles` and `.agents/brand.md` before you judge or draw anything.

> **A logo is never judged on its own.** Every part of the assessment happens in a context: against the competition, against the feeling the brand must produce, and against every place the mark has to live. Pull the brand context and the competitor set *first* — without them you cannot actually evaluate a mark, only react to it.

## The Bar: SAD

A good logo is **S**imple, **A**ppropriate, **D**istinct. The acronym is easy; the discipline is that **each dimension is only judgeable against a specific context.** Skip the context and you're just expressing taste.

### Simple — judged across *every implementation*

Simple doesn't mean minimal or sparse. It means **one idea that survives every reduction**, drawn the same way everywhere. The baseline test is **plain black and white**: a logo must work with all color removed. If it needs its color, a gradient, or a glow to read, it isn't simple — color is the last layer, not a crutch. Then verify across the whole implementation set, never just the hero lockup:

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
2. Sketch broadly across the three families — **typographic / wordmark**, **pictorial** (a literal-ish image), **abstract** (a non-literal mark). Don't marry the first idea.
3. Resolve in **black and white first.** If it doesn't work in one color, color won't save it — color comes after the form is right.
4. Build the **full system**: primary lockup, secondary/stacked, the standalone mark, clear space, minimum size, reversed and single-color variants.
5. Test against SAD *and* the implementation grid before calling it done.

For a **redesign or refinement**, diagnose the *move* first — the gap from weak to strong is usually one structural fix, not "add polish": resolve an ambiguous glyph into one clear idea; **kill a weak mark and make the wordmark itself distinctive**; give fragile hairline type real weight; swap a literal/cliché metaphor for a fresher one tied to positioning; never ship a system default font. Full patterns with worked before→after cases: [references/logo-fixes.md](references/logo-fixes.md).

**Be honest about rough marks.** Agent-drawn / SVG / "parametric" marks come out rough — uneven curve tension, awkward optical weight, near-misses that misread (a disc-with-wedge reading as Pac-Man). A rough mark is **not** a resolved mark: say "this is a rough cut, the construction still needs work" rather than scoring it bulletproof. Presenting an unresolved mark as finished is how the whole logo ships at a quality the brand can't use.

## Output

Write the **Logo** section of `.agents/brand.md`: lockups, the mark, clear space, minimum size, color/reversed variants, misuse — and, for an assessment, the SAD verdict with the evidence behind each dimension.

## Non-Negotiables

- [ ] Brand context read — Emotional Target *and* competitor set — before judging or drawing
- [ ] Logo seen in *every* implementation, not just the hero lockup
- [ ] **Distinct** judged against the direct competitor set, not in isolation
- [ ] **Appropriate** judged against the Emotional Target
- [ ] **Simple** verified across the implementation grid (favicon → large, 1-color, reversed)
- [ ] Resolves in black and white
- [ ] Verdict / spec written to `.agents/brand.md`

## Related Skills

- `design-principles` — distinctiveness vs. the default; coherent isn't good
- `brand` — gathers the logo in all forms + the competitor set; records the Logo section
- `brand-strategy` — the Emotional Target and competitive landscape this skill judges against
- `creative-direction` — the wider visual system the mark anchors
- `design-critique` — judges the mark in use against the brand
