# Patient: Nakisha629

**Role:** `recent_onset`  
**Patient ID:** `f3a726ca-6163-40e5-a604-965ce1843f13`  
**Source filename:** `Nakisha629_Willms744_5974d955-60b6-4e8e-87c2-aec099ad8ad8.json`

> F, 69. Active: prediabetes. Recent onset.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.32 MB  
- **SHA-256:** `86975ec0471e117687bbf6c9ee948f03f68440e89bd1d5ebbe5ddbd2fb0e1a05`  
- **Total entries:** 736  
- **Embedded opinions:** 788

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 459 |
| Claim | 68 |
| Encounter | 47 |
| ExplanationOfBenefit | 47 |
| DiagnosticReport | 42 |
| MedicationRequest | 21 |
| Immunization | 13 |
| Condition | 9 |
| Procedure | 7 |
| Goal | 5 |
| Organization | 4 |
| Practitioner | 4 |
| CareTeam | 4 |
| CarePlan | 4 |
| Patient | 1 |
| ImagingStudy | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 713 |
| outcome | 47 |
| verificationStatus | 9 |
| active | 8 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `58a5d300e864819b2213cba23fc4cfb053f899a40b48654acdc601de2a63d1a9`  
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
- **SHA-256:** `8e7e535f8351122d8068b48ad21340da7dad9e33a56919b01cc72dedab76d5ab`  
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

