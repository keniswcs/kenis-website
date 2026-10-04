import type { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/content/solutions";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  ...seo.pages.solutions,
  description: solutions.description,
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero label="Solutions" title={solutions.title} intro={solutions.intro}>
        <ul className="mt-8 flex flex-wrap gap-2">
          {solutions.items.map((s) => (
            <li key={s.id}>
              <Link
                href={s.href}
                className="inline-flex min-h-10 items-center rounded-sm border border-steel/50 bg-ink/70 px-3 text-sm text-foam transition-colors hover:border-signal hover:text-signal"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </PageHero>

      {solutions.items.map((s, i) => (
        <Section key={s.id} id={s.id} tone={i % 2 === 0 ? "raised" : "ink"}>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="flex items-center gap-3 font-display text-sm font-medium tracking-[0.2em] text-signal uppercase">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                  <span className="font-mono text-steel-bright">{String(i + 1).padStart(2, "0")}</span>
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foam sm:text-3xl">
                  {s.name}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">{s.summary}</p>
                <p className="mt-5 border-l-2 border-signal pl-4 text-sm font-medium text-foam">{s.outcome}</p>
              </div>
              <div className="flex flex-col justify-center">
                <ul className="space-y-3">
                  {s.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 rounded-sm border border-steel/30 bg-ink/60 px-4 py-3.5 text-sm text-foam sm:text-base"
                    >
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-signal" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                {s.page && (
                  <Link
                    href={s.page}
                    className="group mt-6 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-medium text-signal hover:text-signal-bright"
                  >
                    Explore {s.name}
                    <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        </Section>
      ))}

      <CtaBand />
    </>
  );
}
