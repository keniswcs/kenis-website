"use client";

import { useEffect, useState } from "react";
import { analytics } from "@/content/analytics";

const TICK_MS = 2000;
const START_MINUTE = 24;
const SHIFT_HOURS = 8;

const { shiftLabel, shiftStartHour, plannedCases, completedHours, currentHourRate, zones } =
  analytics.dashboard;
const currentHour = completedHours.length;
const doneBefore = completedHours.reduce((sum, n) => sum + n, 0);

function noise(n: number) {
  const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function casesAt(minute: number) {
  let cases = 0;
  for (let m = 1; m <= minute; m++) {
    cases += (currentHourRate / 60) * (0.82 + 0.36 * noise(m));
  }
  return Math.round(cases);
}

function requiredRate(completedSoFar: number, hoursLeft: number) {
  return Math.round((plannedCases - completedSoFar) / hoursLeft);
}

const completedHourRch = completedHours.map((_, h) =>
  requiredRate(
    completedHours.slice(0, h).reduce((sum, n) => sum + n, 0),
    SHIFT_HOURS - h,
  ),
);

function status(attainment: number) {
  if (attainment >= 1) return { label: "On pace", text: "text-emerald-400", bar: "bg-emerald-400" };
  if (attainment >= 0.95) return { label: "At risk", text: "text-signal-bright", bar: "bg-signal-bright" };
  return { label: "Behind", text: "text-red-400", bar: "bg-red-400" };
}

const fmt = (n: number) => n.toLocaleString("en-US");
const pct = (n: number) => `${Math.round(n * 100)}%`;
const clock = (hourFloat: number) => {
  const h = Math.floor(hourFloat);
  const m = Math.floor((hourFloat - h) * 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
};

export function FloorDashboard() {
  const [minute, setMinute] = useState(START_MINUTE);

  useEffect(() => {
    const id = window.setInterval(() => {
      setMinute((m) => (m >= 59 ? START_MINUTE : m + 1));
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  const casesThisHour = casesAt(minute);
  const uch = Math.round((casesThisHour / minute) * 60);
  const done = doneBefore + casesThisHour;
  const hoursLeft = SHIFT_HOURS - currentHour - minute / 60;
  const rch = requiredRate(done, hoursLeft);
  const attainment = uch / rch;
  const overall = status(attainment);
  const now = shiftStartHour + currentHour + minute / 60;
  const eta = now + (plannedCases - done) / uch;
  const shiftEnd = shiftStartHour + SHIFT_HOURS;

  const hours = Array.from({ length: SHIFT_HOURS }, (_, h) => {
    const hourRch = h < currentHour ? completedHourRch[h] : rch;
    const actual = h < currentHour ? completedHours[h] : h === currentHour ? casesThisHour : 0;
    return { label: String(shiftStartHour + h).padStart(2, "0"), actual, rch: hourRch, h };
  });
  const scaleMax = Math.max(...hours.map((x) => Math.max(x.actual, x.rch)), uch) * 1.15;

  return (
    <figure className="overflow-hidden rounded-sm border border-steel/40 bg-ink shadow-2xl shadow-black/30">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-steel/30 bg-ink-raised px-5 py-3">
        <div>
          <p className="font-display text-sm font-semibold text-foam">Floor dashboard</p>
          <p className="text-xs text-mist">{shiftLabel}</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="font-mono text-foam">{clock(now)}</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-steel/50 px-2.5 py-1 text-steel-bright">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" aria-hidden />
            Live · sample data
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px bg-steel/25 lg:grid-cols-4">
        <Tile label="UCH · actual" value={fmt(uch)} note="cases per hour, current hour" />
        <Tile label="RCH · required" value={fmt(rch)} note="cases per hour to finish the plan" />
        <Tile
          label="Attainment"
          value={pct(attainment)}
          note={overall.label}
          valueClass={overall.text}
        />
        <Tile
          label="Projected finish"
          value={clock(eta)}
          note={eta <= shiftEnd ? `before ${clock(shiftEnd)} shift end` : `after ${clock(shiftEnd)} shift end`}
          valueClass={eta <= shiftEnd ? "text-emerald-400" : "text-red-400"}
        />
      </div>

      <div className="grid gap-px bg-steel/25 lg:grid-cols-5">
        <div className="bg-ink px-5 py-5 lg:col-span-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-medium tracking-[0.18em] text-steel-bright uppercase">
              Cases per hour
            </p>
            <div className="flex items-center gap-4 text-xs text-mist">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-[2px] bg-steel-bright" aria-hidden />
                UCH
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 border-t-2 border-dashed border-signal-bright" aria-hidden />
                RCH
              </span>
            </div>
          </div>
          <div className="mt-4 flex h-44 items-end gap-2 sm:gap-3">
            {hours.map((x) => {
              const isCurrent = x.h === currentHour;
              const isFuture = x.h > currentHour;
              return (
                <div key={x.label} className="flex h-full flex-1 flex-col">
                  <div className="relative flex-1">
                    {isCurrent && (
                      <div
                        className="absolute inset-x-0 bottom-0 rounded-t-[2px] border border-dashed border-signal/60"
                        style={{ height: `${(uch / scaleMax) * 100}%` }}
                        aria-hidden
                      />
                    )}
                    <div
                      className={`absolute inset-x-0 bottom-0 rounded-t-[2px] transition-[height] duration-700 motion-reduce:transition-none ${
                        isCurrent ? "bg-signal" : "bg-steel-bright/80"
                      }`}
                      style={{ height: `${(x.actual / scaleMax) * 100}%` }}
                    />
                    <div
                      className={`absolute -inset-x-0.5 border-t-2 border-dashed transition-[bottom] duration-700 motion-reduce:transition-none ${
                        isFuture ? "border-signal-bright/40" : "border-signal-bright"
                      }`}
                      style={{ bottom: `${(x.rch / scaleMax) * 100}%` }}
                      aria-hidden
                    />
                  </div>
                  <span
                    className={`mt-2 text-center font-mono text-[11px] ${
                      isCurrent ? "text-signal" : "text-mist"
                    }`}
                  >
                    {x.label}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-mist">
            Current hour: {fmt(casesThisHour)} cases so far, pacing to {fmt(uch)}.
          </p>
        </div>

        <div className="bg-ink px-5 py-5 lg:col-span-2">
          <p className="text-xs font-medium tracking-[0.18em] text-steel-bright uppercase">By zone</p>
          <ul className="mt-4 space-y-3.5">
            {zones.map((zone, i) => {
              const zoneRch = Math.round(rch * zone.share);
              const zoneUch = Math.round(
                uch * zone.share * zone.pace * (1 + 0.04 * (noise(minute * 31 + i * 7) - 0.5)),
              );
              const zoneAttainment = zoneUch / zoneRch;
              const s = status(zoneAttainment);
              return (
                <li key={zone.name}>
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-foam">{zone.name}</span>
                    <span className="font-mono text-xs text-mist">
                      {fmt(zoneUch)} / {fmt(zoneRch)}{" "}
                      <span className={`ml-1 ${s.text}`}>{pct(zoneAttainment)}</span>
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-steel/40">
                    <div
                      className={`h-full rounded-full transition-[width] duration-700 motion-reduce:transition-none ${s.bar}`}
                      style={{ width: `${Math.min(zoneAttainment, 1) * 100}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-xs text-mist">UCH / RCH per zone, cases per hour.</p>
        </div>
      </div>

      <figcaption className="sr-only">
        Sample floor dashboard with simulated data comparing actual cases per hour (UCH) with
        required cases per hour (RCH) by hour and by zone.
      </figcaption>
    </figure>
  );
}

function Tile({
  label,
  value,
  note,
  valueClass = "text-foam",
}: {
  label: string;
  value: string;
  note: string;
  valueClass?: string;
}) {
  return (
    <div className="bg-ink px-5 py-4">
      <p className="text-[11px] font-medium tracking-[0.16em] text-steel-bright uppercase">{label}</p>
      <p className={`mt-1.5 font-display text-2xl font-semibold tabular-nums sm:text-3xl ${valueClass}`}>
        {value}
      </p>
      <p className="mt-1 text-xs text-mist">{note}</p>
    </div>
  );
}
