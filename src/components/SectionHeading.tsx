export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : undefined}>
      {eyebrow && (
        <p className="font-display text-sm font-medium tracking-[0.2em] text-signal uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-foam sm:text-3xl">
        {title}
      </h2>
      {body && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{body}</p>
      )}
    </div>
  );
}
