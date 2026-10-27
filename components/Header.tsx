"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const nav = [
  { href: "#collectie", label: "Collectie" },
  { href: "#verhaal", label: "Verhaal" },
  { href: "#details", label: "Details" },
  { href: "#nieuwsbrief", label: "Contact" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid || open ? "bg-nacht/95 backdrop-blur" : "bg-transparent"
      } text-kalk`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <nav className="hidden flex-1 gap-9 md:flex" aria-label="Hoofdmenu">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="eyebrow text-kalk/70 transition hover:text-kalk">
              {n.label}
            </a>
          ))}
        </nav>

        <button
          className="flex-1 md:hidden"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block h-px w-6 bg-kalk" />
          <span className={`mt-[7px] block h-px bg-kalk transition-all ${open ? "w-6" : "w-4"}`} />
        </button>

        <Link href="/" aria-label="Groningen Élite — home" className="shrink-0">
          <Logo size="sm" />
        </Link>

        <div className="flex flex-1 items-center justify-end gap-6">
          <a href="#" className="eyebrow hidden text-kalk/70 transition hover:text-kalk sm:inline">
            Account
          </a>
          <a href="#" className="eyebrow flex items-center gap-2 text-kalk/70 transition hover:text-kalk" aria-label="Winkelmand, 0 artikelen">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M5 8h14l-1.2 12H6.2L5 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            <span>0</span>
          </a>
        </div>
      </div>

      {open && (
        <nav className="container-x flex flex-col gap-6 border-t border-kalk/10 pb-8 pt-6 md:hidden" aria-label="Mobiel menu">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-serif text-3xl">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
