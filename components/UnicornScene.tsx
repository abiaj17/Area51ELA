'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

const SCRIPT_SRC =
  'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.9/dist/unicornStudio.umd.js';

type Props = {
  projectId: string;
  className?: string;
  onReady?: () => void;
};

export default function UnicornScene({ projectId, className, onReady }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const tryInit = () => {
      if (cancelled) return;
      if (window.UnicornStudio?.init) {
        window.UnicornStudio.init();
        setReady(true);
        onReady?.();
      }
    };

    if (window.UnicornStudio?.isInitialized) {
      tryInit();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );

    if (existing) {
      existing.addEventListener('load', tryInit, { once: true });
      // Already loaded but no flag set — try anyway.
      tryInit();
      return () => {
        cancelled = true;
        existing.removeEventListener('load', tryInit);
      };
    }

    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
    }

    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = tryInit;
    document.body.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, [projectId, onReady]);

  return (
    <div
      ref={containerRef}
      data-us-project={projectId}
      className={className}
      aria-hidden="true"
      style={{
        opacity: ready ? 1 : 0,
        transition: 'opacity 1200ms ease',
      }}
    />
  );
}
