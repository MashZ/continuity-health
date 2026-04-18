# Patient: Wilbert25

**Role:** `recent_onset`  
**Patient ID:** `51a65c8a-b28b-4c67-8bf6-7899a76afce2`  
**Source filename:** `Wilbert25_Cole117_906c6639-1b9c-46ee-87ce-f668d42519e2.json`

> M, 68. Active: pulmonary emphysema, prediabetes. Recent onset.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.65 MB  
- **SHA-256:** `83681ff0eabb1c5cdc625464e348875083a697ead6fd1f5cd846d3d927f0e249`  
- **Total entries:** 839  
- **Embedded opinions:** 883

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 567 |
| Claim | 58 |
| DiagnosticReport | 47 |
| Encounter | 39 |
| ExplanationOfBenefit | 39 |
| Procedure | 27 |
| MedicationRequest | 19 |
| Immunization | 13 |
| Condition | 8 |
| CareTeam | 5 |
| Goal | 5 |
| CarePlan | 5 |
| Organization | 3 |
| Practitioner | 3 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 819 |
| outcome | 39 |
| verificationStatus | 8 |
| active | 6 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `6d572a39cc8b78fe1e9f676195079aded191d09169d7e3b6c35149e701487419`  
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
- **SHA-256:** `d71856c96be42d3994e6fd837daaa4a7c6c223b0f8c008b8098e3b726b2cb999`  
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

