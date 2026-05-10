import ClassifiedHeader from './ClassifiedHeader';
import CrtOverlay from './CrtOverlay';
import GlitchTitle from './GlitchTitle';
import HeroFooter from './HeroFooter';
import UnicornScene from './UnicornScene';
import SplinePlanet from './SplinePlanet';

const UNICORN_PROJECT_ID = 'spXIETdEZItH4TogDl2M';

export default function Hero() {
  return (
    <section className="crt-flicker relative isolate min-h-svh w-full overflow-hidden bg-[--color-bg]">
      {/* layer -1 — atmospheric photo backdrop, monochromed to fit the CRT theme */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[url('/area-51-fence.jpg')] bg-cover bg-center"
          style={{
            opacity: 0.22,
            filter: 'grayscale(100%) contrast(1.05) brightness(0.55)',
          }}
        />
        <div className="absolute inset-0 bg-[--color-phosphor-deep] mix-blend-color opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/85" />
      </div>

      {/* layer 0 — UnicornStudio interactive backdrop (sits above the photo) */}
      <div className="absolute inset-0 z-[1]">
        <UnicornScene
          projectId={UNICORN_PROJECT_ID}
          className="absolute inset-0 h-full w-full opacity-70 mix-blend-screen pointer-events-none"
        />
        {/* mask out the UnicornStudio watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 z-[5] h-16 w-56 bg-[--color-bg]"
        />
      </div>

      {/* layer 0.5 — Spline planet */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <SplinePlanet />
      </div>

      {/* layer 1 — phosphor wash so dark scenes still feel CRT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(124,255,178,0.06),transparent_60%)]"
      />

      {/* layer 2 — content grid */}
      <div className="relative z-20 mx-auto flex min-h-svh max-w-[1600px] flex-col px-6 py-6 md:px-10 md:py-8">
        <ClassifiedHeader />

        <div className="flex flex-1 items-center justify-center py-12">
          <GlitchTitle text="AREA 51" />
        </div>

        <HeroFooter />
      </div>

      {/* layer 3 — scanlines + vignette + grain (above content) */}
      <CrtOverlay />
    </section>
  );
}
