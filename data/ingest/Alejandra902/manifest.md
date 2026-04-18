# Patient: Alejandra902

**Role:** `recent_onset`  
**Patient ID:** `763a24b2-3655-44b7-a231-106b766b07a9`  
**Source filename:** `Alejandra902_Villa94_63056f6b-4cb3-4f9b-9a62-c3817991e6a1.json`

> F, 58. Codes: CV(59621000). 268 obs, 17 DxR, 4 meds, last 2018-09-16

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 1.46 MB  
- **SHA-256:** `8072d8db0464830828ec25305c6057c0ba625bee580c242397e19fa89c45e1f1`  
- **Total entries:** 430  
- **Embedded opinions:** 461

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 268 |
| Claim | 33 |
| Encounter | 29 |
| ExplanationOfBenefit | 29 |
| DiagnosticReport | 17 |
| Procedure | 17 |
| Immunization | 12 |
| Condition | 8 |
| MedicationRequest | 4 |
| CareTeam | 3 |
| CarePlan | 3 |
| Organization | 2 |
| Practitioner | 2 |
| Goal | 2 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 415 |
| outcome | 29 |
| verificationStatus | 8 |
| active | 4 |
| lifecycleStatus | 2 |
| achievementStatus | 2 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `97d13b661eccb9fcb50791661398d8a8f605114873d9123fc4b1061ce5a90d8c`  
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
- **SHA-256:** `53b93b7b7bf49d0322fec9d6720c63923718282f656715df4e9008692569ee47`  
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

