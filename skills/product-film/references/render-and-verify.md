# Review, Render, Verify, Deliver

Stills are cheap; renders are not. Look at frames early and often, render the full film only when the stills are right, and never call a film done until every deliverable has been decoded and measured.

## Review — Stills at Every Handoff, Then a Draft

1. **Stills at the moments that matter.** Bundle once, render a list of frames: each scene's first settled frame, every handoff (a traveler landing, a cut), every line fully built, the strong moment, the end card resolved. Render debug stills too (boxes and coordinates printed into the frame) to confirm every handoff lands exactly where it should.
2. **Look at full resolution** for anything with small type. Stack several frames into one sheet to compare them side by side.
3. **A half-resolution draft** of the whole film, plus a **contact sheet** (a frame every half second, tiled) to read pacing at a glance, and a **handoff sheet** (a run of consecutive frames around each transition) to catch jumps.
4. **Run the checklist every round:**
   - **Ground:** one color, the token. No invented shades, borders, or cards.
   - **Text:** above everything, readable at the delivered size, never covered, never crossing other text, never re-centering as it builds.
   - **Pace:** something moves on every beat; no dead bar; nothing too fast to read.
   - **Motion:** curves and durations from the tokens; no uniform "everything enters the same way."
   - **Motif:** one, behind content, steady grain.
   - **Logo:** the pose sheet matches the real mark at every pose; resolved state held ≥ 1.5s.
   - **Truth:** real UI only; stand-ins labeled.
5. **Show the brand owner frames as each round becomes coherent.** Notes come back fast and specific ("same background," "it's slow here"). Fold every note into the brief so the next film starts from it.

## Versions — Never Overwrite

Every render goes to its own folder: `out/<film>/v1/`, `v2/`, … Each holds that version's deliverables, its poster, and its verification report, plus one line on what changed since the last version. A rejected cut is still evidence — the brand owner may want it back.

## Render

- **The master** at full resolution, high quality, from Remotion: PNG frames, a high-fidelity pixel format (`yuv444p`), low CRF, muted. Where the installed Remotion version supports it, set the output color space to BT.709 (`--color-space bt709`). If the brief calls for motion blur, render the master at a multiple of the delivery frame rate and blend sub-frames down with a full ffmpeg build.
- **Audio** rendered once, separately, and muxed into the with-sound deliverables.
- **The delivery encodes** from the master, with the color conversion done **once and explicitly** (below):

| Deliverable | Encode |
|---|---|
| Landing hero loop | H.264 MP4, muted, `yuv420p`, BT.709-tagged, `+faststart` · VP9 or AV1 WebM, muted · poster image |
| Launch film | H.264 MP4 with AAC audio, BT.709-tagged · plus a muted cut if it will also autoplay anywhere |
| Social cuts | One encode per format (16:9, 9:16, 1:1, 4:5), with sound, at the platform's recommended size |
| Text-heavy cuts | 4:4:4 where the destination plays it (download, presentation, ProRes 4444) — otherwise the 4:2:0 chroma test below |

## Color — the Trap and the Checks

**The trap.** A Remotion master can come out **limited range, BT.601, and untagged**. If a later step blends or converts it as though it were full range — or a player decodes it with the wrong matrix — near-black lifts: `#0a0a0a` comes back as roughly `#171717`. On a dark page that's a **gray box** around the video. The tokens are right; the conversion is wrong. **Fix the conversion, never the tokens.**

Probe the master, then convert explicitly and tag the result:

```bash
ffprobe -v error -select_streams v:0 \
  -show_entries stream=pix_fmt,color_range,color_space,color_primaries,color_transfer \
  -of default=nw=1 out/hero/v3/master.mov

# Master reported BT.601 or untagged → convert the matrix once, keep limited range, tag BT.709
ffmpeg -v error -i out/hero/v3/master.mov -an \
  -vf "scale=in_range=tv:out_range=tv:in_color_matrix=bt601:out_color_matrix=bt709,format=yuv420p" \
  -c:v libx264 -crf 20 -preset slow -movflags +faststart \
  -colorspace bt709 -color_primaries bt709 -color_trc bt709 -color_range tv \
  out/hero/v3/hero-v3.mp4
```

If the master is already BT.709, drop the matrix conversion and keep the tags.

**The checks — on every deliverable, decoded the way a browser decodes it (BT.709, limited range → sRGB):**

