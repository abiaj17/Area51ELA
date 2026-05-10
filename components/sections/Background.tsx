import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';

const FACTS = [
  {
    label: 'WHERE',
    title: 'Nevada Desert',
    body: '23×25 mile site, 85–120 miles NW of Las Vegas. Airspace R-4808N — no civilian flights.',
    cite: '(Sinha)',
  },
  {
    label: 'WHY',
    title: 'Cold War Cover',
    body: 'Built 1955 for the CIA to test aircraft the Soviets couldn\'t photograph. Admitted only in 2013.',
    cite: '(Leonard)',
  },
  {
    label: 'WHAT',
    title: 'Classified Tech',
    body: 'U-2 spy planes at record altitudes triggered the first UFO reports. Roswell was a Project Mogul balloon.',
    cite: '(Tingley)',
  },
];

const TIMELINE = [
  { year: '1947', event: 'Roswell crash — actually a Project Mogul spy balloon.', cite: '(Tingley)' },
  { year: '1955', event: 'CIA establishes the 23×25-mile site.', cite: '(Leonard)' },
  { year: '1950s', event: 'U-2 flights spark the first wave of UFO sightings.', cite: '(Sinha)' },
  { year: '2013', event: 'CIA finally admits Area 51 exists — 58 years late.', cite: '(Leonard)' },
  { year: '2024', event: 'Pentagon AARO: "no empirical evidence" for alien tech.', cite: '(Tingley)' },
  { year: '2026', event: 'Triangular "Dorito" aircraft photographed at night.', cite: '(Cenciotti)' },
];

export default function Background() {
  return (
    <section
      id="background"
      className="relative w-full border-t border-[--color-phosphor]/15 bg-[--color-bg] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          fileNumber="03"
          label="BACKGROUND"
          title="What Area 51 Actually Is"
          caption="location · purpose · impact"
        />

        {/* 3-up fact grid */}
        <Reveal variant="slide-up" stagger>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {FACTS.map((f) => (
              <div
                key={f.label}
                className="border border-[--color-phosphor]/25 bg-black/40 p-5 backdrop-blur-[1px]"
              >
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-[--color-redact]">
                  {f.label}
                </div>
                <h3 className="mt-2 font-mono text-xl font-bold text-[--color-amber]">
                  {f.title}
                </h3>
                <p className="mt-3 font-mono text-sm leading-[1.7] text-[--color-phosphor]/90">
                  {f.body}
                </p>
                <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[--color-phosphor-dim]">
                  src · <span className="text-[--color-phosphor]">{f.cite}</span>
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* hero image */}
        <Reveal variant="scanline" className="mt-12">
          <figure>
            <div className="relative overflow-hidden border border-[--color-phosphor]/20 bg-[--color-phosphor]/5">
              <img
                src="/images/area51-aerial.jpg"
                alt="Satellite view of Area 51 / Groom Lake"
                width={900}
                height={600}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full object-cover opacity-80 grayscale"
              />
            </div>
            <figcaption className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[--color-phosphor-dim]">
              fig. 01 · Groom Lake — Science Photo Library
            </figcaption>
          </figure>
        </Reveal>

        {/* paired evidence images */}
        <Reveal variant="slide-up" className="mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <figure>
              <div className="relative overflow-hidden border border-[--color-phosphor]/20 bg-[--color-phosphor]/5">
                <img
                  src="/images/u2-groom-lake.jpg"
                  alt="U-2 spy plane on the flight line at Groom Lake"
                  width={600}
                  height={420}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover opacity-80 grayscale"
                />
              </div>
              <figcaption className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[--color-phosphor-dim]">
                fig. 02 · U-2 spy plane — NASA / NACA · public domain
              </figcaption>
            </figure>

            <figure>
              <div className="relative overflow-hidden border border-[--color-phosphor]/20 bg-[--color-phosphor]/5">
                <img
                  src="/images/project-mogul-balloon.jpg"
                  alt="Project Mogul balloon launch"
                  width={600}
                  height={420}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover opacity-80 grayscale"
                />
              </div>
              <figcaption className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[--color-phosphor-dim]">
                fig. 03 · Project Mogul balloon — USAF · public domain
              </figcaption>
            </figure>
          </div>
        </Reveal>

        {/* TIMELINE */}
        <Reveal variant="slide-left" stagger className="mt-16">
          <div>
            <h3 className="mb-6 font-mono text-xl sm:text-2xl font-bold text-[--color-amber]">
              <span className="text-[--color-phosphor-dim] mr-3">&gt;</span>Timeline
            </h3>
            <ol className="relative space-y-5 border-l border-[--color-phosphor]/30 pl-6">
              {TIMELINE.map((row) => (
                <li key={row.year} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[31px] top-2 h-2 w-2 rotate-45 bg-[--color-phosphor]"
                  />
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-[--color-redact]">
                    {row.year}
                  </div>
                  <p className="mt-1 font-mono text-sm sm:text-[0.95rem] text-[--color-phosphor]/90">
                    {row.event}{' '}
                    <cite className="not-italic text-[--color-phosphor-dim]">{row.cite}</cite>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
