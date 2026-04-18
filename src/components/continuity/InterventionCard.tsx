import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { mockAgentResponse } from "@/lib/agentResponse";
import { SignalExplanationPanel } from "./SignalExplanationPanel";

export function InterventionCard() {
  const [open, setOpen] = useState(false);
  const [decision, setDecision] = useState<string | null>(null);
  const a = mockAgentResponse;

  const handleAction = (action: string) => {
    setDecision(action);
    const messages: Record<string, string> = {
      Accept: "Accepted — pre-ordering low-glycemic lunch now.",
      Modify: "Opening modification options…",
      Dismiss: "Dismissed — the system will learn from this.",
    };
    toast.success(messages[action] ?? action, {
      description: "Decision logged to Learning Velocity.",
    });
  };

  return (
    <div className="glass ease-smooth rounded-2xl p-5">
      <p className="text-[15px] font-semibold leading-snug text-[#e2e8f0]">{a.nudge}</p>

      <div className="mt-3 space-y-1.5 text-[11px] text-[#94a3b8]">
        <div>{a.signal_basis}</div>
        <div className="italic">{a.clinical_anchor}</div>
        <div className="flex items-center gap-1.5">
          <span aria-hidden>🩺</span>
          <span>Shared with your provider via HealthEngine</span>
        </div>
        <div className="text-[#64748b]">11:32 AM</div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => handleAction(a.action_buttons[0])}
          className="ease-smooth flex-1 min-w-[90px] cursor-pointer rounded-lg bg-[#00d4aa] px-4 py-2 text-sm font-semibold text-[#0d1117] hover:bg-[#00d4aa]/90 active:scale-[0.98]"
        >
          {a.action_buttons[0]}
        </button>
        <button
          type="button"
          onClick={() => handleAction(a.action_buttons[1])}
          className="ease-smooth flex-1 min-w-[90px] cursor-pointer rounded-lg border border-[#00d4aa] px-4 py-2 text-sm font-semibold text-[#00d4aa] hover:bg-[#00d4aa]/10 active:scale-[0.98]"
        >
          {a.action_buttons[1]}
        </button>
        <button
          type="button"
          onClick={() => handleAction(a.action_buttons[2])}
          className="ease-smooth flex-1 min-w-[90px] cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold text-[#94a3b8] hover:bg-white/5 active:scale-[0.98]"
        >
          {a.action_buttons[2]}
        </button>
      </div>

      {decision && (
        <div className="mt-2 text-[11px] text-[#64748b]">
          Last decision: <span className="text-[#00d4aa]">{decision}</span>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="ease-smooth mt-3 flex w-full cursor-pointer items-center justify-center gap-1 rounded-lg py-1.5 text-[11px] font-medium text-[#94a3b8] hover:text-[#e2e8f0]"
      >
        {open ? "Hide" : "Why this nudge?"}
        <ChevronDown
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <SignalExplanationPanel open={open} />

      <div className="mt-3 flex justify-end">
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-[#64748b]">
          Powered by Claude
        </span>
      </div>
    </div>
  );
}
