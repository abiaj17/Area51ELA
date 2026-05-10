import Reveal from './Reveal';

type Tag = 'background' | 'fact' | 'theory-et' | 'theory-aero' | 'theory-misinfo' | 'counter';

const TAG_LABELS: Record<Tag, { label: string; tone: string }> = {
  background:      { label: 'BACKGROUND',         tone: 'text-[--color-phosphor]'    },
  fact:            { label: 'FACT',               tone: 'text-[--color-phosphor]'    },
  'theory-et':     { label: 'THEORY · ALIEN',     tone: 'text-[--color-redact]'      },
  'theory-aero':   { label: 'THEORY · AEROSPACE', tone: 'text-[--color-amber]'       },
  'theory-misinfo':{ label: 'THEORY · MISINFO',   tone: 'text-[--color-cyan-glitch]' },
  counter:         { label: 'COUNTER-CLAIM',      tone: 'text-[--color-phosphor-dim]'},
};

type Props = {
  index: string;       // "Q-04"
  tag: Tag;
  source: string;      // "(Tingley)"
  quote: string;
};

export default function QuoteCard({ index, tag, source, quote }: Props) {
  const meta = TAG_LABELS[tag];
  return (
    <Reveal as="article" className="group relative">
      <div className="relative flex h-full flex-col gap-4 border border-[--color-phosphor]/20 bg-black/40 p-5 backdrop-blur-[1px] transition-colors duration-300 hover:border-[--color-phosphor]/55">
        {/* corner brackets */}
        <span aria-hidden className="absolute left-0 top-0 h-3 w-3 border-l border-t border-[--color-phosphor]" />
        <span aria-hidden className="absolute right-0 top-0 h-3 w-3 border-r border-t border-[--color-phosphor]" />
        <span aria-hidden className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-[--color-phosphor]" />
        <span aria-hidden className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[--color-phosphor]" />

        {/* meta row */}
        <header className="flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-[0.3em]">
          <span className="text-[--color-phosphor-dim]">{index}</span>
          <span className={`font-bold ${meta.tone}`}>{meta.label}</span>
        </header>

        {/* the quote */}
        <blockquote className="font-mono text-sm sm:text-[0.95rem] leading-relaxed text-[--color-phosphor]/95">
          <span aria-hidden className="mr-1 text-[--color-phosphor-dim]">&gt;</span>
          {quote}
        </blockquote>

        {/* source */}
        <footer className="mt-auto flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[--color-phosphor-dim]">
          <span>SOURCE</span>
          <cite className="not-italic text-[--color-phosphor]">{source}</cite>
        </footer>
      </div>
    </Reveal>
  );
}
