import type { Tone } from "@/components/Section";

export function SectionHeading({
  eyebrow,
  title,
  body,
  tone = "white",
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  tone?: Tone;
  align?: "center" | "left";
}) {
  const dark = tone === "dark";
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-[0.2em] uppercase ${
            dark ? "text-signal" : "text-signal-deep"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
          dark ? "text-foam" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-mist" : "text-slate"}`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
