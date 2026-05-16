import { motion } from 'framer-motion';

export function SectionCard({ title, description, accent }: { title: string; description: string; accent?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-hud"
    >
      <div className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${accent ?? 'bg-emerald-500/15 text-emerald-300'}`}>
        {accent ? accent : 'Command'}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </motion.div>
  );
}
