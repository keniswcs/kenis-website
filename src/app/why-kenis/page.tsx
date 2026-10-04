import type { Metadata } from "next";
import { Check } from "lucide-react";
import { whyKenis } from "@/content/why-kenis";
import { home } from "@/content/home";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { IconCard } from "@/components/IconCard";
import { Reveal } from "@/components/Reveal";
import { StepFlow } from "@/components/StepFlow";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  ...seo.pages.whyKenis,
  description: whyKenis.description,
});

export default function WhyKenisPage() {
  const { expertise, outcomes } = whyKenis;
  return (
    <>
      <PageHero label="Why KENIS" title={whyKenis.title} intro={whyKenis.intro} />

      <Section tone="white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {home.why.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <IconCard icon={item.icon} title={item.name} text={item.text} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <Reveal>
          <SectionHeading eyebrow={expertise.eyebrow} title={expertise.title} />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.groups.map((g) => (
            <div key={g.name} className="rounded-lg border border-line bg-white p-6">
              <h3 className="font-display text-lg font-bold text-ink">{g.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="rounded-full bg-paper px-3 py-1 text-sm text-slate">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading eyebrow={outcomes.eyebrow} title={outcomes.title} />
        </Reveal>
        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {outcomes.items.map((o) => (
            <li key={o.name} className="flex gap-3 rounded-lg border border-line bg-paper p-5">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-signal-deep" aria-hidden />
              <span>
                <span className="block font-semibold text-ink">{o.name}</span>
                <span className="mt-1 block text-sm text-slate">{o.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark">
        <Reveal>
          <SectionHeading tone="dark" eyebrow={home.approach.eyebrow} title={home.approach.title} body={home.approach.body} />
        </Reveal>
        <Reveal className="mx-auto mt-12 max-w-4xl">
          <StepFlow dark steps={home.approach.steps} />
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
