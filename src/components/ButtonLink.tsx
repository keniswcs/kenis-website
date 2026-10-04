import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variants = {
  primary: "bg-signal text-ink hover:bg-signal-bright",
  "outline-dark": "border border-foam/40 text-foam hover:border-signal hover:text-signal",
  "outline-light": "border border-ink/25 text-ink hover:border-signal-deep hover:text-signal-deep",
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
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </Link>
  );
}
