import { cohortData } from "@/lib/cohortData";

type Cell = { l: number; v: number; u: number };
type CellClass = "absent evidence" | "well-evidenced compliance" | "conflicting evidence" | "nominal";

function classify(c: Cell): CellClass {
  if (c.u >= 0.4) return "absent evidence";
  if (c.l >= 0.6 && c.v <= 0.15) return "well-evidenced compliance";
  if (c.l >= 0.35 && c.v >= 0.25) return "conflicting evidence";
  return "nominal";
}

function pct2(x: number) {
  return Math.round(x * 100).toString().padStart(2, "0");
}

function CellTile({
  cell,
  rowLabel,
  rowN,
  colLabel,
}: {
  cell: Cell;
  rowLabel: string;
  rowN: number;
  colLabel: string;
}) {
  const cls = classify(cell);
  const tooltip = `${cls} · ω = (${cell.l.toFixed(2)}, ${cell.v.toFixed(2)}, ${cell.u.toFixed(2)}) · row: ${rowLabel} · col: ${colLabel} · n = ${rowN}`;

  let background: string | undefined;
  let isSplit = false;
  if (cls === "absent evidence") {
    background = "rgba(71, 85, 105, 0.6)";
  } else if (cls === "well-evidenced compliance") {
    const op = 0.25 + 0.5 * cell.l;
    background = `rgba(0, 212, 170, ${op})`;
  } else if (cls === "conflicting evidence") {
    isSplit = true;
  } else {
    background = "rgba(0, 212, 170, 0.35)";
  }

  return (
    <div
      title={tooltip}
      className="ease-smooth relative flex h-[68px] items-center justify-center overflow-hidden rounded-md border border-white/10"
      style={!isSplit ? { background } : undefined}
    >
      {isSplit && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,212,170,0.5) 0%, rgba(0,212,170,0.5) 49.7%, rgba(255,255,255,0.15) 49.7%, rgba(255,255,255,0.15) 50.3%, rgba(245,158,11,0.5) 50.3%, rgba(245,158,11,0.5) 100%)",
            }}
          />
        </>
      )}
      <div className="relative z-10 text-center text-[10px] leading-tight text-white/95">
        <div>l={pct2(cell.l)}</div>
        <div>v={pct2(cell.v)}</div>
        <div>u={pct2(cell.u)}</div>
      </div>
    </div>
  );
}

export function UncertaintyHeatmapCard() {
  const { rows, cols, cells } = cohortData.uncertaintyHeatmap;

  return (
    <div className="glass ease-smooth relative overflow-hidden rounded-2xl p-5 hover:border-white/20">
      <h2 className="text-sm font-semibold tracking-tight text-[#e2e8f0]">
        Epistemic Uncertainty Heatmap · what binary compliance cannot represent
      </h2>

      <div className="mt-4 overflow-x-auto">
        <div className="min-w-[640px]">
          {/* Header row */}
          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: "200px repeat(5, 1fr)" }}
          >
            <div />
            {cols.map((c) => (
              <div key={c} className="text-center text-[11px] text-[#94a3b8]">
                {c}
              </div>
            ))}
          </div>

          {/* Rows */}
          <div className="mt-2 flex flex-col gap-2">
            {rows.map((row, ri) => (
              <div
                key={row.label}
                className="grid items-center gap-2"
                style={{ gridTemplateColumns: "200px repeat(5, 1fr)" }}
              >
                <div className="pr-2 text-right text-[11px] text-[#94a3b8]">
                  {row.label} (n={row.n})
                </div>
                {cols.map((col, ci) => (
                  <CellTile
                    key={col}
                    cell={cells[ri][ci]}
                    rowLabel={row.label}
                    rowN={row.n}
                    colLabel={col}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-[#94a3b8]">
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-sm"
            style={{ background: "rgba(0,212,170,0.6)" }}
          />
          well-evidenced compliance (l high, u low)
        </span>
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-sm"
            style={{ background: "rgba(71,85,105,0.6)" }}
          />
          absent evidence (u high)
        </span>
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,212,170,0.5) 0%, rgba(0,212,170,0.5) 49.7%, rgba(255,255,255,0.15) 49.7%, rgba(255,255,255,0.15) 50.3%, rgba(245,158,11,0.5) 50.3%, rgba(245,158,11,0.5) 100%)",
            }}
          />
          conflicting evidence (l, v both moderate)
        </span>
      </div>

      <p className="mt-3 text-[11px] italic leading-relaxed text-[#64748b]">
        Binary compliance collapses these three epistemic states into one bit. The compliance
        algebra (Syed et al. 2026) distinguishes them — enabling different regulatory responses:
        proceed on teal, gather more evidence on gray, investigate conflict on split-fill cells.
        This is the operator-visible payoff of Subjective Logic over boolean compliance.
      </p>
    </div>
  );
}
