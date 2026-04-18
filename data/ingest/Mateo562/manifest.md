# Patient: Mateo562

**Role:** `cardiovascular`  
**Patient ID:** `2ca9afb0-da33-4934-bcc5-eb8c1a5b1d5f`  
**Source filename:** `Mateo562_Verdugo724_91e630a6-05e9-4ada-9a8e-7d2d1eb22d82.json`

> M, 56. Codes: CV(59621000); DM(15777000;44054006). 392 obs, 33 DxR, 6 meds, last 2019-06-30

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 1.94 MB  
- **SHA-256:** `9422cd8d7771fb9e1d8afa193672817d5bf6a3360b4c311f83934fbe4c2f0090`  
- **Total entries:** 597  
- **Embedded opinions:** 633

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 392 |
| Claim | 35 |
| DiagnosticReport | 33 |
| Encounter | 29 |
| ExplanationOfBenefit | 29 |
| Procedure | 20 |
| Condition | 15 |
| Immunization | 12 |
| Goal | 7 |
| CareTeam | 6 |
| CarePlan | 6 |
| MedicationRequest | 6 |
| Organization | 3 |
| Practitioner | 3 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 568 |
| outcome | 29 |
| verificationStatus | 15 |
| lifecycleStatus | 7 |
| achievementStatus | 7 |
| active | 6 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `0db82fcab3afa93eabfd733328f87234518e579be9a9c0734b8ae9e1b931ccd5`  
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
- **SHA-256:** `d78a671b2b6bcc016619a32b9f46fe892e000fa800dcb9c737333b9208a7d105`  
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

