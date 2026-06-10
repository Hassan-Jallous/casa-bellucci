## Current project direction

The static HTML/React prototype phase is complete. The active build is now the migrated Next.js app (`app/`, `components/`, `lib/`, `public/`) using Next.js 16, React 19, TypeScript, and Static Export for GitHub Pages. Continue homepage and architecture work in the Next.js app unless the user explicitly asks to restore or inspect the old prototype.

The old prototype files (`index.html`, `scripts/*.jsx`, root `styles/`, root `images/`, root `fonts/`) have been replaced or moved during migration. Do not recreate them as the active implementation.

Use `homepage-structure.md` as the source of truth for the Casa Bellucci homepage structure and positioning. Keep the homepage limited to the agreed sections there; move deeper SEO/content needs to future dedicated pages.

## Production readiness workflow

`docs/production-readiness-todo.md` is the active production-readiness work plan. We are working through it step by step. Keep it accurate as the source of truth for what is still blocking production, what has been verified, and what is already complete.

When a production-readiness item is implemented, do not mark it complete immediately. First run the relevant local verification, then have a dedicated subagent review that specific item or diff in read-only mode. Only check off an item in `docs/production-readiness-todo.md` after the dedicated subagent confirms it is fully and correctly handled with no remaining actionable issue.

Whenever a TODO item is completed, update `docs/production-readiness-todo.md` in the same work session with the result, verification evidence, and any remaining follow-up. Do not let the file drift behind the actual project state.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This project uses Next.js 16. APIs, conventions, and file structure may differ from older Next.js versions in training data. Before writing Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/` when the change touches framework behavior, routing, build/export behavior, metadata, or server/client component boundaries. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
