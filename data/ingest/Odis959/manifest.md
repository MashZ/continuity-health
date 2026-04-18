# Patient: Odis959

**Role:** `recent_onset`  
**Patient ID:** `cb0811dd-e466-4b86-9835-01814ba94a3a`  
**Source filename:** `Odis959_Rutherford999_b003aafe-cb06-47fd-bd4f-f8044b64b596.json`

> M, 55. Codes: DM(15777000;44054006). 443 obs, 41 DxR, 3 meds, last 2019-08-24

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.16 MB  
- **SHA-256:** `a3ba09a4997f2fe8d459bf6d9ea6e5e3706e28e39ec6734f679c49b3013950a0`  
- **Total entries:** 677  
- **Embedded opinions:** 723

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 443 |
| Claim | 44 |
| Encounter | 41 |
| ExplanationOfBenefit | 41 |
| DiagnosticReport | 41 |
| Procedure | 15 |
| Condition | 14 |
| Immunization | 13 |
| Goal | 5 |
| Organization | 4 |
| Practitioner | 4 |
| CareTeam | 4 |
| CarePlan | 4 |
| MedicationRequest | 3 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 649 |
| outcome | 41 |
| verificationStatus | 14 |
| active | 8 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `4bcd757dc5a202faf4f94c788bb3eb3179f60f4f24b25f790807624bbb39282e`  
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
- **SHA-256:** `23db7acd09cc060165a93b5544448953cc98e1d5722f5e203d044b49524ca0bd`  
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

