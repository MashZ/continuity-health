# Patient: Cynthia180

**Role:** `investigation`  
**Patient ID:** `2a2c2251-8e99-4933-9599-f88af6c62e86`  
**Source filename:** `Cynthia180_Thiel172_0d99905b-876b-425d-9915-a8146dea96f3.json`

> F, 31. 69 obs, 5 DxR, 7 meds, last 2019-08-11

## Constructions applied

Added 2 active chronic Conditions (essential hypertension SNOMED 59621000, hyperlipidemia SNOMED 55822004) for multi-morbidity eligibility. Added ambiguous CA 19-9 Observation (LOINC 24108-3, 84 U/mL, ref <37) and preliminary DiagnosticReport with deferred conclusion — unresolved workup.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 1.75 MB  
- **SHA-256:** `817cd4b674e985bbd7876230ba58e29d0dce248d1862c00b88e49876cc118728`  
- **Total entries:** 354  
- **Embedded opinions:** 396

### Resource type breakdown

| Type | Count |
|---|---:|
| Procedure | 108 |
| Observation | 70 |
| Claim | 49 |
| Encounter | 42 |
| ExplanationOfBenefit | 42 |
| Immunization | 9 |
| Condition | 8 |
| MedicationRequest | 7 |
| DiagnosticReport | 6 |
| CareTeam | 4 |
| CarePlan | 4 |
| Organization | 2 |
| Practitioner | 2 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 340 |
| outcome | 42 |
| verificationStatus | 8 |
| active | 4 |
| data_quality | 1 |
| conclusion | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `2eaa204c00f9088dfacad08bee948bb368691d159621d05fa019d9b585cab60c`  
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
- **SHA-256:** `ddf7fd2c1629b0a1f98a8be2f1f386c09a87176b9fcb2139f971dc903323e09b`  
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

