import type { Metadata } from "next";
import { platform } from "@/content/platform";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { IconCard } from "@/components/IconCard";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { PlatformDiagram } from "@/components/PlatformDiagram";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  ...seo.pages.platform,
  description: platform.description,
});

export default function PlatformPage() {
  const { capabilities, reliability, deployment, configurable, brief } = platform;
  return (
    <>
      <PageHero label="Platform" title={platform.title} intro={platform.intro} photo="workflow" photoPosition="center">
        <div className="mt-12">
          <PlatformDiagram />
        </div>
      </PageHero>

      <Section tone="raised" id="capabilities">
        <Reveal>
          <SectionHeading eyebrow={capabilities.eyebrow} title={capabilities.title} />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.items.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.05}>
              <IconCard icon={c.icon} title={c.name} text={c.text} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="reliability">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow={reliability.eyebrow} title={reliability.title} />
            <ul className="mt-8 space-y-3">
              {reliability.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foam sm:text-base">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-signal" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="flex items-center">
            <div className="w-full rounded-sm border border-signal/40 bg-signal/[0.07] px-6 py-8 sm:px-8">
              <configurable.icon className="h-6 w-6 text-signal" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-4 font-display text-xl font-semibold text-foam">{configurable.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-mist">{configurable.text}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="raised" id="deployment">
        <Reveal>
          <SectionHeading eyebrow={deployment.eyebrow} title={deployment.title} />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {deployment.options.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.05}>
              <IconCard icon={o.icon} title={o.name} text={o.text} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-mist">{deployment.note}</p>
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-6 rounded-sm border border-steel/40 bg-ink-raised/60 p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <brief.icon className="mt-1 h-7 w-7 shrink-0 text-signal" strokeWidth={1.5} aria-hidden />
            <div>
              <h2 className="font-display text-2xl font-semibold text-foam">{brief.title}</h2>
              <p className="mt-2 max-w-xl text-base text-mist">{brief.text}</p>
            </div>
          </div>
          <ButtonLink href={brief.cta.href} variant="outline" arrow className="shrink-0">
            {brief.cta.label}
          </ButtonLink>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
