# SAD Checklist — Evaluating a Logo in Context

Run all three. Each needs its context gathered first (the `brand` skill's Step 1 provides the implementations and the competitor set; `.agents/brand.md` provides the Emotional Target).

## Simple — the implementation grid

Render or place the **same** mark in each context below and judge the set together. The question is never "is this one nice" — it's "does one construction hold across all of these."

| Context | Test |
|---------|------|
| Favicon (16–32px) | Still legible, or a blur? |
| Browser tab / small UI | Reads as the brand at a glance? |
| Social avatar (circle crop) | Survives the circle? Nothing clipped? |
| App icon (rounded square) | Works in the safe area, no awkward padding? |
| Large / hero | Holds up without feeling empty or thin? |
| Single-color / mono | Works with color removed? |
| Reversed (on dark) | Holds without a special-case redraw? |
| Grayscale / fax / etch / embroidery | Survives the crudest reproduction? |
| Over a busy photo | Stays readable with a container or knockout? |

**Fail signals:** a different drawing was made to survive small sizes; detail disappears below a threshold; the mark relies on a gradient/shadow/color to be recognizable; it needs a box to survive on photos.

## Appropriate — against the Emotional Target

Pull the Emotional Target (the "Big Three" feelings) from `.agents/brand.md`.

- For each feeling, does the mark's form, weight, and character *produce* it? Name how, specifically.
- Does it fit the **audience** and the **category** — not just the founder's taste?
- Do the muses show up in the mark, or is it disconnected from the brand's stated DNA?
- **Fail signal:** the mark is well-crafted but evokes the wrong feeling (playful where it should be grave, generic-corporate where it should be characterful). Beautiful + wrong = fail.

## Distinct — two checks, both must pass

Distinct is (a) the shelf — direct competitors and the category default — and (b) the lookalike sweep — anyone at all. Both have to pass. If either didn't run, Distinct is **unassessed**, not passed.

### (a) The shelf — against the direct competition

Place the mark on a literal shelf with 3–5 direct competitors' logos and the category's conventions.

- **Cover-the-name test:** with the wordmark hidden, would the audience know it's this brand and not a competitor?
- **Disappearance test:** in the competitor lineup, does it stand out or blend in?
- **Competitor resemblance:** does it echo a competitor's mark (shape, idea, color)? Unintentional similarity is a liability.
- **Default check:** is it a tidy execution of the current category/AI-startup template (see `design-principles` → Coherent Is Not the Same as Good)? Competent ≠ distinct.
- **Fail signal:** swap the colors with a competitor's and the two marks become interchangeable.
- If you haven't placed the mark beside the actual competitor logos and compared silhouettes, the shelf is **unassessed** — don't infer it from the mark alone.

### (b) The lookalike sweep — against anyone at all

A mark can pass the shelf and still collide with someone outside the category. Run the sweep on the shortlist, before you present it and before any refinement rounds, and again on the final mark, before mockups.

- **Artifacts:** search the black-and-white icon alone (no wordmark, no color) *and* the full lockup. Color and type hide silhouette collisions.
- **Tools:** Google Lens (Exact and Visual Match), Pinterest visual search, and WIPO Global Brand Database image search on Conceptual Similarity, with expired marks filtered out. Lens and Pinterest need a browser — equivalent tools are fine; say what you used.
- **Record what ran:** list each tool as **run** or **not run**, with the query and the top hits. If the sweep didn't run, Distinct is **unassessed**, not passed.
- **Hard fail:** an identical or near-identical match; a near match in the same or a related class of goods; or a match with any famous mark in any class.
- **Flag as weak:** a looser resemblance, or a near match in an unrelated class — write down the designer's reasoning. Expired marks are filtered from the WIPO pass, but a dead mark that's still visually famous gets flagged anyway.

## Reporting

Give a verdict per dimension — **pass / weak / fail** (or **unassessed**, if the shelf or the lookalike sweep didn't run) — each with the evidence (the grid, the emotional-target mapping, the competitor shelf, the lookalike report). Most marks pass Simple, many pass Appropriate, fewer pass Distinct; don't flatten that. Because SAD is not averaged, one failed criterion sinks the whole logo — never report a colliding mark as "passes SAD cleanly." Write the result into the Logo section of `.agents/brand.md`.
