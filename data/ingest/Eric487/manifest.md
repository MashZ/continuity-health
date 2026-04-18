# Patient: Eric487

**Role:** `stale_data`  
**Patient ID:** `dbbc33b2-9e92-4281-ada1-7e67bac97165`  
**Source filename:** `Eric487_Koepp521_9fa03048-c733-46d8-b0b5-0e143610cb27.json`

> M, 33. Codes: DM(15777000). 78 obs, 6 DxR, 3 meds, last 2016-10-10

## Constructions applied

Added active Consent (HIPAA authorization, dated 2016-09-01) with provision.period.end=2021-09-01 — 5-year retention window now 4.5+ years past. No Observation data modified; patient's own clinical record already ends 2016-09-21. Wearable window ends today (fresh wearable over stale EHR).

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 626.0 KB  
- **SHA-256:** `140ea5ef413e7a632bd729d70363946dbaa2d7144fc998484aaf0dde4d916390`  
- **Total entries:** 169  
- **Embedded opinions:** 187

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 78 |
| Claim | 15 |
| Encounter | 12 |
| ExplanationOfBenefit | 12 |
| Procedure | 10 |
| Immunization | 6 |
| DiagnosticReport | 6 |
| Condition | 5 |
| Goal | 5 |
| CareTeam | 4 |
| CarePlan | 4 |
| Organization | 3 |
| Practitioner | 3 |
| MedicationRequest | 3 |
| Patient | 1 |
| AllergyIntolerance | 1 |
| Consent | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 151 |
| outcome | 12 |
| active | 6 |
| verificationStatus | 6 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| data_quality | 1 |
| criticality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `0018cf621bc8589c640bbd40261f9d61e468ba13256e6513ef9869d3ee4a6f33`  
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
- **SHA-256:** `cd8bb9eed9554e798f328fd387a390a094bb80c248166d4f5f9156b4f09efea0`  
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

