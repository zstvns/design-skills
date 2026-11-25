---
name: design-system
description: "Turn an approved visual system into design-system foundations agents can't skip: one page per foundation (color, typography, spacing, radius and nested corners, elevation, grid and layout, motion, iconography), each split into sections with a mockup showing the rule in use, its edge cases and fixes, and closing instructions for agents. Tokens in code are the single source of truth, the design file (Paper by default) and the pages stay in sync with them, and a self-check script catches what the instructions miss: contrast on token pairs, raw hex/px and off-scale values, off-token radius, nested corners, and docs that drift from the tokens. Use when the user mentions 'design system,' 'foundations,' 'document our tokens,' 'token docs,' 'design system docs,' 'rules for agents,' 'agents keep breaking our design rules,' 'keep the design file and code in sync,' 'radius scale,' 'nested corners,' 'contrast check,' 'lint our styles,' or 'self-check script.'"
metadata:
  version: 1.0.1
---

# Design System

You turn a decided visual system into **foundations**: one page per foundation, written with the brand owner, that tells an agent exactly what to do and is backed by checks that catch it when it doesn't. **Instructions tell the agent what to do. The checks catch it when it doesn't.** Both are required. Instructions without checks get skimmed, and checks without instructions produce agents that game the linter.

Read `design-principles` first. This skill applies its "if code can catch it, say so" rule to the whole system: every rule on a page is either enforced by the check script or marked as a judgment call a human reviews.

> **Position in the sequence:** after `creative-direction` (the system is decided), alongside or just before the application skills (`web-design`, `collateral-design`, `motion-design`, `product-film`), which build against the foundations. This skill **documents and enforces** a system. It doesn't choose colors, faces, or motifs.

## Hard Prerequisite: a Decided System

Open `.agents/design.md` and `.agents/brand.md`.

