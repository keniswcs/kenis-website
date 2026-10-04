import type { Metadata } from "next";
import { aiOperations } from "@/content/ai-operations";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { AiVisual } from "@/components/AiVisual";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  ...seo.pages.aiOperations,
  description: aiOperations.description,
});

export default function AiOperationsPage() {
  const { steps, control, benefits } = aiOperations;
  return (
    <>
      <PageHero
        label="AI Operations"
        parent={{ label: "Solutions", href: "/solutions" }}
        title={aiOperations.title}
        intro={aiOperations.intro}
        photo="ai"
        photoPosition="70% 35%"
      >
        <ol className="mt-8 flex flex-wrap items-center gap-2" aria-label="How AI operations works">
          {steps.map((step, i) => (
            <li key={step.name} className="flex items-center gap-2">
              {i > 0 && (
                <span className="text-signal" aria-hidden>
                  →
                </span>
              )}
              <span className="rounded-sm border border-steel/50 bg-ink/70 px-3 py-1.5 text-sm text-foam">
                {step.name}
              </span>
            </li>
          ))}
        </ol>
      </PageHero>

      <Section tone="raised">
        <Reveal>
          <SectionHeading eyebrow="How it works" title="A closed loop from failure to recovery" />
        </Reveal>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.name}>
              <Reveal delay={i * 0.08} className="h-full rounded-sm border border-steel/35 bg-ink/60 px-6 py-7">
                <span className="flex items-center gap-3">
                  <step.icon className="h-5 w-5 text-signal" strokeWidth={1.5} aria-hidden />
                  <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <p className="mt-3 font-display text-xl font-semibold text-foam">{step.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-mist">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <AiVisual className="mx-auto w-36 sm:w-48 lg:w-full lg:max-w-xs" />
          <Reveal className="rounded-sm border border-signal/40 bg-signal/[0.07] px-6 py-8 sm:px-10 sm:py-10">
            <h2 className="font-display text-xl font-semibold text-foam sm:text-2xl">{control.title}</h2>
            <p className="mt-3 max-w-2xl text-sm text-mist sm:text-base">{control.body}</p>
            <ul className="mt-6 space-y-3">
              {control.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-mist sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="raised">
        <Reveal>
          <SectionHeading eyebrow="Benefits" title={benefits.title} />
        </Reveal>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {benefits.items.map((b, i) => (
            <li key={b.name}>
              <Reveal delay={i * 0.06} className="h-full border-t border-steel/35 pt-5">
                <p className="font-display text-lg font-semibold text-foam">{b.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-mist">{b.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
