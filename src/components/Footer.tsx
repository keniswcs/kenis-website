import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-steel/25 bg-ink py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={site.logo.mark}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full ring-1 ring-steel-bright/30"
            />
            <span className="font-display text-xl font-semibold tracking-tight text-foam">
              KENIS <span className="font-light tracking-[0.18em] text-signal">WCS</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-mist">{site.tagline}</p>
          <p className="mt-1 max-w-sm text-sm italic text-steel-bright">{site.vision}</p>
        </div>

        {site.nav
          .filter((item) => item.children)
          .map((item) => (
            <nav key={item.href} aria-label={`Footer ${item.label}`}>
              <Link
                href={item.href}
                className="text-xs font-medium tracking-[0.2em] text-steel-bright uppercase hover:text-foam"
              >
                {item.label}
              </Link>
              <ul className="mt-4 space-y-2.5">
                {item.children?.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className="text-sm text-mist hover:text-foam">
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

        <nav aria-label="Footer company">
          <p className="text-xs font-medium tracking-[0.2em] text-steel-bright uppercase">Company</p>
          <ul className="mt-4 space-y-2.5">
            {site.nav
              .filter((item) => !item.children)
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-mist hover:text-foam">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-steel-bright uppercase">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="text-mist hover:text-foam">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.tel}`} className="text-mist hover:text-foam">
                {site.phone.display}
              </a>
            </li>
            <li>
              <Link href={site.contactCta.href} className="text-signal hover:text-signal-bright">
                {site.contactCta.label} →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-steel/20 px-5 pt-6 text-xs text-steel sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {year} {site.legalName}
        </p>
        <p>One Partner. End-to-End Support. Intelligent Solutions.</p>
      </div>
    </footer>
  );
}
