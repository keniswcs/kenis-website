import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { aiOperations } from "@/content/ai-operations";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { StepFlow } from "@/components/StepFlow";
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
      />

      <Section tone="white">
        <Reveal>
          <SectionHeading eyebrow="How it works" title="Detect. Diagnose. Recommend. Recover." />
        </Reveal>
        <Reveal className="mt-12">
          <StepFlow steps={steps} />
        </Reveal>
      </Section>

      <Section tone="dark">
        <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <AiVisual className="mx-auto w-40 sm:w-52 lg:w-full lg:max-w-xs" />
          <Reveal>
            <SectionHeading tone="dark" align="left" eyebrow="People in control" title={control.title} body={control.body} />
            <ul className="mt-8 space-y-3">
              {control.items.map((item) => (
                <li key={item} className="flex gap-3 text-base text-foam">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-signal" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="light">
        <Reveal>
          <SectionHeading title={benefits.title} />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {benefits.items.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.06}>
              <div className="h-full rounded-lg border border-line bg-white p-6 text-center">
                <p className="font-display text-lg font-bold text-ink">{b.name}</p>
                <p className="mt-2 text-sm text-slate">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
