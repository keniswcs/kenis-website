import type { ReactNode } from "react";
import Link from "next/link";

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
    <section className="relative isolate overflow-hidden border-b border-steel/20 bg-ink pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(42,69,88,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(42,69,88,0.28)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <nav aria-label="Breadcrumb" className="text-xs tracking-[0.2em] uppercase">
          <Link href="/" className="text-steel-bright transition-colors hover:text-foam">
            Home
          </Link>
          <span className="mx-2 text-steel" aria-hidden>
            /
          </span>
          {parent && (
            <>
              <Link href={parent.href} className="text-steel-bright transition-colors hover:text-foam">
                {parent.label}
              </Link>
              <span className="mx-2 text-steel" aria-hidden>
                /
              </span>
            </>
          )}
          <span className="font-medium text-signal" aria-current="page">
            {label}
          </span>
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
