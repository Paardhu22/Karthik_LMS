'use client';

import { useCallback, useRef } from 'react';
import type { PointerEvent } from 'react';

/**
 * Feeds the pointer position to a `.lg` surface as --lg-x / --lg-y so its
 * specular highlight tracks the cursor. Writes straight to the style
 * attribute — this fires on every mousemove and must not re-render.
 */
export function useGlassPointer<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const onPointerMove = useCallback((event: PointerEvent<T>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty('--lg-x', `${event.clientX - rect.left}px`);
    element.style.setProperty('--lg-y', `${event.clientY - rect.top}px`);
  }, []);

  const onPointerLeave = useCallback(() => {
    const element = ref.current;
    if (!element) return;
    element.style.removeProperty('--lg-x');
    element.style.removeProperty('--lg-y');
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
