import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

const solutionsLinks = site.nav.find((item) => item.children)?.children ?? [];
const companyLinks = site.nav.filter((item) => !item.children);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-steel/25 bg-ink py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3">
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

        <FooterColumn title="Solutions">
          {solutionsLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-mist hover:text-foam">
                {link.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Company">
          {companyLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-mist hover:text-foam">
                {link.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact">
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
        </FooterColumn>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-steel/20 px-5 pt-6 text-xs text-steel-bright sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {year} {site.legalName}
        </p>
        <p>One Partner. From Integration to Go-Live.</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <nav aria-label={`Footer ${title}`}>
      <p className="text-xs font-medium tracking-[0.2em] text-steel-bright uppercase">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </nav>
  );
}
