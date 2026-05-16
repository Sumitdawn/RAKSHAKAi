import { motion } from 'framer-motion';
import { SiteNav } from '../components/nav';

const chatMessages = [
  { role: 'system', text: 'Rakshak AI is ready to support military families with empathy and urgency.' },
  { role: 'user', text: 'I received a suspicious message claiming to be from an army welfare officer.' },
  { role: 'assistant', text: 'I am analyzing the message for fraud indicators and emotional urgency.' },
];

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-command text-slate-100">
      <SiteNav />
      <main className="mx-auto max-w-6xl space-y-8 px-6 py-10 sm:px-10">
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-hud backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">AI Chat Interface</p>
              <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Secure Support Chat</h1>
            </div>
            <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">Detects urgency, fraud and support needs</span>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-[0.7fr,0.3fr]">
            <div className="space-y-4 rounded-3xl border border-white/10 bg-black/30 p-6">
              {chatMessages.map((message, index) => (
                <div key={index} className={`rounded-3xl p-5 ${message.role === 'assistant' ? 'bg-emerald-500/10' : 'bg-slate-900/70'}`}>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{message.role}</p>
                  <p className="mt-2 text-base leading-7 text-slate-100">{message.text}</p>
                </div>
              ))}
              <div className="mt-6 flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                <span className="flex h-3 w-3 animate-pulse rounded-full bg-emerald-300" />
                <p className="text-sm text-slate-300">Rakshak AI is typing a calm response...</p>
              </div>
            </div>
            <div className="space-y-5 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-white">Intelligence Summary</h2>
                <p className="text-sm text-slate-300">Sentiment: calm but alert. Priority: high. Recommended action: connect with welfare support and escalate if needed.</p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-black/30 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/70">Urgency</p>
                  <p className="mt-2 text-3xl font-semibold text-white">High</p>
                </div>
                <div className="rounded-3xl bg-black/30 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/70">Emotion</p>
                  <p className="mt-2 text-3xl font-semibold text-white">Stressed</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
