import type { Metadata } from "next";
import { site } from "@/content/site";
import { home } from "@/content/home";
import { solutions } from "@/content/solutions";
import { aiOperations } from "@/content/ai-operations";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ButtonLink";
import { IconCard } from "@/components/IconCard";
import { Reveal } from "@/components/Reveal";
import { StepFlow } from "@/components/StepFlow";
import { PlatformDiagram } from "@/components/PlatformDiagram";
import { AiVisual } from "@/components/AiVisual";
import { FloorDashboard } from "@/components/FloorDashboard";
import { WarehouseCanvas } from "@/components/WarehouseCanvas";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMetadata({
  ...seo.pages.home,
  description: site.description,
});

export default function Home() {
  const { hero, challenge, solution, approach, ai, analytics, why } = home;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <WarehouseCanvas />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/30" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" aria-hidden />
        <div className="relative mx-auto flex min-h-[38rem] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 lg:min-h-[44rem]">
          <p className="text-xs font-semibold tracking-[0.2em] text-signal uppercase sm:text-sm">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[2.75rem] font-extrabold leading-[1.02] tracking-tight text-foam sm:text-6xl lg:text-7xl">
            {hero.titleLead} <span className="text-signal">{hero.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">{hero.body}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={hero.primary.href} arrow>
              {hero.primary.label}
            </ButtonLink>
            <ButtonLink href={hero.secondary.href} variant="outline-dark">
              {hero.secondary.label}
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section tone="white">
        <Reveal>
          <SectionHeading eyebrow={challenge.eyebrow} title={challenge.title} body={challenge.body} />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {challenge.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <div className="flex h-full items-start gap-4 rounded-lg border border-line bg-paper p-5 md:flex-col md:items-center md:px-6 md:py-8 md:text-center">
                <item.icon className="h-7 w-7 shrink-0 text-signal-deep md:h-8 md:w-8" strokeWidth={1.75} aria-hidden />
                <div>
                  <h3 className="font-display text-lg font-bold text-ink md:mt-4">{item.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate md:mt-2">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <Reveal>
          <SectionHeading tone="dark" eyebrow={solution.eyebrow} title={solution.title} body={solution.body} />
        </Reveal>
        <Reveal className="mt-12">
          <PlatformDiagram />
        </Reveal>
        <div className="mt-10 text-center">
          <ButtonLink href={solution.cta.href} variant="outline-dark" arrow>
            {solution.cta.label}
          </ButtonLink>
        </div>
      </Section>

      <Section tone="light">
        <Reveal>
          <SectionHeading eyebrow={home.solutions.eyebrow} title={home.solutions.title} />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {solutions.items.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <IconCard icon={s.icon} title={s.name} text={s.short} href={s.href} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading eyebrow={approach.eyebrow} title={approach.title} body={approach.body} />
        </Reveal>
        <Reveal className="mx-auto mt-12 max-w-4xl">
          <StepFlow steps={approach.steps} />
        </Reveal>
      </Section>

      <Section tone="dark" className="relative overflow-hidden">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <AiVisual className="mx-auto w-40 sm:w-56 lg:w-full lg:max-w-sm" />
          <div>
            <SectionHeading tone="dark" align="left" eyebrow={ai.eyebrow} title={ai.title} body={ai.body} />
            <div className="mt-10">
              <StepFlow dark steps={aiOperations.steps.map(({ icon, name }) => ({ icon, name }))} />
            </div>
            <p className="mt-10 font-display text-lg font-bold text-foam">{aiOperations.control.title}</p>
            <div className="mt-6">
              <ButtonLink href={ai.cta.href} arrow>
                {ai.cta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="light">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <SectionHeading align="left" eyebrow={analytics.eyebrow} title={analytics.title} body={analytics.body} />
            <div className="mt-8">
              <ButtonLink href={analytics.cta.href} arrow>
                {analytics.cta.label}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <FloorDashboard title="Operations overview" />
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading eyebrow={why.eyebrow} title={why.title} />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {why.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <IconCard icon={item.icon} title={item.name} text={item.text} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href={why.cta.href} variant="outline-light" arrow>
            {why.cta.label}
          </ButtonLink>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
