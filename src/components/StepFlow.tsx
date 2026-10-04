import type { LucideIcon } from "lucide-react";

type Step = { icon: LucideIcon; name: string; text?: string };

export function StepFlow({ steps }: { steps: readonly Step[] }) {
  const detailed = steps.some((s) => s.text);
  const cols = steps.length === 5 ? "grid-cols-5" : detailed ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-4";

  return (
    <ol className={`grid gap-x-2 gap-y-8 sm:gap-x-4 ${cols}`}>
      {steps.map((step, i) => (
        <li key={step.name} className="relative flex flex-col items-center text-center">
          {i > 0 && (
            <span
              className={`absolute -left-1 top-4 hidden -translate-x-1/2 text-signal sm:top-5 ${
                detailed ? "lg:block" : "sm:block"
              }`}
              aria-hidden
            >
              →
            </span>
          )}
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-signal/50 bg-signal/10 text-signal sm:h-14 sm:w-14">
            <step.icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} aria-hidden />
          </span>
          <span className="mt-3 font-display text-xs font-semibold text-foam sm:text-base">{step.name}</span>
          {step.text && (
            <span className="mt-1.5 max-w-[16rem] text-sm leading-relaxed text-mist">{step.text}</span>
          )}
        </li>
      ))}
    </ol>
  );
}
