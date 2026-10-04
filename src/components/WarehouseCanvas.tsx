/**
 * Full-bleed abstract warehouse flow: lanes, nodes, and moving packets.
 * Acts as the hero visual plane without stock photography.
 */
export function WarehouseCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lane" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10261f" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#2f6b57" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#10261f" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2fd27a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2fd27a" stopOpacity="0" />
          </linearGradient>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#24403a"
              strokeWidth="0.6"
              opacity="0.35"
            />
          </pattern>
        </defs>

        <rect width="1440" height="900" fill="#050c0b" />
        <rect width="1440" height="900" fill="url(#grid)" />

        {/* Perspective floor plane */}
        <path
          d="M0 520 L720 380 L1440 520 L1440 900 L0 900 Z"
          fill="#0a1a15"
          opacity="0.9"
        />

        {/* Conveyor lanes */}
        {[0, 1, 2, 4].map((i) => {
          const y = 560 + i * 42;
          const x1 = 80 + i * 40;
          return (
            <g key={i}>
              <path
                d={`M${x1} ${y} L${720} ${420 + i * 18} L${1440 - x1} ${y}`}
                fill="none"
                stroke="url(#lane)"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d={`M${x1} ${y} L${720} ${420 + i * 18} L${1440 - x1} ${y}`}
                fill="none"
                stroke="#7fa39a"
                strokeWidth="1.2"
                opacity="0.45"
              />
            </g>
          );
        })}

        {/* Vertical rack suggestions */}
        {[980, 1080, 1180, 1280].map((x, i) => (
          <g key={x} opacity={0.35 + i * 0.08}>
            <rect x={x} y={180} width={36} height={280} fill="#0f211b" stroke="#2f6b57" strokeWidth="1" />
            {[0, 1, 2, 3, 4].map((r) => (
              <line
                key={r}
                x1={x}
                y1={220 + r * 48}
                x2={x + 36}
                y2={220 + r * 48}
                stroke="#2f6b57"
                strokeWidth="1"
              />
            ))}
          </g>
        ))}

        {/* Central orchestration node */}
        <circle cx="720" cy="340" r="54" fill="url(#glow)" />
        <circle
          cx="720"
          cy="340"
          r="28"
          fill="#08140f"
          stroke="#2fd27a"
          strokeWidth="2"
          className="origin-center animate-pulse-soft"
        />
        <circle cx="720" cy="340" r="8" fill="#2fd27a" />

        {/* Connection spokes */}
        {[
          [420, 260],
          [520, 200],
          [920, 200],
          [1020, 260],
          [560, 480],
          [880, 480],
        ].map(([x, y], i) => (
          <g key={i}>
            <line
              x1="720"
              y1="340"
              x2={x}
              y2={y}
              stroke="#2f6b57"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              className="animate-dash"
            />
            <circle cx={x} cy={y} r="6" fill="#10261f" stroke="#7fa39a" strokeWidth="1.5" />
          </g>
        ))}

        {/* Moving packets along lanes */}
        <circle r="5" fill="#62e49c">
          <animateMotion dur="7s" repeatCount="indefinite" path="M160 580 L720 430 L1280 580" />
        </circle>
        <circle r="4" fill="#7fa39a">
          <animateMotion dur="9s" begin="1.2s" repeatCount="indefinite" path="M200 620 L720 450 L1240 620" />
        </circle>
        <circle r="4" fill="#2fd27a">
          <animateMotion dur="8s" begin="2.4s" repeatCount="indefinite" path="M240 660 L720 470 L1200 660" />
        </circle>
      </svg>
    </div>
  );
}
