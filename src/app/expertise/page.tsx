import type { Metadata } from "next";
import { expertise } from "@/content/expertise";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Expertise",
  description: expertise.description,
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero label="Expertise" title={expertise.title} intro={expertise.intro} />

      <section className="bg-ink-raised py-20 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-14 px-5 sm:px-8">
          {expertise.groups.map((group) => (
            <div
              key={group.name}
              className="grid gap-8 border-t border-steel/30 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
            >
              <Reveal>
                <h2 className="font-display text-xl font-semibold tracking-tight text-foam sm:text-2xl">
                  {group.name}
                </h2>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2">
                {group.items.map((item, i) => (
                  <Reveal key={item.name} delay={i * 0.06}>
                    <h3 className="font-display text-base font-semibold text-signal">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{item.text}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
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

      <CtaBand />
    </>
  );
}
