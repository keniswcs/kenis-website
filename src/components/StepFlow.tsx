import { ArrowRight, type LucideIcon } from "lucide-react";

type Step = { icon: LucideIcon; name: string; text?: string };

export function StepFlow({ steps, dark = false }: { steps: readonly Step[]; dark?: boolean }) {
  const detailed = steps.some((s) => s.text);
  const cols = steps.length === 5 ? "grid-cols-5" : detailed ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-4";

  return (
    <ol className={`grid gap-x-2 gap-y-8 sm:gap-x-4 ${cols}`}>
      {steps.map((step, i) => (
        <li key={step.name} className="relative flex flex-col items-center text-center">
          {i > 0 && (
            <ArrowRight
              className={`absolute -left-3 top-4 hidden h-5 w-5 -translate-x-1/2 sm:top-5 ${
                detailed ? "lg:block" : "sm:block"
              } ${dark ? "text-signal/70" : "text-signal-deep/60"}`}
              aria-hidden
            />
          )}
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-full border sm:h-14 sm:w-14 ${
              dark
                ? "border-signal/50 bg-signal/10 text-signal"
                : "border-signal-deep/25 bg-signal/10 text-signal-deep"
            }`}
          >
            <step.icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
          </span>
          <span
            className={`mt-3 text-xs font-bold sm:text-base ${dark ? "text-foam" : "text-ink"}`}
          >
            {step.name}
          </span>
          {step.text && (
            <span className={`mt-1.5 max-w-[16rem] text-sm leading-relaxed ${dark ? "text-mist" : "text-slate"}`}>
              {step.text}
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
