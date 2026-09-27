export const aiOperations = {
  title: "From reactive firefighting to data-driven recovery",
  intro:
    "KENIS builds AI-powered tools that improve system visibility, identify operational gaps, and reduce manual troubleshooting, so support teams resolve problems faster and prevent them from coming back.",
  description:
    "AI-powered tools that detect failed or missing interface messages, find recurring failures, assist root-cause analysis, and reprocess corrected data into authorized systems.",
  flow: ["Detect", "Diagnose", "Correct", "Recover"],
  steps: [
    {
      name: "Detect",
      text: "Continuously watch interface traffic and operational data for failed, missing, or delayed messages.",
    },
    {
      name: "Diagnose",
      text: "Correlate events and history to surface patterns, recurring failures, and likely root causes.",
    },
    {
      name: "Correct",
      text: "Validate failed message data against master data and rules, and propose corrections for review.",
    },
    {
      name: "Recover",
      text: "Reprocess or upload approved corrections back into authorized systems, with a full audit trail.",
    },
  ],
  useCases: [
    {
      name: "Interface message monitoring",
      text: "Catch failed, missing, or stuck messages between WMS, the platform, and WCS before they affect the floor.",
    },
    {
      name: "Recurring failure detection",
      text: "Spot repeating errors by interface, SKU, equipment, or time of day.",
    },
    {
      name: "Root-cause assistance",
      text: "Give support teams context and probable causes instead of raw logs.",
    },
    {
      name: "Data validation & correction",
      text: "Check failed messages against master data and business rules, and suggest fixes.",
    },
    {
      name: "Controlled reprocessing",
      text: "Resubmit corrected messages to authorized systems with approvals and audit.",
    },
    {
      name: "Dashboards & alerts",
      text: "Real-time views of throughput, SLA risk, and open exceptions, with alerts to the right team.",
    },
    {
      name: "Predictive congestion",
      text: "Anticipate sorter overload, conveyor congestion, and dock bottlenecks so work can be re-routed early.",
    },
    {
      name: "Predictive maintenance signals",
      text: "Watch motor temperature, vibration, and current draw to raise maintenance tickets before failures.",
    },
  ],
  metrics: {
    title: "What we monitor",
    items: [
      "Orders per hour",
      "Totes per hour",
      "Pallets per hour",
      "Robot utilization",
      "Sorter utilization",
      "Task age against SLA",
    ],
  },
  benefits: {
    title: "What changes for your team",
    items: [
      "Less repetitive manual support work",
      "Faster root-cause analysis",
      "Earlier detection of issues",
      "Better operational visibility",
    ],
  },
  guardrails: {
    title: "AI with guardrails",
    items: [
      "People approve corrections before they reach live systems",
      "Access limited to authorized systems and roles",
      "Every AI suggestion and action is logged",
      "Reprocessed data is tracked end to end",
    ],
  },
};
