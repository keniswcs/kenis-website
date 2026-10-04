import {
  ArrowDown,
  ArrowRight,
  Bot,
  Building2,
  CircuitBoard,
  Cpu,
  Package,
  ShoppingCart,
  Split,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { platform } from "@/content/platform";

const icons: Record<string, LucideIcon> = {
  WMS: Warehouse,
  ERP: Building2,
  OMS: ShoppingCart,
  WCS: Cpu,
  PLC: CircuitBoard,
  Conveyors: Package,
  Sorters: Split,
  Robotics: Bot,
};

const { enterprise, kenis, automation } = platform.diagram;

function SystemGroup({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className="rounded-sm border border-steel/50 bg-ink-raised/90 p-5">
      <p className="text-center text-sm font-semibold text-foam">{label}</p>
      <ul className="mt-4 flex flex-wrap justify-center gap-2">
        {items.map((name) => {
          const Icon = icons[name] ?? Cpu;
          return (
            <li
              key={name}
              className="flex w-16 flex-col items-center gap-1.5 rounded-sm border border-steel/50 bg-ink px-1 py-2.5"
            >
              <Icon className="h-5 w-5 text-steel-bright" strokeWidth={1.75} aria-hidden />
              <span className="text-[11px] font-medium text-mist">{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex items-center justify-center text-signal" aria-hidden>
      <ArrowDown className="h-6 w-6 lg:hidden" />
      <ArrowRight className="hidden h-6 w-6 lg:block" />
    </div>
  );
}

export function PlatformDiagram() {
  return (
    <figure className="grid items-center gap-4 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
      <SystemGroup label={enterprise.label} items={enterprise.items} />
      <Connector />
      <div className="relative rounded-sm border border-signal/70 bg-ink px-6 py-8 text-center shadow-[0_0_60px_-12px_rgba(201,120,42,0.55)]">
        <p className="font-display text-4xl font-semibold tracking-[0.08em] text-foam sm:text-5xl">
          {kenis.label}
        </p>
        <p className="mt-3 text-xs font-medium tracking-wide text-signal sm:text-sm">{kenis.tagline}</p>
      </div>
      <Connector />
      <SystemGroup label={automation.label} items={automation.items} />
      <figcaption className="sr-only">
        Enterprise systems ({enterprise.items.join(", ")}) connect through the KENIS Integration &
        Orchestration Platform to automation systems ({automation.items.join(", ")}).
      </figcaption>
    </figure>
  );
}
