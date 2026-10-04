import { site } from "@/content/site";
import { ButtonLink } from "@/components/ButtonLink";
import { FloorPhoto } from "@/components/FloorPhoto";

export function CtaBand() {
  const { cta } = site;
  return (
    <section className="relative isolate overflow-hidden border-t border-signal/25 bg-ink-raised py-16 sm:py-20">
      <FloorPhoto photo="packing" position="65% center" />
      <div className="absolute inset-0 bg-ink-raised/80 lg:hidden" aria-hidden />
      <div
        className="absolute inset-0 hidden bg-gradient-to-r from-ink-raised via-ink-raised/90 to-ink-raised/30 lg:block"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foam sm:text-3xl">{cta.title}</h2>
          <p className="mt-3 max-w-xl text-base text-mist">{cta.body}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <ButtonLink href={cta.primary.href}>{cta.primary.label}</ButtonLink>
          <ButtonLink href={cta.secondary.href} variant="outline">
            {cta.secondary.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
