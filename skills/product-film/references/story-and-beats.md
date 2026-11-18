# Story and Beats — Discovery, Interview, the Beat Sheet

The film is judged against the product's own look and the brand's own words. Learn both before drawing a frame, then plan the film as a message on a grid.

## Discovery

Read-only, and only until you can name the real options. Write what you find, with the source of each fact, into the film's brief (`videos/<film>/brief.md` in the user's project) so later decisions trace back to it.

| Look at | Pull out |
|---|---|
| `.agents/brand.md` | Emotional target, voice rules (casing, banned words, reading level), approved lines, claims limits |
| `.agents/design.md` | Color roles and the **protected action color**, type, the motif and its one treatment, the Art Direction range, the **Motion System — as built** (easing and duration tokens), any **logo motion** already recorded |
| `.agents/assets/logo/` | The locked files and which variant goes on which ground; clear space and minimum size from the Logo section |
| The codebase | Global CSS / theme tokens, the components worth showing (and whether each runs its own clock — motion libraries, `requestAnimationFrame`, intervals, CSS keyframes, async images, shaders), the UI's own loading and empty states |
| The landing page, rendered | Layout, the hero, how CTAs look, the demo data it already shows, any animated demo — write notes as you go; screenshots don't persist |
| The product's real screens | For each candidate feature: the screen, its copy, the states it moves through |
| `.agents/assets/imagery/` | Approved imagery and footage with their rights in `manifest.md` |
| Past video work | What to keep, what was dropped, music and SFX licenses |

Ask only for what the code and the docs can't answer.

## Interview

Two short rounds, options named from discovery, a recommendation first.

**Round 1 — the brief**

| Ask | Typical options |
|---|---|
| Where does it play? | Landing page, muted loop · launch video, with sound · social cut, with sound |
| How long? | 10–20s · 20–30s · 30–45s · 45–60s |
| Format | 16:9 · 9:16 · 1:1 · 4:5 (social usually needs more than one) |
| Sound | The brand's licensed track or stems · a royalty-free track with its license · silent |
| Which features must appear? | The three or four strongest, by their product names |

**Round 2 — the ingredients**

| Ask | Typical options |
|---|---|
| What carries the brand? | End-card logo reveal · wordmark and tagline · product UI only |
| How do words appear? | Short lines between scenes · one caption band over scenes · no words, the UI speaks |
| How do scenes connect? | One element travels into the next scene · one canvas with camera moves · clean cuts on the beat |
| What else? | Cursor interactions · partner logos · proof moments (real results) · the brand motif |

A third round only if needed: the ending (tagline, CTA, URL), claims limits, dark or light. **Don't ask** what tokens already answer (colors, fonts, radius), and **don't ask** taste you can show — that's what the style frames are for.

## The Shape

A shape that works for 30–60s; each part is optional unless the brief needs it. Hero loops compress it to two or three ideas and fold back to the start.

1. **Opening (1–2 bars).** Something moves in the first second — the hero screen already working, or the motif in motion. Cut slow intros.
2. **What it is (1 bar).** The one-line promise, from the approved lines.
3. **Features (3–5).** Each one idea, 2–4 bars of the product's real UI doing the thing.
4. **The strong moment, on the drop.** The result appearing, the before and after.
5. **Proof (optional).** A real outcome the viewer recognizes — a result, an answer, a number from the product's own demo data. Never an invented metric or testimonial.
6. **End card.** The tagline (beside the lockup, never inside it), the CTA or URL if chosen, and the film's **one logo reveal**, resolving to the locked file and holding.
7. **Loop (if it loops).** Fold back to the first frame's exact state. A landing loop usually skips the end-card reveal — the page's header already carries the mark.

## Words

- **Written before motion**, from the approved lines and the voice rules. If they don't exist, route to `copywriting`.
- **Short.** Between-scene lines at most ~6 words, two lines at most. Captions: one short line. Inside scenes, only the UI's own text.
- **No promise the product can't keep.** Partner names come with their real logos.
- **Every line holds its final slot from the start** — lay the full line out invisibly and reveal words in place, so the line never re-centers as it builds.

