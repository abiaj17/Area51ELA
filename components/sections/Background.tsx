import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';
import area51Aerial from '../assets/area51-aerial.jpg';
import u2GroomLake from '../assets/u2-groom-lake.jpg';
import projectMogul from '../assets/project-mogul-balloon.jpg';

const TIMELINE = [
  { year: '1947', event: 'Roswell crash — later traced to Project Mogul, a Cold War spy-balloon program.', cite: '(Tingley)' },
  { year: '1955', event: 'CIA establishes the 23×25-mile site to test top-secret aircraft.', cite: '(Leonard)' },
  { year: '1950s', event: 'U-2 spy plane flies above commercial altitudes; pilots and civilians report "strange objects."', cite: '(Sinha)' },
  { year: '2013', event: 'CIA finally admits the existence of Area 51 — 58 years after it was built.', cite: '(Leonard)' },
  { year: '2024', event: 'Pentagon AARO review finds "no empirical evidence" for alien technology.', cite: '(Tingley)' },
  { year: '2026', event: 'Triangular "Dorito-shaped" aircraft photographed at night near the base.', cite: '(Cenciotti)' },
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

        <Reveal variant="slide-up">
          <div className="space-y-12 font-mono text-[0.95rem] sm:text-base leading-[1.85] text-[--color-phosphor]/90">
            {/* WHERE */}
            <div>
              <h3 className="mb-3 font-mono text-xl sm:text-2xl font-bold text-[--color-amber]">
                <span className="text-[--color-phosphor-dim] mr-3">&gt;</span>Where is Area 51?
              </h3>
              <p>
                Area 51 sits inside the Nevada Test and Training Range. The site is{' '}
                <span className="text-[--color-amber]">
                  &quot;situated in the Nevada desert, around 85 to 120 miles northwest of Las
                  Vegas&quot;
                </span>{' '}
                and &quot;lies near a dry lake bed known as Groom Lake&quot;{' '}
                <cite className="not-italic text-[--color-phosphor-dim]">(Sinha)</cite>. The
                airspace above it is designated R-4808N — restricted, no civilian flights, no
                photographs.
              </p>

              <figure className="mt-6">
                <div className="relative overflow-hidden border border-[--color-phosphor]/20 bg-[--color-phosphor]/5">
                  <img
                    src={area51Aerial.src}
                    alt="Satellite view of Area 51 / Groom Lake showing runways and facilities"
                    width={area51Aerial.width}
                    height={area51Aerial.height}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full object-cover opacity-80 grayscale"
                  />
                </div>
                <figcaption className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[--color-phosphor-dim]">
                  fig. 01 · Satellite image of Groom Lake / Area 51 showing intersecting runways and
                  classified facilities — Nevada Test and Training Range · Science Photo Library
                </figcaption>
              </figure>
            </div>

            {/* WHY */}
            <div>
              <h3 className="mb-3 font-mono text-xl sm:text-2xl font-bold text-[--color-amber]">
                <span className="text-[--color-phosphor-dim] mr-3">&gt;</span>Why was it created?
              </h3>
              <p>
                It was a Cold War decision. The CIA needed an isolated place to develop aircraft
                the Soviet Union could not photograph or detect. After fifty-eight years of public
                denial,{' '}
                <span className="text-[--color-amber]">
                  &quot;the CIA finally admitted the existence of Area 51 in 2013, revealing that
                  the 23 by 25-mile rectangular area... had been set up in 1955 to test top-secret
                  aircraft&quot;
                </span>{' '}
                <cite className="not-italic text-[--color-phosphor-dim]">(Leonard)</cite>. The
                site&rsquo;s entire purpose has always been the test-flight of classified human
                technology — never anything else.
              </p>
            </div>

            {/* WHAT */}
            <div>
              <h3 className="mb-3 font-mono text-xl sm:text-2xl font-bold text-[--color-amber]">
                <span className="text-[--color-phosphor-dim] mr-3">&gt;</span>What actually happened?
              </h3>
              <p>
                Real classified aircraft generated the original sightings. &quot;When the U-2 spy
                plane first flew in the 1950s, it operated at altitudes higher than commercial
                aircraft... This led to reports of strange objects in the sky&quot;{' '}
                <cite className="not-italic text-[--color-phosphor-dim]">(Sinha)</cite>. The most
                famous &ldquo;UFO crash&rdquo; — the 1947 Roswell incident — was a balloon, not a
                spacecraft:{' '}
                <span className="text-[--color-amber]">
                  &quot;Project Mogul, a high-altitude balloon program designed to spy on Soviet
                  nuclear tests... was responsible for a balloon crash outside of Roswell... That
                  incident led to the widely known story of a crashed flying saucer&quot;
                </span>{' '}
                <cite className="not-italic text-[--color-phosphor-dim]">(Tingley)</cite>. The
                people impacted are the ones reacting to the secrecy — a confused public, a curious
                press, and three generations of UFO believers — not the victims of any alien
                event.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <figure>
                  <div className="relative overflow-hidden border border-[--color-phosphor]/20 bg-[--color-phosphor]/5">
                    <img
                      src={u2GroomLake.src}
                      alt="U-2 spy planes (NACA 310) on the flight line at Groom Lake, Area 51"
                      width={u2GroomLake.width}
                      height={u2GroomLake.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover opacity-80 grayscale"
                    />
                  </div>
                  <figcaption className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[--color-phosphor-dim]">
                    fig. 02 · U-2 aircraft (NACA 310) on the Groom Lake flight line looking east ·
                    NASA / NACA declassified — public domain
                  </figcaption>
                </figure>

                <figure>
                  <div className="relative overflow-hidden border border-[--color-phosphor]/20 bg-[--color-phosphor]/5">
                    <img
                      src={projectMogul.src}
                      alt="Project Mogul high-altitude balloon launch with military personnel and radar reflector"
                      width={projectMogul.width}
                      height={projectMogul.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover opacity-80 grayscale"
                    />
                  </div>
                  <figcaption className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[--color-phosphor-dim]">
                    fig. 03 · Project Mogul balloon launch — the program whose 1947 crash outside
                    Roswell was misidentified as a flying saucer · U.S. Air Force — public domain
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* TIMELINE */}
            <div className="pt-4">
              <h3 className="mb-6 font-mono text-xl sm:text-2xl font-bold text-[--color-amber]">
                <span className="text-[--color-phosphor-dim] mr-3">&gt;</span>Timeline
              </h3>
              <ol className="relative space-y-6 border-l border-[--color-phosphor]/30 pl-6">
                {TIMELINE.map((row) => (
                  <li key={row.year} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[31px] top-2 h-2 w-2 rotate-45 bg-[--color-phosphor]"
                    />
                    <div className="font-mono text-xs uppercase tracking-[0.3em] text-[--color-redact]">
                      {row.year}
                    </div>
                    <p className="mt-1 text-[--color-phosphor]/90">
                      {row.event}{' '}
                      <cite className="not-italic text-[--color-phosphor-dim]">{row.cite}</cite>
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
