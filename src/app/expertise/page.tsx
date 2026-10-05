import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { expertise } from "@/content/expertise";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  ...seo.pages.expertise,
  description: expertise.description,
});

export default function WhyKenisPage() {
  const { hero, about } = expertise;

  return (
    <>
      <PageHero label="Why KENIS" title={hero.title} intro={hero.intro}>
        <ol className="mt-8 flex flex-wrap items-center gap-2" aria-label="Delivery lifecycle">
          {hero.lifecycle.map((step, i) => (
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
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} body={about.body} />
            <p className="mt-6 text-sm italic text-steel-bright">{site.vision}</p>
            <p className="mt-2 font-medium text-signal">{about.motto}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {about.points.map((point) => (
                <li
                  key={point}
                  className="rounded-sm border border-steel/30 bg-ink/60 px-5 py-5 text-sm leading-relaxed text-foam sm:text-base"
                >
                  <span className="mb-3 block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Why KENIS" title={expertise.why.title} />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.why.items.map((item, i) => (
              <Reveal
                key={item.name}
                delay={i * 0.06}
                className="rounded-sm border border-steel/30 bg-ink-raised/60 px-5 py-6"
              >
                <span className="mb-4 block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
                <h3 className="font-display text-base font-semibold text-foam">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-raised py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Expertise" title={expertise.title} body={expertise.intro} />
          </Reveal>
          <div className="mt-12 space-y-14">
            {expertise.groups.map((group) => (
              <div
                key={group.name}
                className="grid gap-8 border-t border-steel/30 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
              >
                <Reveal>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foam sm:text-2xl">
                    {group.name}
                  </h3>
                </Reveal>
                <div className="grid gap-6 sm:grid-cols-2">
                  {group.items.map((item, i) => (
                    <Reveal key={item.name} delay={i * 0.06}>
                      <h4 className="font-display text-base font-semibold text-signal">{item.name}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-mist">{item.text}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
