"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, type NavItem } from "@/content/site";

function isActive(pathname: string, href: string) {
  const current = pathname.replace(/\/$/, "") || "/";
  return current === href || current.startsWith(`${href}/`);
}

function isItemActive(pathname: string, item: NavItem) {
  return (
    isActive(pathname, item.href) ||
    (item.children ?? []).some((child) => !child.href.includes("#") && isActive(pathname, child.href))
  );
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

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="m2.5 4.5 3.5 3.5 3.5-3.5" />
    </svg>
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
        className={`relative flex items-center gap-1.5 py-1 text-sm transition-colors ${
          active ? "text-foam" : "text-mist hover:text-foam"
        }`}
      >
        {item.label}
        <Chevron open={open} />
        <ActiveBar active={active} />
      </button>
      {open && (
        <div id="solutions-menu" className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4">
          <ul className="rounded-sm border border-steel/40 bg-ink-raised p-2 shadow-2xl shadow-black/50">
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
            <li className="mt-1 border-t border-steel/30 pt-1">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-sm px-3 py-2.5 text-sm font-medium text-signal hover:bg-steel/25"
              >
                All solutions →
              </Link>
            </li>
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

  const solid = scrolled || open;
  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        open
          ? "border-b border-steel/20 bg-ink"
          : solid
            ? "border-b border-steel/20 bg-ink/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18 sm:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={close}>
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

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active = isItemActive(pathname, item);
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
        <div
          id="mobile-nav"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-steel/20 px-5 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {site.nav.map((item) => {
              const active = isItemActive(pathname, item);
              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block border-l-2 py-2.5 pl-3 text-base ${
                      active ? "border-signal text-foam" : "border-transparent text-mist hover:text-foam"
                    }`}
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mb-1 ml-3 border-l border-steel/40 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 text-sm text-mist hover:text-foam"
                            onClick={close}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
            <Link
              href={site.contactCta.href}
              className="mt-3 rounded-sm bg-signal px-4 py-3 text-center text-sm font-semibold text-ink"
              onClick={close}
            >
              {site.contactCta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
