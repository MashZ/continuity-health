import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/admin/AdminShell";
import { cohortData } from "@/lib/cohortData";
import { roster, bucketCounts, type Bucket } from "@/lib/adminRoster";

export const Route = createFileRoute("/admin/trends")({
  component: TrendsPage,
});

const PILLARS = ["Diet", "Activity", "Nicotine", "Sleep", "BMI", "Lipids", "Glucose", "BP"];
const SYMPTOMS = [
  { label: "Fatigue", count: 78 },
  { label: "Sleep disruption", count: 64 },
  { label: "Glycemic excursion", count: 52 },
  { label: "BP variability", count: 47 },
  { label: "Stress / HRV drop", count: 41 },
  { label: "MSK pain", count: 33 },
  { label: "Cough / dyspnea", count: 22 },
];
const INTERVENTIONS = [
  { label: "Pre-meal nudge", n: 312, deltaLE8: 4.2, adoption: 0.71 },
  { label: "Sleep wind-down", n: 248, deltaLE8: 3.6, adoption: 0.64 },
  { label: "Walk break", n: 421, deltaLE8: 2.8, adoption: 0.58 },
  { label: "Med-adherence ping", n: 187, deltaLE8: 5.1, adoption: 0.82 },
  { label: "Breathing reset", n: 156, deltaLE8: 1.9, adoption: 0.49 },
];

