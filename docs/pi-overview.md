# Pi 核心思想概览

## 一句话定义

pi 是一个开源的 agent 框架，外加一个基于这个框架的 coding agent 实现。不绑定任何模型厂商，用 TypeScript 写，MIT 协议。

## 作者

Mario Zechner（badlogic），奥地利工程师，libGDX 创造者。做了十五年跨平台游戏框架，风格是"最小抽象、强个人主导、工程纪律严格"。pi 的设计哲学跟 libGDX 一脉相承——薄抽象、分层清晰、每一层独立可用。

## 四层架构

```mermaid
flowchart TB
    User["👤 用户 / 终端"]

    subgraph Product["产品层"]
        Coding["pi-coding-agent<br/>Coding Agent 成品<br/>Tool 定义 · Session 管理 · TUI 接入"]
    end

    subgraph Brain["运行时层"]
        Agent["pi-agent-core<br/>Agent Runtime<br/>对话状态 · Tool 编排 · 事件流"]
        TUI["pi-tui<br/>终端 UI 引擎<br/>差分渲染 · 键盘输入 · 组件系统"]
    end

    subgraph Model["模型层"]
        AI["pi-ai<br/>统一 LLM API<br/>Provider 抽象 · Streaming · Token"]
        Providers["OpenAI · Anthropic · Google<br/>Mistral · AWS Bedrock · GLM 等"]
    end

    User -->|输入| Coding
    Coding -->|prompt| Agent
    Coding -->|渲染| TUI
    Agent -->|调用| AI
    AI -->|HTTP| Providers
    TUI -->|显示| User

    style Coding fill:#4a9eff,color:#fff
    style Agent fill:#f59e0b,color:#fff
    style TUI fill:#10b981,color:#fff
    style AI fill:#8b5cf6,color:#fff
```

关键点：tui 和 agent-core 是平级的，互不依赖。coding-agent 同时依赖两者，把它们编排在一起。

### pi-tui — 终端渲染引擎

跟 agent 无关的独立 UI 层。做两件事：把字画到终端上（差分渲染 + CSI 2026 原子写入），和处理键盘输入（含中文 IME）。依赖只有两个 npm 包。可用来写任何终端应用。

### pi-ai — LLM 统一抽象层

各家厂商的 API 格式都不同（OpenAI 的 function calling、Anthropic 的 tool use、Google 的 function declaration），这一层把它们翻译成统一接口。上层只需说"我要用 Claude Sonnet"，不用关心底层格式。拉了 11 个 provider SDK。

### pi-agent-core — Agent 运行时

整个项目的大脑。管对话状态、编排 tool call 执行（默认并行）、处理多轮循环的事件流、支持运行时打断（steering）和追加指令（follow-up）。不知道"代码"是什么概念，只知道"给我 model + tools + system prompt，我跑 agent loop"。

### pi-coding-agent — Coding Agent 产品

把三层组装成能直接用的成品。承担三个角色：tool 定义、session 管理、TUI 接入。

## Agent 运行时序

用户发一条消息后，pi 内部的完整流转：

```mermaid
sequenceDiagram
    participant U as 👤 用户
    participant C as pi-coding-agent
    participant A as pi-agent-core
    participant AI as pi-ai
    participant L as LLM
    participant T as Tools
    participant TUI as pi-tui

    U->>TUI: 输入消息
    TUI->>C: 提交
    C->>A: prompt()

    rect rgb(59, 130, 246, 0.1)
        Note over A,L: Turn 1 — LLM 决定调用工具
        A->>AI: 请求模型
        AI->>L: Streaming API
        L-->>AI: 返回 Tool Call
        AI-->>A: tool_execution_start
        A->>T: 并行执行 read_file / bash 等
        T-->>A: Tool Result
        A->>AI: 带结果再次请求
    end

    rect rgb(34, 197, 94, 0.1)
        Note over A,L: Turn 2 — LLM 生成最终回答
        AI->>L: Streaming API
        L-->>AI: 文本流式返回
        AI-->>A: message_update (delta)
        A-->>C: agent_end
    end

    C->>TUI: 更新界面
    TUI-->>U: 显示结果
```

注意中间的"Turn 1"和"Turn 2"——agent loop 会自动多轮：LLM 如果决定调 tool，执行完 tool 后会拿着结果再问一次 LLM，直到 LLM 认为可以给出最终回答为止。

## 消息管道

每轮 LLM 调用前，消息要经过两步转换：

