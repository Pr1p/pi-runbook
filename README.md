# pi-runbook

> 学习 [Pi Agent Harness](https://github.com/earendil-works/pi) 的知识实验室

语言：[中文](README.md) | [English](README.en.md)

通过拆解 pi 的源码，学习一个成熟 agent 框架的设计思想与工程实践。
这里不只是一份笔记，它是思考过程的记录、代码理解的验证场、通往参与 pi 维护的知识地基。

## 这是什么

- `docs/` 沉淀后的结构化理解（稳定状态）
- `journal/` 按时间线记录的思考过程（困惑、试错、顿悟）
- `experiments/` 可运行的实验代码，验证理解是否正确
- `drafts/` 还没想清楚的半成品想法

## 分支约定

- `main` 稳定基线，notes 持续更新，所有 experiments 可运行
- `experiment/*` 验证性实验分支，跑通后合回 main
- journal 始终在 main 上增量更新，不拉分支

## 阅读路径

1. 从 docs/pi-overview.md 了解整体结构
2. 跟着 journal/ 看理解是怎么一步步建立的
3. 看 docs/extensions.md 理解 pi 怎样把插件、工具、命令和事件接进 Agent
4. 看 docs/session-storage.md 理解会话、分支、上下文投影和存储 backend
5. 看 docs/compaction.md 理解上下文压缩、branch summary 和 checkpoint 思路
6. 看 docs/model-runtime-auth.md 理解 provider、models.json、auth.json、OAuth 和 extension provider
7. 看 docs/tool-execution-safety.md 理解工具调用、hooks、bash/edit/write 和安全边界
8. 看 docs/rpc-sdk.md 理解 SDK、RPC、JSON mode 和外部集成方式
9. 看 docs/bilingual-docs.md 理解中英双语维护和后续 docs site 路线
10. 看 docs/engineering.md 和 docs/evals.md 理解工程治理
11. 到 experiments/ 跑代码验证
12. 准备参与上游前，先看 docs/contribution-playbook.md

## 进度

- [x] 架构总览（monorepo 结构、包依赖关系）
- [x] TUI 引擎（差分渲染、组件系统、事件循环）
- [x] Agent Core（agent loop、事件流、tool 执行模型）
- [x] AI 包（多 provider 抽象、model 管理）
- [x] Coding Agent（三层编排）
- [x] 扩展系统（extension loader、事件、tool、reload、安全边界）
- [x] Session / Storage（JSONL、tree、branch、context projection、SQLite backend）
- [x] Compaction（上下文压缩、split turn、branch summary、extension hook）
- [x] Model Runtime / Auth（provider 组合、models.json、auth.json、OAuth、可用模型快照）
- [x] Tool Execution / Safety（tool lifecycle、bash/edit/write、hooks、truncation、mutation queue）
- [x] RPC / SDK（createAgentSession、AgentSessionRuntime、JSONL 协议、外部 UI 集成）
- [x] 双语文档结构（README 语言入口、翻译节奏、未来 docs/zh 与 docs/en 规划）
- [x] 工程实践（依赖管理、CI/CD、供应链安全）
- [x] 参与手册（issue/PR 门禁、lgtmi/lgtm、贡献路线）
- [x] 行为评测（evals、harness、agent 行为回归）

## Pi 源码位置

本地源码在 `C:\Users\DF\Documents\pi\pi-src`
