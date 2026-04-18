# Patient: Marco578

**Role:** `stale_data`  
**Patient ID:** `fd451783-fb9f-42b5-87b3-620b9813285c`  
**Source filename:** `Marco578_Williamson769_e33ad153-3319-48c5-aacb-600cdb212a46.json`

> M, 31. Active: prediabetes + 1 other. Last observation 2016-09-21.

## Constructions applied

Added active Consent (HIPAA authorization, dated 2016-09-01) with provision.period.end=2021-09-01 — 5-year retention window now 4.5+ years past. No Observation data modified; patient's own clinical record already ends 2016-09-21. Wearable window ends today (fresh wearable over stale EHR).

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 466.6 KB  
- **SHA-256:** `39ac1bca02fc44c5c135fd1c95e317e76317feb1681a35d8fc8753316ac126dc`  
- **Total entries:** 121  
- **Embedded opinions:** 139

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 40 |
| Claim | 18 |
| Encounter | 14 |
| ExplanationOfBenefit | 14 |
| Immunization | 6 |
| AllergyIntolerance | 4 |
| MedicationRequest | 4 |
| Organization | 3 |
| Practitioner | 3 |
| CareTeam | 3 |
| CarePlan | 3 |
| Condition | 3 |
| Procedure | 2 |
| DiagnosticReport | 2 |
| Patient | 1 |
| Consent | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 107 |
| outcome | 14 |
| verificationStatus | 7 |
| active | 6 |
| criticality | 4 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `04aa3c2d02528e53b0cb76359ce4b6735601e257bb82737afb1b67dfe75335e5`  
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
- **Size:** 5.58 MB  
- **SHA-256:** `cc4d0853da608a0b84815a7b0e1ee7cd2c85d88e8ba5adfd12d0bb832b58f3b2`  
- **Total entries:** 2,311  
- **Window:** `2026-03-19T00:00:00Z` → `2026-04-17T23:45:00Z`  
- **Embedded opinions:** 2,310

### Measurements

| Measurement | Samples |
|---|---:|
| Heart rate (hourly mean, wearable-derived) | 720 |
| Hourly steps (wearable-derived) | 720 |
| Hourly active minutes (wearable-derived) | 720 |
| Resting heart rate (overnight minimum) | 30 |
| Heart rate variability, RMSSD (overnight, PPG-derived) | 30 |
| Sleep efficiency (wearable-derived) | 30 |
| Sleep stages, duration, and fragmentation | 30 |
| SpO2 (nocturnal mean, wearable-derived) | 30 |

### Trust tier distribution

| Tier | Opinions |
|---|---:|
| medium | 1,500 |
| medium_high | 810 |

