import type { ReactNode } from "react";
import Link from "next/link";
import { FloorPhoto } from "@/components/FloorPhoto";

export function PageHero({
  label,
  title,
  intro,
  parent,
  children,
}: {
  label: string;
  title: string;
  intro: string;
  parent?: { label: string; href: string };
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-14 pt-28 sm:pb-20 sm:pt-36">
      <FloorPhoto photo="conveyors" position="75% 60%" priority />
      <div className="absolute inset-0 bg-ink/75 lg:hidden" aria-hidden />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/85 to-ink/30 lg:block" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <nav aria-label="Breadcrumb" className="text-xs font-semibold tracking-[0.18em] uppercase">
          <ol className="flex flex-wrap items-center gap-2">
            {[{ label: "Home", href: "/" }, ...(parent ? [parent] : [])].map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-2">
                <Link href={crumb.href} className="text-steel-bright hover:text-foam">
                  {crumb.label}
                </Link>
                <span className="text-steel" aria-hidden>
                  /
                </span>
              </li>
            ))}
            <li className="text-signal" aria-current="page">
              {label}
            </li>
          </ol>
        </nav>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foam sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{intro}</p>
        {children}
      </div>
    </section>
  );
}
