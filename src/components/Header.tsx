"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { site, type NavItem } from "@/content/site";

function isActive(pathname: string, href: string) {
  const current = pathname.replace(/\/$/, "") || "/";
  return current === href || current.startsWith(`${href}/`);
}

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" onClick={onClick}>
      <Image
        src={site.logo.mark}
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 rounded-full ring-1 ring-steel-bright/40"
      />
      <span className="font-display text-xl font-extrabold tracking-tight text-foam">
        KENIS <span className="font-semibold tracking-[0.12em] text-signal">WCS</span>
      </span>
    </Link>
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
        className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors ${
          active ? "text-signal" : "text-foam/85 hover:text-foam"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open && (
        <div id="solutions-menu" className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
          <ul className="overflow-hidden rounded-lg border border-steel/50 bg-ink-raised p-2 shadow-2xl shadow-black/50">
            <li>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-semibold text-signal hover:bg-steel/30"
              >
                All solutions
              </Link>
            </li>
            {item.children?.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 hover:bg-steel/30"
                >
                  <span className="block text-sm font-medium text-foam">{child.label}</span>
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
    const onScroll = () => setScrolled(window.scrollY > 16);
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
          ? "border-steel/40 bg-ink"
          : scrolled
            ? "border-steel/40 bg-ink/95 backdrop-blur-md"
            : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo onClick={close} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {site.nav.map((item) =>
            item.children ? (
              <SolutionsMenu key={item.href} item={item} active={isActive(pathname, item.href)} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={`py-2 text-sm font-medium transition-colors ${
                  isActive(pathname, item.href) ? "text-signal" : "text-foam/85 hover:text-foam"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href={site.contactCta.href}
            aria-current={isActive(pathname, site.contactCta.href) ? "page" : undefined}
            className="rounded-md bg-signal px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-signal-bright"
          >
            {site.contactCta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-foam lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto overscroll-contain bg-ink lg:hidden"
        >
          <nav className="flex min-h-full flex-col px-5 pb-8 pt-2" aria-label="Mobile">
            <ul className="divide-y divide-steel/40">
              {site.nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href} className="py-1">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={close}
                      className={`flex min-h-12 items-center text-lg font-semibold ${
                        active ? "text-signal" : "text-foam"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="mb-2 ml-1 border-l border-steel/60 pl-4">
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
                className="flex min-h-12 items-center justify-center rounded-md bg-signal text-base font-semibold text-ink"
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
