import { flaggedConditions, realVitals, patientProfile } from "@/lib/patientData";

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
      <div className="text-[10px] uppercase tracking-wider text-[#64748b]">{label}</div>
      <div className="mt-0.5 text-sm font-semibold text-[#e2e8f0]">{value}</div>
      {sub && <div className="text-[10px] text-[#64748b]">{sub}</div>}
    </div>
  );
}

export function ConditionsCard() {
  const { bmi, a1c, fev1Fvc, bp } = realVitals;
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">
            Active conditions · clinical record
          </div>
          <div className="mt-1 text-[11px] text-[#64748b]">
            {patientProfile.given} {patientProfile.family} · {patientProfile.gender} · age{" "}
            {patientProfile.age} · derived from FHIR R4 bundle
          </div>
        </div>
        <span className="rounded-full border border-[#00d4aa]/30 bg-[#00d4aa]/5 px-2 py-0.5 text-[10px] font-medium text-[#00d4aa]">
          REAL · FHIR
        </span>
      </div>

      <ul className="mt-4 space-y-2">
        {flaggedConditions.map((c) => (
          <li
            key={c.display}
            className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#f59e0b]" />
              <span className="text-sm text-[#e2e8f0]">{c.display}</span>
            </div>
            <span className="text-[11px] text-[#64748b]">onset {c.onset}</span>
          </li>
        ))}
        {flaggedConditions.length === 0 && (
          <li className="text-xs italic text-[#64748b]">No flagged active conditions.</li>
        )}
      </ul>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {a1c && (
          <Stat
            label="HbA1c"
            value={`${a1c.value}%`}
            sub={`Observation · ${a1c.date}`}
          />
        )}
        {bp && (
          <Stat
            label="Blood pressure"
            value={`${bp.systolic}/${bp.diastolic}`}
            sub={`mmHg · ${bp.date}`}
          />
        )}
        {bmi && (
          <Stat
            label="BMI"
            value={`${bmi.value}`}
            sub={`kg/m² · ${bmi.date}`}
          />
        )}
        {fev1Fvc && (
          <Stat
            label="FEV1/FVC"
            value={`${fev1Fvc.value}%`}
            sub={`Spirometry · ${fev1Fvc.date}`}
          />
        )}
      </div>
    </div>
  );
}
