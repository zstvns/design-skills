# Type Sources — Where Faces Come From

This is the sourcing companion to the typography bar in [element-standards.md](element-standards.md). That page decides *what kind of face* a concept needs. This page is where you *find, license, and load* it.

The licensing checkpoint still stands: confirm foundry, license type (desktop / web / app), budget, and character + language support **before the direction is approved**, not after. A listing is not a license.

## The go-to free source: FaceTypes

When the project needs a distinctive free face — or a pairing that isn't the usual Google Fonts shortlist — start at **[FaceTypes](https://facetypes.xyz)**. It is a hand-picked library of free typefaces, sorted by typographic classification (sans, serif, slab, mono, display, handwriting, each with sub-styles), each previewed, credited, and checked by the site for commercial-use licensing, with a link to its designer or official source.

Do not treat "it's on FaceTypes" as the end of the license check. FaceTypes itself says it doesn't own the fonts, that **the licence supplied with the download is the one that applies**, and that details can change — so read that licence at the source before you use a face. See [Licences](#licences) below.

If the project has the budget for a paid face, still consider one: FaceTypes says the same, and its [Foundries](https://facetypes.xyz/foundries/) page points to studios worth supporting. A paid license can also be the right call when a free face isn't exclusive enough for the brand.

## How to browse

- **On the site:** start at [facetypes.xyz](https://facetypes.xyz). Filter by category and sub-style (for example sans serif → neo-grotesque, serif → transitional). Collections and [free alternatives](https://facetypes.xyz/free-alternatives/) are useful when a muse or a competitor's paid face has a known free cousin — use them as a starting point, then still judge the face against the emotional target, not as a substitute-by-default. The [Identifier](https://facetypes.xyz/identify/) matches a photo or a few letters to free faces in the library; it runs in the browser.
- **For an agent:** fetch [`https://facetypes.xyz/fonts.json`](https://facetypes.xyz/fonts.json) (schema: [`fonts.schema.json`](https://facetypes.xyz/fonts.schema.json)). It is a public catalog of every listed family: name, category, designers, `licence` / `licence_code` / `licence_summary`, `commercial_use`, `source_url` (the official download), and language coverage. There is no other documented API. Filter the JSON rather than scraping pages. [`sitemap.xml`](https://facetypes.xyz/sitemap.xml) lists the same families as HTML pages.
- **Then open the font's FaceTypes page** to read the licence line and the designer credit, and **download the files from `source_url`** — the designer, foundry, Google Fonts, Fontshare, GitHub, or another official host. FaceTypes is a guide, not a font host. Do not pull files from unofficial re-post sites.

Google Fonts remains a valid official host for many of these families (a large share of the catalog points there). Browse FaceTypes to choose; download from the official source it names, whether that's Google Fonts or somewhere else. The self-hosting steps below are the same in either case.

## How to pick a face that fits

Open `.agents/brand.md` (and `.agents/design.md` if a system already exists) before you search. The face has to serve the emotional target and the muses, not the catalog's "most interesting" sort.

- **Evoke the muse, don't costume it.** A literal muse-face (a Roman inscriptional for an imperial muse, a blackletter for a medieval one) is an abstraction failure. Muse-derived type is rare; more often the system — motif, color, composition, treatment — carries the feeling, and the type is a strong, clean pairing.
- **Contrast, not competition.** Display and body have different jobs. Prefer a superfamily's own cut for a mono or third register over a bolted-on face.
- **Neutral beats try-hard.** A deliberate workhorse (Inter is the standing example) outperforms a fashionable "designer" face grabbed to look designed. **Listing on FaceTypes does not lift the ban or wave list** in `design-principles` → cliche-typefaces.md (Space Grotesk, Fraunces, Instrument Serif, Geist-outside-Vercel, the Fontshare wave, and the rest). **Space Grotesk, Fraunces, Instrument (any cut), and Cormorant (any cut) are house bans:** banned by default; only the owner can lift them with an explicit override in that project's typography foundation or brief; agents never self-override, and they never offer or draft that override as a way to keep the face. FaceTypes lists some of those faces, and it keeps its own [overused-by-AI](https://facetypes.xyz/overused-by-ai/) set; neither list is a reason to use them. Check both before you shortlist.
- **Coverage.** Confirm the character set and typographic features the target markets need (language support is in the catalog and on the font's page). If a needed script is missing, keep looking or budget for a face that has it — don't fake it with a fallback and call it the brand face.
- **If a requested face fails the bar or its licence doesn't cover this use, refuse it and offer a specific replacement pairing** — named faces, official sources, and licences that actually cover the work. Don't leave a role as TBD.
- **Record the decision** in `.agents/design.md` (the typography table already has a Foundry / license column): family, role, official source URL, licence name, and what it allows (desktop, web, app, logo). The rationale stays in design.md; the files go in the project.

## Licences

FaceTypes' catalog is built around commercial use: the site does not list personal-use-only fonts, and every entry is flagged `commercial_use`. That is a starting filter, not a substitute for reading the licence.

As of the November 2026 catalog (521 families), most faces use the **SIL Open Font License 1.1** (use, embed, and share, including commercially; don't sell the font files on their own; modified versions keep the OFL and take a different reserved name). Some use **Apache 2.0**, MIT, or public-domain dedications. The rest use **other free licences**, and those are where agents get sloppy:

- **Fontshare / ITF Free Font License** — free for personal and commercial use, but not open source: the files can't be modified or shared. Read Fontshare's terms for embedding before you self-host or commit files to a public repo.
- **Foundry "free" licences** (Fontfabric, The Designers Foundry, Typodermic, Licence Amicale, and others) — often commercial-use with limits: no redistributing the files, no modification, a revenue cap, credit requirements, or **desktop-only** terms that do **not** cover websites or apps without a paid licence (Typodermic's desktop EULA is the standing example).
- **Creative Commons** — some families are CC BY-ND (credit the designer; don't modify) or CC BY-SA.

**The operator (or the client) checks the licence that comes with the download**, at the official source, for this project's actual uses: the marketing site, the app, collateral, and the logo if the wordmark is set in the face. Keep the licence file with the font files whenever the licence says to. Credit the designer when the licence requires it. Do not skip this because FaceTypes already "licence-checked" the family, and do not assume every free face is OFL.

A free face is also not exclusive. If the brand needs a face nobody else can use, that's a paid license — which is exactly the budget question in the licensing checkpoint.

## How to self-host

Once a face is chosen and its licence allows web use, **self-host the files**. Don't leave a production site pointing at a third-party CSS or CDN (including Google Fonts' stylesheet): you want predictable loading, no extra connection, and the licence file sitting next to the fonts. This is the same method whether the official source was Google Fonts, Fontshare, GitHub, or a foundry.

1. **Download from the official source** named on the FaceTypes page (`source_url` in the catalog). Prefer **WOFF2**. Keep only the weights and styles the system actually uses.
2. **Read the licence that arrived with the files.** If it allows web embedding, put the WOFF2 files in the project (for example `public/fonts/` or `.agents/assets/design-system/fonts/`). If it forbids redistributing or modifying the files, follow those terms: don't commit what you may not share, don't subset or convert what you may not modify, and tell the operator what the licence requires.
3. **Keep the licence and copyright notices** with the font files when the licence asks for that (OFL does).
4. **Load with `@font-face`**, then use the family through the project's type tokens (`--font-display`, `--font-body`, `--font-mono`) — never a raw font name scattered through components.

```css
@font-face {
  font-family: "Example";
  src: url("/fonts/example-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

5. **Preload only the critical file** — usually the body regular, sometimes the display weight used in the hero. Don't preload every cut.

```html
<link rel="preload" href="/fonts/example-regular.woff2" as="font" type="font/woff2" crossorigin>
```

6. **Set fallbacks that preserve tone** (a system sans next to a neo-grotesque, a transitional serif next to Georgia) so the first paint isn't a different brand.

Subset or convert files only when the licence allows modification (OFL does, under its reserved-name rules; several free foundry licences do not).
