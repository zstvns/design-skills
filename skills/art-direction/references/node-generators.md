# Node-Based Generators — One Method, Many Canvases

A node-based generator lays the work out as a graph: inputs (anchors, prompts) wired into model nodes, wired into edits, upscales, and exports. For art direction that is the right shape. **The graph is the spec made executable.** The anchors are wired in once, the primer becomes a prompt node, and every new image runs through the same chain. That is what keeps image #40 looking like image #1.

**Flora is the default.** It is connected by MCP, runs a wide model roster on one canvas, hosts Arrow for real SVG, can train style models, and its docs grant commercial rights on every tier. Use another canvas only when the Toolkit says so, or when a job needs something Flora doesn't do well (see the decision table in SKILL.md Step 6).

Pricing, free tiers, and access routes change monthly. Every claim below is sourced in [tool-sources.md](tool-sources.md) with whether it was **verified** on the vendor's own page or is **unverified** (press, third-party, or inferred). **None of the non-Flora tools have been run by this skill's authors.** Treat their notes as a starting map, and re-check the pricing page before quoting a cost to the operator.

## The Shared Method — Same in Every Tool

The spec, the anchors, and the review don't change with the tool. Only the canvas does.

### Brief the graph

Build one **house graph** per class and reuse it. Name the nodes after the spec, so anyone opening the canvas can read the direction off it.

```
[anchors: 3–6 from .agents/assets/imagery/anchors/]       ─┐
[primer: the spec, condensed — generation.md → The primer] ├─▶ [model] ─▶ [4 variants] ─▶ [edit / inpaint] ─▶ [upscale] ─▶ [export]
[request: class · subject · use + aspect ratio · unusual]  ─┘
```

- **Upload the anchors into the tool's own storage first.** Providers often can't fetch hotlink-protected hosts (Wikimedia, many CDNs).
- **The primer is a fixed node; only the request changes.** Same rule as the ChatGPT Project at Tier 1 — a fresh long prompt per image drifts.
- **Say what to take from each reference** in the primer: "only the light, contrast, and grain — not the equipment or era."
- **One model per class, chosen on the style test.** Swapping models mid-set breaks the family faster than any prompt change. If the test ran in two models, the one whose two sheets were closer siblings wins.
- **Train a style model when the tool offers it**, once 10+ approved images exist in the class (Flora, Krea, ComfyUI LoRA). It's the strongest consistency lever there is.
- **Video starts from an approved still** (image-to-video), never text-to-video, so the grade and composition carry. Motion character comes from `.agents/design.md` (see `motion-design`).
- **Save the graph.** Template or export it, put its name and link in `.agents/assets/imagery/prompts.md`, and record the tool in the Art Direction section of `.agents/design.md`.

### Spend like it's the client's money

- **Quote the cost before every run**, in dollars where the tool reports it. Credits mean nothing to the operator.
- **Run small first.** Four variants, judged, then scale. A node graph makes it easy to fan out to 40 images that share one mistake.
- **Out of credits means stop.** Relay the error and the plan link. Don't retry, and don't switch tools without asking.

### Curate exactly as SKILL.md Step 7

Node canvases make it tempting to approve on the canvas. Don't. Pull candidates out, review each against its class spec, the never list, and [imagery-slop.md](imagery-slop.md), judge it in place next to the approved set, and give one verdict: approve · edit · re-prompt · reject. Approved files get the treatment recipe, go to `approved/<class>/`, and get a manifest line naming **the tool, the model, and the plan's commercial terms** on the day it was made.

### Free tiers — check four things before client work

A free tier is fine for the style test. Before anything from it ships, confirm on the vendor's own page and write the answers in the manifest:

1. **Commercial rights** on that tier — not just "on paid plans."
2. **Watermark** on downloads.
3. **Visibility** — some free tiers make generations public.
4. **Model roster** — free tiers often lock the best models, so a free-tier test may not predict paid results.

## Per-Tool Notes

Short by design — the method above is what matters. Checked 2026-11-11.

### Flora — default

- **Best at:** one canvas for image, video, audio, text, and 3D across many providers' models. Hosts Quiver's Arrow (flat illustration and spot icons as real SVG). Style training (LoRA) and saved Techniques are exposed through the MCP.
- **Access:** web; official MCP (OAuth, or an API key as Bearer for headless clients); public API.
- **Free tier:** yes, but small — a one-time allowance of up to ~17 generations ($2.50 of usage), 3 projects, no history. Flora's docs say output rights don't vary by tier, so free output is commercially usable. *Verified.* The pricing page lists API/MCP as Starter and up while the MCP docs say a free account can connect. *Flora's own pages conflict.*
- **Paid:** Starter $18/seat/mo, Pro $50, Max $200. *Verified.*

### Krea — Krea Nodes

