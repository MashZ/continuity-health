# Patient: Antonia30

**Role:** `cardiovascular`  
**Patient ID:** `1f18e760-de54-483d-8a3e-934f6f2fe892`  
**Source filename:** `Antonia30_Kilback373_2d3b21e7-11ef-4dd4-9842-ddac21402a35.json`

> F, 62. Codes: CV(230690007;59621000); DM(15777000). 419 obs, 38 DxR, 25 meds, last 2019-07-30

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.26 MB  
- **SHA-256:** `38360381bcd7bba0a7cd8f1bc0c79e52a982a3cedb564b911627dcfecfeb5cff`  
- **Total entries:** 709  
- **Embedded opinions:** 766

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 419 |
| Claim | 74 |
| Encounter | 49 |
| ExplanationOfBenefit | 49 |
| DiagnosticReport | 38 |
| MedicationRequest | 25 |
| Immunization | 11 |
| Condition | 9 |
| Goal | 7 |
| Procedure | 6 |
| Organization | 5 |
| Practitioner | 5 |
| CareTeam | 5 |
| CarePlan | 5 |
| Patient | 1 |
| AllergyIntolerance | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 681 |
| outcome | 49 |
| active | 10 |
| verificationStatus | 10 |
| lifecycleStatus | 7 |
| achievementStatus | 7 |
| data_quality | 1 |
| criticality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `f2f314cf75a8e3a40fb9ce7998395ee655e07f5ec3a0be47b35a9b1d5647a9c7`  
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
- **SHA-256:** `5d165f346a6df415403442c5db278d9edcb60392eae5ad80a857ce1d185f4555`  
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

