import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';

type TheoryCard = {
  index: string;
  name: string;
  glyph: string;
  tone: string;          // tailwind text color class for accents
  border: string;        // tailwind border color class
  blurb: string;
  quote: string;
  citation: string;
};

const THEORIES: TheoryCard[] = [
  {
    index: 'T-01',
    name: 'Extraterrestrial',
    glyph: '◉',
    tone: 'text-[--color-redact]',
    border: 'border-[--color-redact]/45',
    blurb:
      'A crashed alien spacecraft and its crew were recovered and stored at Area 51 for reverse engineering.',
    quote:
      '"Bob Lazar, an American who went on TV claiming he had worked at Area 51 \'reverse engineering\' one of nine alien spacecraft."',
    citation: '(Leonard)',
  },
  {
    index: 'T-02',
    name: 'Advanced Technology',
    glyph: '△',
    tone: 'text-[--color-amber]',
    border: 'border-[--color-amber]/45',
    blurb:
      'The objects people see are real — but they are classified, experimental human aircraft mistaken for UFOs.',
    quote:
      '"At least some UFO sightings since the 1940s represent \'never-before-seen experimental and operational space, rocket and air systems, including stealth technologies.\'"',
    citation: '(Tingley)',
  },
  {
    index: 'T-03',
    name: 'Misinformation',
    glyph: '▲',
    tone: 'text-[--color-cyan-glitch]',
    border: 'border-[--color-cyan-glitch]/45',
    blurb:
      'The U.S. government deliberately encouraged the alien narrative as a smoke screen to protect classified weapons programs.',
    quote:
      '"The US government \'fabricated evidence of alien technology\' in an effort to distract from secret military tests."',
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
          {THEORIES.map((t) => (
            <Reveal key={t.index} as="article" className="h-full">
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

                <p className="font-mono text-sm sm:text-[0.95rem] leading-relaxed text-[--color-phosphor]/90">
                  {t.blurb}
                </p>

                <blockquote className="mt-auto border-l border-[--color-phosphor]/30 pl-4 font-mono text-xs sm:text-sm leading-relaxed text-[--color-phosphor]/80">
                  <span aria-hidden className="mr-1 text-[--color-phosphor-dim]">&gt;</span>
                  {t.quote}
                </blockquote>

                <footer className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-[--color-phosphor-dim]">
                  source · <span className="text-[--color-phosphor]">{t.citation}</span>
                </footer>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 font-mono text-xs uppercase tracking-[0.35em] text-[--color-phosphor-dim]">
            // these are presented without bias. the next file weighs them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
