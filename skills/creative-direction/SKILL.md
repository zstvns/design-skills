---
name: creative-direction
description: "Translate a brand's strategy — its emotional target and muses — into the concrete visual system: color, typography, composition, pattern & texture, iconography, illustration, and photography, as one coherent language. Use after brand-strategy and before logo or application work, or when the user mentions 'creative direction,' 'visual identity,' 'visual system,' 'design language,' 'stylescape,' 'pick our colors and fonts,' 'define our look,' or an audit's moving-forward items. This is where 'what it should feel like' becomes 'what it looks like.'"
metadata:
  version: 1.8.0
---

# Creative Direction

You establish a brand's **visual system** — every asset class, one coherent language, all of it traceable to the feeling the brand is built to produce. This is the stage where strategy becomes visible: the emotional target and muses from `brand-strategy` get translated into actual color, type, composition, pattern, icons, illustration, and photography.

Read `design-principles` first. This skill is where its rules get *applied*: contrast-not-competition, restraint, five stops, emotion before execution, and "state why, or the default stands."

> **Position in the sequence:** after `brand` (the audit/context) and `brand-strategy` (the feeling + muses), before `logo-design` and the application skills. The audit *diagnoses*; this skill *builds the cure*.

## Hard Prerequisite: the Emotional Target and Muses

Open `.agents/brand.md`. You need:
- The **Emotional Target** (the feelings the brand must produce)
- The **Muses**, each with its stealable visual cue
- The **confirmed competitor set** (what "distinct" is measured against)
- The **REO depth and the client's appetite**

**If the Emotional Target or muses are missing, stop and route to `brand-strategy`.** Without them you'd be choosing colors and typefaces from taste — exactly the "different by accident" and "category default" failure modes the audit exists to catch. Every choice you make here must trace to a muse or the emotional target; if you can't say *why* a choice serves the feeling, it's a default wearing a decision's clothes.

## Scope by Depth

- **Revolution** — build the system from scratch as **three genuinely distinct concepts**, presented as stylescapes (see [references/stylescapes.md](references/stylescapes.md)). Each concept is a different plausible answer to the emotional target — different muses, color story, type pairing, and attitude — not three shades of one idea. Stylescapes are *real intended assets*, not mood boards: expressive and free, not yet constrained by buildability.
- **Evolution** — one direction, anchored on the **fixed core** (the equity being kept — often the logo, name, or a color). Start from the primary touchpoint (usually the hero/website) and change only the deltas the strategy named: carry the kept assets forward, introduce the new type, motif, or palette around them.
- **Optimization** — mostly out of scope. The direction already exists; the work is execution (`web-design`, `collateral-design`). At most a light pass to *document* the existing system so it can be enforced.

## The Core Move: Abstract the Muses

This is the engine of a distinct direction, and the step most likely to be skipped. **Take the muse's *literal* forms — recorded at physical fidelity in `brand-strategy` — and abstract them into modern, ownable brand elements.** You are not decorating with the muse; you are distilling its geometry, materials, and ideas into a system.

- Worked examples (real): the concentric rings around the Kaaba → a dotted-line motif meaning *unity of people*; the building's brick geometry → an ownable grid; Islamic gardens → an "ants in the garden" pattern. The mission-control muse → the amber-on-black telemetry readout and the machined dimensional knob as the signature element.
- **Pull two things from each muse: a color story and an abstracted idea.** Then combine the abstractions with modern UI. Most software looks the same — the muses are how you *skin* an undifferentiated category with something only this brand could own.
- **Why it lands: the abstraction must trace to the brand's core beliefs/values** (from `brand-strategy`), not just the muse's surface. When it traces to *why the brand exists*, the result reads as inevitable and unique; when it's pulled from the muse's look alone, it reads as costume.
- Typography is chosen to **suit the direction**, not literally pulled from the muse (muse-derived type is rare) — the abstraction lives in motif, color, texture, and composition first.

## The System to Establish

Work through each element with the audit's bar in mind — the nine-category audit (see `brand`) is your acceptance test, and **every "Moving forward" item the audit raised (all nine categories except the logo, which `logo-design` handles after) must be answered by the system** — don't leave an audit gap unaddressed. Full per-element standards: [references/element-standards.md](references/element-standards.md). The production-craft floor — art-direction commitment, design tokens, typography/texture hard rules, the abomination checklist — lives in [references/frontend-boilerplate.md](references/frontend-boilerplate.md); the board's collage/bento composition in [references/stylescapes.md](references/stylescapes.md).