```mermaid
flowchart LR
    Raw["AgentMessage[]<br/>（含自定义类型、通知、UI 状态等）"]
    --> Transform["transformContext<br/>裁剪旧消息 / 注入外部上下文"]
    --> Converted["convertToLlm<br/>过滤非 LLM 类型<br/>转成标准 user/assistant/toolResult"]
    --> LLM["Message[]<br/>发送给 LLM"]

    style Raw fill:#f59e0b,color:#fff
    style Transform fill:#8b5cf6,color:#fff
    style Converted fill:#8b5cf6,color:#fff
    style LLM fill:#4a9eff,color:#fff
```

这个两段式设计让 pi 可以在同一份对话记录里混入 UI 专用的消息类型（比如"通知"、"状态标记"），不会干扰 LLM 的上下文。

## 事件流

一次完整的 prompt() 调用产生的事件序列：

```mermaid
flowchart LR
    S["agent_start"] --> TS1["turn_start"]
    TS1 --> MS_U["message_start<br/>(user)"]
    MS_U --> ME_U["message_end<br/>(user)"]
    ME_U --> MS_A["message_start<br/>(assistant)"]
    MS_A --> MU["message_update × N<br/>(流式 delta)"]
    MU --> ME_A["message_end<br/>(assistant)"]

    ME_A --> TE1["turn_end"]
    TE1 --> Tool{"有 tool call?"}

    Tool -->|是| TES["tool_execution_start"]
    TES --> TEU["tool_execution_update<br/>(可选进度)"]
    TEU --> TEE["tool_execution_end"]
    TEE --> TR["message (toolResult)"]
    TR --> TS2["turn_start"]
    TS2 --> MS_A

    Tool -->|否| AE["agent_end"]

    style S fill:#10b981,color:#fff
    style AE fill:#ef4444,color:#fff
    style Tool fill:#f59e0b,color:#fff
```

## 为什么这么拆

核心逻辑：变化频率不同的东西必须隔离。

| 层 | 变化频率 | 外部依赖数 | 消费场景 |
|---|---|---|---|
| pi-tui | 极低（渲染逻辑几个月不动） | 2 | 任何终端应用 |
| pi-agent-core | 中（agent 机制偶尔迭代） | 4 | 后台 agent / 自定义 agent |
| pi-ai | 高（provider 生态每周变） | 11 | 任何需要调 LLM 的场景 |
| pi-coding-agent | 高（功能持续加） | 18 | 直接当 coding agent 用 |

如果揉在一起，每次更新一个 provider SDK 都得重新构建测试整个渲染层。拆开之后，各层独立演化、独立测试、独立被复用。

消费者可以各取所需：

```mermaid
flowchart LR
    subgraph 场景A["后台 Agent 服务"]
        A1["pi-agent-core"] --> A2["pi-ai"]
    end

    subgraph 场景B["非 Agent 终端应用"]
        B1["pi-tui"]
    end

    subgraph 场景C["完整 Coding Agent"]
        C1["pi-coding-agent"]
        C1 --> C2["pi-agent-core"]
        C1 --> C3["pi-tui"]
        C2 --> C4["pi-ai"]
    end
```

## 工程纪律

超出一般开源项目的工程实践：

- 依赖全部钉死精确版本（save-exact=true）
- npm-shrinkwrap.json 锁定传递依赖
- min-release-age=2 避免当天发布的依赖
- pre-commit 阻止意外 lockfile 变更
- CI 跑 npm audit + npm audit signatures
- 专门的 evals 包做 agent 行为回归测试（vitest-evals）
- 供应链安全有明确流程文档

## 社区治理

强 gatekeeping 模式：

- 新 contributor 的 issue 和 PR 默认自动关闭，maintainer 每日审查
- lgtmi（issue 级信任）：future issues 不再自动关闭
- lgtm（PR 级信任）：future issues 和 PRs 不再自动关闭
- 先靠质量证明自己，再逐步拿权限

## 对比 Claude Code / Codex

| 维度 | Claude Code / Codex | pi |
|---|---|---|
| 开源 | 闭源 | 完全开源 (MIT) |
| 模型绑定 | 绑定自家模型 | 不绑定，任意 provider |
| 定位 | 能用的产品 | 可理解、可改造的框架 |
| 适合场景 | 直接写代码 | 学 agent 设计 / 做自己的 agent 应用 |

## 相关链接

- GitHub: https://github.com/earendil-works/pi
- 官网: https://pi.dev
- 文档: https://pi.dev/docs/latest
- Discord: https://discord.com/invite/3cU7Bz4UPx
- RFC: https://rfc.earendil.com/keyword/pi/
- 作者 session 数据: https://huggingface.co/datasets/badlogicgames/pi-mono
