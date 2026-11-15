import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BusinessCard } from "@/components/BusinessCard";
import { cardBySlug, cards, cardUrl } from "@/content/cards";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return cards.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const card = cardBySlug(slug);
  if (!card) return { title: "Card not found" };
  return {
    title: `${card.name} · ${card.title}`,
    description: `Digital business card for ${card.name}, ${card.title} at KENIS WCS Integrated Solutions.`,
    robots: { index: false, follow: false },
    openGraph: {
      title: `${card.name} | KENIS WCS`,
      description: `${card.title} · ${card.phone.display}`,
      url: cardUrl(card.slug),
    },
  };
}

export default async function CardPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const card = cardBySlug(slug);
  if (!card) notFound();

  return (
    <div className="card-page min-h-full">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 pt-5">
        <Link
          href="/card/"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--card-muted)] no-underline hover:text-[var(--card-ink)]"
        >
          All cards
        </Link>
        <a
          href="https://www.keniswcs.com"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--card-accent)] no-underline"
        >
          keniswcs.com
        </a>
      </div>
      <BusinessCard card={card} shareUrl={cardUrl(card.slug)} />
    </div>
  );
}
