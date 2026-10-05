"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { contact } from "@/content/contact";

const FORM_NAME = "contact";
const FORM_ENDPOINT = "/__forms.html";
// No 0/1/I/L/O/U, so IDs read back over the phone without confusion.
const ID_ALPHABET = "23456789ABCDEFGHJKMNPQRSTVWXYZ";

const idDate = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago" });

function newRequestId() {
  const date = idDate.format(new Date()).replaceAll("-", "");
  const random = crypto.getRandomValues(new Uint8Array(6));
  const suffix = Array.from(random, (b) => ID_ALPHABET[b % ID_ALPHABET.length]).join("");
  return `KEN-${date}-${suffix}`;
}

const fieldClass =
  "w-full rounded-sm border border-steel/40 bg-ink px-4 py-3 text-foam outline-none transition-colors focus:border-signal disabled:opacity-60";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [sentId, setSentId] = useState("");
  // Kept across retries so a resend after an error does not create a second ID.
  const pendingId = useRef<string | null>(null);
  const sentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status !== "sent" || !sentRef.current) return;
    sentRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    sentRef.current.focus({ preventScroll: true });
  }, [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) || "").trim();

    const requestId = (pendingId.current ??= newRequestId());
    const company = get("company");
    data.set("request-id", requestId);
    data.set(
      "subject",
      `[${requestId}] ${get("topic") || "Inquiry"} from ${get("name")}${company ? ` (${company})` : ""} - keniswcs.com`,
    );
    data.set("form-name", FORM_NAME);

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
      form.reset();
      pendingId.current = null;
      setSentId(requestId);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        ref={sentRef}
        tabIndex={-1}
        className="flex flex-col items-start rounded-sm border border-signal/40 bg-signal/[0.07] px-6 py-8 outline-none sm:px-8"
        role="status"
      >
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full bg-signal text-lg text-ink"
          aria-hidden
        >
          ✓
        </span>
        <p className="mt-5 font-display text-xl font-semibold text-foam">
          {contact.form.successTitle}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-mist sm:text-base">
          {contact.form.successBody}
        </p>
        <div className="mt-5 rounded-sm border border-steel/40 bg-ink/60 px-4 py-3">
          <p className="text-xs tracking-[0.2em] text-steel-bright uppercase">
            {contact.form.requestIdLabel}
          </p>
          <p className="mt-1 select-all font-mono text-lg font-semibold tracking-wider text-signal">
            {sentId}
          </p>
          <p className="mt-1 text-xs text-mist">{contact.form.requestIdNote}</p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-signal hover:text-signal-bright"
        >
          Send another message →
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      name={FORM_NAME}
      method="POST"
      onSubmit={onSubmit}
      className="flex flex-col gap-5"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden" aria-hidden>
        <label>
          Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <fieldset disabled={sending} className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-mist">Name *</span>
            <input name="name" required autoComplete="name" className={fieldClass} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-mist">Work email *</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className={fieldClass}
            />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-mist">Phone *</span>
            <input
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              pattern="[0-9+\(\)\-.\s]{7,20}"
              title="Enter a phone number, for example (555) 123-4567"
              placeholder="(555) 123-4567"
              className={fieldClass}
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-mist">Company</span>
            <input name="company" autoComplete="organization" className={fieldClass} />
          </label>
        </div>
        <label className="block">
          <span className="mb-2 block text-sm text-mist">Topic</span>
          <select name="topic" defaultValue={contact.topics[0]} className={fieldClass}>
            {contact.topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-mist">How can we help? *</span>
          <textarea name="message" required rows={6} className={`${fieldClass} resize-y`} />
        </label>
      </fieldset>

      <button
        type="submit"
        disabled={sending}
        className="mt-1 self-start rounded-sm bg-signal px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-signal-bright disabled:cursor-wait disabled:opacity-70"
      >
        {sending ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-300" role="alert">
          {contact.form.errorBody}{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-2">
            {site.email}
          </a>{" "}
          or{" "}
          <a href={`tel:${site.phone.tel}`} className="underline underline-offset-2">
            {site.phone.display}
          </a>
          .
        </p>
      )}
    </form>
  );
}
