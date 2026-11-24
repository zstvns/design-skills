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
7. If the change alters skill behavior, run the [baseline evals](#baseline-evals) and paste the results into the PR.

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

Bump the per-skill version on every substantive edit (PATCH for clarifications, MINOR for new capability). Bump the plugin version only when cutting a release, and keep both manifests in sync. When you cut a plugin version, also create a `v<version>` git tag and GitHub Release whose notes are that changelog entry — aggregators subscribe to releases, not to `main`. See the Releases section in `CLAUDE.md`.

## Baseline evals

Valid JSON is not a test of whether the skill helps. Before opening a PR that changes a skill's behavior, run a blind head-to-head of this change against the model with no skill and against the previous skill version.

A rule or reference that cannot beat the no-skill baseline gets cut or rewritten, not shipped. (In Google's published tests of [gemini-frontend-design](https://github.com/google-gemini/demolab/tree/main/skills/gemini-frontend-design), Gemini 4 often did better with no skill than with popular third-party design skills.)

### When this applies

Required for any change to a skill's `SKILL.md`, `references/`, or evals that alters behavior or adds a rule. Typos, changelog-only edits, and process or docs changes that don't alter skill behavior can mark the results section N/A.

### How to run it

1. Pick **3 or more evals** from that skill's `evals/evals.json`. Prefer the ones that exercise the change. If the skill has fewer than 3, run all of them. `python3 scripts/baseline-eval.py list <skill>` prints the ids and prompts; `python3 scripts/baseline-eval.py template <skill> [id ...]` prints the PR table pre-filled with those ids.
2. For each chosen eval, run the **same prompt** three times, independently:
   - **No skill** — the model with this skill (and its references) not loaded
   - **Previous** — the skill as it exists on `main`
   - **Candidate** — the skill as it exists on this branch
   If the eval has a `files` list, include those fixtures in all three runs. Don't coach the model beyond the prompt and the skill being tested. `python3 scripts/baseline-eval.py prompt <skill> [id ...]` prints the full prompt, expected output, and assertions for each run.
3. **Blind the outputs.** Give the judge unlabeled samples (A/B/C or equivalent), in random order, with no indication of which run is which. `python3 scripts/baseline-eval.py blind <run-dir>` shuffles `no-skill.md`, `previous.md`, and `candidate.md` in each eval subdirectory into `blind/A.md`, `B.md`, `C.md` and writes a `blind/KEY.md` you must not show the judge. Keep run artifacts out of git (`.baseline-eval/` is gitignored).
4. **Judge.** A human or a judge model, working only from the blinded outputs, picks a winner against the eval's `expected_output` and `assertions`, or calls a tie. The judge must not be told which output is the candidate.
5. **Record the results** in the PR description using the table below. Report wins, losses, and ties against each baseline, plus the win rate (wins ÷ evals run).

### The bar

- The candidate must **win more often than it loses** against the no-skill baseline. Ties are not wins. A new or rewritten rule that loses or ties on the evals that exercise it gets cut or rewritten before merge.
- Also report the head-to-head against the previous version so reviewers can see whether the change is an improvement, a regression, or a wash.

### PR description template

```markdown
## Baseline evals

Skill:
Evals run (id + why chosen):
Judge (human / model, and which model if any):

| Eval | vs no-skill | vs previous | Notes |
|------|-------------|-------------|-------|
| #    | win / lose / tie | win / lose / tie | |

Win rate vs no-skill: _ / _
Win rate vs previous: _ / _

A rule or reference that lost or tied against the no-skill baseline was cut or rewritten: yes / n/a
```

## Verify

No build step. Before opening a PR, confirm:

- Frontmatter is valid YAML and `name` matches the directory
- `description` is 1–1024 characters with trigger phrases
- Any `evals/evals.json` parses as valid JSON
- Skill behavior changes include baseline-eval results in the PR (see [Baseline evals](#baseline-evals))
- Both `.claude-plugin/*.json` files parse and agree on the version
- Every cross-referenced skill either exists in `skills/` or is annotated *(planned — not yet shipped)*
- Relative links resolve — no `](...)` pointing at a file that isn't there
