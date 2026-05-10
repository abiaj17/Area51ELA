export default function HeroFooter() {
  return (
    <footer className="flex flex-col-reverse gap-3 sm:flex-row sm:items-end sm:justify-between font-mono text-[0.65rem] sm:text-xs uppercase tracking-[0.28em] text-[--color-phosphor-dim]">
      <div className="space-y-1">
        <div className="text-[--color-phosphor]">
          37°14′06″N&nbsp;&nbsp;//&nbsp;&nbsp;115°48′40″W
        </div>
        <div className="opacity-70">GROOM&nbsp;LAKE,&nbsp;NEVADA — RESTRICTED&nbsp;AIRSPACE&nbsp;R-4808N</div>
      </div>

      <div className="flex items-center gap-6">
        <span className="hidden sm:inline opacity-60">
          INSTANCE&nbsp;01&nbsp;//&nbsp;ELA&nbsp;CLASSIFIED&nbsp;FILE
        </span>
        <a
          href="#intro"
          className="declass-link text-[--color-phosphor] hover:text-[--color-amber] transition-colors"
        >
          <span>↓ DECLASSIFY</span>
        </a>
      </div>
    </footer>
  );
}