- **Tags:** matrix, primaries, and transfer read `bt709`; range is `tv` unless a full-range file was intended and tagged so.
- **Duration:** matches the plan — a whole number of bars — within a frame.
- **Brand colors:** sample the ground, the ink, the accent, and the action color at known points in known frames; **ΔE (CIEDE2000) ≤ 2** against each token hex.
- **Near-black ground:** also per-channel within ± 2 code values of the token. A `#0B0B0C` ground decoded with the range read wrong comes back near `#19191A` — ΔE well over 2, and a visible box.
- **Banding:** view gradients, vignettes, and soft shadows with contrast pushed. If they step, lower CRF on the encode, keep the master at 10-bit, or add a fixed dither (the same sub-visible pattern every frame, ± 1 code value) — never a texture the system doesn't have, and never per-frame noise.
- **Chroma on thin colored type:** crop thin colored type at 100% and 200% from the 4:2:0 encode and compare with the master. If it fringes: ship 4:4:4 where the destination plays it; for web and social (which play or re-encode to 4:2:0), deliver at 2× the display size so chroma resolves at 1×, or take the type to the next step in the type scale.
- **On the page:** place the hero loop over the real page ground in a browser and look at the edge. No box, no seam.

**The loop seam:** decode the last frame and the first; they must be equal within encoder noise (a small fraction of pixels off by a few values). Then watch the seam play — the last second and the first second, twice — at full size.

A small check script, run per deliverable:

```python
# verify.py — python3 verify.py out/hero/v3/hero-v3.mp4 0B0B0C 960,40
import json, subprocess, sys
import numpy as np
from skimage.color import rgb2lab, deltaE_ciede2000

path, ground_hex, probe_xy = sys.argv[1], sys.argv[2], sys.argv[3]
info = json.loads(subprocess.run(
    ["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries",
     "stream=width,height,color_space,color_primaries,color_transfer,color_range:format=duration",
     "-of", "json", path], capture_output=True, text=True, check=True).stdout)
s = info["streams"][0]
w, h = s["width"], s["height"]

def decode(tail: bool) -> np.ndarray:
    seek = ["-sseof", "-0.5"] if tail else []
    limit = [] if tail else ["-frames:v", "1"]
    vf = "scale=in_color_matrix=bt709:in_range=tv:out_range=pc,format=rgb24"
    raw = subprocess.run(["ffmpeg", "-v", "error", *seek, "-i", path, *limit, "-vf", vf,
                          "-f", "rawvideo", "-"], capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.uint8).reshape(-1, h, w, 3)[-1]

def delta_e(rgb, hex_code):
    a = rgb2lab(np.array(rgb, float).reshape(1, 1, 3) / 255)
    b = rgb2lab(np.array([int(hex_code[i:i + 2], 16) for i in (0, 2, 4)], float).reshape(1, 1, 3) / 255)
    return float(deltaE_ciede2000(a, b)[0, 0])

first, last = decode(False), decode(True)
x, y = map(int, probe_xy.split(","))
target = [int(ground_hex[i:i + 2], 16) for i in (0, 2, 4)]
diff = np.abs(first.astype(int) - last.astype(int))
print("tags      ", s.get("color_space"), s.get("color_primaries"), s.get("color_transfer"), s.get("color_range"))
print("duration  ", info["format"]["duration"])
print("ground    ", first[y, x], "ΔE", round(delta_e(first[y, x], ground_hex), 2),
      "max channel off", int(np.abs(first[y, x].astype(int) - target).max()))
print("loop seam  max", int(diff.max()), "pixels >4:", f"{(diff.max(axis=2) > 4).mean():.4%}")
```

Report the numbers, not "looks fine."

## Hero Loops

- **Muted, and the story reads muted.**
- **Seamless:** last frame equals the first, verified above.
- **The poster is frame 0**, rendered as a still from the composition — so frame 0 is designed as an on-brand, composed state worth being the poster, and the swap from poster to playback doesn't jump.
- **Reduced motion shows the poster.** Don't autoplay from markup; start playback only when motion is allowed:

```html
<video data-hero muted loop playsinline preload="metadata"
       poster="/film/hero-v3-poster.jpg" width="1920" height="1080" aria-hidden="true">
  <source src="/film/hero-v3.webm" type="video/webm">
  <source src="/film/hero-v3.mp4" type="video/mp4">
</video>
<script>
  const hero = document.querySelector('video[data-hero]');
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) hero.play();
</script>
```

- **A pause control** on any loop longer than five seconds, and a still-image fallback where video can't play — `web-design` owns the placement; hand over the files, the poster, and these behaviors.
- **Budget, agreed with the brand owner before the build** — defaults if none is set: **6–30s long, ≤ 4 MB for the 1080p MP4** (the WebM usually smaller), **poster ≤ 150 KB**, encoded at the size it's actually displayed. Over budget: shorten, simplify the motion behind the content, or lower the resolution to the displayed size — never crush the CRF until the ground bands.

## Deliver

- **Send the files** with two lines on what changed since the last version, the durations and file sizes, and the verification numbers.
- **Final sign-off:** the brand lead reviews the end card, the color report, and the film-slop list ([brand-in-motion.md](brand-in-motion.md)); then the brand owner approves.
- **Nothing is posted, published, or committed without the brand owner.**

Portions adapted from product-film-skill by Rieranthony (https://github.com/rieranthony/product-film-skill), MIT License.
