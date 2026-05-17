'use client';

import { motion } from 'framer-motion';
import { SiteNav } from '../components/nav';

const fraudItems = [
  { label: 'URL safety', value: 'Suspicious', tone: 'warning' },
  { label: 'Sender analysis', value: 'Possible impersonation', tone: 'danger' },
  { label: 'QR scan', value: 'Review required', tone: 'warning' },
];

export default function FraudPage() {
  return (
    <div className="min-h-screen bg-command text-slate-100">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-hud backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,0.6fr]">
            <div>
              <span className="inline-flex rounded-full bg-amber-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">Fraud Scanner</span>
              <h1 className="mt-4 text-4xl font-semibold text-white">Secure your family with automatic scam detection.</h1>
              <p className="mt-4 text-slate-300">Upload screenshots or paste suspicious links. Rakshak AI evaluates phishing risk, impersonation tactics, and priority threat level using AI-fused security rules.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {fraudItems.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                    <p className={`mt-3 text-2xl font-semibold ${item.tone === 'danger' ? 'text-rose-400' : 'text-amber-300'}`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8">
              <div className="rounded-3xl border border-emerald-400/10 bg-black/40 p-6 text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">Drag & drop scan</p>
                <div className="mt-6 rounded-3xl border-dashed border border-white/15 bg-slate-950/70 p-10 text-slate-300">
                  <p className="text-sm">Drop message screenshots, QR codes, or URLs here for instant analysis.</p>
                </div>
                <button className="mt-6 inline-flex rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Upload suspicious file</button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
