import type { ReactNode } from "react";
import Link from "next/link";

const variants = {
  primary: "bg-signal text-ink hover:bg-signal-bright",
  outline: "border border-steel-bright/60 text-foam hover:border-signal hover:text-signal",
};

export function ButtonLink({
  href,
  variant = "primary",
  arrow = false,
  className = "",
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && <span aria-hidden>→</span>}
    </Link>
  );
}
