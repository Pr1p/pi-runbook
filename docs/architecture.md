# 架构总览

> 状态：WIP

pi 是一个 monorepo（npm workspaces），包含以下包：

## 包依赖关系

```
pi-tui          （零依赖的 TUI 引擎）
    ^
    |
pi-ai           （多 provider LLM 统一接口）
    ^
    |
pi-agent-core   （agent runtime, 建立在 pi-ai 上）
    ^
    |
pi-coding-agent （编排三层，提供 CLI）
```

（依赖箭头待确认——需要验证是 agent-core 依赖 tui 还是 coding-agent 同时依赖两者）

## 数据流

（待补充：用户输入 -> TUI -> agent loop -> LLM -> streaming events -> TUI 渲染）

## 关键设计决策

（待补充：每层抽象为什么画在这里）
