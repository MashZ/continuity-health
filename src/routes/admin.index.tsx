import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertOctagon,
  ArrowUpRight,
  CheckCircle2,
  Eye,
  SignalZero,
} from "lucide-react";
import { PageTitle } from "@/components/admin/AdminShell";
import { Kpi } from "@/components/admin/Kpi";
import { cohortData } from "@/lib/cohortData";

export const Route = createFileRoute("/admin/")({
  component: OverviewPage,
});

type Bucket = "critical" | "rising" | "watch" | "stable" | "signal_gap";

const BUCKET_META: Record<
  Bucket,
  { label: string; tone: string; bg: string; Icon: typeof AlertOctagon }
> = {
  critical: {
    label: "Critical",
    tone: "text-[#ef4444]",
    bg: "bg-[#ef4444]/10 border-[#ef4444]/40",
    Icon: AlertOctagon,
  },
  rising: {
    label: "Rising",
    tone: "text-[#f59e0b]",
    bg: "bg-[#f59e0b]/10 border-[#f59e0b]/40",
    Icon: ArrowUpRight,
  },
  watch: {
    label: "Watch",
    tone: "text-[#8b5cf6]",
    bg: "bg-[#8b5cf6]/10 border-[#8b5cf6]/40",
    Icon: Eye,
  },
  stable: {
    label: "Stable",
    tone: "text-[#00d4aa]",
    bg: "bg-[#00d4aa]/10 border-[#00d4aa]/30",
    Icon: CheckCircle2,
  },
  signal_gap: {
    label: "Signal gap",
    tone: "text-[#94a3b8]",
    bg: "bg-white/[0.04] border-white/15",
    Icon: SignalZero,
  },
};

function deriveBuckets(total: number, opinion: { l: number; v: number; u: number }) {
  // Derive bucket counts from cohort opinion: violation→critical/rising, uncertainty→watch/gap, lawful→stable
  const critical = Math.round(total * opinion.v * 0.45);
  const rising = Math.round(total * opinion.v * 0.55);
  const watch = Math.round(total * opinion.u * 0.55);
  const signal_gap = Math.round(total * opinion.u * 0.45);
  const stable = Math.max(0, total - critical - rising - watch - signal_gap);
  return { critical, rising, watch, stable, signal_gap };
}

