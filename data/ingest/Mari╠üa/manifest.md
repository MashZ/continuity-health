# Patient: Mari╠üa

**Role:** `investigation`  
**Patient ID:** `d4155021-030f-4b81-b42f-0dab060115c6`  
**Source filename:** `Mari╠üa_Elena653_Serrato62_2e3e696e-4c91-4711-b107-4dda0902ead3.json`

> F, 53. 77 obs, 5 DxR, 2 meds, last 2019-05-12

## Constructions applied

Added 2 active chronic Conditions (essential hypertension SNOMED 59621000, hyperlipidemia SNOMED 55822004) for multi-morbidity eligibility. Added ambiguous CA 19-9 Observation (LOINC 24108-3, 84 U/mL, ref <37) and preliminary DiagnosticReport with deferred conclusion — unresolved workup.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 505.6 KB  
- **SHA-256:** `eb397faef84a53ce69c98d877668f9728738862830537f3d3c443a4a204cc32d`  
- **Total entries:** 141  
- **Embedded opinions:** 150

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 78 |
| Claim | 11 |
| Immunization | 10 |
| Encounter | 9 |
| ExplanationOfBenefit | 9 |
| DiagnosticReport | 6 |
| Condition | 4 |
| Organization | 3 |
| Practitioner | 3 |
| Procedure | 3 |
| MedicationRequest | 2 |
| Patient | 1 |
| CareTeam | 1 |
| CarePlan | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 129 |
| outcome | 9 |
| active | 6 |
| verificationStatus | 4 |
| data_quality | 1 |
| conclusion | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `ba7b0d21f51a992c637dccde70a5c4304e4197c945afdbd980a349dac148bca9`  
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
- **SHA-256:** `0d98c054b9cbbf6f6cedf82ed036d3b1dba6c2db07292e6b96b69fefb2b84825`  
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

