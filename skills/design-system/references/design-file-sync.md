# The Design File and Sync

The design file is where the owner sees and approves each foundation. It holds the same pages, sections, text, and mockups as `.agents/foundations/`. **Keep the rules as text in both places**, not only in code and not only in the canvas.

## Paper (the default)

[Paper](https://paper.design) is a design canvas built on HTML and CSS, and its MCP server lets an agent read and write the open file. That makes it a good fit: mockups are real HTML and CSS, so they can use the same token values the code uses.

- **Setup:** the operator installs Paper Desktop and connects their agent from its MCP panel ([docs](https://paper.design/docs/mcp)). Desktop has to be open with the file loaded for reads and writes. Check what's connected before you ask.
- **Read the tool list first.** Use the Paper MCP's own tools and instructions as the session exposes them. Don't guess tool names or parameters. If calls start failing in a long session, restart the session.
- **One page per foundation** (or one top-level frame per foundation if the file has no pages), with sections stacked top to bottom: sections with their mockups, then edge cases, then Instructions for agents.
- **Write tokens into the file from the tokens file.** Never type values by hand in the canvas.
- **Read changes back.** If the owner edits a mockup or the text in Paper, pull the change into the markdown page and, when it changes a value, into the tokens file (with the owner's yes) before anything else is built on it.
- **Plan limits:** Paper's MCP usage can be capped by plan. If a call is refused for a limit, say so and fall back to the HTML pages below.

## No canvas connected

Build each mockup as a small HTML file in `.agents/foundations/mockups/<foundation>.html` that links the real tokens file, one anchor per section (`#nested-corners`). The page's `Mockup:` lines link to those anchors. This is a complete fallback, not a lesser one: the mockups can't drift because they render from the tokens.

Any other canvas works the same way if it can read and write through an MCP or an export. The rules above apply unchanged.

## Sync order

| Change | Order |
|---|---|
| A value | Tokens file → run the check (it flags every page row that disagrees) → pages → design-file mockups |
| A rule, or a new edge case | Page and design file → owner approves → code → check |
| An owner edit in the design file | Pull it into the page (and the tokens, if it's a value) → owner confirms → code → check |
| An agent broke a covered rule | Fix the code. The page is fine. Add a check if one could have caught it |

After every sync, update the page's **Last synced** line (date and commit) and the index in `.agents/foundations/README.md`.
