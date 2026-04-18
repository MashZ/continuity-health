# Patient: Catherina275

**Role:** `normal`  
**Patient ID:** `41abacd0-8c09-499f-a24c-195a48a26b6a`  
**Source filename:** `Catherina275_West559_ce59a161-b6e4-4991-b9ad-8b0a090a7863.json`

> F, 56. 82 obs, 5 DxR, 0 meds, last 2019-04-19

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 565.4 KB  
- **SHA-256:** `823ca71b8839939f4f971c7707a97e67e1be0f6f5cb649a0dd60d68a8553f658`  
- **Total entries:** 149  
- **Embedded opinions:** 161

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 82 |
| Encounter | 12 |
| Claim | 12 |
| ExplanationOfBenefit | 12 |
| Immunization | 11 |
| Procedure | 7 |
| DiagnosticReport | 5 |
| Organization | 2 |
| Practitioner | 2 |
| Patient | 1 |
| Condition | 1 |
| CareTeam | 1 |
| CarePlan | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 143 |
| outcome | 12 |
| active | 4 |
| data_quality | 1 |
| verificationStatus | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `fdc4f18a0697efdeba66d7b0b5331698504a2b96a9b0be39da361315c2d7b4bc`  
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
- **SHA-256:** `64162fe00d0ec60e8369d63564ed1e64244b0d3fe272533e044f966b9bca0e96`  
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

