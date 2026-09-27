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
        label: "Best for",
        values: [
          "Fast start and lean IT teams",
          "Strict data residency and security policies",
          "Multi-site operations needing low-latency control",
        ],
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
        text: "Run security, performance, integration, and user acceptance testing.",
      },
      {
        name: "Go live & operate",
        text: "Cut over, monitor, and support the platform through HyperCare and beyond.",
      },
    ],
  },
};
