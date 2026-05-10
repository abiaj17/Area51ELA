'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const SCRAMBLE_GLYPHS = '!<>-_\\/[]{}—=+*^?#________█▓▒░';
const SCRAMBLE_DURATION = 360;
const HOVER_SCRAMBLE_DURATION = 180;

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function randomGlyph(original: string) {
  if (original === ' ') return ' ';
  return SCRAMBLE_GLYPHS[Math.floor(Math.random() * SCRAMBLE_GLYPHS.length)];
}

type Props = {
  text: string;
  subline?: string;
};

export default function GlitchTitle({ text, subline = '> ACCESS LEVEL // REVOKED' }: Props) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  const stopScramble = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  }, []);

  const runScramble = useCallback(
    (reverse = false, duration = SCRAMBLE_DURATION) => {
      if (prefersReducedMotion()) {
        setDisplay(text);
        return;
      }
      stopScramble();
      startRef.current = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const advance = reverse ? 1 - progress : progress;

        const next = text
          .split('')
          .map((char, i) => {
            const charThreshold = i / text.length;
            if (advance >= charThreshold) return char;
            return randomGlyph(char);
          })
          .join('');

        setDisplay(next);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          setDisplay(text);
          frameRef.current = null;
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    },
    [stopScramble, text],
  );

  useEffect(() => {
    runScramble(false);
    return stopScramble;
  }, [runScramble, stopScramble]);

  return (
    <div
      className="glitch-wrap relative flex flex-col items-center select-none"
      onPointerEnter={() => runScramble(false, HOVER_SCRAMBLE_DURATION)}
    >
      <h1
        className="glitch reveal-decode font-mono font-extrabold tracking-tight"
        data-text={text}
        style={{
          fontSize: 'clamp(4rem, 18vw, 16rem)',
        }}
      >
        {display}
      </h1>

      <p className="mt-6 font-mono text-base sm:text-lg md:text-xl uppercase tracking-[0.35em] text-[--color-phosphor]">
        <span className="opacity-60">— FILED BY </span>
        <span className="font-semibold">ABINAV&nbsp;AJAYVIVEK</span>
        <span className="opacity-60"> —</span>
      </p>

      <p
        className="access-line mt-3 font-mono text-[0.7rem] sm:text-xs uppercase tracking-[0.4em] text-[--color-amber]"
        aria-hidden="true"
      >
        {subline}
      </p>
    </div>
  );
}
