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
  sections: [
    { id: "architecture", label: "Architecture" },
    { id: "core-services", label: "Core services" },
    { id: "error-handling", label: "Error handling" },
    { id: "reliability", label: "Reliability & SLAs" },
    { id: "platform-as-a-product", label: "Platform as a Product" },
    { id: "scenarios", label: "Warehouse scenarios" },
  ],
  errorHandling: {
    title: "Robust error handling at every step",
    body: "Failures happen: a WCS goes offline, a message arrives malformed, a sorter jams. The platform contains each failure, recovers automatically where it is safe to, and routes the rest to the right team with full context, so one problem never stops the whole operation.",
    flow: ["Detect", "Contain", "Retry", "Isolate", "Resolve", "Replay"],
    features: [
      {
        name: "Automatic retries with backoff",
        text: "Transient failures are retried with increasing delays and limits, so brief outages recover without manual work.",
      },
      {
        name: "Dead-letter queues",
        text: "Messages that keep failing are set aside with full error details, without blocking the rest of the flow.",
      },
      {
        name: "Circuit breakers",
        text: "When a downstream system is unhealthy, the platform stops calling it and buffers work instead of piling up failures.",
      },
      {
        name: "Store-and-forward",
        text: "Messages are held durably while WMS, WCS, or network links are down, then delivered in order.",
      },
      {
        name: "Duplicate-safe processing",
        text: "Repeated orders, tasks, and messages are detected and processed exactly once.",
      },
      {
        name: "Validation at the edge",
        text: "Messages are checked against interface contracts and master data before they reach the floor.",
      },
      {
        name: "Compensating transactions",
        text: "Multi-step workflows roll back or compensate cleanly when a step fails partway through.",
      },
      {
        name: "Guided fix and replay",
        text: "Support teams correct and replay failed messages from a console, one at a time or in bulk, with a full audit trail.",
      },
      {
        name: "Severity-based alerting",
        text: "Errors are classified by impact and routed to the right team, with automatic escalation if unresolved.",
      },
    ],
  },
  reliability: {
    title: "Reliability you can put in a contract",
    body: "The platform is engineered and operated to meet measurable service levels, with support tiers that match how critical each site is to your business.",
    commitments: [
      {
        name: "High availability",
        text: "Redundant, load-balanced services with no single point of failure, monitored around the clock.",
      },
      {
        name: "Message latency",
        text: "End-to-end processing time tracked against agreed targets for every interface.",
      },
      {
        name: "Incident response",
        text: "Defined response and resolution times by severity, with clear escalation paths.",
      },
      {
        name: "Recovery",
        text: "Agreed RTO and RPO, backed by active/passive disaster recovery and regular drills.",
      },
      {
        name: "Zero-downtime upgrades",
        text: "Rolling and blue-green releases keep the platform available while it is upgraded.",
      },
      {
        name: "SLA transparency",
        text: "Live SLA dashboards and monthly service reports show performance against every commitment.",
      },
    ],
    tiers: [
      {
        name: "Standard",
        text: "For single sites and operations with flexible cutoffs.",
        points: ["Business-hours support", "Monitoring and alerting", "Monthly service reports"],
      },
      {
        name: "Premium",
        text: "For multi-site operations with tight carrier cutoffs.",
        points: ["Extended-hours support", "Faster response targets", "Proactive health reviews"],
      },
      {
        name: "Mission-critical",
        text: "For 24/7 operations where downtime stops shipping.",
        points: [
          "24/7 support with on-call engineers",
          "Fastest response targets",
          "Two-region disaster recovery included",
        ],
      },
    ],
    note: "Exact targets for availability, latency, response, and recovery are agreed in each service agreement.",
  },
  product: {
    title: "Platform as a Product: switch on what you need",
    body: "KENIS is a configurable product, not a one-off build. Features are packaged as modules that can be switched on or off per site or client through configuration, without code changes, and capacity scales with traffic, so the solution stays cost-optimized as your needs change.",
    modules: [
      {
        id: "core",
        name: "Core orchestration",
        text: "Gateway, rules, workflows, error handling",
        weight: 30,
        locked: true,
        on: true,
      },
      {
        id: "inventory",
        name: "Inventory reconciliation",
        text: "WMS and WCS inventory kept in sync",
        weight: 8,
        locked: false,
        on: true,
      },
      {
        id: "analytics",
        name: "Reporting & Analytics",
        text: "Live UCH/RCH dashboards and reports",
        weight: 12,
        locked: false,
        on: true,
      },
      {
        id: "ai",
        name: "AI Operations",
        text: "Failure detection and guided recovery",
        weight: 15,
        locked: false,
        on: false,
      },
      {
        id: "predictive",
        name: "Predictive insights",
        text: "Congestion and maintenance signals",
        weight: 12,
        locked: false,
        on: false,
      },
      {
        id: "robotics",
        name: "Robotics & AMR orchestration",
        text: "Fleet assignment and zone control",
        weight: 10,
        locked: false,
        on: false,
      },
      {
        id: "multisite",
        name: "Multi-site management",
        text: "Central views and rules across facilities",
        weight: 8,
        locked: false,
        on: false,
      },
      {
        id: "dr",
        name: "Two-region disaster recovery",
        text: "Warm standby in a second region",
        weight: 15,
        locked: false,
        on: false,
      },
    ],
    trafficModes: [
      { id: "off-hours", label: "Off-hours", factor: 0.5 },
      { id: "normal", label: "Normal", factor: 1 },
      { id: "peak", label: "Peak season", factor: 1.8 },
    ],
    features: [
      {
        name: "Feature toggles",
        text: "Turn modules on or off per site, client, or environment through configuration, with no redeployment.",
      },
      {
        name: "Traffic-based auto-scaling",
        text: "Services scale out for peak waves and seasonal volume, and scale back in when traffic drops.",
      },
      {
        name: "Scheduled scaling",
        text: "Pre-scale ahead of known peaks such as holiday season, and reduce capacity overnight and on weekends.",
      },
      {
        name: "Pay for what you use",
        text: "Modules and capacity are licensed and sized to actual need, so you are not paying for idle features.",
      },
      {
        name: "Safe rollouts",
        text: "Enable a feature for one site or zone first, validate it, then roll out everywhere, with instant rollback.",
      },
      {
        name: "Cost and usage visibility",
        text: "Dashboards show module usage, traffic, and resource consumption, so capacity decisions are data-driven.",
      },
    ],
  },
  principles: [
    "Event-driven architecture for real-time response",
    "Coordinated transactions across allocation, reservation, execution, and shipment",
    "Separate command and read models for fast dashboards",
    "Multi-warehouse and multi-WCS support",
    "Active/passive disaster recovery across two regions for cloud and hybrid deployments",
    "Equipment abstraction, so new automation plugs in without rework",
    "Configurable modules and auto-scaling for a cost-optimized footprint",
  ],
  outcomes: [
    "Protect existing technology investments",
    "Reduce implementation cost and disruption",
    "Simplify upgrades across vendors",
    "Keep intelligence above the equipment layer",
  ],
};
