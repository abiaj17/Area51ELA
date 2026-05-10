import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';

type TheoryCard = {
  index: string;
  name: string;
  glyph: string;
  tone: string;
  border: string;
  blurb: string;
  citation: string;
};

const THEORIES: TheoryCard[] = [
  {
    index: 'T-01',
    name: 'Extraterrestrial',
    glyph: '◉',
    tone: 'text-[--color-redact]',
    border: 'border-[--color-redact]/45',
    blurb: 'Crashed alien spacecraft, reverse-engineered in secret.',
    citation: '(Leonard)',
  },
  {
    index: 'T-02',
    name: 'Advanced Tech',
    glyph: '△',
    tone: 'text-[--color-amber]',
    border: 'border-[--color-amber]/45',
    blurb: 'Real sightings — but classified human aircraft, mistaken for UFOs.',
    citation: '(Tingley)',
  },
  {
    index: 'T-03',
    name: 'Misinformation',
    glyph: '▲',
    tone: 'text-[--color-cyan-glitch]',
    border: 'border-[--color-cyan-glitch]/45',
    blurb: 'The alien story was a smoke screen the government let grow.',
    citation: '(Leonard)',
  },
];

export default function TheoriesGrid() {
  return (
    <section
      id="theories"
      className="relative w-full border-t border-[--color-phosphor]/15 bg-[--color-bg] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          fileNumber="04"
          label="THEORIES"
          title="Three Explanations on the Table"
          caption="presented neutrally"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {THEORIES.map((t, i) => (
            <Reveal key={t.index} as="article" variant="slide-left" delay={i * 0.12} className="h-full">
              <div className={`relative flex h-full flex-col gap-5 border ${t.border} bg-black/40 p-6 backdrop-blur-[1px] transition-colors duration-300 hover:bg-black/60`}>
                <span aria-hidden className="absolute left-0 top-0 h-3 w-3 border-l border-t border-current" />
                <span aria-hidden className="absolute right-0 top-0 h-3 w-3 border-r border-t border-current" />
                <span aria-hidden className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-current" />
                <span aria-hidden className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-current" />

                <header className="flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-[0.35em] text-[--color-phosphor-dim]">
                  <span>{t.index}</span>
                  <span className={`text-3xl ${t.tone}`}>{t.glyph}</span>
                </header>

                <h3 className={`font-mono text-2xl sm:text-3xl font-bold ${t.tone}`}>
                  {t.name}
                </h3>

                <p className="font-mono text-[0.95rem] leading-[1.7] text-[--color-phosphor]/90">
                  {t.blurb}
                </p>

                <footer className="mt-auto font-mono text-[0.6rem] uppercase tracking-[0.35em] text-[--color-phosphor-dim]">
                  src · <span className="text-[--color-phosphor]">{t.citation}</span>
                </footer>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade">
          <p className="mt-10 font-mono text-xs uppercase tracking-[0.35em] text-[--color-phosphor-dim]">
            // the next file weighs them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
