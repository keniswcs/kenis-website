import { RotateCcw, Search, Stethoscope, Wrench } from "lucide-react";

export const aiOperations = {
  title: "Intelligence built into operations",
  intro:
    "KENIS AI finds integration failures before they reach the floor, explains why they happened, and recommends the fix, so support teams resolve problems faster and stop them from coming back.",
  description:
    "AI-assisted warehouse operations: detect failed or missing interface messages, identify root causes, recommend corrections, and safely reprocess approved transactions, with people in control.",
  steps: [
    {
      icon: Search,
      name: "Detect",
      text: "Find failed, missing, and stuck messages between WMS, the platform, and WCS.",
    },
    {
      icon: Stethoscope,
      name: "Diagnose",
      text: "Identify root causes and recurring patterns instead of digging through logs.",
    },
    {
      icon: Wrench,
      name: "Recommend",
      text: "Check failed data against master data and rules, and propose a correction.",
    },
    {
      icon: RotateCcw,
      name: "Recover",
      text: "Safely reprocess approved transactions into authorized systems.",
    },
  ],
  control: {
    title: "AI recommends. Your team stays in control.",
    body: "Nothing reaches a live system without approval, and every suggestion and action is recorded.",
    items: [
      "People approve corrections before they reach live systems",
      "Access limited to authorized systems and roles",
      "Every suggestion, approval, and reprocess is logged",
    ],
  },
  benefits: {
    title: "What changes for your team",
    items: [
      { name: "Earlier detection", text: "Issues surface before they slow the floor." },
      { name: "Faster root cause", text: "Context and likely causes, not raw logs." },
      { name: "Less manual work", text: "Fewer repetitive fixes for support teams." },
    ],
  },
};
