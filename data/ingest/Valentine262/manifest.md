# Patient: Valentine262

**Role:** `cardiovascular`  
**Patient ID:** `39e175b6-e5d0-4a0b-9c67-1cb7ae226040`  
**Source filename:** `Valentine262_Hand679_f1c40929-b459-460c-bf7d-35969cb24a24.json`

> M, 84. Active: atrial fibrillation, prediabetes.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.06 MB  
- **SHA-256:** `df02d8cf0ec7e5f880e38f082aa2f0eab5db5659b207942c7495b4756a53023b`  
- **Total entries:** 639  
- **Embedded opinions:** 679

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 405 |
| Claim | 51 |
| DiagnosticReport | 37 |
| Encounter | 35 |
| ExplanationOfBenefit | 35 |
| Procedure | 18 |
| MedicationRequest | 16 |
| Condition | 13 |
| Immunization | 11 |
| Goal | 5 |
| CareTeam | 4 |
| CarePlan | 4 |
| Organization | 2 |
| Practitioner | 2 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 616 |
| outcome | 35 |
| verificationStatus | 13 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| active | 4 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `80f61a5b634d267f370d294784081acdc8ac60c16cd4c2d36a9717491694aa50`  
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
- **Size:** 5.58 MB  
- **SHA-256:** `5c975d05ae543f6d39f8b31395b0619cfbbd620bfb59c9ea7630fe36fc4e7e19`  
- **Total entries:** 2,311  
- **Window:** `2026-03-19T00:00:00Z` → `2026-04-17T23:45:00Z`  
- **Embedded opinions:** 2,310

### Measurements

| Measurement | Samples |
|---|---:|
| Heart rate (hourly mean, wearable-derived) | 720 |
| Hourly steps (wearable-derived) | 720 |
| Hourly active minutes (wearable-derived) | 720 |
| Resting heart rate (overnight minimum) | 30 |
| Heart rate variability, RMSSD (overnight, PPG-derived) | 30 |
| Sleep efficiency (wearable-derived) | 30 |
| Sleep stages, duration, and fragmentation | 30 |
| SpO2 (nocturnal mean, wearable-derived) | 30 |

### Trust tier distribution

| Tier | Opinions |
|---|---:|
| medium | 1,500 |
| medium_high | 810 |

