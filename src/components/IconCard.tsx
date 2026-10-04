import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export function IconCard({
  icon: Icon,
  title,
  text,
  href,
  linkLabel = "Learn more",
  children,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-sm border border-steel/35 bg-ink/60 p-5 sm:px-6 sm:py-7">
      <div className="flex items-center gap-4 sm:block">
        <Icon className="h-6 w-6 shrink-0 text-signal" strokeWidth={1.5} aria-hidden />
        <h3 className="font-display text-lg font-semibold text-foam sm:mt-4">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-mist sm:mt-2">{text}</p>
      {children}
      {href && (
        <Link
          href={href}
          className="group mt-auto inline-flex min-h-11 items-center gap-1.5 pt-4 text-sm font-medium text-signal hover:text-signal-bright sm:pt-5"
        >
          {linkLabel}
          <span className="sr-only">: {title}</span>
          <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </Link>
      )}
    </div>
  );
}