- **If `.agents/design.md` is missing, or has no color roles, type roles, and token values, stop and route to `creative-direction`.** Foundations written without a decided system are taste written down as law.
- **Read the living record too:** the Motion System from `motion-design`, the Icon Library from `art-direction`, Component records and Taste Rules. A foundation page encodes what was decided. It never re-decides it.
- **Find the tokens file.** In a site repo it's the project's own token CSS (for example `src/styles/tokens.css`, or `app/globals.css` with Tailwind's `@theme`). With no repo, use `.agents/assets/design-system/tokens.css` if `creative-direction` built that kit. Otherwise create `.agents/foundations/tokens.css`. **Never keep two token files with the same values.**
- **Check the Toolkit** in `.agents/brand.md` for the design canvas, and check which canvas MCPs are connected in this session. Don't ask about what you can see.

## Where Things Live

| What | Where | Source of truth for |
|---|---|---|
| Tokens | The project's tokens file (CSS custom properties) | **Every value.** Pages and the design file show values; they never own them. |
| Foundation pages | `.agents/foundations/<foundation>.md`, plus `README.md` as the index | **Every rule**, its edge cases, and its agent instructions |
| Design file | Paper by default (see [references/design-file-sync.md](references/design-file-sync.md)); one page per foundation | The visual version of each page: the same sections and text, plus the mockups |
| Checks | `foundations.check.json` + `check-foundations.py` in the project | What code can catch |

`.agents/design.md` keeps the *why*. A foundation page links to the decision it encodes instead of restating the reasoning.

## The Workflow

1. **Inventory.** List the foundations this system needs and map each to its source in the living record. The core set is color, typography, spacing, radius (with nested corners), elevation, grid and layout, motion, and iconography. Add focus and states, imagery treatment, or data-viz only when the system has them. Agree the order with the owner. Color and spacing usually come first, because the others reference them. What each foundation covers, its standard sections, and its known edge cases: [references/foundations.md](references/foundations.md).
2. **Reconcile the tokens.** Put every value the foundations need into the tokens file, named by role (`--color-text-muted`, not `--gray-500`). **A missing value is a question for the owner, not a gap you fill.** If the answer touches the fixed core (color, type, logo, motif, treatment), it's a brand change: it goes through `design.md` and the brand lead, per `design-principles` → Corrections Become Rules.
3. **Build one foundation at a time, with the owner.** Use the template in [references/foundation-page-template.md](references/foundation-page-template.md):
   - **Split the foundation into sections**, for example scale, tokens, nested corners, and do's and don'ts for radius.
   - **Give every section a mockup** that shows the rule in use, built from the real tokens. Show the right version beside the wrong one, both labeled.
   - **Write every edge case and its fix on the same page**: long text, tiny or huge containers, dark mode, nested elements, missing assets, high zoom.
   - **End the page with Instructions for agents**: numbered steps, self-checks the agent runs, and do's and don'ts. Name which self-checks the script enforces.
   - Draft the page in the design file and in `.agents/foundations/`, then walk the owner through it. **You draft, the owner approves.** Nothing is a rule until they approve it, and the page's status line records that.
4. **Wire the checks.** Copy [scripts/check-foundations.py](scripts/check-foundations.py) into the project (for example `scripts/check-foundations.py`), write `foundations.check.json` from [scripts/foundations.check.example.json](scripts/foundations.check.example.json) with the project's real contrast pairs and nested-radius rules, add a `check:design` script, and run it until it passes. Setup, what it catches, and the rules about suppressions: [references/enforcement.md](references/enforcement.md).
5. **Point every agent at it.** Add one line to the project's `AGENTS.md` or `CLAUDE.md`: read `.agents/foundations/README.md` and the pages for the foundations you touch before UI work, and run `check:design` before saying you're done.
6. **Keep the three in sync** using the change rules below.

## When a Rule Breaks

- **The agent ignored a rule the pages cover:** fix the component. The rule is fine. If the check didn't catch it, add a check or a self-check line so it can't recur.
- **The agent hit a case the rules never covered:** fix the rule first, in the page and the design file, get the owner's yes, and then fix the code. Never patch the code and leave the page silent. The next agent will make the same call differently.
- **A value changes:** change it in the tokens file, then run the check. It flags every page row that now disagrees. Update the pages, then re-sync the design file's mockups.
- **The owner corrects a page or a mockup:** that's a Corrections Become Rules signal. Turn it into a rule on the page, with their approval, and add a check when code can catch it.

## Interactive Pieces

Mockups and reference components that show interaction (menus, tabs, toggles, dialogs, focus states) use a tested headless library: **Radix, React Aria, or Base UI**, or shadcn if the project already uses it. One library per project. Never hand-roll ARIA. See `web-design` → tooling.md → Interactive behaviors.

## Non-Negotiables

- [ ] `.agents/design.md` read, or routed to `creative-direction`; no value invented
- [ ] One tokens file is the source of truth; values named by role; no duplicate token file
- [ ] One page per foundation, each with sections, a mockup per section, edge cases with fixes, and Instructions for agents (steps, self-checks, do's and don'ts)
- [ ] Mockups built from the real tokens, showing the right and the wrong version side by side
- [ ] Nested corners documented and checked: inner = max(0, outer − padding)
- [ ] Contrast pairs listed for every text-on-ground and focus-on-ground pairing, in every theme, and passing WCAG AA
- [ ] Check script wired, run, and passing, with every suppression carrying a reason
- [ ] Each page's status records the owner's approval; brand-scope changes went through the brand lead
- [ ] Pages, design file, and tokens agree (the check's docs section passes)

## Related Skills

- `design-principles` — the beliefs every rule traces to, and Corrections Become Rules
- `creative-direction` — decides the system this skill documents (hard prerequisite); owns `.agents/design.md`
- `art-direction` — the iconography and imagery specs the iconography page encodes
- `motion-design` — the motion system the motion page encodes; route motion decisions there
- `web-design` — builds sites against the foundations; its craft-details and accessibility report share these rules
- `collateral-design` — applies the same tokens to fixed-format pieces
- `brand` — the audit; a documented, enforced system is what its Style Guide category looks for
