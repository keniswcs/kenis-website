"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Phone } from "lucide-react";
import { site, type NavItem } from "@/content/site";

function isActive(pathname: string, href: string) {
  const current = pathname.replace(/\/$/, "") || "/";
  return current === href || current.startsWith(`${href}/`);
}

function ActiveBar({ active }: { active: boolean }) {
  return (
    <span
      className={`absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-signal transition-opacity ${
        active ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden
    />
  );
}

function SolutionsMenu({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="solutions-menu"
        onClick={() => setOpen((v) => !v)}
        className={`relative flex items-center gap-1 py-1 text-sm transition-colors ${
          active ? "text-foam" : "text-mist hover:text-foam"
        }`}
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
        <ActiveBar active={active} />
      </button>
      {open && (
        <div id="solutions-menu" className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4">
          <ul className="overflow-hidden rounded-sm border border-steel/40 bg-ink-raised p-2 shadow-2xl shadow-black/50">
            <li>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-sm px-3 py-2.5 text-sm font-medium text-signal hover:bg-steel/25"
              >
                All solutions →
              </Link>
            </li>
            {item.children?.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-3 py-2.5 hover:bg-steel/25"
                >
                  <span className="block text-sm text-foam">{child.label}</span>
                  <span className="block text-xs text-mist">{child.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
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

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  // No backdrop-filter while open: it would make the header the containing block for the fixed mobile panel.
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        open
          ? "border-steel/20 bg-ink"
          : scrolled
            ? "border-steel/20 bg-ink/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={close}>
          <Image
            src={site.logo.mark}
            alt=""
            width={44}
            height={44}
            className="h-9 w-9 rounded-full ring-1 ring-steel-bright/40 sm:h-11 sm:w-11"
          />
          <span className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold tracking-tight text-foam sm:text-2xl">KENIS</span>
            <span className="font-display text-xl font-light tracking-[0.18em] text-signal sm:text-2xl">WCS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active = isActive(pathname, item.href);
            return item.children ? (
              <SolutionsMenu key={item.href} item={item} active={active} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-sm transition-colors ${
                  active ? "text-foam" : "text-mist hover:text-foam"
                }`}
              >
                {item.label}
                <ActiveBar active={active} />
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
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-foam lg:hidden"
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
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto overscroll-contain border-t border-steel/20 bg-ink sm:top-18 lg:hidden"
        >
          <nav className="flex min-h-full flex-col px-5 pb-8 pt-3" aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {site.nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={close}
                      className={`flex min-h-12 items-center border-l-2 pl-3 font-display text-lg ${
                        active ? "border-signal text-foam" : "border-transparent text-foam/90 hover:text-foam"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="mb-2 ml-3 border-l border-steel/40 pl-4">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={close}
                              className="flex min-h-11 items-center text-base text-mist hover:text-foam"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto pt-8">
              <Link
                href={site.contactCta.href}
                aria-current={isActive(pathname, site.contactCta.href) ? "page" : undefined}
                onClick={close}
                className="flex min-h-12 items-center justify-center rounded-sm bg-signal text-base font-semibold text-ink"
              >
                {site.contactCta.label}
              </Link>
              <div className="mt-5 flex flex-col gap-3 text-sm text-mist">
                <a href={`tel:${site.phone.tel}`} className="flex items-center gap-2 hover:text-foam">
                  <Phone className="h-4 w-4 text-signal" aria-hidden /> {site.phone.display}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-foam">
                  <Mail className="h-4 w-4 text-signal" aria-hidden /> {site.email}
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
