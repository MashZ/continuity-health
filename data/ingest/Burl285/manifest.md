# Patient: Burl285

**Role:** `investigation`  
**Patient ID:** `84691283-3078-4a8e-aa46-e5577937fc7b`  
**Source filename:** `Burl285_Torp761_2b4109b0-0a81-409d-ac15-ecc25bb91175.json`

> M, 62. No active chronic conditions; 5 DiagnosticReports baseline.

## Constructions applied

Added 2 active chronic Conditions (essential hypertension SNOMED 59621000, hyperlipidemia SNOMED 55822004) for multi-morbidity eligibility. Added ambiguous CA 19-9 Observation (LOINC 24108-3, 84 U/mL, ref <37) and preliminary DiagnosticReport with deferred conclusion — unresolved workup.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 611.3 KB  
- **SHA-256:** `9fbf5f4534a2d9d0d4568897ced255c4283fd7f0f857a04d88e9816d633406cd`  
- **Total entries:** 168  
- **Embedded opinions:** 181

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 95 |
| Encounter | 13 |
| Claim | 13 |
| ExplanationOfBenefit | 13 |
| Immunization | 11 |
| DiagnosticReport | 6 |
| Procedure | 4 |
| Condition | 4 |
| Organization | 3 |
| Practitioner | 3 |
| Patient | 1 |
| CareTeam | 1 |
| CarePlan | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 156 |
| outcome | 13 |
| active | 6 |
| verificationStatus | 4 |
| data_quality | 1 |
| conclusion | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `86f02e9e1cfab6370b8ae37cb06a5390dfff040f01c6f59b11b9429b45e794eb`  
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
- **SHA-256:** `c0c6c0d38b9b5ae5cd288b11a48ba0f8a1b5b6402b7fdeec694ed5aa44101fc9`  
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

