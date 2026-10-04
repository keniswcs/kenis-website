import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { platform } from "@/content/platform";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { FeatureToggles } from "@/components/FeatureToggles";

export const metadata: Metadata = pageMetadata({
  ...seo.pages.platform,
  description: platform.description,
});

export default function PlatformPage() {
  const { errorHandling, reliability, product } = platform;

  return (
    <>
      <PageHero
        label="Integration & Orchestration Platform"
        title={platform.title}
        intro={platform.intro}
      >
        <ul className="mt-8 flex flex-wrap gap-2">
          {platform.sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block rounded-sm border border-steel/50 bg-ink/60 px-3 py-1.5 text-xs text-steel-bright transition-colors hover:border-signal hover:text-foam sm:text-sm"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <section id="architecture" className="scroll-mt-20 bg-ink-raised py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Architecture"
              title="Where the platform sits"
              body="Enterprise systems decide what needs to happen. The floor makes it happen. The KENIS platform sits in between and makes sure the two stay in step."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {platform.layers.map((layer, i) => (
              <Reveal
                key={layer.name}
                delay={i * 0.1}
                className={`rounded-sm border px-6 py-7 ${
                  i === 1 ? "border-signal/50 bg-signal/10" : "border-steel/30 bg-ink/60"
                }`}
              >
                <h3
                  className={`font-display text-lg font-semibold ${
                    i === 1 ? "text-signal" : "text-foam"
                  }`}
                >
                  {layer.name}
                </h3>
                <ul className="mt-5 space-y-2">
                  {layer.items.map((item) => (
                    <li key={item} className="text-sm text-mist">
                      <span className="mr-2 text-steel-bright" aria-hidden>
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="core-services" className="scroll-mt-20 bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Core services"
              title="The building blocks inside the platform"
            />
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {platform.coreServices.map((svc, i) => (
              <Reveal key={svc.name} delay={(i % 3) * 0.06} className="border-t border-steel/35 pt-5">
                <h3 className="font-display text-base font-semibold text-foam">{svc.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{svc.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-raised py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Functional and technical"
              title="Built for operations and IT"
              body="Operations teams get workflows that match how the floor runs. IT teams get an architecture that is reliable, observable, and secure."
            />
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
            {[platform.functional, platform.technical].map((group, i) => (
              <Reveal key={group.title} delay={i * 0.1}>
                <h3 className="font-display text-lg font-semibold text-foam">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-mist sm:text-base">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-signal" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="error-handling" className="scroll-mt-20 bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Error handling"
              title={errorHandling.title}
              body={errorHandling.body}
            />
            <ol className="mt-8 flex flex-wrap items-center gap-2" aria-label="How errors are handled">
              {errorHandling.flow.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="text-signal" aria-hidden>
                      →
                    </span>
                  )}
                  <span className="rounded-sm border border-steel/50 bg-ink-raised/70 px-3 py-1.5 text-sm text-foam">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {errorHandling.features.map((f, i) => (
              <Reveal key={f.name} delay={(i % 3) * 0.06} className="border-t border-steel/35 pt-5">
                <h3 className="font-display text-base font-semibold text-foam">{f.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="reliability" className="scroll-mt-20 bg-ink-raised py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Reliability & SLAs"
              title={reliability.title}
              body={reliability.body}
            />
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {reliability.commitments.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 0.06} className="border-t border-steel/35 pt-5">
                <h3 className="font-display text-base font-semibold text-foam">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{c.text}</p>
              </Reveal>
            ))}
          </div>

          <h3 className="mt-16 font-display text-lg font-semibold text-foam">Service tiers</h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {reliability.tiers.map((tier, i) => {
              const top = i === reliability.tiers.length - 1;
              return (
                <Reveal
                  key={tier.name}
                  delay={i * 0.08}
                  className={`flex flex-col rounded-sm border px-6 py-7 ${
                    top ? "border-signal/50 bg-signal/10" : "border-steel/35 bg-ink/60"
                  }`}
                >
                  <p className={`font-display text-xl font-semibold ${top ? "text-signal" : "text-foam"}`}>
                    {tier.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{tier.text}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-steel/25 pt-5">
                    {tier.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-mist">
                        <span className="mt-2 h-px w-4 shrink-0 bg-signal" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-mist">{reliability.note}</p>
        </div>
      </section>

      <section id="platform-as-a-product" className="scroll-mt-20 bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Platform as a Product" title={product.title} body={product.body} />
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <FeatureToggles />
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f, i) => (
              <Reveal key={f.name} delay={(i % 3) * 0.06} className="border-t border-steel/35 pt-5">
                <h3 className="font-display text-base font-semibold text-foam">{f.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="scenarios" className="scroll-mt-20 bg-ink-raised py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Warehouse scenarios"
              title="What the platform handles on the floor"
              body="A sample of the real-world workflows the platform orchestrates across receiving, storage, fulfillment, and equipment."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {platform.scenarios.map((sc, i) => (
              <Reveal
                key={sc.name}
                delay={(i % 2) * 0.06}
                className="rounded-sm border border-steel/30 bg-ink/60 px-6 py-6"
              >
                <h3 className="font-display text-base font-semibold text-foam">{sc.name}</h3>
                <ul className="mt-4 space-y-2.5">
                  {sc.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-mist">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Engineering principles" title="Designed to scale and recover" />
            <ul className="mt-8 space-y-3">
              {platform.principles.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-mist sm:text-base">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-signal" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading eyebrow="Outcomes" title="What it means for the business" />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {platform.outcomes.map((o) => (
                <li
                  key={o}
                  className="rounded-sm border border-steel/30 bg-ink-raised/60 px-5 py-5 text-sm leading-relaxed text-foam"
                >
                  <span className="mb-3 block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
                  {o}
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
