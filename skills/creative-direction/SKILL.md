---
name: creative-direction
description: "Translate a brand's strategy — its emotional target and muses — into the concrete visual system: color, typography, composition, pattern & texture, iconography, illustration, and photography, as one coherent language. Use after brand-strategy and before logo or application work, or when the user mentions 'creative direction,' 'visual identity,' 'visual system,' 'design language,' 'stylescape,' 'pick our colors and fonts,' 'define our look,' or an audit's moving-forward items. This is where 'what it should feel like' becomes 'what it looks like.'"
metadata:
  version: 1.0.0
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

## The System to Establish

Work through each element with the audit's bar in mind — the nine-category audit (see `brand`) is your acceptance test. Full per-element standards: [references/element-standards.md](references/element-standards.md).

1. **Color** — assign by *role*: background, text (primary/secondary), **action/CTA** (protected — minimized everywhere else), support. Five stops per color, not ten. **Verify ownership against the confirmed competitor set** — a color isn't owned if a rival occupies it; deliberately escape the category's default lane.
2. **Typography** — faces by role (display, heading, body), chosen for **contrast, not competition**; if a mono or third register is needed, prefer a superfamily's own cut over a bolted-on face. Set weight/style restrictions. **Licensing checkpoint:** foundry, budget, and character/language support for the target markets — confirm *before* the direction is approved, not after.
3. **Composition & layout** — the grid, density, spacing logic, section rhythm and variety (no monotonous stacks), how the eye is directed.
4. **Pattern & texture** — an **ownable motif**, most naturally derived from the mark's geometry, deployable off-site without the logo or color present. Check it doesn't collide with a competitor's motif.
5. **Iconography** — one source of truth; stroke/fill/grid rules; plan the tiers (utility now, storytelling/illustration as the brand matures).
6. **Illustration & product abstraction** — branded abstractions over raw screenshots; a defined style (or an explicit "no illustration" decision).
7. **Photography** — subjects, treatment/grade, art direction; or the deliberate absence of it.
8. **Motion** *(directional note, not full spec)* — what the brand's motion *feels* like; intent over ornament (hover > load > scroll > loop).

## Validate Before You Present

Run your own work through the same gauntlet the audit runs:

- **Score it against the foundational categories** vs. the confirmed competitor set — would this system earn 4–5 on Creative Direction, Color, Pattern, and (with `logo-design`) Logo? Cover the logo: is it still recognizably this brand?
- **Run the AI-slop check** (`design-principles` → ai-slop.md) on your own output. Escaping the category default is the whole point — don't ship a tidier version of it.
- **Trace every element to a muse or the emotional target.** Anything you can't trace, cut or justify.
- **Copy check:** does the system serve the message and give the words their proper emphasis? Design serves the message — the system is the stage, not the show.

## Present, Decide, Record

- **Revolution:** present the three stylescapes; the client picks one (or a deliberate merge — resist "a little of each," which averages three ideas into none).
- **Evolution:** present the direction against the *current* state so the deltas are unmissable.
- Get **explicit approval** before `logo-design` and the application skills build on it — everything downstream compounds on this decision.
- **Write the approved system into `.agents/brand.md`** (the Visual system section, plus updates to Fixed core / Flexible range), recording the *why* behind each choice — the rationale is what survives handoffs and lets `design-critique` judge flexes later.

## Non-Negotiables

- [ ] Emotional Target + muses read from `.agents/brand.md` (or routed to `brand-strategy` first)
- [ ] Depth + appetite respected (three stylescapes / anchored deltas / documentation pass)
- [ ] Color ownership verified against the confirmed competitor set
- [ ] Type licensing + character support confirmed
- [ ] Motif is ownable and doesn't collide with a competitor's
- [ ] Every element traces to a muse or the emotional target
- [ ] Self-audit run (foundational categories + AI-slop) before presenting
- [ ] Client approval secured; system + rationale written to `.agents/brand.md`

## Related Skills

- `design-principles` — the rules this skill applies
- `brand` — the audit that diagnoses; its categories are this skill's acceptance test
- `brand-strategy` — supplies the emotional target and muses (hard prerequisite)
- `logo-design` — the mark, designed inside this system
- `web-design` / `collateral-design` — apply the approved system with real copy
- `design-critique` — judges later work against what's recorded here
