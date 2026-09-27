import type { Metadata } from "next";
import { aiOperations } from "@/content/ai-operations";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "AI-Powered Operations",
  description: aiOperations.description,
};

export default function AiOperationsPage() {
  return (
    <>
      <PageHero label="AI Operations" title={aiOperations.title} intro={aiOperations.intro}>
        <ol className="mt-8 flex flex-wrap items-center gap-2" aria-label="How AI operations works">
          {aiOperations.flow.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              {i > 0 && (
                <span className="text-signal" aria-hidden>
                  →
                </span>
              )}
              <span className="rounded-sm border border-steel/50 bg-ink/70 px-3 py-1.5 text-sm text-foam">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </PageHero>

      <section className="bg-ink-raised py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="How it works" title="A closed loop from failure to recovery" />
          </Reveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiOperations.steps.map((step, i) => (
              <li key={step.name}>
                <Reveal
                  delay={i * 0.08}
                  className="h-full rounded-sm border border-steel/35 bg-ink/60 px-6 py-7"
                >
                  <span className="font-mono text-xs text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 font-display text-xl font-semibold text-foam">{step.name}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Use cases"
              title="Where AI helps on the floor and in support"
            />
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {aiOperations.useCases.map((uc, i) => (
              <Reveal key={uc.name} delay={(i % 4) * 0.06} className="border-t border-steel/35 pt-5">
                <h3 className="font-display text-base font-semibold text-foam">{uc.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{uc.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-raised py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Visibility" title={aiOperations.metrics.title} />
            <ul className="mt-8 flex flex-wrap gap-2">
              {aiOperations.metrics.items.map((m) => (
                <li
                  key={m}
                  className="rounded-sm border border-steel/50 bg-ink/60 px-3 py-2 text-sm text-steel-bright"
                >
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading eyebrow="Benefits" title={aiOperations.benefits.title} />
            <ul className="mt-8 space-y-3">
              {aiOperations.benefits.items.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-foam sm:text-base">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-signal" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="rounded-sm border border-signal/40 bg-signal/[0.07] px-6 py-8 sm:px-10 sm:py-10">
            <h2 className="font-display text-xl font-semibold text-foam sm:text-2xl">
              {aiOperations.guardrails.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-mist sm:text-base">
              AI recommends. Your team stays in control of what changes in production.
            </p>
            <ul className="mt-8 grid gap-x-10 gap-y-4 md:grid-cols-2">
              {aiOperations.guardrails.items.map((g) => (
                <li key={g} className="flex gap-3 text-sm leading-relaxed text-mist sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden />
                  {g}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
