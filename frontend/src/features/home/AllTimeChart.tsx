interface AllTimeChartProps {
  points?: number[];
}

const defaultPoints = [
  8, 14, 11, 20, 17, 28, 24, 38, 34, 48, 44, 58, 54, 70, 66, 84, 92,
];

export function AllTimeChart({ points = defaultPoints }: AllTimeChartProps) {
  const width = 560;
  const height = 260;
  const padding = 16;

  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;

  const coords = points.map((p, i) => {
    const x = padding + (i / (points.length - 1)) * (width - padding * 2);
    const y = height - padding - ((p - min) / range) * (height - padding * 2);
    return [x, y] as const;
  });

  const linePath = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`)
    .join(" ");
  const areaPath = `${linePath} L${coords[coords.length - 1][0]},${height - padding} L${coords[0][0]},${height - padding} Z`;

  const gridLines = [0.2, 0.4, 0.6, 0.8];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      role="img"
      aria-label="Your corporation's all-time performance, trending up from founding to now"
    >
      <defs>
        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22C55E" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
        </linearGradient>
      </defs>

      {gridLines.map((g) => (
        <line
          key={g}
          x1={padding}
          x2={width - padding}
          y1={padding + g * (height - padding * 2)}
          y2={padding + g * (height - padding * 2)}
          stroke="#2A3A2E"
          strokeDasharray="4 4"
          strokeWidth={1}
        />
      ))}

      <path d={areaPath} fill="url(#chart-fill)" />
      <path
        d={linePath}
        fill="none"
        stroke="#22C55E"
        strokeWidth={2.5}
        strokeLinejoin="round"
      />

      <circle cx={coords[0][0]} cy={coords[0][1]} r={4} fill="#EF4444" />
      <circle
        cx={coords[coords.length - 1][0]}
        cy={coords[coords.length - 1][1]}
        r={5}
        fill="#FBBF24"
      />
    </svg>
  );
}
