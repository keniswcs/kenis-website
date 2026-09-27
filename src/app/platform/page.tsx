import type { Metadata } from "next";
import { platform } from "@/content/platform";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Integration & Orchestration Platform",
  description: platform.description,
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        label="Integration & Orchestration Platform"
        title={platform.title}
        intro={platform.intro}
      />

      <section className="bg-ink-raised py-20 sm:py-24">
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

      <section className="bg-ink py-20 sm:py-24">
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

      <section className="bg-ink py-20 sm:py-24">
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
                className="rounded-sm border border-steel/30 bg-ink-raised/60 px-6 py-6"
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

      <section className="bg-ink-raised py-20 sm:py-24">
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
                  className="rounded-sm border border-steel/30 bg-ink/60 px-5 py-5 text-sm leading-relaxed text-foam"
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
