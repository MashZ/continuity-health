import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/admin/AdminShell";
import { Kpi } from "@/components/admin/Kpi";
import { roster, type AccessTrack } from "@/lib/adminRoster";

export const Route = createFileRoute("/admin/reimbursement")({
  component: ReimbursementPage,
});

const TRACK_META: Record<
  Exclude<AccessTrack, "—">,
  { label: string; description: string; baseline30d: number; targetPmpm: number }
> = {
  eCKM: {
    label: "Enhanced Chronic Kidney Management",
    description: "Multi-condition with eGFR decline + cardiometabolic stack",
    baseline30d: 0.62,
    targetPmpm: 312,
  },
  CKM: {
    label: "Chronic Kidney Management",
    description: "Single-system CKD progression risk",
    baseline30d: 0.71,
    targetPmpm: 218,
  },
  MSK: {
    label: "Musculoskeletal",
    description: "Post-procedure or chronic pain trajectory",
    baseline30d: 0.78,
    targetPmpm: 184,
  },
  BH: {
    label: "Behavioral Health",
    description: "Stress, sleep, mood, and HRV-coupled BH cohort",
    baseline30d: 0.69,
    targetPmpm: 162,
  },
};

function ReimbursementPage() {
  const tracks = (Object.keys(TRACK_META) as Array<keyof typeof TRACK_META>).map((t) => {
    const members = roster.filter((r) => r.accessTrack === t);
    const oapCandidates = members.filter(
      (m) => m.bucket === "rising" || m.bucket === "watch" || m.bucket === "critical",
    ).length;
    const meta = TRACK_META[t];
    const projectedPmpm = Math.round(meta.targetPmpm * (0.85 + Math.min(0.15, oapCandidates / 80)));
    return { track: t, members, oapCandidates, projectedPmpm, ...meta };
  });

  const totalCandidates = tracks.reduce((s, t) => s + t.oapCandidates, 0);
  const totalMembers = tracks.reduce((s, t) => s + t.members.length, 0);
  const projectedRevenue = tracks.reduce((s, t) => s + t.members.length * t.projectedPmpm, 0);

  return (
    <div className="mx-auto max-w-[1400px] space-y-4">
      <PageTitle
        title="Reimbursement"
        subtitle="ACCESS Model · Outcome-Aligned Payment (OAP) candidacy and posture"
      />

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <Kpi label="Total enrolled" value={totalMembers} sub={`across ${tracks.length} ACCESS tracks`} />
        <Kpi
          label="OAP candidates"
          value={totalCandidates}
          sub="rising / watch / critical · 30-day window"
          tone="teal"
        />
        <Kpi
          label="Projected PMPM"
          value={`$${Math.round(projectedRevenue / Math.max(1, totalMembers))}`}
          sub="weighted avg across tracks"
        />
        <Kpi
          label="Projected monthly"
          value={`$${(projectedRevenue / 1000).toFixed(1)}k`}
          sub="all enrolled members"
          tone="teal"
        />
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        {tracks.map((t) => {
          const total = t.members.length || 1;
          const candidatePct = (t.oapCandidates / total) * 100;
          return (
            <div key={t.track} className="glass rounded-[14px] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                    {t.track}
                  </div>
                  <div className="mt-1 text-base font-semibold text-[#e2e8f0]">{t.label}</div>
                  <div className="mt-0.5 text-[11px] text-[#94a3b8]">{t.description}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold tabular-nums text-[#00d4aa]">
                    {t.members.length}
                  </div>
                  <div className="text-[10px] text-[#64748b]">enrolled</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
                <Stat label="OAP candidates" value={t.oapCandidates} tone="teal" />
                <Stat
                  label="30-day outcome"
                  value={`${Math.round(t.baseline30d * 100)}%`}
                  tone="muted"
                />
                <Stat label="Projected PMPM" value={`$${t.projectedPmpm}`} tone="muted" />
              </div>

              <div className="mt-3">
                <div className="mb-1 flex items-center justify-between text-[10px] text-[#94a3b8]">
                  <span>OAP candidacy</span>
                  <span className="tabular-nums">{Math.round(candidatePct)}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-[#00d4aa]"
                    style={{ width: `${candidatePct}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="glass rounded-[14px] p-4 text-[11px] leading-relaxed text-[#94a3b8]">
        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
          About ACCESS · CMS Remote Monitoring criteria
        </div>
        <p className="mt-2">
          The ACCESS Model (Advancing Care for Chronic and Episodic Specialty Services) replaces
          the legacy RPM/RTM/CCM stack with outcome-aligned payments tied to LE8 trajectory,
          signal-coverage adherence, and provider acceptance. Candidacy is computed from the
          panel-wide bucket distribution and refreshed nightly.
        </p>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string | number;
  tone: "teal" | "muted";
}) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.02] p-2">
      <div className="text-[9px] uppercase tracking-wider text-[#64748b]">{label}</div>
      <div
        className={`mt-1 text-sm font-semibold tabular-nums ${
          tone === "teal" ? "text-[#00d4aa]" : "text-[#e2e8f0]"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
