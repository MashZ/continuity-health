# Patient: Eldon28

**Role:** `normal`  
**Patient ID:** `16e05eb1-7254-4a51-98b3-ea9c59f2ae3f`  
**Source filename:** `Eldon28_Greenholt190_f5b11f91-d83c-447b-9a13-3151a8da0248.json`

> M, 26. 69 obs, 2 DxR, 1 meds, last 2019-01-09

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 541.9 KB  
- **SHA-256:** `0a56e73551608cea0cf75ae9d6dd992d47af75c78bef8feec7d5d204b6f55411`  
- **Total entries:** 140  
- **Embedded opinions:** 153

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 69 |
| Claim | 14 |
| Encounter | 13 |
| ExplanationOfBenefit | 13 |
| Immunization | 10 |
| Procedure | 5 |
| Condition | 4 |
| Organization | 2 |
| Practitioner | 2 |
| DiagnosticReport | 2 |
| CareTeam | 2 |
| CarePlan | 2 |
| Patient | 1 |
| MedicationRequest | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 131 |
| outcome | 13 |
| active | 4 |
| verificationStatus | 4 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `66d572ec77e39033cf222946c14a5230fc3a95da0acc4d65eb99d4e2d74074a6`  
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
- **SHA-256:** `ca5aaa82757100d3e9a414245ba861d6d09ec952cf1bdf6008d05b00d2b429a7`  
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

