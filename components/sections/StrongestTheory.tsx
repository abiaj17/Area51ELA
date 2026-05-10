import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';

const VERDICTS = [
  {
    rank: 'WINNER',
    theory: 'Misinformation',
    tone: 'text-[--color-cyan-glitch]',
    border: 'border-[--color-cyan-glitch]/50',
    point: 'Fits every fact at once.',
    detail:
      'Government admitted 58 years of denial. Declassified reporting shows officials let UFO myths grow to hide weapons tests.',
    cite: '(Leonard)',
  },
  {
    rank: 'INCOMPLETE',
    theory: 'Advanced Tech',
    tone: 'text-[--color-amber]',
    border: 'border-[--color-amber]/50',
    point: 'True, but missing a layer.',
    detail:
      'AARO confirms classified aircraft caused real sightings — but doesn\'t explain why anyone believed they were alien.',
    cite: '(Tingley)',
  },
  {
    rank: 'WEAKEST',
    theory: 'Extraterrestrial',
    tone: 'text-[--color-redact]',
    border: 'border-[--color-redact]/50',
    point: 'No surviving evidence.',
    detail:
      'Pentagon 2024 review: every reverse-engineering claim is inaccurate. Witnesses don\'t hold up. Documents don\'t exist.',
    cite: '(Tingley)',
  },
];

export default function StrongestTheory() {
  return (
    <section
      id="strongest"
      className="relative w-full border-t border-[--color-phosphor]/15 bg-[--color-bg] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          fileNumber="05"
          label="ARGUMENT"
          title="Misinformation Wins."
          caption="weighing the three theories"
        />

        {/* thesis */}
        <Reveal variant="zoom">
          <div className="border-l-4 border-[--color-cyan-glitch] bg-black/40 p-6 sm:p-8">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-[--color-phosphor-dim]">
              verdict
            </div>
            <p className="mt-3 font-mono text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[--color-phosphor]">
              Only the{' '}
              <span className="text-[--color-cyan-glitch]">misinformation theory</span>{' '}
              fits every fact at the same time.
            </p>
          </div>
        </Reveal>

        {/* 3 verdict cards */}
        <Reveal variant="slide-up" stagger className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {VERDICTS.map((v) => (
            <article
              key={v.theory}
              className={`relative flex flex-col gap-3 border ${v.border} bg-black/40 p-5 backdrop-blur-[1px]`}
            >
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-[--color-phosphor-dim]">
                {v.rank}
              </div>
              <h3 className={`font-mono text-xl sm:text-2xl font-bold ${v.tone}`}>
                {v.theory}
              </h3>
              <p className={`font-mono text-sm font-bold ${v.tone}`}>{v.point}</p>
              <p className="font-mono text-sm leading-[1.7] text-[--color-phosphor]/90">
                {v.detail}
              </p>
              <p className="mt-auto font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[--color-phosphor-dim]">
                src · <span className="text-[--color-phosphor]">{v.cite}</span>
              </p>
            </article>
          ))}
        </Reveal>

        {/* closer */}
        <Reveal variant="fade" className="mt-10">
          <p className="border-l-2 border-[--color-amber] bg-black/30 px-6 py-5 font-mono text-base sm:text-lg leading-[1.7] text-[--color-phosphor]/95">
            Advanced technology is true. Misinformation is{' '}
            <span className="text-[--color-amber] font-bold">why we ever called it alien</span>.
            It wins because it contains the other theory and explains the myth.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
