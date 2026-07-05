# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## ⚠️ Next.js 16 (see AGENTS.md above)

This project runs **Next.js 16** with breaking changes from earlier versions. APIs, conventions, and file layout may differ from training data — read the relevant guide in `node_modules/next/dist/docs/` before writing Next-specific code, and heed deprecation notices.

## What this is

A single-page marketing site for **RemedyEngine** (remedyengine.com) — a WhatsApp-first clinic-automation platform. Positioning is the "engine that runs your clinic," organized around four pillars: **Automate the front desk · Run the whole clinic · Grow with marketing · Monitor everything**. It is a static, content-only site — no backend, no data fetching, no auth, no tests.

## Commands

```bash
npm run dev      # dev server (Turbopack) at http://localhost:3000
npm run build    # production build — the primary correctness check (runs tsc)
npm run start    # serve the production build
npm run lint     # eslint (eslint-config-next)
```

There is **no test suite**. To verify a change: run `npm run build` (catches type/render errors), then `npm run dev` and check the affected section in a browser. If the Next image optimizer serves a stale image after you replace a file under the same name, `rm -rf .next` and restart dev.

## Architecture

- **App Router, single route.** [src/app/page.tsx](src/app/page.tsx) is the whole page — it imports and composes the section components in visual order (`Nav`, then `Hero → Problem → AIFeatures → Automations → Workflow → Stakeholders → Differentiators → CTA`, then `Footer`). To reorder or add a section, edit this file.
- **[src/app/layout.tsx](src/app/layout.tsx)** loads the three brand fonts via `next/font/google` (Source Serif 4, IBM Plex Sans, IBM Plex Mono) and sets all page metadata (title, description, OpenGraph, Twitter, favicon).
- **Sections** live in [src/components/sections/](src/components/sections/), one file per section exporting a named function component. They follow a consistent pattern: a typed data array (or arrays) at the top, then JSX that maps over it. Copy and structured content live inline in these arrays — this is where content edits happen.
- **`thread.tsx`** is the signature "Thread" element (chat bubbles resolving into clinical cards). Per the brand system it is used **once** on the page (inside `Hero`); don't scatter it.
- **`nav.tsx`** is the only client component (`"use client"` for the mobile menu toggle); everything else is a server component.
- **shadcn/ui primitives** are in [src/components/ui/](src/components/ui/). Add more with `npx shadcn@latest add <name>`. Note: this shadcn setup (style `base-nova`) is built on **`@base-ui/react`**, not Radix; icons are **lucide-react**. `cn()` (clsx + tailwind-merge) is in [src/lib/utils.ts](src/lib/utils.ts). Aliases: `@/components`, `@/components/ui`, `@/lib/utils`.

## Design system (important — the brand is opinionated)

Tailwind v4 with tokens defined in the `@theme inline` block of [src/app/globals.css](src/app/globals.css). Brand color utilities are available directly (e.g. `bg-remedy-600`, `text-ink-900`, `border-line-200`, `bg-paper-0`). shadcn's semantic tokens (`--primary`, `--card`, etc.) are remapped to these brand colors in the `:root`/`.dark` blocks, so both `bg-remedy-600` and `bg-primary` resolve to the brand green.

Palette: `ink-900 #16231F` (text) · `paper-50 #F1F3EE` (page bg) · `paper-0 #FFFFFF` (cards) · `remedy-600 #2E6B54` (primary/CTAs) · `remedy-500 #3F8B6E` · `remedy-100 #DCEAE1` · `signal-500 #D98A2B` (time-sensitive/amber) · `clinical-red-500 #B94A3C` · `line-200 #D9DED6` (borders).

Conventions to keep consistent when editing or adding UI:
- **Type:** headings use `font-serif` (Source Serif 4); body uses the default sans (IBM Plex Sans); **clinical/label/data text uses `font-data`** (the `.font-data` utility = IBM Plex Mono, defined in globals.css) — used for eyebrows, metadata rows, status pills, IDs, timestamps.
- **`clinical-red-500` is for genuine urgency only** (emergency/escalation), never for ordinary CTAs.
- **Restraint:** one soft shadow (`0 4px 16px rgba(22,35,31,0.08)`), 12px card radius, calm/flat — no gradients, no glossy effects. Section rhythm is `py-20 md:py-28` on a `max-w-[1200px]` container.

## Images

All assets are WebP in [public/images/](public/images/), rendered via `next/image`. When adding a generated image: save the source PNG, convert to WebP with **sharp** (bundled with Next — `require('sharp')` in a Node one-liner), then delete the PNG and reference `/images/<name>.webp`. Use `quality: 82` for photographs and `quality: 92` for flat graphics/mockups.

[image-generation-prompts.md](image-generation-prompts.md) holds the Gemini prompts for every asset plus the strict brand rules for generation (locked palette, no WhatsApp logo/trademark, no dramatized illness, abstract placeholder text on any UI mockups). Update it when you add or change imagery.
