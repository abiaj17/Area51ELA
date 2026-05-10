'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type RevealProps = {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  y?: number;
  /** Stagger over direct children if true */
  stagger?: boolean;
};

export default function Reveal({
  children,
  as: Tag = 'div',
  className,
  delay = 0,
  y = 24,
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = ref.current;
    const targets = stagger ? Array.from(el.children) : el;

    if (reduce) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const animate = () =>
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay,
        stagger: stagger ? 0.08 : 0,
      });

    // Already in view on mount — animate immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      gsap.set(targets, { opacity: 0, y });
      animate();
      return;
    }

    gsap.set(targets, { opacity: 0, y });

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
  }, [delay, y, stagger]);

  return (
    // @ts-expect-error — dynamic tag with ref
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
