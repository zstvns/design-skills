# Design Skills

A library of skills that give AI agents real design competency — from defining a brand's emotional foundation through establishing its visual system, designing its logo, and applying it across web, collateral, email, social, and motion. Modeled on the structure of [Corey Haines' marketing skills](https://github.com/coreyhaines31/marketingskills): a foundational context layer, then strategy, then medium-specific execution, with a review layer that holds it to the standard.

The principles are **universal** — good design, stated with authority, usable on any brand. They are not tied to one agency's process.

## The Foundation: `.agents/brand.md`

One skill sits underneath all the others. **`brand`** creates and maintains `.agents/brand.md` — the single source of truth for a brand's visual identity (emotional target, muses, color, type, pattern, texture, illustration, iconography, photography, logo, and the latitude it's allowed to flex within). Every other skill reads it first, so the user never re-explains their brand on every task.

## The Sequence

Design runs as a build, not a flat menu. **`brand` is the diagnostic front door** — it runs the REO check (how much is changing) and routes to the right path:

```
                        ┌─ Revolution  → brand-strategy → creative-direction → … (build from scratch)
brand  (diagnose REO) ──┼─ Evolution   → capture, then strategy on the deltas → creative-direction
                        └─ Optimization → capture + audit → straight to the medium skills (fix execution)

then:  brand-naming → logo-design → identity-proofing
       → APPLICATION (web · collateral · email · social · motion) → design-critique
```

`brand-strategy` is the heavy generative path the diagnostic routes *to* — in an Optimization it's skipped entirely. That's the line between them: `brand` always runs; `brand-strategy` only when something is actually being defined or changed.

| Stage | Skill | Role | Status |
|-------|-------|------|--------|
| Foundation | [`brand`](skills/brand/SKILL.md) | The diagnostic front door: autonomous asset gathering, a nine-category brand audit scored against the confirmed competitor set (creative direction caps the rest; the foundation drives the REO verdict), and the keystone context doc (`.agents/brand.md`). Always runs first. | ✅ |
| Strategy | [`brand-strategy`](skills/brand-strategy/SKILL.md) | The heavy generative path `brand` routes to: what the brand should *feel* like, the muses it steals from, the distinct concepts, the fixed-core / flexible-range latitude. Skipped in an Optimization. | ✅ |
| Strategy | [`design-principles`](skills/design-principles/SKILL.md) | Universal craft beliefs every skill inherits — designed-vs-assembled, hierarchy, restraint, contrast, coherence-not-repetition. | ✅ |
| Identity | [`creative-direction`](skills/creative-direction/SKILL.md) | Translates the emotional target + muses into the concrete visual system — color, type, composition, pattern & texture, icons, illustration, photography — as one coherent language, validated against the audit's own bar. Three stylescapes for a Revolution; anchored deltas for an Evolution. | ✅ |
| Identity | `brand-naming` | Naming the brand or product, where applicable. | 🔜 |
| Identity | [`logo-design`](skills/logo-design/SKILL.md) | The core mark — Simple, Appropriate, Distinct (SAD), each judged *in context*: distinct vs. competitors, appropriate to the feeling, simple across every implementation. | ✅ |
| Identity | `identity-proofing` | Testing the identity in action on sample collateral and web *before* full rollout. | 🔜 |
| Application | `web-design` | Applying the brand to a live, conversion-focused site with real copy. | 🔜 |
| Application | `collateral-design` | Decks, one-pagers, print, ads. | 🔜 |
| Application | `email-design` | Lifecycle and campaign email. | 🔜 |
| Application | `social-design` | Social formats and systems. | 🔜 |
| Application | `motion-design` | Micro-interactions and animation with intent. | 🔜 |
| Application | `art-direction` | Sourcing and generating the actual visual assets (AI generation, stock, commissioning) to the standards the craft sets. | 🔜 |
| Review | `design-critique` | Judges any artifact against the emotional target and the latitude — including whether a deviation is a legitimate **flex** or a drift. | 🔜 |

## Core Beliefs (the 30-second version)

1. **Design serves the message; the message comes first.** Copy before design, design before build.
2. **Defaults, not laws.** Break any rule — but state why, or the default stands.
3. **Designed vs. assembled.** Rank what matters, then give it space and scale to match.
4. **Hierarchy is the job.** Most weak design isn't ugly, it's flat.
5. **Restraint is a feature.** Protect the few things that carry the message by removing what competes.
6. **Emotion before execution.** Know the feeling first. Steal it from specific muses.
7. **Consistency is coherence, not repetition.** A piece can flex off the visual system and still be on-brand — if it stays true to the strategy.
8. **Not perfection — better than it was.**

## Installing & Testing

Clone the repo, then symlink (or copy) the skills you want into a project's `.claude/skills/`:

```bash
git clone https://github.com/zstvns/design-skills.git
mkdir -p my-test-project/.claude/skills
for s in brand brand-strategy design-principles logo-design creative-direction; do
  ln -s "$(pwd)/design-skills/skills/$s" my-test-project/.claude/skills/$s
done
cd my-test-project && claude
```

Then run `/brand` and give it a company URL. It gathers the assets itself, confirms the competitor set with you, runs the nine-category audit, and presents the full scorecard + verdict. One input it can't infer: the client's **appetite** (incremental refinement vs. transformational change) — provide it if you know it, since it drives the recommended path.

## Using the Skills

Invoke any skill by name (e.g. `/brand`, `/brand-strategy`). Start at `brand` for any new project; the skills cross-reference each other and tell you where to go next. They read shared context from `.agents/brand.md` (and `.agents/product-marketing.md` if a marketing-skills setup is present).

## Status

Phase 1 (the foundation) is built: `brand`, `brand-strategy`, `design-principles`. The identity, application, and review stages are in progress — see [VERSIONS.md](VERSIONS.md).

## License

MIT — see [LICENSE](LICENSE).
