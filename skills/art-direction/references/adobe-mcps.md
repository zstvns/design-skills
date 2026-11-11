# Adobe MCPs — Finishing, Layout Handoff, and Motion

Generators get an image to 80%. The last 20% — compositing, retouching, extending, laying it out, cutting it into motion — is Adobe's home ground. This file says which Adobe path to use for which job, and what each one needs. Sources and verification status: [tool-sources.md](tool-sources.md). Checked 2026-11-11.

## The State of Play

| Path | What it is | Status |
|---|---|---|
| **Adobe for creativity connector** | Adobe's official connector in Claude (web, desktop, Claude Code). Image tools drawn from Photoshop and Firefly, layout tools drawn from InDesign, video tools drawn from Premiere and Express, plus Stock, Fonts, and Firefly Boards. | **Shipped** 2026-04-28. *Verified.* |
| **Adobe local MCP integrations** | Your own agent working inside desktop Photoshop, Illustrator, Premiere, and After Effects on native files — layers, bins, sequences stay editable. | **Announced** at MAX 2026-11-10; private beta "early 2027". InDesign not named. *Verified as announced; not available.* |
| **Community MCP servers** | Open-source bridges that drive the desktop apps through UXP, CEP, or ExtendScript plugins. | **Exist, unofficial.** None endorsed by Adobe. *Repos verified; none tested.* |
| **Firefly Services APIs** (Photoshop API, InDesign API) | Cloud REST APIs for batch file operations. | Shipped; enterprise / sales-led. Out of scope for agency work unless the client already licenses them. |

**The key distinction: the connector works on files in Adobe's cloud; it does not drive the desktop app.** It returns flattened results, not a layered PSD or a live INDD (*inferred from the tool shapes — Adobe doesn't state it*). Layered, native-file work needs the desktop app — today through a community bridge, from 2027 through Adobe's own.

### Requirements

- **Connector:** an Adobe ID is optional to start; signing in unlocks generative tools and saving to Creative Cloud. "Some tools require an eligible paid Adobe plan" — Adobe doesn't name the tier. Call `adobe_mandatory_init` before any other tool on the server.
- **Desktop paths (community now, Adobe 2027):** a Creative Cloud subscription covering the app, the **desktop app installed and running** on the same machine as the agent, and the bridge plugin loaded (UXP Developer Tool or a CEP panel). macOS and Windows vary by repo — read its README.
- **Community servers run code in your apps.** Check what each one sends (one Premiere server has telemetry on by default), prefer ones with read-only modes or undo grouping, and keep them off client machines unless the operator approves.

## By Job

### Photoshop — composite, retouch, finish generated rasters

The most common art-direction use. Generated images need fixing that a re-prompt can't do without losing what's working.

- **Connector (default):** `image_remove_background`, `image_select_subject` / `image_select_by_prompt`, `image_fill_area` (generative fill), `image_generative_expand` (extend to a new aspect ratio without regenerating), `image_apply_adjustments`, `image_apply_lens_blur`, `image_crop_and_resize`, `image_vectorize`. Use for single fixes: remove a stray object, extend a hero to 21:9, cut out a subject for a composite.
- **Layered compositing** (subject from one generation, background from another, grade on adjustment layers): needs the desktop app — `alisaitteke/photoshop-mcp` or `mikechambers/adb-mcp` today. Otherwise composite in code (ImageMagick / `sharp`) where the job is simple.
- **The rules still hold.** Edit-first applies here too: name what to keep, change one thing. Every finished file still runs through the treatment recipe and Step 7 review. Generative fill is a generation — it gets the same imagery-slop check. Never fill or expand into a logo or type; those go on in layout.

### InDesign — layout handoff

Art direction's job ends at the approved, treated file. Layout belongs to `collateral-design`. When the piece is print or multi-page and lives in InDesign:

- **Connector:** `document_render_layout`, `document_merge_data_layout` / `prepare_indd_merge_template` (data-merge templates), `convert_pdf_to_indd`, `export_idml`. Good for templated output and getting a layout into InDesign format.
- **Live INDD work** (styles, master pages, placing linked images): `nutriandrea/adobe-indesign-mcp` with InDesign running. Adobe's 2027 local MCP doesn't name InDesign, so the community route is the only live path for now.
- **What to hand over:** the approved files at print resolution, linked not embedded; the manifest lines (rights, alt text); the crop and negative-space notes from the spec. Convert to CMYK at the layout stage, not before (see `collateral-design` → print.md).

### Premiere Pro and After Effects — motion

Generated video starts from an approved still (see node-generators.md). Assembly and animation happen here.

- **Connector:** `video_resize`, `video_create_quick_cut`, `video_render`, `video_export`. Enough for reframing to social formats and simple cuts. **No After Effects tools.**
- **Real Premiere timelines:** `leancoderkavy/premiere-pro-mcp` or `hetpatel-11/Adobe_Premiere_Pro_MCP` with Premiere running.
- **After Effects animation:** `kumoproductions/mcp-aftereffects` (actively maintained, undo-grouped, read-only mode) over `Dakkshin/after-effects-mcp` (more stars, not updated since April 2026).
- **Hand off to `motion-design`.** It owns the motion character — the brand's timing, easing, and pace from `.agents/design.md` — and the earn-its-place call on every movement. Art direction supplies the frames: approved stills, generated clips, and the grade. Ask `motion-design` for the timing spec before cutting, and run the cut past it before anything ships. Default to less motion.

## When Not to Use Adobe

- **The image is wrong, not unfinished.** Retouching a bad composition is slower than re-prompting with the anchors. Fix the prompt.
- **No subscription and no connector.** Don't block. Composite in code, extend with the generator's own outpaint, cut video in code (Remotion, ffmpeg), and say what Adobe would have added.
