# Patient: Marina546

**Role:** `stale_data`  
**Patient ID:** `20da6cff-013a-4a63-b2fd-ea0c2e3eb832`  
**Source filename:** `Marina546_Rippin620_d6ba1c58-400c-445a-8026-ee9d501a42fc.json`

> F, 30. Codes: CV(59621000); DM(15777000). 65 obs, 4 DxR, 7 meds, last 2016-10-18

## Constructions applied

Added active Consent (HIPAA authorization, dated 2016-09-01) with provision.period.end=2021-09-01 — 5-year retention window now 4.5+ years past. No Observation data modified; patient's own clinical record already ends 2016-09-21. Wearable window ends today (fresh wearable over stale EHR).

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.41 MB  
- **SHA-256:** `a5224b90fcbc4ac676f556717f736d244a41e6ff0cbc3c006add49bc3bdb6587`  
- **Total entries:** 491  
- **Embedded opinions:** 580

### Resource type breakdown

| Type | Count |
|---|---:|
| Procedure | 127 |
| Claim | 87 |
| Encounter | 80 |
| ExplanationOfBenefit | 80 |
| Observation | 65 |
| Condition | 8 |
| MedicationRequest | 7 |
| Goal | 7 |
| CareTeam | 6 |
| CarePlan | 6 |
| Immunization | 6 |
| DiagnosticReport | 4 |
| Organization | 2 |
| Practitioner | 2 |
| AllergyIntolerance | 2 |
| Patient | 1 |
| Consent | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 469 |
| outcome | 80 |
| verificationStatus | 10 |
| lifecycleStatus | 7 |
| achievementStatus | 7 |
| active | 4 |
| criticality | 2 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `3f4783974bbef43909bbec1dfcb1de7c6b666fa487cf0839e4a9e79a3aea7a59`  
- **Total entries:** 55  
- **Embedded opinions:** 54

### Measurements

| Measurement | Samples |
|---|---:|
| Heart rate | 6 |
| Oxygen saturation (pulse oximetry) | 6 |
| Heart rate variability (RMSSD, PPG-derived) | 6 |
| Blood pressure (ring-estimated, not cuff-measured) | 6 |
| Ring blood-sugar estimate (NOT a glucose measurement) | 6 |
| ECG rhythm score (proprietary, 0-100) | 6 |
| Fatigue index (proprietary, 0-100) | 6 |
| Stress/pressure index (proprietary, 0-100) | 6 |
| Composite health score (proprietary, 0-100) | 6 |

### Trust tier distribution

| Tier | Opinions |
|---|---:|
| high | 12 |
| low | 36 |
| medium | 6 |

## Wearable bundle (30-day stream)

- **File:** `wearable_bundle.fhir.json`  
- **Size:** 566.1 KB  
- **SHA-256:** `552fc7e66a08f8c4bac2cef8bb6a08dd3e92c73d96f6a6bf8b1583b30a500907`  
- **Total entries:** 211  
- **Window:** `2026-03-19T06:30:00Z` → `2026-04-17T23:59:30Z`  
- **Embedded opinions:** 210

### Measurements

| Measurement | Samples |
|---|---:|
| Resting heart rate (overnight minimum) | 30 |
| Heart rate variability, RMSSD (overnight, PPG-derived) | 30 |
| Sleep efficiency (wearable-derived) | 30 |
| Sleep stages, duration, and fragmentation | 30 |
| SpO2 (nocturnal mean, wearable-derived) | 30 |
| Daily steps total (wearable-derived) | 30 |
| Daily activity summary (wearable-derived) | 30 |

### Trust tier distribution

| Tier | Opinions |
|---|---:|
| medium | 120 |
| medium_high | 90 |

