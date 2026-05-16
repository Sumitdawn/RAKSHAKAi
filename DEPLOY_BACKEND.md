# Deploy Backend (FastAPI) — Railway & Render

This guide helps you deploy the FastAPI backend (`backend/`) to Railway or Render and wire environment variables securely.

## Prerequisites
- GitHub repository (already pushed).
- Dockerfile is present at `backend/Dockerfile`.
- You have an account on Railway or Render.

---

## Option A — Render (recommended for Docker)
Render supports deploying via `render.yaml` which is included in this repo.

1. Create an account at https://render.com and connect your GitHub account.
2. In Render dashboard, choose "New +" → "Import from GitHub" → select `Sumitdawn/RAKSHAKAi`.
3. Select the service `rakshak-backend` or create a new Web Service and point to the repo root.
4. When configuring the service:
   - Environment: **Docker**
   - Dockerfile Path: `backend/Dockerfile`
   - Start command: `uvicorn app.main:app --host 0.0.0.0 --port 10000`
   - Build command: (leave empty)
5. Set environment variables in Render (Dashboard → your service → Environment):
   - `OPENAI_API_KEY` = <your OpenAI key>
   - `JWT_SECRET` = <strong random secret>
   - `DATABASE_URL` = <postgres connection string> (optional for local SQLite dev)
6. Deploy. Render will build the Docker image and run the service.
7. The service URL (e.g., `https://rakshak-backend.onrender.com`) is your backend URL.

Once you have the backend URL, set `NEXT_PUBLIC_API_URL` in Vercel to this URL (see `DEPLOY_VERCEL.md`).

---

## Option B — Railway (simple Git-based deploy)
Railway can deploy via Docker or by connecting the repo and specifying a service.

1. Sign in at https://railway.app and create a new project.
2. Click "Deploy from GitHub" and select `Sumitdawn/RAKSHAKAi`.
3. Add a new service and choose Docker (or Node/Python and point to `backend/`).
4. Set Environment Variables in Railway project settings:
   - `OPENAI_API_KEY` = <your OpenAI key>
   - `JWT_SECRET` = <strong random secret>
   - `DATABASE_URL` = <Postgres connection string>
5. Deploy and obtain the service URL.
6. Configure `NEXT_PUBLIC_API_URL` in Vercel with the Railway service URL.

---

## Notes on ports and start commands
- The `backend/Dockerfile` exposes port `8000`; the Render start command runs uvicorn on `10000` (internal). Render will map to the external port automatically.

## Local Quick Test (before deploying)
Run backend locally and test health endpoint:

```bash
# from repo root
cd backend
# ensure .env exists with OPENAI_API_KEY and JWT_SECRET
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
# then test
curl http://127.0.0.1:8000/
```

## After deployment — configure Vercel
1. In Vercel, open the project for `frontend`.
2. Set environment variable `NEXT_PUBLIC_API_URL` to the backend URL.
3. Redeploy the frontend.

---

If you want, I can:
- attempt to deploy the backend to Render using the Render CLI here (requires you to provide Render API key), or
- prepare a Railway `railway.yml` / Docker deployment steps and guide.

Tell me which you prefer and whether you want me to perform the deploy from this environment (you'll supply any required API key/token).