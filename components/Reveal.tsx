'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type RevealProps = {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  y?: number;
  start?: string;
  /** Stagger over direct children if true */
  stagger?: boolean;
};

export default function Reveal({
  children,
  as: Tag = 'div',
  className,
  delay = 0,
  y = 24,
  start = 'top 82%',
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (typeof window === 'undefined') return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    const targets = stagger ? Array.from(el.children) : el;

    if (reduce) {
      gsap.set(targets, { opacity: 1, y: 0, filter: 'blur(0)' });
      return;
    }

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (alreadyVisible) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(targets, { opacity: 0, y });

    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      delay,
      stagger: stagger ? 0.08 : 0,
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, y, start, stagger]);

  return (
    // @ts-expect-error — dynamic tag with ref
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