1. **Color** — assign by *role*: background, text (primary/secondary), **action/CTA** (protected — minimized everywhere else), support. Five stops per color, not ten. **Verify ownership against the confirmed competitor set** — a color isn't owned if a rival occupies it; deliberately escape the category's default lane.
2. **Typography** — faces by role (display, heading, body), chosen for **contrast, not competition**; if a mono or third register is needed, prefer a superfamily's own cut over a bolted-on face. Set weight/style restrictions. **Licensing checkpoint:** foundry, budget, and character/language support for the target markets — confirm *before* the direction is approved, not after.
3. **Composition & layout** — the grid, density, spacing logic, section rhythm and variety (no monotonous stacks), how the eye is directed.
4. **Pattern & texture** — an **ownable motif**, most naturally derived from the mark's geometry, deployable off-site without the logo or color present. Check it doesn't collide with a competitor's motif.
5. **Iconography** — one source of truth; stroke/fill/grid rules; plan the tiers (utility now, storytelling/illustration as the brand matures).
6. **Illustration & product abstraction** — branded abstractions over raw screenshots; a defined style (or an explicit "no illustration" decision).
7. **Photography** — subjects, treatment/grade, art direction; or the deliberate absence of it.
8. **Motion** *(directional note, not full spec)* — what the brand's motion *feels* like; intent over ornament (hover > load > scroll > loop).

## Producing the Board — Source and Generate the Real Assets

A stylescape needs treated imagery and genuine texture; flat CSS shapes read as austere. But the operator is usually a **founder, not a designer** — assume they have **ChatGPT (GPT Image)** and maybe **free stock (Unsplash / Pexels)**, *no* paid stock (Envato/Freepik), *no* premium generators, and *no* design chops. So the leverage flips to **you**: you supply the craft the founder can't.

