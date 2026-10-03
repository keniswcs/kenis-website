import type { Metadata } from "next";
import { site } from "@/content/site";
import { contact } from "@/content/contact";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.description,
};

export default function ContactPage() {
  return (
    <>
      <PageHero label="Contact" title={contact.title} intro={contact.intro} />

      <section className="bg-ink-raised py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs tracking-[0.2em] text-steel-bright uppercase">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block font-display text-xl font-semibold text-signal underline-offset-4 hover:underline"
            >
              {site.email}
            </a>

            <p className="mt-8 text-xs tracking-[0.2em] text-steel-bright uppercase">Phone</p>
            <a
              href={`tel:${site.phone.tel}`}
              className="mt-2 inline-block font-display text-xl font-semibold text-signal underline-offset-4 hover:underline"
            >
              {site.phone.display}
            </a>

            <p className="mt-12 text-xs tracking-[0.2em] text-steel-bright uppercase">
              What happens next
            </p>
            <ol className="mt-5 space-y-6">
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

          <ContactForm />
        </div>
      </section>
    </>
  );
}
