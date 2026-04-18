# Patient: Wilfred787

**Role:** `normal`  
**Patient ID:** `d4c7d72b-2bcc-4602-887c-5355993c1607`  
**Source filename:** `Wilfred787_Sporer811_dd758b01-82cb-4818-85e7-a4458de2d19c.json`

> M, 32. 52 obs, 2 DxR, 3 meds, last 2019-02-26

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 495.7 KB  
- **SHA-256:** `0705817721a577fabf27e254331d2c8b26442078867691ed7aede120bb457dca`  
- **Total entries:** 127  
- **Embedded opinions:** 141

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 52 |
| Claim | 16 |
| Encounter | 13 |
| ExplanationOfBenefit | 13 |
| Immunization | 9 |
| Condition | 4 |
| CareTeam | 3 |
| CarePlan | 3 |
| MedicationRequest | 3 |
| Procedure | 3 |
| Organization | 2 |
| Practitioner | 2 |
| DiagnosticReport | 2 |
| Patient | 1 |
| AllergyIntolerance | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 117 |
| outcome | 13 |
| verificationStatus | 5 |
| active | 4 |
| data_quality | 1 |
| criticality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `092d6ee3e897a66a765f3a16f8ff71a96dade8400ba600bc7f031c335c28fca1`  
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
- **SHA-256:** `92a4b130ce71279f70d2b7b9008af46dd4cf49275370e29956762358314d480d`  
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

