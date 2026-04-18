# Patient: Carla633

**Role:** `consent_withdrawn`  
**Patient ID:** `a1bb36d3-1785-44e2-b487-1ef6cda1caf4`  
**Source filename:** `Carla633_Barreto785_04e1c54c-e580-48eb-b5bf-a0dee975aaa4.json`

> F, 67. Codes: DM(15777000). 389 obs, 36 DxR, 18 meds, last 2019-09-04

## Constructions applied

Added active Consent (HIPAA research authorization, dated 2025-04-18, scope=patient-privacy, purpose=HRESCH+TREAT). Added rejected Consent (dated today, provision=deny) with extension link to the active consent. Added Provenance (activity=UPDATE/revise, entity.role=revision, agent=Patient) recording the withdrawal transition. Wearable window ends at consent withdrawal timestamp — no post-withdrawal data.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 1.94 MB  
- **SHA-256:** `1ce7931378eaf6f6625a6299b865375c66ec943e9336ae0c71d33270e21d1a27`  
- **Total entries:** 612  
- **Embedded opinions:** 650

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 389 |
| Claim | 51 |
| DiagnosticReport | 36 |
| Encounter | 33 |
| ExplanationOfBenefit | 33 |
| MedicationRequest | 18 |
| Immunization | 13 |
| Procedure | 12 |
| Condition | 5 |
| Goal | 5 |
| CareTeam | 4 |
| CarePlan | 4 |
| Organization | 2 |
| Practitioner | 2 |
| Consent | 2 |
| Patient | 1 |
| ImagingStudy | 1 |
| Provenance | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 596 |
| outcome | 33 |
| verificationStatus | 5 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| active | 4 |
| data_quality | 1 |
| recorded | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `8bd51282993be07e128afbe2b3167f07f3ba06198ba6592bf624698b1e67b006`  
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
- **SHA-256:** `8e8de617eb7fd0f3d1446e16fa81e5734dd73e928a0393ad6e6472824e0be4d8`  
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

