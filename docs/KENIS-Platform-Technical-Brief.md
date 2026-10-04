# KENIS Integration & Orchestration Platform - Technical Solution Brief

Internal document for sales, solution design, and RFP responses. Not published on keniswcs.com.

This brief keeps the detailed technical material that was moved off the public website in October 2026, following SME feedback that the public pages should stay short and outcome-focused.

---

## 1. Architecture

The platform is the middleware layer between enterprise systems and equipment control. It orchestrates workflows, exceptions, inventory synchronization, and equipment coordination, so the WCS stays lean and operations stay resilient.

```
 Enterprise        WMS · ERP · OMS · TMS · MES · BI
                                   │
 KENIS Platform    API Gateway · Rules & Workflows · Event Processing · Exception Handling
                   Inventory Sync · Equipment Coordination · Monitoring & Audit
                                   │
 WCS & Floor       WCS · PLC · AS/RS · Conveyors · Sorters · Robots · AMRs
```

### Core services

| Service | What it does |
| --- | --- |
| API Gateway | Secure, single entry point for WMS, WCS, and enterprise system traffic |
| Business Rules Engine | Configurable rules for routing, putaway, allocation, and prioritization |
| Workflow Orchestrator | Coordinates multi-step processes across systems and equipment |
| Event Processing | Reacts to scans, equipment status, and task events in real time |
| Exception Handling | Queues, routes, and tracks exceptions through to resolution |
| Inventory Synchronization | Reconciles WMS and WCS inventory and flags mismatches |
| Equipment Coordination | Puts conveyors, sorters, AS/RS, and robots behind one consistent interface |
| Monitoring & Alerting | Tracks SLAs, throughput, and system health, and alerts the right team |
| Audit & Traceability | Records every message and decision for compliance and root-cause analysis |

**For operations:** order release and wave planning; dynamic putaway and routing; inventory reconciliation; exception and downtime handling; SLA and throughput monitoring.

**For IT:** API gateway and system adapters; event-driven messaging; store-and-forward with retries; active/passive disaster recovery; duplicate-safe message processing; audit and end-to-end traceability.

### Engineering principles

- Event-driven architecture for real-time response
- Coordinated transactions across allocation, reservation, execution, and shipment
- Separate command and read models for fast dashboards
- Multi-warehouse and multi-WCS support
- Active/passive disaster recovery across two regions for cloud and hybrid deployments
- Equipment abstraction, so new automation plugs in without rework
- Configurable modules and auto-scaling for a cost-optimized footprint

---

## 2. Error handling

Failures happen: a WCS goes offline, a message arrives malformed, a sorter jams. The platform contains each failure, recovers automatically where it is safe to, and routes the rest to the right team with full context, so one problem never stops the whole operation.

**Flow:** Detect → Contain → Retry → Isolate → Resolve → Replay

| Capability | Description |
| --- | --- |
| Automatic retries with backoff | Transient failures are retried with increasing delays and limits, so brief outages recover without manual work |
| Dead-letter queues | Messages that keep failing are set aside with full error details, without blocking the rest of the flow |
| Circuit breakers | When a downstream system is unhealthy, the platform stops calling it and buffers work instead of piling up failures |
| Store-and-forward | Messages are held durably while WMS, WCS, or network links are down, then delivered in order |
| Duplicate-safe processing | Repeated orders, tasks, and messages are detected and processed exactly once |
| Validation at the edge | Messages are checked against interface contracts and master data before they reach the floor |
| Compensating transactions | Multi-step workflows roll back or compensate cleanly when a step fails partway through |
| Guided fix and replay | Support teams correct and replay failed messages from a console, one at a time or in bulk, with a full audit trail |
| Severity-based alerting | Errors are classified by impact and routed to the right team, with automatic escalation if unresolved |

---

## 3. Reliability and SLAs

The platform is engineered and operated to meet measurable service levels, with support tiers that match how critical each site is.

| Commitment | Description |
| --- | --- |
| High availability | Redundant, load-balanced services with no single point of failure, monitored around the clock |
| Message latency | End-to-end processing time tracked against agreed targets for every interface |
| Incident response | Defined response and resolution times by severity, with clear escalation paths |
| Recovery | Agreed RTO and RPO, backed by active/passive disaster recovery and regular drills |
| Zero-downtime upgrades | Rolling and blue-green releases keep the platform available while it is upgraded |
| SLA transparency | Live SLA dashboards and monthly service reports show performance against every commitment |

### Service tiers

| Tier | For | Includes |
| --- | --- | --- |
| Standard | Single sites and operations with flexible cutoffs | Business-hours support; monitoring and alerting; monthly service reports |
| Premium | Multi-site operations with tight carrier cutoffs | Extended-hours support; faster response targets; proactive health reviews |
| Mission-critical | 24/7 operations where downtime stops shipping | 24/7 support with on-call engineers; fastest response targets; two-region disaster recovery included |

Exact targets for availability, latency, response, and recovery are agreed in each service agreement.

---

## 4. Platform as a Product

KENIS is a configurable product, not a one-off build. Features are packaged as modules that can be switched on or off per site or client through configuration, without code changes, and capacity scales with traffic, so the solution stays cost-optimized.

### Modules

