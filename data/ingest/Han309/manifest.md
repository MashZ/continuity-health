# Patient: Han309

**Role:** `normal`  
**Patient ID:** `7aa12d2b-b9f0-462d-899e-a94d0a3be158`  
**Source filename:** `Han309_Spencer878_8e61d7b1-5d03-4b30-80fc-38237c2e624e.json`

> F, 46. No flagged chronic conditions.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 440.5 KB  
- **SHA-256:** `fda03e1ca78e4cd1d1ec0a5c92af9a60456fde1c23db3f18f929ba85e8ece2b5`  
- **Total entries:** 120  
- **Embedded opinions:** 127

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 70 |
| Immunization | 9 |
| Claim | 8 |
| Encounter | 7 |
| ExplanationOfBenefit | 7 |
| Procedure | 5 |
| DiagnosticReport | 5 |
| Organization | 2 |
| Practitioner | 2 |
| Patient | 1 |
| Condition | 1 |
| MedicationRequest | 1 |
| CareTeam | 1 |
| CarePlan | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 114 |
| outcome | 7 |
| active | 4 |
| data_quality | 1 |
| verificationStatus | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `04a7b388993bd22ad9ad72ceeb2f3c307156f57c380c8bc3854d68f0fb25cb1b`  
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
- **SHA-256:** `db567fa419ace7f76a5daaa3b914421023ae943bd6b15f89ece2e0a28b1e58f3`  
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

