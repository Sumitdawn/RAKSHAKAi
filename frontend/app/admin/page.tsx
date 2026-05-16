import { motion } from 'framer-motion';
import { SiteNav } from '../components/nav';
import { SectionCard } from '../components/section-card';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-command text-slate-100">
      <SiteNav />
      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-hud backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">Admin Panel</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">Operational governance and secure user control.</h1>
            </div>
            <button className="rounded-full bg-saffron px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">Manage users</button>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <SectionCard title="User roles" description="Review support agents, family accounts, and command center administrators." accent="Governance" />
            <SectionCard title="Ticket management" description="Monitor case status, escalate high-priority requests and validate fraud reports." accent="Workflow" />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Active operators</p>
              <p className="mt-3 text-3xl font-semibold text-white">18</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Pending escalations</p>
              <p className="mt-3 text-3xl font-semibold text-white">5</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Memory entries</p>
              <p className="mt-3 text-3xl font-semibold text-white">230</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
