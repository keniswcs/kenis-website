import { BellRing, Clock, Gauge } from "lucide-react";

export const analytics = {
  title: "Know before your operation falls behind.",
  intro:
    "Live throughput against the rate required to hit the plan, by hour and by zone, so supervisors see where the shift stands and act before cutoffs slip.",
  description:
    "Real-time warehouse analytics: live UCH (units/cases per hour) against RCH (required cases per hour), early alerts by zone, and projected completion against shift end and carrier cutoffs.",
  benefits: [
    {
      icon: Gauge,
      name: "Real-time throughput",
      text: "UCH, the cases actually moving each hour, against RCH, the rate required to finish the plan on time.",
    },
    {
      icon: BellRing,
      name: "Early performance alerts",
      text: "The right lead is notified when a zone, hour, or cutoff starts falling behind.",
    },
    {
      icon: Clock,
      name: "Projected completion & cutoff risk",
      text: "See when the remaining volume will finish at the current pace, compared with shift end and carrier cutoffs.",
    },
  ],
  terms: [
    { code: "UCH", name: "Units/Cases per Hour", text: "Actual throughput confirmed by WCS scans and task completions." },
    { code: "RCH", name: "Required Cases per Hour", text: "Remaining planned volume divided by the hours left in the shift." },
  ],
  sources: "Built on data you already have: planned volume and cutoffs from the WMS, actuals from the WCS, and equipment status from the floor.",
  dashboard: {
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
};
