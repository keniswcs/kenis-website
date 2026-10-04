export const deployment = {
  title: "Deploy where your operations and security policies require",
  intro:
    "Run the KENIS platform in our managed cloud or inside your own network. Every option comes with the same guardrails and security controls, so you choose based on your IT strategy, not on compromises.",
  description:
    "Deploy the KENIS platform in the KENIS-managed cloud, on-premises or in your private cloud, or as a hybrid, with security guardrails in every deployment.",
  options: [
    {
      name: "KENIS Cloud",
      summary: "We host, monitor, and maintain the platform in our secured cloud network.",
      points: [
        "Fully managed hosting and monitoring",
        "Upgrades and patches handled by KENIS",
        "Encrypted site-to-cloud connectivity",
        "Active/passive disaster recovery across two regions",
        "Fastest path to go-live",
      ],
    },
    {
      name: "Client Network",
      summary: "Deploy on-premises or in your private cloud so data never leaves your environment.",
      points: [
        "Your data center or cloud subscription",
        "Data stays inside your network",
        "Aligned with your IT and security policies",
        "Fits your change-management process",
      ],
    },
    {
      name: "Hybrid",
      summary:
        "Keep real-time equipment control on-site and run management and analytics in the cloud.",
      points: [
        "Low-latency control at the site edge",
        "Central dashboards across facilities",
        "Store-and-forward if connectivity drops",
        "Cloud tier protected by two-region disaster recovery",
        "Scale sites without re-architecture",
      ],
    },
  ],
  comparison: {
    title: "Choosing the right model",
    columns: ["KENIS Cloud", "Client Network", "Hybrid"],
    rows: [
      {
        label: "Who runs the infrastructure",
        values: ["KENIS", "Your IT team, supported by KENIS", "Shared: site edge by you, cloud by KENIS"],
      },
      {
        label: "Where data lives",
        values: ["KENIS secured cloud", "Inside your network", "Control data on-site, analytics in the cloud"],
      },
      {
        label: "Upgrades and patches",
        values: ["Managed by KENIS", "Scheduled through your change process", "Coordinated between teams"],
      },
      {
        label: "Disaster recovery",
        values: [
          "Active/passive across two cloud regions",
          "Aligned with your DR plan and secondary site",
          "Cloud tier active/passive across two regions; site edge keeps running",
        ],
      },
      {
        label: "Best for",
        values: [
          "Fast start and lean IT teams",
          "Strict data residency and security policies",
          "Multi-site operations needing low-latency control",
        ],
      },
    ],
  },
  disasterRecovery: {
    title: "Active/passive across two regions",
    body: "For KENIS Cloud and Hybrid deployments, the platform runs active in a primary cloud region with a passive standby in a second, geographically separate region. If the primary region goes down, operations fail over to the standby so work keeps flowing between WMS and the floor.",
    appliesTo: ["KENIS Cloud", "Hybrid (cloud tier)"],
    regions: [
      {
        role: "Active",
        name: "Primary region",
        items: [
          "Serves all live traffic",
          "Processes WMS, WCS, and equipment messages",
          "Replicates data to the standby region continuously",
        ],
      },
      {
        role: "Passive",
        name: "Secondary region",
        items: [
          "Warm standby, kept in sync",
          "Same configuration and security controls",
          "Takes over live traffic on failover",
        ],
      },
    ],
    features: [
      {
        name: "Continuous replication",
        text: "Messages, configuration, and platform state replicate to the standby region so it is ready to take over.",
      },
      {
        name: "Health monitoring & failover",
        text: "Health checks detect a regional outage and trigger a controlled failover, automatically or with operator approval.",
      },
      {
        name: "Message durability",
        text: "Durable queues and store-and-forward at the site hold messages during failover and replay them in order once the standby is active.",
      },
      {
        name: "Agreed RTO and RPO",
        text: "Recovery time and recovery point objectives are agreed with you and built into the design.",
      },
      {
        name: "Regular DR drills",
        text: "Scheduled tests verify failover and failback, with results shared with your team.",
      },
      {
        name: "Planned failback",
        text: "Return to the primary region in a planned window once it is healthy again.",
      },
    ],
    notes: [
      {
        name: "Hybrid",
        text: "Real-time equipment control stays at the site edge, so the floor keeps running during a cloud failover. Store-and-forward holds messages until the standby region is active.",
      },
      {
        name: "Client Network",
        text: "KENIS designs recovery to fit your own DR plan, data centers, and secondary site.",
      },
    ],
  },
  guardrails: {
    title: "Guardrails and security in every deployment",
    items: [
      "Role-based access and least-privilege accounts",
      "Encryption in transit and at rest",
      "Network segmentation between enterprise IT and floor (OT) systems",
      "Approval gates before AI-suggested corrections reach live systems",
      "Complete audit trail for every message, change, and reprocess",
      "Separate development, test, and production environments",
    ],
  },
  process: {
    title: "How a deployment comes together",
    steps: [
      {
        name: "Assess",
        text: "Review infrastructure, network, security, and compliance requirements with your IT team.",
      },
      {
        name: "Design",
        text: "Choose the deployment model and define environments, connectivity, and access.",
      },
      {
        name: "Build & secure",
        text: "Stand up development, test, and production environments with guardrails in place.",
      },
      {
        name: "Validate",
        text: "Run security, performance, integration, failover, and user acceptance testing.",
      },
      {
        name: "Go live & operate",
        text: "Cut over, monitor, and support the platform through HyperCare and beyond.",
      },
    ],
  },
};
