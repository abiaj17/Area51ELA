'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Wraps inline content in a black-bar that "uncensors" on scroll into view,
 * sliding off to reveal the text underneath. CRT redact-strip effect.
 */
export default function RedactReveal({ children, className }: Props) {
  const wrapRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!wrapRef.current) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.registerPlugin(ScrollTrigger);

    const wrap = wrapRef.current;
    const bar = wrap.querySelector<HTMLSpanElement>('[data-redact-bar]');
    const inner = wrap.querySelector<HTMLSpanElement>('[data-redact-text]');

    if (!bar || !inner) return;

    if (reduce) {
      gsap.set(bar, { scaleX: 0 });
      gsap.set(inner, { opacity: 1 });
      return;
    }

    gsap.set(bar, { transformOrigin: 'right center', scaleX: 1 });
    gsap.set(inner, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: 'top 85%',
        once: true,
      },
    });

    tl.to(inner, { opacity: 1, duration: 0.001 }, 0.25)
      .to(
        bar,
        { scaleX: 0, duration: 0.55, ease: 'power3.inOut' },
        0.25,
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <span ref={wrapRef} className={`relative inline-block ${className ?? ''}`}>
      <span data-redact-text className="relative z-0">
        {children}
      </span>
      <span
        data-redact-bar
        aria-hidden="true"
        className="absolute inset-x-[-2px] inset-y-[-2px] z-10 block bg-[--color-redact] mix-blend-normal"
        style={{ transform: 'scaleX(1)' }}
      />
    </span>
  );
}
