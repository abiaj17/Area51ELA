import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';

const SOURCES = [
  {
    db: 'EBSCO · school database',
    citation:
      'Leonard, Tom. "How the U.S. military fuelled conspiracy theories about aliens — to cover up its own top-secret weapons testing in Area 51." Daily Mail (via Regional Business News), Associated Newspapers Ltd, 14 June 2025, research.ebsco.com/c/haz56g/search/details/xojcwvhtr5. Accessed 28 April 2026.',
    href: 'https://research.ebsco.com/c/haz56g/search/details/xojcwvhtr5',
    parenthetical: '(Leonard)',
  },
  {
    db: 'Online news outlet',
    citation:
      'Sinha, Anushree. "Area 51: The Truth About UFOs, Aliens in America\'s Most Mysterious Military Site." The Times of India, 2026, timesofindia.indiatimes.com/science/area-51-the-truth-about-ufos-aliens-in-americas-most-mysterious-military-site/articleshow/128842449.cms. Accessed 28 April 2026.',
    href: 'https://timesofindia.indiatimes.com/science/area-51-the-truth-about-ufos-aliens-in-americas-most-mysterious-military-site/articleshow/128842449.cms',
    parenthetical: '(Sinha)',
  },
  {
    db: 'Aviation reporting',
    citation:
      'Cenciotti, David. "Mysterious \'Dorito-Shaped\' Aircraft Spotted at Night Near Area 51." The Aviationist, 18 January 2026, theaviationist.com/2026/01/18/dorito-shaped-aircraft-spotted-near-area-51/. Accessed 28 April 2026.',
    href: 'https://theaviationist.com/2026/01/18/dorito-shaped-aircraft-spotted-near-area-51/',
    parenthetical: '(Cenciotti)',
  },
  {
    db: 'Science journalism',
    citation:
      'Tingley, Brett. "Pentagon UFO Office Finds \'No Empirical Evidence\' for Alien Technology." Space.com, Future US Inc., 8 March 2024, www.space.com/pentagon-ufo-office-aaro-historical-report-no-emprical-evidence-alien-technology. Accessed 28 April 2026.',
    href: 'https://www.space.com/pentagon-ufo-office-aaro-historical-report-no-emprical-evidence-alien-technology',
    parenthetical: '(Tingley)',
  },
];

export default function WorksCited() {
  return (
    <section
      id="works-cited"
      className="relative w-full border-t border-[--color-phosphor]/15 bg-[--color-bg] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          fileNumber="09"
          label="WORKS CITED"
          title="MLA · 9th Edition"
          caption="4 sources // 1 from school database"
        />

        <Reveal stagger className="space-y-7">
          {SOURCES.map((s) => (
            <div key={s.parenthetical} className="border-l-2 border-[--color-phosphor]/30 pl-5">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.35em]">
                <span className="text-[--color-amber]">{s.db}</span>
                <span className="opacity-50">//</span>
                <span className="text-[--color-phosphor-dim]">in-text:</span>
                <span className="text-[--color-phosphor]">{s.parenthetical}</span>
              </div>
              <p className="mt-3 font-mono text-sm sm:text-[0.95rem] leading-relaxed text-[--color-phosphor]/90">
                {s.citation}
              </p>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[--color-cyan-glitch] hover:text-[--color-amber] transition-colors"
              >
                ↗ open source
              </a>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <p className="mt-16 font-mono text-[0.65rem] sm:text-xs uppercase tracking-[0.4em] text-[--color-phosphor-dim]">
            END&nbsp;OF&nbsp;FILE&nbsp;//&nbsp;CLASSIFIED&nbsp;DOSSIER&nbsp;51-AJ-2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}
