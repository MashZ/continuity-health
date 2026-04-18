import { mockAgentResponse } from "@/lib/agentResponse";

export function SignalExplanationPanel({ open }: { open: boolean }) {
  if (!open) return null;

  const rows = mockAgentResponse.signal_attribution;
  const tensions = mockAgentResponse.agent_tension_log;

  // Human-readable labels (override JSON to match spec exactly)
  const labels = [
    "HRV 15% below your 30-day baseline",
    "4.5 hours sleep debt accumulated this week",
    "Back-to-back meetings next 4 hours",
    "Sedentary 5+ hours today",
    "Resting HR within normal range — no alarm",
  ];

  return (
    <div className="overflow-hidden animate-accordion-down">
      <div className="mt-4 border-t border-white/10 pt-4">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">
          Why this nudge?
        </div>

        {/* Bar chart */}
        <div className="space-y-2">
          {rows.map((row, i) => {
            const isRight = row.direction === "increases_urgency";
            const widthPct = Math.round(row.weight * 100);
            return (
              <div key={i} className="text-[11px] text-[#e2e8f0]">
                <div className="mb-1 flex justify-between">
                  <span className="text-[#94a3b8]">{labels[i]}</span>
                  <span className="text-[#64748b]">{widthPct}%</span>
                </div>
                <div className="relative flex h-2 w-full items-center">
                  <div className="absolute left-1/2 top-0 h-full w-px bg-white/15" />
                  {isRight ? (
                    <div
                      className="ml-[50%] h-full rounded-r animate-bar"
                      style={{
                        width: `${widthPct / 2}%`,
                        background: "#00d4aa",
                        animationDelay: `${i * 0.08}s`,
                      }}
                    />
                  ) : (
                    <div
                      className="ml-auto mr-[50%] h-full rounded-l animate-bar-right"
                      style={{
                        width: `${widthPct / 2}%`,
                        background: "rgba(245, 158, 11, 0.6)",
                        animationDelay: `${i * 0.08}s`,
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-3 text-[11px] text-[#64748b]">
          Four signals converged. The lowest-friction intervention was selected.
        </p>

        {/* Agent badges */}
        <div className="mt-4 space-y-2">
          <AgentBadge
            icon="🫀"
            name="Clinical"
            text={tensions.clinical_agent.rationale}
          />
          <AgentBadge
            icon="🛡"
            name="Prevention Economics"
            text="7-day HRV decline → ~40% elevated sick-day risk ($300–500 productivity event)"
          />
          <AgentBadge
            icon="⚡"
            name="Behavioral"
            text="Pre-order option: 2-tap action, zero willpower (Fogg B=MAT model)"
          />
        </div>
      </div>
    </div>
  );
}

function AgentBadge({ icon, name, text }: { icon: string; name: string; text: string }) {
  return (
    <div className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
      <span className="text-base leading-tight" aria-hidden>
        {icon}
      </span>
      <div className="text-[11px] leading-snug">
        <span className="font-semibold text-[#e2e8f0]">{name}</span>
        <span className="text-[#94a3b8]"> — {text}</span>
      </div>
    </div>
  );
}
