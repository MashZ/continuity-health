# Patient: Diego848

**Role:** `normal`  
**Patient ID:** `7426b143-baad-474a-9484-995b27329915`  
**Source filename:** `Diego848_Colo╠ün139_83a9a02b-5013-4b66-be6f-6515eed1505f.json`

> M, 51. 59 obs, 4 DxR, 2 meds, last 2018-11-18

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 506.9 KB  
- **SHA-256:** `9051a540739dfbe6a9949817f3e57db38d80fcfeb6434d59a51c39825f3a5f3f`  
- **Total entries:** 130  
- **Embedded opinions:** 140

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 59 |
| Immunization | 12 |
| Claim | 12 |
| Encounter | 10 |
| ExplanationOfBenefit | 10 |
| Procedure | 6 |
| Organization | 4 |
| Practitioner | 4 |
| DiagnosticReport | 4 |
| Condition | 2 |
| MedicationRequest | 2 |
| CareTeam | 2 |
| CarePlan | 2 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 119 |
| outcome | 10 |
| active | 8 |
| verificationStatus | 2 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `194b3f73cb7d2f641a0ffa1ad42e97d17cda9b98d496993483365e6b25667358`  
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
- **SHA-256:** `2603be7191e2ff0f67fd99149952a57e2c59876bc3e6e9ea96667226a553d177`  
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

