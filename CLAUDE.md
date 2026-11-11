# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- There is no test framework or test script. Verify changes with `npm run lint` and `npm run build`.
- `npm run dev` uses port 5173, or the next free port if that's taken. Check the Vite output for the actual URL.

## Project context

- This is the starter app for a Claude Code course. It intentionally has a bug, poor UI and messy code.
- When you notice one of these issues while working on something else, point it out but do not fix it unless asked.
  - Example: `amount` is stored as a string, so totals concatenate instead of adding.
- Plain JavaScript + JSX (React 19, Vite 7). There is no TypeScript; don't add types or `.ts` files unless asked.
- The whole app is one component in `src/App.jsx`. It keeps state in local `useState` and starts from hardcoded seed transactions.
- There is no persistence (no localStorage, no API), so added data is lost on reload.

## Code style

- Use double quotes and semicolons in JS/JSX, with 2-space indentation. Match `src/App.jsx`.

## Git workflow

- Never commit directly to `main`.
- Create a feature branch per change and open a PR against `main` on GitHub (`raychamp/expense-tracker`).
- Name branches `<type>/<short-kebab-description>`, e.g. `fix/totals-string-concat`, `feat/delete-transaction`.
