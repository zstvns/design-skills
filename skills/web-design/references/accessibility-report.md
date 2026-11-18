# Accessibility Report — Self-Check for Custom-Coded Sites

The accessibility pass you run on your own build before it ships. You wrote the code, so you can read the markup *and* render the page — use both. This is a floor, not a compliance audit; for the full interface/accessibility pass, use `web-design-guidelines`.

## The Four States

Every item gets exactly one:

| State | Means |
|---|---|
| **Passed** | You fully tested it on the rendered page and it holds everywhere it applies. |
| **Issue found** | You found a failure. Name where, and state the fix (or apply it and re-test). |
| **Needs manual testing** | You could not fully test it — it needs a human, an assistive technology, or a device you don't have. |
| **N/A** | The thing doesn't exist on this page (no forms, no images, no motion). Say why. |

## Wording Rules

- **Never mark Passed anything you could not fully test.** An unverified item is not a pass. When in doubt, it's Needs manual testing.
- **Screen-reader flow is always Needs manual testing.** Reading the DOM or the accessibility tree is not the same as hearing the page in a screen reader. Report what you checked in the tree, then hand the listen-through to a human.
- **Partial coverage is not a pass.** Checked three of five templates? The item is Needs manual testing (or Issue found if any failed), with the untested scope named.
- **Issue found always carries the fix.** "Icon button has no name" is half a finding; "Add `aria-label="Open menu"` to the header menu button" is the finding.
- **Fixed means re-tested.** If you fix an issue, re-render and re-check before changing its state to Passed. Note that it was fixed.
- **No blanket verdicts.** "Accessible" or "WCAG compliant" is never a line in the report. Report the items.
- **Evidence over assertion.** Each Passed line says what you looked at ("all 6 sections, 1440 and 390px").

## What to Check, and How

Test on the rendered page in a browser, not the code in your head. The markup tells you what you intended; the rendered page tells you what shipped.

### Heading order and semantic tags
- One `<h1>`; headings descend without skipping levels (no `h2` → `h4`). Headings chosen by rank, not by size — style is CSS's job.
- Landmarks present: `<header>`, `<nav>`, `<main>`, `<footer>`. Buttons are `<button>`, links are `<a href>`. No clickable `<div>`s.
- **Test:** dump the heading outline and landmark list from the rendered DOM (`document.querySelectorAll('h1,h2,h3,h4,h5,h6')`). Search the source for `onClick` on non-interactive elements.

### Alt text
- Every content image has alt text that says what the image contributes, not "image of."
- Decorative images are marked decorative: `alt=""` (or `aria-hidden="true"` on decorative inline SVG). A missing `alt` attribute is not the same as an empty one.
- **Test:** list every `<img>`, `<svg>`, and CSS background carrying content; check each `alt` against what the image actually shows. Pull alt text from the imagery manifest where it exists.

### Accessible names on icon buttons, links, and form fields
- Icon-only buttons and links have a name: visible text, `aria-label`, or visually-hidden text. "Click here" and "Learn more" repeated across the page are not names.
- Every form field has a `<label for>` (placeholder is not a label).
- **Test:** query the accessibility tree (browser devtools → Accessibility, or a headless accessibility snapshot) for buttons, links, and inputs with an empty computed name.

### Visible form error states
- Errors appear in text, next to the field, not just as a red border. The field is linked to its message (`aria-describedby`) and marked `aria-invalid`.
- Required fields are indicated in text, not color alone.
- **Test:** submit each form empty and with bad input on the rendered page. Screenshot the error state.

### Contrast
- Body text ≥ 4.5:1, large text (≥ 24px, or ≥ 18.66px bold) ≥ 3:1, UI component boundaries and focus indicators ≥ 3:1.
- Check text over imagery and gradients at its worst point, plus hover, focus, and disabled states.
- **Test:** compute ratios from the tokens for solid grounds. Text over images or gradients can't be computed from tokens — sample the rendered pixels; if you can't, it's Needs manual testing.

### Reflow at each real breakpoint
- No horizontal scroll, clipped text, or overlapping elements at each breakpoint the build uses, down to 320px wide.
- Text zoomed to 200% still reads without loss of content.
- Focus is visible and keyboard order follows the visual order at every width.
- **Test:** render at each breakpoint plus 320px; screenshot each. Tab through the page at desktop and mobile widths.

### Reduced motion and autoplay
- With `prefers-reduced-motion: reduce`, non-essential motion stops or becomes a simple fade; the page is calm and usable.
- Anything that autoplays, moves, or loops for more than 5 seconds has a pause control. Autoplay video is muted.
- **Test:** emulate reduced motion in devtools and watch the page play back — don't screenshot it.

### Meaning carried only by color or animation
- Status, errors, required fields, active states, and chart series are carried by text, icon, or pattern as well as color.
- Nothing the visitor needs to know is delivered *only* by an animation — the end state holds the information.
- **Test:** view the page in grayscale (devtools → Rendering → emulate vision deficiency). Then load with reduced motion and confirm nothing is lost.

### `<html lang>`
- `<html lang="…">` is set and matches the page language; passages in another language carry their own `lang`.
- **Test:** read the attribute from the rendered HTML response.

### Screen-reader flow
- Always **Needs manual testing.** Report what you checked in the accessibility tree (names, roles, reading order), and name what a human should listen for with VoiceOver or NVDA.

## Example Report

| Item | State | Notes |
|---|---|---|
| Heading order + semantic tags | Passed | One h1; h2→h3 throughout; header/nav/main/footer present. Checked all 7 sections. |
| Alt text | Issue found | Team photos have `alt="image"`. **Fix:** describe each person and role from the imagery manifest. Hero texture SVG set to `aria-hidden="true"` (fixed, re-tested). |
| Accessible names | Issue found | Mobile menu toggle is an icon-only `<button>` with no name. **Fix:** add `aria-label="Open menu"`, toggle `aria-expanded`. |
| Form error states | Passed | Demo form: empty + invalid email both show inline text errors, linked via `aria-describedby`. |
| Contrast | Needs manual testing | Tokens pass (body 7.2:1, secondary 4.9:1, CTA 4.6:1). Hero headline over the photo not measurable from tokens — sample the rendered image. |
| Reflow | Passed | 1440, 1024, 768, 390, 320px: no horizontal scroll, no clipping. Tab order matches visual order. |
| Reduced motion + autoplay | Passed | Reduced motion: reveals become fades, pinned sequence unpins. Hero video muted with a pause button. |
| Color/animation-only meaning | Passed | Pricing "most popular" carries a text badge, not just the accent border. |
| `<html lang>` | Passed | `lang="en"` in the server response. |
| Screen-reader flow | Needs manual testing | Accessibility tree names and order look right; a human should listen through the nav, the pricing toggle, and the form with VoiceOver or NVDA. |

Lead the hand-off with the Issue found and Needs manual testing lines — they're what the next person acts on.
