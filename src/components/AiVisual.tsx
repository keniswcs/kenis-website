const pins = [100, 140, 180];
const traces = pins.flatMap((p) => [
  { x1: p, y1: 30, x2: p, y2: 70 },
  { x1: p, y1: 250, x2: p, y2: 210 },
  { x1: 30, y1: p, x2: 70, y2: p },
  { x1: 250, y1: p, x2: 210, y2: p },
]);

export function AiVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`} aria-hidden>
      <div className="absolute inset-[18%] rounded-full bg-signal/20 blur-3xl" />
      <svg viewBox="0 0 280 280" className="relative h-full w-full">
        {traces.map((t, i) => (
          <g key={`${t.x1}-${t.y1}`}>
            <line {...t} stroke="var(--signal)" strokeOpacity="0.55" strokeWidth="2" />
            <circle
              cx={t.x1}
              cy={t.y1}
              r="4"
              fill="var(--signal-bright)"
              className={i % 3 === 0 ? "animate-pulse-soft" : undefined}
            />
          </g>
        ))}
        <rect x="70" y="70" width="140" height="140" rx="6" fill="var(--ink)" stroke="var(--signal)" strokeWidth="2.5" />
        <rect x="86" y="86" width="108" height="108" rx="3" fill="none" stroke="var(--signal)" strokeOpacity="0.35" />
        <text
          x="140"
          y="158"
          textAnchor="middle"
          fill="var(--foam)"
          fontSize="52"
          fontWeight="600"
          fontFamily="var(--font-syne), sans-serif"
        >
          AI
        </text>
      </svg>
    </div>
  );
}
