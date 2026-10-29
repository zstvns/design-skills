# Prompts — Magister

The primer and every prompt as actually run (Flora, 2026-10-29). At Tier 1, paste the primer into a ChatGPT Project's instructions (or a Gemini Gem) once, attach 2–3 anchors from `anchors/` to each request, and send the one-line requests below.

## The primer

```
You generate images for Magister. Every image must match this art direction.

FEELING: command, precision, confidence — the operator runs the operation.

PHOTOGRAPHY: operations, not portraits — rooms, consoles, screens, hands on
controls; people only from behind or in silhouette, never looking at the camera ·
present-day equipment only, never a recreation of the 1960s · one warm light
source (screens or a lamp), deep blacks, nothing lit evenly · documentary still,
long lens from the back of the room or close macro · black-and-white with visible
grain (the brand grade is added afterwards) · leave the left third dark when the
image will carry a headline.

ILLUSTRATION: technical line diagrams, like a flight plan · cream #ECE4D6 lines at
1.5px per 400px of width on near-black #0F0C07 · exactly one active element in
amber #E8830C · planned paths dotted, completed paths solid · orthographic, flat,
no shading, no fills except small node dots · no people, no rockets.

NEVER: text, letters, numbers, logos, watermarks, readable screen content; stock-
market or trading charts; potted plants and tidy home offices; laptops on desks as
the subject; anyone smiling at the camera; HDR glow; teal-and-orange grading.

Attached images are the style to match — match their light, contrast, and grain,
not their subject, equipment, or era.
When I ask for an edit, change only what I name and keep everything else identical.
Default aspect ratio: 3:2 for photography, 1:1 for illustration.
```

## Requests, as run

| Id | Request | Model | Anchors | Result |
|---|---|---|---|---|
| `photo-hero-01` | Photography · small marketing ops room at night, two people from behind at a desk of monitors · homepage filmstrip 16:9, left third dark for the headline | GPT Image 2.5, 2K | Kranz, Apollo 15 | A1 → edit |
| `photo-hero-01` edit | Keep everything; only change what the monitors show: a content calendar, one rising campaign chart, drafts as grey blocks — no tickers, no candlesticks, no world map | GPT Image 2.5, 2K | A1 | B1 → approved (filmstrip) |
| `photo-key-02` | Photography · macro, a thumb pressing one backlit key on a dark control panel, light from under that key only · 3:2 | GPT Image 2.5 | Evergreen console, Kranz | A2 approved; B2 (repeat) approved |
| `photo-wall-03` | Photography · present day, a wall of modern monitors in a dark studio (calendar, one chart, a drafts queue), no people · 3:2 | GPT Image 2.5 | Apollo 15 | A3 (1960s) re-prompted → B3 → edit |
| `photo-wall-03` edit | Keep everything; only change: ceiling lights off so the screens are the only light, remove the potted plants | GPT Image 2.5 | B3 | C3 approved |
| `photo-desk-04` | Photography · present day, an empty desk at dawn with a compact control surface, raking window light · 3:2 | GPT Image 2.5 | Evergreen console | A4 (1960s) re-prompted → B4 rejected (stock home office) |
| `photo-late-05` | Photography · present day at night, a monitor whose campaign line climbs steeply, a chair back out of focus in the foreground · 3:2 | GPT Image 2.5 | Kranz | A5 (1960s) → B5 blocked by content filter → C5 approved |
| `ill-place` | Illustration · plan view of an operations room, four curved console rows, one amber | Arrow 2.0 | — | Sibling of run A |
| `ill-gate` | Illustration · dotted planned path → two-line approval gate (amber between) → two solid shipped curves | Arrow 2.0 | — | Sibling of run A |
| `ill-orbit` | Illustration · centre ring, three orbits of tiny dots, one amber line to one amber dot | Arrow 2.0 | — | Sibling of run A |

Total spend in Flora for the test: **$1.27** (workspace balance $26.52 → $25.26). The first batch failed because the provider couldn't fetch the Wikimedia URLs directly — uploading the anchors into Flora first fixed it — and neither that batch nor the content-filtered run was charged.
