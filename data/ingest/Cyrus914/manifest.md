# Patient: Cyrus914

**Role:** `investigation`  
**Patient ID:** `4e35d1c5-b54a-4bf5-98d6-de5c569dbf55`  
**Source filename:** `Cyrus914_Strosin214_a6051999-6d40-481a-8101-a2b35d332f3c.json`

> M, 53. 88 obs, 5 DxR, 4 meds, last 2019-09-08

## Constructions applied

Added 2 active chronic Conditions (essential hypertension SNOMED 59621000, hyperlipidemia SNOMED 55822004) for multi-morbidity eligibility. Added ambiguous CA 19-9 Observation (LOINC 24108-3, 84 U/mL, ref <37) and preliminary DiagnosticReport with deferred conclusion — unresolved workup.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 885.9 KB  
- **SHA-256:** `764e0a83fb908dfc11d1b7d4312213fce88403e2ac2ee8ef9c04e312ac0c58f4`  
- **Total entries:** 228  
- **Embedded opinions:** 257

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 89 |
| Claim | 33 |
| Encounter | 29 |
| ExplanationOfBenefit | 29 |
| Immunization | 12 |
| Condition | 8 |
| DiagnosticReport | 6 |
| Procedure | 5 |
| MedicationRequest | 4 |
| Organization | 3 |
| Practitioner | 3 |
| CareTeam | 3 |
| CarePlan | 3 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 212 |
| outcome | 29 |
| verificationStatus | 8 |
| active | 6 |
| data_quality | 1 |
| conclusion | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `c40e26ab1009982e19a669838dfe7d9b65ebf04dd9e497311f3c7db5c2c1971b`  
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
- **SHA-256:** `d5d772cedfca2f34bfeb5448bce0972abd79fdd830d6f1ee6061384c053cd054`  
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

