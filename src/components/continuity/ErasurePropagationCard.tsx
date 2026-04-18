import { useState, useRef } from "react";
import { toast } from "sonner";
import { cohortData } from "@/lib/cohortData";

type NodePos = { id: string; label: string; e: number; x: number; y: number };

const NODE_W = 140;
const NODE_H = 48;
const SVG_W = 720;
const SVG_H = 280;

const COLUMNS = ["Signal", "Intelligence", "Action", "Operating Center"];
const COL_X = [20, 210, 400, 580];

// Hand-positioned per spec
const POSITIONS: Record<string, { col: number; row: "top" | "center" | "bottom" }> = {
  D1: { col: 0, row: "top" },
  D2: { col: 0, row: "bottom" },
  D3: { col: 1, row: "center" },
  D4: { col: 2, row: "top" },
  D5: { col: 2, row: "bottom" },
  D6: { col: 3, row: "center" },
};

const ROW_Y = { top: 70, center: 116, bottom: 162 };

function colorForE(e: number): { fill: string; stroke: string } {
  if (e >= 0.95) return { fill: "rgba(0,212,170,0.22)", stroke: "#00d4aa" };
  if (e >= 0.85) return { fill: "rgba(245,158,11,0.22)", stroke: "#f59e0b" };
  return { fill: "rgba(239,68,68,0.22)", stroke: "#ef4444" };
}

