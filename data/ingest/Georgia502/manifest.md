# Patient: Georgia502

**Role:** `recent_onset`  
**Patient ID:** `35a2f53e-9a2b-4383-ba33-3bee0b83845a`  
**Source filename:** `Georgia502_Pollich983_e11417ff-9331-4557-827a-6b608cba70b0.json`

> F, 78. Codes: CV(230690007). 302 obs, 25 DxR, 33 meds, last 2019-09-15

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 1.99 MB  
- **SHA-256:** `b0f148b0efccdfd48dcb555840161c74c0a984eb612febfc784f1b58dd6a0dc9`  
- **Total entries:** 591  
- **Embedded opinions:** 645

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 302 |
| Claim | 87 |
| Encounter | 54 |
| ExplanationOfBenefit | 54 |
| MedicationRequest | 33 |
| DiagnosticReport | 25 |
| Immunization | 11 |
| Condition | 10 |
| Procedure | 8 |
| Organization | 2 |
| Practitioner | 2 |
| Patient | 1 |
| CareTeam | 1 |
| CarePlan | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 576 |
| outcome | 54 |
| verificationStatus | 10 |
| active | 4 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `f508b187cae4ae846d0551147f489d46b4583af4b7a5d924b609864ca1c77da1`  
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
- **SHA-256:** `59852649cb79bb1a26cc701209d87f2aa0faed11872264eee29ea0eb812b51d3`  
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

