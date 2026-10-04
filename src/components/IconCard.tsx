import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export function IconCard({
  icon: Icon,
  title,
  text,
  href,
  linkLabel = "Learn more",
  dark = false,
  children,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
  dark?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-lg border p-5 sm:p-6 ${
        dark
          ? "border-steel/50 bg-ink-raised"
          : "border-line bg-white shadow-sm shadow-ink/[0.04]"
      }`}
    >
      <div className="flex items-center gap-4 sm:block">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${
            dark ? "bg-signal/15 text-signal" : "bg-signal/10 text-signal-deep"
          }`}
        >
          <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
        </span>
        <h3
          className={`font-display text-lg font-bold sm:mt-5 ${dark ? "text-foam" : "text-ink"}`}
        >
          {title}
        </h3>
      </div>
      <p className={`mt-3 text-sm leading-relaxed sm:mt-2 ${dark ? "text-mist" : "text-slate"}`}>
        {text}
      </p>
      {children}
      {href && (
        <Link
          href={href}
          className={`mt-auto inline-flex min-h-11 items-center gap-1.5 pt-4 text-sm font-semibold sm:pt-5 ${
            dark ? "text-signal hover:text-signal-bright" : "text-signal-deep hover:text-ink"
          }`}
        >
          {linkLabel}
          <span className="sr-only">: {title}</span>
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      )}
    </div>
  );
}
