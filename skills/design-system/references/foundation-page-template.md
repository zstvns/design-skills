# Foundation Page Template

One page per foundation, in two places with the same words: the design file (with the mockups drawn) and `.agents/foundations/<foundation>.md` (with each mockup linked). The check script reads the markdown copy, so keep these headings exactly: `## Sections`, a `### ` heading per section with a `Mockup:` line, `## Edge cases`, and `## Instructions for agents` with `### Steps`, `### Self-checks`, and `### Do / don't`.

**Token rows hold values as they appear in the tokens file**, in the form `` | `--token` | `value` | role | ``. The check compares them, so a page can't silently go stale.

````markdown
# [Foundation] foundation

> **Status:** draft | approved by [owner] · [date]
> **Encodes:** `.agents/design.md` → [section] · **Tokens:** `[path/to/tokens.css]`
> **Design file:** [link to this page in the design file] · **Last synced:** [date] · [commit]

[One paragraph: what this foundation controls and the single idea behind it, in plain language. Link the decision in design.md. Don't restate the reasoning.]

## Tokens

| Token | Value | Role |
|---|---|---|
| `--radius-sm` | `6px` | Chips, inputs, small controls |
| `--radius-md` | `12px` | Buttons, cards |
| `--radius-lg` | `20px` | Panels, dialogs, media frames |

## Sections

### [Section 1, e.g. Scale]
The rule in one or two sentences, as a token or a role where possible.
- [Detail, threshold, or exception]

**Mockup:** [design-file frame link, or `mockups/radius.html#scale`] · Right: [what it shows]. Wrong: [what it shows].

### [Section 2, e.g. Nested corners]
Inner radius = max(0, outer − padding). A card at `--radius-lg` (20px) with `--space-2` (8px) padding gives its image 12px, which is `--radius-md`.

**Mockup:** [link] · Right: concentric corners. Wrong: the child repeats the parent's 20px and the gap pinches at the corner.

### Do's and don'ts
| Do | Don't |
|---|---|
| Use a radius token | Type `border-radius: 10px` |

**Mockup:** [link] · Each pair drawn side by side.

## Edge cases

| Case | What goes wrong | Fix |
|---|---|---|
| Padding ≥ outer radius | Inner radius goes to zero or negative | Inner is 0 (square); never negative |
| Bordered container | The border eats into the gap | Inner = outer − padding − border width |
| Flush image (no padding) | Image corners poke out | `overflow: hidden` on the parent; no radius on the child |

## Instructions for agents

### Steps
1. Read this page and the tokens file before touching [foundation] in any component.
2. [The order to apply the rule in, as concrete actions.]
3. Run `npm run check:design` (or `python3 scripts/check-foundations.py`) and fix every failure before saying you're done.

### Self-checks
- [ ] [A yes/no question about the result] *(checked by script: nested)*
- [ ] [A judgment check the script can't make] *(manual)*

### Do / don't
- **Do** [the rule as an action].
- **Don't** [the specific failure agents make, as an action].
- **If a case isn't covered here, stop and ask.** Don't invent a value. The rule gets fixed on this page first, then the code.
````

## Rules for filling it in

- **Every section gets a mockup.** No mockup, no section. Fold it into another section or cut it.
- **Mockups render from the real tokens.** In code, they import the tokens file. In the design file, they're regenerated from it on every sync. A hand-typed hex in a mockup is drift waiting to happen.
- **Show the wrong version beside the right one.** Agents learn the boundary from the failure, not from the success alone.
- **Edge cases are the page.** If a section has no edge cases, you haven't pushed it hard enough: long strings, tiny and huge viewports, dark mode, 200% zoom, missing images, RTL, nested instances.
- **Self-checks are questions with a yes/no answer**, and each one says whether the script checks it or a person does.
- **Plain words.** The reader is an agent mid-task. Use short imperative sentences and no theory. The theory lives in `design-principles` and `.agents/design.md`.

## The Index Page

`.agents/foundations/README.md` lists every foundation page with its status, the tokens file path, the design-file link, the check command, and the last sync date. Agents read it first. The check skips `README.md` when it validates page structure.
