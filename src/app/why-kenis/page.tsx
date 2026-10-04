import type { Metadata } from "next";
import { whyKenis } from "@/content/why-kenis";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { IconCard } from "@/components/IconCard";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  ...seo.pages.whyKenis,
  description: whyKenis.description,
});

export default function WhyKenisPage() {
  const { strengths, expertise } = whyKenis;
  return (
    <>
      <PageHero label="Why KENIS" title={whyKenis.title} intro={whyKenis.intro} />

      <Section tone="raised">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <IconCard icon={item.icon} title={item.name} text={item.text} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow={expertise.eyebrow} title={expertise.title} />
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.groups.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.05} className="border-t border-steel/35 pt-5">
              <h3 className="font-display text-base font-semibold text-foam">{g.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-steel/50 bg-ink-raised/60 px-3 py-1.5 text-sm text-steel-bright"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
