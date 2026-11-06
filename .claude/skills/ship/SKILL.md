---
name: ship
description: Put the current changes on a feature branch, verify them with lint and build, commit, push and open a PR against main.
disable-model-invocation: true
---

Ship the current working-tree changes as a pull request. `$ARGUMENTS`, if given, describes the change. Use it for the branch name, the commit message and the PR title.

1. Run `git status` and `git diff` to see what changed. If nothing changed, stop and say so.
2. If you're on `main`, create a branch named `<type>/<short-kebab-description>` (for example `fix/totals-string-concat` or `feat/delete-transaction`). If you're already on a feature branch, stay on it.
3. Run `npm run lint` and `npm run build`. If either fails, report the errors and stop. Don't commit broken code.
4. Stage only the files related to this change and commit with a concise, imperative message.
5. Push with `git push -u origin <branch>`.
6. Open the PR with `gh pr create --base main`. Write a short summary of what changed and why, plus how it was verified (lint + build; there are no tests).
7. Report the PR URL.

If `gh` isn't installed or authenticated, stop after pushing and give the user the compare URL instead.
