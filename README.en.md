# pi-runbook

Language: [中文](README.md) | English

A source-reading field guide for [Pi Agent Harness](https://github.com/earendil-works/pi): notes, design breakdowns, and experiments for understanding how a modern coding agent is built.

Pi is a small, composable coding agent harness. This repo asks:

> If you want to understand, extend, fork, or eventually contribute to a modern coding agent, which boundaries should you study first?

This is not official documentation, and it is not a complete tutorial. It is a field guide: a set of source-grounded notes that turn design choices in the codebase into readable references and runnable experiments.

## How to read

Full documentation map: [docs/README.en.md](docs/README.en.md).

Start with the whole system, then move into boundaries:

1. [Core ideas](docs/pi-overview.md)
2. [Visual architecture map](docs/visual-map.md)
3. [Architecture](docs/architecture.md)
4. [Agent Core](docs/agent-core.md)
5. [Coding Agent](docs/coding-agent.md)
6. [Extension System](docs/extensions.md)
7. [Tool Execution / Safety](docs/tool-execution-safety.md)
8. [Session / Storage](docs/session-storage.md)
9. [SQLite Session Backend](docs/session-backend.md)
10. [Compaction](docs/compaction.md)
11. [Model Runtime / Auth](docs/model-runtime-auth.md)
12. [RPC / SDK](docs/rpc-sdk.md)
13. [Telemetry](docs/telemetry.md)

If you want a visual-first path, start with the [visual architecture map](docs/visual-map.md) and the [visual atlas](docs/README.en.md#visual-atlas).

If you are interested in upstream participation, start here:

- [Contribution playbook](docs/contribution-playbook.md)
- [Engineering governance](docs/engineering.md)
- [Evals](docs/evals.md)

Most long-form notes are currently Chinese-first. English versions will be added after the corresponding topics stabilize.

## Reference

### Architecture

- [Core ideas](docs/pi-overview.md) — Pi's layering, core abstractions, and design direction.
- [Visual architecture map](docs/visual-map.md) — a quick mental model using the central runtime, six boundaries, and a comparison table.
- [Architecture](docs/architecture.md) — monorepo package structure and module boundaries.
- [Agent Core](docs/agent-core.md) — agent loop, events, and tool-call execution.
- [AI Package](docs/ai-package.md) — providers, models, streaming, and multi-provider abstraction.
- [Coding Agent](docs/coding-agent.md) — the product layer that turns agent-core into a coding agent.
- [TUI Engine](docs/tui-engine.md) — terminal UI, component model, and rendering approach.

### Runtime Boundaries

- [Extension System](docs/extensions.md) — extension loading, events, commands, tools, providers, and UI hooks.
- [Tool Execution / Safety](docs/tool-execution-safety.md) — `read` / `bash` / `edit` / `write`, hooks, truncation, mutation queues, and sandbox posture.
- [Session / Storage](docs/session-storage.md) — JSONL sessions, entry trees, branches, and context projection.
- [SQLite Session Backend](docs/session-backend.md) — `node:sqlite` adapter, repository, migrations, writer leases, FTS search, and backend separation.
- [Compaction](docs/compaction.md) — context compaction, split turns, branch summaries, and checkpoint thinking.
- [Model Runtime / Auth](docs/model-runtime-auth.md) — `models.json`, `auth.json`, OAuth, provider composition, and available model snapshots.
- [RPC / SDK](docs/rpc-sdk.md) — `createAgentSession()`, JSONL RPC, CBOR remote session protocol, and external UI integration.
- [Inter-process protocols](docs/protocol-transport.md) — JSONL vs CBOR, why agents stream events, and client/server split rationale.
- [Telemetry](docs/telemetry.md) — vendor-neutral `TelemetryContext` / span schemas, no-op / in-memory adapters, and the agent runtime observability boundary.

### Engineering

- [Engineering governance](docs/engineering.md) — CI/CD, dependency management, supply-chain safety, and maintenance style.
- [Evals](docs/evals.md) — eval harness, real AgentSession runs, and LLM behavior regression.
- [Contribution playbook](docs/contribution-playbook.md) — issues, PRs, `lgtmi` / `lgtm`, and entry points for new contributors.
- [Bilingual docs strategy](docs/bilingual-docs.md) — Chinese-first notes, progressive English versions, and a future docs-site shape.

## Repo layout

- `docs/` — stable topic notes and references.
- `journal/` — learning traces, temporary judgments, and retrospectives.
- `experiments/` — small experiments that validate source-level understanding.
- `drafts/` — ideas that are not yet ready for the reference docs.
- `.agents/skills/` — repo-local agent skills for writing and maintenance conventions.

## Writing principles

- Keep notes source-grounded.
- Prefer diagrams and small examples over long narration.
- Separate “what the code does” from “my current interpretation”.
- Turn fuzzy understanding into experiments.
- Remove machine-local details before publishing.
