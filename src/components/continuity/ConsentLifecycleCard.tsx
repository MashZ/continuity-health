import { cohortData } from "@/lib/cohortData";

function OpinionMiniBar({ l, v, u }: { l: number; v: number; u: number }) {
  return (
    <div
      className="flex h-2.5 overflow-hidden rounded-sm bg-white/5"
      style={{ width: 120 }}
      title={`l=${l} · v=${v} · u=${u}`}
    >
      <div style={{ width: `${l * 100}%`, background: "#00d4aa" }} />
      <div style={{ width: `${v * 100}%`, background: "#f59e0b" }} />
      <div style={{ width: `${u * 100}%`, background: "#475569" }} />
    </div>
  );
}

export function ConsentLifecycleCard() {
  const { art7Conditions, purposes, withdrawalsLast30d } = cohortData.consent;
  const totalWithdrawals = withdrawalsLast30d.reduce((a, b) => a + b, 0);
  const maxW = Math.max(...withdrawalsLast30d, 1);

  return (
    <div className="glass ease-smooth relative overflow-hidden rounded-2xl p-5 hover:border-white/20">
      <h2 className="text-sm font-semibold tracking-tight text-[#e2e8f0]">
        Consent Lifecycle · Art. 7 six-way meet × purpose × withdrawal
      </h2>

      {/* Section 1 — Art. 7 Conditions */}
      <div className="mt-4 space-y-2.5">
        {art7Conditions.map((c) => (
          <div key={c.condition} className="flex items-center gap-3">
            <div className="w-[40%] text-[12px] text-[#e2e8f0]">{c.condition}</div>
            <div className="flex w-[30%] justify-center">
              <OpinionMiniBar l={c.opinion.l} v={c.opinion.v} u={c.opinion.u} />
            </div>
            <div className="w-[30%] text-right">
              <div className="text-base font-semibold text-[#00d4aa]">
                {Math.round(c.cohortPct * 100)}%
              </div>
              <div className="text-[10px] text-[#64748b]">
                l={c.opinion.l.toFixed(2)} · v={c.opinion.v.toFixed(2)} · u={c.opinion.u.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-[11px] italic leading-relaxed text-[#64748b]">
        Six-way J_⊓ composite consent validity: ω_c = ({cohortData.consent.sixWayMeet.l.toFixed(2)},{" "}
        {cohortData.consent.sixWayMeet.v.toFixed(2)}, {cohortData.consent.sixWayMeet.u.toFixed(2)},{" "}
        {cohortData.consent.sixWayMeet.a.toFixed(2)}). The violation belief dominates (
        {Math.round(cohortData.consent.sixWayMeet.v * 100)}%) because &apos;Demonstrable&apos; is
        the weakest link — audit logs. Theorem 1(c): composite lawfulness ≤ min of components.
      </p>

      <div className="my-4 h-px bg-white/10" />

      {/* Section 2 — Purpose Breakdown */}
      <div className="space-y-1.5">
        {purposes.map((p, i) => {
          const isSecondary = i === 3;
          const fill = p.consentedPct * 100;
          const color = isSecondary ? "#f59e0b" : "#00d4aa";
          const opacity = isSecondary ? 0.6 : 1;
          const pctLabel = `${Math.round(fill)}%`;
          const inside = fill >= 18;
          return (
            <div key={p.name} className="flex items-center gap-3">
              <div className="w-[34%] text-[12px] text-[#e2e8f0]">{p.name}</div>
              <div className="relative h-3 flex-1 overflow-hidden rounded-sm bg-white/5">
                <div
                  className="ease-smooth h-full"
                  style={{ width: `${fill}%`, background: color, opacity }}
                />
                {inside ? (
                  <span className="absolute inset-y-0 left-2 flex items-center text-[10px] font-medium text-white/95">
                    {pctLabel}
                  </span>
                ) : (
                  <span
                    className="absolute inset-y-0 flex items-center text-[10px] font-medium text-[#94a3b8]"
                    style={{ left: `calc(${fill}% + 6px)` }}
                  >
                    {pctLabel}
                  </span>
                )}
              </div>
              <div className="w-[28%] text-right font-mono text-[11px] text-[#64748b]">
                {p.reimbursementTag ?? ""}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-[11px] italic leading-relaxed text-[#64748b]">
        Purpose-indexed consent per Art. 6(1)(a) and Recital 32. Withdrawal for one purpose does
        not affect others — Theorem 3(c) non-interference. CPT codes identify the reimbursement
        pathway the consent unlocks.
      </p>

      <div className="my-4 h-px bg-white/10" />

      {/* Section 3 — Withdrawal Timeline */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="text-[12px] font-medium text-[#e2e8f0]">
          Withdrawal events · last 30 days · total = {totalWithdrawals}
        </div>
        <div className="max-w-md text-[10px] italic text-[#64748b] sm:text-right">
          Withdrawal Override fires: proposition replacement per Art. 7(3). No fusion, no discount
          — the question changes from &apos;was consent valid?&apos; to &apos;has processing
          ceased?&apos;
        </div>
      </div>
      <div className="mt-2 flex h-10 items-end gap-[2px]">
        {withdrawalsLast30d.map((n, i) => {
          const h = (n / maxW) * 40;
          return (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${Math.max(h, 1)}px`,
                background: "#f59e0b",
                opacity: n === 0 ? 0.2 : 0.85,
              }}
              title={`Day ${i + 1}: ${n}`}
            />
          );
        })}
      </div>
    </div>
  );
}
