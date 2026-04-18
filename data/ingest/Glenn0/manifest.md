# Patient: Glenn0

**Role:** `investigation`  
**Patient ID:** `1d0ad23c-3e84-49fd-9a84-1a61a153f9ce`  
**Source filename:** `Glenn0_Gulgowski816_cf1ba206-8af7-48ad-b231-27398784dbc6.json`

> M, 54. 82 obs, 5 DxR, 2 meds, last 2018-11-01

## Constructions applied

Added 2 active chronic Conditions (essential hypertension SNOMED 59621000, hyperlipidemia SNOMED 55822004) for multi-morbidity eligibility. Added ambiguous CA 19-9 Observation (LOINC 24108-3, 84 U/mL, ref <37) and preliminary DiagnosticReport with deferred conclusion — unresolved workup.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 608.4 KB  
- **SHA-256:** `b27672ae542769d337b467ff54171ecf94ced6ae863b4961c0db45239a18cce3`  
- **Total entries:** 163  
- **Embedded opinions:** 176

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 83 |
| Claim | 15 |
| Encounter | 13 |
| ExplanationOfBenefit | 13 |
| Immunization | 11 |
| Condition | 6 |
| DiagnosticReport | 6 |
| Procedure | 5 |
| Organization | 2 |
| Practitioner | 2 |
| MedicationRequest | 2 |
| CareTeam | 2 |
| CarePlan | 2 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 151 |
| outcome | 13 |
| verificationStatus | 6 |
| active | 4 |
| data_quality | 1 |
| conclusion | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `69aa5d74c1e10414cc4ee3d992a7b7a1630b128b393c17438e3ef377f97a49c3`  
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
- **SHA-256:** `4313395cb04e6766d31415578b18d9112e8947fce6be8eb2120e8c6f6b6c32ba`  
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

