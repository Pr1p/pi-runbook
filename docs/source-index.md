# pi-runbook 源码依据与版本索引

语言：[English](source-index.en.md) | 中文

这份索引回答一个问题：每篇 runbook 主题应该回到 Pi 的哪些源码边界去核对？

## 参考版本

本轮文档维护观察到的上游 `main` 快照是 [`b7bb00b`](https://github.com/earendil-works/pi/commit/b7bb00b936dbe21b8e160b3e89efdec361846699)，检查日期为 2026-08-20。上游 `main` 会继续变化，因此这里的 commit 是复查锚点，不是永久版本号。

文档中的判断分成两类：

- **源码事实**：可以从下表的源码入口直接核对。
- **当前理解**：基于这些事实形成的设计解释；如果上游发生结构变化，应重新验证。

源文件链接统一指向这个 commit。想看最新实现时，可以把链接里的 commit 替换成 `main`。

## 主题与源码入口

| Runbook 主题 | 首要源码入口 | 主要核对点 |
| --- | --- | --- |
| [架构视觉地图](visual-map.md) | [`packages/agent`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/agent)、[`packages/ai`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/ai)、[`packages/coding-agent`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent)、[`packages/tui`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/tui) | 中心运行时与外围边界 |
| [核心思想概览](pi-overview.md) | [`packages/agent/src/agent-loop.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/agent/src/agent-loop.ts)、[`packages/ai/src/types.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/ai/src/types.ts) | 四层职责和 Agent 事件流 |
| [架构总览](architecture.md) | [`package.json`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/package.json)、[`packages/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages) | monorepo 包与依赖方向 |
| [Agent Core](agent-core.md) | [`agent-loop.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/agent/src/agent-loop.ts)、[`agent.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/agent/src/agent.ts)、[`types.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/agent/src/types.ts) | follow-up、tool call、事件和退出路径 |
| [AI Package](ai-package.md) | [`packages/ai/src/types.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/ai/src/types.ts)、[`models.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/ai/src/models.ts)、[`providers/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/ai/src/providers) | 统一协议、Provider 和 capability |
| [Coding Agent](coding-agent.md) | [`agent-session.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/agent-session.ts)、[`core/tools/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/tools)、[`core/extensions/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/extensions) | 编程场景产品层的组合方式 |
| [TUI Engine](tui-engine.md) | [`packages/tui/src/ui.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/tui/src/ui.ts)、[`terminal.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/tui/src/terminal.ts)、[`components/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/tui/src/components) | 组件、终端和差分渲染 |
| [扩展系统](extensions.md) | [`core/extensions/loader.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/extensions/loader.ts)、[`runner.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/extensions/runner.ts)、[`examples/extensions/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/examples/extensions) | loader、trust、runner 和扩展实例 |
| [工具执行与安全边界](tool-execution-safety.md) | [`core/tools/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/tools) | 工具定义、截断、队列和文件变更 |
| [Session / Storage](session-storage.md) | [`session-manager.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/session-manager.ts)、[`docs/session-format.md`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/docs/session-format.md) | entry tree、branch 和 context projection |
| [SQLite Session Backend](session-backend.md) | [`packages/storage/sqlite-node/src/sqlite/repo.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/storage/sqlite-node/src/sqlite/repo.ts)、[`storage/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/storage/sqlite-node/src/sqlite/storage) | repository、migration、lease 和 FTS |
| [Compaction](compaction.md) | [`core/compaction/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/compaction) | checkpoint、retained tail 和 branch summary |
| [Model Runtime / Auth](model-runtime-auth.md) | [`model-runtime.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/model-runtime.ts)、[`provider-composer.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/provider-composer.ts)、[`runtime-credentials.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/runtime-credentials.ts) | Provider、model catalog 和认证 |
| [RPC / SDK](rpc-sdk.md) | [`core/sdk.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/sdk.ts)、[`modes/rpc/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/modes/rpc) | 同进程 SDK 和 JSONL RPC |
| [进程间通信协议](protocol-transport.md) | [`packages/server/src/ipc/protocol.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/server/src/ipc/protocol.ts)、[`ipc/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/server/src/ipc) | 本地 IPC、消息信封和事件 |
| [Telemetry](telemetry.md) | [`core/telemetry.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/coding-agent/src/core/telemetry.ts)、[`docs/observability.md`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/agent/docs/observability.md) | span contract 和 runtime 观测 |
| [行为评测](evals.md) | [`packages/evals/src/pi-harness.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/evals/src/pi-harness.ts)、[`smoke.eval.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/evals/src/smoke.eval.ts)、[`extensions.eval.ts`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/packages/evals/src/extensions.eval.ts) | 真实 AgentSession 和行为回归 |
| [工程治理](engineering.md) | [`package.json`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/package.json)、[`scripts/`](https://github.com/earendil-works/pi/tree/b7bb00b936dbe21b8e160b3e89efdec361846699/scripts)、[`CONTRIBUTING.md`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/CONTRIBUTING.md) | 质量门、依赖、发布和供应链 |
| [贡献路线](contribution-playbook.md) | [`CONTRIBUTING.md`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/CONTRIBUTING.md)、[`SECURITY.md`](https://github.com/earendil-works/pi/blob/b7bb00b936dbe21b8e160b3e89efdec361846699/SECURITY.md) | Issue、PR 和安全边界 |
| [双语文档策略](bilingual-docs.md) | [runbook 文档规范](../.agents/skills/pi-runbook-writer/SKILL.md) | 中文探索、英文发布和版本元数据 |

## 如何使用这份索引

先读主题页，遇到关键判断时回到对应源码入口；如果源码已经变化，先记录变化，再决定是更新正文、实验还是仅更新解释。不要把当前理解直接写成上游事实。
