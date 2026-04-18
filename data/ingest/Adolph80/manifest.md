# Patient: Adolph80

**Role:** `normal`  
**Patient ID:** `3f8be6b0-15a6-43f4-87f3-1adb737fa598`  
**Source filename:** `Adolph80_Williamson769_2de9315e-3784-4802-944a-926bcd8febd4.json`

> M, 25. 44 obs, 1 DxR, 1 meds, last 2018-04-25

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 361.0 KB  
- **SHA-256:** `3bfdbc27e2103a2d9d251a6d8b9bb0a675b913056678416f5f154b44b7e80283`  
- **Total entries:** 92  
- **Embedded opinions:** 100

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 44 |
| Claim | 9 |
| Encounter | 8 |
| Immunization | 8 |
| ExplanationOfBenefit | 8 |
| Procedure | 3 |
| Condition | 3 |
| Organization | 2 |
| Practitioner | 2 |
| Patient | 1 |
| MedicationRequest | 1 |
| CareTeam | 1 |
| CarePlan | 1 |
| DiagnosticReport | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 84 |
| outcome | 8 |
| active | 4 |
| verificationStatus | 3 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `1df14c3a38bc2cc1517764f995569f80fad48476933f8156ccbaff864c08992f`  
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
- **SHA-256:** `e8aa8964720bef99b8ef78ae59e28b313217cd0fb19f3b50e2f0f60b8ff089b5`  
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

