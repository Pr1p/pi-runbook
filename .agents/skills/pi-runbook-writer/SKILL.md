---
name: pi-runbook-writer
description: Use when creating, editing, or polishing pi-runbook content: README/index pages, docs, journal notes, experiments, bilingual documentation, source-reading summaries, public-facing wording, and removing local/private implementation traces. Enforce a source-grounded field-guide/reference style inspired by concise text-first knowledge repositories.
---

# Pi Runbook Writer

Use this skill to keep `pi-runbook` readable as a public source-reading field guide, not an internal work log.

## Core posture

- Write for an outside reader who has not followed the conversation.
- Prefer calm reference prose over progress-report prose.
- Keep claims grounded in source files, official docs, or runnable experiments.
- Separate “what the code does” from “my current interpretation”.
- Remove machine-local details before publishing.

## Page types

### README / index pages

Use a concise field-guide structure:

1. One-line project positioning.
2. A short “why this exists” paragraph.
3. “How to read” path.
4. Reference sections grouped by topic.
5. Repo layout and writing principles if helpful.

Avoid:

- progress checklists;
- local paths;
- “what we just did” wording;
- implementation diary details;
- over-explaining repository management.

### `docs/` topic pages

Use this shape by default:

1. What this page explains.
2. Why the boundary matters.
3. Key source observations.
4. Diagram or table when structure is easier visually.
5. Current interpretation.
6. Experiments or contribution angles.

Keep the voice explanatory and source-grounded. It is fine to include interpretation, but mark it as interpretation rather than fact.

### `journal/`

Journal entries may be more conversational and chronological. Preserve useful confusion, false starts, and changes in understanding. Still remove private paths, secrets, and unrelated machine state before publishing.

### `experiments/`

Each experiment should include:

- purpose;
- setup;
- command to run;
- expected observation;
- what the result proves or disproves.

Prefer small experiments that validate one design boundary.

## Bilingual policy

- Chinese is the primary thinking language during active exploration.
- English is added after a topic stabilizes.
- Do not mechanically translate every sentence.
- English versions should be clearer, more neutral, and more external-reader oriented.
- Keep bilingual entry points linked from README/index pages.

## Public hygiene checklist

Before committing public docs, check for:

- machine-local absolute paths or user-home-specific paths;
- API keys, tokens, emails, or account-specific details;
- temporary screenshots or clipboard filenames;
- “I just ran” / “we just did” process narration in reference docs;
- stale TODOs that should live in `drafts/` instead;
- links that only work on the local machine.

## Style preferences

- Use short sections with descriptive headings.
- Use lists and tables for scanability.
- Use Mermaid diagrams only when they clarify relationships.
- Prefer “field guide”, “reference”, “boundary”, “runtime”, “experiment” language.
- Avoid hype. Let the design observations carry the argument.
