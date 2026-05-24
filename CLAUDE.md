# CLAUDE.md — Ideal Deal Vietnam Project

## Project Overview

- **Website:** idealdealvn.com
- **Type:** Import/Export company website
- **Framework:** Next.js / React
- **Styling:** Tailwind CSS

## Supported Languages (i18n)

The website supports 6 languages. Every change must work across ALL of them:

|Code|Language    |
|----|------------|
|EN  |English     |
|AR  |Arabic (RTL)|
|VI  |Vietnamese  |
|ZH  |Chinese     |
|ES  |Spanish     |
|FR  |French      |


## Golden Rules — Read Before Every Single Change

### ✅ Always Do

- Read the relevant files COMPLETELY before touching anything
- Follow the exact same code pattern already used in the project
- Add translations for ALL 6 languages when adding any new content
- Test that English version still works after every change
- Keep RTL layout working correctly for Arabic

### ❌ Never Do

- Never modify icons, icon imports, or icon components unless explicitly asked
- Never change layout, spacing, colors, or component structure unless explicitly asked
- Never hardcode text inside JSX — always use the translation system (i18n keys)
- Never add new fields or props that don’t already exist in the data structure
- Never refactor or restructure files unless explicitly asked
- Never touch a file that is not directly related to the task
- Never break the English version while fixing other languages

## Project Structure (Key Files)

- `/pages/` — All page components
- `/public/locales/` or `/locales/` — Translation files (one folder per language)
- `/components/` — Reusable components
- `/data/` — Product and service data files (if separate)

## How to Handle Tasks

1. Read the relevant file(s) first
1. Identify the exact pattern used (data structure, translation keys, component format)
1. Make the minimal change needed — nothing more
1. Confirm what was changed and what was NOT touched

## Pages Overview

- **Home** — Landing page
- **Products** — Product categories with export product cards
- **Services** — 9 service cards (icons + title + description + bullet points)
- **About** — Company info
- **Contact** — Contact form

## Services Page — Important

The Services page has exactly 9 service cards. Do not delete, reorder, or merge any of them. All 9 must always be present with their icons intact.

## Icons — Critical

- Icons are part of the component structure — do not touch them unless the task is specifically about icons
- Icon issues in non-English languages are caused by translation/locale config, not the icon components themselves
- Never add emoji as icons (e.g. 🏷️) — use the existing icon system only

## Translation System Rules

- All text must go through the i18n translation system
- Never hardcode translated text inside JSX or data files
- When adding new keys, follow the exact same naming pattern already in the locale files
- Always add the key to ALL 6 language files at the same time

## When Starting a New Chat

Always say this first:

> “Read CLAUDE.md, then read the current state of the relevant files before doing anything.”