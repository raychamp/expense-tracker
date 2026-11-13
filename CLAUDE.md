# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` starts Vite at http://localhost:5173.
- `npm run lint` runs ESLint (flat config, `eslint.config.js`).
- `npm run build` produces a production build.
- There is no test framework or test script. Verify changes with `npm run lint` and `npm run build`.

## Project context

- This is the starter app for a Claude Code course. It intentionally has a bug, poor UI and messy code.
- When you notice one of these issues while working on something else, point it out but do not fix it unless asked.
  - Example: the "Freelance Work" seed transaction is typed `expense` instead of `income`, which skews the totals.
- Plain JavaScript + JSX (React 19, Vite 7). There is no TypeScript; don't add types or `.ts` files unless asked.
- There is no persistence (no localStorage, no API), so added data is lost on reload.
- Styling is plain global CSS in `src/App.css` and `src/index.css`.

## Architecture

All components live flat in `src/`, one default-exported function component per file. State is local `useState`; there is no context or state library.

- `App.jsx` owns the `transactions` array (starting from hardcoded seed data) and the module-level `categories` list. It passes them down and adds new transactions through `handleAdd`.
- `Summary.jsx` takes `transactions` and computes income, expense and balance totals on each render.
- `TransactionForm.jsx` keeps its own input state (description, amount, type, category). On submit it builds the transaction object and calls `onAdd`, then resets the inputs.
- `TransactionList.jsx` keeps its own filter state (type, category), filters `transactions` and renders the filters and the table.

Data flows one way: `App` holds the list, children read it via props, and the form reports additions back through `onAdd`. State that only one component needs stays in that component.

## Code style

- Use double quotes and semicolons in JS/JSX, with 2-space indentation. Match the component files in `src/` (the first two imports in `App.jsx` still use single quotes and no semicolons).
- There is no formatter, so keep style consistent by hand.

## Git workflow

- Never commit directly to `main`.
- Create a feature branch per change and open a PR against `main` on GitHub (`raychamp/expense-tracker`).
