import type { Metadata } from "next";
import { site } from "@/content/site";
import { seo } from "@/content/seo";

const ogImage = { url: site.logo.full, width: 1254, height: 1254, alt: site.logo.alt };

type PageSeo = {
  title?: string;
  description: string;
  path: string;
  keywords: readonly string[];
};

/** Drops repeats regardless of case, keeping the first spelling. */
export function uniqueKeywords(...lists: readonly (readonly string[])[]): string[] {
  const seen = new Set<string>();
  return lists.flat().filter((k) => {
    const key = k.trim().toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/** Child `openGraph`/`twitter` objects replace the layout's, so each page sets them in full. */
export function pageMetadata({ title, description, path, keywords }: PageSeo): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : seo.homeTitle;
  return {
    ...(title ? { title } : {}),
    description,
    keywords: uniqueKeywords(keywords, seo.keywords),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      images: [site.logo.full],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: `${site.url}/`,
      logo: `${site.url}${site.logo.full}`,
      description: site.description,
      email: site.email,
      telephone: site.phone.tel,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phone.tel,
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-US",
    },
  ],
};
