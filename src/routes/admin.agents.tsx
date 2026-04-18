import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bot, Play, RotateCcw, Eye } from "lucide-react";
import { PageTitle } from "@/components/admin/AdminShell";
import { mockAgentResponse } from "@/lib/agentResponse";

export const Route = createFileRoute("/admin/agents")({
  component: AgentsPage,
});

type AgentDef = {
  id: string;
  name: string;
  role: string;
  lastRun: string;
  health: "ok" | "warn" | "err";
  findings: string[];
};

const AGENTS: AgentDef[] = [
  {
    id: "triage",
    name: "Triage Agent",
    role: "Routes incoming signal events to the right intervention queue",
    lastRun: "2 min ago",
    health: "ok",
    findings: [
      "12 events triaged in last 5 min · 3 routed to critical queue",
      "0 unresolved ambiguities",
    ],
  },
  {
    id: "care_plan",
    name: "Care Plan Agent",
    role: "Synthesizes 30/60/90-day plans against LE8 + ACCESS posture",
    lastRun: "11 min ago",
    health: "ok",
    findings: [
      "8 plans generated · 6 accepted by clinician · 2 modified",
      "Avg confidence 0.82",
    ],
  },
  {
    id: "cohort",
    name: "Cohort Intelligence Agent",
    role: "Detects emerging cohort-level signal patterns",
    lastRun: "23 min ago",
    health: "warn",
    findings: [
      "Rising signal cluster: HRV decline in 65-84 multi-condition rowset",
      "Recommends re-running with last-7d window for confirmation",
    ],
  },
  {
    id: "data_quality",
    name: "Data Quality Agent",
    role: "Flags FHIR ingest issues and signal-source freshness",
    lastRun: "1 min ago",
    health: "warn",
    findings: [
      "4 patients with wearable last-sync > 72h",
      "1 Synthea Observation missing valueQuantity · skipped gracefully",
    ],
  },
  {
    id: "reimbursement",
    name: "Reimbursement Agent",
    role: "Maps cohort posture to ACCESS / OAP candidacy",
    lastRun: "8 min ago",
    health: "ok",
    findings: [
      "84 OAP candidates this week (eCKM 38 · CKM 24 · MSK 14 · BH 8)",
      "Outcome alignment 0.71 vs target 0.65",
    ],
  },
  {
    id: "communications",
    name: "Communications Agent",
    role: "Composes patient-facing nudges and provider summaries",
    lastRun: "4 min ago",
    health: "ok",
    findings: [
      "31 nudges drafted · 27 sent · 4 held for review",
      "Tone-check 0.94 · readability Grade 7.2",
    ],
  },
];

function AgentsPage() {
  const [running, setRunning] = useState<string | null>(null);
  const [inspect, setInspect] = useState<string | null>(null);

  function run(id: string) {
    setRunning(id);
    setTimeout(() => setRunning(null), 900);
  }

  return (
    <div className="mx-auto max-w-[1400px] space-y-4">
      <PageTitle
        title="Agents"
        subtitle="Three-agent productive tension · run / inspect / replay"
      />

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {AGENTS.map((a) => (
          <div key={a.id} className="glass flex flex-col rounded-[14px] p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-md border ${
                    a.health === "ok"
                      ? "border-[#00d4aa]/30 bg-[#00d4aa]/10 text-[#00d4aa]"
                      : a.health === "warn"
                      ? "border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#f59e0b]"
                      : "border-[#ef4444]/30 bg-[#ef4444]/10 text-[#ef4444]"
                  }`}
                >
                  <Bot className="h-3.5 w-3.5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-[#e2e8f0]">{a.name}</div>
                  <div className="text-[10px] text-[#64748b]">last run · {a.lastRun}</div>
                </div>
              </div>
              <span
                className={`rounded-full border px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider ${
                  a.health === "ok"
                    ? "border-[#00d4aa]/30 bg-[#00d4aa]/10 text-[#00d4aa]"
                    : a.health === "warn"
                    ? "border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#f59e0b]"
                    : "border-[#ef4444]/30 bg-[#ef4444]/10 text-[#ef4444]"
                }`}
              >
                {a.health}
              </span>
            </div>

            <p className="mt-2 text-[11px] leading-relaxed text-[#94a3b8]">{a.role}</p>

            <div className="mt-3 flex-1 space-y-1">
              {a.findings.map((f, i) => (
                <div
                  key={i}
                  className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1.5 text-[11px] text-[#e2e8f0]"
                >
                  {f}
                </div>
              ))}
            </div>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => run(a.id)}
                disabled={running === a.id}
                className="ease-smooth inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-[#00d4aa]/40 bg-[#00d4aa]/10 px-2.5 py-1.5 text-[11px] font-medium text-[#00d4aa] hover:bg-[#00d4aa]/20 disabled:opacity-60"
              >
                {running === a.id ? (
                  <RotateCcw className="h-3 w-3 animate-spin" />
                ) : (
                  <Play className="h-3 w-3" />
                )}
                {running === a.id ? "Running…" : "Run"}
              </button>
              <button
                onClick={() => setInspect(inspect === a.id ? null : a.id)}
                className="ease-smooth inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11px] text-[#94a3b8] hover:text-[#e2e8f0]"
              >
                <Eye className="h-3 w-3" /> Inspect
              </button>
            </div>

            {inspect === a.id && (
              <pre className="mt-2 max-h-48 overflow-auto rounded-md border border-white/10 bg-black/30 p-2 text-[10px] text-[#94a3b8]">
                {JSON.stringify(mockAgentResponse, null, 2)}
              </pre>
            )}
          </div>
        ))}
      </div>

      <div className="glass rounded-[14px] p-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
          Productive tension log · most recent decision
        </div>
        <div className="mt-3 grid gap-2 lg:grid-cols-3">
          {Object.entries(mockAgentResponse.agent_tension_log).map(([key, val]) => (
            <div key={key} className="rounded-md border border-white/10 bg-white/[0.02] p-3">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-medium uppercase tracking-wide text-[#e2e8f0]">
                  {key.replace(/_/g, " ")}
                </div>
                <div className="text-[10px] tabular-nums text-[#00d4aa]">
                  {Math.round(val.confidence * 100)}%
                </div>
              </div>
              <div className="mt-1.5 text-[11px] text-[#94a3b8]">{val.rationale}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
