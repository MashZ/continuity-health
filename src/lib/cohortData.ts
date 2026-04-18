export const cohortData = {
  totalOptedIn: 247,
  eligiblePopulation: 412,
  aggregateOpinion: { l: 0.74, v: 0.11, u: 0.15, a: 0.30 },
  projectedLawfulness: 0.785,
  jurisdictions: [
    { name: "EU GDPR",  opinion: { l: 0.68, v: 0.15, u: 0.17, a: 0.30 } },
    { name: "US HIPAA", opinion: { l: 0.88, v: 0.04, u: 0.08, a: 0.70 } },
    { name: "FL CMIA",  opinion: { l: 0.82, v: 0.06, u: 0.12, a: 0.60 } }
  ],
  jurisdictionalMeet: { l: 0.49, v: 0.24, u: 0.27, a: 0.126 },
  consent: {
    art7Conditions: [
      { condition: "Freely given (Art. 7(4))",      cohortPct: 0.94, opinion: { l: 0.91, v: 0.03, u: 0.06 } },
      { condition: "Specific (Art. 4(11))",         cohortPct: 0.88, opinion: { l: 0.82, v: 0.08, u: 0.10 } },
      { condition: "Informed (Art. 4(11))",         cohortPct: 0.86, opinion: { l: 0.80, v: 0.08, u: 0.12 } },
      { condition: "Unambiguous (Art. 4(11))",      cohortPct: 0.97, opinion: { l: 0.95, v: 0.01, u: 0.04 } },
      { condition: "Demonstrable (Art. 7(1))",      cohortPct: 0.71, opinion: { l: 0.62, v: 0.18, u: 0.20 } },
      { condition: "Distinguishable (Art. 7(2))",   cohortPct: 0.84, opinion: { l: 0.78, v: 0.09, u: 0.13 } }
    ],
    sixWayMeet: { l: 0.34, v: 0.47, u: 0.19, a: 0.21 },
    purposes: [
      { name: "RPM (Remote Physiologic Monitoring)", consentedPct: 0.89, reimbursementTag: "CPT 99453-99458" },
      { name: "RTM (Remote Therapeutic Monitoring)", consentedPct: 0.82, reimbursementTag: "CPT 98975-98981" },
      { name: "CCM (Chronic Care Management)",       consentedPct: 0.77, reimbursementTag: "CPT 99490-99491" },
      { name: "Secondary research",                  consentedPct: 0.34, reimbursementTag: null }
    ],
    withdrawalsLast30d: [3,2,1,0,4,2,1,2,3,1,0,2,1,4,2,1,3,0,1,2,3,1,2,0,1,4,2,1,3,2]
  },
  temporal: {
    expiryTriggers: [
      { date: "2026-05-02", kind: "retention-expiry", detail: "RPM raw biosignals · 30-day retention · γ=0 hard expiry" },
      { date: "2026-05-14", kind: "review-due",       detail: "DPIA annual review · Art. 35(11)" },
      { date: "2026-07-01", kind: "review-due",       detail: "Adequacy reliance review · Art. 45(3)" },
      { date: "2026-08-15", kind: "retention-expiry", detail: "Withdrawn-consent data purge · γ=0" },
      { date: "2026-10-03", kind: "reg-change",       detail: "FL SB-262 revised enforcement begins" }
    ],
    lambda30dCurve: [1.00,0.98,0.96,0.94,0.92,0.90,0.89,0.87,0.86,0.84,0.83,0.81,0.80,0.78,0.77,0.76,0.74,0.73,0.72,0.71,0.70,0.68,0.67,0.66,0.65,0.64,0.63,0.62,0.61,0.60]
  },
  erasureGraph: {
    nodes: [
      { id: "D1", label: "Raw biosignals",   e: 0.98, layer: "Signal"             },
      { id: "D2", label: "30-day baseline",  e: 0.95, layer: "Signal"             },
      { id: "D3", label: "Trend features",   e: 0.92, layer: "Intelligence"       },
      { id: "D4", label: "Nudge outputs",    e: 0.88, layer: "Action"             },
      { id: "D5", label: "Provider summary", e: 0.85, layer: "Action"             },
      { id: "D6", label: "Cohort aggregate", e: 0.79, layer: "Operating Center"   }
    ],
    edges: [
      { from: "D1", to: "D2" },
      { from: "D2", to: "D3" },
      { from: "D3", to: "D4" },
      { from: "D4", to: "D5" },
      { from: "D3", to: "D6" }
    ],
    compositeErasure: 0.506,
    contaminationRisk: { shallow: 0.07, middle: 0.15, deep: 0.24 }
  },
  uncertaintyHeatmap: {
    rows: [
      { label: "65-84 · multi-condition", n: 58 },
      { label: "55-64 · single chronic",  n: 71 },
      { label: "31-54 · prevention",      n: 92 },
      { label: "<31 · baseline",          n: 26 }
    ],
    cols: ["Jurisdictional", "Consent", "Propagation", "Temporal", "Erasure"],
    cells: [
      [{l:0.58,v:0.22,u:0.20},{l:0.31,v:0.22,u:0.47},{l:0.44,v:0.30,u:0.26},{l:0.22,v:0.10,u:0.68},{l:0.48,v:0.20,u:0.32}],
      [{l:0.72,v:0.14,u:0.14},{l:0.54,v:0.18,u:0.28},{l:0.61,v:0.21,u:0.18},{l:0.58,v:0.12,u:0.30},{l:0.66,v:0.15,u:0.19}],
      [{l:0.80,v:0.08,u:0.12},{l:0.66,v:0.14,u:0.20},{l:0.72,v:0.12,u:0.16},{l:0.71,v:0.09,u:0.20},{l:0.74,v:0.11,u:0.15}],
      [{l:0.84,v:0.04,u:0.12},{l:0.72,v:0.10,u:0.18},{l:0.77,v:0.08,u:0.15},{l:0.76,v:0.05,u:0.19},{l:0.80,v:0.07,u:0.13}]
    ]
  }
};
