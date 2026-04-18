# Patient: Jacquetta148

**Role:** `cardiovascular`  
**Patient ID:** `a5dee7bf-d024-42ae-a5c1-a30c4fe3eb83`  
**Source filename:** `Jacquetta148_Kunde533_7c2b61e5-e67e-422d-8c4e-71bc4635628b.json`

> F, 65. Codes: CV(59621000); DM(15777000). 407 obs, 37 DxR, 21 meds, last 2019-08-06

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.42 MB  
- **SHA-256:** `04be3caf715c8c731c9718941b5e8029a0b23b1cf2f0af8d8db6a049c8320f05`  
- **Total entries:** 733  
- **Embedded opinions:** 795

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 407 |
| Claim | 76 |
| Encounter | 55 |
| ExplanationOfBenefit | 55 |
| DiagnosticReport | 37 |
| MedicationRequest | 21 |
| Condition | 17 |
| CareTeam | 14 |
| CarePlan | 14 |
| Immunization | 12 |
| Procedure | 9 |
| Goal | 7 |
| Organization | 4 |
| Practitioner | 4 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 700 |
| outcome | 55 |
| verificationStatus | 17 |
| active | 8 |
| lifecycleStatus | 7 |
| achievementStatus | 7 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `175f1a6927728bbe2a50dcb8a2a377f54ead3d96d2d8b43db63f5da7258a0863`  
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
- **SHA-256:** `0dd3e6652a268013ebd08043feeda846d43391953cda04f4319b5cb8748df04a`  
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

