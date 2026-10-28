# Publishing the System to Claude Design

Claude Design is the visual canvas inside Claude — designs, decks, one-pagers, and prototypes on an artboard, exportable as PDF, PPTX, Google Slides, standalone HTML, or a handoff bundle for Claude Code, and sendable on to tools like Canva and Adobe. It can hold a **design system**: once one is published, new projects inherit its colors, type, and components.

That makes it the best way to put the brand in the hands of people who will never open a terminal. The founder, the marketer, the salesperson making a one-pager — they work in Claude Design, and the system keeps them on-brand without anyone re-explaining it.

> Standalone claude.ai/design closes on December 14, 2026; Claude Design now lives inside Claude. Refer to it that way, not by the old URL.

## When to Publish

- **After the direction is approved** — never during the three-stylescape stage; a design system for a concept that loses is noise in their workspace.
- **Again when the living record grows** — `logo-design` locks the mark, `art-direction` approves the anchor set, `web-design` ships components. Re-sync then; the sync is incremental.
- **Only if the operator uses it.** Check the Toolkit's design-canvas field in `.agents/brand.md`. If it's blank, offer once — it's included with Claude plans, so most operators have it whether they know it or not — and record the answer.

## What Goes In

`/design-sync` reads design tokens and components from local code. Give it a real source:

- **If a site repo exists** (a `web-design` build, or the client's own codebase with tokens and components), that *is* the source — sync from it. Real components beat recreations.
- **If there's no code yet**, build a small kit in **`.agents/assets/design-system/`**, generated from `.agents/design.md`:

| File | What it holds |
|---|---|
| `tokens.css` | The `:root` token set from `.agents/design.md` — color roles and ramps (action color included, and named as protected), type scale, spacing, radii. **Every preview imports it.** |
| `fonts/` | The brand faces as webfonts — **only if the license permits uploading them to a third-party service.** Otherwise name the face and its fallback, and tell the operator. |
| `logo/` | Copies of the locked files from `.agents/assets/logo/` — lockup, icon, inverse, mono. Never redrawn. |
| `imagery/` | The `art-direction` anchors and approved assets whose rights in `manifest.md` allow it. |
| `previews/*.html` | One card per piece of the system, each importing `tokens.css`: type specimen, color roles (with action-color rules stated), buttons, a card, two or three section types, the motif and textures, a deck title and content slide, a one-pager frame, a social post. |

Keep the previews **honest to the spec**: the same restraint, rhythm, and action-color discipline the application skills enforce. Claude Design will build from these — a sloppy card becomes a hundred sloppy pieces.

## How

1. **Build the source** (the repo, or the kit above).
2. **Have the operator run `/design-sync`** in Claude Code. It's theirs to start — it asks for access to their Claude Design account the first time — then it proposes a plan of exactly which files it will write. **Read the plan with them before approving.**
3. **Check the sync's validation output, not just the preview cards.** Cards can render correctly while the tokens didn't ship; missing-token or missing-CSS warnings mean new projects won't actually inherit the system.
4. **Confirm in Claude Design** — start a new project and check it picked up the type, color, and logo.
5. **Record it** in `.agents/design.md` → Application Notes: the design-system project name, what was synced, the date.

## The Rule That Keeps It Sane

**`.agents/` stays the source of truth; Claude Design is a published copy.** The *why* behind every choice lives in `.agents/design.md`, and only there. If someone changes the system inside Claude Design, pull the change back, update `.agents/design.md` (and `.agents/brand.md` if it touches the Fixed core), then re-sync — never let the two drift silently.
