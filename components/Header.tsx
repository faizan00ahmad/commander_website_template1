import Link from "next/link";
import Img from "./Img";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";
import { contact } from "@/lib/data";

const links = [
  { href: "/about", label: "About" },
  { href: "/agro", label: "Commander Agro" },
  { href: "/petrogas", label: "Commander Petrogas" },
  { href: "/gharbeen", label: "Gharbeen" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-line bg-[#05080e] text-xs text-white/70 lg:block">
        <div className="container-x flex h-9 items-center justify-between">
          <span>{contact.address}</span>
          <span className="flex gap-6">
            <a href={contact.phoneHref} className="hover:text-accent">{contact.phone}</a>
            <a href={`mailto:${contact.emails[0]}`} className="hover:text-accent">{contact.emails[0]}</a>
          </span>
        </div>
      </div>
      <div className="border-b border-line bg-bg/90 backdrop-blur">
        <div className="container-x flex h-[68px] items-center justify-between gap-3">
          <Link href="/" aria-label="Commander Group home" className="shrink-0">
            <Img name="logo1-1.png" alt="Commander Group" className="h-9 w-auto dark:hidden" />
            <Img name="logo-1-white.png" alt="Commander Group" className="hidden h-9 w-auto dark:block" />
          </Link>
          <nav className="hidden items-center gap-7 text-[13px] font-semibold uppercase tracking-[.14em] text-fg/80 lg:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="transition hover:text-accent">{l.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="btn btn-primary hidden !px-5 !py-2.5 lg:inline-flex">Get in touch</Link>
            <MobileNav links={links} top={68} className="lg:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}
