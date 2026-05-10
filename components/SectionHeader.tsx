import Reveal from './Reveal';

type Props = {
  fileNumber: string;   // "02"
  label: string;        // "BRIEF"
  title: string;        // "Background & Facts"
  caption?: string;     // optional secondary line
};

export default function SectionHeader({ fileNumber, label, title, caption }: Props) {
  return (
    <Reveal as="header" stagger className="mb-10 md:mb-14">
      <div className="flex flex-wrap items-center gap-3 font-mono text-[0.6rem] sm:text-xs uppercase tracking-[0.4em] text-[--color-phosphor-dim]">
        <span className="text-[--color-redact] font-bold">[ FILE&nbsp;{fileNumber} ]</span>
        <span className="opacity-60">//</span>
        <span className="text-[--color-phosphor]">{label}</span>
        {caption && (
          <>
            <span className="opacity-60">//</span>
            <span className="text-[--color-amber] opacity-90">{caption}</span>
          </>
        )}
      </div>
      <h2 className="mt-3 font-mono font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[--color-phosphor]">
        {title}
      </h2>
      <div
        aria-hidden="true"
        className="mt-5 h-px w-full bg-gradient-to-r from-[--color-phosphor]/60 via-[--color-phosphor]/20 to-transparent"
      />
    </Reveal>
  );
}
