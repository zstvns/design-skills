# Presenting Directions — the Presentation App

The preferred way to show creative directions is a **small, deployed web app, one per client**: every direction, each shown three ways, with comparison, comments, the rationale, and the team's verdict on one surface the founder can open, share with their team, and return to. A PDF or a slideshow freezes the work; a scrolling page buries two directions under the first. The app lets the founder *operate* each direction, compare them on identical terms, and leave feedback exactly where they're looking.

**Reference implementation:** Conversion Factory's **CF Stylescapes** app, a Next.js template deployed once per client. A live client deployment: [iteright-stylescapes.vercel.app](https://iteright-stylescapes.vercel.app/). It's built in custom code, like the sites it previews. For a lighter engagement, the single-file exemplar ([../examples/magister-stylescapes.html](../examples/magister-stylescapes.html)) carries the same ideas without a deployment.

## Structure

- **One deployment per client.** Its own URL, its own content, nothing shared between clients. The founder forwards the link to their team, and everyone sees the same thing.
- **Three directions, each authored independently.** In a team, each direction comes from a different designer, so the three are genuinely different answers and not one person's taste three ways. Working alone (or as one agent), build each direction as a separate pass from the same brief, and don't look at the others until each one stands on its own. Credit the author on each direction ("by [name]").
- **Each direction is shown three ways**, as tabs on that direction:
  1. **Stylescape**: the animated bento board, at a fixed **16:10** frame so every board is judged at the same proportion, and scaled to fit, not reflowed. Built to the full anatomy in [stylescapes.md](stylescapes.md), with ambient motion that respects `prefers-reduced-motion`.
  2. **Mockups**: the direction applied to the fixed mockup kit, digital and physical scenes on one board, identical scenes across directions. See [mockup-kit.md](mockup-kit.md).
  3. **Website**: a full, interactive homepage in the direction, built in code with real interactions, not a picture of a page. It's the strongest carry-through proof there is: the founder scrolls, hovers, and clicks the direction.
- **Navigation:** a persistent side nav listing each direction (number, name, author, and a mark for the team pick once there is one), then the team verdict. A short intro for first-time visitors explains what they're looking at and why there are three.

## Compare

Directions are judged *against each other*, so comparison is built in, not left to tab-switching:

- **Slider:** two directions overlaid in the same frame, with a draggable divider. It works because the frames align: same 16:10 board frame, same mockup slots, same homepage copy.
- **Side by side:** all directions in a row, same view (all stylescapes, all mockups, all websites), for the silhouette squint test at a glance.
- Compare works per view. Comparing one direction's board against another's website compares nothing.

## Comments

**Pin comments on the work itself.** The founder and their team click any point on a board, mockup, or page and leave a note anchored there. That way feedback arrives tied to the element it's about ("this typeface," "too cold here") rather than as a paragraph in an email. Comments stay per direction and per view, are visible to the team, and get resolved as the direction is refined.

## The Rationale

