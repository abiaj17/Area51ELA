import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';

/**
 * The required two-paragraph MLA written analysis, formatted as a paper-on-the-desk
 * inside the otherwise terminal-themed dossier. Times New Roman (Tinos),
 * double-spaced, parenthetical citations.
 */
export default function WrittenAnalysis() {
  return (
    <section
      id="written"
      className="relative w-full border-t border-[--color-phosphor]/15 bg-[--color-bg] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          fileNumber="08"
          label="WRITTEN ANALYSIS"
          title="MLA · Two-Paragraph Submission"
          caption="times new roman // double spaced"
        />

        <Reveal>
          <article
            className="relative border border-[--color-phosphor]/20 bg-[#f5f1e6] p-8 sm:p-12 md:p-16 text-black shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {/* paper header */}
            <header className="mb-10 border-b border-black/30 pb-6 text-[15px] leading-snug">
              <div>Abinav Ajayvivek</div>
              <div>English Language Arts</div>
              <div>Mystery Project — Area 51</div>
              <div>28 April 2026</div>
            </header>

            <h3 className="mb-8 text-center text-2xl font-bold">
              Area 51: Real Aircraft Beneath a Manufactured Myth
            </h3>

            <div
              className="space-y-8 text-[17px]"
              style={{ lineHeight: 2 }}
            >
              <p className="indent-12">
                Area 51 sits inside the Nevada Test and Training Range, a stretch of desert that
                the United States government refused to acknowledge for nearly six decades. The
                site is &ldquo;situated in the Nevada desert, around 85 to 120 miles northwest of
                Las Vegas&rdquo; and &ldquo;lies near a dry lake bed known as Groom Lake&rdquo;
                (Sinha). After fifty-eight years of public denial, &ldquo;the CIA finally admitted
                the existence of Area 51 in 2013, revealing that the 23 by 25-mile rectangular
                area... had been set up in 1955 to test top-secret aircraft&rdquo; (Leonard). The
                most famous incident tied to the base — the alleged 1947 Roswell crash — has been
                definitively traced to a different secret program; the Pentagon now states that
                &ldquo;Project Mogul, a high-altitude balloon program designed to spy on Soviet
                nuclear tests... was responsible for a balloon crash outside of Roswell... That
                incident led to the widely known story of a crashed flying saucer&rdquo; (Tingley).
                Genuine classified aircraft generated the rest of the early reports, because
                &ldquo;when the U-2 spy plane first flew in the 1950s, it operated at altitudes
                higher than commercial aircraft... This led to reports of strange objects in the
                sky&rdquo; (Sinha). Strange aircraft are still being recorded near the base today;
                a recent photograph suggests that &ldquo;the mysterious aircraft first spotted in
                2014 may still be flying 12 years later&rdquo; (Cenciotti). The people impacted are
                not victims of an alien event but a public, a press, and three generations of UFO
                believers reacting to a real but deliberately hidden federal aerospace program.
              </p>

              <p className="indent-12">
                Three competing theories explain Area 51: extraterrestrial visitation, classified
                human aerospace testing, and government-driven misinformation. The extraterrestrial
                theory holds that &ldquo;a crashed alien spacecraft and the bodies of its pilots
                were taken to Area 51&rdquo; (Sinha), and is fueled by figures such as &ldquo;Bob
                Lazar, an American who went on TV claiming he had worked at Area 51 &lsquo;reverse
                engineering&rsquo; one of nine alien spacecraft&rdquo; (Leonard); however, the
                Pentagon&rsquo;s 2024 historical review concluded that &ldquo;claims involving
                specific people, known locations... and documents allegedly involved in or related
                to the reverse-engineering of extraterrestrial technology, are inaccurate&rdquo;
                (Tingley). The most accurate theory is that the sightings represent a combination
                of secret aerospace programs and intentional disinformation, because &ldquo;at
                least some UFO sightings since the 1940s represent &lsquo;never-before-seen
                experimental and operational space, rocket and air systems, including stealth
                technologies&rsquo;&rdquo; (Tingley). The military actively cultivated the alien
                myth as cover, and &ldquo;the US government &lsquo;fabricated evidence of alien
                technology&rsquo; in an effort to distract from secret military tests&rdquo; while
                &ldquo;officials allowed UFO myths to take root in the interest of national
                security&rdquo; (Leonard). New sightings of an unmarked, triangular
                &ldquo;Dorito-shaped&rdquo; aircraft suggest the program continues, and that
                &ldquo;the scenario could be consistent with some form of radar cross-section
                comparison or &lsquo;fly-off&rsquo; test&rdquo; (Cenciotti). This project
                represents that conclusion deliberately: the redacted-document hero, the CRT-glitch
                wordmark, and the evidence panels frame Area 51 as a real classified human program
                rather than a UFO archive — pushing the visitor, through primary-source quotes
                from the CIA admission, AARO&rsquo;s findings, and current sightings, toward the
                human-aerospace and disinformation reading.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
