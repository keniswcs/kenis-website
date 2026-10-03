import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { analytics } from "@/content/analytics";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FloorDashboard } from "@/components/FloorDashboard";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  ...seo.pages.analytics,
  description: analytics.description,
});

export default function AnalyticsPage() {
  return (
    <>
      <PageHero label="Analytics" title={analytics.title} intro={analytics.intro}>
        <ol className="mt-8 flex flex-wrap items-center gap-2" aria-label="How reporting works">
          {analytics.flow.map((step, i) => (
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
            <SectionHeading
              eyebrow="Sample dashboard"
              title={analytics.dashboard.title}
              body={analytics.dashboard.body}
            />
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <FloorDashboard />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Key measures"
              title="Two numbers that run the shift"
              body="UCH tells you what the floor is doing. RCH tells you what it needs to do. Together they show whether today's plan will be met."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {analytics.kpis.map((kpi, i) => (
              <Reveal
                key={kpi.code}
                delay={i * 0.08}
                className="h-full rounded-sm border border-steel/35 bg-ink-raised/60 px-6 py-7"
              >
                <p className="font-display text-2xl font-semibold text-signal">{kpi.code}</p>
                <p className="mt-1 font-display text-base font-semibold text-foam">{kpi.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-mist">{kpi.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-raised py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Views" title="Drill from the shift down to a single zone" />
            <ul className="mt-8 space-y-6">
              {analytics.views.map((view) => (
                <li key={view.name} className="border-l-2 border-signal/60 pl-5">
                  <h3 className="font-display text-base font-semibold text-foam">{view.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">{view.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading eyebrow="Data sources" title={analytics.sources.title} />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {analytics.sources.items.map((source) => (
                <li
                  key={source.name}
                  className="rounded-sm border border-steel/35 bg-ink/60 px-5 py-5"
                >
                  <p className="font-display text-base font-semibold text-foam">{source.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{source.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Features" title="Reporting built for daily floor operations" />
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {analytics.features.map((feature, i) => (
              <Reveal
                key={feature.name}
                delay={(i % 3) * 0.06}
                className="border-t border-steel/35 pt-5"
              >
                <h3 className="font-display text-base font-semibold text-foam">{feature.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{feature.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-raised py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="rounded-sm border border-signal/40 bg-signal/[0.07] px-6 py-8 sm:px-10 sm:py-10">
            <h2 className="font-display text-xl font-semibold text-foam sm:text-2xl">
              {analytics.audiences.title}
            </h2>
            <ul className="mt-8 grid gap-x-10 gap-y-4 md:grid-cols-2">
              {analytics.audiences.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-mist sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden />
                  {item}
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
