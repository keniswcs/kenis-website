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
  children,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 sm:py-24 ${toneClass[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
