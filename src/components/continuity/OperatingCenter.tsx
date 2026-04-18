import { cohortData } from "@/lib/cohortData";
import { ConsentLifecycleCard } from "./ConsentLifecycleCard";
import { ErasurePropagationCard } from "./ErasurePropagationCard";

function GlassCard({
  children,
  accentColor,
}: {
  children: React.ReactNode;
  accentColor: string;
}) {
  return (
    <div className="glass ease-smooth relative overflow-hidden rounded-2xl p-4 hover:border-white/20">
      <div
        className="absolute inset-x-0 top-0 h-0.5"
        style={{ background: accentColor }}
      />
      {children}
    </div>
  );
}

function StatCard({
  label,
  value,
  sublabel,
  accentColor,
  footer,
}: {
  label: string;
  value: string;
  sublabel: string;
  accentColor: string;
  footer?: React.ReactNode;
}) {
  return (
    <GlassCard accentColor={accentColor}>
      <div className="text-xs font-medium uppercase tracking-wider text-[#94a3b8]">{label}</div>
      <div className="mt-2 text-3xl font-semibold text-[#e2e8f0]">{value}</div>
      <div className="mt-1 text-[11px] text-[#64748b]">{sublabel}</div>
      {footer && <div className="mt-1 text-[11px] text-[#64748b]">{footer}</div>}
    </GlassCard>
  );
}

export function OperatingCenter() {
  const { totalOptedIn, eligiblePopulation, aggregateOpinion, projectedLawfulness } = cohortData;
  const pct = ((totalOptedIn / eligiblePopulation) * 100).toFixed(1);
  const l = aggregateOpinion.l;
  const v = aggregateOpinion.v;
  const u = aggregateOpinion.u;
  const a = aggregateOpinion.a;

  const lPct = (l * 100).toFixed(0);
  const vPct = (v * 100).toFixed(0);
  const uPct = (u * 100).toFixed(0);
  const projectedPct = (projectedLawfulness * 100).toFixed(1);

  return (
    <div className="space-y-4">
      {/* Header strip */}
      <div className="space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-[22px] font-bold leading-tight text-[#e2e8f0]">
              Continuity Operating Center
            </h1>
            <p className="mt-0.5 text-xs text-[#94a3b8]">
              HealthEngine Enterprise · de-identified cohort aggregate · no PII
            </p>
          </div>
          <div className="text-[11px] text-[#94a3b8] sm:text-right">
            Cohort N = {totalOptedIn} of {eligiblePopulation} eligible ({pct}%) · Differentially
            private · Small cells suppressed
          </div>
        </div>

        <div className="ease-smooth w-full rounded-md border border-[#f59e0b]/30 bg-[#f59e0b]/5 px-3 py-2 text-[11px] text-[#f59e0b]">
          ℹ Opt-in required. Users with &apos;Cohort share · OFF&apos; in the Patient view do not
          contribute to this aggregate. Cell counts &lt;10 are suppressed.
        </div>
      </div>

      {/* COC-1 — Compliance Opinion Ribbon */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Lawfulness (l)"
            value={`${lPct}%`}
            sublabel="Lawfulness belief · l"
            accentColor="#00d4aa"
          />
          <StatCard
            label="Violation (v)"
            value={`${vPct}%`}
            sublabel="Violation belief · v"
            accentColor="#f59e0b"
          />
          <StatCard
            label="Uncertainty (u)"
            value={`${uPct}%`}
            sublabel="Uncertainty · u"
            accentColor="#64748b"
          />
          <StatCard
            label="Projected P(ω)"
            value={`${projectedPct}%`}
            sublabel="Projected lawfulness · P(ω) = l + a·u"
            accentColor="#00d4aa"
            footer={`Base rate a = ${a.toFixed(2)} (strict regime, GDPR-aligned)`}
          />
        </div>

        {/* Stacked bar */}
        <StackedOpinionBar l={l} v={v} u={u} />

        <p className="text-[11px] leading-relaxed text-[#64748b]">
          Compliance opinion ω = (l, v, u, a) per Jøsang&apos;s Subjective Logic. Constraint l + v
          + u = 1. Unlike binary compliance, the opinion distinguishes well-evidenced compliance
          (l high, u low) from absence of evidence (u high) from conflicting evidence (l and v
          both moderate). Compliance Algebra: Syed, Silaghi, Abujar, Alssadi (2026).
        </p>
      </div>

      <ConsentLifecycleCard />
      <ErasurePropagationCard />
    </div>
  );
}

function StackedOpinionBar({ l, v, u }: { l: number; v: number; u: number }) {
  const segments = [
    { key: "l", pct: l * 100, color: "#00d4aa", label: `Lawful ${(l * 100).toFixed(0)}%` },
    { key: "v", pct: v * 100, color: "#f59e0b", label: `Violation ${(v * 100).toFixed(0)}%` },
    { key: "u", pct: u * 100, color: "#475569", label: `Uncertain ${(u * 100).toFixed(0)}%` },
  ];
  return (
    <div>
      <div className="flex h-6 w-full overflow-hidden rounded-md border border-white/10 bg-white/5">
        {segments.map((s) => (
          <div
            key={s.key}
            style={{ width: `${s.pct}%`, background: s.color }}
            className="ease-smooth flex items-center justify-center overflow-hidden"
            title={s.label}
          >
            {s.pct >= 12 && (
              <span className="truncate px-2 text-[10px] font-medium text-white/95">
                {s.label}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-[#64748b] sm:hidden">
        {segments.map((s) => (
          <span key={s.key} className="inline-flex items-center gap-1">
            <span
              className="inline-block h-2 w-2 rounded-sm"
              style={{ background: s.color }}
            />
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}
