# Contribution playbook

Language: [中文](contribution-playbook.md) | English

Contributing to Pi is less about obtaining a permission and more about building enough trust for a maintainer to review a change efficiently. The practical path is to make the problem small, reproducible, and easy to verify.

![Pi contribution trust path](assets/contribution-trust-path-map.png)

## Start with a high-signal issue

A useful issue answers:

- What happened?
- What did you expect?
- How can someone reproduce it?
- Which version, provider, mode, or environment matters?
- What is the smallest evidence that the behavior is wrong?

For a feature request, describe the user problem and the boundary it belongs to before proposing a large implementation.

## Make a small PR

A reviewable PR usually has:

```text
What changed
  -> Why it changed
  -> Which boundary owns it
  -> How it was verified
  -> What risk remains
```

Small scope is not a lack of ambition. It gives the maintainer a clear decision surface and makes regression evidence meaningful.

## `lgtmi` and `lgtm`

In the maintenance workflow, these labels are signals rather than automatic rights:

- `lgtmi` is closer to implementation-level approval or confidence in the technical change;
- `lgtm` is closer to final maintainer approval for merge.

The exact automation and authority depend on the repository rules. A comment containing these words is not, by itself, a universal guarantee that a workflow will act. Treat the repository's actual bot and branch rules as the source of truth.

## How to respond to review

Good review responses close the loop:

1. state what changed;
2. explain why the change addresses the concern;
3. show the focused verification;
4. call out any remaining trade-off.

Avoid replying with only “fixed”. The point is to make the reasoning inspectable for the next reviewer.

## A learning path for new contributors

```text
read the relevant boundary
  -> reproduce or clarify an issue
  -> write a narrow fix or test
  -> run the right eval / CI checks
  -> respond to review with evidence
  -> repeat with a slightly larger boundary
```

The runbook supports this path by separating stable notes, journal entries, and experiments. AI can accelerate exploration and implementation, but the contributor still needs to understand why the change belongs where it does.

## Continue reading

- [Engineering governance](engineering.md)
- [Evals](evals.en.md)
- [Core ideas](pi-overview.en.md)
- [Source and version index](source-index.en.md)
