import {
  BarChart3,
  BrainCircuit,
  ClipboardCheck,
  Network,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  id: string;
  name: string;
  short: string;
  icon: LucideIcon;
  href: string;
  summary: string;
  points: string[];
  outcome: string;
  page?: string;
};

export const solutions = {
  title: "Built for the full automation lifecycle",
  intro:
    "From connecting your systems to launching, stabilizing, and improving operations, KENIS is one partner for every stage of warehouse automation.",
  description:
    "KENIS solutions: WMS and WCS system integration, implementation and delivery, testing and HyperCare, AI-assisted operations, and real-time operational analytics.",
  items: [
    {
      id: "system-integration",
      name: "System Integration",
      short: "Connect WMS, WCS, ERP, and automation through a flexible integration architecture.",
      icon: Network,
      href: "/solutions#system-integration",
      summary:
        "We connect your business systems to the automation on the floor through the KENIS platform, without replacing the systems that already work.",
      points: [
        "WMS, ERP, and OMS to WCS interfaces and message mapping",
        "WCS implementation and configuration",
        "Conveyors, sorters, AS/RS, shuttles, robotics, and PLCs",
        "Scanners and identification systems",
      ],
      outcome: "Business systems and floor equipment working as one operation.",
    },
    {
      id: "implementation-delivery",
      name: "Implementation & Delivery",
      short: "Support projects from design and development through deployment and go-live.",
      icon: Rocket,
      href: "/solutions#implementation-delivery",
      summary:
        "Automation programs involve WMS teams, WCS vendors, equipment suppliers, IT, and operations. We keep everyone aligned and own delivery end to end.",
      points: [
        "Requirements, process mapping, and solution design",
        "Project planning, scheduling, and vendor coordination",
        "Risk, issue, and dependency management",
        "Deployment in the KENIS cloud, your network, or hybrid",
      ],
      outcome: "Predictable delivery with one accountable partner.",
    },
    {
      id: "testing-hypercare",
      name: "Testing & HyperCare",
      short: "Validate critical workflows and support operations through launch and stabilization.",
      icon: ClipboardCheck,
      href: "/solutions#testing-hypercare",
      summary:
        "We test every layer before the floor depends on it, then stay on through cutover until operations are stable.",
      points: [
        "Functional, integration, and end-to-end testing",
        "User acceptance testing with operations teams",
        "Cutover planning, rehearsal, and go-live floor support",
        "Post-launch HyperCare, tuning, and knowledge transfer",
      ],
      outcome: "A smooth launch and a stable operation afterward.",
    },
    {
      id: "ai-operations",
      name: "AI Operations",
      short: "Detect integration issues, identify root causes, and accelerate recovery.",
      icon: BrainCircuit,
      href: "/solutions/ai-operations",
      page: "/solutions/ai-operations",
      summary:
        "AI-assisted tools find failed or missing messages, explain why they happened, and recommend corrections, while your team approves every change.",
      points: [
        "Detect failed and missing messages",
        "Identify root causes",
        "Recommend corrections",
        "Safely reprocess approved transactions",
      ],
      outcome: "Faster recovery with people in control.",
    },
    {
      id: "operational-analytics",
      name: "Operational Analytics",
      short: "Turn real-time warehouse data into actionable operational insight.",
      icon: BarChart3,
      href: "/solutions/analytics",
      page: "/solutions/analytics",
      summary:
        "Live throughput against the rate required to hit the plan, so supervisors know where the shift stands and act before cutoffs slip.",
      points: [
        "Real-time throughput (UCH) against required rate (RCH)",
        "Early alerts when a zone falls behind",
        "Projected completion and cutoff risk",
      ],
      outcome: "Know before your operation falls behind.",
    },
  ] as Solution[],
};
