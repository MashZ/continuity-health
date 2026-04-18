# Patient: Vance413

**Role:** `normal`  
**Patient ID:** `80062d96-501f-46ff-98f0-a6e24edb56a1`  
**Source filename:** `Vance413_Corkery305_7fda5c1b-2e57-4ed7-9b5d-8852e96fd3af.json`

> M, 28. 50 obs, 2 DxR, 2 meds, last 2019-05-24

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 424.9 KB  
- **SHA-256:** `db155826ae981512ecf256b7a3e7045003062babe1693e22a174bbdc576b8d0a`  
- **Total entries:** 110  
- **Embedded opinions:** 120

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 50 |
| Claim | 12 |
| Encounter | 10 |
| ExplanationOfBenefit | 10 |
| Immunization | 7 |
| Condition | 5 |
| Procedure | 4 |
| Organization | 2 |
| Practitioner | 2 |
| DiagnosticReport | 2 |
| MedicationRequest | 2 |
| Patient | 1 |
| CareTeam | 1 |
| CarePlan | 1 |
| ImagingStudy | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 100 |
| outcome | 10 |
| verificationStatus | 5 |
| active | 4 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `530c819e9891f9662a53eb96fb023887dfae5acd359a14f290a68e24901e56ff`  
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
- **SHA-256:** `164a6f0e8c6d3d143c12b5ec667dfe13fca209b6ab47800023e15cefcdfba154`  
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

