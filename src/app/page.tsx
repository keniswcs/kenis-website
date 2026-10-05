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
  const { explore } = site.home;

  return (
    <>
      <Hero />

      <section className="bg-ink-raised py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow={explore.eyebrow} title={explore.title} />
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {explore.cards.map((card, i) => (
              <Reveal key={card.href} delay={i * 0.04}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col rounded-sm border border-steel/35 bg-ink/60 px-5 py-4 transition-colors hover:border-signal/60 hover:bg-signal/[0.06]"
                >
                  <h3 className="flex items-center justify-between gap-3 font-display text-base font-semibold text-foam">
                    {card.title}
                    <span
                      className="text-signal transition-transform group-hover:translate-x-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">{card.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
