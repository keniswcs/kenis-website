"use client";

import { useState } from "react";
import { platform } from "@/content/platform";

const { modules, trafficModes } = platform.product;
const CAPACITY_PER_INSTANCE = 12;
const maxFootprint =
  modules.reduce((sum, m) => sum + m.weight, 0) * Math.max(...trafficModes.map((t) => t.factor));

export function FeatureToggles() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(modules.map((m) => [m.id, m.on])),
  );
  const [modeId, setModeId] = useState("normal");

  const mode = trafficModes.find((t) => t.id === modeId) ?? trafficModes[1];
  const activeModules = modules.filter((m) => enabled[m.id]);
  const footprint = activeModules.reduce((sum, m) => sum + m.weight, 0) * mode.factor;
  const share = footprint / maxFootprint;
  const instances = Math.max(1, Math.ceil(footprint / CAPACITY_PER_INSTANCE));
  const maxInstances = Math.ceil(maxFootprint / CAPACITY_PER_INSTANCE);

  return (
    <div className="overflow-hidden rounded-sm border border-steel/40 bg-ink shadow-2xl shadow-black/30">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-steel/30 bg-ink-raised px-5 py-3">
        <div>
          <p className="font-display text-sm font-semibold text-foam">Platform configuration</p>
          <p className="text-xs text-mist">Try it: switch modules and traffic levels</p>
        </div>
        <div
          role="radiogroup"
          aria-label="Traffic level"
          className="flex rounded-sm border border-steel/50 p-0.5"
        >
          {trafficModes.map((t) => (
            <button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={t.id === modeId}
              onClick={() => setModeId(t.id)}
              className={`rounded-[2px] px-3 py-1.5 text-xs font-medium transition-colors ${
                t.id === modeId ? "bg-signal text-ink" : "text-mist hover:text-foam"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-px bg-steel/25 lg:grid-cols-5">
        <ul className="grid gap-px bg-steel/25 sm:grid-cols-2 lg:col-span-3">
          {modules.map((m) => {
            const on = enabled[m.id];
            return (
              <li key={m.id} className="bg-ink">
                <button
                  type="button"
                  role="switch"
                  aria-checked={on}
                  disabled={m.locked}
                  onClick={() => setEnabled((prev) => ({ ...prev, [m.id]: !prev[m.id] }))}
                  className="flex h-full w-full items-start gap-3 px-5 py-4 text-left transition-colors hover:bg-white/[0.03] disabled:cursor-not-allowed disabled:hover:bg-transparent"
                >
                  <span
                    className={`relative mt-0.5 inline-flex h-5 w-9 shrink-0 rounded-full transition-colors ${
                      on ? (m.locked ? "bg-signal/60" : "bg-signal") : "bg-steel/70"
                    }`}
                    aria-hidden
                  >
                    <span
                      className={`absolute top-0.5 h-4 w-4 rounded-full bg-foam transition-transform motion-reduce:transition-none ${
                        on ? "translate-x-[18px]" : "translate-x-0.5"
                      }`}
                    />
                  </span>
                  <span>
                    <span className={`block text-sm font-medium ${on ? "text-foam" : "text-mist"}`}>
                      {m.name}
                      {m.locked && (
                        <span className="ml-2 text-[11px] font-normal tracking-wide text-steel-bright uppercase">
                          Always on
                        </span>
                      )}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-mist">{m.text}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col bg-ink px-5 py-5 lg:col-span-2" aria-live="polite">
          <p className="text-xs font-medium tracking-[0.18em] text-steel-bright uppercase">
            Resource footprint
          </p>
          <p className="mt-2 font-display text-3xl font-semibold text-foam tabular-nums">
            {Math.round(share * 100)}%
            <span className="ml-2 text-sm font-normal text-mist">of maximum</span>
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-steel/40">
            <div
              className="h-full rounded-full bg-signal transition-[width] duration-500 motion-reduce:transition-none"
              style={{ width: `${share * 100}%` }}
            />
          </div>

          <p className="mt-6 text-xs font-medium tracking-[0.18em] text-steel-bright uppercase">
            Service instances
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5" aria-label={`${instances} of ${maxInstances} instances running`}>
            {Array.from({ length: maxInstances }, (_, i) => (
              <span
                key={i}
                className={`h-4 w-4 rounded-[3px] transition-colors duration-300 motion-reduce:transition-none ${
                  i < instances ? "bg-steel-bright" : "border border-steel/50"
                }`}
                aria-hidden
              />
            ))}
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-xs text-mist">Modules on</dt>
              <dd className="mt-0.5 font-display text-lg font-semibold text-foam">
                {activeModules.length} / {modules.length}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-mist">Traffic</dt>
              <dd className="mt-0.5 font-display text-lg font-semibold text-foam">{mode.label}</dd>
            </div>
          </dl>

          <p className="mt-auto pt-6 text-xs leading-relaxed text-mist">
            Illustrative only. Actual sizing depends on your volumes, sites, and deployment model.
          </p>
        </div>
      </div>
    </div>
  );
}
