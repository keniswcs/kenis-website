import {
  AlertTriangle,
  Blocks,
  ClipboardCheck,
  EyeOff,
  Handshake,
  Link2,
  ListChecks,
  Rocket,
  Scaling,
  TrendingUp,
  Unplug,
  Warehouse,
} from "lucide-react";

export const home = {
  hero: {
    eyebrow: "Integration · Orchestration · Intelligence",
    titleLead: "Warehouse Automation.",
    titleAccent: "Connected.",
    body: "KENIS connects WMS, WCS, and warehouse automation through one intelligent orchestration platform, helping operations integrate faster, resolve issues sooner, and gain real-time visibility.",
    primary: { label: "Explore Solutions", href: "/solutions" },
    secondary: { label: "Talk to an Expert", href: "/contact" },
  },
  challenge: {
    eyebrow: "The challenge",
    title: "Complex automation shouldn't mean complex integration.",
    body: "Modern distribution centers depend on many systems working together. When WMS, WCS, automation, and operational data can't communicate cleanly, small integration issues quickly become operational problems.",
    items: [
      {
        icon: Unplug,
        name: "Disconnected systems",
        text: "Integration gaps create unnecessary complexity.",
      },
      {
        icon: AlertTriangle,
        name: "Operational disruptions",
        text: "Failed transactions and exceptions slow fulfillment.",
      },
      {
        icon: EyeOff,
        name: "Limited visibility",
        text: "Teams need faster insight into what's happening on the floor.",
      },
    ],
  },
  solution: {
    eyebrow: "The KENIS solution",
    title: "One platform. From WMS to automation.",
    body: "KENIS provides the integration and orchestration layer that connects enterprise systems with warehouse execution and automation.",
    cta: { label: "See how the platform works", href: "/platform" },
  },
  solutions: {
    eyebrow: "Our solutions",
    title: "Built for the full automation lifecycle",
  },
  approach: {
    eyebrow: "Our approach",
    title: "From integration to optimization",
    body: "KENIS supports the complete automation journey, from understanding your operation and connecting systems to testing, go-live, and continuous improvement.",
    steps: [
      { icon: ListChecks, name: "Plan" },
      { icon: Link2, name: "Integrate" },
      { icon: ClipboardCheck, name: "Test" },
      { icon: Rocket, name: "Launch" },
      { icon: TrendingUp, name: "Optimize" },
    ],
  },
  ai: {
    eyebrow: "AI operations",
    title: "Intelligence built into operations",
    body: "KENIS uses AI-assisted operations to help teams detect failures, understand root causes, and resolve them faster, while people stay in control of critical decisions.",
    cta: { label: "Explore AI Operations", href: "/solutions/ai-operations" },
  },
  analytics: {
    eyebrow: "Operational analytics",
    title: "Know before your operation falls behind.",
    body: "Turn operational data into real-time visibility across throughput, performance, exceptions, and projected completion.",
    cta: { label: "Explore Analytics", href: "/solutions/analytics" },
  },
  why: {
    eyebrow: "Why KENIS",
    title: "More than software. An automation partner.",
    items: [
      {
        icon: Warehouse,
        name: "Warehouse expertise",
        text: "Built around real-world warehouse execution and automation challenges.",
      },
      {
        icon: Handshake,
        name: "End-to-end delivery",
        text: "From architecture and integration through testing, go-live, and HyperCare.",
      },
      {
        icon: Blocks,
        name: "Technology independent",
        text: "Designed to connect across WMS, WCS, and automation vendors.",
      },
      {
        icon: Scaling,
        name: "Built to scale",
        text: "A flexible architecture that grows with your operation.",
      },
    ],
    cta: { label: "Why customers choose KENIS", href: "/why-kenis" },
  },
};
