export type Service = {
  id: string;
  title: string;
  summary: string;
  activities: string[];
  outcome: string;
  link?: { label: string; href: string };
};

export const capabilities = {
  title: "One partner from concept to production",
  intro:
    "KENIS covers the full warehouse automation lifecycle: planning the program, implementing and integrating WCS, connecting systems through our Integration & Orchestration Platform, testing, go-live, and HyperCare, plus AI tools and real-time analytics that keep operations running after launch.",
  description:
    "Project management, WCS implementation and integration, the KENIS Integration & Orchestration Platform, AI operations, reporting and analytics, QA and testing, go-live and HyperCare, and flexible deployment.",
  lifecycle: [
    { step: "Plan", text: "Scope, schedule, risks, and vendors" },
    { step: "Integrate", text: "WMS, WCS, and equipment connected" },
    { step: "Automate", text: "Workflows, rules, and exception handling" },
    { step: "Test", text: "Functional testing through UAT" },
    { step: "Launch", text: "Cutover and go-live support" },
    { step: "Optimize", text: "HyperCare, analytics, AI insights, and tuning" },
  ],
  services: [
    {
      id: "project-management",
      title: "Project Management",
      summary:
        "Warehouse automation programs involve WMS teams, WCS vendors, equipment suppliers, IT, and operations. We keep everyone aligned from kickoff through execution.",
      activities: [
        "Project planning, scheduling, and milestones",
        "Coordination across WMS, WCS, equipment, and IT teams",
        "Risk, issue, and dependency management",
        "Vendor management and accountability",
        "Status reporting and executive governance",
      ],
      outcome: "Predictable delivery with one accountable partner.",
    },
    {
      id: "wcs-implementation",
      title: "WCS Implementation & Integration",
      summary:
        "We implement Warehouse Control Systems and integrate them with your WMS and the automation equipment on the floor.",
      activities: [
        "Requirements, process mapping, and solution design",
        "WCS configuration and implementation",
        "Interface design and message mapping between WMS and WCS",
        "Integration with conveyors, sorters, AS/RS, shuttles, and robotics",
        "PLC, scanner, and identification system connectivity",
      ],
      outcome: "Business systems and floor equipment working as one operation.",
    },
    {
      id: "integration-platform",
      title: "Integration & Orchestration Platform",
      summary:
        "Our platform connects WMS and WCS without extensive changes or costly replacements, and orchestrates the workflows between them.",
      activities: [
        "Custom connectors between WMS, WCS, and enterprise systems",
        "Workflow orchestration and business rules",
        "Exception handling and resolution workflows",
        "Inventory reconciliation between systems",
        "Monitoring, alerting, and audit trails",
      ],
      outcome: "Protect existing technology investments while simplifying upgrades.",
      link: { label: "Explore the platform", href: "/platform" },
    },
    {
      id: "ai-operations",
      title: "AI-Powered Operations & Recovery",
      summary:
        "AI tools that improve system visibility, identify operational gaps, and reduce manual troubleshooting.",
      activities: [
        "Detect failed or missing interface messages",
        "Identify patterns and recurring failures",
        "Assist root-cause analysis",
        "Validate, correct, and reprocess messages into authorized systems",
        "Dashboards, alerts, and actionable insights",
      ],
      outcome: "Faster, data-driven problem resolution instead of reactive firefighting.",
      link: { label: "Explore AI operations", href: "/ai-operations" },
    },
    {
      id: "reporting-analytics",
      title: "Reporting & Analytics",
      summary:
        "Real-time dashboards for daily floor operations that compare UCH, the actual units/cases per hour, with RCH, the required cases per hour to finish the plan on time.",
      activities: [
        "Live UCH vs RCH by hour, shift, zone, and equipment",
        "Attainment and projected finish against shift end and carrier cutoffs",
        "Rate alerts when UCH falls below RCH",
        "Automatic shift and daily performance reports",
        "Trends across shifts and sites, with export to your BI tools",
      ],
      outcome: "Supervisors see where the shift stands and act before cutoffs slip.",
      link: { label: "Explore analytics", href: "/analytics" },
    },
    {
      id: "quality-assurance",
      title: "Quality Assurance & Testing",
      summary:
        "We test every layer so the solution is production-ready before the floor depends on it.",
      activities: [
        "Test strategy, planning, and scripts traced to requirements",
        "Functional and integration testing",
        "End-to-end and system testing across WMS, platform, and WCS",
        "User acceptance testing (UAT) with operations teams",
        "Regression testing for upgrades and changes",
      ],
      outcome: "Confidence at go-live, with fewer surprises in production.",
    },
    {
      id: "go-live",
      title: "Go-Live & HyperCare",
      summary: "We stay on through deployment and cutover until operations are stable.",
      activities: [
        "Cutover planning and rehearsal",
        "Deployment and go-live floor support",
        "System stabilization and performance tuning",
        "Troubleshooting and issue resolution",
        "Post-production HyperCare and knowledge transfer",
      ],
      outcome: "A smooth launch and a stable operation afterward.",
    },
    {
      id: "deployment",
      title: "Flexible Deployment",
      summary:
        "Run the KENIS platform in our managed cloud, inside your network, or as a hybrid, with the same guardrails and security controls.",
      activities: [
        "KENIS-managed cloud hosting",
        "On-premises or private cloud deployment",
        "Hybrid edge-plus-cloud architectures",
        "Active/passive disaster recovery across two regions",
        "Security guardrails in every deployment",
      ],
      outcome: "A deployment model that fits your IT and security policies.",
      link: { label: "View deployment options", href: "/deployment" },
    },
  ] as Service[],
};
