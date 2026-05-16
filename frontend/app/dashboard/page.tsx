import { motion } from 'framer-motion';
import { SiteNav } from '../components/nav';
import { SectionCard } from '../components/section-card';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-command text-slate-100">
      <SiteNav />
      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-hud backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">Analytics Command Center</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">Live mission metrics for support operations.</h1>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-black/30 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Open tickets</p>
                <p className="mt-3 text-3xl font-semibold text-white">34</p>
              </div>
              <div className="rounded-3xl bg-black/30 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Fraud alerts</p>
                <p className="mt-3 text-3xl font-semibold text-white">11</p>
              </div>
              <div className="rounded-3xl bg-black/30 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">AI accuracy</p>
                <p className="mt-3 text-3xl font-semibold text-white">97%</p>
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-6 xl:grid-cols-[1.3fr,0.7fr]">
            <div className="grid gap-6">
              <SectionCard title="Emotion heatmap" description="Track emotional intensity across conversations and identify urgent family support cases." accent="Heatmap" />
              <SectionCard title="Urgency pipeline" description="Visualize ticket escalation and rapid response workflows in a single command view." accent="Priority" />
            </div>
            <div className="space-y-6">
              <SectionCard title="Fraud trend radar" description="Detect suspicious activity spikes and phishing campaigns with premium analytics." accent="Threat" />
              <SectionCard title="Case resolution" description="Monitor response time, AI confidence, and support satisfaction metrics." accent="Metrics" />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
