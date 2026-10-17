# DODY WORLD — Design

Reference: supplied cinematic editorial site. Borrow near-black expanses, fine typography, restrained luminous accents, and landscape scene transitions. No copied text or artwork. Mobile-first web only.

Korean entrance: entirely Korean with exact supplied heading and button, original SVG night room, lavender lighting, walnut desk, rain and snow. Korean directory below the scene. Six independent Arabic RTL URLs: /mind, /chemistry, /philosophy, /reflection, /behavior, /museum. One functional starter topic per route, scalable typed catalog; no empty entries. Museum has three objects.

Palette: ink #070611, ivory #f2eef8, lavender #aba1bc, lilac #c4a7ed. Accent per world: blue, mint, amber, gold, rose, purple. No dashboard grid. Full-width interaction stages, fine rules, spacious editorial compositions.

Typography: Noto Serif KR and Noto Sans KR for Korean; Noto Naskh Arabic and Noto Sans Arabic for Arabic. Serif titles, 16px body, 24px mobile gutters / 64px desktop, max 1200px. Controls 44px minimum. Keyboard, touch, reduced-motion, ambient-motion toggle. No automatic audio.

No paid media or APIs. Hand-authored SVG/CSS scenes, no WebGL/video. Local-only progress and journal with graceful storage failure; no custom database tables/API procedures. Keep managed analytics unchanged. Source links for Quran and hadith; personal prompts separated from scripture. Chemistry explicitly a simulation, behavior explicitly playful rather than diagnostic.

One-line description of the app, the platforms it ships on, the visual direction (style, feel), and the core job it does for the user.

## Brand & Colors

One token set, consumed per platform:

- **Web & desktop**: CSS variables in `packages/web/src/web/styles.css` (desktop loads the web UI).
- **Mobile**: `Colors.light` / `Colors.dark` in `packages/mobile/constants/theme.ts`, read via `useColors()`; `userInterfaceStyle: "automatic"` follows the system light/dark setting.

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| primary | #1F1F1F | #E5E5E5 | Buttons, active tab, accents |
| background | #FFFFFF | #0A0A0A | Page/screen background |
| card | #FFFFFF | #1A1A1A | Cards, surfaces |
| foreground | #171717 | #FAFAFA | Primary text |
| mutedForeground | #737373 | #A3A3A3 | Secondary text |
| border | #E5E5E5 | #262626 | Hairlines |
| destructive | #DC2626 | #EF4444 | Delete / errors |

## Typography

Name the display + body pairing here. Web: set font families in `styles.css` (self-hosted files go in `packages/web/public/fonts/`). Mobile: system font by default; load custom fonts with `useFonts` from `expo-font` and reference them via `Fonts` in `constants/theme.ts`.

## Pages & Screens

List each page/screen, its route file, and what it shows. Example:

- **Web — Home** (`packages/web/src/web/pages/index.tsx`) — what the user sees first.
- **Mobile — Home** (`packages/mobile/app/(tabs)/index.tsx`) — main tab.
- Add web pages under `src/web/pages/` (+ route in `app.tsx`); mobile tabs under `app/(tabs)/`, stack/modal screens under `app/`.

## Key User Flows

1. Describe the primary flow end to end (open → action → result).
2. ...

## Architecture

- **API**: typed oRPC client (`lib/api.ts` in each package) → the backend in `@template/web`. Query/mutation hooks live in `queries/` (one file per feature); pages/screens call them with `@tanstack/react-query`.
- **State/sync**: TanStack Query with optimistic updates for instant-feel interactions.
- **Auth / payments / uploads**: see `skills/app/references/` when those features are needed.
