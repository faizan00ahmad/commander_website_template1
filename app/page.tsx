import Link from "next/link";
import Img from "@/components/Img";
import HeroMedia from "@/components/HeroMedia";
import { SectionHead, Awards, CTA } from "@/components/Blocks";
import { businesses, stats, timeline, vision, mission, certifications } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <HeroMedia />
        <div className="container-x relative py-24">
          <p className="eyebrow animate-rise">Commander Group · Since 1996</p>
          <h1 className="h-display mt-6 max-w-5xl animate-rise text-5xl md:text-8xl">
            From the field <br /> to the <span className="text-accent">flame</span>
          </h1>
          <p className="mt-8 max-w-2xl animate-rise text-lg text-white/75 md:text-xl">
            Agro chemicals, seeds and LPG — imported, formulated and distributed across Pakistan.
            Quality within your reach for over 25 years.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-rise">
            <Link href="#legacy" className="btn btn-primary">Our legacy</Link>
            <Link href="#businesses" className="btn btn-ghost">Our businesses</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="container-x grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="md:border-l md:border-line md:pl-8 md:first:border-0 md:first:pl-0">
              <p className="h-display text-3xl text-accent md:text-5xl">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[.18em] text-white/55">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="legacy" className="container-x pt-28">
        <SectionHead eyebrow="Our legacy" title="Three decades of building trust" sub="From a pesticide importer in 1996 to a diversified group serving farmers, retailers and industry across the country." />
        <ol className="relative grid gap-6 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-line md:block" />
          {timeline.map((t) => (
            <li key={t.year} className="relative">
              <span className="relative z-10 inline-flex h-11 items-center rounded-[3px] bg-accent px-4 font-display text-lg font-semibold text-onaccent">{t.year}</span>
              <h3 className="h-display mt-5 text-xl">{t.title}</h3>
              <p className="mt-2 text-white/65">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-x grid items-center gap-12 pt-28 md:grid-cols-2">
        <div>
          <SectionHead eyebrow="Vision & mission" title="Our direction" className="mb-6" />
          <p className="text-lg text-white/75">{vision}</p>
          <ul className="mt-6 space-y-3">
            {mission.map((m) => (
              <li key={m} className="flex gap-3 text-white/75"><span className="mt-1 h-2 w-2 shrink-0 bg-accent" />{m}</li>
            ))}
          </ul>
          <Link href="/about" className="btn btn-primary mt-8">About the group</Link>
        </div>
        <div className="relative">
          <Img name="about-1-1.png" alt="Commander Group head office" className="w-full rounded-[4px]" />
          <div className="absolute -bottom-5 -left-5 hidden border-l-4 border-accent bg-panel p-5 md:block">
            <p className="h-display text-3xl text-accent">25+</p>
            <p className="text-xs uppercase tracking-widest text-white/60">Years of excellence</p>
          </div>
        </div>
      </section>

      <section className="container-x pt-28">
        <div className="grid gap-8 border border-line bg-panel p-8 md:grid-cols-[220px_1fr] md:p-12">
          <Img name="ceo.gif" alt="Mr. Rafique, Chairman" className="w-44 rounded-[4px]" />
          <div>
            <p className="eyebrow">Message from the Chairman</p>
            <blockquote className="h-display mt-4 text-2xl normal-case leading-snug md:text-4xl">
              “We embrace a strong foundation of commitment, integrity and excellence and are moving forward into an era of growth and opportunity.”
            </blockquote>
            <p className="mt-5 text-white/60">Mr. Rafique, Chairman, Commander Group</p>
            <Link href="/leadership" className="mt-4 inline-block text-sm font-bold uppercase tracking-widest text-accent">Read the full message →</Link>
          </div>
        </div>
      </section>

      <section id="businesses" className="container-x pt-28">
        <SectionHead eyebrow="Subsidiaries" title="The Commander family" />
        <div className="grid gap-6 md:grid-cols-3">
          {businesses.map((b) => (
            <Link key={b.slug} href={`/${b.slug}`} className="group relative block overflow-hidden rounded-[4px] border border-line">
              <Img name={b.cover} alt={b.name} className="aspect-[4/5] w-full object-cover object-center transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="eyebrow">Est. {b.since} · {b.tag}</p>
                <h3 className="h-display mt-2 text-2xl">{b.name}</h3>
                <p className="mt-2 text-sm text-white/70">{b.short}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-accent">Explore →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x pt-28">
        <SectionHead eyebrow="Certifications" title="Standards we stand by" />
        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((c) => (
            <div key={c.code} className="border-t-4 border-accent bg-panel p-8">
              <p className="h-display text-3xl">{c.code}</p>
              <p className="mt-2 text-white/60">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Awards />
      <CTA />
    </>
  );
}
