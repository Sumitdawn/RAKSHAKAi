# Rakshak AI

AI-powered customer support and crisis assistance for Indian Armed Forces families.

## Overview

Rakshak AI is a premium government-grade support platform inspired by Indian Army command centers. It combines intelligent chat, scam detection, emotional analytics, emergency triage, and secure carrier-grade architecture.

## Tech Stack

- Frontend: Next.js 15, TypeScript, Tailwind CSS, Framer Motion, ShadCN UI, Lucide React
- Backend: FastAPI, Python, PostgreSQL, ChromaDB, OpenAI, LangChain
- Auth: JWT, role-based access
- Deployment: Docker, Docker Compose

## Structure

- `frontend/` — Next.js app, premium UI, pages for chat, fraud scanner, analytics, emergency support and admin
- `backend/` — FastAPI API, auth, AI services, fraud detection, analytics, database models

## Setup

1. Copy `.env.example` to `.env` and set values.
2. Run `docker compose up --build`.
3. Visit `http://localhost:3000`.

## Notes

This scaffold is built for hackathon-level product maturity with a secure architecture, multi-page SaaS dashboard, and AI-first support workflows.
