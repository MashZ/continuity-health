import { signalData } from "@/lib/mockData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[#00d4aa]/10 px-1.5 py-0.5 text-[10px] font-medium text-[#00d4aa]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#00d4aa]" />
      LIVE
    </span>
  );
}

function Sparkline({ values, color = "#00d4aa" }: { values: number[]; color?: string }) {
  const w = 100;
  const h = 32;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const pts = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-8 w-full" preserveAspectRatio="none">
      <polyline fill="none" stroke={color} strokeWidth="1.5" points={pts} />
    </svg>
  );
}

function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass ease-smooth rounded-2xl p-4 hover:border-white/20">{children}</div>
  );
}

export function SignalRibbon() {
  const { hrv, sleep, restingHR } = signalData;
  const hrvDelta = Math.round(((hrv.current - hrv.baseline30d) / hrv.baseline30d) * 100);
  const sleepTotal = sleep.rem + sleep.deep + sleep.light;

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {/* HRV */}
        <GlassCard>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-[#94a3b8]">
              HRV
            </span>
            <LiveBadge />
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-semibold text-[#e2e8f0]">{hrv.current}</span>
            <span className="text-xs text-[#64748b]">ms</span>
          </div>
          <div className="mt-1">
            <Sparkline values={hrv.trend} color={hrvDelta < 0 ? "#f59e0b" : "#00d4aa"} />
          </div>
          <div className="mt-1 text-[11px] text-[#64748b]">
            <span className={hrvDelta < 0 ? "text-amber" : "text-teal"}>
              {hrvDelta > 0 ? "+" : ""}
              {hrvDelta}%
            </span>{" "}
            vs. 30-day baseline
          </div>
        </GlassCard>

        {/* Sleep */}
        <GlassCard>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-[#94a3b8]">
              Sleep Architecture
            </span>
            <LiveBadge />
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-semibold text-[#e2e8f0]">{sleep.score}</span>
            <span className="text-xs text-[#64748b]">/100</span>
          </div>
          <div className="mt-2 flex h-2 w-full overflow-hidden rounded-full bg-white/5">
            <div
              style={{ width: `${(sleep.rem / sleepTotal) * 100}%`, background: "#00d4aa" }}
              title={`REM ${sleep.rem}m`}
            />
            <div
              style={{ width: `${(sleep.deep / sleepTotal) * 100}%`, background: "#0891b2" }}
              title={`Deep ${sleep.deep}m`}
            />
            <div
              style={{ width: `${(sleep.light / sleepTotal) * 100}%`, background: "#475569" }}
              title={`Light ${sleep.light}m`}
            />
          </div>
          <div className="mt-1.5 flex justify-between text-[10px] text-[#64748b]">
            <span>REM {sleep.rem}m</span>
            <span>Deep {sleep.deep}m</span>
            <span>Light {sleep.light}m</span>
          </div>
        </GlassCard>

        {/* Resting HR */}
        <GlassCard>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-[#94a3b8]">
              Resting HR
            </span>
            <LiveBadge />
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-semibold text-[#e2e8f0]">{restingHR.current}</span>
            <span className="text-xs text-[#64748b]">bpm</span>
          </div>
          <div className="mt-1">
            <Sparkline values={restingHR.trend} />
          </div>
          <div className="mt-1 text-[11px] text-[#64748b]">7-day trend</div>
        </GlassCard>
      </div>

      {/* Privacy chip */}
      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="ease-smooth flex w-full cursor-default items-center justify-center gap-2 rounded-full border border-[#00d4aa]/30 bg-[#00d4aa]/5 px-4 py-2 text-xs text-[#00d4aa] hover:bg-[#00d4aa]/10">
              <span aria-hidden>🔒</span>
              <span>Privacy Layer · Processing locally · Deny-by-default egress</span>
            </div>
          </TooltipTrigger>
          <TooltipContent className="max-w-sm">
            Raw biometrics never leave your device. Only 30-day trend features pass to the
            Intelligence Layer. OpenClaw-pattern local-first architecture. Provider-side routing
            through HealthEngine's HIPAA-compliant infrastructure.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
