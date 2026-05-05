"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPhoneDisplay, site } from "@/lib/site";

const nav = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#services", label: "Services" },
  { href: "/#a-propos", label: "À propos" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phoneLabel = getPhoneDisplay(site.phone);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 border-b border-transparent transition-colors duration-300",
        scrolled ? "border-ink-line/30 bg-white/85 shadow-soft backdrop-blur-md" : "bg-white/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/#accueil"
          className="focus-ring group flex items-center rounded-lg"
          aria-label={`${site.name} — retour à l’accueil`}
        >
          <Image
            src="/images/logo-header.png"
            alt=""
            width={1536}
            height={1024}
            priority
            className="h-20 w-auto max-w-[min(48rem,96vw)] object-contain object-left transition-transform group-hover:scale-[1.02] sm:h-24 lg:h-[6.5rem] lg:max-w-[min(52rem,92vw)]"
            aria-hidden
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="focus-ring ml-1 rounded-full bg-ink-muted px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-ink"
          >
            Contact
          </Link>
          <Link
            href="/#devis"
            className="focus-ring ml-2 rounded-full bg-cta-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-transform hover:scale-[1.02] hover:shadow-glow"
          >
            Demander un devis
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="focus-ring flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="tabular-nums">{phoneLabel}</span>
            <span className="sr-only">Appeler le {phoneLabel}</span>
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-line/40 bg-white text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span className={clsx("block h-0.5 w-5 bg-ink transition", open && "translate-y-2 rotate-45")} />
            <span className={clsx("block h-0.5 w-5 bg-ink transition", open && "opacity-0")} />
            <span className={clsx("block h-0.5 w-5 bg-ink transition", open && "-translate-y-2 -rotate-45")} />
          </span>
        </button>
      </div>

      <div
        id="menu-mobile"
        className={clsx(
          "fixed inset-x-0 top-[57px] z-30 border-b border-ink-line/20 bg-white/95 px-4 py-4 shadow-soft backdrop-blur-lg transition lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-xl px-3 py-3 text-base font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="focus-ring mt-2 rounded-full bg-ink-muted px-4 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-ink"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/#devis"
            className="focus-ring mt-2 rounded-full bg-cta-gradient px-4 py-3 text-center text-base font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Demander un devis
          </Link>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="focus-ring mt-2 rounded-xl border border-brand/35 bg-brand-muted/25 px-4 py-3 text-center text-base font-semibold text-brand hover:border-brand/55 hover:bg-brand-muted/40"
            onClick={() => setOpen(false)}
          >
            Appeler : {phoneLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}
