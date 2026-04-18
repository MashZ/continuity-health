// Synthesized panel roster derived from cohortData aggregates + the real
// Wilbert FHIR patient. Deterministic so demo runs are stable across reloads.
//
// One row per opted-in cohort member. Wilbert is row 0 with real FHIR-backed
// fields; the rest are synthetic mirrors keyed off cohortData proportions so
// bucket counts and ACCESS-track distributions stay consistent with the
// Overview page.

import { cohortData } from "./cohortData";
import { patientProfile, realVitals, wearableSignals } from "./patientData";

export type Bucket = "critical" | "rising" | "watch" | "stable" | "signal_gap";
export type AccessTrack = "eCKM" | "CKM" | "MSK" | "BH" | "—";

export type RosterRow = {
  id: string;
  name: string;
  age: number;
  gender: string;
  bucket: Bucket;
  le8: number;
  lastSignal: string; // relative
  lastSignalHoursAgo: number;
  accessTrack: AccessTrack;
  hrv: number;
  restingHR: number;
  primaryConcern: string;
  isReal?: boolean;
};

const FIRST = [
  "Wilbert", "Maria", "James", "Linda", "Robert", "Patricia", "John", "Jennifer",
  "Michael", "Barbara", "William", "Elizabeth", "David", "Susan", "Richard",
  "Jessica", "Joseph", "Sarah", "Thomas", "Karen", "Charles", "Nancy", "Daniel",
  "Lisa", "Matthew", "Margaret", "Anthony", "Betty", "Donald", "Sandra",
  "Mark", "Ashley", "Paul", "Kimberly", "Steven", "Emily", "Andrew", "Donna",
];
const LAST = [
  "Cole", "Garcia", "Smith", "Johnson", "Brown", "Davis", "Miller", "Wilson",
  "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris",
  "Martin", "Thompson", "Young", "King", "Wright", "Lopez", "Hill", "Scott",
];
const CONCERNS_BY_BUCKET: Record<Bucket, string[]> = {
  critical: [
    "BP stage-2 + missed CKD follow-up",
    "HRV collapse + sleep debt 7d",
    "Glycemic excursion + medication gap",
    "Post-MSK flare · pain ≥ 7",
  ],
  rising: [
    "A1c trending upward",
    "Resting HR drift +12 bpm",
    "Sleep efficiency declining",
    "Step count -35% vs baseline",
  ],
  watch: [
    "Mild HRV variability",
    "Post-procedure observation",
    "Behavioral health check-in due",
    "Pulmonary baseline review",
  ],
  stable: [
    "Within target ranges",
    "LE8 ≥ 70 sustained",
    "Adherence high · steady",
    "Annual wellness on schedule",
  ],
  signal_gap: [
    "Wearable last sync > 72h",
    "Consent withdrawn · partial",
    "Device replacement pending",
    "FHIR ingest gap (provider EHR)",
  ],
};
const TRACKS: AccessTrack[] = ["eCKM", "CKM", "MSK", "BH", "—"];

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function deriveBucketCounts(total: number, opinion: { l: number; v: number; u: number }) {
  const critical = Math.round(total * opinion.v * 0.45);
  const rising = Math.round(total * opinion.v * 0.55);
  const watch = Math.round(total * opinion.u * 0.55);
  const signal_gap = Math.round(total * opinion.u * 0.45);
  const stable = Math.max(0, total - critical - rising - watch - signal_gap);
  return { critical, rising, watch, stable, signal_gap };
}

export const bucketCounts = deriveBucketCounts(
  cohortData.totalOptedIn,
  cohortData.aggregateOpinion,
);

