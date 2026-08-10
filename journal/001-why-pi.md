# 001 - 为什么选 pi

日期：2026-08-10

## 在看什么

还没开始读源码。在评估 pi 这个项目值不值得投入时间深入学习。

## 当时的理解

pi 是一个 agent harness（agent 框架/底座），包含四个核心包：

- pi-tui: 自己写的终端 UI 引擎，差分渲染
- pi-agent-core: agent runtime，tool calling + 状态管理
- pi-ai: 统一多 provider LLM 接口
- pi-coding-agent: 把前三层编排成可用的 coding agent CLI

作者是 Mario Zechner (badlogic)，libGDX 的创造者。做了十五年跨平台框架，风格是"最小抽象、强个人主导、工程纪律严格"。

## 为什么选它而不是别的

对比了 codex 和 claude code：

- codex 本身是闭源的，opencodex 是第三方适配，不够"原汁原味"
- claude code 也是闭源的
- pi 完全开源，MIT 协议，代码量可控，一个人主导所以设计一致性高
- 工程实践值得学：依赖钉死、shrinkwrap、evals 做行为回归、供应链审计

## 接下来

从架构总览开始。先理清四个包的依赖关系和数据流向，再逐个深入。
