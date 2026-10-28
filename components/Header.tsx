"use client";
import Link from "next/link";
import { useState } from "react";
import Img from "./Img";
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
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-line bg-black/60 text-xs text-white/70 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <span>{contact.address}</span>
          <span className="flex gap-6">
            <a href={contact.phoneHref} className="hover:text-accent">{contact.phone}</a>
            <a href={`mailto:${contact.emails[0]}`} className="hover:text-accent">{contact.emails[0]}</a>
          </span>
        </div>
      </div>
      <div className="border-b border-line bg-bg/90 backdrop-blur">
        <div className="container-x flex h-[72px] items-center justify-between">
          <Link href="/" onClick={() => setOpen(false)} aria-label="Commander Group home">
            <Img name="logo-1-white.png" alt="Commander Group" className="h-10 w-auto" />
          </Link>
          <nav className="hidden items-center gap-7 text-[13px] font-semibold uppercase tracking-[.14em] text-white/80 lg:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="transition hover:text-accent">{l.label}</Link>
            ))}
          </nav>
          <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="block h-0.5 w-7 bg-white" />
            <span className="mt-1.5 block h-0.5 w-7 bg-white" />
            <span className="mt-1.5 block h-0.5 w-7 bg-white" />
          </button>
        </div>
        {open && (
          <nav className="container-x flex flex-col gap-4 border-t border-line py-5 text-sm font-semibold uppercase tracking-widest lg:hidden">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
