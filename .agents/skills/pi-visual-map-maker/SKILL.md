---
name: pi-visual-map-maker
description: Create and maintain consistent hand-drawn architecture visuals for pi-runbook. Use when replacing Mermaid architecture diagrams with polished PNG/SVG-style explanatory maps, adding chapter header diagrams, auditing visual consistency, inserting generated assets into docs, or planning which Pi runtime/package/session/tool/protocol/evals diagrams should become visual maps.
---

# Pi Visual Map Maker

## Overview

Use this skill to make `pi-runbook` diagrams feel like a coherent field guide: source-grounded, hand-drawn, readable, and visually consistent. It is for architecture and boundary maps, not every small flowchart.

Pair this with `pi-runbook-writer` when editing documentation prose around the visual.

## When to draw

Prefer a hand-drawn visual asset when the diagram is a reader's first mental model for a topic:

- chapter header architecture maps;
- package/layer relationship diagrams;
- runtime boundary maps;
- product-shape comparison tables;
- large "where does this fit?" diagrams;
- diagrams the reader should remember after closing the page.

Keep Mermaid when the value is editability and exact sequence logic:

- sequence diagrams;
- short state machines;
- small algorithm flows;
- branching/cut-point examples;
- diagrams that are likely to change line-by-line with source details.

Default pattern: add a hand-drawn PNG first, keep the Mermaid below as the maintainable text version unless the user asks to remove it.

## Visual language

Use the existing `docs/assets/pi-visual-map.png` as the style anchor when available.

Style:

- soft pale green grid-paper background;
- rounded white canvas;
- pencil-like grey strokes;
- blue numbered circles for major modules;
- simple line icons, not decorative illustration;
- sparse, large labels;
- one center concept with 4-6 surrounding boundary cards;
- optional compact comparison table at the bottom;
- 4:3 aspect ratio by default;
- English labels for broader shareability, with short Chinese labels only when the surrounding page is Chinese-heavy.

Avoid:

- tiny text;
- dense paragraphs inside the image;
- unverified logos or brand marks;
- too many arrows;
- claims not grounded in source docs;
- image-only explanations with no accessible text nearby.

## Workflow

1. Identify diagram candidates.
   - Search Markdown for ` ```mermaid ` and existing image links.
   - Classify each diagram as architecture, boundary, workflow, sequence, or small explainer.
   - Replace only architecture/boundary/header visuals by default.

2. Ground the diagram.
   - Read the relevant page section and linked source-grounded docs.
   - Extract only the concepts that should appear in the visual.
   - Prefer 5-7 major boxes over a complete dependency graph.

3. Generate the image.
   - Use image generation for the bitmap visual.
   - If an existing visual asset is available, use it as a style reference.
   - Ask for user review when the image contains many labels or a new conceptual framing.

4. Install the asset.
   - Put final images under `docs/assets/`.
   - Use lowercase hyphenated names: `pi-visual-map.png`, `session-backend-map.png`, `telemetry-map.png`.
   - Insert Markdown image links with repo-relative paths, e.g. `![Pi visual map](assets/pi-visual-map.png)`.
   - Do not reference temporary generated-image paths or clipboard files in committed docs.

5. Keep text maintainable.
   - Keep or add a Mermaid/text version below the image when it helps future maintenance.
   - Add one short paragraph explaining what to notice in the image.
   - Avoid duplicating all labels from the image in prose unless needed for accessibility.

6. Validate before committing.
   - Run `git diff --check`.
   - Search for local paths: `C:\`, `AppData`, `clipboard`, generated image temp folders.
   - Confirm the asset is in `docs/assets/` and referenced by docs.
   - Keep image file size reasonable for GitHub docs; prefer under 2 MB unless visual quality would materially suffer.

## Prompt pattern

Use a prompt like:

```text
Create a clean hand-drawn architecture infographic for "[topic]".
Use a soft pale green grid-paper background, rounded white canvas, thin pencil-like grey lines, blue numbered circles, and simple line icons.
Title: "[short title]".
Subtitle: "[one-line positioning]".
Center box: "[central runtime/boundary]".
Surrounding cards:
1. "[boundary]" — "[short source-grounded detail]"
...
Add a compact bottom comparison table only if it materially helps.
Keep all text large, crisp, horizontally aligned, and readable.
Avoid clutter, tiny labels, and unsupported claims.
Modern sketch-notes style, high resolution, 4:3 aspect ratio.
```

## Replacement policy

For bulk replacement requests:

1. First list all diagram candidates with file/line and recommended action.
2. Ask or infer a small batch, usually 3-5 P0 architecture diagrams.
3. Generate one visual at a time when labels are complex; batch only simple header maps.
4. Commit only after the user approves the style or the request explicitly says to proceed.

Good P0 targets in this repo usually include:

- `pi-overview.md` top-level architecture;
- `architecture.md` package/layer map;
- `extensions.md` extension system map;
- `model-runtime-auth.md` model runtime map;
- `session-storage.md` session abstraction map;
- `session-backend.md` backend structure map;
- `telemetry.md` telemetry adapter map;
- `tool-execution-safety.md` tool execution boundary;
- `evals.md` testing/evals pyramid;
- `engineering.md` governance map.

Do not turn every Mermaid diagram into an image. The goal is stronger understanding, not decoration.
