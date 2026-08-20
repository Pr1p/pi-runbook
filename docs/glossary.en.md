# Pi Runbook glossary

Language: [中文](glossary.md) | English

This is a navigation aid for recurring Pi concepts. It is not an API reference; it tells you which architectural boundary a term belongs to.

| Term | Short explanation | Continue with |
| --- | --- | --- |
| Agent harness | A runtime that composes models, tools, state, and interaction into an Agent. | [Core ideas](pi-overview.en.md) |
| Agent loop | A task cycle made of model calls, tool execution, and feedback. | [Agent Core](agent-core.en.md) |
| Provider | A concrete model integration unit that owns auth, models, and request behavior. | [AI Package](ai-package.md) |
| Adapter | The translation boundary between Pi's internal objects and a vendor protocol. | [AI Package](ai-package.md) |
| Context | The system prompt, messages, and tools currently sent to a model. | [Agent Core](agent-core.en.md) |
| Tool | A callable capability described by a name, description, and parameter schema. | [Tool Execution / Safety](tool-execution-safety.md) |
| Tool call | A model-produced intent; the execution layer performs the real mutation. | [Tool Execution / Safety](tool-execution-safety.md) |
| Extension | A way to add commands, tools, hooks, providers, or UI without rewriting the core loop. | [Extension System](extensions.en.md) |
| Session | Persistent task history containing messages, tool results, branches, and compaction data. | [Session / Storage](session-storage.md) |
| Context projection | The current model context selected from the complete session history. | [Session / Storage](session-storage.md) |
| Branch | An alternate task path continued from a session node. | [Session / Storage](session-storage.md) |
| Compaction | Summarizing older context into a checkpoint while retaining enough recent context to continue. | [Compaction](compaction.md) |
| Checkpoint | A resumable summary written at a context or lifecycle boundary. | [Compaction](compaction.md) |
| TUI | Terminal User Interface: components, input, and rendering for the terminal. | [TUI Engine](tui-engine.md) |
| CLI | Command-line interface used to start or control a program. | [RPC / SDK](rpc-sdk.md) |
| SDK | An in-process API for other TypeScript/JavaScript programs to call Pi. | [RPC / SDK](rpc-sdk.md) |
| RPC | A structured message interface for an external process to drive Pi. | [RPC / SDK](rpc-sdk.md) |
| Telemetry | Span and event contracts for observing runtime behavior. | [Telemetry](telemetry.md) |
| Eval | A behavior regression test that runs an Agent rather than only a pure function. | [Evals](evals.en.md) |
| `lgtmi` | A maintenance signal focused on implementation and technical review. | [Contribution playbook](contribution-playbook.en.md) |
| `lgtm` | A maintenance signal closer to final approval for merge. | [Contribution playbook](contribution-playbook.en.md) |

## A compact mental model

```text
Provider integrates models
Agent loop orchestrates work
Tools perform actions
Sessions preserve state
Extensions add surrounding capability
TUI / SDK / RPC provide entry points
Telemetry / Evals observe and verify behavior
```
