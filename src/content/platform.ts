export const platform = {
  title: "One platform connecting business systems to the warehouse floor",
  intro:
    "The KENIS Integration & Orchestration Platform is the middleware layer between enterprise systems and equipment control. It orchestrates workflows, exceptions, inventory sync, and equipment coordination so WCS stays lean and operations stay resilient.",
  description:
    "The KENIS Integration & Orchestration Platform connects WMS, WCS, and warehouse equipment, orchestrating workflows, exceptions, inventory sync, and equipment coordination.",
  layers: [
    { name: "Enterprise", items: ["WMS", "ERP", "OMS", "TMS", "MES", "BI"] },
    {
      name: "KENIS Platform",
      items: [
        "API Gateway",
        "Rules & Workflows",
        "Event Processing",
        "Exception Handling",
        "Inventory Sync",
        "Equipment Coordination",
        "Monitoring & Audit",
      ],
    },
    { name: "WCS & Floor", items: ["PLC", "AS/RS", "Conveyors", "Sorters", "Robots", "AMRs"] },
  ],
  coreServices: [
    {
      name: "API Gateway",
      text: "A secure, single entry point for WMS, WCS, and enterprise system traffic.",
    },
    {
      name: "Business Rules Engine",
      text: "Configurable rules for routing, putaway, allocation, and prioritization.",
    },
    {
      name: "Workflow Orchestrator",
      text: "Coordinates multi-step processes across systems and equipment.",
    },
    {
      name: "Event Processing",
      text: "Reacts to scans, equipment status, and task events in real time.",
    },
    {
      name: "Exception Handling",
      text: "Queues, routes, and tracks exceptions through to resolution.",
    },
    {
      name: "Inventory Synchronization",
      text: "Reconciles WMS and WCS inventory and flags mismatches.",
    },
    {
      name: "Equipment Coordination",
      text: "Puts conveyors, sorters, AS/RS, and robots behind one consistent interface.",
    },
    {
      name: "Monitoring & Alerting",
      text: "Tracks SLAs, throughput, and system health, and alerts the right team.",
    },
    {
      name: "Audit & Traceability",
      text: "Records every message and decision for compliance and root-cause analysis.",
    },
  ],
  functional: {
    title: "For operations",
    items: [
      "Order release & wave planning",
      "Dynamic putaway & routing",
      "Inventory reconciliation",
      "Exception & downtime handling",
      "SLA & throughput monitoring",
    ],
  },
  technical: {
    title: "For IT",
    items: [
      "API gateway & system adapters",
      "Event-driven messaging",
      "Store-and-forward with retries",
      "Active/passive disaster recovery",
      "Duplicate-safe message processing",
      "Audit & end-to-end traceability",
    ],
  },
  scenarios: [
    {
      name: "Inbound receiving",
      items: [
        "Validate ASNs, SKUs, and dock assignments before tasks reach the floor",
        "Route scanned pallets to their destination, or to an exception lane if unknown",
      ],
    },
    {
      name: "Putaway",
      items: [
        "Choose locations by SKU velocity, zone capacity, hazmat, and temperature rules",
        "Reserve AS/RS locations and sequence tasks with automatic retries",
      ],
    },
    {
      name: "Inventory",
      items: [
        "Reconcile WMS and WCS inventory on a schedule and create tasks for mismatches",
        "Trigger cycle counts after repeated pick errors or variance thresholds",
      ],
    },
    {
      name: "Outbound fulfillment",
      items: [
        "Release orders by customer priority, same-day, and carrier cutoff",
        "Build waves by carrier or destination and optimize pick sequences",
      ],
    },
    {
      name: "Conveyor & sortation",
      items: [
        "Re-route to open lanes when a sorter lane fills",
        "Pause affected tasks and send alternate routes when a sorter fails",
      ],
    },
    {
      name: "Robotics & AMRs",
      items: [
        "Assign robots by battery level, distance, payload, and zone access",
        "Manage zone occupancy and path reservation to prevent congestion",
      ],
    },
    {
      name: "Exception management",
      items: [
        "Stop releases, hold tasks, and notify maintenance when equipment goes down",
        "Trace lost totes from the last known scan and escalate stuck inventory",
      ],
    },
    {
      name: "Message reliability",
      items: [
        "Store and forward messages when WMS or WCS is unavailable, then replay them",
        "Detect duplicate task, order, and message IDs so each is processed only once",
      ],
    },
  ],
  principles: [
    "Event-driven architecture for real-time response",
    "Coordinated transactions across allocation, reservation, execution, and shipment",
    "Separate command and read models for fast dashboards",
    "Multi-warehouse and multi-WCS support",
    "Active/passive disaster recovery across two regions for cloud and hybrid deployments",
    "Equipment abstraction, so new automation plugs in without rework",
  ],
  outcomes: [
    "Protect existing technology investments",
    "Reduce implementation cost and disruption",
    "Simplify upgrades across vendors",
    "Keep intelligence above the equipment layer",
  ],
};
