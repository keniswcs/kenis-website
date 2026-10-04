import { site } from "./site";

export const seo = {
  homeTitle: `${site.name} | Warehouse Automation. Connected.`,
  keywords: [
    "KENIS WCS",
    "warehouse control system",
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
    solutions: {
      path: "/solutions/",
      title: "Warehouse Automation Solutions: Integration to Go-Live",
      keywords: [
        "WCS implementation services",
        "warehouse systems integration services",
        "warehouse automation project delivery",
        "WCS testing and commissioning",
        "warehouse go-live support",
        "HyperCare support",
        "warehouse automation project management",
      ],
    },
    deployment: {
      path: "/solutions/deployment/",
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
      path: "/solutions/ai-operations/",
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
      path: "/solutions/analytics/",
      title: "Real-Time Warehouse Analytics: UCH & RCH",
      keywords: [
        "UCH",
        "RCH",
        "units per hour",
        "cases per hour",
        "required cases per hour",
        "warehouse KPI dashboard",
        "real-time floor analytics",
        "projected completion",
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
    whyKenis: {
      path: "/why-kenis/",
      title: "Why KENIS: Your Warehouse Automation Partner",
      keywords: [
        "warehouse automation partner",
        "warehouse automation consultants",
        "conveyor and sortation integration",
        "AS/RS integration",
        "robotics and AMR integration",
        "PLC integration",
      ],
    },
    contact: {
      path: "/contact/",
      title: "Talk to a KENIS Expert",
      keywords: ["WCS consultation", "warehouse automation consultation", "contact KENIS WCS"],
    },
  },
} as const;
