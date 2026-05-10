import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative w-full border-t border-[--color-phosphor]/15 bg-[--color-bg] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          fileNumber="02"
          label="INTRODUCTION"
          title="Aliens. Aircraft. Or a Smoke Screen?"
          caption="the question this file answers"
        />

        <Reveal variant="scanline">
          <div className="space-y-10">
            <p className="font-mono text-base sm:text-lg md:text-xl leading-[1.8] text-[--color-phosphor]/95">
              Area 51 is a 23-by-25-mile rectangle of restricted Nevada desert that the U.S.
              government denied for nearly six decades. For three generations, every strange light
              over the Mojave became evidence that something non-human had landed there. The truth
              underneath the myth has always been more interesting — and more useful — than the
              myth itself.
            </p>

            {/* the hook */}
            <div className="border border-[--color-phosphor]/30 bg-black/40 p-6 sm:p-8 backdrop-blur-[1px]">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-[--color-phosphor-dim]">
                key&nbsp;question
              </div>
              <p className="mt-3 font-mono text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[--color-phosphor]">
                Is it aliens, advanced classified aircraft, or deliberate
                <span className="text-[--color-amber]"> misinformation</span>?
              </p>
            </div>

            {/* the thesis */}
            <div className="grid grid-cols-[auto_1fr] gap-5 border-l-2 border-[--color-redact] pl-5 sm:pl-8">
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-[--color-redact] writing-mode-vertical">
                THESIS
              </div>
              <p className="font-mono text-base sm:text-lg leading-[1.8] text-[--color-phosphor]/95">
                This file argues the{' '}
                <span className="bg-[--color-redact] px-1.5 py-0.5 font-bold text-black">
                  misinformation theory
                </span>{' '}
                is the most accurate. The strange things people see near Area 51 are real — but
                they are classified human aircraft, and the alien framing was an actively
                cultivated cover story. The evidence below pushes you toward that reading.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
