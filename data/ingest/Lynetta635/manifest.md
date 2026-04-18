# Patient: Lynetta635

**Role:** `normal`  
**Patient ID:** `5d265007-0d56-4564-9503-d02f7bc4a7d0`  
**Source filename:** `Lynetta635_Metz686_4599a7cc-05ba-48f0-a9dc-0e6457047479.json`

> F, 73. 98 obs, 5 DxR, 1 meds, last 2019-08-28

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 757.4 KB  
- **SHA-256:** `ce5f596c344f800e86564cda49b0f9ae56a8151a6c76435cf15c7f07ae1fd99a`  
- **Total entries:** 196  
- **Embedded opinions:** 214

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 98 |
| Claim | 19 |
| Encounter | 18 |
| ExplanationOfBenefit | 18 |
| Immunization | 13 |
| Procedure | 10 |
| Condition | 5 |
| DiagnosticReport | 5 |
| Organization | 3 |
| Practitioner | 3 |
| Patient | 1 |
| MedicationRequest | 1 |
| CareTeam | 1 |
| CarePlan | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 184 |
| outcome | 18 |
| active | 6 |
| verificationStatus | 5 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `efb59fc1564042d05d6c3f863d7f8765389aea44354dff38e1d41245241fb0b6`  
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
- **SHA-256:** `e2754df113d7739ae5c0e4a157abab1590a28ee9bb85e4129a8a67079a2f04ca`  
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

