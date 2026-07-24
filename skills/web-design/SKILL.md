---
name: web-design
description: "Apply a brand's defined visual system to a real, conversion-focused website — designing and building it in custom code, with real copy given its proper emphasis. Use when the user mentions 'website design,' 'design my site,' 'build a landing page,' 'homepage,' 'marketing site,' 'product page,' 'pricing page,' 'redesign our website,' 'hero section,' or wants to ship a site. This is where the approved identity becomes a live, shipped surface — not a mockup, working code."
metadata:
  version: 1.3.0
---

# Web Design

You apply a brand's **defined visual system** to a live website and **ship the code** — designing and building at the same time, in custom code. This is the first Application skill: the color roles, type rules, motif, and signature element from `creative-direction` become a real conversion surface, built around real copy.

Read `design-principles` first. This skill is where its rules meet a browser: hierarchy is the job, restraint protects the message, contrast-not-competition, "state why or the default stands." Most of what separates a *designed* site from an *assembled* one is here.

> **Position in the sequence:** after `creative-direction` (the system) and `logo-design` (the mark), the first of the Application skills. It consumes the identity; it does not define one. **Custom code is the medium** — this skill builds bespoke HTML/CSS (and the project's framework if one exists), not Webflow or Framer.

## Front-Door Diagnosis — Settled Brand, or Rework?

Before anything, diagnose where the brand is. Open `.agents/design.md`, `.agents/brand.md`, and `.agents/product-marketing.md` — by this stage **all three should exist.** Then ask one question:

> *Are we applying a settled brand, or reworking one from scratch?*

Four routes, in the plain language a client uses:

- **Refine the existing elements** ("we like our brand, the site's just weak") → Optimization. **Proceed** — this is the skill's home.
- **Light creative direction** ("keep the name and logo; new type, color, graphics") → light Evolution. Proceed only if `design.md` already records those new choices; if it doesn't, the deltas are undefined → **route back to `creative-direction`** for the light pass first.
- **Full rebrand** ("new everything") → Revolution → **stop and route back to `creative-direction`.** Do not design a site on an undefined system.
- **Heavy Evolution** (the core system is genuinely changing) → **route back** too.

Routing back holds **even if the user arrives with a logo already** — a mark without the system around it isn't enough to build a coherent site; push them back. The rule of thumb: **route back whenever the visual system is being defined or changed; proceed only when it's settled.**

**If `.agents/design.md` is missing, that *is* the "go back" signal** — there's no system to apply yet. Route to `creative-direction`. If `.agents/product-marketing.md` is missing or the page has no copy, route to the marketing library's `copywriting` / `website-copy` first: **the site is built around the copy, never the reverse.**

## Copy First — the System Is the Stage, Not the Show

The single most important input is the words. Read the copy in `.agents/product-marketing.md` (audience, voice, positioning, and the page copy itself). **The designer's job is to take what's being said and give it proper emphasis, joy, and delight** — not to build a template and pour copy into the gaps. Wireframe-first thinking is the fastest tell of an assembled page. If the copy isn't written, get it written first.

**Size follows the content, not a template.** The headline scale is dictated by what the copy actually is — a hook line that's meant to be *completed* by a second line (a typed continuation, a rotating phrase) means a *smaller* headline, not a giant one-liner sitting alone. A hero with a lone hook and no follow-through reads as unfinished. Design the content you have; don't force it into a fixed hero shell.

The visual system serves the message. Design serves the message. The site is the stage; the copy is the show.

## When You Reference an Existing Site, Be Faithful to It

Redesigning a live site, or building "like" a reference? Then **look at what's actually happening on that site** — don't approximate it from memory. Full method in [references/faithful-replication.md](references/faithful-replication.md).

- **Port every section.** Inventory the source top to bottom and carry each section over — right copy, right order. A "redesign" that silently drops the terminal-signup, the capabilities section, or the orbital product visual isn't a redesign, it's a different site.
- **Match the action the site is driving.** Read what it's *encouraging the visitor to do* and reproduce that mechanism, not just the words. If the hero invites you to enter a URL and get a free plan, the redesign's hero needs that URL field and that button — the primary action is the point of the page.
- **Pull the real assets.** Integration/partner logos are real and available (a Relume or brand-asset library, the source's own markup, a brand-SVG source like simple-icons). **Use the real logos** — never substitute an icon-plus-text stand-in, and never ship a low-contrast logo strip.
- **Tell the visual's real story.** A product illustration has to communicate what the product *does* — e.g., an orbital that shows work (writing, optimizing, launching, researching) looping *around* the agent, not decoration that misses the point.

You are not producing a comp for someone else to implement. **You design by building** — the design decisions *are* the code. Output real, production front-end:

- **Match the project's stack if one exists** (Next.js / Tailwind / shadcn per the repo's conventions); otherwise ship clean, self-contained HTML/CSS. Framework-agnostic by default.
- **No Webflow, no Framer.** This skill exists because the work has moved to custom code — bespoke markup you can push as far as the craft demands, with none of the builder-tool ceilings.
- **Spacing in rem, fluid with `clamp()`** — never fixed px in production. Horizontal padding percentage-based; section padding fluid. See [references/craft-details.md](references/craft-details.md).
- Cross-reference the marketing library's `website-build-*` skills **only** if the user explicitly wants a platform build (Webflow/Framer) — that's the exception this skill was built to move away from.

## Apply the System

Pull the system from `.agents/design.md` — don't re-derive it, don't invent alongside it:

1. **Color by role.** Background, text (primary/secondary), **action/CTA**, support. Five stops per color, not ten. Use the tokens as defined.
2. **The CTA color is one deliberate, always choice — and it is *not* a text or graphic color.** Pick a single color that reads as *progression forward* (a green or blue, heuristically) and use it for the primary action everywhere. It must be **chromatically distinct** from the color carrying your headlines, icons, and decoration — otherwise the button doesn't pop, it blends. **Use it only on actual CTAs** — never a headline, never a decorative accent. A *separate* brand accent carries repeated emphasis (and even that with restraint); if the forward color starts showing up on labels and graphics, it stops meaning "act." Never style a non-interactive element like a button, either — a fake CTA erodes the real one. And give the CTA a **differentiated shape** — a pill or rounded form, not the same squared rectangle as every card — so the action reads at a glance.
3. **Type by role, for contrast not competition.** Display, heading, body — each with a clear job. Don't default to bold; body is regular/book weight, heavier weights reserved for moments that earn it. Heading leading 1.1–1.3, body 1.5–1.6. Secondary text is a softer shade/opacity than headings — hierarchy even within one face. **Change body copy to the secondary text color across the whole page in one systematic pass**, not section by section (see [references/craft-details.md](references/craft-details.md) → work systematically).
4. **The motif carries the brand — but restrained where the message must win.** Deploy the signature element as texture, pattern, or a recurring detail (this is where distinctiveness must *survive application* — see `design-principles`). **In the hero, calm it down:** a busy motif behind the headline and primary action is distraction, not identity. Let the message and the CTA lead; thread the motif more assertively in later sections.
5. **Eyebrows sparingly.** A mono/uppercase kicker over *every* section is clutter — it flattens hierarchy instead of building it. Use an eyebrow only where a section genuinely needs the label; most sections lead with the headline.
6. **Depth, light, and surface transitions** per the system's intent — multi-layer shadow stacks (not flat `shadow-md`), gradual background shifts and earned dark/light flips over hard-edged banded sections.

## Build Section by Section — Give Each Thing a Lane

Work the page as a sequence, never each section in isolation. Full per-section playbook in [references/section-patterns.md](references/section-patterns.md).

- **Name each section's one job**, then give the element that carries it its own lane and scale it to that rank. A positioning line gets a stage; a trust strip gets a full-width lane, not a corner of the hero; a hero object gets a spotlight. Supporting detail recedes.
- **Rhythm is the difference between designed and assembled — and it's more than "don't repeat a layout."** The column trio (2-col / 3-col / left-right-left) is a floor, not the range. When a stretch of the page goes flat, reach for something *unexpected* — an offset overlap, a full-bleed visual, a broken grid, an oversized number, a device shot bleeding off the edge, a diagonal. **Create richness with varied media**, not just varied columns: alternate vector graphics, photography, icons, and illustration so no two sections feel built from the same kit. Study a page that does this well (e.g. conversionfactory.co) for how pace is built section to section.
- **Balance every text section with a visual.** A text-only section that should carry an image reads as unfinished. Show the product in **layered, overlapping mockups** — a device, a card, a sticker at a slight rotation, real depth — the way strong marketing sites do, rather than a flat screenshot or nothing.
- **Consolidate.** Three substantial sections beat five thin ones. Whitespace is emphasis, not just breathing room.
- **CTAs, logos, and hover states are content, not decoration.** Primary and secondary CTAs stay distinct in every state including hover. Partner/integration logos get one normalized trust lane — **real logos**, optical (not pixel) sizing, one color story, and enough contrast to actually read.

## Tooling & References — Use What's Connected, Fall Back Gracefully

The build is faster and the rhythm richer when you lean on real tools — but **never block on a missing one; degrade to the next option.**

- **Relume MCP** *(preferred accelerator, when connected)* — generate the **sitemap** (top-level and parent/child pages), **wireframe** from its component library (which varies layouts and seeds rhythm), and a **style guide** whose base color auto-expands to 5-stop tints and sets the single always-CTA color — all of which ports into the build. Group pages by shared format (all solution pages one structure, varied content).
- **`frontend-design` skill** — when Relume isn't available, for distinctive, production-grade frontend.
- **`web-design-guidelines`** — the UX/UI + accessibility compliance pass.
- **Mobbin / Refero MCP** — pattern intake: study how strong sites solve a section before you build it.
- **Reference-site intake** — pull in the popular sites the client admires; name what to steal and what to avoid.
- **three.js / WebGL** — when the brand genuinely warrants ambitious 3D or interactive depth (not as decoration).

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
- [ ] If referencing an existing site: every section ported, the primary action reproduced, **real logos** pulled (no icon+text stand-ins)
- [ ] Real custom code shipped (project stack matched or clean HTML/CSS) — not a comp, not Webflow/Framer
- [ ] CTA color is a single forward color, distinct from text/graphics, used *only* on CTAs (never headlines/decoration), pill/rounded, reserved; no fake CTAs; separate brand accent carries emphasis; five stops; bold not the default
- [ ] Eyebrows sparing; hero motif calmed so message + action lead; motif carried assertively later; distinctiveness survives cover-the-logo
- [ ] Rhythm goes beyond the column trio — unexpected layouts and varied media (vector/photo/icon/illustration); text sections balanced with layered visuals
- [ ] Columns top-aligned, content left-aligned by default (center only genuinely-centered blocks); each section demarcated (header + spacing) so repeated L-R rows don't blur into one
- [ ] Headline size follows the content; contrast checked; no widows (headlines balanced); real photography pulled where imagery is called for
- [ ] Craft floor met (rem/clamp, layered shadows, optical alignment, nested radii, distinct CTA states); global changes done systematically
- [ ] Adversarial self-audit on the *rendered* page (web-slop tropes listed, not "none"); responsive + accessibility pass; spelling/grammar + OG image checked

## Related Skills

- `design-principles` — the craft beliefs this skill applies
- `creative-direction` — supplies the visual system (hard prerequisite); route back for Revolution / heavy Evolution
- `logo-design` — the mark, applied here
- `brand` — the audit whose categories are this skill's acceptance test
- `collateral-design` / `email-design` / `social-design` — apply the same system to other mediums
- `design-critique` — judges the shipped site against the emotional target and latitude
- `frontend-design` — distinctive production-grade frontend when a build accelerator isn't connected
- marketing library: `copywriting` / `website-copy` (the copy comes first), `cro` (optimize existing pages), `web-design-guidelines` (accessibility), `website-build-*` (only for an explicit platform build)
- tooling (use when connected, fall back gracefully): **Relume MCP** (sitemap · wireframe · style guide), **Mobbin / Refero MCP** (pattern intake); see [references/tooling.md](references/tooling.md)
