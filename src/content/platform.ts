import {
  Activity,
  BrainCircuit,
  Cloud,
  GitBranch,
  Layers,
  Network,
  RefreshCw,
  Server,
  ShieldAlert,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const platform = {
  title: "One platform. From WMS to automation.",
  intro:
    "The KENIS Integration & Orchestration Platform sits between your business systems and the automation on the floor, so every system works together without replacing what already works.",
  description:
    "The KENIS Integration & Orchestration Platform connects WMS, ERP, and OMS with WCS, PLCs, conveyors, sorters, and robotics, with orchestration, exception management, inventory sync, monitoring, and analytics.",
  diagram: {
    enterprise: { label: "Enterprise systems", items: ["WMS", "ERP", "OMS"] },
    kenis: { label: "KENIS", tagline: "Integration · Orchestration · Intelligence" },
    automation: { label: "Automation systems", items: ["WCS", "PLC", "Conveyors", "Sorters", "Robotics"] },
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "Six things the platform does for you",
    items: [
      {
        icon: Network,
        name: "Integration",
        text: "Connect WMS, ERP, OMS, and WCS through ready adapters and a secure API gateway.",
      },
      {
        icon: Workflow,
        name: "Orchestration",
        text: "Coordinate workflows and business rules across systems and equipment.",
      },
      {
        icon: ShieldAlert,
        name: "Exception management",
        text: "Contain failures, retry automatically, and route the rest to the right team.",
      },
      {
        icon: RefreshCw,
        name: "Inventory synchronization",
        text: "Keep WMS and WCS inventory in step and flag mismatches early.",
      },
      {
        icon: Activity,
        name: "Monitoring",
        text: "Track message flow, throughput, and system health with alerts and a full audit trail.",
      },
      {
        icon: BrainCircuit,
        name: "Analytics & AI",
        text: "Real-time operational analytics and AI-assisted recovery, built on the same data.",
      },
    ],
  },
  reliability: {
    eyebrow: "Reliability",
    title: "Built to keep the floor running",
    items: [
      "Messages held and replayed in order if a system goes offline",
      "Each order, task, and message processed exactly once",
      "Active/passive disaster recovery across two regions",
      "Service levels agreed in every contract",
    ],
  },
  deployment: {
    eyebrow: "Deployment",
    title: "Run it where your IT strategy requires",
    options: [
      {
        icon: Cloud,
        name: "KENIS Cloud",
        text: "We host, monitor, and maintain the platform. The fastest path to go-live.",
      },
      {
        icon: Server,
        name: "Your network",
        text: "On-premises or in your private cloud, so data stays inside your environment.",
      },
      {
        icon: GitBranch,
        name: "Hybrid",
        text: "Real-time control on-site, with dashboards and analytics in the cloud.",
      },
    ],
    note: "Every option includes role-based access, encryption, and a complete audit trail.",
  },
  configurable: {
    icon: Layers,
    title: "Switch on only what you need",
    text: "Features are modules you turn on per site, and capacity scales with traffic, so the platform stays cost-optimized.",
  },
  brief: {
    icon: ShieldCheck,
    title: "Need the technical detail?",
    text: "Architecture, error handling, SLA tiers, and disaster recovery design are covered in our technical solution brief. Ask us for a copy.",
    cta: { label: "Request the solution brief", href: "/contact" },
  },
};
