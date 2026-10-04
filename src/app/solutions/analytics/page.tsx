import type { Metadata } from "next";
import { analytics } from "@/content/analytics";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { IconCard } from "@/components/IconCard";
import { Reveal } from "@/components/Reveal";
import { FloorDashboard } from "@/components/FloorDashboard";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  ...seo.pages.analytics,
  description: analytics.description,
});

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        label="Operational Analytics"
        parent={{ label: "Solutions", href: "/solutions" }}
        title={analytics.title}
        intro={analytics.intro}
      >
        <div className="mt-10 sm:mt-12">
          <FloorDashboard title="Operations overview" />
          <p className="mt-3 text-xs text-steel-bright">Sample dashboard with simulated data.</p>
        </div>
      </PageHero>

      <Section tone="raised">
        <div className="grid gap-4 md:grid-cols-3">
          {analytics.benefits.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.06}>
              <IconCard icon={b.icon} title={b.name} text={b.text} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow="The two numbers that matter" title="UCH vs RCH" body={analytics.sources} />
        </Reveal>
        <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {analytics.terms.map((t) => (
            <div key={t.code} className="rounded-sm border border-steel/35 bg-ink-raised/60 px-6 py-6">
              <p className="font-display text-3xl font-semibold text-signal">{t.code}</p>
              <p className="mt-1 text-sm font-medium text-foam">{t.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{t.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
