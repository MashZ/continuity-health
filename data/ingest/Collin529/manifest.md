# Patient: Collin529

**Role:** `cardiovascular`  
**Patient ID:** `d739b5b9-20e6-4ce0-befa-ff1b60a10203`  
**Source filename:** `Collin529_Bernhard322_51d10707-a8ca-46d9-81f7-e8da06a3386f.json`

> M, 64. Codes: CV(59621000); DM(15777000). 471 obs, 40 DxR, 13 meds, last 2019-06-21

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.18 MB  
- **SHA-256:** `549b12d738cdbe2bf309ebbbceb9d106c2ae9593b6a8a9863a52dfd8c2a19108`  
- **Total entries:** 700  
- **Embedded opinions:** 742

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 471 |
| Claim | 48 |
| DiagnosticReport | 40 |
| Encounter | 35 |
| ExplanationOfBenefit | 35 |
| MedicationRequest | 13 |
| Immunization | 11 |
| Condition | 10 |
| Procedure | 9 |
| CareTeam | 7 |
| Goal | 7 |
| CarePlan | 7 |
| Organization | 3 |
| Practitioner | 3 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 676 |
| outcome | 35 |
| verificationStatus | 10 |
| lifecycleStatus | 7 |
| achievementStatus | 7 |
| active | 6 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `cf37695c3fc5970f77223a4b4771e07ec9db150ed085e0d32176075c66241e06`  
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
- **SHA-256:** `285918c554ae3f5cb49835868738a6d0dd337c276b1c603cb8be3643cffd32d6`  
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

