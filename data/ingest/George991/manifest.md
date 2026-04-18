# Patient: George991

**Role:** `normal`  
**Patient ID:** `936b9d3e-3f38-4a8c-a3de-71d3896df92b`  
**Source filename:** `George991_Kozey370_2424092c-906a-4a1c-bd6f-360a38c639e4.json`

> F, 40. 60 obs, 5 DxR, 3 meds, last 2019-05-20

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 1.29 MB  
- **SHA-256:** `a75db73af34fedea954fdbe0cda58444317f458802096f35204d85e5c8855324`  
- **Total entries:** 292  
- **Embedded opinions:** 345

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 60 |
| Claim | 56 |
| Encounter | 53 |
| ExplanationOfBenefit | 53 |
| Procedure | 43 |
| Immunization | 6 |
| DiagnosticReport | 5 |
| Condition | 4 |
| MedicationRequest | 3 |
| Organization | 2 |
| Practitioner | 2 |
| CareTeam | 2 |
| CarePlan | 2 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 283 |
| outcome | 53 |
| active | 4 |
| verificationStatus | 4 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `a92120918cfe9ccfb3cb4e15a3c0cf98a4a842c4816b82b19a71c586a12d686b`  
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
- **SHA-256:** `3b5031a195691c89c4b30753a3fbf0606d139f80d6bdf2cfa429aafd539f4255`  
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

