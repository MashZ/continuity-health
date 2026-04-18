import { useEffect, useState } from "react";

export function EscalationBanner({ active }: { active: boolean }) {
  const [render, setRender] = useState(active);
  const [visible, setVisible] = useState(active);

  useEffect(() => {
    if (active) {
      setRender(true);
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    } else {
      setVisible(false);
      const t = setTimeout(() => setRender(false), 200);
      return () => clearTimeout(t);
    }
  }, [active]);

  if (!render) return null;

  return (
    <div
      role="alert"
      className="rounded-2xl p-5 transition-opacity duration-200"
      style={{
        background: "rgba(245, 158, 11, 0.12)",
        border: "1px solid rgba(245, 158, 11, 0.4)",
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex flex-1 items-start gap-3">
          <span className="text-xl leading-none" aria-hidden>⚠️</span>
          <div className="space-y-1.5">
            <div className="text-sm font-bold text-[#f59e0b]">
              Clinical escalation recommended
            </div>
            <p className="text-[13px] leading-relaxed text-[#e2e8f0]">
              Nine days of HRV decline paired with elevated resting heart rate is a pattern worth a clinician's eye. I've drafted a message to your HealthEngine-connected provider summarizing the trend — approve and it routes through HealthEngine's secure provider channel. Continuity is a behavioral tool, not a diagnostic one.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-stretch">
          <button
            type="button"
            className="ease-smooth cursor-pointer rounded-lg bg-[#f59e0b] px-4 py-2 text-xs font-semibold text-[#0d1117] hover:bg-[#f59e0b]/90 active:scale-[0.98]"
          >
            Route to provider via HealthEngine
          </button>
          <button
            type="button"
            className="ease-smooth cursor-pointer rounded-lg px-4 py-2 text-xs font-semibold text-[#94a3b8] hover:bg-white/5"
          >
            Dismiss for now
          </button>
        </div>
      </div>
    </div>
  );
}