- **Best at:** fast image iteration; multi-reference style transfer; LoRA training; strong upscaling. Nodes is on every plan.
- **Access:** web; official MCP (`https://api.krea.ai/mcp`, OAuth or API token, can run Node Apps); public API.
- **Free tier:** 100 compute units/day, one LoRA training a day, limited upscaling. **Commercial rights on Free contradict themselves** on the pricing page, the terms say rights may depend on plan, and generations outside Private mode may be visible to others. Treat free output as **test-only**. *Verified (that the page contradicts itself).*
- **Paid:** Basic $9/mo, Pro $35, Max $105. *Verified.*

### Higgsfield — Canvas

- **Best at:** video — cinematic camera moves, motion control, consistent characters and reference elements, then upscale and reframe. Canvas is its node board; every model is a node and credits are charged only when a node runs.
- **Access:** web; official MCP (`https://mcp.higgsfield.ai/mcp`, OAuth) and a CLI for coding agents. **The MCP requires an active paid subscription.** *Verified.*
- **Free tier:** effectively test-only. Higgsfield's help center says paid plans include watermark-free downloads (so free output is watermarked) and that commercial rights aren't tied to plan. Free credit amounts are reported inconsistently. *Watermark implied by the vendor; credits unverified.*
- **Paid:** pricing page unreadable; third-party figures run ~$15–129/mo. *Unverified.*

### ComfyUI — local, or Comfy Cloud

- **Best at:** the most control of anything here. Any open model, LoRAs, structure control, inpainting, upscaling, video. The right tool when a style must stay locked through a trained LoRA, or a pipeline must be reproducible to the node. Steepest learning curve.
- **Access:** local (free, open source; needs a capable GPU — NVIDIA 20-series or newer, Apple Silicon, AMD/Intel with caveats); Comfy Cloud (hosted). Official MCPs for both: `https://cloud.comfy.org/mcp` (running generations needs a subscription) and `comfy-mcp` (local; ComfyUI must be running). Prefer these over community MCPs.
- **Free tier:** local ComfyUI is genuinely free — no watermark, no resolution cap. Two catches: **model licenses vary** (read each model card; FLUX.1 [dev] has a non-commercial model license, though its card permits commercial use of outputs), and **Partner API nodes** (OpenAI, Kling, and others) cost prepaid credits even locally. Comfy Cloud's free allowance is ~5 runs. *Verified.*
- **Paid (Cloud):** Standard $20/mo, Creator $35, Pro $100. *Verified.*

### Magnific Spaces (formerly Freepik Spaces)

- **Best at:** a node canvas over many commercial image and video models with Magnific's upscaler built in — good for upscale-and-finish chains.
- **Access:** web; official MCP (`https://mcp.magnific.com`, OAuth, added as a custom connector for now); REST API on paid plans.
- **Free tier:** none on the current pricing page. *Verified;* older Freepik docs mentioned limited free Spaces (*unverified*). Treat as paid-only. Every paid plan includes a commercial AI license. *Verified.*
- **Paid:** Premium $20/mo, Plus $45, Pro $110 (credits valid a year). *Verified.*

### Runway — Workflows

- **Best at:** video. A node graph of input, image and video model, LLM, audio, and upscale nodes; workflows save as templates and shareable apps.
- **Access:** web; developer API; Runway MCP on Pro and Max. *Whether the MCP drives Workflows is unverified.*
- **Free tier:** 125 one-time credits, and Workflows is a paid-plan feature — so no free path to the node graph. *Verified.* Free watermark/resolution limits aren't on the pricing page.
- **Paid:** Standard $15/mo, Pro $35, Max $95. *Verified.*

### Adobe Firefly Boards

- **Best at:** a moodboard canvas mixing Firefly and partner models — useful for the reference board and the style test when the operator lives in Creative Cloud. Adobe's "commercially safe" claim covers **Firefly models only**, not partner models.
- **Access:** web, on every plan including Free. The Adobe for creativity connector can create and edit boards (`create_firefly_board`, `boards_*`); a public feature request says it doesn't expose Firefly generation. *Board tools seen in the connector; generation via MCP unverified.*
- **Free tier:** limited daily generations; watermark and commercial terms on Free aren't documented. *Unverified.*
- **Paid:** Standard $9.99/mo, Pro $19.99, Pro Plus $49.99. *Verified.*

### Figma Weave (formerly Weavy) — outside this stack

Figma bought Weavy in October 2025; weavy.ai now redirects to weave.figma.com. It's a strong node canvas for image and video and has the most generous verified free tier here (150 credits a month, image models only, commercial license included). But it's a Figma product: **its MCP route runs through the Figma MCP server**, and the app uses a Figma login. For a team that doesn't use Figma it adds an account and a toolchain for one job. **Don't route to it** unless the Toolkit already lists it.

### Invoke — local only now

Invoke's hosted service shut down in October 2025 (*unverified — press*). The open-source Community Edition (unified inpainting canvas plus node workflows) is still maintained and free to run locally (*verified — repo*). Never route anyone to a hosted Invoke.

### Considered and left out

Kaiber Superstudio (canvas with flows; no free trial, pricing unreadable, no MCP), Leonardo (layer canvas, not nodes), Google Flow (not node-based). Revisit if the Toolkit names one.
