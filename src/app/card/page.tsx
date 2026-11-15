import type { Metadata } from "next";
import Link from "next/link";
import { cards, cardUrl } from "@/content/cards";
import { QrCode } from "@/components/QrCode";

export const metadata: Metadata = {
  title: "Digital business cards",
  description: "KENIS WCS leadership contact cards with QR codes.",
  robots: { index: false, follow: false },
};

export default function CardIndexPage() {
  return (
    <div className="card-page min-h-full">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--card-accent)]">
          KENIS WCS
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-[var(--card-ink)] sm:text-4xl">
          Digital business cards
        </h1>
        <p className="mt-3 max-w-xl text-[var(--card-muted)]">
          Open a card, flip front and back, or scan the QR code to share that person&apos;s contact page.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {cards.map((card) => {
            const href = `/card/${card.slug}/`;
            const absolute = cardUrl(card.slug);
            return (
              <li
                key={card.slug}
                className="rounded-2xl border border-black/5 bg-white p-5 shadow-[0_12px_40px_rgba(7,16,40,0.08)]"
              >
                <Link href={href} className="block no-underline">
                  <p className="font-[family-name:var(--font-syne)] text-xl font-semibold text-[var(--card-ink)]">
                    {card.name}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--card-accent)]">{card.title}</p>
                  <p className="mt-3 text-sm text-[var(--card-muted)]">{card.phone.display}</p>
                </Link>
                <div className="mt-5 flex items-end justify-between gap-3">
                  <QrCode value={absolute} size={112} />
                  <Link href={href} className="card-action shrink-0 no-underline">
                    Open card
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
