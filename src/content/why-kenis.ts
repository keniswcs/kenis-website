import { Blocks, Handshake, Scaling, Warehouse } from "lucide-react";

export const whyKenis = {
  title: "More than software. An automation partner.",
  intro:
    "KENIS combines warehouse operations know-how, systems integration, and its own orchestration platform, so one team owns the outcome from first design to stable operation.",
  description:
    "Why KENIS: warehouse automation expertise, end-to-end delivery from integration to HyperCare, technology-independent integration across WMS and WCS vendors, and a platform built to scale.",
  strengths: [
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
  expertise: {
    eyebrow: "Expertise",
    title: "We work across every layer of the warehouse",
    groups: [
      { name: "Business systems", items: ["WMS", "WCS", "ERP", "OMS", "TMS"] },
      { name: "Material handling", items: ["Conveyors", "Sortation", "AS/RS & shuttles", "Robotics & AMRs"] },
      { name: "Controls", items: ["PLCs", "Scanners", "Identification"] },
      { name: "Integration & data", items: ["APIs", "Event streaming", "Analytics", "AI"] },
    ],
  },
};