function TrendsPage() {
  const series = Array.from({ length: 30 }, (_, i) => {
    const day = new Date(Date.now() - (29 - i) * 86400000);
    return {
      day: `${day.getMonth() + 1}/${day.getDate()}`,
      hrv: 28 + Math.sin(i * 0.3) * 4 + (i / 30) * 2,
      sleep: 64 + Math.cos(i * 0.2) * 6,
      stress: 50 + Math.sin(i * 0.4) * 8,
    };
  });

  const leaderboard = Object.entries(bucketCounts)
    .map(([b, n]) => ({
      bucket: b as Bucket,
      n,
      avgLe8: Math.round(
        roster.filter((r) => r.bucket === b).reduce((s, r) => s + r.le8, 0) /
          Math.max(1, roster.filter((r) => r.bucket === b).length),
      ),
    }))
    .sort((a, b) => b.avgLe8 - a.avgLe8);

  return (
    <div className="mx-auto max-w-[1400px] space-y-4">
      <PageTitle
        title="Health Trends"
        subtitle="Cohort-level signal time series, pillar heatmaps, and intervention efficacy"
      />

      {/* Bucket flow + leaderboard */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Cohort leaderboard · LE8 by bucket">
          <div className="mt-2 space-y-2">
            {leaderboard.map((row) => (
              <div key={row.bucket} className="flex items-center gap-3">
                <div className="w-24 text-[11px] capitalize text-[#94a3b8]">
                  {row.bucket.replace("_", " ")}
                </div>
                <div className="flex-1">
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-[#00d4aa]"
                      style={{ width: `${row.avgLe8}%` }}
                    />
                  </div>
                </div>
                <div className="w-12 text-right text-xs tabular-nums text-[#e2e8f0]">{row.avgLe8}</div>
                <div className="w-10 text-right text-[10px] text-[#64748b]">n={row.n}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Emerging concerns · last 30d">
          <div className="mt-2 space-y-1.5">
            {SYMPTOMS.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-36 text-[11px] text-[#94a3b8]">{s.label}</div>
                <div className="flex-1">
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-[#f59e0b]"
                      style={{ width: `${(s.count / 80) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="w-10 text-right text-xs tabular-nums text-[#e2e8f0]">{s.count}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Time series */}
      <Card title="Signal time series · 30 days">
        <div className="mt-3 space-y-3">
          {(
            [
              { key: "hrv", label: "HRV (ms)", color: "#00d4aa", max: 50 },
              { key: "sleep", label: "Sleep efficiency (%)", color: "#8b5cf6", max: 100 },
              { key: "stress", label: "Stress index", color: "#f59e0b", max: 100 },
            ] as const
          ).map((s) => (
            <div key={s.key}>
              <div className="mb-1 flex items-center justify-between text-[10px] text-[#94a3b8]">
                <span>{s.label}</span>
                <span className="tabular-nums">
                  current{" "}
                  {Math.round(
                    series[series.length - 1][s.key as "hrv" | "sleep" | "stress"] * 10,
                  ) / 10}
                </span>
              </div>
              <div className="flex h-12 items-end gap-[2px]">
                {series.map((p, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${(p[s.key as "hrv" | "sleep" | "stress"] / s.max) * 100}%`,
                      background: s.color,
                      opacity: 0.85,
                    }}
                    title={`${p.day}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* LE8 pillar heatmap */}
      <Card title="LE8 pillar heatmap · panel mean by bucket">
        <div className="mt-3 overflow-x-auto">
          <div className="min-w-[700px]">
            <div
              className="grid gap-1.5"
              style={{ gridTemplateColumns: `140px repeat(${PILLARS.length}, 1fr)` }}
            >
              <div />
              {PILLARS.map((p) => (
                <div key={p} className="text-center text-[10px] text-[#94a3b8]">
                  {p}
                </div>
              ))}
              {(["critical", "rising", "watch", "stable"] as Bucket[]).map((b, ri) => (
                <PillarRow key={b} bucket={b} rowIdx={ri} />
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Intervention efficacy */}
      <Card title="Intervention efficacy · 90-day cohort">
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-xs">
            <thead className="border-b border-white/10 text-[10px] uppercase tracking-[0.12em] text-[#64748b]">
              <tr>
                <th className="px-2 py-2">Intervention</th>
                <th className="px-2 py-2 text-right">N</th>
                <th className="px-2 py-2 text-right">Δ LE8</th>
                <th className="px-2 py-2 text-right">Adoption</th>
                <th className="px-2 py-2">Adoption bar</th>
              </tr>
            </thead>
            <tbody>
              {INTERVENTIONS.map((it) => (
                <tr key={it.label} className="border-b border-white/5">
                  <td className="px-2 py-2 text-[#e2e8f0]">{it.label}</td>
                  <td className="px-2 py-2 text-right tabular-nums text-[#94a3b8]">{it.n}</td>
                  <td className="px-2 py-2 text-right tabular-nums text-[#00d4aa]">
                    +{it.deltaLE8.toFixed(1)}
                  </td>
                  <td className="px-2 py-2 text-right tabular-nums text-[#94a3b8]">
                    {Math.round(it.adoption * 100)}%
                  </td>
                  <td className="px-2 py-2">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-[#00d4aa]"
                        style={{ width: `${it.adoption * 100}%` }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="text-[10px] text-[#64748b]">
        Aggregate cohort opinion: lawful {(cohortData.aggregateOpinion.l * 100).toFixed(0)}% ·
        violation {(cohortData.aggregateOpinion.v * 100).toFixed(0)}% · uncertainty{" "}
        {(cohortData.aggregateOpinion.u * 100).toFixed(0)}% · differentially private.
      </div>
    </div>
  );
}

function PillarRow({ bucket, rowIdx }: { bucket: Bucket; rowIdx: number }) {
  const baseByBucket: Record<Bucket, number> = {
    critical: 38,
    rising: 56,
    watch: 65,
    stable: 80,
    signal_gap: 50,
  };
  const base = baseByBucket[bucket];
  return (
    <>
      <div className="pr-2 text-right text-[11px] capitalize text-[#94a3b8]">
        {bucket.replace("_", " ")}
      </div>
      {PILLARS.map((p, ci) => {
        const v = Math.max(10, Math.min(100, base + Math.sin(rowIdx + ci) * 12));
        const pct = v / 100;
        return (
          <div
            key={p}
            className="flex h-10 items-center justify-center rounded-sm border border-white/10 text-[10px] text-white/95"
            style={{ background: `rgba(0, 212, 170, ${pct * 0.5 + 0.05})` }}
            title={`${bucket} · ${p}: ${Math.round(v)}`}
          >
            {Math.round(v)}
          </div>
        );
      })}
    </>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-[14px] p-4">
      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
        {title}
      </div>
      {children}
    </div>
  );
}
