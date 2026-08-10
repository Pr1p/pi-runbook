# TUI 引擎

> 状态：待开始

pi-tui 是一个从零写的终端 UI 库。核心特性：

- 差分渲染（differential rendering）：只重绘变化的行
- CSI 2026 synchronized output：原子写入，无闪烁
- 组件系统：Component interface（render + handleInput + invalidate）
- Overlay 系统：不替换底层内容的模态层

## 待研究

- 三策略渲染系统的具体实现
- Component 的缓存机制（invalidate 设计）
- Overlay focus 管理
- ANSI 宽度计算（visibleWidth / truncateToWidth）