export function ErasurePropagationCard() {
  const { erasureGraph } = cohortData;
  const { nodes, edges, compositeErasure, contaminationRisk } = erasureGraph;

  const positioned: NodePos[] = nodes.map((n) => {
    const p = POSITIONS[n.id];
    return {
      id: n.id,
      label: n.label,
      e: n.e,
      x: COL_X[p.col],
      y: ROW_Y[p.row],
    };
  });

  const byId = Object.fromEntries(positioned.map((n) => [n.id, n]));

  const [pulsedNodes, setPulsedNodes] = useState<Set<string>>(new Set());
  const [pulsedEdges, setPulsedEdges] = useState<Set<string>>(new Set());
  const [simulating, setSimulating] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const handleSimulate = () => {
    if (simulating) return;
    setSimulating(true);
    setPulsedNodes(new Set());
    setPulsedEdges(new Set());

    // Topological cascade: D1(0) → D2(1) → D3(2) → {D4,D6}(3) → D5(4)
    const order: { node: string; edgeFrom?: string; t: number }[] = [
      { node: "D1", t: 0 },
      { node: "D2", edgeFrom: "D1", t: 270 },
      { node: "D3", edgeFrom: "D2", t: 540 },
      { node: "D4", edgeFrom: "D3", t: 810 },
      { node: "D6", edgeFrom: "D3", t: 810 },
      { node: "D5", edgeFrom: "D4", t: 1080 },
    ];

    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    order.forEach(({ node, edgeFrom, t }) => {
      const t1 = setTimeout(() => {
        if (edgeFrom) {
          setPulsedEdges((prev) => {
            const next = new Set(prev);
            next.add(`${edgeFrom}->${node}`);
            return next;
          });
        }
        setPulsedNodes((prev) => {
          const next = new Set(prev);
          next.add(node);
          return next;
        });
        const t2 = setTimeout(() => {
          setPulsedNodes((prev) => {
            const next = new Set(prev);
            next.delete(node);
            return next;
          });
        }, 250);
        timeoutsRef.current.push(t2);
      }, t);
      timeoutsRef.current.push(t1);
    });

    const tEnd = setTimeout(() => {
      setSimulating(false);
      setPulsedEdges(new Set());
      toast(
        `Erasure request propagated. |S| = ${nodes.length}. e_R = ${(compositeErasure * 100).toFixed(1)}%. Provenance chain logged to Art. 30 audit trail.`,
        { duration: 4000 },
      );
    }, 1600);
    timeoutsRef.current.push(tEnd);
  };

  return (
    <div className="glass ease-smooth relative overflow-hidden rounded-2xl p-5 hover:border-white/20">
      <h2 className="text-sm font-semibold tracking-tight text-[#e2e8f0]">
        Erasure Propagation · Art. 17 · DAG-scoped J_⊓ with exponential degradation
      </h2>

      <div className="mt-4 flex flex-col gap-5 lg:flex-row">
        {/* LEFT — DAG */}
        <div className="lg:w-3/5">
          <div className="overflow-x-auto">
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="w-full"
              style={{ minWidth: 560, height: SVG_H }}
            >
              <defs>
                <marker
                  id="arrowhead"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.4)" />
                </marker>
                <marker
                  id="arrowhead-pulse"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
                </marker>
              </defs>

              {/* Column labels */}
              {COLUMNS.map((c, i) => (
                <text
                  key={c}
                  x={COL_X[i] + NODE_W / 2}
                  y={28}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#64748b"
                  style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  {c}
                </text>
              ))}

              {/* Edges */}
              {edges.map((edge) => {
                const from = byId[edge.from];
                const to = byId[edge.to];
                if (!from || !to) return null;
                const x1 = from.x + NODE_W;
                const y1 = from.y + NODE_H / 2;
                const x2 = to.x;
                const y2 = to.y + NODE_H / 2;
                const key = `${edge.from}->${edge.to}`;
                const isPulse = pulsedEdges.has(key);
                return (
                  <line
                    key={key}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={isPulse ? "#ef4444" : "rgba(255,255,255,0.3)"}
                    strokeWidth={isPulse ? 2.5 : 1.5}
                    markerEnd={isPulse ? "url(#arrowhead-pulse)" : "url(#arrowhead)"}
                    style={{ transition: "stroke 200ms ease, stroke-width 200ms ease" }}
                  />
                );
              })}

              {/* Nodes */}
              {positioned.map((n) => {
                const c = colorForE(n.e);
                const isPulse = pulsedNodes.has(n.id);
                return (
                  <g key={n.id} style={{ transition: "opacity 200ms ease" }} opacity={isPulse ? 0.8 : 1}>
                    <rect
                      x={n.x}
                      y={n.y}
                      width={NODE_W}
                      height={NODE_H}
                      rx={8}
                      ry={8}
                      fill={isPulse ? "rgba(239,68,68,0.35)" : c.fill}
                      stroke={isPulse ? "#ef4444" : c.stroke}
                      strokeWidth={1}
                      style={{ transition: "fill 200ms ease, stroke 200ms ease" }}
                    />
                    <text
                      x={n.x + 10}
                      y={n.y + 19}
                      fontSize="12"
                      fill="#e2e8f0"
                      fontFamily="Inter, system-ui, sans-serif"
                    >
                      {n.label}
                    </text>
                    <text
                      x={n.x + 10}
                      y={n.y + 36}
                      fontSize="11"
                      fill="#94a3b8"
                      fontFamily="ui-monospace, SFMono-Regular, monospace"
                    >
                      e = {n.e.toFixed(2)}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* RIGHT — Composite panel */}
        <div className="flex flex-col gap-2.5 lg:w-2/5">
          <MiniStat
            label="Scope |S|"
            value={`${nodes.length} nodes`}
            valueColor="#00d4aa"
          />
          <MiniStat
            label="Composite erasure · e_R = ∏ eᵢ"
            value={`${(compositeErasure * 100).toFixed(1)}%`}
            valueColor="#00d4aa"
            caption="Theorem 5(a): exponential degradation. With uniform p=0.90 and |S|=6, Table 1 predicts ≈53%."
          />
          <MiniStat
            label="Contamination risk · r_deep"
            value={`${Math.round(contaminationRisk.deep * 100)}%`}
            valueColor="#f59e0b"
            caption="Proposition 1: monotonically non-decreasing in ancestor count. Deeper nodes face higher risk."
          />
          <button
            onClick={handleSimulate}
            disabled={simulating}
            className="ease-smooth mt-1 w-full rounded-md bg-[#00d4aa] px-3 py-2.5 text-[12px] font-semibold text-[#0d1117] hover:bg-[#00d4aa]/90 disabled:opacity-60"
          >
            ▶ Simulate Art. 17 erasure request
          </button>
        </div>
      </div>
    </div>
  );
}

function MiniStat({
  label,
  value,
  valueColor,
  caption,
}: {
  label: string;
  value: string;
  valueColor: string;
  caption?: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
      <div className="text-[11px] uppercase tracking-wider text-[#94a3b8]">{label}</div>
      <div className="mt-1 text-2xl font-semibold" style={{ color: valueColor }}>
        {value}
      </div>
      {caption && <div className="mt-1 text-[10px] leading-snug text-[#64748b]">{caption}</div>}
    </div>
  );
}
