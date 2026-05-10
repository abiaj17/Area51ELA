import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';

export default function StrongestTheory() {
  return (
    <section
      id="strongest"
      className="relative w-full border-t border-[--color-phosphor]/15 bg-[--color-bg] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          fileNumber="05"
          label="ARGUMENT"
          title="Misinformation Wins."
          caption="weighing the three theories"
        />

        <Reveal variant="zoom">
          <div className="space-y-8 font-mono text-base sm:text-[1.05rem] leading-[1.85] text-[--color-phosphor]/95">
            <p>
              The misinformation theory is the most accurate explanation of Area 51, because it is
              the only theory that fits every fact at the same time. The U.S. government has
              admitted to the secrecy itself — the CIA &quot;finally admitted the existence of Area
              51 in 2013&quot; after fifty-eight years of public denial{' '}
              <cite className="not-italic text-[--color-phosphor-dim]">(Leonard)</cite> — which
              proves the apparatus to hide things at this site is real, well-funded, and willing to
              lie publicly for decades.
            </p>

            <p>
              <span className="font-bold text-[--color-amber]">This is supported by</span> direct
              evidence that the alien narrative was actively cultivated, not passively allowed.
              According to reporting based on declassified material,{' '}
              <span className="text-[--color-amber]">
                &quot;the US government &lsquo;fabricated evidence of alien technology&rsquo; in an
                effort to distract from secret military tests&quot;
              </span>{' '}
              and{' '}
              <span className="text-[--color-amber]">
                &quot;officials allowed UFO myths to take root in the interest of national security
                — for instance, to prevent the Soviet Union from detecting vulnerabilities&quot;
              </span>{' '}
              <cite className="not-italic text-[--color-phosphor-dim]">(Leonard)</cite>. The
              government had a strategic reason to make the public look up at the sky and think
              &ldquo;aliens&rdquo; instead of &ldquo;new American spy plane.&rdquo;
            </p>

            <p>
              <span className="font-bold text-[--color-amber]">In contrast,</span> the
              extraterrestrial theory is the weakest. The Pentagon&rsquo;s 2024 historical review
              of every UFO claim it could find concluded that{' '}
              <span className="text-[--color-amber]">
                &quot;claims involving specific people, known locations... and documents allegedly
                involved in or related to the reverse-engineering of extraterrestrial technology,
                are inaccurate&quot;
              </span>{' '}
              <cite className="not-italic text-[--color-phosphor-dim]">(Tingley)</cite>. Witnesses
              like Bob Lazar do not survive scrutiny; the documents do not exist; the official
              record refutes them.
            </p>

            <p>
              The advanced-technology theory is true but{' '}
              <span className="italic">incomplete</span>. AARO confirmed that{' '}
              <span className="text-[--color-amber]">
                &quot;at least some UFO sightings since the 1940s represent
                &lsquo;never-before-seen experimental and operational space, rocket and air
                systems, including stealth technologies&rsquo;&quot;
              </span>{' '}
              <cite className="not-italic text-[--color-phosphor-dim]">(Tingley)</cite>. Yes, the
              objects are real classified aircraft. But that fact alone does not explain why the
              public ever believed they were alien — the deception layer does. Misinformation is
              the theory that contains advanced technology and explains the public mythology around
              it. It wins because it is the most complete answer.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
