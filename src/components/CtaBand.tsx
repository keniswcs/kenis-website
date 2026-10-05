import Link from "next/link";
import { site } from "@/content/site";

export function CtaBand() {
  return (
    <section className="border-t border-signal/25 bg-gradient-to-r from-signal/15 via-ink-raised to-ink-raised py-12 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foam sm:text-3xl">
            {site.cta.title}
          </h2>
          <p className="mt-3 max-w-xl text-base text-mist">{site.cta.body}</p>
        </div>
        <Link
          href={site.cta.href}
          className="shrink-0 self-start rounded-sm bg-signal px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-signal-bright md:self-auto"
        >
          {site.cta.label}
        </Link>
      </div>
    </section>
  );
}
