'use client';

import { motion } from 'framer-motion';
import { SiteNav } from '../components/nav';

const quickActions = [
  { label: 'Medical support', desc: 'Connect immediately with emergency health counsel.' },
  { label: 'Family crisis', desc: 'Escalate to rapid family care coordination.' },
  { label: 'Security alert', desc: 'Activate secure incident response for suspicious activity.' },
];

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-command text-slate-100">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-hud backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,0.5fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-rose-300/90">Emergency Assistance</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">Rapid support workflows for urgent family concerns.</h1>
              <p className="mt-4 text-slate-300">When the AI detects panic, medical risk, or pressing welfare issues, the emergency mode routes cases to the highest-priority channel instantly.</p>
            </div>
            <div className="rounded-3xl border border-emerald-400/20 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/80">Status</p>
              <p className="mt-3 text-3xl font-semibold text-white">Red Alert</p>
              <p className="mt-3 text-slate-300">Active triage channel engaged for high-urgency support requests.</p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {quickActions.map((action) => (
              <motion.article
                key={action.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl border border-white/10 bg-black/30 p-6"
              >
                <h2 className="text-xl font-semibold text-white">{action.label}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{action.desc}</p>
                <button className="mt-6 inline-flex rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
                  Activate
                </button>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
