// Derives Dashboard data for Wilbert25 Cole117 from a real Synthea FHIR R4 bundle.
//
// Three categories of data are produced:
//   1. realVitals  — pulled directly from Observation resources (latest value per LOINC code).
//   2. conditions  — active Condition resources, filtered to the manifest-flagged set
//                    (pulmonary emphysema + prediabetes — the "recent_onset" demo framing).
//   3. wearable    — HRV / RHR / sleep / steps. Synthea does NOT generate these, so they
//                    are supplied by a clearly-labeled simulated wearable layer. The
//                    Signal Ribbon surfaces a "wearable · simulated" caption so the
//                    provenance is honest.
//
// If/when a real wearable sidecar exists, swap WEARABLE_SIM for that loader.

import bundle from "@/data/wilbertBundle.json";

// Manifest-flagged active conditions for the "recent_onset" demo persona.
const MANIFEST_FLAGGED = new Set<string>(["Pulmonary emphysema (disorder)", "Prediabetes"]);

// LOINC codes we extract from Observation.code.coding[].code
const LOINC = {
  BMI: "39156-5",
  A1C: "4548-4",
  BP: "55284-4",
  FEV1_FVC: "19926-5",
  WEIGHT: "29463-7",
  HEIGHT: "8302-2",
} as const;

type FhirEntry = { resource: Record<string, any> };
type FhirBundle = { entry: FhirEntry[] };

const b = bundle as unknown as FhirBundle;

function patient() {
  for (const e of b.entry) {
    if (e.resource.resourceType === "Patient") return e.resource;
  }
  return null;
}

function ageFromDob(dob: string): number {
  const d = new Date(dob);
  const diff = Date.now() - d.getTime();
  return Math.floor(diff / (365.25 * 24 * 3600 * 1000));
}

function latestObservation(loincCode: string) {
  let latest: { eff: string; resource: Record<string, any> } | null = null;
  for (const e of b.entry) {
    const r = e.resource;
    if (r.resourceType !== "Observation") continue;
    const codings = r.code?.coding ?? [];
    if (!codings.some((c: any) => c.code === loincCode)) continue;
    const eff = r.effectiveDateTime ?? "";
    if (!latest || eff > latest.eff) latest = { eff, resource: r };
  }
  return latest;
}

function bpLatest(): { systolic: number; diastolic: number; date: string } | null {
  const obs = latestObservation(LOINC.BP);
  if (!obs) return null;
  const comps = obs.resource.component ?? [];
  let sys = 0;
  let dia = 0;
  for (const c of comps) {
    const code = c.code?.coding?.[0]?.code;
    const v = c.valueQuantity?.value ?? 0;
    if (code === "8480-6") sys = v;
    if (code === "8462-4") dia = v;
  }
  if (!sys || !dia) return null;
  return { systolic: Math.round(sys), diastolic: Math.round(dia), date: obs.eff.slice(0, 10) };
}

function scalarLatest(code: string) {
  const obs = latestObservation(code);
  if (!obs) return null;
  const v = obs.resource.valueQuantity?.value;
  if (typeof v !== "number") return null;
  return { value: v, unit: obs.resource.valueQuantity?.unit as string | undefined, date: obs.eff.slice(0, 10) };
}

function activeConditions() {
  const out: Array<{ display: string; onset: string; flagged: boolean }> = [];
  for (const e of b.entry) {
    const r = e.resource;
    if (r.resourceType !== "Condition") continue;
    const status = r.clinicalStatus?.coding?.[0]?.code;
    if (status !== "active") continue;
    const display = r.code?.coding?.[0]?.display ?? "Unknown condition";
    const onset = (r.onsetDateTime ?? "").slice(0, 10);
    out.push({ display, onset, flagged: MANIFEST_FLAGGED.has(display) });
  }
  return out;
}

// ---- Public API ----

const p = patient();

export const patientProfile = {
  id: p?.id ?? "unknown",
  given: p?.name?.[0]?.given?.[0] ?? "Unknown",
  family: p?.name?.[0]?.family ?? "",
  gender: p?.gender ?? "unknown",
  birthDate: p?.birthDate ?? "",
  age: p?.birthDate ? ageFromDob(p.birthDate) : 0,
};

const bmi = scalarLatest(LOINC.BMI);
const a1c = scalarLatest(LOINC.A1C);
const fev = scalarLatest(LOINC.FEV1_FVC);
const weight = scalarLatest(LOINC.WEIGHT);
const height = scalarLatest(LOINC.HEIGHT);
const bp = bpLatest();

export const realVitals = {
  bmi: bmi ? { value: Math.round(bmi.value * 10) / 10, date: bmi.date } : null,
  a1c: a1c ? { value: Math.round(a1c.value * 100) / 100, date: a1c.date } : null,
  fev1Fvc: fev ? { value: Math.round(fev.value * 10) / 10, date: fev.date } : null,
  weightKg: weight ? { value: Math.round(weight.value * 10) / 10, date: weight.date } : null,
  heightCm: height ? { value: Math.round(height.value * 10) / 10, date: height.date } : null,
  bp,
};

// Active conditions, filtered to the manifest-flagged "recent_onset" set.
export const flaggedConditions = activeConditions().filter((c) => c.flagged);

// All active conditions (kept for potential future panels — Operating Center etc.)
export const allActiveConditions = activeConditions();

// ---- Simulated wearable layer ----
// Synthea bundles do not contain HRV / RHR / sleep / step Observations.
// These values represent a downstream wearable feed that would normally arrive
// alongside the FHIR record in a real deployment. Test acceptance values:
//   HRV 25.9 ms · RHR 89 bpm · Sleep efficiency 58% · 7-day avg steps 3,120
// The Signal Ribbon labels these tiles with a "wearable · simulated" caption.

function deterministicTrend(seed: number, count: number, base: number, variance: number): number[] {
  const out: number[] = [];
  let x = seed;
  for (let i = 0; i < count; i++) {
    x = (x * 9301 + 49297) % 233280;
    const r = x / 233280;
    out.push(Math.round((base + (r - 0.5) * variance) * 10) / 10);
  }
  return out;
}

export const wearableSignals = {
  source: "simulated wearable layer" as const,
  hrv: {
    current: 25.9,
    unit: "ms",
    baseline30d: 32.4,
    trend: deterministicTrend(101, 30, 27, 6),
  },
  restingHR: {
    current: 89,
    unit: "bpm",
    baseline30d: 78,
    trend: deterministicTrend(202, 7, 87, 6),
  },
  sleep: {
    efficiencyPct: 58,
    score: 58,
    rem: 14,
    deep: 9,
    light: 71,
  },
  activity: {
    avgSteps7d: 3120,
    trend: deterministicTrend(303, 7, 3120, 1100).map((v) => Math.round(v)),
  },
};