- **You write the prompts; the founder just runs them.** A founder can "create anything" in GPT Image — *only if given the right prompt.* So **prompt-craft is the skill here.** Hand them precise, muse-anchored prompts — subject, treatment/grade, palette (hexes), texture, lighting, composition, aspect ratio, "no text," all tied to the recorded muse cues — for them to paste into ChatGPT and bring back. Iterate the prompt for them when a result misses. This is the realistic loop: the founder's generator + your prompt-writing.
- **You compose the board, not the founder.** They have no Figma skill and no design eye — so *you* assemble the coalesced board (self-contained HTML/CSS/SVG) from the generated + free-stock assets. The founder supplies raw images; you do the art direction, layout, texture, and typography.
- **Lean on CSS/SVG for the texture it renders well** — grain, noise, scanlines, patterns, grids, machined UI, telemetry, glows, gradients — which for many concepts (anything mechanical, retro, systems-y) is most of the "life," no generation needed. Reserve GPT Image / free stock for photographic or illustrative muses. (Strict-CSP HTML can't load a webfont URL — embed the face as a data URI, or accept a fallback and *name* the intended typeface so the type intent reads.)
- **Free stock only where generation is weak** (a specific real place, a real product). Unsplash/Pexels; assume nothing paid.
- **Accelerators, only if actually connected** (rare for a founder): Adobe Firefly (MCP), Higgsfield / Magnific, Figma / Figma Weave. Use directly when present; never assume them.
- **The muses are the brief.** Everything generated or sourced is treated *to the muse cues at physical fidelity* — never generic stock dropped in raw.
- **If imagery can't be produced yet, say so** and label the board a *composition / art-direction proof* with the GPT-Image prompts attached, so the founder can fill it in. Never quietly ship a flat board and call it finished.

## Validate Before You Present

Run your own work through the same gauntlet the audit runs — **adversarially, on the rendered board, not the concept in your head** (see `design-principles` → Judge Your Own Work on the Competitor's Bar). The concept can be distinctive while the pixels are generic; a self-audit that grades intent misses exactly that.

- **Score it against the foundational categories** vs. the confirmed competitor set, at the harshness you'd use on a rival — would this system earn 4–5 on Creative Direction, Color, Pattern, and (with `logo-design`) Logo? Cover the logo: is it still recognizably this brand?
- **Run the AI-slop check** (`design-principles` → ai-slop.md) on your own output and **list what it finds** — the tropes actually on the board (a mono "telemetry/terminal" readout, a dot-grid, a left rail, a centered no-variety column, `rounded-lg` everywhere). "No slop here" is a reflex, not a result; produce the list, or an earned, specific "none, because —." "Clean" counts as *unassessed*, not passed.
- **Confirm the board is a rendered surface, not a CSS-block comp** — treated imagery or a committed illustration style, a full named type specimen, an ownable motif (not a dot-grid default), applied mockups, real depth and bleed. Missing anatomy = under-built (see [references/stylescapes.md](references/stylescapes.md)).
- **Carry-through gate:** the *applied* fragment (the hero/mockup) must pass cover-the-logo too, not just the abstract board (see `design-principles` → Distinctiveness Must Survive Application). A distinctive board with a generic applied screen is a fail — the distinctiveness has to survive into application, which is where it usually leaks out.
- **Trace every element to a muse or the emotional target.** Anything you can't trace, cut or justify.
- **Copy check:** does the system serve the message and give the words their proper emphasis? Design serves the message — the system is the stage, not the show.

## Present, Decide, Record

- **Give it a walkthrough first, then present.** Talk each concept through — the muses, the abstraction, why it answers the feeling — before handing it over. A stylescape without its narrative is just arrangement.
- **Name the challenges, honestly.** For each direction, say what would be *hard* to implement across the board, and **how different it actually is from the competitors** — the things the client needs to weigh to decide. Don't only sell; surface the tradeoffs.
- **Close with a comparison — per direction or a synopsis at the end.** For each concept, answer the questions that actually drive the pick: the **challenges**, the **pros**, **is this the most differentiated?**, and **is this the most on-brand with the emotion you're trying to elicit?** Fold it into each direction's walkthrough or give a synopsis that weighs all three against each other at the close.
- **Prove it has legs applied.** Clients want to see it real, not abstract — the fastest proof is a **website hero + one or two ads** carrying the full system. A concept that looks great on the board but thin when applied hasn't earned the pick (see the carry-through gate above).
- **Document the styles and their sources.** Photo / graphic / icon / typography styles, and where any sourced assets came from (stock, Envato, Freepik, etc.) — notes now save the application skills from guessing later.
- **Revolution:** present the three stylescapes; the client picks one. **Push for one idea, not a Frankenstein.** A little modularity is fine, but merging concepts usually averages three ideas into none. When a client asks to graft (e.g. this concept's type on that one's board), *knowing the emotional target lets you reject the merge that betrays it* — a merge is legitimate only if it still produces the feeling and has its own single story (see [references/stylescapes.md](references/stylescapes.md) → synthesis vs. averaging).
- **Evolution:** present the direction against the *current* state so the deltas are unmissable.
- Get **explicit approval** before `logo-design` and the application skills build on it — everything downstream compounds on this decision. (Run creative direction *before* any naming project.)
- **Write the approved system into `.agents/brand.md`** (the Visual system section, plus updates to Fixed core / Flexible range), recording the *why* behind each choice — the rationale is what survives handoffs and lets `design-critique` judge flexes later.

## The Deliverable

Two layers, one source of truth — mirroring `brand-strategy`:

1. **`.agents/design.md`** — the full creative-direction record, generated at the end of this exercise. It holds: the three concepts and the one chosen; each concept's **muses → abstractions**; the documented **photo / graphic / icon / typography styles with their asset sources** (stock, Envato, Freepik…); the **color system** (roles + hex + ramps) and **design tokens**; the ownable **motif/texture** and the **signature element**; the **application examples** (hero + ads); the **implementation challenges** and **competitor-differentiation** notes; and the *why* behind every choice. Use the template in [references/design-doc-template.md](references/design-doc-template.md). This is the detailed spec the application skills (`web-design`, `collateral-design`, …) build against — the counterpart to `brand-strategy`'s `.agents/brand-strategy.md`.
2. **`.agents/brand.md`** — the distilled system: write the approved Visual system into its section (plus Fixed core / Flexible range) so every downstream skill inherits it without reading the whole record.

Plus, if the client wants it, a **published copy** (Notion, PDF) generated *from* `.agents/design.md` — never the other way around.

## Non-Negotiables

- [ ] Emotional Target + muses read from `.agents/brand.md` (or routed to `brand-strategy` first)
- [ ] Depth + appetite respected (three stylescapes / anchored deltas / documentation pass)
- [ ] Color ownership verified against the confirmed competitor set
- [ ] Type licensing + character support confirmed
- [ ] Motif is ownable and doesn't collide with a competitor's
- [ ] Every element traces to a muse or the emotional target
- [ ] Adversarial self-audit run on the *rendered* board (AI-slop tropes listed, not "none"; applied fragment passes cover-the-logo) before presenting
- [ ] Challenges + competitor-differentiation named; direction proven applied (hero + ad)
- [ ] Client approval secured; full record written to `.agents/design.md`; distilled system written to `.agents/brand.md`

## Related Skills

- `design-principles` — the rules this skill applies
- `brand` — the audit that diagnoses; its categories are this skill's acceptance test
- `brand-strategy` — supplies the emotional target and muses (hard prerequisite)
- `logo-design` — the mark, designed inside this system
- `web-design` / `collateral-design` — apply the approved system with real copy
- `design-critique` — judges later work against what's recorded here
