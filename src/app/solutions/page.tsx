import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { solutions } from "@/content/solutions";
import { home } from "@/content/home";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { StepFlow } from "@/components/StepFlow";
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
                className="inline-flex min-h-10 items-center rounded-full border border-steel/70 px-4 text-sm text-foam/90 transition-colors hover:border-signal hover:text-signal"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </PageHero>

      {solutions.items.map((s, i) => (
        <Section key={s.id} id={s.id} tone={i % 2 === 0 ? "white" : "light"}>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-signal/10 text-signal-deep">
                  <s.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink">{s.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">{s.summary}</p>
                <p className="mt-5 border-l-2 border-signal pl-4 text-sm font-semibold text-ink">{s.outcome}</p>
              </div>
              <div className="flex flex-col justify-center">
                <ul className="space-y-3">
                  {s.points.map((point) => (
                    <li key={point} className="flex gap-3 rounded-md border border-line bg-white px-4 py-3.5 text-sm text-ink sm:text-base">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-signal-deep" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                {s.page && (
                  <Link
                    href={s.page}
                    className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-signal-deep hover:text-ink"
                  >
                    Explore {s.name}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        </Section>
      ))}

      <Section tone="dark">
        <Reveal>
          <SectionHeading tone="dark" eyebrow={home.approach.eyebrow} title={home.approach.title} body={home.approach.body} />
        </Reveal>
        <Reveal className="mx-auto mt-12 max-w-4xl">
          <StepFlow dark steps={home.approach.steps} />
        </Reveal>
        <div className="mt-12 text-center">
          <ButtonLink href="/platform" variant="outline-dark" arrow>
            See the platform behind it
          </ButtonLink>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
