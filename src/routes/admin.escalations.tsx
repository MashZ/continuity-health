import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AlertOctagon, Bot, ShieldAlert, SignalZero } from "lucide-react";
import { PageTitle } from "@/components/admin/AdminShell";
import { escalations, type Escalation, type EscalationKind, type EscalationStatus } from "@/lib/adminRoster";

export const Route = createFileRoute("/admin/escalations")({
  component: EscalationsPage,
});

const KIND_META: Record<EscalationKind, { label: string; Icon: typeof AlertOctagon; tone: string }> = {
  threshold_breach: { label: "Threshold breach", Icon: AlertOctagon, tone: "text-[#ef4444]" },
  agent_tension: { label: "Agent tension", Icon: Bot, tone: "text-[#8b5cf6]" },
  consent_withdrawal: { label: "Consent withdrawal", Icon: ShieldAlert, tone: "text-[#f59e0b]" },
  signal_gap: { label: "Signal gap", Icon: SignalZero, tone: "text-[#94a3b8]" },
};

function EscalationsPage() {
  const [items, setItems] = useState<Escalation[]>(escalations);
  const [filter, setFilter] = useState<EscalationStatus | "all">("all");

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((e) => e.status === filter)),
    [items, filter],
  );

  const counts = {
    open: items.filter((e) => e.status === "open").length,
    acknowledged: items.filter((e) => e.status === "acknowledged").length,
    routed: items.filter((e) => e.status === "routed").length,
    resolved: items.filter((e) => e.status === "resolved").length,
  };

  function update(id: string, patch: Partial<Escalation>) {
    setItems((arr) => arr.map((e) => (e.id === id ? { ...e, ...patch } : e)));
  }

  return (
    <div className="mx-auto max-w-[1400px]">
      <PageTitle
        title="Escalations"
        subtitle="Threshold breaches, agent-tension flags, and consent-withdrawal events"
        right={
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f59e0b]/40 bg-[#f59e0b]/10 px-2 py-0.5 text-[11px] text-[#f59e0b]">
            {counts.open} open
          </span>
        }
      />

      <div className="mb-3 flex flex-wrap gap-2">
        {(["all", "open", "acknowledged", "routed", "resolved"] as const).map((s) => {
          const active = filter === s;
          const n = s === "all" ? items.length : counts[s];
          return (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`ease-smooth rounded-full border px-2.5 py-1 text-[11px] capitalize ${
                active
                  ? "border-[#00d4aa]/50 bg-[#00d4aa]/10 text-[#00d4aa]"
                  : "border-white/10 bg-white/[0.03] text-[#94a3b8] hover:text-[#e2e8f0]"
              }`}
            >
              {s} <span className="ml-1 text-[10px] tabular-nums opacity-70">{n}</span>
            </button>
          );
        })}
      </div>

      <div className="glass overflow-hidden rounded-[14px]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-xs">
            <thead className="border-b border-white/10 bg-white/[0.02] text-[10px] uppercase tracking-[0.12em] text-[#64748b]">
              <tr>
                <th className="px-3 py-2">Kind</th>
                <th className="px-3 py-2">Patient</th>
                <th className="px-3 py-2">Detail</th>
                <th className="px-3 py-2">Opened</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Assignee</th>
                <th className="px-3 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => {
                const Icon = KIND_META[e.kind].Icon;
                return (
                  <tr
                    key={e.id}
                    className="ease-smooth border-b border-white/5 hover:bg-white/[0.03]"
                  >
                    <td className="px-3 py-2">
                      <span className={`inline-flex items-center gap-1.5 ${KIND_META[e.kind].tone}`}>
                        <Icon className="h-3.5 w-3.5" />
                        {KIND_META[e.kind].label}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <Link
                        to="/admin/patients/$patientId"
                        params={{ patientId: e.patientId }}
                        className="text-[#e2e8f0] hover:underline"
                      >
                        {e.patientName}
                      </Link>
                      <div className="text-[10px] text-[#64748b]">{e.patientId}</div>
                    </td>
                    <td className="px-3 py-2 text-[#94a3b8]">{e.detail}</td>
                    <td className="px-3 py-2 text-[#94a3b8]">
                      {e.openedHoursAgo < 1
                        ? "<1h ago"
                        : e.openedHoursAgo < 24
                        ? `${e.openedHoursAgo}h ago`
                        : `${Math.floor(e.openedHoursAgo / 24)}d ago`}
                    </td>
                    <td className="px-3 py-2">
                      <StatusBadge status={e.status} />
                    </td>
                    <td className="px-3 py-2 text-[#e2e8f0]">{e.assignee ?? "—"}</td>
                    <td className="px-3 py-2 text-right">
                      <div className="inline-flex gap-1">
                        {e.status === "open" && (
                          <ActionButton
                            onClick={() => update(e.id, { status: "acknowledged", assignee: "Dr. Reyes" })}
                          >
                            Acknowledge
                          </ActionButton>
                        )}
                        {e.status === "acknowledged" && (
                          <ActionButton onClick={() => update(e.id, { status: "routed" })}>
                            Route
                          </ActionButton>
                        )}
                        {e.status === "routed" && (
                          <ActionButton onClick={() => update(e.id, { status: "resolved" })}>
                            Resolve
                          </ActionButton>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-3 py-8 text-center text-xs text-[#64748b]">
                    No escalations in this view.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: EscalationStatus }) {
  const TONE: Record<EscalationStatus, string> = {
    open: "text-[#ef4444] bg-[#ef4444]/10 border-[#ef4444]/30",
    acknowledged: "text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/30",
    routed: "text-[#8b5cf6] bg-[#8b5cf6]/10 border-[#8b5cf6]/30",
    resolved: "text-[#00d4aa] bg-[#00d4aa]/10 border-[#00d4aa]/30",
  };
  return (
    <span
      className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium capitalize ${TONE[status]}`}
    >
      {status}
    </span>
  );
}

function ActionButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="ease-smooth rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-[#e2e8f0] hover:border-[#00d4aa]/40 hover:bg-[#00d4aa]/10 hover:text-[#00d4aa]"
    >
      {children}
    </button>
  );
}
