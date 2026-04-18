import { calibrationTrend, decisionFeed } from "@/lib/mockData";

function CalibrationChart({ values }: { values: number[] }) {
  const w = 600;
  const h = 160;
  const pad = 8;
  const min = Math.min(...values) - 4;
  const max = Math.max(...values) + 4;
  const range = max - min || 1;
  const pts = values.map((v, i) => {
    const x = pad + (i / (values.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return [x, y] as const;
  });
  const path = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const areaPath = `${path} L${pts[pts.length - 1][0]},${h} L${pts[0][0]},${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-40 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="calArea" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#calArea)" />
      <path d={path} fill="none" stroke="#00d4aa" strokeWidth="2" />
    </svg>
  );
}

function DotColor({ action }: { action: "Accept" | "Modify" | "Dismiss" }) {
  const color =
    action === "Accept" ? "#00d4aa" : action === "Modify" ? "#f59e0b" : "#64748b";
  return <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: color }} />;
}

export function LearningVelocity() {
  const current = calibrationTrend[calibrationTrend.length - 1];

  return (
    <div className="space-y-4">
      <div className="glass rounded-2xl p-5">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#94a3b8]">
              Calibration Score
            </div>
            <div className="mt-1 text-2xl font-semibold text-[#e2e8f0]">
              {Math.round(current)} <span className="text-base text-[#64748b]">/ 100</span>{" "}
              <span className="ml-1 text-sm font-medium text-[#00d4aa]">— improving</span>
            </div>
          </div>
        </div>
        <div className="mt-3 text-xs font-medium text-[#94a3b8]">Agent Calibration Over Time</div>
        <div className="mt-2">
          <CalibrationChart values={calibrationTrend} />
        </div>
        <div className="mt-1 flex justify-between text-[10px] text-[#64748b]">
          <span>30 days ago</span>
          <span>Today</span>
        </div>
      </div>

      <div className="glass rounded-2xl p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">
          Recent decisions
        </div>
        <ul className="mt-3 divide-y divide-white/5">
          {decisionFeed.map((d) => (
            <li key={d.id} className="flex items-center gap-3 py-2.5 text-sm">
              <DotColor action={d.action} />
              <span className="flex-1 text-[#e2e8f0]">{d.label}</span>
              <span className="text-[11px] text-[#64748b]">{d.time}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[11px] italic text-[#64748b]">
          Every decision you make teaches the system. Unlike static health apps, Continuity
          compounds in intelligence.
        </p>
      </div>
    </div>
  );
}
