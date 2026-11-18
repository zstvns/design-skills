# Tool Sources — Where Every Claim Came From

Checked **2026-11-11** from public pages. None of these tools were run for these notes; Flora and the Adobe for creativity connector are the only ones this skill's authors have connected. Free tiers, prices, and access routes change monthly: **re-check the vendor's own page before quoting a cost or relying on a free tier's commercial rights.**

- **V — verified:** read on the vendor's own page (pricing, docs, terms, newsroom, or official repo).
- **U — unverified:** press, third-party trackers, search snippets, or inferred. Pages that blocked fetching are noted.

## Node-based generators

### Flora
| Claim | Status | Source |
|---|---|---|
| Free, Starter $18, Pro $50, Max $200 per seat/mo; Free = up to ~17 generations / $2.50 one-time, 3 projects, no history; API/MCP listed as Starter+ | V | https://www.flora.ai/pricing |
| Official MCP (OAuth; API key as Bearer for headless); a Free account can connect and spend its allowance | V | https://docs.flora.ai/more/mcp |
| MCP endpoint differs across Flora's pages | U | https://developer.flora.ai/mcp |
| Output rights and commercial use don't vary by tier; you own outputs | V | https://docs.flora.ai/legal/data-security-and-ip |
| Style training (LoRA) and Techniques | U — inferred from the tools the Flora MCP exposes | — |

### Krea
| Claim | Status | Source |
|---|---|---|
| Free 100 compute units/day, 1 LoRA training/day; Basic $9, Pro $35, Max $105; Nodes on all plans; free-tier commercial license contradicts itself on the page | V | https://www.krea.ai/pricing |
| Official MCP at `https://api.krea.ai/mcp` (OAuth or API token) | V | https://www.krea.ai/docs/developers/mcp |
| Commercial rights may depend on plan; non-Private submissions may be visible to others | V | https://www.krea.ai/terms |
| Multi-reference style transfer (Krea 2) | U | https://www.creativeainews.com/articles/krea-2-image-model-style-transfer/ |

### Higgsfield
| Claim | Status | Source |
|---|---|---|
| Canvas: node board, models as nodes, credits charged only when a node runs | U — search excerpt of the help page | https://higgsfield.ai/creator-hub/help-center/tools/how-do-i-use-canvas |
| Official MCP at `https://mcp.higgsfield.ai/mcp`; requires an active paid subscription; CLI for coding agents | V | https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent |
| Commercial use not tied to plan; paid plans include watermark-free downloads (implies Free is watermarked) | V | https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially |
| Plan prices (~$15–129/mo) and free daily credits | U — pricing page unreadable; sources disagree | https://creatify.ai/blog/is-higgsfield-free-free-plan-trials-and-promo-codes-explained-(2026) · https://krater.ai/blog/higgsfield-pricing |

### ComfyUI / Comfy Cloud
| Claim | Status | Source |
|---|---|---|
| Local hardware: NVIDIA 20-series+, Apple Silicon, AMD/Intel with caveats | V | https://docs.comfy.org/installation/system_requirements |
| Cloud: Standard $20, Creator $35, Pro $100; ~5 free runs; pay for GPU time | V | https://www.comfy.org/cloud/pricing |
| Official cloud MCP `https://cloud.comfy.org/mcp` (generation needs a subscription; docs call it both GA and "early release") | V | https://docs.comfy.org/development/cloud/mcp-server |
| Official local MCP `comfy-mcp` (needs ComfyUI running) | V | https://docs.comfy.org/agent-tools/local |
| Partner API nodes cost prepaid credits, even locally | V | https://docs.comfy.org/tutorials/partner-nodes/overview |
| FLUX.1 [dev]: non-commercial model license; outputs usable commercially | V | https://huggingface.co/black-forest-labs/FLUX.1-dev |

### Magnific Spaces (formerly Freepik Spaces)
| Claim | Status | Source |
|---|---|---|
| Premium $20, Plus $45, Pro $110; no free plan listed; commercial AI license on paid plans | V | https://www.magnific.com/pricing |
| Official MCP at `https://mcp.magnific.com` (OAuth; custom connector for now) | V | https://docs.magnific.com/modelcontextprotocol |
| Freepik rebranded as Magnific, 2026-04-28 | U | https://tech.eu/2026/04/28/freepik-rebrands-as-magnific-unifying-its-ai-creative-stack-as-enterprise-and-no-collar-growth-accelerates/ |
| Older free-plan Spaces allowance | U — page returned 403 | https://www.freepik.com/ai/faq/spaces |

### Runway Workflows
| Claim | Status | Source |
|---|---|---|
| Free 125 one-time credits; Standard $15, Pro $35, Max $95; MCP on Pro and Max | V | https://runway.com/pricing |
| Workflows: node graph, templates, apps; paid-plan feature | V | https://runway.com/workflows · https://runway.com/ja/changelog |
| Whether the Runway MCP drives Workflows | U | — |

