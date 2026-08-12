# pi-runbook

Language: [中文](README.md) | English

A source-reading field guide for [Pi Agent Harness](https://github.com/earendil-works/pi): notes, design breakdowns, and experiments for understanding how a modern coding agent is built.

Pi is a small, composable coding agent harness. This repo asks:

> If you want to understand, extend, fork, or eventually contribute to a modern coding agent, which boundaries should you study first?

This is not official documentation, and it is not a complete tutorial. It is a field guide: a set of source-grounded notes that turn design choices in the codebase into readable references and runnable experiments.

## How to read

Start with the whole system, then move into boundaries:

1. [Core ideas](docs/pi-overview.md)
2. [Architecture](docs/architecture.md)
3. [Agent Core](docs/agent-core.md)
4. [Coding Agent](docs/coding-agent.md)
5. [Extension System](docs/extensions.md)
6. [Tool Execution / Safety](docs/tool-execution-safety.md)
7. [Session / Storage](docs/session-storage.md)
8. [Compaction](docs/compaction.md)
9. [Model Runtime / Auth](docs/model-runtime-auth.md)
10. [RPC / SDK](docs/rpc-sdk.md)

If you are interested in upstream participation, start here:

- [Contribution playbook](docs/contribution-playbook.md)
- [Engineering governance](docs/engineering.md)
- [Evals](docs/evals.md)

Most long-form notes are currently Chinese-first. English versions will be added after the corresponding topics stabilize.

## Reference

### Architecture

- [Core ideas](docs/pi-overview.md) — Pi's layering, core abstractions, and design direction.
- [Architecture](docs/architecture.md) — monorepo package structure and module boundaries.
- [Agent Core](docs/agent-core.md) — agent loop, events, and tool-call execution.
- [AI Package](docs/ai-package.md) — providers, models, streaming, and multi-provider abstraction.
- [Coding Agent](docs/coding-agent.md) — the product layer that turns agent-core into a coding agent.
- [TUI Engine](docs/tui-engine.md) — terminal UI, component model, and rendering approach.

### Runtime Boundaries

- [Extension System](docs/extensions.md) — extension loading, events, commands, tools, providers, and UI hooks.
- [Tool Execution / Safety](docs/tool-execution-safety.md) — `read` / `bash` / `edit` / `write`, hooks, truncation, mutation queues, and sandbox posture.
- [Session / Storage](docs/session-storage.md) — JSONL sessions, entry trees, branches, context projection, and SQLite backend.
- [Compaction](docs/compaction.md) — context compaction, split turns, branch summaries, and checkpoint thinking.
- [Model Runtime / Auth](docs/model-runtime-auth.md) — `models.json`, `auth.json`, OAuth, provider composition, and available model snapshots.
- [RPC / SDK](docs/rpc-sdk.md) — `createAgentSession()`, `AgentSessionRuntime`, JSONL RPC, and external UI integration.

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

## Writing principles

- Keep notes source-grounded.
- Prefer diagrams and small examples over long narration.
- Separate “what the code does” from “my current interpretation”.
- Turn fuzzy understanding into experiments.
- Remove machine-local details before publishing.

