# Agent Core

> 状态：待开始

pi-agent-core 是 agent runtime，处理 tool calling 和状态管理。

## 关键概念

- AgentMessage vs LLM Message：AgentMessage 支持自定义类型，convertToLlm 负责过滤转换
- 消息流：AgentMessage[] -> transformContext -> convertToLlm -> LLM
- 事件流：agent_start -> turn_start -> message_start/update/end -> tool_execution_* -> turn_end -> agent_end
- Tool 执行模式：parallel（默认）/ sequential
- Steering / Follow-up：运行时注入消息的机制

## 待研究

- agent loop 的完整状态机
- tool 并行执行的具体编排逻辑
- beforeToolCall / afterToolCall hook 的执行时机
- shouldStopAfterTurn 的使用场景
- thinkingBudgets 机制
