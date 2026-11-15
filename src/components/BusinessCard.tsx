"use client";

import { useEffect, useState } from "react";
import type { BusinessCard as Card } from "@/content/cards";
import { cardUrl, vCard } from "@/content/cards";
import { QrCode } from "@/components/QrCode";

type Props = {
  card: Card;
  /** Absolute URL used in the QR (falls back to production). */
  shareUrl?: string;
};

export function BusinessCard({ card, shareUrl }: Props) {
  const [flipped, setFlipped] = useState(false);
  const [vcfHref, setVcfHref] = useState("#");
  const url = shareUrl ?? cardUrl(card.slug);

  useEffect(() => {
    const href = URL.createObjectURL(new Blob([vCard(card)], { type: "text/vcard;charset=utf-8" }));
    setVcfHref(href);
    return () => URL.revokeObjectURL(href);
  }, [card]);

  return (
    <div className="card-shell mx-auto w-full max-w-[440px] px-4 py-8 sm:max-w-[520px] sm:py-10">
      <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.22em] text-[var(--card-muted)]">
        Tap the card to flip · Scan the QR to open this page
      </p>

      <button
        type="button"
        className="card-scene group relative mx-auto block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
        style={{ perspective: "1400px", aspectRatio: "1.75 / 1" }}
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={flipped ? "Show contact side" : "Show company side"}
      >
        <span
          className="card-rotator absolute inset-0 block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <FrontFace card={card} />
          <BackFace art={card.backArt} />
        </span>
      </button>

      <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-between sm:items-start">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <QrCode value={url} size={148} label="Scan to open this card" />
          <p className="max-w-[12rem] text-center text-[11px] leading-snug text-[var(--card-muted)] sm:text-left break-all">
            {url}
          </p>
        </div>

        <div className="flex w-full max-w-xs flex-col gap-2 sm:w-auto">
          <a className="card-action" href={`tel:${card.phone.tel}`}>
            Call {card.phone.display}
          </a>
          <a className="card-action card-action-secondary" href={card.website.href} target="_blank" rel="noreferrer">
            Visit website
          </a>
          <a
            className="card-action card-action-secondary"
            href={vcfHref}
            download={`${card.slug}-keniswcs.vcf`}
          >
            Save contact
          </a>
          <button type="button" className="card-action card-action-ghost" onClick={() => setFlipped((f) => !f)}>
            {flipped ? "Show front" : "Show back"}
          </button>
        </div>
      </div>
    </div>
  );
}

function FrontFace({ card }: { card: Card }) {
  return (
    <span
      className="card-face absolute inset-0 overflow-hidden rounded-[18px] bg-white shadow-[0_18px_50px_rgba(7,16,40,0.28)]"
      style={{ backfaceVisibility: "hidden" }}
    >
      <span className="absolute inset-0 grid grid-cols-[1.05fr_1fr]">
        <span className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.frontArt}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-left"
          />
          <span className="absolute inset-y-0 right-0 w-10 bg-gradient-to-r from-transparent to-white" />
        </span>

        <span className="relative flex flex-col justify-center gap-2 px-3 py-4 sm:gap-3 sm:px-5 sm:py-5">
          <span className="font-[family-name:var(--font-syne)] text-[1.35rem] font-bold leading-none tracking-tight text-[#0a1a3a] sm:text-[1.7rem]">
            KENIS WCS
          </span>
          <span className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[#1a2a4a] sm:text-[0.68rem]">
            Integrated Solutions
          </span>
          <span
            className="mt-1 h-[3px] w-16 rounded-full sm:w-20"
            style={{ background: "linear-gradient(90deg, #1a6cff, #7dff4d)" }}
            aria-hidden
          />

          <span className="mt-2 font-[family-name:var(--font-syne)] text-[1.05rem] font-semibold leading-tight text-[#0a1a3a] sm:text-[1.25rem]">
            {card.name}
          </span>
          <span className="text-sm font-medium text-[#1a6cff]">{card.title}</span>

          <span className="mt-2 flex flex-col gap-1.5 text-[0.78rem] text-[#0a1a3a] sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <PhoneIcon />
              <span>{card.phone.display}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <WebIcon />
              <span>{card.website.display}</span>
            </span>
          </span>

          <span
            className="absolute bottom-3 right-3 h-[3px] w-14 rounded-full sm:bottom-4 sm:right-4"
            style={{ background: "linear-gradient(90deg, #1a6cff, #7dff4d)" }}
            aria-hidden
          />
        </span>
      </span>
    </span>
  );
}

function BackFace({ art }: { art: string }) {
  return (
    <span
      className="card-face absolute inset-0 overflow-hidden rounded-[18px] shadow-[0_18px_50px_rgba(7,16,40,0.35)]"
      style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={art} alt="KENIS WCS integrated solutions" className="h-full w-full object-cover object-center" />
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#0a1a3a" />
      <path
        d="M8.2 7.4c.3-.3.8-.3 1.1 0l1.2 1.2c.3.3.3.7.1 1.1l-.6.9a.9.9 0 0 0 .2 1.1l1.9 1.9c.3.3.8.4 1.1.2l.9-.6c.3-.2.8-.2 1.1.1l1.2 1.2c.3.3.3.8 0 1.1l-.7.7c-.4.4-1 .6-1.6.5-1.5-.2-3.2-1.3-4.7-2.8S6.8 11.2 6.6 9.7c-.1-.6.1-1.2.5-1.6l.7-.7Z"
        fill="#fff"
      />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#0a1a3a" />
      <circle cx="12" cy="12" r="5.5" stroke="#fff" strokeWidth="1.4" />
      <path d="M6.5 12h11M12 6.5c1.6 1.5 2.5 3.4 2.5 5.5S13.6 16 12 17.5C10.4 16 9.5 14.1 9.5 12S10.4 8 12 6.5Z" stroke="#fff" strokeWidth="1.4" />
    </svg>
  );
}
