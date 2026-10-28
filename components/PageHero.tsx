export default function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-panel">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[repeating-linear-gradient(135deg,transparent_0_18px,rgb(var(--line))_18px_19px)] opacity-60 md:block" />
      <div className="container-x relative py-20 md:py-28">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="h-display mt-4 max-w-4xl animate-rise text-4xl md:text-7xl">{title}</h1>
        <div className="mt-3 h-1 w-24 bg-accent" />
        {children && <p className="mt-6 max-w-2xl animate-rise text-lg text-white/70">{children}</p>}
      </div>
    </section>
  );
}
