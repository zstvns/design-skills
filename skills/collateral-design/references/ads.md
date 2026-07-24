# Ads (Paid Social & Display)

An ad has the least time of any collateral format — roughly **one second** in a feed, less at a glance in a sidebar. It competes with everything else on the screen and it's usually seen small. That single constraint drives every rule here: the message has to land, at thumbnail size, in the time it takes to scroll past.

This skill designs the *visual system application*. The **copy variants at scale** are `ad-creative`'s job; a **video/motion ad** is `motion-design`'s. Here: the static creative.

## The Squint / Scroll-Stop Test

Before anything else, this is the acceptance test the whole format is built around:

- **Shrink it to thumbnail and squint.** Does **one** message survive? If you can't read the point at feed size in a second, nothing else you did matters.
- **One message, one focal point.** An ad is not a one-pager. It makes a single claim or offer and drives a single action. Two competing messages halve both.
- **Legible small.** Type must be large and high-contrast enough to read at the size it's actually served — not at the size you're designing it. Fine print, thin weights, and low-contrast text disappear.

## Design to the Platform's Size and Safe Zones

Each placement is a **fixed frame with rules**. Design to the real spec, not one size stretched to fit:

- **Feed (Meta / LinkedIn):** square **1:1 (1080×1080)** or portrait **4:5 (1080×1350)** — portrait takes more feed real estate. Keep the focal content centered/safe; platform UI and truncation nibble edges.
- **Stories / Reels / vertical:** **9:16 (1080×1920)** with **UI-safe margins** — the top and bottom ~250 px are covered by profile info, captions, and the CTA button. Keep your message and mark out of those zones.
- **Display banners (IAB standard):** **300×250** (medium rectangle), **728×90** (leaderboard), **160×600** (wide skyscraper), **320×50** (mobile). These are tiny — one line, the mark, one button. Design each size on its own; a 300×250 is not a shrunk 728×90.

Export **each placement at its native size**, cropped and re-composed per aspect ratio — don't letterbox one master across all of them.

## Text Discipline

- **A few decisive words, not a paragraph.** The visual + a short hook does the work; the platform's caption/headline field carries the rest. A text-crammed ad reads as noise and underperforms (the old Meta "20% text" rule is gone, but the *reason* behind it isn't — heavy text still tanks performance).
- **Hierarchy of one.** One line leads. If a supporting line exists, it's clearly secondary. No wall of equal-weight copy.

## One CTA, Mark Present but Not Shouting

- **A single call to action**, in the reserved forward/accent color, shaped to read as *the* action (a pill/button form). One ad, one thing to do.
- **The brand mark is present** — small, corner or sign-off — so the ad is attributable, but it doesn't dominate; the message and offer lead. (Cover-the-logo still applies: is it recognizably this brand from the system, not just the logo slapped on?)

## Variations at Scale — Coherent, Not Cloned

Paid runs on volume: many creatives testing many angles. Your job is the **system that holds the set together** while the specifics vary.

- **`ad-creative` supplies the copy variants;** you supply a visual system flexible enough to carry them and coherent enough that the whole set reads as one brand.
- **Vary the angle, hold the system.** Different hook, different focal image, same color roles / type / mark / motif logic. A test set that looks like ten unrelated templates dilutes the brand; a set that's the same layout with the headline swapped is lazy — find the middle: recognizably one system, meaningfully different creative.
- **Motion ad → `motion-design`.** A video or animated ad is a different medium with its own craft; route it there rather than faking motion intuition here.

## Common Ad Failures (feed these into the slop check)

- A message that only reads at full size — dies at thumbnail
- Two or three competing messages fighting for the one second
- One master letterboxed across every placement instead of composed per size
- Text-crammed creative; a paragraph where a hook belongs
- The CTA color bleeding into headline/decoration so the button doesn't pop
- Message or mark buried under the platform's UI-safe zones (stories/reels)
- A stock-photo cliché (handshake, headset, generic team-at-laptop) standing in for a real idea
