"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { BusinessCard as Card } from "@/content/cards";
import { vCard } from "@/content/cards";
import { site } from "@/content/site";

type Props = {
  card: Card;
  /** Absolute URL used in the QR (falls back to production). Kept for callers; page is opened by QR. */
  shareUrl?: string;
};

export function BusinessCard({ card }: Props) {
  const tagline = card.tagline ?? "Warehouse systems integration";
  const [vcfHref, setVcfHref] = useState("#");

  useEffect(() => {
    const href = URL.createObjectURL(new Blob([vCard(card)], { type: "text/vcard;charset=utf-8" }));
    setVcfHref(href);
    return () => URL.revokeObjectURL(href);
  }, [card]);

  return (
    <div className="card-shell mx-auto w-full max-w-[420px] px-5 pb-12 pt-6 sm:max-w-[460px]">
      <header className="mb-7 text-center">
        <p className="m-0 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/85">
          KENIS WCS Integrated Solutions
        </p>
        <h1 className="m-0 mt-3 font-[family-name:var(--font-syne)] text-[1.85rem] font-bold leading-tight tracking-tight text-white sm:text-[2.1rem]">
          {card.name}
        </h1>
        <p className="m-0 mt-2 text-[0.95rem] text-[#7ec8ff]">
          {card.title} · {tagline}
        </p>
      </header>

      <section className="mb-5">
        <p className="mb-2 text-center text-[0.8rem] font-semibold text-[#7ec8ff]">Front</p>
        <div className="rounded-2xl bg-white p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
          <div
            className="relative overflow-hidden rounded-xl bg-white"
            style={{ aspectRatio: "1.75 / 1" }}
          >
            <FrontFace card={card} />
          </div>
        </div>
      </section>

      <div className="mb-5 flex gap-2.5">
        <a
          className="card-contact-now flex min-w-0 flex-1 items-center justify-center no-underline"
          href={vcfHref}
          download={`${card.slug}-keniswcs.vcf`}
        >
          Save Contact
        </a>
        <Link
          href={site.contactCta.href}
          className="card-contact-secondary flex min-w-0 flex-1 items-center justify-center no-underline"
        >
          Contact Now
        </Link>
      </div>

      <section>
        <p className="mb-2 text-center text-[0.8rem] font-semibold text-[#7ec8ff]">Back</p>
        <div className="rounded-2xl bg-white p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
          <div
            className="relative overflow-hidden rounded-xl"
            style={{ aspectRatio: "1.75 / 1" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.backArt}
              alt="KENIS WCS integrated solutions — card back"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FrontFace({ card }: { card: Card }) {
  return (
    <div className="absolute inset-0 grid grid-cols-[1.05fr_1fr]">
      <div className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.frontArt}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-left"
        />
        <span className="absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-white" />
      </div>

      <div className="relative flex flex-col justify-center gap-1.5 px-2.5 py-3 sm:gap-2 sm:px-4 sm:py-4">
        <p className="m-0 font-[family-name:var(--font-syne)] text-[1.05rem] font-bold leading-none tracking-tight text-[#0a1a3a] sm:text-[1.35rem]">
          KENIS WCS
        </p>
        <p className="m-0 text-[0.5rem] font-semibold uppercase tracking-[0.22em] text-[#1a2a4a] sm:text-[0.58rem]">
          Integrated Solutions
        </p>
        <span
          className="mt-0.5 h-[2px] w-12 rounded-full sm:w-14"
          style={{ background: "linear-gradient(90deg, #1a6cff, #7dff4d)" }}
          aria-hidden
        />

        <p className="m-0 mt-1.5 font-[family-name:var(--font-syne)] text-[0.92rem] font-semibold leading-tight text-[#0a1a3a] sm:text-[1.1rem]">
          {card.name}
        </p>
        <p className="m-0 text-[0.72rem] font-medium text-[#1a6cff] sm:text-sm">{card.title}</p>

        <div className="mt-1.5 flex flex-col gap-1 text-[0.65rem] text-[#0a1a3a] sm:text-[0.75rem]">
          <span className="inline-flex items-center gap-1.5">
            <PhoneIcon />
            <span>{card.phone.display}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <WebIcon />
            <span>{card.website.display}</span>
          </span>
          {card.email ? (
            <span className="inline-flex items-center gap-1.5">
              <MailIcon />
              <span>{card.email}</span>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#0a1a3a" />
      <circle cx="12" cy="12" r="5.5" stroke="#fff" strokeWidth="1.4" />
      <path d="M6.5 12h11M12 6.5c1.6 1.5 2.5 3.4 2.5 5.5S13.6 16 12 17.5C10.4 16 9.5 14.1 9.5 12S10.4 8 12 6.5Z" stroke="#fff" strokeWidth="1.4" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#0a1a3a" />
      <rect x="6.5" y="8.5" width="11" height="7.5" rx="1.2" stroke="#fff" strokeWidth="1.3" />
      <path d="M7 9.2 12 13l5-3.8" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}
