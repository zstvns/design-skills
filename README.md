# Design Skills

[![Stars](https://img.shields.io/github/stars/zstvns/design-skills?style=flat-square&label=stars&color=000)](https://github.com/zstvns/design-skills/stargazers) [![Release](https://img.shields.io/github/v/release/zstvns/design-skills?style=flat-square&color=000)](https://github.com/zstvns/design-skills/releases) [![License](https://img.shields.io/badge/license-MIT-000?style=flat-square)](./LICENSE)

**AI agent skills for the designer's craft.** Brand diagnosis and audit, brand strategy, creative direction, logo design, and application across web, collateral, and motion — with a shared context document so you never re-explain your brand.

The principles are **universal** — good design, stated with authority, usable on any brand. They are not tied to one agency's process.

Works with [Claude Code](https://claude.ai/code), Codex, Cursor, and other [Agent Skills](https://agentskills.io) hosts.

---

## Install

```bash
# In Claude Code
/plugin marketplace add zstvns/design-skills
/plugin install designskills@designskills
```

Any other Agent Skills host — clone and symlink into the cross-agent skills directory:

```bash
git clone https://github.com/zstvns/design-skills.git ~/code/design-skills
mkdir -p your-project/.agents/skills
for s in ~/code/design-skills/skills/*; do
  ln -s "$s" "your-project/.agents/skills/$(basename "$s")"
done
```

For Claude Code without the plugin, use `.claude/skills/` in place of `.agents/skills/`.

There are **no required dependencies** — every skill runs as-is. A few optional connections make the output substantially better; see [INSTALL.md](./INSTALL.md).

---

## Getting started — 5 minutes

**1. Install** (above).

**2. Run `/brand` and give it a URL.**

```
/brand yourbrand.com
```

It crawls the site, follows links out to social and press, gathers the brand's existing assets itself, confirms the competitor set with you, runs a nine-category audit, and presents a full scorecard plus a verdict: **Revolution, Evolution, or Optimization** — how much should actually change.

The one input it can't infer is your **appetite** (incremental refinement vs. transformational change). Give it if you know it; it drives the recommended path.

**3. Follow where it routes you.** The skills know their own sequence and hand off to each other. You don't need to memorize the map below — `brand` will tell you what's next.

**4. Read one SKILL.md** to see the pattern. Each skill is a craft document you can also just read and execute by hand; the automation is a side effect.

---

## The Context Documents

Everything in this library reads from and writes to plain markdown in your project's `.agents/` directory. Collect once, use everywhere — the agent never asks you to re-explain your colors, type, or direction.

| Document | Written by | What it holds |
|---|---|---|
| **`.agents/brand.md`** | `brand` | **The keystone.** The distilled source of truth every skill reads first — emotional target, muses, color, type, pattern & texture, illustration, iconography, photography, logo, and the fixed-core / flexible-range latitude. |
| **`.agents/brand-strategy.md`** | `brand-strategy` | The full coaching record behind the distillation — your verbatim answers, the muses with their stealable cues, the pressure-tested personality, the concept directions. `brand.md` gets the synthesis; this keeps the reasoning. |
| **`.agents/design.md`** | `creative-direction` | The full creative-direction spec — concepts, color system and tokens, documented photo / graphic / icon / type styles with asset sources, the motif and signature element, and the *why* behind every choice. **It's a living record:** `logo-design` appends the approved mark, `motion-design` the built motion system, and the application skills their adopted libraries and notes. |
| **`.agents/assets/logo/`** | `logo-design` | The locked logo files themselves — lockup · icon · square avatar · app icon, each in SVG/PNG/JPEG across the colorway set. Downstream skills *place these files*; they never redraw the mark. |
| **`.agents/product-marketing.md`** | *external* | Positioning, ICP, voice, and the competitive landscape — from the [marketingskills](https://github.com/coreyhaines31/marketingskills) library. Read, never written. If present, the brand audit pulls its competitor set from here instead of guessing. |

Nothing here is required up front. Each skill creates what's missing or tells you which one to run first.

---

## The Sequence

Design runs as a build, not a flat menu. **`brand` is the diagnostic front door** — it runs the REO check (how much is changing) and routes to the right path:

```
                        ┌─ Revolution  → brand-strategy → creative-direction → … (build from scratch)
brand  (diagnose REO) ──┼─ Evolution   → capture, then strategy on the deltas → creative-direction
                        └─ Optimization → capture + audit → straight to the medium skills (fix execution)

then:  logo-design
       → APPLICATION (web · collateral · motion)
```

`brand-strategy` is the heavy generative path the diagnostic routes *to* — in an Optimization it's skipped entirely. That's the line between them: `brand` always runs; `brand-strategy` only when something is actually being defined or changed.

| Stage | Skill | Role |
|-------|-------|------|
| Foundation | [`brand`](skills/brand/SKILL.md) | The diagnostic front door: autonomous asset gathering, a nine-category brand audit scored against the confirmed competitor set (creative direction caps the rest; the foundation drives the REO verdict), and the keystone context doc. Always runs first. |
| Foundation | [`design-principles`](skills/design-principles/SKILL.md) | Universal craft beliefs every other skill inherits — designed-vs-assembled, hierarchy, restraint, contrast, coherence-not-repetition. |
| Strategy | [`brand-strategy`](skills/brand-strategy/SKILL.md) | The heavy generative path `brand` routes to: what the brand should *feel* like, the muses it steals from, the distinct concepts, the fixed-core / flexible-range latitude. Skipped in an Optimization. |
| Identity | [`creative-direction`](skills/creative-direction/SKILL.md) | Translates the emotional target + muses into the concrete visual system — color, type, composition, pattern & texture, icons, illustration, photography — as one coherent language, validated against the audit's own bar. Three stylescapes for a Revolution; anchored deltas for an Evolution. |
| Identity | [`logo-design`](skills/logo-design/SKILL.md) | The core mark — Simple, Appropriate, Distinct (SAD), each judged *in context*: distinct vs. competitors, appropriate to the feeling, simple across every implementation. Delivers locked asset files, not a description. |
| Application | [`web-design`](skills/web-design/SKILL.md) | Applying the brand to a live, conversion-focused site with real copy — designed *and built* in custom code, giving the words their proper emphasis. Rhythm as a vocabulary of section types, one reserved CTA color, faithful replication when referencing a live site. |
| Application | [`collateral-design`](skills/collateral-design/SKILL.md) | Every fixed-format piece that isn't a website — decks, one-pagers, social posts, OG images, ads, print. Ships as a true-size viewer plus real exports. Coherence across the family, not one cloned template. |
| Application | [`motion-design`](skills/motion-design/SKILL.md) | The twelve principles of animation applied to UI motion in custom code — micro-interactions, transitions, entrances, scroll and hover behavior — with weight, emotion, and restraint. Motion carries feeling; not fade-up-on-everything. |

## Which skill do I invoke when?

| I want to... | Skill |
|---|---|
| Find out how good my brand actually is, and how much should change | [`brand`](skills/brand/SKILL.md) |
| Figure out what my brand should *feel* like | [`brand-strategy`](skills/brand-strategy/SKILL.md) |
| Pick my colors, type, and visual language | [`creative-direction`](skills/creative-direction/SKILL.md) |
| Design or critique a logo | [`logo-design`](skills/logo-design/SKILL.md) |
| Design and build a website or landing page | [`web-design`](skills/web-design/SKILL.md) |
| Make a deck, one-pager, social post, OG image, ad, or print piece | [`collateral-design`](skills/collateral-design/SKILL.md) |
| Add animation, hover states, or scroll behavior | [`motion-design`](skills/motion-design/SKILL.md) |
| Understand why a design feels off when I can't name it | [`design-principles`](skills/design-principles/SKILL.md) |

---

## Core Beliefs (the 30-second version)

1. **Design serves the message; the message comes first.** Copy before design, design before build.
2. **Defaults, not laws.** Break any rule — but state why, or the default stands.
3. **Designed vs. assembled.** Rank what matters, then give it space and scale to match.
4. **Hierarchy is the job.** Most weak design isn't ugly, it's flat.
5. **Restraint is a feature.** Protect the few things that carry the message by removing what competes.
6. **Emotion before execution.** Know the feeling first. Steal it from specific muses.
7. **Consistency is coherence, not repetition.** A piece can flex off the visual system and still be on-brand — if it stays true to the strategy.
8. **Not perfection — better than it was.**

## Using the Skills

**Fully self-serve.** Everything here is built to be run end-to-end by you and your own AI agent — the audit, the strategy coaching, the creative direction, all of it. There's no agency, workshop, or consultant behind this repo, and nothing to book; iterate with your agent, keep your context in `.agents/`, and go as deep as your brand needs.

Invoke any skill by name (e.g. `/brand`, `/logo-design`). Start at `brand` for any new project; the skills cross-reference each other and tell you where to go next.

## Roadmap

Eight skills ship today. Deliberately not shipped yet:

| Skill | Why it's waiting |
|---|---|
| `art-direction` | Sourcing and generating the actual bespoke visual assets. Held for v2 because it can't exist without generative tooling connected — a raster image or video generator (Midjourney, Higgsfield, Flora, GPT Image, Gemini/Imagen) that has to sit outside this library. Until it ships, `creative-direction` owns asset direction and hands you prompt packs. See [INSTALL.md](./INSTALL.md#3-recommended-connections-all-optional). |
| `design-critique` | Judging any artifact against the emotional target and the latitude — including whether a deviation is a legitimate **flex** or a drift. For now, run that judgement against `.agents/brand.md` yourself; `design-principles` carries the flex-vs-drift reasoning. |
| `email-design` · `social-design` | Folded into `collateral-design` for now, which already covers social posts, OG images, and email graphics as fixed formats. These split out only if the mediums earn their own depth. |
| `brand-naming` | Naming a brand or product is a separate discipline from designing one. |

See [VERSIONS.md](VERSIONS.md) for per-skill versions and [CHANGELOG.md](CHANGELOG.md) for release history.

## Related libraries

Sibling to Corey Haines' [makerskills](https://github.com/coreyhaines31/makerskills) and [marketingskills](https://github.com/coreyhaines31/marketingskills) — this library is modeled on their structure: a foundational context layer, then strategy, then medium-specific execution. If you have `marketingskills` installed, the design skills read `.agents/product-marketing.md` for audience, voice, positioning, and the competitor set rather than duplicating any of it.

## License

MIT — see [LICENSE](LICENSE).
