# pi-runbook source and version index

Language: [中文](source-index.md) | English

This page maps each runbook topic back to the Pi source boundaries that support it.

## Reference snapshot

This maintenance pass observed upstream `main` at [`b7bb00b`](https://github.com/earendil-works/pi/commit/b7bb00b936dbe21b8e160b3e89efdec361846699) on 2026-08-20. Upstream `main` continues to move, so this commit is a review anchor rather than a permanent version pin.

The notes distinguish between:

- **Source fact**: directly checkable through the source entry points below.
- **Current interpretation**: a design explanation built from those facts; it should be rechecked when the upstream structure changes.

The links below point to the reference commit. Replace the commit with `main` when you want the latest implementation.

## Topics and source entry points

| Runbook topic | Primary source entry points | What to check |
| --- | --- | --- |
| [Visual architecture map](visual-map.md) | [`packages/agent`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/agent), [`packages/ai`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/ai), [`packages/coding-agent`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent), [`packages/tui`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/tui) | The central runtime and its boundaries |
| [Core ideas](pi-overview.en.md) | [`agent-loop.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/agent/src/agent-loop.ts), [`ai/types.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/ai/src/types.ts) | Layer responsibilities and event flow |
| [Architecture](architecture.en.md) | [`package.json`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/package.json), [`packages/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages) | Monorepo packages and dependency direction |
| [Agent Core](agent-core.en.md) | [`agent-loop.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/agent/src/agent-loop.ts), [`agent.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/agent/src/agent.ts), [`types.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/agent/src/types.ts) | Follow-ups, tool calls, events, and exits |
| [AI Package](ai-package.md) | [`ai/types.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/ai/src/types.ts), [`models.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/ai/src/models.ts), [`providers/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/ai/src/providers) | The common protocol, providers, and capabilities |
| [Coding Agent](coding-agent.md) | [`agent-session.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/agent-session.ts), [`core/tools/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/tools), [`core/extensions/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/extensions) | Product-layer composition for coding |
| [Extension System](extensions.en.md) | [`extensions/loader.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/extensions/loader.ts), [`runner.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/extensions/runner.ts), [`examples/extensions/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/examples/extensions) | Loading, trust, running, and examples |
| [Tool Execution / Safety](tool-execution-safety.md) | [`core/tools/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/tools) | Tool definitions, truncation, queues, and mutations |
| [Session / Storage](session-storage.md) | [`session-manager.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/session-manager.ts), [`session-format.md`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/docs/session-format.md) | Entry trees, branches, and context projection |
| [SQLite Session Backend](session-backend.md) | [`sqlite/repo.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/storage/sqlite-node/src/sqlite/repo.ts), [`sqlite/storage/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/storage/sqlite-node/src/sqlite/storage) | Repositories, migrations, leases, and FTS |
| [Compaction](compaction.md) | [`core/compaction/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/compaction) | Checkpoints, retained tails, and branch summaries |
| [Model Runtime / Auth](model-runtime-auth.md) | [`model-runtime.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/model-runtime.ts), [`provider-composer.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/provider-composer.ts), [`runtime-credentials.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/runtime-credentials.ts) | Providers, model catalogs, and credentials |
| [RPC / SDK](rpc-sdk.md) | [`core/sdk.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/sdk.ts), [`modes/rpc/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/modes/rpc) | In-process SDK and JSONL RPC |
| [Inter-process protocols](protocol-transport.md) | [`server/ipc/protocol.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/server/src/ipc/protocol.ts), [`server/ipc/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/server/src/ipc) | IPC, envelopes, and events |
| [Telemetry](telemetry.md) | [`core/telemetry.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/telemetry.ts), [`agent/observability.md`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/agent/docs/observability.md) | Span contracts and runtime observation |
| [Evals](evals.en.md) | [`pi-harness.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/evals/src/pi-harness.ts), [`smoke.eval.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/evals/src/smoke.eval.ts), [`extensions.eval.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/evals/src/extensions.eval.ts) | Real AgentSession runs and regressions |
| [Engineering governance](engineering.md) | [`package.json`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/package.json), [`scripts/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/scripts), [`CONTRIBUTING.md`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/CONTRIBUTING.md) | Quality gates, dependencies, release, and supply chain |
| [Contribution playbook](contribution-playbook.en.md) | [`CONTRIBUTING.md`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/CONTRIBUTING.md), [`SECURITY.md`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/SECURITY.md) | Issues, PRs, and security boundaries |
| [Bilingual docs strategy](bilingual-docs.md) | [runbook writing policy](../.agents/skills/pi-runbook-writer/SKILL.md) | Chinese exploration, English publication, and metadata |

## How to use this index

Start with the topic page, then return to its source entry points when a claim matters. If upstream has moved, record the change first and decide whether the page, an experiment, or only the interpretation needs an update.
