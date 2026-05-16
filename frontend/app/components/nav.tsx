import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Chat', href: '/chat' },
  { label: 'Scanner', href: '/fraud' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Emergency', href: '/emergency' },
  { label: 'Admin', href: '/admin' },
];

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="text-lg font-semibold tracking-[0.2em] text-emerald-300">RAKSHAK AI</Link>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
