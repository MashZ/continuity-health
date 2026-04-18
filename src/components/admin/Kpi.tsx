type Tone = "teal" | "amber" | "red" | "muted";

const TONE: Record<Tone, string> = {
  teal: "text-[#00d4aa]",
  amber: "text-[#f59e0b]",
  red: "text-[#ef4444]",
  muted: "text-[#e2e8f0]",
};

export function Kpi({
  label,
  value,
  sub,
  tone = "muted",
}: {
  label: string;
  value: string | number;
  sub?: string;
  tone?: Tone;
}) {
  return (
    <div className="glass rounded-[14px] p-4">
      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
        {label}
      </div>
      <div className={`mt-2 text-3xl font-semibold tabular-nums ${TONE[tone]}`}>
        {value}
      </div>
      {sub && <div className="mt-1 text-[11px] text-[#94a3b8]">{sub}</div>}
    </div>
  );
}
