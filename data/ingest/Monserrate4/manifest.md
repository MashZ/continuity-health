# Patient: Monserrate4

**Role:** `recent_onset`  
**Patient ID:** `bd70643a-8cf8-4dbb-9f90-f81885fe9275`  
**Source filename:** `Monserrate4_Carter549_aa465d13-1030-4fd4-a352-a1c615ea6df2.json`

> F, 104. Codes: CV(49436004;59621000); DM(15777000). 385 obs, 35 DxR, 68 meds, last 2019-01-19

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 3.01 MB  
- **SHA-256:** `18c92f177f93c30d93d1208382fb3a9eb58f0085ec948f9bd337ba868eb921b5`  
- **Total entries:** 880  
- **Embedded opinions:** 974

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 385 |
| Claim | 155 |
| Encounter | 87 |
| ExplanationOfBenefit | 87 |
| MedicationRequest | 68 |
| DiagnosticReport | 35 |
| Condition | 17 |
| Procedure | 17 |
| Goal | 7 |
| Immunization | 7 |
| CareTeam | 5 |
| CarePlan | 5 |
| Organization | 2 |
| Practitioner | 2 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 851 |
| outcome | 87 |
| verificationStatus | 17 |
| lifecycleStatus | 7 |
| achievementStatus | 7 |
| active | 4 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `a390a1859fe31bc30ba45db2cead77c43deee53798b1d16e1f89d49ba65d1bfc`  
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
- **SHA-256:** `74874e08f7ace955827a5933c56fd3cd05e72d1de248d138f96e12240ad0ded0`  
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

