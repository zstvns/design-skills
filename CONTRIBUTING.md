# Contributing

## Adding or editing a skill

1. Create `skills/<skill-name>/SKILL.md` with valid frontmatter:
   ```yaml
   ---
   name: skill-name            # must match the directory exactly
   description: "What it does and when to use it — include trigger phrases."
   metadata:
     version: 1.0.0
   ---
   ```
2. Keep the **voice universal** — state the craft with authority, don't tie it to one agency's process. Process-specific workflows belong in a consuming repo.
3. Make principles **traceable to `design-principles`** rather than restating the whole philosophy.
4. Add `references/*.md` for deep dives (templates, specs, checklists) and `evals/evals.json` for test cases.
5. Cross-reference related skills by name — **but only skills that actually ship.** See below.
6. Bump `metadata.version` and update `VERSIONS.md`.

## Never route to an unshipped skill

A skill marked Planned in `VERSIONS.md` does not exist for the agent reading your file. Handing off to it is a dead end: the agent tries to route, finds nothing, and either stalls or improvises the work the missing skill was supposed to own.

Check `VERSIONS.md` before adding any cross-reference. If a planned skill is worth naming anyway, annotate it and say what to do in the meantime:

```markdown
- `design-critique` *(planned — not yet shipped)* — will judge later work against the
  latitude recorded here. Until it ships, run that judgement yourself against `.agents/brand.md`.
```

## The shared context documents

Skills read and write plain markdown under `.agents/` in the *user's* project. The full table — which skill owns which document — is in [CLAUDE.md](CLAUDE.md#the-shared-context-documents) and the [README](README.md#the-context-documents). Don't duplicate that context inside individual skills; read it.

Two rules:

- **A missing document is a routing signal**, not a reason to improvise. `web-design` and `collateral-design` gate on `.agents/design.md`; its absence means route back to `creative-direction`.
- **If you add a document or change ownership**, update the CLAUDE.md table, the README table, and the owning skill in the same commit.

## Versioning

Two independent numbers:

| What | Where | Tracked in |
|---|---|---|
| Per-skill | `metadata.version` in each SKILL.md | `VERSIONS.md` |
| Plugin | `.claude-plugin/plugin.json` + `.claude-plugin/marketplace.json` | `CHANGELOG.md` |

Bump the per-skill version on every substantive edit (PATCH for clarifications, MINOR for new capability). Bump the plugin version only when cutting a release, and keep both manifests in sync.

## Verify

No build step. Before opening a PR, confirm:

- Frontmatter is valid YAML and `name` matches the directory
- `description` is 1–1024 characters with trigger phrases
- Any `evals/evals.json` parses as valid JSON
- Both `.claude-plugin/*.json` files parse and agree on the version
- Every cross-referenced skill either exists in `skills/` or is annotated *(planned — not yet shipped)*
- Relative links resolve — no `](...)` pointing at a file that isn't there
