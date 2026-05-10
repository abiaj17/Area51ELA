export default function ClassifiedHeader() {
  return (
    <header className="flex items-start justify-between gap-4 font-mono text-[0.65rem] sm:text-xs uppercase tracking-[0.3em] text-[--color-phosphor-dim]">
      <div className="flex items-center gap-2 text-[--color-redact]">
        <span aria-hidden="true">[</span>
        <span className="font-bold tracking-[0.4em]">TOP&nbsp;SECRET&nbsp;//&nbsp;NOFORN</span>
        <span aria-hidden="true">]</span>
      </div>

      <div className="hidden md:block text-center text-[--color-phosphor]">
        <span className="opacity-60">DOC&nbsp;//</span>{' '}
        <span className="font-semibold">51-AJ-2026</span>{' '}
        <span className="opacity-60">— DOSSIER ALPHA</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="dot-rec" aria-hidden="true" />
        <span className="text-[--color-redact] font-semibold">REC</span>
      </div>
    </header>
  );
}