| Module | Scope | Default |
| --- | --- | --- |
| Core orchestration | Gateway, rules, workflows, error handling | Always on |
| Inventory reconciliation | WMS and WCS inventory kept in sync | On |
| Reporting & Analytics | Live UCH/RCH dashboards and reports | On |
| AI Operations | Failure detection and guided recovery | Optional |
| Predictive insights | Congestion and maintenance signals | Optional |
| Robotics & AMR orchestration | Fleet assignment and zone control | Optional |
| Multi-site management | Central views and rules across facilities | Optional |
| Two-region disaster recovery | Warm standby in a second region | Optional |

### Cost control

- **Feature toggles:** turn modules on or off per site, client, or environment through configuration, with no redeployment.
- **Traffic-based auto-scaling:** services scale out for peak waves and seasonal volume, and back in when traffic drops.
- **Scheduled scaling:** pre-scale ahead of known peaks such as holiday season; reduce capacity overnight and on weekends.
- **Pay for what you use:** modules and capacity are licensed and sized to actual need.
- **Safe rollouts:** enable a feature for one site or zone first, validate, then roll out everywhere, with instant rollback.
- **Cost and usage visibility:** dashboards show module usage, traffic, and resource consumption.

---

## 5. Deployment options

| | KENIS Cloud | Client Network | Hybrid |
| --- | --- | --- | --- |
| Summary | KENIS hosts, monitors, and maintains the platform in its secured cloud | On-premises or in the client's private cloud; data never leaves the client environment | Real-time equipment control on-site; management and analytics in the cloud |
| Who runs the infrastructure | KENIS | Client IT, supported by KENIS | Shared: site edge by client, cloud by KENIS |
| Where data lives | KENIS secured cloud | Inside the client network | Control data on-site, analytics in the cloud |
| Upgrades and patches | Managed by KENIS | Through the client's change process | Coordinated between teams |
| Disaster recovery | Active/passive across two cloud regions | Aligned with the client's DR plan and secondary site | Cloud tier active/passive across two regions; site edge keeps running |
| Best for | Fast start and lean IT teams | Strict data residency and security policies | Multi-site operations needing low-latency control |

### Disaster recovery (KENIS Cloud and Hybrid)

The platform runs active in a primary cloud region with a passive warm standby in a second, geographically separate region. If the primary region goes down, operations fail over to the standby so work keeps flowing between WMS and the floor.

- **Primary region (active):** serves all live traffic; processes WMS, WCS, and equipment messages; replicates continuously to the standby.
- **Secondary region (passive):** warm standby kept in sync, with the same configuration and security controls; takes over live traffic on failover.
- **Continuous replication** of messages, configuration, and platform state.
- **Health monitoring and failover:** health checks detect a regional outage and trigger a controlled failover, automatically or with operator approval.
- **Message durability:** durable queues and site store-and-forward hold messages during failover and replay them in order.
- **Agreed RTO and RPO**, built into the design.
- **Regular DR drills** verify failover and failback, with results shared with the client.
- **Planned failback** to the primary region in a planned window.

Hybrid: equipment control stays at the site edge, so the floor keeps running during a cloud failover. Client Network: KENIS designs recovery to fit the client's own DR plan and secondary site.

### Security guardrails (every deployment)

- Role-based access and least-privilege accounts
- Encryption in transit and at rest
- Network segmentation between enterprise IT and floor (OT) systems
- Approval gates before AI-suggested corrections reach live systems
- Complete audit trail for every message, change, and reprocess
- Separate development, test, and production environments

### Deployment process

1. **Assess:** infrastructure, network, security, and compliance requirements with the client's IT team.
2. **Design:** deployment model, environments, connectivity, and access.
3. **Build and secure:** development, test, and production environments with guardrails in place.
4. **Validate:** security, performance, integration, failover, and user acceptance testing.
5. **Go live and operate:** cut over, monitor, and support through HyperCare and beyond.

---

## 6. Warehouse scenarios

| Area | Examples |
| --- | --- |
| Inbound receiving | Validate ASNs, SKUs, and dock assignments before tasks reach the floor; route scanned pallets to their destination or to an exception lane |
| Putaway | Choose locations by SKU velocity, zone capacity, hazmat, and temperature rules; reserve AS/RS locations and sequence tasks with automatic retries |
| Inventory | Reconcile WMS and WCS inventory on a schedule and create tasks for mismatches; trigger cycle counts after repeated pick errors or variance thresholds |
| Outbound fulfillment | Release orders by customer priority, same-day, and carrier cutoff; build waves by carrier or destination and optimize pick sequences |
| Conveyor and sortation | Re-route to open lanes when a sorter lane fills; pause affected tasks and send alternate routes when a sorter fails |
| Robotics and AMRs | Assign robots by battery level, distance, payload, and zone access; manage zone occupancy and path reservation to prevent congestion |
| Exception management | Stop releases, hold tasks, and notify maintenance when equipment goes down; trace lost totes from the last known scan and escalate stuck inventory |
| Message reliability | Store and forward messages when WMS or WCS is unavailable, then replay them; detect duplicate task, order, and message IDs so each is processed only once |

---

## 7. Business outcomes

- Protect existing technology investments
- Reduce implementation cost and disruption
- Simplify upgrades across vendors
- Keep intelligence above the equipment layer
