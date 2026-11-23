export type BusinessCard = {
  slug: string;
  name: string;
  title: string;
  /** Shown after title in the page header, e.g. "Warehouse systems integration". */
  tagline?: string;
  phone: { display: string; tel: string };
  website: { display: string; href: string };
  email?: string;
  frontArt: string;
  backArt: string;
};

export const cards: readonly BusinessCard[] = [
  {
    slug: "raja",
    name: "Raja Thurairajah",
    title: "CEO",
    tagline: "Warehouse systems integration",
    phone: { display: "(901) 651-1909", tel: "+19016511909" },
    website: { display: "www.keniswcs.com", href: "https://www.keniswcs.com" },
    email: "Info@keniswcs.com",
    frontArt: "/images/cards/front-art.jpg",
    backArt: "/images/cards/back-art.jpg",
  },
  {
    slug: "chakrapani",
    name: "Chakrapani Reddy",
    title: "CTO",
    tagline: "Warehouse systems integration",
    phone: { display: "(945) 416-2339", tel: "+19454162339" },
    website: { display: "www.keniswcs.com", href: "https://www.keniswcs.com" },
    email: "Info@keniswcs.com",
    frontArt: "/images/cards/front-art.jpg",
    backArt: "/images/cards/back-art.jpg",
  },
] as const;

export function cardBySlug(slug: string): BusinessCard | undefined {
  return cards.find((c) => c.slug === slug);
}

export function cardUrl(slug: string, origin = "https://www.keniswcs.com"): string {
  return `${origin.replace(/\/$/, "")}/card/${slug}/`;
}

export function vCard(card: BusinessCard): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${card.name}`,
    `N:${card.name.split(" ").slice(-1)[0]};${card.name.split(" ").slice(0, -1).join(" ")};;;`,
    `TITLE:${card.title}`,
    "ORG:KENIS WCS Integrated Solutions",
    `TEL;TYPE=CELL,VOICE:${card.phone.tel}`,
    `URL:${card.website.href}`,
  ];
  if (card.email) lines.push(`EMAIL;TYPE=INTERNET:${card.email}`);
  lines.push("END:VCARD");
  return lines.join("\r\n");
}
