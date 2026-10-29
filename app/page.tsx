import Link from "next/link";
import Img from "@/components/Img";
import HeroMedia from "@/components/HeroMedia";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { SectionHead, Awards, CTA } from "@/components/Blocks";
import { businesses, stats, timeline, vision, mission, certifications } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[88svh] items-center overflow-hidden">
        <HeroMedia />
        <div className="container-x relative py-28">
          <p className="eyebrow animate-rise flex items-center gap-3">
            <span className="h-px w-10 bg-accent" /> Commander Group · Since 1996
          </p>
          <h1 className="h-display text-balance mt-6 max-w-5xl animate-rise text-5xl [animation-delay:.1s] md:text-8xl">
            From the field <br /> to the <span className="text-accent">flame</span>
          </h1>
          <p className="mt-8 max-w-2xl animate-rise text-lg leading-relaxed text-white/80 [animation-delay:.25s] md:text-xl">
            Agro chemicals, seeds and LPG — imported, formulated and distributed across Pakistan.
            Quality within your reach for over 25 years.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-rise [animation-delay:.4s]">
            <Link href="/contact" className="btn btn-primary">Become a distributor</Link>
            <Link href="#businesses" className="btn btn-ghost-light">Explore our businesses</Link>
          </div>
        </div>
        <a href="#trust" aria-label="Scroll down" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[.3em] text-white/60 md:flex">
          Scroll
          <span className="relative h-10 w-px overflow-hidden bg-white/25"><span className="absolute inset-x-0 top-0 h-4 animate-[rise_1.6s_ease-in-out_infinite] bg-accent" /></span>
        </a>
      </section>

      <section id="trust" className="border-y border-line bg-panel">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-xs font-bold uppercase tracking-[.18em] text-fg/70">
          {certifications.map((c) => (
            <span key={c.code} className="flex items-center gap-2"><span className="text-accent">✓</span>{c.code} <span className="font-medium normal-case tracking-normal text-fg/60">{c.label}</span></span>
          ))}
        </div>
      </section>

      <section className="bg-bg">
        <div className="container-x grid grid-cols-2 gap-y-10 py-16 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="md:border-l md:border-line md:pl-8 md:first:border-0 md:first:pl-0">
              <CountUp value={s.value} className="h-display block text-4xl text-accent md:text-6xl" />
              <p className="mt-2 text-xs font-semibold uppercase tracking-[.18em] text-fg/55">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="legacy" className="container-x pt-20">
        <SectionHead eyebrow="Our legacy" title="Three decades of building trust" sub="From a pesticide importer in 1996 to a diversified group serving farmers, retailers and industry across the country." />
        <ol className="relative grid gap-6 md:grid-cols-3">
          {timeline.map((t, i) => (
            <li key={t.year}>
              <Reveal delay={i * 140} className="lift relative h-full overflow-hidden border border-line bg-panel p-8">
                <span aria-hidden className="h-display pointer-events-none absolute -right-2 -top-4 select-none text-8xl text-fg/[0.04]">{t.year}</span>
                <span className="relative inline-flex h-10 items-center rounded-[3px] bg-accent px-4 font-display text-lg font-semibold text-onaccent">{t.year}</span>
                <h3 className="h-display relative mt-6 text-xl">{t.title}</h3>
                <p className="relative mt-3 leading-relaxed text-fg/65">{t.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-x grid items-center gap-14 pt-28 md:grid-cols-2">
        <Reveal>
          <SectionHead eyebrow="Vision & mission" title="Our direction" className="mb-6" />
          <p className="text-lg leading-relaxed text-fg/75">{vision}</p>
          <ul className="mt-6 space-y-3">
            {mission.map((m) => (
              <li key={m} className="flex gap-3 text-fg/75"><span className="mt-2 h-2 w-2 shrink-0 bg-accent" />{m}</li>
            ))}
          </ul>
          <Link href="/about" className="btn btn-primary mt-8">About the group</Link>
        </Reveal>
        <Reveal delay={150} className="relative">
          <Img name="about-1-1.png" alt="Commander Group head office" className="w-full rounded-[4px] shadow-2xl shadow-black/50" />
          <div className="absolute -bottom-5 -left-5 hidden border-l-4 border-accent bg-panel p-5 shadow-xl md:block">
            <p className="h-display text-3xl text-accent">25+</p>
            <p className="text-xs uppercase tracking-widest text-fg/60">Years of excellence</p>
          </div>
        </Reveal>
      </section>

      <section className="container-x pt-28">
        <Reveal>
          <div className="relative grid gap-8 overflow-hidden border border-line bg-panel p-8 md:grid-cols-[220px_1fr] md:p-12">
            <span aria-hidden className="pointer-events-none absolute right-6 top-0 select-none font-display text-[12rem] leading-none text-accent/10">“</span>
            <Img name="ceo.gif" alt="Mr. Rafique, Chairman" className="relative w-44 rounded-[4px] ring-2 ring-accent/60 ring-offset-4 ring-offset-panel" />
            <div className="relative">
              <p className="eyebrow">Message from the Chairman</p>
              <blockquote className="h-display text-balance mt-4 text-2xl normal-case leading-snug md:text-4xl">
                “We embrace a strong foundation of commitment, integrity and excellence and are moving forward into an era of growth and opportunity.”
              </blockquote>
              <p className="mt-5 text-fg/60">Mr. Rafique, Chairman, Commander Group</p>
              <Link href="/leadership" className="mt-4 inline-block text-sm font-bold uppercase tracking-widest text-accent">Read the full message →</Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="businesses" className="container-x pt-28">
        <SectionHead eyebrow="Subsidiaries" title="The Commander family" />
        <div className="grid gap-6 md:grid-cols-3">
          {businesses.map((b, i) => (
            <Reveal key={b.slug} delay={i * 120}>
              <Link href={`/${b.slug}`} className="group relative block overflow-hidden rounded-[4px] border border-line">
                <Img name={b.cover} alt={b.name} className="aspect-[4/5] w-full object-cover object-center transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent transition group-hover:from-black/95" />
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition duration-500 group-hover:scale-x-100" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="eyebrow">Est. {b.since} · {b.tag}</p>
                  <h3 className="h-display mt-2 text-2xl">{b.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{b.short}</p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-accent transition group-hover:translate-x-2">Explore →</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pt-28">
        <SectionHead eyebrow="Certifications" title="Standards we stand by" />
        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.code} delay={i * 120}>
              <div className="lift h-full border-t-4 border-accent bg-panel p-8">
                <p className="h-display text-3xl">{c.code}</p>
                <p className="mt-2 text-fg/60">{c.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Awards />
      <CTA />
    </>
  );
}
