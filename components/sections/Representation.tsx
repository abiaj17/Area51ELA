import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';

const ITEMS = [
  {
    sigil: '01',
    title: 'Redacted Hero',
    body:
      'The TOP SECRET / NOFORN strip and blinking REC dot frame the page as a declassified document. This represents the FACT that Area 51 was officially denied for 58 years before the CIA admission of 2013 (Leonard).',
  },
  {
    sigil: '02',
    title: 'CRT-Glitch Wordmark',
    body:
      'The chromatic-split, scrambling "AREA 51" title visualizes the THEORY of misinformation: the same name carries multiple, contradictory readings depending on which signal you trust (Leonard; Cenciotti).',
  },
  {
    sigil: '03',
    title: 'Live UnicornStudio Backdrop',
    body:
      'The interactive 3D scene behind the wordmark stands in for the unidentified aircraft still being photographed near Groom Lake — a literal "still flying 12 years later" presence (Cenciotti).',
  },
  {
    sigil: '04',
    title: 'Color-Coded Evidence Tags',
    body:
      'Each quote card is tagged BACKGROUND, FACT, THEORY · ALIEN, THEORY · AEROSPACE, THEORY · MISINFO, or COUNTER-CLAIM, so the visitor sees the relative weight of evidence — heavy on aerospace + misinformation, thin on extraterrestrial (Tingley).',
  },
  {
    sigil: '05',
    title: 'Scanlines & Phosphor Green',
    body:
      'The terminal aesthetic situates the mystery in its real era — Cold War-vintage classified aerospace work, U-2 sightings in the 1950s, Project Mogul over New Mexico in 1947 — not in a sci-fi future (Sinha; Tingley).',
  },
];

export default function Representation() {
  return (
    <section
      id="representation"
      className="relative w-full border-t border-[--color-phosphor]/15 bg-[--color-bg] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          fileNumber="07"
          label="PROJECT EXPLANATION"
          title="How This Dossier Carries the Argument"
          caption="design ↔ thesis"
        />

        <Reveal stagger className="space-y-4">
          {ITEMS.map((item) => (
            <div
              key={item.sigil}
              className="grid grid-cols-[auto_1fr] gap-5 sm:gap-8 border-l-2 border-[--color-phosphor]/40 pl-5 sm:pl-8 py-2 transition-colors hover:border-[--color-amber]"
            >
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[--color-redact] tabular-nums">
                {item.sigil}
              </div>
              <div>
                <h3 className="font-mono text-lg sm:text-xl font-semibold text-[--color-phosphor]">
                  {item.title}
                </h3>
                <p className="mt-2 font-mono text-[0.9rem] sm:text-base leading-relaxed text-[--color-phosphor]/80">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
