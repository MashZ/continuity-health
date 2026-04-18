# Patient: Hershel911

**Role:** `normal`  
**Patient ID:** `5653aba1-4770-4a1f-a73c-c9b8bc1758e9`  
**Source filename:** `Hershel911_Kuvalis369_e49a3b38-bea1-480d-8a6e-0914e2d5cc46.json`

> M, 26. 63 obs, 2 DxR, 0 meds, last 2019-02-23

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 392.6 KB  
- **SHA-256:** `2c49e2b9508f68983e303d480862eaa6125b7731af2d54e3854a570d23d087f3`  
- **Total entries:** 105  
- **Embedded opinions:** 112

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 63 |
| Immunization | 10 |
| Encounter | 7 |
| Claim | 7 |
| ExplanationOfBenefit | 7 |
| Procedure | 3 |
| Organization | 2 |
| Practitioner | 2 |
| DiagnosticReport | 2 |
| Patient | 1 |
| Condition | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 99 |
| outcome | 7 |
| active | 4 |
| data_quality | 1 |
| verificationStatus | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `33d5bf1fa356ac2357dc2f054a67f264572077eb498ef4cda1b445314118315d`  
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
- **SHA-256:** `a3eb854c2a9ed44fbafc86cfcbee3c17ffdb49c605056e96ab4343f807c7490e`  
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

