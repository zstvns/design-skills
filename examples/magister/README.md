# Worked example — Magister

**Magister** is an autonomous AI marketing agent: you describe the work in plain English, it executes across 100+ real tools, and nothing ships without your approval. It was run through every skill in this library — brand, strategy, creative direction, art direction, logo, web, motion, and collateral — and this folder is what came out the other end.

It's here so you can see what the skills produce before you spend an hour on your own brand. Everything is plain files: open the HTML in a browser, read the markdown.

## Start here

| Open | What you'll see |
|---|---|
| [`deliverables/homepage.html`](deliverables/homepage.html) | The brand applied: a full homepage in custom code |
| [`.agents/assets/imagery/tests/style-test.html`](.agents/assets/imagery/tests/style-test.html) | `art-direction` testing its own spec — every generated image with its verdict, including the rejects |
| [`../../skills/creative-direction/examples/magister-stylescapes.html`](../../skills/creative-direction/examples/magister-stylescapes.html) | The three concepts the client chose between |
| [`.agents/brand.md`](.agents/brand.md) | The keystone document every skill reads first |

## What's in the folder

```
examples/magister/
├── .agents/                       ← exactly what the skills write into your project
│   ├── brand.md                   brand          the distilled source of truth (+ Toolkit)
│   ├── brand-strategy.md          brand-strategy the strategy record (reconstructed — see below)
│   ├── design.md                  creative-direction, then the living record:
│   │                              logo · art direction · icons · motion · application notes
│   └── assets/
│       ├── logo/                  logo-design    locked files + INVARIANTS.md
│       ├── imagery/               art-direction  references board · style test · anchors ·
│       │                                         approved library · manifest · prompts · treat.sh
│       └── design-system/         creative-direction  the Claude Design kit (tokens + preview cards)
└── deliverables/                  the application skills' output
    ├── logo-identity.html         logo-design    the identity presentation
    ├── homepage.html              web-design
    ├── homepage-motion.html       motion-design  (on the previous homepage version — see Open items)
    └── collateral.html            collateral-design  one-pager · cards · social · thumbnails · deck
```

Serve the folder over HTTP for the collateral viewer and the style test (they load sibling files): `python3 -m http.server` from this directory, then open `http://localhost:8000/…`.

## How it was made — and what was reconstructed

The deliverables, the logo files, and the imagery are the real outputs of running the skills. Two things were written afterwards for this example, from what those outputs record:

- **`brand-strategy.md` has no verbatim session log.** Magister's strategy was set directly by its operator while the skills were being built, so the founder answers that file normally records were never captured. The synthesis is reconstructed from the artifacts, and the file says so rather than inventing quotes.
- **`brand.md` and `design.md` were written at the end** from the boards, the built homepage, and the collateral — the way `brand` would capture an existing brand. Where the build refined the board (the action colour moved from amber to green, for one), `design.md` records the change and the ruling under Application Notes.

The **art direction was run for real on 2026-10-29**, with the skill as written: references found on the web, a spec, a style test run twice (photography with GPT Image 2.5 and illustration with Arrow 2.0, both in Flora, plus SVG drawn by the agent), review verdicts, edits, and an approved library. It cost $1.27 in Flora. The test caught real problems — anchors dragging the 1960s into "present-day" photos, a trading-floor look, stock clichés, an operator marker that echoed the logo, an illustration that collapsed at spot size — and each one tightened the spec. That's the point of the step.

## Open items (honest)

These are recorded in `.agents/design.md` → Open items; an example that pretended to be finished would teach the wrong lesson.

- **Logo colour.** The presentation showed an amber pointer; the locked files are one colour. Locked files win until `logo-design` decides.
- **Logo Distinct = pending** until the competitor shelf is re-checked at full resolution and the vector gets a designer's construction pass.
- **The motion pass** was applied to the previous homepage version and needs porting to the current one.
- **One domain.** The deliverables mix magister.io, magister.com, and magistermarketing.com.
- **The competitor set** is as recorded during the run, not independently re-verified.
- **Claude Design.** The kit is built but hasn't been synced.

## Credits

Archive photography: NASA (public domain) and the Evergreen Aviation & Space Museum console (CC0), via Wikimedia Commons; references marked *reference only* on the board are shown for discussion and not used in deliverables. Type: Chakra Petch, IBM Plex Sans, JetBrains Mono (OFL). Icons: Material Symbols (Apache 2.0). Integration logos on the homepage: Simple Icons (CC0 files; the marks belong to their owners).
