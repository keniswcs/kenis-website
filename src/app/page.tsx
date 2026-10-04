import type { Metadata } from "next";
import { site } from "@/content/site";
import { home } from "@/content/home";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { FloorPhoto } from "@/components/FloorPhoto";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  ...seo.pages.home,
  description: site.description,
});

export default function Home() {
  const { story, partner } = home;

  return (
    <>
      <Hero />

      <Section tone="raised">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow={story.eyebrow} title={story.title} body={story.body} />
            <div className="mt-8">
              <ButtonLink href="/solutions" variant="outline" arrow>
                Explore solutions
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="grid grid-cols-2 gap-3 sm:gap-4">
              {story.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-sm border border-steel/30 bg-ink/60 p-4 text-sm leading-relaxed text-foam sm:px-5 sm:py-5 sm:text-base"
                >
                  <span className="mb-3 block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
                  {outcome}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section
        background={
          <>
            <FloorPhoto photo="workflow" />
            <div className="absolute inset-0 bg-ink/75" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-transparent to-ink/90" aria-hidden />
          </>
        }
      >
        <Reveal>
          <SectionHeading align="center" eyebrow={partner.eyebrow} title={partner.title} body={partner.body} />
          <ol
            className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-3"
            aria-label="Delivery lifecycle"
          >
            {partner.lifecycle.map((step, i) => (
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
          <div className="mt-10 text-center">
            <ButtonLink href={partner.cta.href} variant="outline" arrow>
              {partner.cta.label}
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
