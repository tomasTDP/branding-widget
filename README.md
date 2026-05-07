# Serif — Branding Proposal

A branding proposal for **Serif.io**, a visual feedback widget for product teams.

Two directions, both monochromatic, both single-accent (Cobalt).

## Routes

| Route | What it is |
|---|---|
| `/` | Index · choose a version |
| `/v3` | **Branding proposal — Option 02** · Serif.io, sans only (Switzer) |
| `/v4` | **Branding proposal — Option 01** · Serif, italic terminal (Switzer + Instrument Serif) |
| `/v1` | Landing variant · monochromatic + Cobalt |
| `/v2` | Landing variant · modern subverted |

## Stack

- Vite 6 + React 19 + TypeScript
- Switzer (Fontshare) for the system typeface
- Instrument Serif (Google Fonts) for the italic accent in Option 01
- JetBrains Mono for captions

## Run locally

```sh
npm install
npm run dev
```

Then open http://localhost:5189.

## Deploy

This is a vanilla Vite SPA. Push to a branch on Vercel and it auto-deploys. The
`vercel.json` rewrites `/v1`, `/v2`, `/v3`, `/v4` to `index.html` so the SPA router can pick them up.
