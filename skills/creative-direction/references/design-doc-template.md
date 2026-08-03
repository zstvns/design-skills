# `.agents/design.md` Template

The creative-direction record, generated at the end of the exercise — the detailed visual-system spec the application skills build against. Counterpart to `brand-strategy`'s `.agents/brand-strategy.md`: this is the deep record; the distilled system also gets written into `.agents/brand.md`.

Create it as concepts take shape; finalize on the client's pick. Keep the rejected concepts — they document *why* the chosen one won and seed later flexes.

**This is a living record, not a snapshot.** `creative-direction` writes the founding sections; every downstream skill that *decides* a brand asset **appends its decision here** — `logo-design` writes the Logo section, `motion-design` the Motion System as built, application skills their adopted libraries and application notes. Each append carries a date and the one-sentence *why*, and updates the `Last updated` line. Read before deciding; append after deciding; never re-derive or contradict an existing section silently — if a decision changes, update the section and note what changed. The distilled result of any append also flows to `.agents/brand.md` where it affects the Fixed core / Flexible range.

```markdown
# Creative Direction — [Brand Name]

*Last updated: [date] · Status: [concepts presented / direction chosen / system finalized]*
*Depth: [Revolution / Evolution] · Source: .agents/brand-strategy.md + .agents/brand.md audit [date]*
*Chosen direction: [name] · Published copy: [none / Notion / PDF — regenerate from this file]*

## Emotional Target (carried from brand-strategy)
The Big Three the system must produce — every choice below traces here.

## Concepts Explored
<!-- All concepts presented, chosen one marked. Keep the rejected ones and why. -->
### Concept [name] — [chosen / not chosen]
- **Muses → abstractions:** [muse cue] → [abstracted brand element]. (e.g. Kaaba brick geometry → ownable grid; concentric rings → dotted "unity" motif)
- **Through-line / signature element:** [the one unforgettable functional hook]
- **Why it answers the feeling:** …
- **Why chosen / not chosen:** …

## The System (chosen direction)
### Color
| Role | Name | Hex | Notes |
|------|------|-----|-------|
<!-- background · text primary/secondary · action/CTA (protected) · support. Ramps. Ownership vs competitor set. -->
### Typography
| Role | Typeface | Foundry / license | Weights | Notes |
|------|----------|-------------------|---------|-------|
<!-- display · heading · body · (mono). Chosen to suit the direction. Commercial license confirmed. -->
### Motif / Pattern & Texture
Ownable motif (its abstraction source), texture techniques, off-logo deployment.
### Iconography
Source of truth, stroke/fill/grid rules, tiers.
### Illustration / Product abstraction
Defined style, or explicit "none."
### Photography
Subjects, treatment/grade, or deliberate absence.
### Motion (directional note)
What the motion feels like.
### Design tokens
<!-- The :root token set from frontend-boilerplate.md, filled from the above. -->

## Documented Styles & Asset Sources
Photo / graphic / icon / type styles, and where sourced assets came from (stock, Envato, Freepik, generated — note tool). Saves the application skills from guessing.

## Application Proof
Website hero + 1–2 ads carrying the full system (links/exports). Confirms it has legs applied.

## Challenges & Differentiation
Implementation difficulties across the board; how different this is from each direct competitor; anything the client weighed to decide.

## Self-Audit (adversarial, on the rendered board)
AI-slop tropes found (listed, not "none"); cover-the-logo result on board AND applied fragment; foundational-category scores vs the competitor set.

---
<!-- ============ LIVING RECORD — appended by downstream skills ============ -->

## Logo *(appended by logo-design · [date])*
The approved mark: construction/geometry notes, lockups, clear space, minimum size, color/reversed variants, misuse rules, file locations — and the SAD verdict. Mirrors the Logo section of .agents/brand.md; this copy carries the fuller rationale.

## Icon Library — as adopted *(appended by the deciding skill · [date])*
The actual library/system shipped (named pack or custom set), grid/stroke/fill rules as implemented, where it diverged from the Iconography spec above and why.

## Motion System — as built *(appended by motion-design · [date])*
Easing tokens, duration scale, stagger step, reduced-motion rule, and the signature moves as shipped. Extends the directional Motion note above into the enforceable system.

## Application Notes *(appended by web-design / collateral / email / social skills · [date])*
Decisions made during application that future work must respect: component patterns adopted, grade/treatment implementations, places the system flexed and the ruling on whether the flex is now canon.
```
