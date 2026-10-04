import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { seo } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/content/site";
import { contact } from "@/content/contact";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = pageMetadata({
  ...seo.pages.contact,
  description: contact.description,
});

const channels = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone.display, href: `tel:${site.phone.tel}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero label="Contact" title={contact.title} intro={contact.intro} />

      <section className="bg-ink-raised py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="flex items-center gap-4 rounded-sm border border-steel/40 bg-ink px-5 py-4 transition-colors hover:border-signal"
                  >
                    <c.icon className="h-5 w-5 shrink-0 text-signal" aria-hidden />
                    <span>
                      <span className="block text-xs font-semibold tracking-[0.18em] text-steel-bright uppercase">
                        {c.label}
                      </span>
                      <span className="block font-display text-lg font-semibold text-foam">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-xs font-semibold tracking-[0.2em] text-steel-bright uppercase">
              What happens next
            </p>
            <ol className="mt-5 space-y-5">
              {contact.nextSteps.map((step, i) => (
                <li key={step.name} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-signal/60 font-mono text-xs text-signal">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display font-semibold text-foam">{step.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-mist">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-sm border border-steel/40 bg-ink p-5 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