function OverviewPage() {
  const { totalOptedIn, eligiblePopulation, aggregateOpinion, projectedLawfulness } =
    cohortData;

  const buckets = deriveBuckets(totalOptedIn, aggregateOpinion);
  const openEscalations = buckets.critical + Math.round(buckets.rising * 0.4);
  const rxLast7 = Math.round(totalOptedIn * 0.34); // RPM/RTM/CCM candidates derived from purpose mix
  const compositeLE8 = Math.round(projectedLawfulness * 100);

  const trend = Array.from({ length: 30 }, (_, i) => {
    const day = new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000);
    const label = `${day.getMonth() + 1}/${day.getDate()}`;
    const count = Math.max(
      0,
      Math.round(
        Math.sin(i * 0.3) * 2 +
          Math.cos(i * 0.12) * 1.4 +
          (openEscalations / 30) * (i + 1) * 0.1 +
          3
      )
    );
    return { day: label, count };
  });
  const trendMax = Math.max(...trend.map((t) => t.count), 1);

  const freshnessChannels = ["HRV", "Sleep", "Resting HR", "Activity"].map(
    (label, i) => ({
      label,
      freshPct: Math.max(0.4, 0.95 - i * 0.08 - aggregateOpinion.u * 0.3),
    })
  );

  return (
    <div className="mx-auto max-w-[1400px]">
      <PageTitle
        title="Overview"
        subtitle="Tenant-wide signal, escalation, and reimbursement posture."
        right={
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-[#94a3b8]">
              {totalOptedIn} patients
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f59e0b]/40 bg-[#f59e0b]/10 px-2 py-0.5 text-[11px] text-[#f59e0b]">
              {openEscalations} open escalations
            </span>
          </div>
        }
      />

      {/* Bucket tiles */}
      <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-5">
        {(Object.keys(BUCKET_META) as Bucket[]).map((b) => (
          <BucketTile
            key={b}
            bucket={b}
            count={buckets[b]}
            total={totalOptedIn}
          />
        ))}
      </div>

      {/* KPI row */}
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Kpi
          label="Active patients"
          value={totalOptedIn}
          sub={`of ${eligiblePopulation} eligible`}
        />
        <Kpi
          label="Open escalations"
          value={openEscalations}
          sub="awaiting provider routing"
          tone={openEscalations > 0 ? "red" : "teal"}
        />
        <Kpi
          label="ACCESS · 7d candidates"
          value={rxLast7}
          sub="eCKM / CKM / MSK / BH"
          tone="teal"
        />
        <Kpi
          label="Panel composite LE8"
          value={compositeLE8}
          sub="AHA 2022 mean (0–100)"
        />
      </div>

      {/* Distribution + trend */}
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="glass rounded-[14px] p-4">
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
            Bucket distribution
          </div>
          <div className="mt-4 flex h-3 w-full overflow-hidden rounded-full border border-white/10">
            {(Object.keys(BUCKET_META) as Bucket[]).map((b) => {
              const pct = (buckets[b] / totalOptedIn) * 100;
              const color =
                b === "critical"
                  ? "#ef4444"
                  : b === "rising"
                  ? "#f59e0b"
                  : b === "watch"
                  ? "#8b5cf6"
                  : b === "stable"
                  ? "#00d4aa"
                  : "#475569";
              return (
                <div
                  key={b}
                  style={{ width: `${pct}%`, background: color }}
                  title={`${BUCKET_META[b].label}: ${buckets[b]}`}
                />
              );
            })}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] text-[#94a3b8] sm:grid-cols-3">
            {(Object.keys(BUCKET_META) as Bucket[]).map((b) => (
              <div key={b} className="flex items-center gap-2">
                <span
                  className="inline-block h-2 w-2 rounded-sm"
                  style={{
                    background:
                      b === "critical"
                        ? "#ef4444"
                        : b === "rising"
                        ? "#f59e0b"
                        : b === "watch"
                        ? "#8b5cf6"
                        : b === "stable"
                        ? "#00d4aa"
                        : "#475569",
                  }}
                />
                {BUCKET_META[b].label}
                <span className="ml-auto tabular-nums text-[#e2e8f0]">
                  {buckets[b]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-[14px] p-4">
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
            Escalation trend · 30 days
          </div>
          <div className="mt-4 flex h-24 items-end gap-[3px]">
            {trend.map((t, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-[#f59e0b]/80"
                style={{ height: `${(t.count / trendMax) * 100}%` }}
                title={`${t.day}: ${t.count}`}
              />
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-[#64748b]">
            <span>{trend[0].day}</span>
            <span>peak {trendMax}</span>
            <span>{trend[trend.length - 1].day}</span>
          </div>
        </div>
      </div>

      {/* LE8 heatmap (reuses jurisdiction × pillar idea from cohortData) */}
      <div className="mt-4 glass rounded-[14px] p-4">
        <div className="flex items-end justify-between">
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
            Cohort uncertainty heatmap · {cohortData.uncertaintyHeatmap.cols.length} dimensions
          </div>
          <div className="text-[10px] text-[#64748b]">
            n = {totalOptedIn} · differentially private
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <div className="min-w-[640px]">
            <div
              className="grid gap-1.5"
              style={{
                gridTemplateColumns: `200px repeat(${cohortData.uncertaintyHeatmap.cols.length}, 1fr)`,
              }}
            >
              <div />
              {cohortData.uncertaintyHeatmap.cols.map((c) => (
                <div key={c} className="text-center text-[10px] text-[#94a3b8]">
                  {c}
                </div>
              ))}
              {cohortData.uncertaintyHeatmap.rows.map((row, ri) => (
                <>
                  <div
                    key={`row-${ri}`}
                    className="pr-2 text-right text-[11px] text-[#94a3b8]"
                  >
                    {row.label}
                  </div>
                  {cohortData.uncertaintyHeatmap.cells[ri].map((c, ci) => {
                    const intensity = Math.round((1 - c.u) * 80) + 20;
                    return (
                      <div
                        key={`c-${ri}-${ci}`}
                        className="ease-smooth flex h-12 items-center justify-center rounded-sm border border-white/10 text-[10px] text-white/95"
                        style={{
                          background: `rgba(0, 212, 170, ${intensity / 200})`,
                        }}
                        title={`l=${c.l} v=${c.v} u=${c.u}`}
                      >
                        {Math.round(c.l * 100)}
                      </div>
                    );
                  })}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Freshness strip */}
      <div className="mt-4 glass rounded-[14px] p-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
          Signal freshness · last hour buckets
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {freshnessChannels.map((ch) => (
            <div key={ch.label} className="rounded-md border border-white/10 bg-white/[0.02] p-3">
              <div className="flex items-center justify-between">
                <div className="text-[11px] text-[#e2e8f0]">{ch.label}</div>
                <div className="text-[11px] tabular-nums text-[#00d4aa]">
                  {Math.round(ch.freshPct * 100)}%
                </div>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full bg-[#00d4aa]"
                  style={{ width: `${ch.freshPct * 100}%` }}
                />
              </div>
              <div className="mt-1 text-[10px] text-[#64748b]">fresh in window</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BucketTile({
  bucket,
  count,
  total,
}: {
  bucket: Bucket;
  count: number;
  total: number;
}) {
  const meta = BUCKET_META[bucket];
  const Icon = meta.Icon;
  const pct = total ? Math.round((count / total) * 100) : 0;
  return (
    <Link
      to="/admin/patients"
      search={{ bucket }}
      className="glass ease-smooth group rounded-[14px] p-4 hover:border-white/20 hover:bg-white/[0.06]"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
          {meta.label}
        </div>
        <span
          className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${meta.bg} ${meta.tone}`}
        >
          <Icon className="h-3 w-3" />
        </span>
      </div>
      <div className="mt-2 text-3xl font-semibold tabular-nums text-[#e2e8f0]">
        {count}
      </div>
      <div className="mt-1 text-[11px] text-[#64748b]">
        {pct}% of panel · open filter
      </div>
    </Link>
  );
}
