// Deterministic mock biosignal data for the Signal Layer.
// Decoupled from components so it can be swapped for a real API later.

function seededTrend(seed: number, count: number, base: number, variance: number): number[] {
  const out: number[] = [];
  let x = seed;
  for (let i = 0; i < count; i++) {
    // Simple LCG for deterministic pseudo-random values
    x = (x * 9301 + 49297) % 233280;
    const r = x / 233280;
    out.push(Math.round((base + (r - 0.5) * variance) * 10) / 10);
  }
  return out;
}

export const signalData = {
  hrv: {
    current: 48,
    baseline30d: 55,
    trend: seededTrend(42, 30, 52, 14),
  },
  sleep: {
    score: 72,
    rem: 18,
    deep: 14,
    light: 68,
  },
  restingHR: {
    current: 62,
    trend: seededTrend(7, 7, 62, 6),
  },
};

// Mock decision feed for Learning Velocity tab
export const decisionFeed = [
  { id: 1, action: "Accept" as const, label: "Pre-ordered low-glycemic lunch", time: "Today · 11:32 AM" },
  { id: 2, action: "Modify" as const, label: "Shifted afternoon walk by 30 min", time: "Today · 09:14 AM" },
  { id: 3, action: "Accept" as const, label: "Hydration nudge before meeting block", time: "Yesterday · 02:48 PM" },
  { id: 4, action: "Dismiss" as const, label: "Declined breathwork prompt", time: "Yesterday · 10:05 AM" },
  { id: 5, action: "Accept" as const, label: "Scheduled magnesium with dinner", time: "2 days ago · 07:22 PM" },
  { id: 6, action: "Accept" as const, label: "Earlier wind-down (lights dim 10pm)", time: "2 days ago · 09:40 PM" },
  { id: 7, action: "Modify" as const, label: "Swapped HIIT for Zone 2 session", time: "3 days ago · 06:15 AM" },
  { id: 8, action: "Accept" as const, label: "Provider note shared via HealthEngine", time: "4 days ago · 04:30 PM" },
];

// Deterministic 30-day calibration curve (rising)
export const calibrationTrend: number[] = Array.from({ length: 30 }, (_, i) => {
  const base = 48 + i * 1.05;
  // small deterministic wiggle
  const wiggle = Math.sin(i * 0.6) * 2.2 + Math.cos(i * 0.31) * 1.1;
  return Math.max(40, Math.min(82, Math.round((base + wiggle) * 10) / 10));
});
