# Patient: Harold594

**Role:** `normal`  
**Patient ID:** `afd8b4ca-e86a-412f-9ba6-49df67a941d0`  
**Source filename:** `Harold594_Hilll811_5e82f4d8-c23f-4e6d-bfa2-ba82724437f8.json`

> M, 26. 46 obs, 1 DxR, 1 meds, last 2019-02-20

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 380.2 KB  
- **SHA-256:** `68767324220c8b17df15430888c524b4700fe2440d720a88d14db2fae514b5ea`  
- **Total entries:** 96  
- **Embedded opinions:** 104

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 46 |
| Claim | 9 |
| Encounter | 8 |
| Immunization | 8 |
| ExplanationOfBenefit | 8 |
| Procedure | 5 |
| Condition | 3 |
| Organization | 2 |
| Practitioner | 2 |
| Patient | 1 |
| DiagnosticReport | 1 |
| MedicationRequest | 1 |
| CareTeam | 1 |
| CarePlan | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 88 |
| outcome | 8 |
| active | 4 |
| verificationStatus | 3 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `436edab5a17b9408ce9976c2453f3b8b384561c90507f99b8ff1b43c3c6374d7`  
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
- **SHA-256:** `d46adb962b892272e50c18146c9d9399b217c4626781bbaca59dad92245e15b7`  
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

