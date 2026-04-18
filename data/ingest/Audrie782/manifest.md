# Patient: Audrie782

**Role:** `cardiovascular`  
**Patient ID:** `aef6dabb-9372-44bc-abf1-f3111812eec7`  
**Source filename:** `Audrie782_Metz686_f0893217-38a6-43d9-ab12-6fcc1fd5a8c5.json`

> F, 98. Codes: CV(59621000); DM(15777000). 400 obs, 36 DxR, 63 meds, last 2019-08-01

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.83 MB  
- **SHA-256:** `56bd900eff4a5c08f0e77cff57ba8a348a34ce96083a7b745069b88b2c79adb7`  
- **Total entries:** 848  
- **Embedded opinions:** 931

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 400 |
| Claim | 139 |
| Encounter | 76 |
| ExplanationOfBenefit | 76 |
| MedicationRequest | 63 |
| DiagnosticReport | 36 |
| Procedure | 11 |
| Immunization | 11 |
| Condition | 7 |
| Goal | 7 |
| CareTeam | 6 |
| CarePlan | 6 |
| Organization | 4 |
| Practitioner | 4 |
| Patient | 1 |
| ImagingStudy | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 825 |
| outcome | 76 |
| active | 8 |
| verificationStatus | 7 |
| lifecycleStatus | 7 |
| achievementStatus | 7 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `5ab10e5bf2184f52e423fbcbc7b868e582467eb01f374cc6e08d8b6f1c84cd5c`  
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
- **SHA-256:** `5cf276ded3a24fb0cb1ac4c163f7a9965a148c0c1bae4a0bb47e0a6bb50317f0`  
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

