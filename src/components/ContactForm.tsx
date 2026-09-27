"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { contact } from "@/content/contact";

const fieldClass =
  "w-full rounded-sm border border-steel/40 bg-ink px-4 py-3 text-foam outline-none transition-colors focus:border-signal";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) || "").trim();
    const name = get("name");
    const topic = get("topic");
    const subject = encodeURIComponent(
      `${topic || "Inquiry"} from ${name || "keniswcs.com"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${get("email")}\nCompany: ${get("company")}\nTopic: ${topic}\n\n${get("message")}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-mist">Name</span>
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-mist">Work email</span>
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-mist">Company</span>
          <input name="company" autoComplete="organization" className={fieldClass} />
        </label>
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
      </div>
      <label className="block">
        <span className="mb-2 block text-sm text-mist">How can we help?</span>
        <textarea name="message" required rows={6} className={`${fieldClass} resize-y`} />
      </label>
      <button
        type="submit"
        className="mt-1 self-start rounded-sm bg-signal px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-signal-bright"
      >
        Send message
      </button>
      {submitted && (
        <p className="text-sm text-steel-bright" role="status">
          Opening your email client… If nothing opens, write to us at {site.email}.
        </p>
      )}
    </form>
  );
}
