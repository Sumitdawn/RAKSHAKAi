# Vercel Deployment Guide for Rakshak AI

This document explains how to deploy the frontend to Vercel and recommended backend hosting options.

## Summary
- Frontend: Deploy to Vercel from the `frontend/` subdirectory (Next.js app).
- Backend: Deploy the FastAPI app on a dedicated host (Railway, Render, DigitalOcean App Platform, or Docker host). The frontend will call the backend via `NEXT_PUBLIC_API_URL` environment variable.

---

## 1) Prepare repository
- Ensure the repository is pushed to GitHub: `https://github.com/YourUser/RAKSHAKAi`

## 2) Vercel: Import project
1. Sign in to Vercel and click **New Project** → Import Git Repository from GitHub.
2. Select the `RAKSHAKAi` repo.
3. In the **Root Directory** field, set: `frontend` (this tells Vercel to build from the Next app inside `frontend/`).
4. Framework Preset: **Next.js** (auto-detected).

## 3) Environment variables (Vercel)
Set these in Vercel dashboard (Project Settings → Environment Variables):
- `NEXT_PUBLIC_API_URL` = `https://<your-backend-host>`  (required)
- (Optional) `NEXT_PUBLIC_FEATURE_FLAG` = `true`

Note: Do not put backend secrets (like `OPENAI_API_KEY` or `JWT_SECRET`) in frontend envs. Those belong to backend hosting.

## 4) Backend hosting (recommended approaches)
Choose one of the following to host the FastAPI backend:

A) Railway / Render / Fly / Heroku
- Create a new project and connect to GitHub or deploy via Docker.
- Set environment variables on the platform:
  - `OPENAI_API_KEY` (your key)
  - `JWT_SECRET`
  - `DATABASE_URL` (Postgres)
- Start command example: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

B) Docker (DigitalOcean App Platform or any VPS)
- Use `docker-compose.yml` in repo to orchestrate `frontend` (optional) and `backend` services.
- For production, run backend behind a managed load balancer or reverse proxy.

## 5) Vercel CLI (optional): set env vars from terminal
Install Vercel CLI and run:
```bash
npm i -g vercel
vercel login
vercel env add NEXT_PUBLIC_API_URL production
# then enter the backend URL when prompted
```

## 6) Redirects / Rewrites
If you want the frontend to proxy specific API calls to the backend using rewrites, configure them on the backend host or use a reverse proxy. Vercel `vercel.json` can have rewrites but they must point to static destinations (no runtime env interpolation). We kept `vercel.json` minimal — set `Root Directory` to `frontend` in the Vercel import flow.

## 7) Post-deploy checks
- Visit: `https://<your-vercel-domain>` (assigned by Vercel).
- Verify network tab calls are made to `NEXT_PUBLIC_API_URL` and backend returns expected responses.
- For testing without backend deployed: set `NEXT_PUBLIC_API_URL` to `http://localhost:8000` in Vercel Preview (not recommended for production).

## 8) CI / GitHub Actions (Optional)
If you want CI to test backend or run linters before push, create a GitHub Actions workflow under `.github/workflows/` that runs tests and lints.

---

If you want, I can:
- Create a `vercel.json` entry tuned for advanced rewrites.
- Add a sample `railway`/`render` manifest for hosting the backend.
- Create GitHub Actions that validate build and run simple smoke tests before deploy.

Tell me which of the above you want me to add next.