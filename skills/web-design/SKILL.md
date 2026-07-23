---
name: web-design
description: "Apply a brand's defined visual system to a real, conversion-focused website — designing and building it in custom code, with real copy given its proper emphasis. Use when the user mentions 'website design,' 'design my site,' 'build a landing page,' 'homepage,' 'marketing site,' 'product page,' 'pricing page,' 'redesign our website,' 'hero section,' or wants to ship a site. This is where the approved identity becomes a live, shipped surface — not a mockup, working code."
metadata:
  version: 1.0.0
---

# Web Design

You apply a brand's **defined visual system** to a live website and **ship the code** — designing and building at the same time, in custom code. This is the first Application skill: the color roles, type rules, motif, and signature element from `creative-direction` become a real conversion surface, built around real copy.

Read `design-principles` first. This skill is where its rules meet a browser: hierarchy is the job, restraint protects the message, contrast-not-competition, "state why or the default stands." Most of what separates a *designed* site from an *assembled* one is here.

> **Position in the sequence:** after `creative-direction` (the system) and `logo-design` (the mark), the first of the Application skills. It consumes the identity; it does not define one. **Custom code is the medium** — this skill builds bespoke HTML/CSS (and the project's framework if one exists), not Webflow or Framer.

## Front-Door Diagnosis — Settled Brand, or Rework?

Before anything, diagnose where the brand is. Open `.agents/design.md`, `.agents/brand.md`, and `.agents/product-marketing.md` — by this stage **all three should exist.** Then ask one question:

> *Are we applying a settled brand, or reworking one from scratch?*

- **From scratch (Revolution) or a heavy Evolution** (the core visual system is genuinely changing) → **stop and route back to `creative-direction`.** Do not design a site on an undefined or half-changed system. This holds **even if the user arrives with a logo already** — a mark without the system around it isn't enough to build a coherent site; push them back.
- **Settled brand — a light Evolution or an Optimization** (the system exists and holds; you're keeping most of it and changing named deltas at most) → **proceed.** This is the common case, and this skill's home.

**If `.agents/design.md` is missing, that *is* the "go back" signal** — there's no system to apply yet. Route to `creative-direction`. If `.agents/product-marketing.md` is missing or the page has no copy, route to the marketing library's `copywriting` / `website-copy` first: **the site is built around the copy, never the reverse.**

## Copy First — the System Is the Stage, Not the Show

The single most important input is the words. Read the copy in `.agents/product-marketing.md` (audience, voice, positioning, and the page copy itself). **The designer's job is to take what's being said and give it proper emphasis, joy, and delight** — not to build a template and pour copy into the gaps. Wireframe-first thinking is the fastest tell of an assembled page. If the copy isn't written, get it written first.

The visual system serves the message. Design serves the message. The site is the stage; the copy is the show.

## Design and Build at Once — in Custom Code

You are not producing a comp for someone else to implement. **You design by building** — the design decisions *are* the code. Output real, production front-end:

- **Match the project's stack if one exists** (Next.js / Tailwind / shadcn per the repo's conventions); otherwise ship clean, self-contained HTML/CSS. Framework-agnostic by default.
- **No Webflow, no Framer.** This skill exists because the work has moved to custom code — bespoke markup you can push as far as the craft demands, with none of the builder-tool ceilings.
- **Spacing in rem, fluid with `clamp()`** — never fixed px in production. Horizontal padding percentage-based; section padding fluid. See [references/craft-details.md](references/craft-details.md).
- Cross-reference the marketing library's `website-build-*` skills **only** if the user explicitly wants a platform build (Webflow/Framer) — that's the exception this skill was built to move away from.

## Apply the System

Pull the system from `.agents/design.md` — don't re-derive it, don't invent alongside it:

1. **Color by role.** Background, text (primary/secondary), **action/CTA (protected — minimized everywhere else so it detonates on a button)**, support. Five stops per color, not ten. Use the tokens as defined.
2. **Type by role, for contrast not competition.** Display, heading, body — each with a clear job. Don't default to bold; body is regular/book weight, heavier weights reserved for moments that earn it. Heading leading 1.1–1.3, body 1.5–1.6. Secondary text is a softer shade/opacity than headings — hierarchy even within one face.
3. **The motif and signature element carry the brand into the layout** — as texture, pattern, section framing, or a recurring detail. This is where distinctiveness must *survive application* (see `design-principles`). A generic build of a distinctive system is a failure.
4. **Depth, light, and surface transitions** per the system's intent — multi-layer shadow stacks (not flat `shadow-md`), gradual background shifts and earned dark/light flips over hard-edged banded sections.

## Build Section by Section — Give Each Thing a Lane

Work the page as a sequence, never each section in isolation. Full per-section playbook in [references/section-patterns.md](references/section-patterns.md).

- **Name each section's one job**, then give the element that carries it its own lane and scale it to that rank. A positioning line gets a stage; a trust strip gets a full-width lane, not a corner of the hero; a hero object gets a spotlight. Supporting detail recedes.
- **Vary the rhythm.** Never the same layout for consecutive sections — alternate 1-col / 2-col / 3-col / the unexpected. Create differentiation through composition, not dividers. Use inversion (huge body copy, an under-sized headline) when the copy calls for it.
- **Consolidate.** Three substantial sections beat five thin ones. Whitespace is emphasis, not just breathing room.
- **CTAs, logos, and hover states are content, not decoration.** Primary and secondary CTAs stay distinct in every state including hover. Client/press logos get one normalized trust lane, optical (not pixel) sizing, one color story.

## Validate Before You Ship

Run your own build through the same gauntlet the audit runs — **adversarially, on the rendered page in a browser, not the code in your head** (see `design-principles` → Judge Your Own Work on the Competitor's Bar). Render it, screenshot it, and:

- **Score it against the audit categories** vs. the confirmed competitor set at a rival's harshness — Creative Direction, Color, Type, Layout. Would this earn 4–5?
- **Run the web-slop check** ([references/web-slop.md](references/web-slop.md)) and **list what it finds** — the tropes actually on the page (bold-as-default, banded sections, uniform icon grids, CTA color bleeding everywhere, eyeballed nested radii). "No slop here" is a reflex, not a result; produce the list or an earned, specific "none, because —."
- **Cover-the-logo carry-through:** with the mark hidden, is the built page still recognizably this brand? If the distinctiveness lived only in the logo, the system didn't survive application.
- **Responsive + accessibility.** Check real breakpoints (mobile fixes as additive overrides, never touching desktop base). Hand off to `web-design-guidelines` for the interface/accessibility compliance pass.
- **Copy check.** Does the layout give the words their proper emphasis, or did the design bury the message?

## The Deliverable

- **The shipped site** — production front-end code in the user's project, designed and built together, applying the approved system.
- **Optional: a short "site system" note** appended to the project (component conventions, section inventory, the tokens as used) so later pages and `collateral-design` stay consistent. Don't duplicate `.agents/design.md` — reference it.

## Non-Negotiables

- [ ] Front-door diagnosis run; Revolution / heavy Evolution routed back to `creative-direction` (even if a logo already exists)
- [ ] `.agents/design.md`, `brand.md`, `product-marketing.md` read; system applied, not re-invented
- [ ] Copy exists and drives the layout — no wireframe-first, no filler
- [ ] Real custom code shipped (project stack matched or clean HTML/CSS) — not a comp, not Webflow/Framer
- [ ] Color roles honored; CTA color protected; five stops; type contrast-not-competition; bold not the default
- [ ] Motif / signature element carried into the build; distinctiveness survives cover-the-logo
- [ ] Section rhythm varied; each section's carrier element given its lane and scale
- [ ] Craft floor met (rem/clamp, layered shadows, optical alignment, nested radii, distinct CTA states)
- [ ] Adversarial self-audit on the *rendered* page (web-slop tropes listed, not "none"); responsive + accessibility pass

## Related Skills

- `design-principles` — the craft beliefs this skill applies
- `creative-direction` — supplies the visual system (hard prerequisite); route back for Revolution / heavy Evolution
- `logo-design` — the mark, applied here
- `brand` — the audit whose categories are this skill's acceptance test
- `collateral-design` / `email-design` / `social-design` — apply the same system to other mediums
- `design-critique` — judges the shipped site against the emotional target and latitude
- marketing library: `copywriting` / `website-copy` (the copy comes first), `cro` (optimize existing pages), `web-design-guidelines` (accessibility), `website-build-*` (only for an explicit platform build)
