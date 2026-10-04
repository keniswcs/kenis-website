import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  ...seo.pages.home,
  description: site.description,
});

export default function Home() {
  const { explore, why } = site.home;

  return (
    <>
      <Hero />

      <section className="bg-ink-raised py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow={explore.eyebrow} title={explore.title} />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {explore.cards.map((card, i) => (
              <Reveal key={card.href} delay={i * 0.06}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col rounded-sm border border-steel/35 bg-ink/60 px-6 py-7 transition-colors hover:border-signal/60 hover:bg-signal/[0.06]"
                >
                  <h3 className="font-display text-lg font-semibold text-foam">{card.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist sm:text-base">
                    {card.body}
                  </p>
                  <span className="mt-6 text-sm font-medium text-signal">
                    Learn more{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow={why.eyebrow} title={why.title} body={why.body} />
            <ol className="mt-8 flex flex-wrap gap-x-2 gap-y-3" aria-label="Delivery lifecycle">
              {why.lifecycle.map((step, i) => (
                <li key={step} className="flex items-center gap-2 text-sm">
                  {i > 0 && (
                    <span className="text-steel" aria-hidden>
                      →
                    </span>
                  )}
                  <span className="font-medium text-foam">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {why.points.map((point) => (
                <li
                  key={point}
                  className="rounded-sm border border-steel/30 bg-ink-raised/60 px-5 py-5 text-sm leading-relaxed text-foam sm:text-base"
                >
                  <span className="mb-3 block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
                  {point}
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
