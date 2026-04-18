# Patient: Cammy883

**Role:** `recent_onset`  
**Patient ID:** `77473282-82e6-4d7b-ae46-aa27a20daef5`  
**Source filename:** `Cammy883_Herzog843_563383fc-a421-40ba-93f4-911eb946fd32.json`

> F, 54. Codes: DM(15777000;44054006). 340 obs, 31 DxR, 5 meds, last 2019-07-21

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 1.69 MB  
- **SHA-256:** `7de27b9dd2cd0827fb44d07bdffbf0de5d27142250de370050ca2388f8410114`  
- **Total entries:** 522  
- **Embedded opinions:** 552

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 340 |
| DiagnosticReport | 31 |
| Claim | 30 |
| Encounter | 25 |
| ExplanationOfBenefit | 25 |
| Procedure | 21 |
| Condition | 14 |
| Immunization | 11 |
| MedicationRequest | 5 |
| Goal | 5 |
| CareTeam | 4 |
| CarePlan | 4 |
| Organization | 3 |
| Practitioner | 3 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 496 |
| outcome | 25 |
| verificationStatus | 14 |
| active | 6 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `b254febb6c944ee29bfce469fe649cc03da955401694a67a2130ee54be6cf016`  
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
- **SHA-256:** `1532cd22731a0225dabaa49189f008e30ccb7809c12cf7dad0e3bed0b6d03519`  
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

