'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#catalog', label: 'Courses' },
  { href: '#roles', label: 'For teams' },
  { href: '#pricing', label: 'Pricing' }
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-ink/90 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-glow to-[#5b21b6] shadow-[0_0_20px_-4px] shadow-glow/70">
            <span className="font-mono text-sm font-bold text-white">L</span>
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-white">
            Lumen<span className="text-glow-soft">LMS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#get-started"
            className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:text-white"
          >
            Sign in
          </a>
          <a
            href="#get-started"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.03] active:scale-95"
          >
            Start free
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
            {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-white px-3 py-2.5 text-center text-sm font-medium text-ink"
            >
              Start free
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
