# Patient: Vito638

**Role:** `normal`  
**Patient ID:** `f7d1409b-9dc9-4300-beef-63375bd2c105`  
**Source filename:** `Vito638_Mertz280_2a731e03-eb5a-4511-8761-8775d4401e18.json`

> M, 31. No flagged chronic conditions.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 500.4 KB  
- **SHA-256:** `049042ddba510db6919d437b6d4e37efc1aaf03eb008905e811e655c087565dd`  
- **Total entries:** 127  
- **Embedded opinions:** 137

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 56 |
| Claim | 13 |
| Encounter | 10 |
| Immunization | 10 |
| ExplanationOfBenefit | 10 |
| Procedure | 7 |
| Condition | 4 |
| Organization | 3 |
| Practitioner | 3 |
| DiagnosticReport | 3 |
| MedicationRequest | 3 |
| CareTeam | 2 |
| CarePlan | 2 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 116 |
| outcome | 10 |
| active | 6 |
| verificationStatus | 4 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `b816356c84772f9354d6bccdf22a4724a0854f30c389b4452a97152c2ea71ee1`  
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
- **SHA-256:** `1c4027f8489226899beb3262f9cfc6a1a4aff386a81a998ea7de826dc67e0e9b`  
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

