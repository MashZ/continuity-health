# Patient: Francisco472

**Role:** `investigation`  
**Patient ID:** `0f424d06-c000-4ef8-914f-c8aa56d85efe`  
**Source filename:** `Francisco472_Haag279_d506ca54-caf0-4bbe-b827-10c68c67747e.json`

> M, 42. 72 obs, 5 DxR, 4 meds, last 2018-09-03

## Constructions applied

Added 2 active chronic Conditions (essential hypertension SNOMED 59621000, hyperlipidemia SNOMED 55822004) for multi-morbidity eligibility. Added ambiguous CA 19-9 Observation (LOINC 24108-3, 84 U/mL, ref <37) and preliminary DiagnosticReport with deferred conclusion — unresolved workup.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 581.7 KB  
- **SHA-256:** `6713289dcc7f8e67ac30e22c800c7e1664c380cb52fab55f306603540f3151fa`  
- **Total entries:** 156  
- **Embedded opinions:** 168

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 73 |
| Claim | 16 |
| Encounter | 12 |
| ExplanationOfBenefit | 12 |
| Immunization | 9 |
| Condition | 7 |
| DiagnosticReport | 6 |
| Procedure | 5 |
| MedicationRequest | 4 |
| CareTeam | 3 |
| CarePlan | 3 |
| Organization | 2 |
| Practitioner | 2 |
| Patient | 1 |
| ImagingStudy | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 143 |
| outcome | 12 |
| verificationStatus | 7 |
| active | 4 |
| data_quality | 1 |
| conclusion | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `1746f81fbcc7de07c7925aaf16c1f54c63e94caea1436dbd5613f84e1d261cd1`  
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
- **SHA-256:** `5823fd7a8a9e094a944a410438feff9901960d2f128ebbe6b7e3172941fd9b97`  
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

