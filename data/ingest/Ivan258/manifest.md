# Patient: Ivan258

**Role:** `normal`  
**Patient ID:** `1f5a666c-db9a-4d55-9cab-3ac45340e69f`  
**Source filename:** `Ivan258_Feil794_161eb77f-dec7-4104-92a7-00413b5637c1.json`

> M, 62. 94 obs, 5 DxR, 1 meds, last 2019-07-15

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 653.3 KB  
- **SHA-256:** `35b1de86bc74b1e7e72af8fc82ce3aa3f7b2434099b704a8ecba20c7f3eeb864`  
- **Total entries:** 174  
- **Embedded opinions:** 188

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 94 |
| Claim | 15 |
| Encounter | 14 |
| ExplanationOfBenefit | 14 |
| Immunization | 11 |
| Procedure | 8 |
| DiagnosticReport | 5 |
| Organization | 3 |
| Practitioner | 3 |
| Condition | 3 |
| Patient | 1 |
| MedicationRequest | 1 |
| CareTeam | 1 |
| CarePlan | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 164 |
| outcome | 14 |
| active | 6 |
| verificationStatus | 3 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `65e0a6dd8d3ff25be12c3e3543fbf0f00ba25c240bc0b8c995c12440648f4be7`  
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
- **SHA-256:** `f0545dc2159ebce8438cdc4ca20bc609471e9acb44ba0a41c4e791d024fc49d4`  
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

