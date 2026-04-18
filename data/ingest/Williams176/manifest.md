# Patient: Williams176

**Role:** `normal`  
**Patient ID:** `406a59f9-e2b1-49a9-a8be-f228826f898c`  
**Source filename:** `Williams176_Legros616_a0667059-5b72-4c8e-941b-66efd98b43da.json`

> M, 51. 76 obs, 5 DxR, 2 meds, last 2019-05-07

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 557.9 KB  
- **SHA-256:** `1848097d148cabf517fcbabdd9b61ee7881d308731440661c362d6084fd1b728`  
- **Total entries:** 150  
- **Embedded opinions:** 162

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 76 |
| Claim | 14 |
| Encounter | 12 |
| ExplanationOfBenefit | 12 |
| Immunization | 12 |
| DiagnosticReport | 5 |
| Condition | 4 |
| Organization | 3 |
| Practitioner | 3 |
| Procedure | 2 |
| MedicationRequest | 2 |
| CareTeam | 2 |
| CarePlan | 2 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 139 |
| outcome | 12 |
| active | 6 |
| verificationStatus | 4 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `f1faeb38e94920496560bd24fbbccd39dfc20140d0d97397466ce1a0b63594a1`  
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
- **SHA-256:** `893901d723118a541ca1cc529f8db58394c05b3a136fb2de152374c0234fd9f8`  
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

