import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';

const CREDITS = [
  {
    asset: 'images/area-51-fence.jpg',
    fig: null,
    where: 'Hero — atmospheric backdrop behind the wordmark',
    description:
      "Photograph of an 'Entering Area 51' sign mounted on a chain-link perimeter fence, with desert mountains and Groom Lake-region sky in the distance.",
    source: 'Source TBD — replace with the original URL or photographer credit before submission.',
  },
  {
    asset: 'area51-aerial.jpg',
    fig: 'fig. 01',
    where: 'Background — Where is Area 51?',
    description:
      'Satellite image of Groom Lake (Area 51) showing the intersecting runway system, taxiways, and classified facility buildings in the Nevada Test and Training Range.',
    source: 'Science Photo Library — aerial/satellite imagery, public educational use.',
  },
  {
    asset: 'u2-groom-lake.jpg',
    fig: 'fig. 02',
    where: 'Background — What actually happened?',
    description:
      'Declassified NACA photograph of U-2 reconnaissance aircraft (tail number NACA 310) on the flight line at Groom Lake, looking east. The U-2 flew at altitudes above commercial aircraft, generating UFO reports in the 1950s.',
    source: 'NASA / NACA — U.S. government work, public domain.',
  },
  {
    asset: 'project-mogul-balloon.jpg',
    fig: 'fig. 03',
    where: 'Background — What actually happened? (Roswell debunked)',
    description:
      'U.S. Air Force photograph of a Project Mogul high-altitude balloon launch, showing military personnel, the balloon envelope, and a corner-reflector radar target attached to the payload string — the same type of equipment whose 1947 crash near Roswell, New Mexico was misidentified as a flying saucer.',
    source: 'U.S. Air Force — U.S. government work, public domain.',
  },
  {
    asset: 'triangular-aircraft.jpg',
    fig: 'fig. 04',
    where: 'Modern Evidence — Still Flying. Still Hidden.',
    description:
      'Composite image documenting triangular "Dorito-shaped" unidentified aircraft photographed near the Nevada Test and Training Range. Aviation analyst David Cenciotti notes the craft appears consistent with a classified stealth platform first spotted in 2014 and still operating in 2026.',
    source: 'The Aviationist / David Cenciotti — reproduced for educational analysis under fair use.',
  },
  {
    asset: 'UnicornStudio scene · spXIETdEZItH4TogDl2M',
    fig: null,
    where: 'Hero — interactive 3D backdrop',
    description:
      'Real-time interactive 3D scene rendered through UnicornStudio. Used as a CRT-screen visual layer; no claims of UFO imagery are made.',
    source: 'Generated via unicornstudio.io — embed code provided by the project owner (Abinav Ajayvivek).',
  },
];

export default function ImageCredits() {
  return (
    <section
      id="image-credits"
      className="relative w-full border-t border-[--color-phosphor]/15 bg-[--color-bg] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          fileNumber="10"
          label="IMAGE CREDITS"
          title="Media Used in This File"
          caption="copyright compliance"
        />

        <Reveal variant="slide-up" stagger className="space-y-6">
          {CREDITS.map((c) => (
            <article
              key={c.asset}
              className="border border-[--color-phosphor]/20 bg-black/40 p-5 sm:p-6 transition-colors hover:border-[--color-phosphor]/55"
            >
              <header className="mb-3 flex flex-wrap items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.35em]">
                {c.fig && <span className="text-[--color-cyan-glitch]">{c.fig}</span>}
                <span className="text-[--color-redact]">ASSET</span>
                <span className="text-[--color-phosphor]">{c.asset}</span>
              </header>
              <p className="font-mono text-sm text-[--color-amber]">{c.where}</p>
              <p className="mt-2 font-mono text-sm leading-relaxed text-[--color-phosphor]/90">
                {c.description}
              </p>
              <p className="mt-3 font-mono text-xs leading-relaxed text-[--color-phosphor-dim]">
                <span className="uppercase tracking-[0.3em] text-[--color-phosphor]">source · </span>
                {c.source}
              </p>
            </article>
          ))}
        </Reveal>

        <Reveal variant="fade">
          <p className="mt-12 font-mono text-[0.7rem] sm:text-xs leading-relaxed text-[--color-phosphor-dim]">
            All quoted material is reproduced under fair-use educational allowance and is fully
            cited above in <span className="text-[--color-phosphor]">FILE 09 — WORKS CITED</span>.
            All photographs and embedded media must list a verifiable source before final
            submission to honor copyright requirements per the project rubric.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
