import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Activity, ArrowLeft, Bot, FileText, HeartPulse, Moon, Footprints } from "lucide-react";
import { getPatient } from "@/lib/adminRoster";
import { realVitals, wearableSignals, flaggedConditions, patientProfile } from "@/lib/patientData";
import { mockAgentResponse } from "@/lib/agentResponse";

export const Route = createFileRoute("/admin/patients/$patientId")({
  loader: ({ params }) => {
    const patient = getPatient(params.patientId);
    if (!patient) throw notFound();
    return { patient };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-[800px] py-16 text-center">
      <h1 className="text-xl font-semibold text-[#e2e8f0]">Patient not found</h1>
      <p className="mt-2 text-sm text-[#94a3b8]">No record matches this id.</p>
      <Link to="/admin/patients" className="mt-4 inline-block text-xs text-[#00d4aa] hover:underline">
        ← Back to roster
      </Link>
    </div>
  ),
  component: Patient360Page,
});

function Patient360Page() {
  const { patient } = Route.useLoaderData();
  const isReal = patient.isReal === true;

  return (
    <div className="mx-auto max-w-[1400px] space-y-4">
      <Link
        to="/admin/patients"
        className="ease-smooth inline-flex items-center gap-1 text-[11px] text-[#94a3b8] hover:text-[#e2e8f0]"
      >
        <ArrowLeft className="h-3 w-3" /> Back to roster
      </Link>

      {/* Personal data card */}
      <div className="glass rounded-[14px] p-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#e2e8f0]">
              {patient.name}
            </h1>
            <p className="mt-1 text-xs text-[#94a3b8]">
              {patient.id} · {patient.gender} · {patient.age}y · ACCESS track:{" "}
              <span className="text-[#e2e8f0]">{patient.accessTrack}</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {isReal && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00d4aa]/40 bg-[#00d4aa]/10 px-2 py-0.5 text-[10px] font-medium text-[#00d4aa]">
                FHIR R4 · Synthea
              </span>
            )}
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-[#94a3b8]">
              Last signal: {patient.lastSignal}
            </span>
          </div>
        </div>
      </div>

      {/* LE8 card */}
      <div className="glass rounded-[14px] p-5">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
            LE8 composite (AHA 2022)
          </div>
          <div className="text-[10px] text-[#64748b]">Mean of 8 pillars · 0–100</div>
        </div>
        <div className="mt-3 flex items-end gap-4">
          <div
            className={`text-5xl font-semibold tabular-nums ${
              patient.le8 < 50
                ? "text-[#ef4444]"
                : patient.le8 < 70
                ? "text-[#f59e0b]"
                : "text-[#00d4aa]"
            }`}
          >
            {patient.le8}
          </div>
          <div className="mb-1 text-xs text-[#94a3b8]">
            {patient.le8 < 50
              ? "High cardiovascular risk · clinical attention"
              : patient.le8 < 70
              ? "Moderate · intervention indicated"
              : "Within target · maintenance"}
          </div>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full"
            style={{
              width: `${patient.le8}%`,
              background:
                patient.le8 < 50 ? "#ef4444" : patient.le8 < 70 ? "#f59e0b" : "#00d4aa",
            }}
          />
        </div>
      </div>

      {/* Signal strip */}
      <div>
        <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
          Signal strip {isReal && <span className="text-[#64748b]">· wearable layer (simulated) + FHIR vitals</span>}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <SignalTile
            Icon={HeartPulse}
            label="HRV"
            value={isReal ? `${wearableSignals.hrv.current} ${wearableSignals.hrv.unit}` : `${patient.hrv} ms`}
            sub={isReal ? `baseline ${wearableSignals.hrv.baseline30d} ms` : "30-day baseline"}
            tone={patient.hrv < 25 ? "red" : patient.hrv < 32 ? "amber" : "teal"}
          />
          <SignalTile
            Icon={Activity}
            label="Resting HR"
            value={isReal ? `${wearableSignals.restingHR.current} bpm` : `${patient.restingHR} bpm`}
            sub={isReal ? `baseline ${wearableSignals.restingHR.baseline30d} bpm` : "7-day mean"}
            tone={patient.restingHR > 85 ? "red" : patient.restingHR > 75 ? "amber" : "teal"}
          />
          <SignalTile
            Icon={Moon}
            label="Sleep efficiency"
            value={isReal ? `${wearableSignals.sleep.efficiencyPct}%` : `${Math.max(45, patient.le8 - 10)}%`}
            sub={isReal ? `REM ${wearableSignals.sleep.rem}% · Deep ${wearableSignals.sleep.deep}%` : "Last 7 nights"}
            tone="amber"
          />
          <SignalTile
            Icon={Footprints}
            label="Avg steps · 7d"
            value={isReal ? wearableSignals.activity.avgSteps7d.toLocaleString() : "—"}
            sub={isReal ? "wearable layer · simulated" : "no recent sync"}
            tone={isReal ? "amber" : "muted"}
          />
        </div>
      </div>

      {/* Real-FHIR-only blocks */}
      {isReal && (
        <>
          <div className="glass rounded-[14px] p-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
              Active conditions (FHIR · manifest-flagged)
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {flaggedConditions.map((c) => (
                <div
                  key={c.display}
                  className="rounded-md border border-white/10 bg-white/[0.02] p-3"
                >
                  <div className="text-sm text-[#e2e8f0]">{c.display}</div>
                  <div className="mt-1 text-[10px] text-[#64748b]">Onset {c.onset}</div>
                </div>
              ))}
              {flaggedConditions.length === 0 && (
                <div className="text-xs text-[#64748b]">No flagged conditions.</div>
              )}
            </div>
          </div>

          <div className="glass rounded-[14px] p-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
              FHIR vitals (latest Observations)
            </div>
            <div className="mt-3 grid gap-2 text-xs sm:grid-cols-3">
              {realVitals.bmi && (
                <Vital label="BMI" value={`${realVitals.bmi.value}`} date={realVitals.bmi.date} />
              )}
              {realVitals.a1c && (
                <Vital label="HbA1c" value={`${realVitals.a1c.value}%`} date={realVitals.a1c.date} />
              )}
              {realVitals.bp && (
                <Vital
                  label="Blood pressure"
                  value={`${realVitals.bp.systolic}/${realVitals.bp.diastolic}`}
                  date={realVitals.bp.date}
                />
              )}
              {realVitals.fev1Fvc && (
                <Vital label="FEV1/FVC" value={`${realVitals.fev1Fvc.value}`} date={realVitals.fev1Fvc.date} />
              )}
              {realVitals.weightKg && (
                <Vital label="Weight" value={`${realVitals.weightKg.value} kg`} date={realVitals.weightKg.date} />
              )}
              {realVitals.heightCm && (
                <Vital label="Height" value={`${realVitals.heightCm.value} cm`} date={realVitals.heightCm.date} />
              )}
            </div>
          </div>
        </>
      )}

      {/* Agent productive tension */}
      <div className="glass rounded-[14px] p-5">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
            Agent productive tension
          </div>
          <Bot className="h-3.5 w-3.5 text-[#94a3b8]" />
        </div>
        <div className="mt-3 grid gap-2 lg:grid-cols-3">
          {Object.entries(mockAgentResponse.agent_tension_log).map(([key, val]) => (
            <div
              key={key}
              className="rounded-md border border-white/10 bg-white/[0.02] p-3"
            >
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-medium uppercase tracking-wide text-[#e2e8f0]">
                  {key.replace(/_/g, " ")}
                </div>
                <div className="text-[10px] tabular-nums text-[#00d4aa]">
                  {Math.round(val.confidence * 100)}%
                </div>
              </div>
              <div className="mt-1.5 text-[11px] text-[#94a3b8]">{val.rationale}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-md border border-[#00d4aa]/20 bg-[#00d4aa]/5 p-3 text-[11px] text-[#94a3b8]">
          <span className="text-[#00d4aa]">Synthesized nudge:</span> {mockAgentResponse.nudge}
        </div>
      </div>

      {/* Provider summary */}
      <div className="glass rounded-[14px] p-5">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
            Provider summary
          </div>
          <FileText className="h-3.5 w-3.5 text-[#94a3b8]" />
        </div>
        <p className="mt-2 text-xs leading-relaxed text-[#94a3b8]">
          {patient.name}
          {isReal ? ` (DOB ${patientProfile.birthDate})` : ""} is in the{" "}
          <span className="text-[#e2e8f0]">{patient.bucket.replace("_", " ")}</span> bucket with an
          LE8 of {patient.le8}. Primary concern: {patient.primaryConcern}. ACCESS posture:{" "}
          <span className="text-[#e2e8f0]">{patient.accessTrack}</span>. Recommended next action:{" "}
          {patient.bucket === "critical"
            ? "synchronous outreach within 24h, BP and glycemic recheck."
            : patient.bucket === "rising"
            ? "asynchronous nudge + 7-day signal recheck; consider OAP enrollment."
            : "continue maintenance cadence."}
        </p>
      </div>
    </div>
  );
}

function SignalTile({
  Icon,
  label,
  value,
  sub,
  tone,
}: {
  Icon: typeof Activity;
  label: string;
  value: string;
  sub: string;
  tone: "teal" | "amber" | "red" | "muted";
}) {
  const TONE = {
    teal: "text-[#00d4aa]",
    amber: "text-[#f59e0b]",
    red: "text-[#ef4444]",
    muted: "text-[#e2e8f0]",
  } as const;
  return (
    <div className="glass rounded-[14px] p-4">
      <div className="flex items-center justify-between">
        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
          {label}
        </div>
        <Icon className={`h-3.5 w-3.5 ${TONE[tone]}`} />
      </div>
      <div className={`mt-2 text-2xl font-semibold tabular-nums ${TONE[tone]}`}>{value}</div>
      <div className="mt-1 text-[10px] text-[#94a3b8]">{sub}</div>
    </div>
  );
}

function Vital({ label, value, date }: { label: string; value: string; date: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.02] p-3">
      <div className="text-[10px] uppercase tracking-wider text-[#64748b]">{label}</div>
      <div className="mt-1 text-base font-semibold text-[#e2e8f0]">{value}</div>
      <div className="mt-0.5 text-[10px] text-[#64748b]">{date}</div>
    </div>
  );
}
