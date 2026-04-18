import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export function EscalationBanner({ active }: { active: boolean }) {
  const [render, setRender] = useState(active);
  const [visible, setVisible] = useState(active);
  const [previewOpen, setPreviewOpen] = useState(false);

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
    <>
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
              onClick={() => setPreviewOpen(true)}
              className="ease-smooth cursor-pointer rounded-lg bg-[#f59e0b] px-4 py-2 text-xs font-semibold text-[#0d1117] hover:bg-[#f59e0b]/90 active:scale-[0.98]"
            >
              Route to provider via HealthEngine
            </button>
            <button
              type="button"
              onClick={() => toast("Escalation dismissed for now.")}
              className="ease-smooth cursor-pointer rounded-lg px-4 py-2 text-xs font-semibold text-[#94a3b8] hover:bg-white/5"
            >
              Dismiss for now
            </button>
          </div>
        </div>
      </div>

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-lg border-white/10 bg-[#161b22] text-[#e2e8f0]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-[#f59e0b]">
              <span aria-hidden>📨</span> Draft message preview
            </DialogTitle>
            <DialogDescription className="text-[#94a3b8]">
              Review before routing through HealthEngine's secure provider channel.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-[12.5px] leading-relaxed">
            <div className="flex justify-between text-[11px] text-[#64748b]">
              <span><span className="text-[#94a3b8]">To:</span> Dr. Patel (PCP) · via HealthEngine</span>
              <span>Draft</span>
            </div>
            <div className="text-[11px] text-[#64748b]">
              <span className="text-[#94a3b8]">Subject:</span> Trend review — autonomic markers, last 9 days
            </div>
            <div className="border-t border-white/10 pt-3 text-[#e2e8f0]">
              <p>Hi Dr. Patel,</p>
              <p className="mt-2">
                Sharing a trend summary from my Continuity wearable monitoring for your awareness:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-[#94a3b8]">
                <li>HRV: <span className="text-[#e2e8f0]">15% below 30-day baseline, sustained 9 days</span></li>
                <li>Resting HR: <span className="text-[#e2e8f0]">+6 bpm vs. baseline</span></li>
                <li>Sleep debt: <span className="text-[#e2e8f0]">~4.5 h accumulated this week</span></li>
                <li>No acute symptoms reported</li>
              </ul>
              <p className="mt-3">
                Continuity flagged this as a pattern worth a clinician's eye — not a diagnostic finding. Let me know if you'd like to discuss at my next visit or sooner.
              </p>
              <p className="mt-2 text-[#94a3b8]">— Sent via Continuity / HealthEngine</p>
            </div>
          </div>

          <p className="text-[11px] text-[#64748b]">
            🔒 Routed through HealthEngine's HIPAA-compliant provider channel. Nothing is sent until you approve.
          </p>

          <DialogFooter className="gap-2 sm:gap-2">
            <button
              type="button"
              onClick={() => setPreviewOpen(false)}
              className="ease-smooth cursor-pointer rounded-lg px-4 py-2 text-xs font-semibold text-[#94a3b8] hover:bg-white/5"
            >
              Edit draft
            </button>
            <button
              type="button"
              onClick={() => {
                setPreviewOpen(false);
                toast.success("Routed to Dr. Patel via HealthEngine.", {
                  description: "You'll be notified when the provider responds.",
                });
              }}
              className="ease-smooth cursor-pointer rounded-lg bg-[#f59e0b] px-4 py-2 text-xs font-semibold text-[#0d1117] hover:bg-[#f59e0b]/90 active:scale-[0.98]"
            >
              Approve & send
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
