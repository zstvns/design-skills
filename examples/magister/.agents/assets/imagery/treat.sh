#!/usr/bin/env bash
# Magister photo treatment — the one grade every image runs through, whatever its source
# (NASA archive, generated, or stock). Spec: .agents/design.md → Art Direction → Treatment recipe.
#   grayscale → amber tone map (ground #0F0C07 → amber #B8660A in the mids → warm bone #F7E3C4) → CRT scanlines (1px in 3 at 22%) → fine grain
# Usage: ./treat.sh in.jpg out.jpg [width]     (needs ImageMagick 7)
set -euo pipefail
in="$1"; out="$2"; w="${3:-1600}"
tmp="$(mktemp -d)"; trap 'rm -rf "$tmp"' EXIT

magick -size 1x3 xc:white -fill 'gray(78%)' -draw 'point 0,0' "$tmp/scan.png"
magick xc:'#0F0C07' xc:'#B8660A' xc:'#F7E3C4' +append -filter Cubic -resize '256x1!' "$tmp/clut.png"
magick "$in" -resize "${w}x>" -colorspace gray -brightness-contrast -4x8 -colorspace sRGB \
  "$tmp/clut.png" -clut "$tmp/duo.png"
magick "$tmp/duo.png" \( -size "$(magick identify -format '%wx%h' "$tmp/duo.png")" tile:"$tmp/scan.png" \) \
  -compose multiply -composite -attenuate 0.18 +noise Gaussian -quality 84 "$out"
