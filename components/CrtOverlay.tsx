export default function CrtOverlay() {
  return (
    <>
      <div aria-hidden="true" className="scanlines pointer-events-none absolute inset-0 z-30" />
      <div aria-hidden="true" className="vignette pointer-events-none absolute inset-0 z-30" />
    </>
  );
}
