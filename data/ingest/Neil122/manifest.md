# Patient: Neil122

**Role:** `cardiovascular`  
**Patient ID:** `0547ef1b-5256-4733-ba0c-810761f0b6ad`  
**Source filename:** `Neil122_Rippin620_7609d729-1675-488c-8373-7e53327ae67f.json`

> M, 76. Active: CVA, coronary arteriosclerosis, hypertension, prediabetes.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.31 MB  
- **SHA-256:** `f5f1f7e0f3fc1468b3c1b8bd2501b2aa5a5942b77c1c31b8a80871316bf8e111`  
- **Total entries:** 723  
- **Embedded opinions:** 777

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 431 |
| Claim | 75 |
| Encounter | 47 |
| ExplanationOfBenefit | 47 |
| DiagnosticReport | 38 |
| MedicationRequest | 28 |
| Immunization | 13 |
| Condition | 12 |
| Procedure | 8 |
| Goal | 7 |
| Organization | 4 |
| Practitioner | 4 |
| CareTeam | 4 |
| CarePlan | 4 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 695 |
| outcome | 47 |
| verificationStatus | 12 |
| active | 8 |
| lifecycleStatus | 7 |
| achievementStatus | 7 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `ff4c7e1902200f7215276968a0baad7bbd3f9683da3bab0e326a43326feffe86`  
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
- **SHA-256:** `54e966d23a5b6858d09f325af8613e45962b31ad62c39df926eaec76dd8ca404`  
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