function buildRoster(): RosterRow[] {
  const rng = mulberry32(42);
  const rows: RosterRow[] = [];

  // Row 0 — real FHIR-backed patient
  const wilbertHrv = wearableSignals.hrv.current;
  const wilbertRhr = wearableSignals.restingHR.current;
  // BMI, A1c, BP feed into a heuristic LE8 — just a demo composite.
  const a1c = realVitals.a1c?.value ?? 6.0;
  const bmi = realVitals.bmi?.value ?? 28;
  const sys = realVitals.bp?.systolic ?? 130;
  const wilbertLe8 = Math.max(
    20,
    Math.round(100 - (a1c - 5) * 6 - Math.max(0, bmi - 25) * 1.2 - Math.max(0, sys - 120) * 0.4 - 12),
  );
  rows.push({
    id: patientProfile.id || "wilbert25-cole117",
    name: `${patientProfile.given} ${patientProfile.family}`.trim() || "Wilbert Cole",
    age: patientProfile.age || 64,
    gender: patientProfile.gender || "male",
    bucket: "rising",
    le8: wilbertLe8,
    lastSignal: "12 min ago",
    lastSignalHoursAgo: 0.2,
    accessTrack: "eCKM",
    hrv: wilbertHrv,
    restingHR: wilbertRhr,
    primaryConcern: "Pulmonary emphysema + prediabetes · HRV -20% vs baseline",
    isReal: true,
  });

  const order: Bucket[] = [];
  (Object.entries(bucketCounts) as [Bucket, number][]).forEach(([b, n]) => {
    const adjusted = b === "rising" ? n - 1 : n; // wilbert occupies a "rising" slot
    for (let i = 0; i < adjusted; i++) order.push(b);
  });

  for (let i = 0; i < order.length; i++) {
    const bucket = order[i];
    const r = rng();
    const first = FIRST[1 + Math.floor(rng() * (FIRST.length - 1))];
    const last = LAST[Math.floor(rng() * LAST.length)];
    const age = 28 + Math.floor(rng() * 60);
    const gender = rng() > 0.5 ? "female" : "male";

    let le8 = 60;
    if (bucket === "critical") le8 = 25 + Math.floor(rng() * 18);
    else if (bucket === "rising") le8 = 42 + Math.floor(rng() * 14);
    else if (bucket === "watch") le8 = 55 + Math.floor(rng() * 12);
    else if (bucket === "stable") le8 = 72 + Math.floor(rng() * 22);
    else le8 = 50 + Math.floor(rng() * 30);

    let hoursAgo = 0;
    if (bucket === "signal_gap") hoursAgo = 72 + Math.floor(rng() * 240);
    else if (bucket === "stable") hoursAgo = Math.floor(rng() * 6);
    else hoursAgo = Math.floor(rng() * 12);
    const lastSignal =
      hoursAgo < 1
        ? `${Math.max(2, Math.floor(hoursAgo * 60))} min ago`
        : hoursAgo < 24
        ? `${hoursAgo}h ago`
        : `${Math.floor(hoursAgo / 24)}d ago`;

    const hrv = Math.round((bucket === "critical" ? 18 : bucket === "rising" ? 26 : 38) + (r - 0.5) * 14);
    const restingHR = Math.round((bucket === "critical" ? 92 : bucket === "rising" ? 84 : 68) + (r - 0.5) * 10);

    let track: AccessTrack;
    if (bucket === "critical") track = rng() > 0.5 ? "eCKM" : "CKM";
    else if (bucket === "rising") track = rng() > 0.6 ? "eCKM" : rng() > 0.5 ? "CKM" : "MSK";
    else if (bucket === "watch") track = TRACKS[Math.floor(rng() * 4)];
    else if (bucket === "stable") track = rng() > 0.7 ? TRACKS[Math.floor(rng() * 4)] : "—";
    else track = "—";

    const concerns = CONCERNS_BY_BUCKET[bucket];
    const concern = concerns[Math.floor(rng() * concerns.length)];

    rows.push({
      id: `p-${String(i + 1).padStart(4, "0")}`,
      name: `${first} ${last}`,
      age,
      gender,
      bucket,
      le8,
      lastSignal,
      lastSignalHoursAgo: hoursAgo,
      accessTrack: track,
      hrv,
      restingHR,
      primaryConcern: concern,
    });
  }

  return rows;
}

export const roster = buildRoster();

export function getPatient(id: string): RosterRow | undefined {
  return roster.find((r) => r.id === id);
}

// ---- Escalations derived from roster ----

export type EscalationStatus = "open" | "acknowledged" | "routed" | "resolved";
export type EscalationKind =
  | "threshold_breach"
  | "agent_tension"
  | "consent_withdrawal"
  | "signal_gap";

export type Escalation = {
  id: string;
  patientId: string;
  patientName: string;
  bucket: Bucket;
  kind: EscalationKind;
  detail: string;
  openedHoursAgo: number;
  status: EscalationStatus;
  assignee?: string;
};

const ASSIGNEES = ["Dr. Reyes", "Dr. Patel", "Dr. Lin", "RN. Owens", "RN. Diaz"];

function buildEscalations(): Escalation[] {
  const rng = mulberry32(7);
  const out: Escalation[] = [];
  let n = 0;
  for (const r of roster) {
    if (r.bucket === "critical" || (r.bucket === "rising" && rng() > 0.6)) {
      const kinds: EscalationKind[] =
        r.bucket === "critical"
          ? ["threshold_breach", "agent_tension"]
          : ["threshold_breach", "signal_gap", "agent_tension"];
      const kind = kinds[Math.floor(rng() * kinds.length)];
      const detailMap: Record<EscalationKind, string> = {
        threshold_breach: r.primaryConcern,
        agent_tension: "Clinical vs Behavioral agents disagree on next intervention",
        consent_withdrawal: "Patient revoked secondary-research consent · purge ETA 24h",
        signal_gap: "No wearable sync in last 72h · device pending replacement",
      };
      const status: EscalationStatus =
        rng() > 0.7 ? "acknowledged" : rng() > 0.85 ? "routed" : "open";
      out.push({
        id: `esc-${String(++n).padStart(4, "0")}`,
        patientId: r.id,
        patientName: r.name,
        bucket: r.bucket,
        kind,
        detail: detailMap[kind],
        openedHoursAgo: Math.floor(rng() * 36),
        status,
        assignee: status !== "open" ? ASSIGNEES[Math.floor(rng() * ASSIGNEES.length)] : undefined,
      });
    }
  }
  // Add a couple of consent-withdrawal events
  out.push({
    id: `esc-${String(++n).padStart(4, "0")}`,
    patientId: roster[12]?.id ?? "p-0011",
    patientName: roster[12]?.name ?? "Withdrawn patient",
    bucket: "signal_gap",
    kind: "consent_withdrawal",
    detail: "Patient revoked RPM consent · γ=0 hard purge in progress",
    openedHoursAgo: 6,
    status: "acknowledged",
    assignee: "Compliance",
  });
  return out;
}

export const escalations = buildEscalations();
