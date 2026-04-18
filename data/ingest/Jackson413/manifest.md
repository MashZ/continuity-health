# Patient: Jackson413

**Role:** `recent_onset`  
**Patient ID:** `40d3cfe9-22be-48ab-90d3-6a722e85ee9c`  
**Source filename:** `Jackson413_Jerde200_ed4701e2-ba22-4510-b55f-9a7920354780.json`

> M, 54. Codes: CV(49436004). 256 obs, 23 DxR, 13 meds, last 2019-09-07

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 1.23 MB  
- **SHA-256:** `447530a7d74333a47fed6ee1ae8d5c69ba27c982acdb07007913e7888906d1ab`  
- **Total entries:** 389  
- **Embedded opinions:** 408

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 256 |
| Claim | 32 |
| DiagnosticReport | 23 |
| Encounter | 19 |
| ExplanationOfBenefit | 19 |
| MedicationRequest | 13 |
| Immunization | 10 |
| Procedure | 8 |
| Organization | 2 |
| Practitioner | 2 |
| Condition | 2 |
| Patient | 1 |
| CareTeam | 1 |
| CarePlan | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 382 |
| outcome | 19 |
| active | 4 |
| verificationStatus | 2 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `0f481dfd441b08e44194216c518d71da8179eefbae560d8835a2ae7cb6f7dd45`  
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
- **SHA-256:** `b0b1792ba93f64c083a715d30884ccb1fae4132e16052dec65b088090818517a`  
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

