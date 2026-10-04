export const analytics = {
  title: "Real-time floor performance, hour by hour",
  intro:
    "KENIS Reporting & Analytics compares UCH, the cases your floor is actually moving each hour, with RCH, the cases per hour required to finish the plan on time, so supervisors know where the shift stands and act before cutoffs slip.",
  description:
    "Real-time reporting and analytics for daily warehouse operations: live UCH (units/cases per hour) against RCH (required cases per hour) by hour, zone, and equipment, with alerts and shift reports.",
  flow: ["WMS plan", "WCS actuals", "UCH vs RCH", "Action"],
  kpis: [
    {
      code: "UCH",
      name: "Units/Cases per Hour",
      text: "The actual throughput: cases confirmed by WCS scans, diverts, and task completions in the last hour.",
    },
    {
      code: "RCH",
      name: "Required Cases per Hour",
      text: "The target rate: remaining planned cases from the WMS divided by the hours left before shift end or carrier cutoff. It updates as the shift progresses.",
    },
    {
      code: "UCH ÷ RCH",
      name: "Attainment",
      text: "Whether the floor is ahead of or behind plan right now. Below 100% means the shift will miss its target unless something changes.",
    },
    {
      code: "ETA",
      name: "Projected finish",
      text: "When the remaining volume will be done at the current UCH, compared with the shift end and cutoff times.",
    },
  ],
  dashboard: {
    title: "A live view of the shift",
    body: "This sample dashboard uses simulated data to show what supervisors see: the current hour building up, the required rate moving with the plan, and the zones falling behind.",
    shiftLabel: "Shift 1 · 06:00–14:00",
    shiftStartHour: 6,
    plannedCases: 48000,
    completedHours: [5650, 6180, 5920, 6340, 5810],
    currentHourRate: 6150,
    zones: [
      { name: "Receiving", share: 0.18, pace: 1.06 },
      { name: "Put-away & AS/RS", share: 0.16, pace: 1.02 },
      { name: "Picking", share: 0.24, pace: 0.97 },
      { name: "Packing", share: 0.14, pace: 1.04 },
      { name: "Sortation", share: 0.16, pace: 0.88 },
      { name: "Shipping", share: 0.12, pace: 1.01 },
    ],
  },
  views: [
    {
      name: "By hour",
      text: "Hourly UCH against RCH across the shift, with the current hour updating in real time.",
    },
    {
      name: "By zone and process",
      text: "Receiving, put-away, picking, packing, sortation, and shipping, each with its own UCH and RCH.",
    },
    {
      name: "By equipment",
      text: "Conveyor, sorter, AS/RS, and robot throughput, with downtime and fault impact on rate.",
    },
    {
      name: "By wave and cutoff",
      text: "Required rates for each wave, order priority, and carrier cutoff, so the most urgent work comes first.",
    },
  ],
  features: [
    {
      name: "Live dashboards",
      text: "Floor-ready screens for supervisors and team leads, refreshed continuously from WMS and WCS events.",
    },
    {
      name: "Rate alerts",
      text: "Notify the right lead when UCH drops below RCH for a zone, an hour, or a cutoff.",
    },
    {
      name: "Shift and daily reports",
      text: "Automatic end-of-shift and daily summaries of UCH, RCH, attainment, and exceptions.",
    },
    {
      name: "Trends and history",
      text: "Compare shifts, days, and sites to find recurring slow hours and process bottlenecks.",
    },
    {
      name: "Role-based views",
      text: "Floor detail for supervisors, site summaries for managers, and multi-site rollups for leadership.",
    },
    {
      name: "Export to BI",
      text: "Share curated KPI data with your existing BI and reporting tools.",
    },
  ],
  sources: {
    title: "Built on the data you already have",
    items: [
      { name: "WMS", text: "Planned volume, waves, orders, priorities, and cutoffs" },
      { name: "WCS", text: "Scans, task confirmations, diverts, and induct counts" },
      { name: "Equipment", text: "Status, faults, and downtime from PLCs and controls" },
      { name: "KENIS Platform", text: "Workflow events, exceptions, and message health" },
    ],
  },
  audiences: {
    title: "Who uses it",
    items: [
      "Floor supervisors rebalance labor and equipment during the hour",
      "Operations managers track attainment across shifts and zones",
      "Leadership compares performance across sites and days",
      "Support teams see when system issues are slowing the floor",
    ],
  },
};
