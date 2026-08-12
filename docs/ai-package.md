# AI 包

> 状态：第一轮理解完成

pi-ai 是 LLM 的统一抽象层。本质是适配器模式的大规模应用。

## 解决什么问题

各家厂商的 API 格式全不同：

| 维度 | OpenAI | Anthropic | Google |
|---|---|---|---|
| SDK | openai | @anthropic-ai/sdk | @google/genai |
| API 名称 | responses API | messages API | generative AI |
| tool calling | function calling | tool use | function declaration |
| 认证 | Authorization: Bearer | x-api-key | API key / OAuth |
| streaming 格式 | 各自不同 | 各自不同 | 各自不同 |
| thinking 参数 | 各自不同 | 各自不同 | 各自不同 |

pi-ai 把这些差异全吃掉，给上面一个统一接口。

## 核心抽象

### Model

一个 Model 对象描述调用某个模型需要的所有信息：

```typescript
interface Model<TApi> {
  id: string;           // "claude-sonnet-4-6"
  name: string;         // "Claude Sonnet 4.6"
  api: TApi;            // "anthropic-messages" | "openai-responses" | ...
  provider: ProviderId; // "anthropic"
  baseUrl: string;      // "https://api.anthropic.com"
  reasoning: boolean;   // 是否支持 thinking
  input: ("text" | "image")[];  // 能接受什么输入
  cost: ModelCost;      // 价格
  contextWindow: number;
  maxTokens: number;
}
```

### Provider

每个 provider 实现一个工厂函数，结构一致：

```typescript
// anthropic.ts
export function anthropicProvider(): Provider {
  return createProvider({
    id: "anthropic",
    auth: { apiKey: anthropicApiKeyAuth(), oauth: ... },
    models: Object.values(ANTHROPIC_MODELS),
    api: anthropicMessagesApi(),  // API 适配器
  });
}

// openai.ts — 完全一样的结构
export function openaiProvider(): Provider {
  return createProvider({
    id: "openai",
    auth: { apiKey: envApiKeyAuth(["OPENAI_API_KEY"]) },
    models: Object.values(OPENAI_MODELS),
    api: openAIResponsesApi(),
  });
}
```

加一家新厂商 = 写一个这样的文件。

### Models 管理类

上层使用方式：

```typescript
const models = createModels();
models.setProvider(anthropicProvider());
models.setProvider(openaiProvider());

const model = models.getModel("anthropic", "claude-sonnet-4-6");
models.streamSimple(model, context, options);
// pi-ai 内部自动找到对应 provider，
// 处理认证，翻译成 Anthropic 格式，
// 发请求，把 streaming 翻译回来
```

## 已接入的 provider

providers/ 目录下有几十家：anthropic、openai、google、deepseek、groq、mistral、xai、moonshot、qwen、xiaomi、kimi、fireworks、together、cerebras、nvidia、github-copilot、openrouter、vercel-ai-gateway、cloudflare、bedrock、huggingface、minimax、zai 等。

## API 类型（KnownApi）

底层 API 适配器有 10 种：

- openai-completions
- openai-responses
- azure-openai-responses
- openai-codex-responses
- anthropic-messages
- bedrock-converse-stream
- google-generative-ai
- google-vertex
- mistral-conversations
- pi-messages

多个 provider 可以共用同一个 API 类型（比如 deepseek 和 groq 都用 openai-completions）。
