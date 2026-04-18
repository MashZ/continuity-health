# Patient: Maryjane289

**Role:** `normal`  
**Patient ID:** `74641925-6d76-477e-a063-7ce2956ef345`  
**Source filename:** `Maryjane289_Kassulke119_6b730d2f-67ad-4b2b-83be-8e04dc511441.json`

> F, 53. 77 obs, 5 DxR, 1 meds, last 2019-01-29

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 517.3 KB  
- **SHA-256:** `01843cd5bd914fb42c14db4a7c2d39b3128366429e610f995d068c4896396a9f`  
- **Total entries:** 138  
- **Embedded opinions:** 148

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 77 |
| Claim | 11 |
| Encounter | 10 |
| Immunization | 10 |
| ExplanationOfBenefit | 10 |
| Procedure | 6 |
| DiagnosticReport | 5 |
| Condition | 3 |
| Organization | 2 |
| Practitioner | 2 |
| Patient | 1 |
| MedicationRequest | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 130 |
| outcome | 10 |
| active | 4 |
| verificationStatus | 3 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `95cfc50c337502a27765bbed53b7b560dda39f46a521ba3f6f3a07dfe40e0508`  
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
- **SHA-256:** `767b03e26f252551e3d4c68dfa18e89a58f5b801cbff0699eb913ecc42e25f96`  
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

