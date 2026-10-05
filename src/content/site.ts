export type NavItem = {
  label: string;
  href: string;
  children?: readonly { label: string; href: string; text: string }[];
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
    "End-to-end Warehouse Control System implementation, an Integration & Orchestration Platform (middleware) between WMS and WCS, AI-powered floor operations, and real-time reporting and analytics for warehouses and distribution centers.",
  email: "info@keniswcs.com",
  phone: { display: "(901) 651-1909", tel: "+19016511909" },
  nav: [
    {
      label: "Solutions",
      href: "/capabilities",
      children: [
        { label: "AI Operations", href: "/ai-operations", text: "Detect, diagnose, and recover faster" },
        { label: "Analytics", href: "/analytics", text: "Real-time UCH vs RCH on the floor" },
        { label: "Deployment", href: "/deployment", text: "KENIS cloud, your network, or hybrid" },
        { label: "Implementation", href: "/capabilities#wcs-implementation", text: "WCS implementation and integration" },
        { label: "Testing", href: "/capabilities#quality-assurance", text: "Functional, end-to-end, and UAT" },
        { label: "HyperCare", href: "/capabilities#go-live", text: "Go-live support until operations are stable" },
      ],
    },
    { label: "Platform", href: "/platform" },
    { label: "Why KENIS", href: "/expertise" },
  ] as readonly NavItem[],
  contactCta: { label: "Talk to our Experts", href: "/contact" },
  cta: {
    title: "Ready to integrate your warehouse stack?",
    body: "Tell us about your WMS, WCS, and automation goals. We will help you find the right approach.",
    label: "Talk with us",
    href: "/contact",
  },
  hero: {
    slides: [
      {
        eyebrow: "KENIS WCS Integrated Solutions",
        title: "Connect WMS, WCS, and the floor—without replacing what already works.",
        body: "We build the orchestration layer that keeps inventory, equipment, and operations in sync across your warehouse stack.",
        highlights: [
          "WMS ↔ WCS orchestration",
          "AI-powered operations",
          "End-to-end delivery",
        ],
        flow: ["ERP", "WMS", "KENIS", "WCS", "Floor"],
        cta: { label: "See solutions", href: "/capabilities" },
      },
      {
        eyebrow: "Integration & Orchestration Platform",
        title: "One platform that lets WMS and WCS work together—no rip-and-replace.",
        body: "Existing systems communicate without extensive changes or costly replacements, so upgrades get simpler and the floor keeps running.",
        highlights: [
          "Protect existing technology investments",
          "Lower implementation cost",
          "Minimal operational disruption",
        ],
        flow: ["WMS", "KENIS Platform", "WCS"],
        cta: { label: "Explore the platform", href: "/platform" },
      },
      {
        eyebrow: "WCS Implementation & Integration",
        title: "WCS implementation, integrated with your WMS and automation.",
        body: "We connect the control layer to the business layer across conveyors, sorters, AS/RS, shuttles, robotics, and PLC-controlled equipment.",
        highlights: [
          "Conveyor & sortation",
          "AS/RS, shuttles & robotics",
          "PLCs, scanners & identification",
        ],
        flow: ["WMS", "WCS", "PLC · AS/RS · Sorters"],
        cta: { label: "Learn more", href: "/capabilities#wcs-implementation" },
      },
      {
        eyebrow: "AI-Powered Operations & Recovery",
        title: "AI that finds interface failures before your team has to.",
        body: "Detect failed or missing messages, spot recurring patterns, and correct and reprocess data back into authorized systems.",
        highlights: [
          "Failed & missing message detection",
          "Root-cause & pattern analysis",
          "Validate, correct & reprocess",
        ],
        flow: ["Detect", "Diagnose", "Recover"],
        cta: { label: "Explore AI operations", href: "/ai-operations" },
      },
      {
        eyebrow: "Reporting & Analytics",
        title: "Real-time UCH and RCH, so every shift knows where it stands.",
        body: "Compare actual cases per hour with the rate required to hit the plan, by hour, zone, and equipment, and act before cutoffs slip.",
        highlights: [
          "Live UCH vs RCH",
          "Zone & equipment drill-down",
          "Rate alerts & shift reports",
        ],
        flow: ["WMS plan", "WCS actuals", "KENIS Analytics"],
        cta: { label: "Explore analytics", href: "/analytics" },
      },
      {
        eyebrow: "Flexible Deployment",
        title: "Your cloud or your network, secured either way.",
        body: "Run the KENIS platform in our managed cloud or inside your own network, with the same guardrails and security controls in every deployment.",
        highlights: [
          "KENIS-managed cloud",
          "Client on-premises or private cloud",
          "Built-in security guardrails",
        ],
        flow: ["KENIS Cloud", "Hybrid", "Client Network"],
        cta: { label: "View deployment options", href: "/deployment" },
      },
      {
        eyebrow: "Project Management & Consulting",
        title: "One accountable partner, from planning to production.",
        body: "Project planning, coordination, risk management, and vendor management across every team and integrator on the program.",
        highlights: [
          "Planning & coordination",
          "Risk management",
          "Vendor management",
        ],
        flow: ["Plan", "Coordinate", "Execute"],
        cta: { label: "Learn more", href: "/capabilities#project-management" },
      },
      {
        eyebrow: "Quality Assurance & Testing",
        title: "Tested end to end before the floor depends on it.",
        body: "Functional, integration, end-to-end, system, and user acceptance testing so every release is production-ready.",
        highlights: [
          "Functional & integration testing",
          "End-to-end & system testing",
          "User acceptance testing (UAT)",
        ],
        flow: ["Build", "Test", "Certify"],
        cta: { label: "Learn more", href: "/capabilities#quality-assurance" },
      },
      {
        eyebrow: "Go-Live & HyperCare",
        title: "Go-live support that stays until operations are stable.",
        body: "Deployment, cutover, go-live support, stabilization, troubleshooting, and post-production HyperCare.",
        highlights: [
          "Deployment & cutover",
          "Stabilization & troubleshooting",
          "Post-production HyperCare",
        ],
        flow: ["Cutover", "Go-Live", "HyperCare"],
        cta: { label: "Learn more", href: "/capabilities#go-live" },
      },
    ],
  },
  home: {
    explore: {
      eyebrow: "Explore KENIS",
      title: "Everything you need to connect, automate, and optimize",
      cards: [
        {
          title: "Solutions",
          body: "End-to-end services from project management and WCS integration to testing, go-live, and HyperCare.",
          href: "/capabilities",
        },
        {
          title: "Integration & Orchestration Platform",
          body: "The platform that connects WMS, WCS, and floor equipment and orchestrates the work between them.",
          href: "/platform",
        },
        {
          title: "Deployment",
          body: "Run KENIS in our cloud, your network, or a hybrid, with security guardrails built in.",
          href: "/deployment",
        },
        {
          title: "AI Operations",
          body: "Detect, diagnose, and recover from interface and operational failures faster.",
          href: "/ai-operations",
        },
        {
          title: "Reporting & Analytics",
          body: "Real-time UCH against RCH by hour, zone, and equipment, with alerts and shift reports.",
          href: "/analytics",
        },
        {
          title: "Why KENIS",
          body: "Who we are, why it matters, and our expertise across warehouse systems, automation, and controls.",
          href: "/expertise",
        },
      ],
    },
  },
} as const;
