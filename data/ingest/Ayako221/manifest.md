# Patient: Ayako221

**Role:** `recent_onset`  
**Patient ID:** `ea95f498-7929-4d50-be55-9bf7baee3a8d`  
**Source filename:** `Ayako221_Kub800_cac7fa38-f58d-4fad-85d4-2a3ea71fe116.json`

> F, 70. Codes: CV(59621000). 302 obs, 25 DxR, 15 meds, last 2019-07-26

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 1.63 MB  
- **SHA-256:** `b07cc61a3bafdba1c10c13a7d0eb475427ee010dff1de9bd861fc77ec3eae5cb`  
- **Total entries:** 496  
- **Embedded opinions:** 531

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 302 |
| Claim | 48 |
| Encounter | 33 |
| ExplanationOfBenefit | 33 |
| DiagnosticReport | 25 |
| MedicationRequest | 15 |
| Immunization | 13 |
| Procedure | 10 |
| Condition | 6 |
| Organization | 2 |
| Practitioner | 2 |
| CareTeam | 2 |
| Goal | 2 |
| CarePlan | 2 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 483 |
| outcome | 33 |
| verificationStatus | 6 |
| active | 4 |
| lifecycleStatus | 2 |
| achievementStatus | 2 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `0847e0f634866c9f0d41efce07a86f00c686e4dc38e66ac0055c3fabf058a475`  
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
- **SHA-256:** `ea515f2e99ba55df5f43952431202501d3de62a04c5bad9648acb23aff8f73fe`  
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

