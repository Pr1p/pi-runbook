# pi-runbook

语言：中文 | [English](README.en.md)

一份关于 [Pi Agent Harness](https://github.com/earendil-works/pi) 的源码阅读笔记、设计拆解和实验手册。

Pi 是一个小而可组合的 coding agent harness。这个仓库试图回答一个问题：

> 如果要理解、扩展、二开，甚至参与维护一个现代 coding agent，应该从哪些边界看起？

这不是官方文档，也不是完整教程。它更像一份 field guide：把源码里的设计选择拆出来，整理成可阅读、可回看、可实验的文本。

## 怎么读

先读整体，再读边界：

1. [核心思想概览](docs/pi-overview.md)
2. [架构视觉地图](docs/visual-map.md)
3. [架构总览](docs/architecture.md)
4. [Agent Core](docs/agent-core.md)
5. [Coding Agent](docs/coding-agent.md)
6. [扩展系统](docs/extensions.md)
7. [工具执行与安全边界](docs/tool-execution-safety.md)
8. [Session / Storage](docs/session-storage.md)
9. [SQLite Session Backend](docs/session-backend.md)
10. [Compaction](docs/compaction.md)
11. [Model Runtime / Auth](docs/model-runtime-auth.md)
12. [RPC / SDK](docs/rpc-sdk.md)
13. [Telemetry](docs/telemetry.md)

如果你关心参与上游，可以直接看：

- [贡献路线](docs/contribution-playbook.md)
- [工程治理](docs/engineering.md)
- [行为评测](docs/evals.md)

## Reference

### Architecture

- [核心思想概览](docs/pi-overview.md) — Pi 的层级关系、核心抽象和设计取向。
- [架构视觉地图](docs/visual-map.md) — 用中心运行时、六个边界和对照表快速建立整体心智模型。
- [架构总览](docs/architecture.md) — monorepo 包结构和模块边界。
- [Agent Core](docs/agent-core.md) — agent loop、事件流、tool call 执行模型。
- [AI Package](docs/ai-package.md) — provider、model、streaming 和多模型抽象。
- [Coding Agent](docs/coding-agent.md) — 把 agent-core 放进编程场景的产品层。
- [TUI Engine](docs/tui-engine.md) — 终端 UI、组件系统和渲染思路。

### Runtime Boundaries

- [扩展系统](docs/extensions.md) — extension loader、事件、commands、tools、provider 和 UI hook。
- [工具执行与安全边界](docs/tool-execution-safety.md) — `read` / `bash` / `edit` / `write`、hooks、truncation、mutation queue 和 sandbox 取向。
- [Session / Storage](docs/session-storage.md) — JSONL session、entry tree、branch 和 context projection。
- [SQLite Session Backend](docs/session-backend.md) — `node:sqlite` adapter、repository、migrations、writer lease、FTS search 和 backend 拆分逻辑。
- [Compaction](docs/compaction.md) — context compaction、split turn、branch summary 和 checkpoint 思路。
- [Model Runtime / Auth](docs/model-runtime-auth.md) — `models.json`、`auth.json`、OAuth、provider composition 和可用模型快照。
- [RPC / SDK](docs/rpc-sdk.md) — `createAgentSession()`、JSONL RPC、CBOR 远程会话协议和外部 UI 集成。
- [进程间通信协议](docs/protocol-transport.md) — JSONL 与 CBOR 的取舍、为什么 agent 用事件流、client/server 拆分逻辑。
- [Telemetry](docs/telemetry.md) — vendor-neutral `TelemetryContext` / span schema、no-op / in-memory adapter，以及 agent runtime 的可观测性边界。

### Engineering

- [工程治理](docs/engineering.md) — CI/CD、依赖管理、供应链安全和维护风格。
- [行为评测](docs/evals.md) — eval harness、真实 AgentSession 和 LLM 行为回归。
- [贡献路线](docs/contribution-playbook.md) — issue、PR、`lgtmi` / `lgtm`、以及适合新参与者的切入方式。
- [双语文档策略](docs/bilingual-docs.md) — 中文优先、英文逐步稳定、未来 docs site 的结构设想。

## Repo layout

- `docs/` — 稳定的主题笔记和参考文档。
- `journal/` — 学习过程、临时判断和阶段性复盘。
- `experiments/` — 用小实验验证对源码设计的理解。
- `drafts/` — 还没整理成文档的想法。
- `.agents/skills/` — 仓库自带的 agent 写作/维护规范。

## Writing principles

- Keep notes source-grounded.
- Prefer diagrams and small examples over long narration.
- Separate “what the code does” from “my current interpretation”.
- Turn fuzzy understanding into experiments.
- Remove machine-local details before publishing.
