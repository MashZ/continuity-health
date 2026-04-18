# Patient: Brett333

**Role:** `cardiovascular`  
**Patient ID:** `91a87cc4-dc79-43fb-a65e-37b5bd71d1fd`  
**Source filename:** `Brett333_Lindgren255_05c74818-5344-4b69-9c5e-6ba04932bf60.json`

> M, 95. Codes: CV(49436004); DM(15777000). 385 obs, 35 DxR, 32 meds, last 2019-05-20

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.12 MB  
- **SHA-256:** `207ac35de28e98d54f5cfa26eb6cca8d3041de115d2e515f7ad9d3ae9f8bc326`  
- **Total entries:** 659  
- **Embedded opinions:** 707

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 385 |
| Claim | 75 |
| Encounter | 43 |
| ExplanationOfBenefit | 43 |
| DiagnosticReport | 35 |
| MedicationRequest | 32 |
| Immunization | 11 |
| Procedure | 10 |
| Condition | 8 |
| Goal | 5 |
| CareTeam | 3 |
| CarePlan | 3 |
| Organization | 2 |
| Practitioner | 2 |
| Patient | 1 |
| ImagingStudy | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 641 |
| outcome | 43 |
| verificationStatus | 8 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| active | 4 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `74ea5ac2026d1b4f08c3fc7bd89e10c0c9006779b231897ecd7d4769528d2df8`  
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
- **SHA-256:** `3dcbd6d715361dd42e698c24ecd8c377f8f91153d5e563e399c22fc28626cf8f`  
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

