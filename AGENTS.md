# Codex Memory

- Prefer inference for return types.
- Use arrow functions/components, named exports, and no `React` import or `React.FC`.
- Keep comments sparse.
- Put shared helpers in `lib/`; colocate feature UI and tests.
- Use Tailwind first; keep [`styles/globals.css`](/Users/jes/Source/jes.ph/styles/globals.css) app-wide only.
- Use `npm`; dev server is `npm run dev`.
- Tests use RTL + Vitest globals with `describe`/`it`; keep mocks directly after imports.
- Run `npm test` and `npm run build` for meaningful changes.
