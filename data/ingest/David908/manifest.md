# Patient: David908

**Role:** `recent_onset`  
**Patient ID:** `9d464bd6-c7fa-49de-998f-44dad6b4f703`  
**Source filename:** `David908_Guillen740_99ee2285-f0c4-45fc-85e9-9947a9fc191f.json`

> M, 79. Codes: CV(49436004;53741008;59621000); DM(15777000;44054006). 293 obs, 28 DxR, 15 meds, last 2019-01-30

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 1.68 MB  
- **SHA-256:** `01c541fe55fee8ec76a00177bbfbb02c92282b209ad797cd9e2d04169df8a9ae`  
- **Total entries:** 513  
- **Embedded opinions:** 553

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 293 |
| Claim | 48 |
| Encounter | 33 |
| ExplanationOfBenefit | 33 |
| DiagnosticReport | 28 |
| Condition | 18 |
| MedicationRequest | 15 |
| Procedure | 11 |
| Immunization | 10 |
| Goal | 7 |
| CareTeam | 5 |
| CarePlan | 5 |
| Organization | 3 |
| Practitioner | 3 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 481 |
| outcome | 33 |
| verificationStatus | 18 |
| lifecycleStatus | 7 |
| achievementStatus | 7 |
| active | 6 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `a994c2536707656333d275054ea56f3fce545529a2475fa53958400046be638b`  
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
- **SHA-256:** `696a3b26dcf0cc551d56325ec9d7cdb990c42d2a017ba52fc751ff1fd466dfd2`  
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

