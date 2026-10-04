import { site } from "@/content/site";
import { ButtonLink } from "@/components/ButtonLink";
import { FloorPhoto } from "@/components/FloorPhoto";

export function CtaBand() {
  const { cta } = site;
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 sm:py-24">
      <FloorPhoto photo="packing" position="65% center" />
      <div className="absolute inset-0 bg-ink/70 lg:hidden" aria-hidden />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/85 to-ink/20 lg:block" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-signal uppercase">{cta.eyebrow}</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold leading-tight tracking-tight text-foam sm:text-4xl">
          {cta.title}
        </h2>
        <p className="mt-4 max-w-lg text-base text-mist sm:text-lg">{cta.body}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={cta.primary.href} arrow>
            {cta.primary.label}
          </ButtonLink>
          <ButtonLink href={cta.secondary.href} variant="outline-dark">
            {cta.secondary.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
