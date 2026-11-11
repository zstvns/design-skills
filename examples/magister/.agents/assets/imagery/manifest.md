# Imagery manifest — Magister

Every file in `approved/` and `anchors/`, with where it came from, what it may be used for, and its alt text. Nothing enters `approved/` without a line here. Spec: `.agents/design.md` → Art Direction.

Generated images: GPT Image 2.5 and Arrow 2.0, run in Flora (project "Magister — art direction"), 2026-10-29. Prompts in `prompts.md`. Commercial use per Flora's and the model providers' terms; no real person's likeness, no third-party marks.

## Approved — photography (treated with `treat.sh`)

| File | Source | Prompt | Rights | Alt text | Use |
|---|---|---|---|---|---|
| `photography/filmstrip.jpg` | Generated → edited (A1 → B1) | `photo-hero-01` + edit | Generated | Two people seen from behind at a long desk of monitors in a dark room at night, screens showing a content calendar and a rising chart | Homepage filmstrip; dark left third carries type |
| `photography/keycap-press.jpg` | Generated (A2) | `photo-key-02` | Generated | A thumb pressing one lit key on a dark control panel | Feature sections, social, deck dividers |
| `photography/keycap-press-alt.jpg` | Generated (B2, repeat run) | `photo-key-02` | Generated | A thumb pressing a lit key among rows of square keys | Alternate of the above |
| `photography/monitor-wall.jpg` | Generated → edited (B3 → C3) | `photo-wall-03` + edit | Generated | A wall of monitors in a dark studio showing a content calendar, a rising chart and a queue of drafts | Product-story sections, one-pager |
| `photography/late-dashboard.jpg` | Generated (C5) | `photo-late-05` | Generated | A single monitor glowing in a dark room at night, its chart climbing steeply, an empty chair in the foreground | "While you were away" social and email |
| `photography/archive-kranz-console.jpg` | NASA, Wikimedia Commons ("Eugene F. Kranz at his console…") | — | Public domain (NASA). Real person — use only as history, never as a Magister user or endorser | Flight director Gene Kranz at his console in Mission Control, Apollo era | Thumbnails, story/blog headers about the muse |
| `photography/archive-apollo15-mcc.jpg` | NASA S71-43429, Wikimedia Commons | — | Public domain (NASA). **Shows NASA insignia** — never where it could imply NASA endorsement | Mission Control at the conclusion of Apollo 15, controllers at their consoles | Same as above |

## Approved — illustration (`approved/illustration/*.svg`)

All drawn in SVG by the agent from the illustration spec (style test run A, passing tiles). Rights: original work. Labels are live text (JetBrains Mono).

| File | Alt text | Use |
|---|---|---|
| `agent-trajectory.svg` | A path from brief to draft to review to shipped, with review active | How it works |
| `approval-gate.svg` | Planned work passing through an approval gate and becoming shipped work | "Nothing ships without approval" |
| `operator-approves.svg` | Three work streams converging on the operator, who approves before it ships | Product overview |
| `integrations-orbit.svg` | An agent at the centre of three orbits of many integration nodes, one active | Integrations |
| `room-plan.svg` | Plan view of an operations room, one row of consoles active | About / story |
| `keycap-elevation.svg` | Front elevation of a console keycap with dimension lines | Brand / craft pages |
| `campaign-week.svg` | A campaign week drawn as a flight plan, with launch windows and one active burn | Hero, decks |
| `spot-trajectory.svg` | A small trajectory with its active point | Feature cards (spot rule) |

## Approved — icons and texture

- `icons/README.md` — Material Symbols Sharp (Apache 2.0), loaded from Google Fonts; the canonical glyph per idea.
- `texture/textures.css` — the grid, scanlines, rings, trajectory, brackets, sweep. Original code.

## Anchors (`anchors/`, untreated — attached to every generation)

| File | Source | Rights |
|---|---|---|
| `nasa-kranz-console.jpg` | NASA, Wikimedia Commons | Public domain |
| `nasa-apollo15-mcc.jpg` | NASA S71-43429, Wikimedia Commons | Public domain (shows NASA insignia) |
| `console-evergreen-cc0.jpg` | Evergreen Aviation & Space Museum, Wikimedia Commons | CC0 |
| `gen-ops-room-night.jpg` | Generated (B1), untreated | Generated |
| `gen-keycap-press.jpg` | Generated (A2), untreated | Generated |

## Test record (`tests/`) — not for use

`tests/photos/*.jpg` are every photography generation, including rejects, kept small for the record. `tests/arrow-*.svg` are the Arrow 2.0 illustration run. See `tests/style-test.html` for the verdict on each.
