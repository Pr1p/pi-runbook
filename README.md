# pi-runbook

> 学习 [Pi Agent Harness](https://github.com/earendil-works/pi) 的知识实验室

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

1. 从 docs/architecture.md 了解整体结构
2. 跟着 journal/ 看理解是怎么一步步建立的
3. 到 experiments/ 跑代码验证

## 进度

- [ ] 架构总览（monorepo 结构、包依赖关系）
- [ ] TUI 引擎（差分渲染、组件系统、事件循环）
- [ ] Agent Core（agent loop、事件流、tool 执行模型）
- [ ] AI 包（多 provider 抽象、model 管理）
- [ ] Coding Agent（三层编排）
- [ ] 工程实践（依赖管理、evals、供应链安全）

## Pi 源码位置

本地源码在 `C:\Users\DF\Documents\pi\pi-src`
