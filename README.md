# Party Games App

Mobile-friendly party games (React + Vite + TypeScript).

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:8080 (or the port Vite prints).

## Build & deploy

```bash
npm run build
```

Deploy the `dist` folder (e.g. `vercel --prod`). For vote feedback, set `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` in Vercel env vars.

## Optional

- **Vote API (local):** `npm run server` then set `VITE_FEEDBACK_API_URL=http://localhost:3001/vote` in `.env`
- **PWA / iOS:** See project docs or previous README if you need install-to-home-screen or TestFlight
