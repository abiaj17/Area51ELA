'use client';

import { Children, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

function SectionCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const doorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.opacity = '0';
      cardRef.current.style.transform = 'translateY(24px)';
    }
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    const door = doorRef.current;
    if (!card || !door) return;

    const reveal = () => {
      const tl = gsap.timeline();
      tl.to(card, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
      tl.to(door, { yPercent: -100, duration: 0.55, ease: 'power2.inOut' }, '-=0.3');
    };

    // Already visible on mount — reveal immediately, no observer needed
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="
        relative overflow-hidden
        border border-[--color-phosphor]/20
        bg-[--color-bg]
        shadow-[0_4px_32px_-16px_rgba(124,255,178,0.1)]
        [&>section]:border-t-0
      "
    >
      <div
        ref={doorRef}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-full bg-[--color-bg]"
        style={{ borderBottom: '1px solid rgba(124,255,178,0.18)' }}
      />
      {children}
    </div>
  );
}

export default function CardStack({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 px-3 pb-16 pt-4 md:gap-4 md:px-6 md:pb-20 lg:px-10">
      {Children.map(children, (child, i) => (
        <SectionCard key={i}>{child}</SectionCard>
      ))}
    </div>
  );
}
