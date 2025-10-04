# Infinity Arena Monorepo

This repository contains:
- `apps/arena` — Next.js App Router app for the Infinity Arena (dashboard, project factory, agent roster)
- `packages/brandkit` — shared Tailwind tokens & theme utilities
- `packages/agent-sdk` — stubs & types for agent orchestration

## Quick Start (Vercel)
1. Push this repo to GitHub.
2. Import `apps/arena` in Vercel (root directory = `apps/arena`).
3. Set env vars: `NEXTAUTH_SECRET`, `NEXT_PUBLIC_SITE_NAME`, `POSTGRES_URL` (optional), `OPENAI_API_KEY` (optional), `ARENA_BASE_URL`.
4. Deploy. Point `arena.infinitynexus.ai` CNAME to your Vercel domain via Cloudflare.

## API Endpoints (stubs)
- `GET /api/health` — returns `{ ok: true }`
- `GET /api/agents` — returns mock roster
- `POST /api/agents/:id/start|stop` — mock start/stop
