# pi-runbook 文档索引

语言：中文 | [English](README.en.md)

![Pi Agent Harness visual map](assets/pi-visual-map.png)

这里是 `pi-runbook` 的文档地图。根目录 README 负责说明这个仓库是什么；本页负责回答：

> 想系统理解 Pi，应该按什么顺序读？每篇文档解决哪类问题？

这些文档是源码阅读笔记，不是上游官方文档。它们更像一份 field guide：先用图建立心智模型，再用源码观察、解释和实验路线把理解落下来。

## 推荐阅读路线

### 1. 先建立整体模型

适合第一次进入项目时阅读。

1. [架构视觉地图](visual-map.md)
2. [核心思想概览](pi-overview.md)
3. [架构总览](architecture.md)

读完这一组，应该能回答：Pi 是产品、框架，还是 agent 底座？`pi-ai`、`pi-agent-core`、`pi-tui`、`pi-coding-agent` 分别站在哪一层？

### 2. 再拆 runtime 边界

适合理解 agent 如何运行、如何调用模型、如何执行工具。

1. [Agent Core](agent-core.md)
2. [AI Package](ai-package.md)
3. [Coding Agent](coding-agent.md)
4. [工具执行与安全边界](tool-execution-safety.md)
5. [扩展系统](extensions.md)

读完这一组，应该能回答：模型输出如何变成工具调用？工具结果如何回到上下文？core、产品层和 extension policy 的边界在哪里？

### 3. 然后看状态、记忆和可观测性

适合理解长任务、分支、压缩、评测和 telemetry。

1. [Session / Storage](session-storage.md)
2. [SQLite Session Backend](session-backend.md)
3. [Compaction](compaction.md)
4. [Telemetry](telemetry.md)
5. [行为评测](evals.md)

读完这一组，应该能回答：Pi 如何保存历史？上下文太长时怎么继续？怎样用 span 和 evals 让 agent 行为可观察、可回归？

### 4. 如果要把 Pi 嵌入别的系统

适合做 IDE、Web UI、远程 agent 服务或自定义产品。

1. [RPC / SDK](rpc-sdk.md)
2. [进程间通信协议](protocol-transport.md)
3. [TUI Engine](tui-engine.md)
4. [Model Runtime / Auth](model-runtime-auth.md)

读完这一组，应该能回答：人怎么用 Pi？程序怎么控制 Pi？本地 JSONL RPC、远程 CBOR 协议、SDK 和 TUI 分别适合什么场景？

### 5. 如果要参与上游

适合准备 issue、PR 或长期观察维护方式。

1. [工程治理](engineering.md)
2. [贡献路线](contribution-playbook.md)
3. [双语文档策略](bilingual-docs.md)

读完这一组，应该能回答：为什么 Pi 有 `lgtmi` / `lgtm` 门禁？什么样的 issue 对维护者有价值？这个 runbook 如何变成可公开协作的学习实验室？

## 视觉地图目录

| 图 | 对应文档 | 解决的问题 |
| --- | --- | --- |
| `pi-visual-map.png` | [架构视觉地图](visual-map.md) | Pi 的整体心智模型是什么？ |
| `pi-core-architecture.png` | [核心思想概览](pi-overview.md) | 四层架构如何组合？ |
| `pi-monorepo-map.png` | [架构总览](architecture.md) | monorepo 包边界如何分布？ |
| `agent-core-loop-map.png` | [Agent Core](agent-core.md) | agent loop 如何停止、继续和发事件？ |
| `ai-provider-layer-map.png` | [AI Package](ai-package.md) | 多 provider 如何收敛成统一 LLM 接口？ |
| `coding-agent-facade-map.png` | [Coding Agent](coding-agent.md) | 产品层如何组合工具、session、TUI 和 extension？ |
| `tui-engine-map.png` | [TUI Engine](tui-engine.md) | 终端 UI 引擎为什么能独立于 agent？ |
| `extension-system-map.png` | [扩展系统](extensions.md) | extension 如何接入 commands、tools、hooks、UI？ |
| `tool-execution-boundary-map.png` | [工具执行与安全边界](tool-execution-safety.md) | 模型 tool call 到真实执行之间有哪些关口？ |
| `session-abstraction-map.png` | [Session / Storage](session-storage.md) | session 抽象如何允许替换存储后端？ |
| `session-backend-map.png` | [SQLite Session Backend](session-backend.md) | SQLite backend 如何拆 repository 和 search？ |
| `compaction-checkpoints-map.png` | [Compaction](compaction.md) | 上下文压缩为什么是 checkpoint，不是删历史？ |
| `model-runtime-map.png` | [Model Runtime / Auth](model-runtime-auth.md) | provider、model catalog 和凭据如何汇合？ |
| `sdk-rpc-surfaces-map.png` | [RPC / SDK](rpc-sdk.md) | SDK、JSONL RPC 和 CBOR remote 如何并存？ |
| `protocol-transports-map.png` | [进程间通信协议](protocol-transport.md) | JSONL 与 CBOR 分别服务哪些约束？ |
| `telemetry-map.png` | [Telemetry](telemetry.md) | 可观测性为什么先做 contract，而不是 exporter？ |
| `evals-map.png` | [行为评测](evals.md) | evals 如何守住真实 LLM 行为回归？ |
| `engineering-governance-map.png` | [工程治理](engineering.md) | CI、发布、供应链和门禁如何保护维护者注意力？ |
| `contribution-trust-path-map.png` | [贡献路线](contribution-playbook.md) | `lgtmi` / `lgtm` 是怎样的信任路径？ |
| `bilingual-strategy-map.png` | [双语文档策略](bilingual-docs.md) | 中文探索和英文发布如何分工？ |

## 主题索引

### 核心架构

- [架构视觉地图](visual-map.md)
- [核心思想概览](pi-overview.md)
- [架构总览](architecture.md)
- [Agent Core](agent-core.md)
- [AI Package](ai-package.md)
- [Coding Agent](coding-agent.md)
- [TUI Engine](tui-engine.md)

### Runtime 边界

- [扩展系统](extensions.md)
- [工具执行与安全边界](tool-execution-safety.md)
- [Session / Storage](session-storage.md)
- [SQLite Session Backend](session-backend.md)
- [Compaction](compaction.md)
- [Model Runtime / Auth](model-runtime-auth.md)
- [Telemetry](telemetry.md)

### 外部接口

- [RPC / SDK](rpc-sdk.md)
- [进程间通信协议](protocol-transport.md)

### 工程与协作

- [工程治理](engineering.md)
- [行为评测](evals.md)
- [贡献路线](contribution-playbook.md)
- [双语文档策略](bilingual-docs.md)

## 阅读原则

- 先看图，再看正文。
- 先读边界，再读实现细节。
- 区分“源码事实”和“当前理解”。
- 能写实验验证的判断，优先放进 `experiments/`。
- 准备发上游前，先把问题压缩成短、具体、可复现的 issue 或 PR 描述。
