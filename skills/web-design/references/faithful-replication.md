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
