"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

function isActive(pathname: string, href: string) {
  const current = pathname.replace(/\/$/, "") || "/";
  return current === href || current.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        solid
          ? "border-b border-steel/20 bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18 sm:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={site.logo.mark}
            alt=""
            width={44}
            height={44}
            className="h-9 w-9 rounded-full ring-1 ring-steel-bright/40 sm:h-11 sm:w-11"
          />
          <span className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold tracking-tight text-foam sm:text-2xl">
              KENIS
            </span>
            <span className="font-display text-xl font-light tracking-[0.18em] text-signal sm:text-2xl">
              WCS
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-sm transition-colors ${
                  active ? "text-foam" : "text-mist hover:text-foam"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-signal transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
          <Link
            href={site.contactCta.href}
            aria-current={isActive(pathname, site.contactCta.href) ? "page" : undefined}
            className="rounded-sm bg-signal px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-signal-bright"
          >
            {site.contactCta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-foam lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span
              className={`h-px w-full bg-foam transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span className={`h-px w-full bg-foam transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-full bg-foam transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-steel/20 px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {site.nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-l-2 py-2.5 pl-3 text-base ${
                    active ? "border-signal text-foam" : "border-transparent text-mist hover:text-foam"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={site.contactCta.href}
              className="mt-3 rounded-sm bg-signal px-4 py-3 text-center text-sm font-semibold text-ink"
              onClick={() => setOpen(false)}
            >
              {site.contactCta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
