# Patient: Monet875

**Role:** `cardiovascular`  
**Patient ID:** `c3cd3789-8330-4fd9-b8f9-3e58f610c0a9`  
**Source filename:** `Monet875_Collins926_6fe47a09-54ff-4be2-8909-922937c1fa05.json`

> F, 65. Codes: CV(59621000); DM(15777000). 407 obs, 37 DxR, 27 meds, last 2019-05-07

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.25 MB  
- **SHA-256:** `34a1d26cd8bb952f5e65aa0ab37e7041203152c6d7ad47177816a0b745899643`  
- **Total entries:** 692  
- **Embedded opinions:** 743

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 407 |
| Claim | 71 |
| Encounter | 44 |
| ExplanationOfBenefit | 44 |
| DiagnosticReport | 37 |
| MedicationRequest | 27 |
| Procedure | 15 |
| Immunization | 12 |
| Condition | 11 |
| Goal | 7 |
| CareTeam | 6 |
| CarePlan | 6 |
| Organization | 2 |
| Practitioner | 2 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 669 |
| outcome | 44 |
| verificationStatus | 11 |
| lifecycleStatus | 7 |
| achievementStatus | 7 |
| active | 4 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `488eca8d54085d2cbdf71283bb4eadf4dedef703398bf433cda4eeefa86e5354`  
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
- **SHA-256:** `b6ee9e3ba4c5540f3cc492860ea194fb105facb2fefaffd29ef2ec51caa82eba`  
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

