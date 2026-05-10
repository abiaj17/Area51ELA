'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export type RevealVariant =
  | 'fade'       // simple fade + tiny rise
  | 'slide-up'   // larger rise, snappier
  | 'slide-left' // come in from the left
  | 'scanline'   // clip-path reveal, top to bottom
  | 'glitch'     // skew + blur fade, scanner feel
  | 'zoom'       // scale-in fade
  | 'typewriter';// stagger fade for inline children

type RevealProps = {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  /** Stagger over direct children if true */
  stagger?: boolean;
};

const FROM: Record<RevealVariant, gsap.TweenVars> = {
  fade:        { opacity: 0, y: 18 },
  'slide-up':  { opacity: 0, y: 60 },
  'slide-left':{ opacity: 0, x: -60 },
  scanline:    { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
  glitch:      { opacity: 0, skewX: 6, filter: 'blur(8px)' },
  zoom:        { opacity: 0, scale: 0.94 },
  typewriter:  { opacity: 0, y: 6 },
};

const TO: Record<RevealVariant, gsap.TweenVars> = {
  fade:        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
  'slide-up':  { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' },
  'slide-left':{ opacity: 1, x: 0, duration: 0.85, ease: 'power3.out' },
  scanline:    { opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'power2.inOut' },
  glitch:      { opacity: 1, skewX: 0, filter: 'blur(0px)', duration: 0.7, ease: 'power3.out' },
  zoom:        { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' },
  typewriter:  { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
};

const STAGGER_AMOUNT: Record<RevealVariant, number> = {
  fade: 0.08,
  'slide-up': 0.1,
  'slide-left': 0.1,
  scanline: 0.12,
  glitch: 0.06,
  zoom: 0.09,
  typewriter: 0.04,
};

export default function Reveal({
  children,
  as: Tag = 'div',
  className,
  delay = 0,
  variant = 'fade',
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = ref.current;
    const targets = stagger ? Array.from(el.children) : el;

    if (reduce) {
      gsap.set(targets, { opacity: 1, x: 0, y: 0, scale: 1, skewX: 0, clipPath: 'none', filter: 'none' });
      return;
    }

    const from = FROM[variant];
    const to = { ...TO[variant], delay, stagger: stagger ? STAGGER_AMOUNT[variant] : 0 };

    const animate = () => {
      gsap.fromTo(targets, from, to);
    };

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      animate();
      return;
    }

    gsap.set(targets, from);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, variant, stagger]);

  return (
    // @ts-expect-error — dynamic tag with ref
    <Tag ref={ref} className={className} style={{ willChange: 'transform, opacity' }}>
      {children}
    </Tag>
  );
}
