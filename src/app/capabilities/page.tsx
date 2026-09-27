import type { Metadata } from "next";
import Link from "next/link";
import { capabilities } from "@/content/capabilities";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Capabilities",
  description: capabilities.description,
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero label="Capabilities" title={capabilities.title} intro={capabilities.intro}>
        <ul className="mt-8 flex flex-wrap gap-2">
          {capabilities.services.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block rounded-sm border border-steel/50 bg-ink/60 px-3 py-1.5 text-xs text-steel-bright transition-colors hover:border-signal hover:text-foam sm:text-sm"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="bg-ink-raised py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-sm font-medium tracking-[0.2em] text-signal uppercase">
            How we deliver
          </h2>
          <ol className="mt-8 grid gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {capabilities.lifecycle.map((s, i) => (
              <li key={s.step}>
                <Reveal delay={i * 0.05} className="border-t border-steel/40 pt-4">
                  <span className="font-mono text-xs text-steel-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 font-display text-lg font-semibold text-foam">{s.step}</p>
                  <p className="mt-1 text-sm text-mist">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-16 px-5 sm:px-8">
          {capabilities.services.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="grid scroll-mt-28 gap-8 border-t border-steel/30 pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
            >
              <Reveal>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-foam sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">{s.summary}</p>
                <p className="mt-6 text-xs tracking-[0.2em] text-steel-bright uppercase">Outcome</p>
                <p className="mt-2 font-medium text-signal">{s.outcome}</p>
                {s.link && (
                  <Link
                    href={s.link.href}
                    className="mt-6 inline-block rounded-sm border border-steel/50 px-4 py-2 text-sm font-medium text-foam transition-colors hover:border-signal hover:text-signal"
                  >
                    {s.link.label} →
                  </Link>
                )}
              </Reveal>
              <Reveal delay={0.08}>
                <h3 className="text-xs tracking-[0.2em] text-steel-bright uppercase">What we do</h3>
                <ul className="mt-4 space-y-3">
                  {s.activities.map((a) => (
                    <li key={a} className="flex gap-3 text-sm text-foam sm:text-base">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-signal" aria-hidden />
                      {a}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
