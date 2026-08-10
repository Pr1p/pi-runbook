# Experiments

可运行的实验代码，用来验证对 pi 源码的理解。

每个实验一个目录，包含自己的 package.json 或说明文件。

## 计划中的实验

- `01-minimal-tui` 最小 TUI demo：用 pi-tui 跑一个文本+输入框
- `02-diff-render` 理解差分渲染：对比全屏重绘和差分重绘的输出差异
- `03-agent-loop` 手写一个最简 agent loop，理解事件流
- `04-tool-parallel` 复刻 tool 并行执行模型
- `05-convert-to-llm` 理解 AgentMessage 到 LLM Message 的转换

## 约定

- 实验代码不需要完美，能验证理解就行
- 每个实验写一个简短的 README 说明：验证什么、怎么跑、结论是什么
- 搞破坏性的实验开 `experiment/*` 分支
