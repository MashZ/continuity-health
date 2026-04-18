# Patient: Annabell933

**Role:** `recent_onset`  
**Patient ID:** `8b93480d-add7-40cd-998a-d8e5129a03d8`  
**Source filename:** `Annabell933_Pfannerstill264_8b45ace6-f8f1-4cfb-bad6-36819f23d804.json`

> F, 78. Codes: DM(15777000). 439 obs, 33 DxR, 11 meds, last 2019-09-04

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.33 MB  
- **SHA-256:** `b39b89c630f9859fe33b88b9b7520d6e1d6abc7a4c00a8b83591882945df6e41`  
- **Total entries:** 709  
- **Embedded opinions:** 756

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 439 |
| Claim | 53 |
| Encounter | 42 |
| ExplanationOfBenefit | 42 |
| DiagnosticReport | 33 |
| Procedure | 23 |
| Condition | 20 |
| Immunization | 13 |
| MedicationRequest | 11 |
| CareTeam | 9 |
| CarePlan | 9 |
| Goal | 5 |
| Organization | 4 |
| Practitioner | 4 |
| Patient | 1 |
| ImagingStudy | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 675 |
| outcome | 42 |
| verificationStatus | 20 |
| active | 8 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `18e1b6d38d74dba3157293fe3fe40629397b6166fe43b95321fa7105a5fe3791`  
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
- **SHA-256:** `f64eeae4727ae2b9e28f6bbdf6151b61a44f6550e4be9fe8df9d0a16b8ebb274`  
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

