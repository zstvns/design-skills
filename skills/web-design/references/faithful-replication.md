# Faithful Replication — Redesigning or Referencing an Existing Site

When the brief is "redesign our site" or "build something like X," the source is data, not a vibe. Approximating it from memory is how sections get dropped, the wrong action gets emphasized, and real assets get replaced with stand-ins. Look at what's actually on the page.

## 1. Inventory every section

Walk the source top to bottom and list every section with its real headline and its job. That list is your spec — the redesign must account for all of it. A redesign that quietly drops sections (the terminal/CLI signup, the capabilities block, a product visual) isn't a redesign; it's a different, smaller site. If you consolidate two sections, that's a decision to state — not an accident of forgetting one.

Common sections that get missed because they're not the "hero" or the "features": secondary sign-up paths (CLI/terminal, extension, waitlist), "use it anywhere" surface lists, capabilities/what's-loaded blocks, workflows, organizations/brands, OAuth/integration-auth, brand-kit, and the product's own signature visual.

## 2. Reproduce the primary action, not just the words

Read what the page is *encouraging the visitor to do* — the mechanism, not the label. If the hero invites you to **enter a URL and get a free plan**, the redesign's hero needs that URL input and that button, front and center. If it offers a **copy-paste CLI prompt** to create an account, reproduce the copy block. The action is the point of the page; a hero that looks great but drops the site's core conversion mechanism has missed the assignment.

## 3. Pull the real assets

Integration/partner logos are real, and there are always ways to get them:
- a **Relume** or brand-asset library,
- the source site's own markup / CDN,
- a brand-SVG source (e.g. simple-icons) for common tools.

**Use the real logos.** Never substitute an icon-plus-text stand-in ("📷 Instagram") for the actual mark — it reads as a placeholder. And never ship a logo strip so low-contrast it disappears; normalize to one color story with enough contrast to read, optical (not pixel) sizing, shared baseline.

## 4. Tell the visual's real story

A product illustration must communicate what the product *does*. If the source shows an **orbital / centrifuge** — everything (writing, optimizing, launching, researching) looping *around* the agent at the center — then build that story: the agent in the middle, the work orbiting it in a loop. A decorative interpretation that misses the meaning is worse than no visual. Match the narrative, then make it better.

## 5. Get the copy and order right first

Port the real copy and section order before polishing any single section. The client's fastest, most concrete feedback is "you missed this / this is out of order / this content is wrong" — clear that class of issue in one pass so the review can move on to craft.

## 6. Match loop against the source

"Looks right" is not a check. A build can read as faithful at a glance and still be missing a section, running a smaller hero, or stacking wrong on mobile. Close the gap with a graded loop against the source, not a second look from memory.

**Before writing any code, write the checklist.** Ten to twelve lines, specific to *this* source page — not a generic rubric. Cover:

- **Layout** — the grid, column structure, and how each section is composed
- **Type scale** — display, heading, and body sizes relative to one another
- **Spacing rhythm** — section padding, gaps, where the page breathes and where it's dense
- **Color** — grounds, text, the CTA color, where dark/light flips happen
- **Imagery** — which media sits where, its treatment and crop
- **Key components** — the primary action mechanism, the logo strip, the signature visual
- **Interactions** — hover, disclosure, scroll behavior the source actually has

Each line names the observable thing on the source ("hero: URL input + 'Get free plan' pill, left-aligned under a two-line headline"), so it can be graded yes or no.

**Two lines are measured, not judged.** Write both onto the checklist:

1. **Section count and order.** Count the source's sections top to bottom and the build's. The numbers match and the order matches, or the line is a *no*. This is the check that catches the silently dropped section a glance misses.
2. **Hero proportions within tolerance.** Hero height as a share of the viewport, headline font size and measure (characters per line), and the media's aspect ratio. State the tolerance on the checklist before you build — **±10% on height, size, and measure, ±5% on the media ratio** is a sound default — and measure both pages against it.

**Screenshot, then grade.** Capture the source and the build at **1440px and 390px wide**, full page, and view them side by side. Grade every checklist line **yes**, **partial**, or **no** against the screenshots — never from memory of what you built, never from the code.

**Fix, re-screenshot, regrade.** Work the *no* and *partial* lines, capture both widths again, and regrade the whole checklist (fixes break neighbors). **Stop after round 2.** Hand off for human review with the graded checklist and both rounds of screenshots — what still reads *partial* or *no* after two rounds is a judgment call for a person, not a third loop.

*Method adapted from the [Cutaway](https://github.com/Nyxera0x/cutaway) skill.*
