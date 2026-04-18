import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { useMemo, useState } from "react";
import { ArrowUpDown, Search } from "lucide-react";
import { PageTitle } from "@/components/admin/AdminShell";
import { roster, bucketCounts, type Bucket } from "@/lib/adminRoster";

const bucketSchema = z
  .enum(["critical", "rising", "watch", "stable", "signal_gap"])
  .optional();

export const Route = createFileRoute("/admin/patients/")({
  validateSearch: z.object({ bucket: bucketSchema }),
  component: PatientsPage,
});

const BUCKET_TONE: Record<Bucket, string> = {
  critical: "text-[#ef4444] bg-[#ef4444]/10 border-[#ef4444]/40",
  rising: "text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/40",
  watch: "text-[#8b5cf6] bg-[#8b5cf6]/10 border-[#8b5cf6]/40",
  stable: "text-[#00d4aa] bg-[#00d4aa]/10 border-[#00d4aa]/30",
  signal_gap: "text-[#94a3b8] bg-white/[0.04] border-white/15",
};
const BUCKET_LABEL: Record<Bucket, string> = {
  critical: "Critical",
  rising: "Rising",
  watch: "Watch",
  stable: "Stable",
  signal_gap: "Signal gap",
};

type SortKey = "name" | "bucket" | "le8" | "lastSignalHoursAgo" | "accessTrack";

function PatientsPage() {
  const { bucket } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("bucket");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let rows = roster.filter((r) => (bucket ? r.bucket === bucket : true));
    if (q) rows = rows.filter((r) => r.name.toLowerCase().includes(q) || r.id.includes(q));
    rows = [...rows].sort((a, b) => {
      const av = a[sortKey] as string | number;
      const bv = b[sortKey] as string | number;
      const cmp = av < bv ? -1 : av > bv ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });
    return rows;
  }, [bucket, query, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  const buckets: (Bucket | "all")[] = ["all", "critical", "rising", "watch", "stable", "signal_gap"];

  return (
    <div className="mx-auto max-w-[1400px]">
      <PageTitle
        title="Patients"
        subtitle={`Panel-wide roster · ${roster.length} opted-in members`}
      />

      <div className="mb-3 flex flex-wrap items-center gap-2">
        {buckets.map((b) => {
          const active = b === "all" ? !bucket : bucket === b;
          const count = b === "all" ? roster.length : bucketCounts[b as Bucket];
          return (
            <button
              key={b}
              onClick={() =>
                navigate({ search: { bucket: b === "all" ? undefined : (b as Bucket) } })
              }
              className={`ease-smooth rounded-full border px-2.5 py-1 text-[11px] ${
                active
                  ? "border-[#00d4aa]/50 bg-[#00d4aa]/10 text-[#00d4aa]"
                  : "border-white/10 bg-white/[0.03] text-[#94a3b8] hover:text-[#e2e8f0]"
              }`}
            >
              {b === "all" ? "All" : BUCKET_LABEL[b as Bucket]}{" "}
              <span className="ml-1 text-[10px] tabular-nums opacity-70">{count}</span>
            </button>
          );
        })}
        <div className="relative ml-auto">
          <Search className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#64748b]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name or id…"
            className="w-56 rounded-md border border-white/10 bg-white/[0.03] py-1.5 pl-7 pr-3 text-xs text-[#e2e8f0] placeholder:text-[#64748b] focus:border-[#00d4aa]/40 focus:outline-none"
          />
        </div>
      </div>

      <div className="glass overflow-hidden rounded-[14px]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-xs">
            <thead className="border-b border-white/10 bg-white/[0.02] text-[10px] uppercase tracking-[0.12em] text-[#64748b]">
              <tr>
                <Th onClick={() => toggleSort("name")} active={sortKey === "name"} dir={sortDir}>
                  Patient
                </Th>
                <Th onClick={() => toggleSort("bucket")} active={sortKey === "bucket"} dir={sortDir}>
                  Bucket
                </Th>
                <Th onClick={() => toggleSort("le8")} active={sortKey === "le8"} dir={sortDir}>
                  LE8
                </Th>
                <Th
                  onClick={() => toggleSort("lastSignalHoursAgo")}
                  active={sortKey === "lastSignalHoursAgo"}
                  dir={sortDir}
                >
                  Last signal
                </Th>
                <Th
                  onClick={() => toggleSort("accessTrack")}
                  active={sortKey === "accessTrack"}
                  dir={sortDir}
                >
                  ACCESS track
                </Th>
                <th className="px-3 py-2">Primary concern</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr
                  key={r.id}
                  className="ease-smooth border-b border-white/5 hover:bg-white/[0.03]"
                >
                  <td className="px-3 py-2">
                    <Link
                      to="/admin/patients/$patientId"
                      params={{ patientId: r.id }}
                      className="flex flex-col"
                    >
                      <span className="font-medium text-[#e2e8f0]">
                        {r.name}
                        {r.isReal && (
                          <span className="ml-2 rounded-full border border-[#00d4aa]/40 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-[#00d4aa]">
                            FHIR
                          </span>
                        )}
                      </span>
                      <span className="text-[10px] text-[#64748b]">
                        {r.id} · {r.gender} · {r.age}y
                      </span>
                    </Link>
                  </td>
                  <td className="px-3 py-2">
                    <span
                      className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium ${BUCKET_TONE[r.bucket]}`}
                    >
                      {BUCKET_LABEL[r.bucket]}
                    </span>
                  </td>
                  <td className="px-3 py-2 tabular-nums">
                    <span
                      className={
                        r.le8 < 50
                          ? "text-[#ef4444]"
                          : r.le8 < 70
                          ? "text-[#f59e0b]"
                          : "text-[#00d4aa]"
                      }
                    >
                      {r.le8}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-[#94a3b8]">{r.lastSignal}</td>
                  <td className="px-3 py-2 text-[#e2e8f0]">{r.accessTrack}</td>
                  <td className="px-3 py-2 text-[#94a3b8]">{r.primaryConcern}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-3 py-8 text-center text-xs text-[#64748b]">
                    No patients match this filter.
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

function Th({
  children,
  onClick,
  active,
  dir,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;
  dir: "asc" | "desc";
}) {
  return (
    <th className="px-3 py-2">
      <button
        onClick={onClick}
        className={`ease-smooth inline-flex items-center gap-1 ${
          active ? "text-[#e2e8f0]" : "hover:text-[#e2e8f0]"
        }`}
      >
        {children}
        <ArrowUpDown className={`h-3 w-3 ${active ? "opacity-100" : "opacity-40"}`} />
        {active && <span className="text-[9px]">{dir === "asc" ? "▲" : "▼"}</span>}
      </button>
    </th>
  );
}
