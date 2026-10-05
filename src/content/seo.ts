import { site } from "./site";

export const seo = {
  homeTitle: `${site.name} | WCS Implementation & WMS–WCS Integration`,
  keywords: [
    "KENIS WCS",
    "warehouse control system",
    "WCS implementation",
    "WCS integration",
    "WMS WCS integration",
    "WMS to WCS middleware",
    "warehouse orchestration platform",
    "warehouse automation integration",
    "distribution center automation",
    "material handling systems integration",
  ],
  pages: {
    home: {
      path: "/",
      keywords: [
        "warehouse automation software",
        "warehouse systems integrator",
        "AI warehouse operations",
        "real-time warehouse analytics",
      ],
    },
    capabilities: {
      path: "/capabilities/",
      title: "WCS Implementation & Warehouse Integration Services",
      keywords: [
        "WCS implementation services",
        "warehouse systems integration services",
        "WCS testing and commissioning",
        "warehouse go-live support",
        "HyperCare support",
        "warehouse automation project management",
      ],
    },
    platform: {
      path: "/platform/",
      title: "WMS–WCS Integration & Orchestration Platform",
      keywords: [
        "integration and orchestration platform",
        "warehouse integration platform",
        "WMS WCS middleware",
        "warehouse interface error handling",
        "warehouse platform SLA",
        "configurable warehouse platform",
        "platform as a product",
      ],
    },
    deployment: {
      path: "/deployment/",
      title: "Deployment Options: Cloud, On-Premise & Hybrid",
      keywords: [
        "cloud WCS",
        "on-premise WCS",
        "hybrid warehouse deployment",
        "warehouse disaster recovery",
        "active passive failover",
        "multi-region disaster recovery",
      ],
    },
    aiOperations: {
      path: "/ai-operations/",
      title: "AI-Powered Warehouse Operations",
      keywords: [
        "AI warehouse operations",
        "interface message monitoring",
        "warehouse root cause analysis",
        "failed message recovery",
        "AI troubleshooting warehouse",
      ],
    },
    analytics: {
      path: "/analytics/",
      title: "Real-Time Warehouse Analytics: UCH & RCH",
      keywords: [
        "UCH",
        "RCH",
        "units per hour",
        "cases per hour",
        "required cases per hour",
        "warehouse KPI dashboard",
        "real-time floor analytics",
        "warehouse productivity reporting",
      ],
    },
    expertise: {
      path: "/expertise/",
      title: "Why KENIS: About KENIS WCS and Our Expertise",
      keywords: [
        "WMS integration",
        "conveyor and sortation controls",
        "AS/RS integration",
        "robotics and AMR integration",
        "PLC integration",
        "warehouse automation consultants",
      ],
    },
    contact: {
      path: "/contact/",
      title: "Contact Us",
      keywords: ["WCS consultation", "warehouse automation consultation", "contact KENIS WCS"],
    },
  },
} as const;
