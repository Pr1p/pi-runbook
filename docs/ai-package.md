# AI 包

> 状态：待开始

pi-ai 统一了多个 LLM provider 的调用接口（OpenAI、Anthropic、Google 等）。

## 待研究

- createModels / setProvider / getModel 的设计
- streamSimple 的工作方式
- Model / Provider 抽象的接口定义
- model data 的生成机制（generate:models 脚本）
- 订阅制 provider vs API key provider 的区别
