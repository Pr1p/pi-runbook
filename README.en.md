# pi-runbook

> A public learning lab for understanding [Pi Agent Harness](https://github.com/earendil-works/pi)

Language: [中文](README.md) | English

This repository is a structured runbook for studying Pi's source code, design ideas, and engineering practices.
It is not only a notes project. It is also a lab for experiments, public learning, and future upstream contribution.

## What this repo contains

- `docs/` — stable, structured notes
- `journal/` — chronological learning notes: confusion, experiments, and takeaways
- `experiments/` — runnable experiments that validate understanding
- `drafts/` — unfinished ideas and rough notes

## Branch convention

- `main` keeps the stable baseline: notes stay updated, experiments should be runnable
- `experiment/*` branches are for exploratory implementation and validation
- `journal/` is updated incrementally on `main`

## Reading path

Most detailed notes are currently written in Chinese first. English translations will be added progressively after each topic stabilizes.

1. Start with `docs/pi-overview.md` for the high-level architecture
2. Follow `journal/` to see how the understanding was built over time
3. Read `docs/extensions.md` for Pi's extension, tool, command, event, and provider ecosystem
4. Read `docs/session-storage.md` for sessions, branches, context projection, and storage backends
5. Read `docs/compaction.md` for context compaction, branch summaries, and checkpoint thinking
6. Read `docs/model-runtime-auth.md` for providers, models, auth, OAuth, and runtime model snapshots
7. Read `docs/tool-execution-safety.md` for tool lifecycle, bash/edit/write, hooks, truncation, and safety boundaries
8. Read `docs/rpc-sdk.md` for SDK, RPC, JSON mode, and external integrations
9. Read `docs/engineering.md` and `docs/evals.md` for engineering governance and behavior evaluation
10. Run experiments under `experiments/`
11. Before contributing upstream, read `docs/contribution-playbook.md`

## Bilingual docs plan

The current source-of-truth language is Chinese because this repo is also a thinking log.
The target structure is bilingual:

- Chinese notes remain the primary thinking source during active exploration.
- English pages are added after each topic becomes stable.
- The README already supports language switching.
- See `docs/bilingual-docs.md` for the translation workflow and naming convention.

## Local Pi source

The local Pi source checkout is expected at:

```text
C:\Users\DF\Documents\pi\pi-src
```