### Adobe Firefly Boards
| Claim | Status | Source |
|---|---|---|
| Boards on every plan incl. Free; Standard $9.99, Pro $19.99, Pro Plus $49.99; "commercially safe" covers Firefly models only | V | https://www.adobe.com/products/firefly/plans.html |
| Connector doesn't expose Firefly generation | U | https://community.adobe.com/feature-requests-405/expose-firefly-generation-image-video-via-mcp-api-so-it-can-be-driven-from-claude-and-other-ai-agents-1637240 |
| Free-tier watermark and commercial terms | U — undocumented; community posts conflict | https://dupple.com/learn/is-adobe-firefly-free |

### Figma Weave (formerly Weavy) — outside this stack
| Claim | Status | Source |
|---|---|---|
| Acquired by Figma; standalone at weave.figma.com; weavy.ai redirects | V | https://help.figma.com/hc/en-us/articles/35965787376919 |
| Free 150 credits/mo, image models only, commercial license; Starter $24, Professional $45 | V | https://weave.figma.com/pricing |
| MCP access runs through the Figma MCP server (`weave_*` tools), paid Weave account | V | https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/ |

### Invoke
| Claim | Status | Source |
|---|---|---|
| Hosted service shut down October 2025 | U — invoke.com unreachable | https://www.promptus.ai/goodbye-invoke |
| Community Edition, Apache-2.0, canvas + node workflows, still released | V | https://github.com/invoke-ai/InvokeAI |

## Adobe MCPs

| Claim | Status | Source |
|---|---|---|
| Adobe for creativity connector shipped 2026-04-28; tools from Photoshop, Illustrator, Firefly, Express, Premiere, Lightroom, InDesign, Stock (no After Effects) | V | https://blog.adobe.com/en/publish/2026/04/28/adobe-for-creativity-connector |
| Works in Claude web, desktop, and Claude Code; Adobe ID optional; "some tools require an eligible paid Adobe plan" (tier unnamed); not every app feature | V | https://www.adobe.com/adobe-connectors/adobe-for-claude.html |
| Connector works on uploaded files in the cloud, not the desktop apps | U — inferred from tool shapes | — |
| Photoshop, Express, Acrobat apps in ChatGPT (2025-12-10) | V | https://news.adobe.com/news/2025/12/adobe-photoshop-express-acrobat-chatgpt |
| MAX 2026: local MCP integrations for Photoshop, Illustrator, Premiere, After Effects previewed; private beta early 2027; InDesign not named | V | https://news.adobe.com/news/2026/11/adobe-transforms-creative-cloud-tools · https://blog.adobe.com/en/publish/2026/11/10/explore-new-ways-create-across-creative-cloud-adobe-firefly-while-advancing-craft-precision-choice-control |
| Illustrator (Beta) desktop MCP server exists for testing | U — help page returned 403 | https://helpx.adobe.com/uk/illustrator/desktop/connect-with-other-apps-and-tools/connect-illustrator-to-ai-tools.html |
| Photoshop API and InDesign API (Firefly Services): cloud REST, enterprise / sales-led | V (docs) / U (licensing) | https://developer.adobe.com/firefly-services/docs/photoshop/ · https://developer.adobe.com/firefly-services/docs/indesign-apis/ |

### Community Adobe MCPs

None endorsed by Adobe. Stars and last push from the GitHub API, 2026-11-11. All need the desktop app running on the same machine.

| Repo | App | Bridge | Notes |
|---|---|---|---|
| https://github.com/mikechambers/adb-mcp | Photoshop, Premiere, InDesign, Illustrator, After Effects | UXP / CEP plugin + Node proxy | "Proof of concept"; macOS + Windows; last push 2026-07 |
| https://github.com/alisaitteke/photoshop-mcp | Photoshop | UXP plugin | ~120 tools incl. masks, retouching; active |
| https://github.com/nutriandrea/adobe-indesign-mcp | InDesign | UXP / JXA (macOS), COM (Windows) | Styles, masters, placing, PDF export, preflight; no IDML export |
| https://github.com/leancoderkavy/premiere-pro-mcp | Premiere | UXP loopback WebSocket or CEP | Active |
| https://github.com/hetpatel-11/Adobe_Premiere_Pro_MCP | Premiere | ExtendScript via CEP panel | Telemetry on by default |
| https://github.com/kumoproductions/mcp-aftereffects | After Effects | ExtendScript file IPC | Undo-grouped ops, read-only mode; active |
| https://github.com/Dakkshin/after-effects-mcp | After Effects | ExtendScript panel | Last push 2026-04-01 |
