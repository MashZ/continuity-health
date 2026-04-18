import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageTitle } from "@/components/admin/AdminShell";
import { roster, escalations } from "@/lib/adminRoster";

export const Route = createFileRoute("/admin/audit")({
  component: AuditPage,
});

type AuditEntry = {
  id: string;
  ts: string; // ISO
  actor: string;
  action: string;
  target: string;
  category: "rbac" | "escalation" | "agent" | "ingest" | "consent";
  detail: string;
};

const ACTORS = ["Dr. Reyes", "Dr. Patel", "RN. Owens", "system", "Triage Agent", "Reimbursement Agent"];

function buildAudit(): AuditEntry[] {
  const out: AuditEntry[] = [];
  let n = 0;
  const now = Date.now();
  // Synthesize from escalations
  escalations.forEach((e, i) => {
    out.push({
      id: `aud-${String(++n).padStart(5, "0")}`,
      ts: new Date(now - (i + 1) * 1000 * 60 * (5 + (i % 7))).toISOString(),
      actor: e.assignee ?? "system",
      action: `escalation.${e.status}`,
      target: e.id,
      category: "escalation",
      detail: `${e.kind.replace("_", " ")} · ${e.detail.slice(0, 60)}`,
    });
  });
  // Ingest diagnostics
  for (let i = 0; i < 8; i++) {
    out.push({
      id: `aud-${String(++n).padStart(5, "0")}`,
      ts: new Date(now - i * 1000 * 60 * 17).toISOString(),
      actor: "system",
      action: "fhir.ingest",
      target: roster[i % roster.length]?.id ?? "—",
      category: "ingest",
      detail:
        i % 4 === 0
          ? "Observation missing valueQuantity · skipped"
          : "Bundle ingested OK",
    });
  }
  // RBAC + agent runs
  ["agent.run", "agent.run", "rbac.assign", "consent.withdraw", "agent.run"].forEach((a, i) => {
    out.push({
      id: `aud-${String(++n).padStart(5, "0")}`,
      ts: new Date(now - i * 1000 * 60 * 41).toISOString(),
      actor: ACTORS[i % ACTORS.length],
      action: a,
      target: a.startsWith("agent") ? "Triage Agent" : roster[i].id,
      category: a.startsWith("agent") ? "agent" : a.startsWith("rbac") ? "rbac" : "consent",
      detail:
        a === "consent.withdraw"
          ? "Patient revoked secondary-research consent · γ=0 purge queued"
          : a === "rbac.assign"
          ? "Role: clinician · scope: panel-read"
          : "Run completed in 412ms · 0 errors",
    });
  });
  return out.sort((a, b) => (a.ts < b.ts ? 1 : -1));
}

const CAT_TONE: Record<AuditEntry["category"], string> = {
  rbac: "text-[#8b5cf6] bg-[#8b5cf6]/10 border-[#8b5cf6]/30",
  escalation: "text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/30",
  agent: "text-[#00d4aa] bg-[#00d4aa]/10 border-[#00d4aa]/30",
  ingest: "text-[#94a3b8] bg-white/[0.04] border-white/15",
  consent: "text-[#ef4444] bg-[#ef4444]/10 border-[#ef4444]/30",
};

function AuditPage() {
  const log = useMemo(buildAudit, []);
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<AuditEntry["category"] | "all">("all");

  const filtered = log.filter((e) => {
    if (cat !== "all" && e.category !== cat) return false;
    if (query) {
      const q = query.toLowerCase();
      return (
        e.actor.toLowerCase().includes(q) ||
        e.action.toLowerCase().includes(q) ||
        e.target.toLowerCase().includes(q) ||
        e.detail.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const cats: (AuditEntry["category"] | "all")[] = [
    "all",
    "rbac",
    "escalation",
    "agent",
    "ingest",
    "consent",
  ];

  return (
    <div className="mx-auto max-w-[1400px]">
      <PageTitle
        title="Audit"
        subtitle="Append-only · RBAC + ingest diagnostics · tamper-evident"
        right={
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-[#94a3b8]">
            {log.length} entries
          </span>
        }
      />

      <div className="mb-3 flex flex-wrap items-center gap-2">
        {cats.map((c) => {
          const active = cat === c;
          return (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`ease-smooth rounded-full border px-2.5 py-1 text-[11px] capitalize ${
                active
                  ? "border-[#00d4aa]/50 bg-[#00d4aa]/10 text-[#00d4aa]"
                  : "border-white/10 bg-white/[0.03] text-[#94a3b8] hover:text-[#e2e8f0]"
              }`}
            >
              {c}
            </button>
          );
        })}
        <div className="relative ml-auto">
          <Search className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#64748b]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search actor, action, target…"
            className="w-72 rounded-md border border-white/10 bg-white/[0.03] py-1.5 pl-7 pr-3 text-xs text-[#e2e8f0] placeholder:text-[#64748b] focus:border-[#00d4aa]/40 focus:outline-none"
          />
        </div>
      </div>

      <div className="glass overflow-hidden rounded-[14px]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-xs">
            <thead className="border-b border-white/10 bg-white/[0.02] text-[10px] uppercase tracking-[0.12em] text-[#64748b]">
              <tr>
                <th className="px-3 py-2">Timestamp (UTC)</th>
                <th className="px-3 py-2">Category</th>
                <th className="px-3 py-2">Actor</th>
                <th className="px-3 py-2">Action</th>
                <th className="px-3 py-2">Target</th>
                <th className="px-3 py-2">Detail</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr key={e.id} className="border-b border-white/5 hover:bg-white/[0.03]">
                  <td className="px-3 py-2 font-mono text-[10px] text-[#94a3b8]">
                    {e.ts.replace("T", " ").slice(0, 19)}
                  </td>
                  <td className="px-3 py-2">
                    <span
                      className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium capitalize ${CAT_TONE[e.category]}`}
                    >
                      {e.category}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-[#e2e8f0]">{e.actor}</td>
                  <td className="px-3 py-2 font-mono text-[11px] text-[#00d4aa]">{e.action}</td>
                  <td className="px-3 py-2 font-mono text-[10px] text-[#94a3b8]">{e.target}</td>
                  <td className="px-3 py-2 text-[#94a3b8]">{e.detail}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-3 py-8 text-center text-[#64748b]">
                    No audit entries match this filter.
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