Each direction has a **Rationale** panel (a modal from the direction's tabs) that tells its story. A board without its narrative is just arrangement:

- **Walkthrough:** a short recorded video (Loom) of the author talking the direction through: the feeling, the muses, the abstraction, why it answers the emotional target.
- **From the client call:** the inspiration the direction was built on: what the founder said, quoted, so they can see their own words in it.
- **Muses:** the reference images with captions, next to what each became (reference → abstracted element).
- **Thinking process:** the author's reasoning: what they tried, what they cut, the hard part.
- **Board checklist:** the stylescape anatomy (hero line, treated imagery, type specimen, color roles, motif, icon set, applied mockups, the product's real work, depth) checked against the board, with anything **missing** flagged. It's an internal quality gate before it's a client-facing one: nothing gets presented with a gap showing.

## The Team Verdict

The last stop is a **verdict page**: the team's recommendation, not just a menu.

- **Per direction: gains and trade-offs.** What the founder gets with this direction, and what they give up, in plain language. It's the same honest accounting SKILL.md asks for (challenges, pros, most differentiated, most on the emotional target), written down where the founder can reread it.
- **The team pick, and why.** One direction recommended, with the reason tied to the emotional target and the competitor set. Mark it in the nav too.
- **If the client is choosing without a recommendation** (the engagement calls for it), keep the gains and trade-offs and drop the pick. Drop it because the engagement asks for that, never to avoid taking a position.
- **Feedback that drives to one direction.** Invite the founder to say what they'd keep and what they'd lose from each. Then shape *one* direction from it, and never staple three together (see [stylescapes.md](stylescapes.md) → Synthesis vs. averaging).

## The Shared Copy Deck

**Every direction is judged on the same words.** Before any direction is built, write one copy deck for the engagement: the hero line and subhead, the section headlines and body for the homepage, the CTA labels, the billboard line, the social post, the email subject and opening, the business-card name and title, the product names, and any data the product UI shows. Each direction's website and mockups pull from it, slot by slot.

- **Why:** when copy differs, the founder ends up picking the better *writing* and calling it the better design. Holding the words constant isolates the direction.
- **The board's hero line may be the direction's own.** A line that carries the direction's feeling is part of the stylescape (see [stylescapes.md](stylescapes.md) → The anatomy). Everything *applied* (website, mockups) uses the deck.
- **Real copy, flagged as placeholder.** Write it from the brand's real positioning (link `.agents/product-marketing.md` if it exists), so the type is tested on real lengths. Then tell the founder plainly that the copy and sections aren't their final site.
- Keep the deck in the app's content, not hard-coded per direction, so a copy edit changes all three at once.

## Frame It for the Founder

Put short, standing notes in the app where the founder will see them before reacting:

- **A note on the websites:** they show each direction applied to a real page. Copy, content, and sections are placeholders; react to the look and feel.
- **A note on the logo** (Revolution): the mark is designed separately, after the direction is chosen. Whatever mark appears is a placeholder, the same in every direction. Judge everything around it.
- **How to give feedback:** gut reaction first (which one feels most like the brand, and why), then specific pinned notes. Share the link with the team.
- **What happens next:** the chosen direction gets refined, then becomes the foundation for the real pages.

## Building the App

- **Custom code**, same stack as the sites the team ships (Next.js on Vercel for CF). Each direction is a self-contained module (its board, its mockups board, its homepage), fed by shared content: the client's name, the copy deck, the directions' metadata (name, author, descriptor, palette), rationale fields, and the verdict.
- **Start from the template; don't rebuild the shell.** The shell (nav, tabs, compare, comments, rationale, verdict) is the same every time. Per client, the work is the three directions and the content.
- **Each direction's own tokens and faces**, scoped to its module, so directions never leak styles into each other or into the shell. Load licensed faces only where the license allows web embedding on a client preview.
- **Gate the deployment** if the work is confidential (a password or the host's deployment protection), and keep client content out of anything shared across clients.
- **Record it.** Add the deployment URL and the locked mockup kit to `.agents/design.md` (Presentation section), and write the chosen direction's decisions back as usual. The app is a published copy; `.agents/design.md` stays the source of truth.

## Presentation Checklist

- [ ] One deployment for this client; the link works for someone outside the team
- [ ] Three directions, independently authored, each credited
- [ ] Each has Stylescape (16:10, animated, reduced-motion-safe), Mockups (full locked kit), and Website (interactive, built in code)
- [ ] Slider and side-by-side compare line up in every view
- [ ] Comment pins work on boards, mockups, and pages
- [ ] Rationale complete per direction: walkthrough video, client-call inspiration, muses, thinking, board checklist with nothing missing
- [ ] Every website and mockup uses the shared copy deck
- [ ] Notes on the websites and the logo are visible before the founder reacts
- [ ] Verdict written: gains and trade-offs per direction, and the team pick with its reason (unless the client is choosing unaided)
- [ ] Deployment URL and mockup kit recorded in `.agents/design.md`
