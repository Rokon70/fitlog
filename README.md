# FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Browse a library of
twelve lifts, open a lift to see full instructions and specs, lock lifts into
today's plan or save them for later, and track a live daily summary — all
persisted so your plan survives a reload.

## Description

FitLog pulls its workout data from a live REST API and presents it as a
browsable library on the home page. Each workout has its own detail page with
step-by-step instructions, key specs, and two actions: **Add to today's
plan** and **Save for later**. The `/my-plan` page is the daily log: it shows
running totals for exercises, minutes, and calories, and lets you mark lifts
done or remove them, split across "Today's Plan" and "Saved" tabs.

## Technologies used

- **Next.js 14** (App Router) — routing, server + client components
- **React 18** + **TypeScript**
- **Tailwind CSS** — styling and responsive layout
- **lucide-react** — icon set
- **Browser `localStorage`** — persists the plan, saved list, and completed
  lifts across reloads
- **Google Fonts** (`next/font`) — Oswald for display type, Inter for body

## Features

1. **Responsive workout library** — a 3-column grid of workout cards on
   desktop that collapses to 2 columns on tablet and 1 on mobile, each card
   showing an image, category tags, equipment, and a duration/calories/rating
   stat row.
2. **Live navbar badges** — the "Plan" and "Saved" pill counters in the
   navbar update instantly as workouts are added or removed, and both link to
   `/my-plan`.
3. **Sort and search** — a "Sort By" dropdown (Duration / Calories / Rating)
   and a text search across name and muscle-group tags, both applied live to
   the library grid.
4. **Daily plan tracking with a 5-lift cap** — `/my-plan` shows live totals
   for exercises, minutes, and calories, lets you mark a lift done or remove
   it, and disables "Add to today's plan" once five lifts are locked in.
5. **Persistent state + toast feedback** — the plan, saved list, and
   completed lifts are saved to `localStorage` so they survive a page
   reload, and every add/remove/done action shows a toast confirmation.
6. **Custom 404 page and graceful loading/empty states** — an on-brand 404
   for unknown routes, a loading animation while the library fetches, and an
   empty state with a call to action when the plan or saved list is empty.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm run start
```

## Deployment

This project deploys as-is to Vercel, Netlify, or Cloudflare Pages:

1. Push this repo to GitHub.
2. Import it in Vercel (or your platform of choice).
3. Framework preset: **Next.js**. No environment variables are required —
   the workout API is public.
4. Deploy.

## Project structure

```
app/
  layout.tsx          Root layout: fonts, providers, navbar, footer, toasts
  page.tsx             Home page (Hero + Library)
  not-found.tsx        Custom 404
  workout/[id]/page.tsx  Workout detail page
  my-plan/page.tsx     My Plan page (tabs, metrics, cards)
components/            Navbar, Footer, Hero, Library, cards, providers
lib/                   API helpers and shared types
```
