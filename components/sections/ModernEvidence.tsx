import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';

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
          <p className="font-mono text-lg sm:text-xl md:text-2xl leading-[1.6] text-[--color-phosphor]/95">
            A triangular &ldquo;Dorito-shaped&rdquo; aircraft was photographed
            over Nevada in January 2026. Same site. Same secrecy. Same pattern.
          </p>
        </Reveal>

        <Reveal variant="scanline" className="mt-10">
          <figure>
            <div className="relative overflow-hidden border border-[--color-phosphor]/20 bg-[--color-phosphor]/5">
              <img
                src="/images/triangular-aircraft.jpg"
                alt="Thermal image of triangular aircraft near Area 51, January 2026"
                width={900}
                height={540}
                loading="lazy"
                decoding="async"
                className="w-full object-cover opacity-85 grayscale"
              />
            </div>
            <figcaption className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[--color-phosphor-dim]">
              fig. 04 · Jan 14, 2026 · AGM TM50-640 thermal camera · The Aviationist
            </figcaption>
          </figure>
        </Reveal>

        <Reveal variant="slide-up" stagger className="mt-10 space-y-4">
          <div className="border-l-2 border-[--color-amber] bg-black/40 px-6 py-4">
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-[--color-phosphor-dim]">
              analyst
            </div>
            <p className="mt-2 font-mono text-base sm:text-lg leading-[1.6] text-[--color-amber]">
              &ldquo;Aircraft remain in operation for decades before their existence
              becomes publicly known.&rdquo;{' '}
              <cite className="not-italic text-[--color-phosphor-dim]">— Cenciotti</cite>
            </p>
          </div>

          <div className="border-l-2 border-[--color-cyan-glitch] bg-black/40 px-6 py-4">
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-[--color-phosphor-dim]">
              tradecraft
            </div>
            <p className="mt-2 font-mono text-base sm:text-lg leading-[1.6] text-[--color-cyan-glitch]">
              &ldquo;Military crews rely on innocuous-sounding terminology to mask
              operations.&rdquo;{' '}
              <cite className="not-italic text-[--color-phosphor-dim]">— Cenciotti</cite>
            </p>
          </div>
        </Reveal>

        {/* closing line */}
        <Reveal variant="zoom" className="mt-10">
          <div className="border border-[--color-amber]/60 bg-black/40 px-6 py-6 sm:px-8 sm:py-8 text-center">
            <p className="font-mono text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-[--color-amber]">
              The mystery isn&rsquo;t solved.
              <br />
              <span className="text-[--color-phosphor]">It&rsquo;s just better explained.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
