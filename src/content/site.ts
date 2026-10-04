export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; text: string }[];
};

export const site = {
  name: "KENIS WCS",
  legalName: "KENIS WCS Integrated Solutions",
  domain: "keniswcs.com",
  url: "https://www.keniswcs.com",
  tagline: "Warehouse Automation. Integrated. Intelligent.",
  vision: "A future where every warehouse system works together seamlessly.",
  logo: {
    mark: "/images/kenis-mark.png",
    full: "/images/kenis-logo.jpeg",
    alt: "KENIS WCS Integrated Solutions logo",
  },
  description:
    "KENIS connects WMS, WCS, and warehouse automation through one intelligent orchestration platform, with system integration, project delivery, testing and HyperCare, AI-assisted operations, and real-time operational analytics.",
  email: "info@keniswcs.com",
  phone: { display: "(901) 651-1909", tel: "+19016511909" },
  nav: [
    {
      label: "Solutions",
      href: "/solutions",
      children: [
        {
          label: "System Integration",
          href: "/solutions#wcs-implementation",
          text: "Connect WMS, WCS, ERP, and automation",
        },
        {
          label: "Implementation & Delivery",
          href: "/solutions#project-management",
          text: "From design through go-live",
        },
        {
          label: "Testing & HyperCare",
          href: "/solutions#quality-assurance",
          text: "Validate, launch, and stabilize",
        },
        {
          label: "Deployment",
          href: "/solutions/deployment",
          text: "Cloud, on-premises, or hybrid, with DR",
        },
        {
          label: "AI Operations",
          href: "/solutions/ai-operations",
          text: "Detect, diagnose, and recover faster",
        },
        {
          label: "Operational Analytics",
          href: "/solutions/analytics",
          text: "Real-time UCH, RCH, and projected finish",
        },
      ],
    },
    { label: "Platform", href: "/platform" },
    { label: "Why KENIS", href: "/why-kenis" },
  ] as NavItem[],
  contactCta: { label: "Talk to an Expert", href: "/contact" },
  cta: {
    title: "Ready to simplify your warehouse integration?",
    body: "Let's discuss your automation environment, integration challenges, and operational goals.",
    primary: { label: "Talk to a KENIS Expert", href: "/contact" },
    secondary: { label: "Call (901) 651-1909", href: "tel:+19016511909" },
  },
} as const;
