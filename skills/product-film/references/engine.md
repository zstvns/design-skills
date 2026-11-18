# The Engine — Remotion, Pure Functions of Time

Every film is a Remotion project. React components render each frame as a still; the renderer captures them and encodes video. The rules below exist because Remotion renders frames **independently, out of order, across parallel processes** — anything that isn't a function of the frame number paints a different picture each run.

**Licensing.** Remotion is free for individuals and small teams; a company license may be required above that size ([remotion.dev/license](https://www.remotion.dev/license)). Confirm with the brand owner before standardizing on it.

## The Workspace

- **Put the films beside the product** — a `videos/` package (its own workspace in a monorepo) so scenes import the product's real components, global CSS, and fonts instead of re-creating them.
- **Pin versions.** `remotion` and every `@remotion/*` package at one exact version; `react` at the app's version. Mismatched Remotion packages fail in confusing ways.
- **Styling follows the product.** If the product uses Tailwind, use Remotion's Tailwind integration and import the product's global CSS; don't let the video workspace resolve its own copy of the product's styling toolchain. Alias the app's path imports in the bundler override, kept in one file that both the config and any scripts use.
- **Fonts are the licensed brand faces**, loaded from local files (or `@remotion/fonts`) so every render waits for them. A fallback face in one frame is a bug.
- **One composition per film and per format.** Frame rate and duration come from props (`calculateMetadata`), so the same composition renders at 60 fps for review and at a higher rate for a motion-blurred master if the brief calls for one.
- **Keep generated output and licensed media out of version control** — `out/`, the music, licensed footage — with a note beside each saying where it came from and under what license.

## The Tokens File

One `tokens.ts` per product, every value **mirrored from `.agents/design.md`** with a comment naming its source — color hexes, type, radius, and the motion tokens. Never a new value.

```ts
// Mirrored from .agents/design.md → Design tokens / Motion System — as built (2026-11-18).
// Change the source, then this file. Never add a value here that isn't there.
export const color = {
  ground: '#0B0B0C',   // --color-bg
  ink: '#F2F1EE',      // --color-text
  action: '#3D5AFE',   // --color-action — protected: real CTAs only
} as const;

export const ease = {
  standard: [0.4, 0, 0.2, 1],     // --ease-standard
  out: [0.16, 1, 0.3, 1],         // --ease-out
  in: [0.5, 0, 0.75, 0],          // --ease-in
  overshoot: [0.34, 1.56, 0.64, 1], // --ease-overshoot
} as const;

export const durMs = { instant: 100, fast: 180, base: 280, slow: 500, xslow: 900 } as const; // --dur-*
```

The values above are `motion-design`'s defaults ([motion-floor.md](../../motion-design/references/motion-floor.md)); a brand's Motion System overrides them, and the file follows. Anything that animates color is a **hex token** — Remotion's color interpolation can't parse `color-mix()` or CSS variables.

## Scenes Are Pure Functions of Time

Read the frame once; derive everything from it and the cues.

```tsx
import {useCurrentFrame, useVideoConfig, interpolate, Easing} from 'remotion';
import {ease, durMs} from '../tokens';
import {cue} from './cues'; // bar/beat grid → frame

export const PromiseLine = ({text}: {text: string}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const start = cue(2, 1);                              // bar 2, beat 1 — never a literal frame
  const length = Math.round((durMs.slow / 1000) * fps); // duration from the scale
  const p = interpolate(frame, [start, start + length], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(...ease.out),
  });
  return <h2 style={{opacity: p, translate: `0 ${(1 - p) * 16}px`}}>{text}</h2>;
};
```

- **Banned in scene code:** CSS `transition` and `@keyframes`, `setTimeout` / `setInterval` / `requestAnimationFrame`, `Date.now()` / `performance.now()` / `Math.random()` without a fixed seed, and any state or ref that carries a value from one frame to the next. A `useLayoutEffect` that paints a canvas purely from the current frame is fine.
- **The cue sheet is data.** `cues.ts` holds the measured grid (tempo, first downbeat) and every cue as `bar · beat · fraction`; it converts to frames at the composition's fps. The beat sheet table is generated from it.
- **Each scene returns nothing outside its window** (or lives in a `<Sequence>`), and enters and leaves on cues.
- **Springs, if the brand's motion uses them,** are closed-form functions of time — evaluate the spring at `t`, don't integrate it frame by frame. Retargeting is a sum of one spring step per key, keys sorted by time.

## Frame-Driven Twins

Re-create a component, keeping its structure, classes, and tokens and changing only the clock, when it:

- **runs its own clock** — a spinner on an interval, a motion-library component, CSS keyframes, embedded video, a live shader;
- **loads images asynchronously** — avatar components that can be caught empty mid-load. Use Remotion's `<Img>`, which the renderer waits for.

Write at the top of each twin which component it mirrors and why. Keep the product's own loading pattern; a button keeps its width while it shows loading.

## Layers, Bottom to Top

1. The ground — one color, the token, edge to edge
2. The motif / texture, screen-space, behind everything with content on it
3. Product scenes (windows, screens, components)
4. The product's own cursor or automation overlay, if it has one
5. Words — lines and captions, always above every scene
6. The user's cursor
7. The end card (lockup, tagline, CTA) when it's on screen

The motif never sits above product UI or text. If texture runs behind words, thin it in a band behind the line — never add a panel the product doesn't have.

## Traps That Cost Real Time

- **Stills don't forward console logs.** Print measurements into the frame with a debug overlay (boxes and coordinates for every element a cursor or traveler lands on), and render debug stills to read them.
- **Re-bundling per still is slow.** Bundle once with `@remotion/bundler`, then render many frames with `@remotion/renderer` — a small script that takes a list of frame numbers.
- **Remotion's bundled ffmpeg is minimal.** Frame blending, frame selection, and contact-sheet tiling need a full ffmpeg build.
- **Dashed CSS borders crawl** while a box resizes. Draw dashes as SVG strokes at a fixed pitch.
- **`will-change` on a layer the camera scales blurs text.** Don't.
- **Individual transform properties** (`translate`, `scale`, `rotate`) compose more predictably than one long `transform` string across many keyed moves.
- **Color range and matrix on output** — the most expensive trap: see [render-and-verify.md](render-and-verify.md) → Color.
- **Stop only the processes you started.** Renders are long; other work may be using the machine.

Portions adapted from product-film-skill by Rieranthony (https://github.com/rieranthony/product-film-skill), MIT License.
