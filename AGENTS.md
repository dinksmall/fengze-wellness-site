# Repository Guidelines

## Project Structure & Module Organization
This is a static bilingual product and distributor website. Core files live at the root:

- `index.html`: English page structure and content.
- `zh.html`: Chinese page structure and content.
- `styles.css`: shared visual system, layout, responsive rules, and section styles.
- `site.js`: navigation, reveal animation, image fallback, and inquiry form logic.
- `assets/`: product photography.
- `public/`: favicon, formula images, PDFs, fallback art, and public assets.
- `docs/`: launch notes, including `docs/launch-checklist.md`.

Keep English and Chinese content in their separate HTML files unless a change explicitly requires shared markup.

## Build, Test, and Development Commands
There is no package manager or build step. Preview the site directly:

```sh
open index.html
open zh.html
```

For a local static server, use:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html` and `http://localhost:8000/zh.html`. Use the server path when testing forms, assets, or browser behavior.

## Coding Style & Naming Conventions
Use two-space indentation in HTML, CSS, and JavaScript. Prefer semantic sections with stable `id` anchors. CSS class names are lowercase kebab-case, for example `quality-section`, `site-header`, and `form-feedback`.

Keep JavaScript plain and dependency-free. Use `const` and `let`, short helpers, and existing DOM patterns in `site.js`. Do not add frameworks for small edits.

## Testing Guidelines
No automated test framework is configured. Before shipping changes, manually verify:

- Both `index.html` and `zh.html` render without broken layout on desktop and mobile widths.
- Header navigation opens, closes, and highlights the active section.
- Product images load, with `data-fallback` behavior preserved where used.
- The partnership form validates required fields and reports success or failure.

For copy changes, check that public wellness language stays compliance-safe and avoids disease-treatment or sexual-performance claims.

## Commit & Pull Request Guidelines
This working copy has no local Git history, so no project-specific commit pattern can be inferred. Use short imperative messages, such as `Update distributor inquiry copy`.

Pull requests should include a summary, affected pages or sections, screenshots for visual changes, and manual checks performed. Link related issues or launch checklist items when available.

## Agent-Specific Instructions
Keep edits narrowly scoped. If a request targets one page or section, avoid unrelated layout, asset, or copy changes. Preserve filenames for replaced static assets and use cache-busting query strings when browser or social previews must refresh.
