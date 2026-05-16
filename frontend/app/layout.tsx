import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rakshak AI – Military Family Support Command Center',
  description: 'AI-powered crisis support, scam detection, and analytics for Indian Armed Forces families.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-command text-slate-100 selection:bg-emerald-400/40">
        {children}
      </body>
    </html>
  );
}
