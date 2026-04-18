# Patient: Emerald468

**Role:** `cardiovascular`  
**Patient ID:** `3ad85766-b6b0-4040-8d87-3f4f536feee2`  
**Source filename:** `Emerald468_Green467_ce700cdb-a37f-44c4-8b86-0be0851b06cf.json`

> F, 67. Codes: CV(59621000); DM(15777000). 385 obs, 35 DxR, 26 meds, last 2019-03-09

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.20 MB  
- **SHA-256:** `56d7a64c1fd233c61bb1e1fd54136d71d210fbf6cee276d04960de56ad571545`  
- **Total entries:** 671  
- **Embedded opinions:** 723

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 385 |
| Claim | 71 |
| Encounter | 45 |
| ExplanationOfBenefit | 45 |
| DiagnosticReport | 35 |
| MedicationRequest | 26 |
| Procedure | 15 |
| Immunization | 13 |
| Condition | 10 |
| Goal | 7 |
| CareTeam | 6 |
| CarePlan | 6 |
| Organization | 3 |
| Practitioner | 3 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 647 |
| outcome | 45 |
| verificationStatus | 10 |
| lifecycleStatus | 7 |
| achievementStatus | 7 |
| active | 6 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `e6739387500a2bdae15577b43b589ef270747ecd02789d4b3b4300870dc37f3b`  
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
- **SHA-256:** `12fa40b78caea890dc307da4d5fa6fd078336a84cdfe10cfc98a9b8ba52384ff`  
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

