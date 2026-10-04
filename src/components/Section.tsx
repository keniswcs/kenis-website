import type { ReactNode } from "react";

export type Tone = "ink" | "raised";

const toneClass: Record<Tone, string> = {
  ink: "bg-ink",
  raised: "bg-ink-raised",
};

export function Section({
  tone = "ink",
  id,
  className = "",
  background,
  children,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  background?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 sm:py-24 ${toneClass[tone]} ${
        background ? "relative isolate overflow-hidden" : ""
      } ${className}`}
    >
      {background}
      <div className={`mx-auto max-w-6xl px-5 sm:px-8 ${background ? "relative" : ""}`}>{children}</div>
    </section>
  );
}
