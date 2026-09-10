'use client';

import { useEffect, useState } from 'react';
import GlassButton from '@/components/glass-button';
import { useGlassPointer } from '@/components/use-glass-pointer';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#catalog', label: 'Courses' },
  { href: '#roles', label: 'For teams' },
  { href: '#pricing', label: 'Pricing' }
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { ref: barRef, onPointerMove: onBarMove, onPointerLeave: onBarLeave } = useGlassPointer<HTMLDivElement>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto max-w-6xl">
        <div
          ref={barRef}
          onPointerMove={onBarMove}
          onPointerLeave={onBarLeave}
          className={`lg lg--bar flex h-14 items-center justify-between rounded-full pr-2 pl-4 sm:pl-5 ${
            scrolled || open ? 'lg--dense' : ''
          }`}
        >
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a href="#get-started" className="rounded-full px-3.5 py-2 text-sm text-white/70 transition-colors hover:text-white">
              Sign in
            </a>
            <GlassButton href="#get-started" variant="solid" size="sm">
              Start free
            </GlassButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="ml-auto grid h-10 w-10 place-items-center rounded-full text-white transition-colors hover:bg-white/10 md:ml-0 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
              {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>

        {open ? (
          <div className="lg lg--bar lg--dense mt-2 rounded-3xl p-2 md:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <GlassButton href="#get-started" variant="solid" size="md" className="mt-1 w-full">
                Start free
              </GlassButton>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
