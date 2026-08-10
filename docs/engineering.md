# 工程实践

> 状态：待开始

pi 在工程纪律方面做了很多值得学习的东西。

## 依赖管理

- 所有直接依赖钉死到精确版本（save-exact=true）
- npm-shrinkwrap.json 锁定传递依赖
- min-release-age=2 避免当天发布的依赖
- pre-commit 阻止意外的 lockfile 变更

## 行为评测

- vitest-evals 框架做 agent 行为回归测试
- pi-harness.ts 隔离临时环境跑真实 LLM
- smoke eval 验证基础链路
- extensions eval 验证自扩展端到端流程

## 供应链安全

- npm audit + npm audit signatures 定时跑
- shrinkwrap lifecycle script allowlist
- CI 用 npm ci --ignore-scripts