## The Grid — Beats From the Audio

Measure the track before planning anything on it: tempo, the first downbeat, and where the sections change (intro, groove, drop, breakdown, outro). Read section changes from loudness per bar, per stem if stems exist; a kick on every beat can't tell you where bar one is. Check the measured grid against the audio by ear once.

- **Plan in bars and beats.** At 120 BPM a beat is 0.5s and a bar (4/4) 2s. Every cue is `bar · beat · fraction` on the grid; scene code never holds a literal frame number.
- **Scenes cut on bars.** A scene boundary that misses the bar reads as a stumble.
- **Something moves on every beat** — a click, a word, a counter tick, a state change. If a bar idles, give it beat-synced life or cut the bar.
- **Edit the music on bars.** Shorten by removing whole bars so the grid runs straight through every join, with a few-millisecond fade at each cut. Film length is a whole number of bars.
- **Map the story onto the song.** The promise where the drums enter, the busy feature scenes on the full groove, the strong moment on the drop, the end card where the track resolves.
- **Silent film or muted loop:** pick a tempo anyway (around 120 BPM) and plan on it. The rhythm still holds the film together.
- **Sound effects:** short, dry, quiet (well under the music), one per meaningful event — a click, the drop, the proof — never one per animation. Place each so its transient, not its file start, lands on the cue.
- **Music and SFX licenses** are recorded next to the files. Unlicensed audio doesn't ship.

## The Beat Sheet — Message First

The beat sheet is the document the brand owner reads and approves. Lead each row with **what the viewer should know**, then the words, then the picture. Generate it from the cue data so it never drifts from the build.

| Bar | Time | The viewer learns | On screen (words) | Picture (real UI / asset) | Motion (token) | Sound |
|---|---|---|---|---|---|---|
| 1 | 0:00 | This is where work starts | — | Inbox, already filling | rows stagger in · `--ease-out` · `--dur-base` | intro hit |
| 2 | 0:02 | The promise | "Every request, routed." | — | words reveal in place · `--ease-out` | drums enter |
| … | | | | | | |
| 15 | 0:28 | Who made it | Tagline beside lockup | `logo-lockup-inverse.svg` | recorded logo reveal, hold ≥ 1.5s | ring-out |

Under the table: the assumptions (e.g. "Motion System not yet recorded — using motion-design defaults"), every stand-in asset and its label, and the claims each line relies on.

## Style Frames

Three stills rendered from the real project, not mocked elsewhere: **the opening, one feature scene, and the strongest moment or the end card.** If the logo animates, add a pose sheet of the reveal (start, two midpoints, resolved) so its every frame can be checked against the real mark.

The **brand lead** reviews all three first and gives a verdict per frame — on-brand, or what pulls it off-brand (a shade the product doesn't use, a second motif, the action color on decoration, type under the floor). Only frames that pass go to the **brand owner**. People answer pictures faster than questions; expect notes on pace, words, shades, and borders, and fold every one into the brief.

## Scenes and Transitions

- **Show, don't tell.** The UI's own text only. Real components where they're pure; frame-driven twins where they run a clock. Demo data from the landing page, so the film and the site agree.
- **Readable at the delivered size.** Check body text and labels on a frame at 100% of the delivered resolution, not in a scaled-down preview.
- **Transitions:** one element that exists in both scenes travels into the next (position, size, color) while the rest swaps out; or one canvas with camera moves; or hard cuts on the beat with matched ground and accent. Text never flies across other text — move images and marks; take words out and back in.
- **Cursors:** the OS arrow, arriving exactly on the cue on a slight arc; a click is a short press, then the target reacts. Never rest a cursor over text being typed or read.
- **App surfaces:** the product's own window, device frame, or browser chrome — no extra labels, no invented panels.

Portions adapted from product-film-skill by Rieranthony (https://github.com/rieranthony/product-film-skill), MIT License.
