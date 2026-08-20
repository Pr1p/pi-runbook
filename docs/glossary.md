# Pi Runbook 概念索引

语言：[English](glossary.en.md) | 中文

这份索引把阅读 Pi 时反复出现的概念压缩成一个入口。它不是 API 参考，而是帮助你判断“这个词在架构的哪一层”。

| 概念 | 一句话解释 | 继续阅读 |
| --- | --- | --- |
| Agent harness | 负责把模型、工具、状态和交互组织成可运行 Agent 的底座。 | [核心思想概览](pi-overview.md) |
| Agent loop | 一次或多次模型调用与工具执行组成的任务循环。 | [Agent Core](agent-core.md) |
| Provider | 拥有认证、模型列表和请求行为的具体模型接入单元。 | [AI Package](ai-package.md) |
| Adapter | 把统一内部对象转换成某家供应商协议，再把响应转回来。 | [AI Package](ai-package.md) |
| Context | 当前要交给模型的系统提示、消息和工具集合。 | [Agent Core](agent-core.md) |
| Tool | 由名称、描述和参数 schema 定义的可调用能力。 | [工具执行与安全边界](tool-execution-safety.md) |
| Tool call | 模型提出的调用意图；真正修改环境的是后续执行层。 | [工具执行与安全边界](tool-execution-safety.md) |
| Extension | 在不改核心循环的情况下接入 command、tool、hook、provider 或 UI 的机制。 | [扩展系统](extensions.md) |
| Session | 保存消息、工具结果、分支和压缩信息的持久化任务历史。 | [Session / Storage](session-storage.md) |
| Context projection | 从完整 session 历史中选出当前发送给模型的上下文。 | [Session / Storage](session-storage.md) |
| Branch | 从 session 某个节点继续出的另一条任务路径。 | [Session / Storage](session-storage.md) |
| Compaction | 把旧上下文总结成 checkpoint，同时保留可继续工作的最近内容。 | [Compaction](compaction.md) |
| Checkpoint | 压缩或阶段转换后写入的可恢复摘要节点。 | [Compaction](compaction.md) |
| TUI | Terminal User Interface，负责终端组件、输入和渲染。 | [TUI 引擎](tui-engine.md) |
| CLI | Command-line interface，负责通过命令行启动或控制程序。 | [RPC / SDK](rpc-sdk.md) |
| SDK | 让其他 TypeScript/JavaScript 程序在同一进程内调用 Pi 的接口。 | [RPC / SDK](rpc-sdk.md) |
| RPC | 让外部进程通过结构化消息控制 Pi 的通信接口。 | [RPC / SDK](rpc-sdk.md) |
| Telemetry | 记录 runtime 行为的 span 和事件契约。 | [Telemetry](telemetry.md) |
| Eval | 用真实 Agent 运行验证行为是否发生回归的测试。 | [行为评测](evals.md) |
| `lgtmi` | 维护流程中偏实现与技术细节的认可信号。 | [贡献路线](contribution-playbook.md) |
| `lgtm` | 维护流程中更接近最终合并放行的认可信号。 | [贡献路线](contribution-playbook.md) |

## 记忆方式

```text
Provider 负责接入模型
Agent loop 负责编排运行
Tool 负责行动
Session 负责保存状态
Extension 负责外围扩展
TUI / SDK / RPC 负责接入方式
Telemetry / Eval 负责观察和验证
```
