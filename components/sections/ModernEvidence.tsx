import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';
import triangularAircraft from '../assets/triangular-aircraft.jpg';

export default function ModernEvidence() {
  return (
    <section
      id="modern"
      className="relative w-full border-t border-[--color-phosphor]/15 bg-[--color-bg] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          fileNumber="06"
          label="MODERN EVIDENCE"
          title="Still Flying. Still Hidden."
          caption="2026 // ongoing"
        />

        <Reveal variant="glitch">
          <div className="space-y-8 font-mono text-base sm:text-[1.05rem] leading-[1.85] text-[--color-phosphor]/95">
            <p>
              The Area 51 mystery has not been solved — only better explained. Photographs taken in
              early 2026 captured an unmarked, triangular &ldquo;Dorito-shaped&rdquo; aircraft
              flying at night over the Nevada Test and Training Range, and aviation analysts
              suggest{' '}
              <span className="text-[--color-amber]">
                &quot;the new image seems to suggest that the mysterious aircraft first spotted in
                2014 may still be flying 12 years later... some aircraft remain in operation for
                decades before their existence becomes publicly known&quot;
              </span>{' '}
              <cite className="not-italic text-[--color-phosphor-dim]">(Cenciotti)</cite>.
            </p>

              <figure className="my-6">
                <div className="relative overflow-hidden border border-[--color-phosphor]/20 bg-[--color-phosphor]/5">
                  <img
                    src={triangularAircraft.src}
                    alt="Thermal image of triangular Dorito-shaped aircraft captured near Area 51, January 2026"
                    width={triangularAircraft.width}
                    height={triangularAircraft.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover opacity-85 grayscale"
                  />
                </div>
                <figcaption className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[--color-phosphor-dim]">
                  fig. 04 · Thermal image of triangular &ldquo;Dorito-shaped&rdquo; aircraft
                  captured near Area 51 on January 14, 2026, using an AGM TM50-640 thermographic
                  camera · The Aviationist / Anders Otteson, 2026
                </figcaption>
              </figure>

            <p>
              The same reporting notes that the operation continues to use deliberate communications
              tradecraft —{' '}
              <span className="text-[--color-amber]">
                &quot;it is not uncommon for military crews to rely on innocuous-sounding
                terminology to mask the nature of an operation, particularly during sensitive or
                real operations&quot;
              </span>{' '}
              <cite className="not-italic text-[--color-phosphor-dim]">(Cenciotti)</cite>. In other
              words, the misinformation pattern that built the alien myth in the 1950s is the same
              pattern still operating today.
            </p>

            {/* pull quote */}
            <div className="border-l-2 border-[--color-amber] bg-black/40 px-6 py-5 sm:px-8 sm:py-6">
              <p className="font-mono text-lg sm:text-xl leading-snug text-[--color-amber]">
                The mystery isn&rsquo;t solved.
                <br />
                It&rsquo;s just better explained.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
