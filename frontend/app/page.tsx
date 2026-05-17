'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const featureCards = [
  {
    title: 'AI Crisis Support',
    description: 'Receive calm, empathetic guidance for urgent family concerns and emotional support.',
  },
  {
    title: 'Scam & Fraud Scanner',
    description: 'Analyze messages, QR codes, and links with a secure fraud intelligence engine.',
  },
  {
    title: 'Emotion Intelligence',
    description: 'Detect urgency, stress, panic and route high-priority cases instantly.',
  },
  {
    title: 'Live Command Dashboard',
    description: 'Monitor incident heatmaps, fraud alerts and AI response metrics in real time.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-8 sm:px-10">
      <section className="mx-auto max-w-6xl space-y-10">
        <div className="grid gap-6 lg:grid-cols-[1.3fr,0.9fr] xl:gap-10">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200"
            >
              Rakshak AI • Secure support for military families
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
              className="text-5xl font-display font-semibold leading-tight tracking-tight text-white sm:text-6xl"
            >
              AI that supports the families of those who protect the nation.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              className="max-w-2xl text-lg leading-8 text-slate-300"
            >
              A futuristic cyber-defense command center for emotional crisis triage, scam detection, multilingual support and premium analytics.
            </motion.p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/chat"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Launch AI Support
              </Link>
              <Link
                href="/fraud"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm text-slate-100 transition hover:border-emerald-400"
              >
                Scan Suspicious Content
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-hud"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,182,113,0.18),transparent_22%)]" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/70 to-slate-900/80 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between text-slate-200">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Command Center</p>
                  <p className="mt-2 text-2xl font-semibold">Live AI Intelligence</p>
                </div>
                <span className="inline-flex rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">Secure</span>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-slate-200">
                  <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/80">Urgent cases</p>
                  <p className="mt-3 text-3xl font-semibold">12</p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-slate-200">
                  <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/80">Detected threats</p>
                  <p className="mt-3 text-3xl font-semibold">7</p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-slate-200 sm:col-span-2">
                  <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/80">AI confidence</p>
                  <p className="mt-3 text-3xl font-semibold">98%</p>
                </article>
              </div>
            </div>
          </motion.div>
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-5 rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-hud backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-saffron">Platform essentials</p>
            <h2 className="text-3xl font-semibold text-white">Designed for families of the nation’s protectors.</h2>
            <p className="text-slate-300">
              Rakshak AI combines modern enterprise UX with secure AI workflows. It is built to handle emergency escalation, multilingual complaints, fraud classification and trauma-aware responses.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureCards.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-hud transition hover:-translate-y-1 hover:border-emerald-400/30"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
