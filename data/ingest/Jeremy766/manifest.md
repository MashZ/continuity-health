# Patient: Jeremy766

**Role:** `cardiovascular`  
**Patient ID:** `c907755d-4b66-489a-be80-90dc7bd4ff38`  
**Source filename:** `Jeremy766_Murazik203_7a673feb-b029-418e-97a3-c9fae3c5b3db.json`

> M, 69. Codes: CV(53741008); DM(15777000). 386 obs, 35 DxR, 36 meds, last 2019-05-28

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.31 MB  
- **SHA-256:** `ac34ef628341debaae9461a1972e236317a1feab33ecc23e84389b3f3b3e5c64`  
- **Total entries:** 702  
- **Embedded opinions:** 758

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 386 |
| Claim | 87 |
| Encounter | 51 |
| ExplanationOfBenefit | 51 |
| MedicationRequest | 36 |
| DiagnosticReport | 35 |
| Procedure | 14 |
| Immunization | 13 |
| Condition | 8 |
| Goal | 5 |
| CareTeam | 4 |
| CarePlan | 4 |
| Organization | 3 |
| Practitioner | 3 |
| Patient | 1 |
| ImagingStudy | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 682 |
| outcome | 51 |
| verificationStatus | 8 |
| active | 6 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `825936174fec469fdf22e2d9c23bb7be640dbadccc5c95b523cca523ceeadee2`  
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
- **SHA-256:** `bf7bcb17821766bfe289a38ecfd4901b70e87234afd605d58db1c807dbb8cd9b`  
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

