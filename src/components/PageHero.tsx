import type { ReactNode } from "react";
import Link from "next/link";
import { FloorPhoto, type Photo } from "@/components/FloorPhoto";

export function PageHero({
  label,
  title,
  intro,
  parent,
  photo = "conveyors",
  photoPosition = "75% 60%",
  children,
}: {
  label: string;
  title: string;
  intro: string;
  parent?: { label: string; href: string };
  photo?: Photo;
  photoPosition?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-steel/20 bg-ink pb-16 pt-32 sm:pb-20 sm:pt-40">
      <FloorPhoto photo={photo} position={photoPosition} priority />
      <div className="absolute inset-0 bg-ink/75 lg:hidden" aria-hidden />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/85 to-ink/30 lg:block" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <nav aria-label="Breadcrumb" className="text-xs tracking-[0.2em] uppercase">
          <ol className="flex flex-wrap items-center gap-2">
            {[{ label: "Home", href: "/" }, ...(parent ? [parent] : [])].map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-2">
                <Link href={crumb.href} className="text-steel-bright transition-colors hover:text-foam">
                  {crumb.label}
                </Link>
                <span className="text-steel" aria-hidden>
                  /
                </span>
              </li>
            ))}
            <li className="font-medium text-signal" aria-current="page">
              {label}
            </li>
          </ol>
        </nav>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-foam sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{intro}</p>
        {children}
      </div>
    </section>
  );
}
