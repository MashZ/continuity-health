# Patient: Lindsey52

**Role:** `recent_onset`  
**Patient ID:** `a527e2a9-95f7-48ee-b538-8ab531b6b324`  
**Source filename:** `Lindsey52_Jacobson885_dbce343c-d2c4-4aa1-8b81-61a6065cd63d.json`

> M, 52. Codes: DM(15777000). 279 obs, 25 DxR, 16 meds, last 2019-04-04

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 1.52 MB  
- **SHA-256:** `0fa9cf3f212d0d4c4d3dd2bfa8a042ab1db1bc87bdec9cae22c40b23e0eb1951`  
- **Total entries:** 469  
- **Embedded opinions:** 502

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 279 |
| Claim | 44 |
| Encounter | 28 |
| ExplanationOfBenefit | 28 |
| DiagnosticReport | 25 |
| MedicationRequest | 16 |
| Immunization | 11 |
| Procedure | 9 |
| Condition | 7 |
| CareTeam | 5 |
| CarePlan | 5 |
| Goal | 5 |
| Organization | 3 |
| Practitioner | 3 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 450 |
| outcome | 28 |
| verificationStatus | 7 |
| active | 6 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `97f7e9f633fc0c3762016774801897f79e5e3c2dc2c0dfc042a0c1457bb7cc85`  
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
- **SHA-256:** `ab1cbe426b6a2b8574e917426520bcf35de6c764b36b5a453c2500966b14107b`  
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

