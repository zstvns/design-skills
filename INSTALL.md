# Install

`designskills` is a library of Agent Skills. **There are no required dependencies** — every skill runs as-is, out of the box, with nothing configured.

What follows is the optional layer. Design work gets substantially better when the agent can actually *generate and place visual assets* rather than describe them, and that capability comes from connections you add yourself.

## 1. Install the skills

### Claude Code (plugin)

```
/plugin marketplace add zstvns/design-skills
/plugin install designskills@designskills
```

### Any Agent Skills host (npx — recommended)

```bash
npx skills add zstvns/design-skills --all
```

Uses the [skills](https://github.com/vercel-labs/skills) CLI, which writes a `skills-lock.json` recording a content hash per skill so the install is reproducible.

**Where files land depends on which agents you target**, so it's worth knowing before you run it:

| Command | Result |
|---|---|
| `--all` | Every supported agent. `.agents/skills/` (the cross-agent standard) **plus** a duplicate `agent/skills/` tree (~800K) and `.claude/skills/` symlinks. |
| `-a claude-code` | `.claude/skills/` only — no `.agents/` directory created. |
| *(interactive)* | You pick the agents; the directories follow from that choice. |

If you want the cross-agent `.agents/skills/` layout specifically, use `--all` or include a universal agent in the interactive picker.

| Flag | Effect |
|---|---|
| *(none)* | Interactive — pick which skills and which agents |
| `--all` | All 8 skills, all detected agents, no prompts |
| `-s <names>` | Only named skills, space-separated: `-s brand logo-design` |
| `-g` | Install user-level instead of project-level |
| `--copy` | Copy files instead of symlinking |

Update later with `npx skills update`.

**Updates are safe to re-run.** These skills never write state inside their own folder — every artifact they produce lands in your project's `.agents/` directory (see [Where your data lives](#4-where-your-data-lives)). A re-sync that replaces the skill files can't destroy your brand context, strategy record, or logo assets.

### Any Agent Skills host (clone + symlink)

If you'd rather manage it yourself:

```bash
git clone https://github.com/zstvns/design-skills.git ~/code/design-skills
mkdir -p your-project/.agents/skills
for s in ~/code/design-skills/skills/*; do
  ln -s "$s" "your-project/.agents/skills/$(basename "$s")"
done
```

`.agents/skills/` is the cross-agent standard. For Claude Code without the plugin, use `.claude/skills/` instead.

### Symlink for local development

```bash
git clone https://github.com/zstvns/design-skills ~/code/design-skills
ln -s ~/code/design-skills ~/.claude/plugins/designskills
```

## 2. Verify

```bash
ls .agents/skills/            # npx install (project scope) — should list 8
ls ~/code/design-skills/skills/   # clone install — should list 8
```

If you installed globally with `-g`, check `npx skills list -g` instead — plain `npx skills list` only reads project scope. The CLI may print `missing required frontmatter field(s): name` for its own `agent/skills/` copies; that's a quirk of how it rewrites those files, not a problem with the skills.

Then, in your agent:

```
/brand yourbrand.com     # should crawl the site and start the audit
/design-principles       # should respond with the craft beliefs
```

## 3. Recommended connections (all optional)

Every skill degrades gracefully without these — it will tell you when a lower-fidelity path is being used rather than pretending the output is finished. But the gap between "describes an asset" and "produces an asset" is most of the value in design work.

| Connection | Which skills use it | What it unlocks |
|---|---|---|
| **Quiver API** (`QUIVER_API_KEY`) | `logo-design` | Text → real editable **SVG**. The best-fit path for logo work, because it produces actual vectors instead of raster approximations or hand-drawn paths. Without it, marks fall back to clearly-labeled low-fidelity sketches. |
| **Figma MCP** | `logo-design`, `creative-direction`, `web-design` | Read an existing brand's variables, tokens, type styles, and components during the audit; draw and assemble vectors on a real canvas a designer can take over. |
| **Adobe MCP** | `creative-direction`, `collateral-design`, `logo-design` | Firefly generation, image editing and adjustment, vectorizing, background removal, and real document/print export. |
| **Paper MCP** | `creative-direction`, `web-design`, `collateral-design` | A design canvas the agent can compose in directly — useful for stylescapes and fixed-format layout. |
| **Flora MCP** *or* **Higgsfield** | `creative-direction`, `collateral-design`, `web-design` | Generative imagery and video for muse-anchored boards, bespoke assets, and rich media on the page. Either is a good choice — pick one; you don't need both. |

**Rich media is the whole point of this layer.** Every skill that produces a visual surface needs real imagery to produce anything worth looking at — a stylescape without bespoke assets is a color swatch, a site without rich media is a wireframe, a social post without it is a text box. That applies to `creative-direction`, `collateral-design` (including social formats), `web-design`, and the planned `art-direction`, which is held for v2 precisely because it can't exist without this tooling underneath it.

The skills will tell you when they're working without it — but "clearly-labeled low-fidelity" is still low-fidelity. If you connect one thing from this table, connect a generator.

Set the Quiver key in your shell profile:

```bash
# In ~/.zshenv or ~/.bashrc
export QUIVER_API_KEY="..."
```

Read the key from the environment — never commit it. The skills look it up at run time and skip the path entirely when it's absent.

**On generative tooling generally:** the skills are deliberately tool-agnostic. They ask what you have access to and take the most capable available path rather than hardcoding a provider. If you have a raster or video generator (Midjourney, GPT Image, Gemini/Imagen, Higgsfield, Flora, Magnific), say so when asked and the agent will route asset generation through it — including tools with no MCP, where it will hand you prompt packs to run yourself and then work from what you bring back.

## 4. Where your data lives

This repo is **public and generic**. Your brand's actual context lives in the project you're working on, not here:

| Location | What |
|---|---|
| `<your-project>/.agents/*.md` | Brand context, strategy record, creative-direction spec — plain markdown, yours, versioned with your project |
| `<your-project>/.agents/assets/logo/` | The locked logo files `logo-design` emits |

Nothing is written outside your project directory. See the README's [Context Documents](./README.md#the-context-documents) table for what each file holds and which skill owns it.

## What's next

Run `/brand` with a URL and let it route you. Each skill's `SKILL.md` is also readable on its own — they're craft documents first and automation second, so you can execute any of them by hand.
