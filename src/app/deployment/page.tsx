import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { deployment } from "@/content/deployment";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  ...seo.pages.deployment,
  description: deployment.description,
});

export default function DeploymentPage() {
  const { comparison, disasterRecovery: dr } = deployment;

  return (
    <>
      <PageHero
        label="Deployment"
        parent={{ label: "Solutions", href: "/capabilities" }}
        title={deployment.title}
        intro={deployment.intro}
      />

      <section className="bg-ink-raised py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Deployment options" title="Three ways to run KENIS" />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {deployment.options.map((option, i) => (
              <Reveal
                key={option.name}
                delay={i * 0.1}
                className="flex flex-col rounded-sm border border-steel/35 bg-ink/60 px-6 py-7"
              >
                <h3 className="font-display text-xl font-semibold text-foam">{option.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">
                  {option.summary}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-steel/25 pt-5">
                  {option.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-mist">
                      <span className="mt-2 h-px w-4 shrink-0 bg-signal" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Compare" title={comparison.title} />
          </Reveal>
          <Reveal delay={0.08} className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th scope="col" className="w-1/4 border-b border-steel/40 py-4 pr-4" />
                  {comparison.columns.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="border-b border-steel/40 px-4 py-4 font-display text-base font-semibold text-foam"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="border-b border-steel/25 py-4 pr-4 align-top font-medium text-steel-bright"
                    >
                      {row.label}
                    </th>
                    {row.values.map((v, i) => (
                      <td
                        key={comparison.columns[i]}
                        className="border-b border-steel/25 px-4 py-4 align-top text-mist"
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section id="disaster-recovery" className="scroll-mt-20 bg-ink-raised py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Disaster recovery"
              title={dr.title}
              body={dr.body}
            />
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Applies to">
              {dr.appliesTo.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-signal/50 bg-signal/10 px-3 py-1.5 text-sm text-foam"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.08}
            className="mt-12 grid items-stretch gap-4 lg:grid-cols-[1fr_minmax(10rem,auto)_1fr] lg:gap-0"
          >
            {dr.regions.map((region, i) => {
              const active = region.role === "Active";
              return (
                <div key={region.name} className={i === 1 ? "order-3" : "order-1"}>
                  <div
                    className={`h-full rounded-sm border px-6 py-7 ${
                      active ? "border-signal/50 bg-signal/10" : "border-steel/40 bg-ink/60"
                    }`}
                  >
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium tracking-[0.14em] uppercase ${
                        active
                          ? "border-emerald-400/50 text-emerald-400"
                          : "border-steel-bright/50 text-steel-bright"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          active ? "animate-pulse-soft bg-emerald-400" : "bg-steel-bright"
                        }`}
                        aria-hidden
                      />
                      {region.role}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-foam">
                      {region.name}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {region.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-mist">
                          <span className="mt-2 h-px w-4 shrink-0 bg-signal" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
            <div className="order-2 flex flex-col items-center justify-center gap-2 py-2 text-center lg:px-4">
              <span className="text-xs font-medium tracking-[0.14em] text-steel-bright uppercase">
                Replication
              </span>
              <svg viewBox="0 0 120 12" className="hidden h-3 w-full lg:block" aria-hidden>
                <line
                  x1="0"
                  y1="6"
                  x2="112"
                  y2="6"
                  className="animate-dash stroke-signal motion-reduce:animate-none"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
                <path d="M110 1 L118 6 L110 11" className="fill-none stroke-signal" strokeWidth="2" />
              </svg>
              <span className="text-signal lg:hidden" aria-hidden>
                ↓
              </span>
              <span className="text-xs text-mist">Failover on outage</span>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {dr.features.map((feature, i) => (
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

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {dr.notes.map((note) => (
              <Reveal
                key={note.name}
                className="rounded-sm border border-steel/35 bg-ink/60 px-6 py-5"
              >
                <p className="font-display text-base font-semibold text-foam">{note.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-mist">{note.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="rounded-sm border border-signal/40 bg-signal/[0.07] px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 shrink-0 text-signal"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" />
                <path d="m8.8 12.2 2.2 2.2 4.4-4.6" />
              </svg>
              <h2 className="font-display text-xl font-semibold text-foam sm:text-2xl">
                {deployment.guardrails.title}
              </h2>
            </div>
            <ul className="mt-8 grid gap-x-10 gap-y-4 md:grid-cols-2">
              {deployment.guardrails.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-mist sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-raised py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Process" title={deployment.process.title} />
          </Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {deployment.process.steps.map((step, i) => (
              <li key={step.name}>
                <Reveal delay={i * 0.06} className="border-t-2 border-signal/60 pt-4">
                  <span className="font-mono text-xs text-steel-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 font-display text-lg font-semibold text-foam">{step.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
