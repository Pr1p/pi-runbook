# Coding Agent

> 状态：第一轮理解完成

pi-coding-agent 把前三层组装成一个能直接用的 coding agent。它不是脚手架，不是环境配置器，而是 coding 场景的完整产品实现。

## 三大职责

### 1. 定义 coding 场景的 tool

把编程领域知识编码成 agent 能调用的 tool 集合。agent-core 不知道"文件"是什么，是 pi-coding-agent 通过 tool 告诉 agent"你可以读文件，参数是路径"。

七个内置 tool（core/tools/ 目录）：

| Tool | 做什么 | 关键参数 |
|---|---|---|
| read | 读文件（文本+图片），自动截断 | path, offset, limit |
| write | 写文件（覆盖） | path, content |
| edit | 基于文本匹配的局部编辑 | path, edits[{oldText, newText}] |
| bash | 执行 shell 命令 | command, timeout |
| grep | 搜索文件内容 | pattern, path |
| find | 按名称找文件 | pattern, path |
| ls | 列目录 | path |

每个 tool 还有 promptSnippet 和 promptGuidelines 字段，拼进 system prompt 告诉 LLM 怎么用。

### 2. 管理 session 完整生命周期

AgentSession（agent-session.ts）是中枢。管的不只是 agent loop，还有：

- Context compaction：对话太长时自动压缩旧消息成摘要，有手动和自动两种模式
- 错误自动重试：有重试次数上限和延迟
- Session 持久化：每次 message_end 触发存储，可恢复
- 模型切换和 thinking level 管理
- Extension 系统的加载、合并、hook 编排

### 3. 提供运行模式

同一个 AgentSession 支持三种模式（modes/ 目录）：

- interactive：TUI 交互模式（你终端里用的）
- rpc：编程接口模式，供别的程序调用
- print：一次性输出模式，跑完就退出

## Operations 接口：tool 的可插拔底层

每个 tool 内部不直接调文件系统，而是调 `this.operations.xxx`。这是依赖注入，不是插件系统。

```typescript
// read tool 的 Operations 接口
interface ReadOperations {
  readFile: (path: string) => Promise<Buffer>;
  access: (path: string) => Promise<void>;
  detectImageMimeType?: (path: string) => Promise<string | null>;
}

// 默认实现：本地文件系统
const defaultReadOperations = { ... };

// 可替换为：SSH 远程操作
const sshReadOperations = {
  readFile: (path) => sshRead(path),
  access: (path) => sshCheck(path),
  ...
};
```

agent 和 tool 的业务逻辑都不用改，只是底层"读写文件"被替换了。Gondolin 容器化方案就是这个原理——把 operations 换成走 micro-VM。

## 两个层面的可扩展性

不要混淆：

- Operations 接口 = 依赖注入（换底层实现，tool 本身不变）—— 类似 Spring 换 DataSource
- Extension 系统 = 插件生态（运行时加新 tool、command、provider、hook）—— 类似 VSCode 插件

## System Prompt 构建

buildSystemPrompt（system-prompt.ts）负责拼装 system prompt：

- 基础 prompt（包含工具说明、使用指南）
- 项目上下文文件（如 AGENTS.md）
- 技能（skills）
- 当前工作目录
- 自定义追加内容
