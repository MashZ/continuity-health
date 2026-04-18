# Patient: Jarod376

**Role:** `normal`  
**Patient ID:** `5a45527f-a341-433b-bc62-106725a2956c`  
**Source filename:** `Jarod376_Wehner319_e95126b1-3935-4bfd-9353-b067f8dd362c.json`

> M, 43. 64 obs, 5 DxR, 1 meds, last 2018-06-26

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 499.0 KB  
- **SHA-256:** `86a252c86f9a2a3e6ddb603eb6bcd68412d8756e644f37e7f5f6a840ce41d68d`  
- **Total entries:** 133  
- **Embedded opinions:** 144

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 64 |
| Claim | 12 |
| Encounter | 11 |
| ExplanationOfBenefit | 11 |
| Immunization | 9 |
| DiagnosticReport | 5 |
| Condition | 4 |
| Organization | 3 |
| Practitioner | 3 |
| CareTeam | 3 |
| CarePlan | 3 |
| Procedure | 3 |
| Patient | 1 |
| MedicationRequest | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 122 |
| outcome | 11 |
| active | 6 |
| verificationStatus | 4 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `1825d43caaf335baffb8362acc36733b470f5deebd82af96c141a537cc2b47d2`  
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
- **SHA-256:** `5b0309d83d089848bb7043a3b1d8002949c4f18fd76ad166b5239781852cfecb`  
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

