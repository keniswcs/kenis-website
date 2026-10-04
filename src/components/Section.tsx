import type { ReactNode } from "react";

export type Tone = "dark" | "light" | "white";

const toneClass: Record<Tone, string> = {
  dark: "bg-ink text-foam",
  light: "bg-paper text-ink",
  white: "bg-white text-ink",
};

export function Section({
  tone = "white",
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
      className={`scroll-mt-20 py-16 sm:py-24 ${toneClass[tone]} ${
        background ? "relative isolate overflow-hidden" : ""
      } ${className}`}
    >
      {background}
      <div className={`mx-auto max-w-6xl px-5 sm:px-8 ${background ? "relative" : ""}`}>{children}</div>
    </section>
  );
}
