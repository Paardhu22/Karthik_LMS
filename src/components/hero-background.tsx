'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CRTWarp = dynamic(() => import('@/components/crt-warp'), { ssr: false });

/**
 * Wraps the WebGL background: loads it only on the client, pauses it for
 * reduced-motion users, and layers the scrims that keep hero copy readable.
 */
export default function HeroBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const small = window.matchMedia('(max-width: 768px)');
    const sync = () => {
      setReducedMotion(motion.matches);
      setCompact(small.matches);
    };
    sync();
    motion.addEventListener('change', sync);
    small.addEventListener('change', sync);
    return () => {
      motion.removeEventListener('change', sync);
      small.removeEventListener('change', sync);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Static fallback: what you see before the canvas mounts, and the whole
          background if WebGL is unavailable. */}
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_80%_15%,rgba(199,85,247,0.28)_0%,transparent_55%),radial-gradient(70%_60%_at_20%_80%,rgba(77,227,255,0.14)_0%,transparent_60%),linear-gradient(180deg,#0b0616_0%,#05010a_70%)]" />

      <div className="pointer-events-auto absolute inset-0 opacity-90">
        <CRTWarp
          color="#c755f7"
          backgroundColor="#05010a"
          speed={0.45}
          curvature={0.22}
          scanlineStrength={0.3}
          scanlineFrequency={220}
          waveAmplitude={0.28}
          waveFrequency={2.6}
          bloom={1.7}
          bloomRadius={1.1}
          noise={0.08}
          vignette={0.35}
          brightness={1.15}
          rgbShift={0.014}
          mouseReact={!compact}
          mouseStrength={0.55}
          dpr={compact ? 0.75 : 1}
          fps={compact ? 24 : 30}
          paused={reducedMotion}
        />
      </div>

      {/* Readability scrims: on narrow screens the copy spans the full width, so
          flatten the whole canvas first; then darken the centre-left where the
          copy sits and fade the canvas into the page background at the bottom. */}
      <div className="absolute inset-0 bg-ink/60 md:bg-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_25%,rgba(5,1,10,0.92)_0%,rgba(5,1,10,0.7)_38%,rgba(5,1,10,0.25)_65%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,1,10,0.85)_0%,transparent_28%,transparent_55%,rgba(5,1,10,0.9)_88%,#05010a_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
