'use client';

import type { ReactNode } from 'react';
import { useGlassPointer } from '@/components/use-glass-pointer';

type Variant = 'solid' | 'clear';
type Size = 'sm' | 'md' | 'lg';

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-sm'
};

export default function GlassButton({
  href,
  variant = 'clear',
  size = 'md',
  className = '',
  children
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  const { ref, onPointerMove, onPointerLeave } = useGlassPointer<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={href}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`lg lg--btn ${variant === 'solid' ? 'lg--solid' : 'text-white'} ${sizes[size]} group inline-flex items-center justify-center gap-2 rounded-full font-medium hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] ${className}`}
    >
      {children}
    </a>
  );
}
