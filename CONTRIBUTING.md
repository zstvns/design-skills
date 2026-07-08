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
5. Cross-reference related skills by name.
6. Bump `metadata.version` and update `VERSIONS.md`.

## The shared context document

Skills read brand context from `.agents/brand.md` (produced by the `brand` skill) and may link to `.agents/product-marketing.md` if present. Don't duplicate that context inside individual skills — read it.

## Verify

No build step. Before opening a PR, confirm:
- Frontmatter is valid YAML and `name` matches the directory
- `description` is 1–1024 characters with trigger phrases
- Any `evals/evals.json` parses as valid JSON
