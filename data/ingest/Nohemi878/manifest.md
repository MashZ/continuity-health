# Patient: Nohemi878

**Role:** `consent_withdrawn`  
**Patient ID:** `5b68a2f6-e3aa-400c-8a01-ef7fcbcdb01e`  
**Source filename:** `Nohemi878_Hintz995_e40767bd-4f64-48d5-a4fa-c0cfa8942445.json`

> F, 73. Codes: DM(15777000). 432 obs, 38 DxR, 38 meds, last 2019-06-22

## Constructions applied

Added active Consent (HIPAA research authorization, dated 2025-04-18, scope=patient-privacy, purpose=HRESCH+TREAT). Added rejected Consent (dated today, provision=deny) with extension link to the active consent. Added Provenance (activity=UPDATE/revise, entity.role=revision, agent=Patient) recording the withdrawal transition. Wearable window ends at consent withdrawal timestamp — no post-withdrawal data.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.78 MB  
- **SHA-256:** `8268305fd433e978df0b87a46250d9d49856c8f3490a2acb6be878db96acac6d`  
- **Total entries:** 833  
- **Embedded opinions:** 909

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 432 |
| Claim | 109 |
| Encounter | 71 |
| ExplanationOfBenefit | 71 |
| MedicationRequest | 38 |
| DiagnosticReport | 38 |
| Procedure | 14 |
| Condition | 13 |
| Immunization | 13 |
| CareTeam | 9 |
| CarePlan | 9 |
| Goal | 5 |
| Organization | 3 |
| Practitioner | 3 |
| Consent | 2 |
| Patient | 1 |
| ImagingStudy | 1 |
| Provenance | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 807 |
| outcome | 71 |
| verificationStatus | 13 |
| active | 6 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| data_quality | 1 |
| recorded | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `02950eb2d2594fa366befff0dc3f2331cd5f58b6f524260ab73b889d6bf747e1`  
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
- **SHA-256:** `036ed4fed8bfa1d37bbf08b6f3a5a25cc6b44e3bf26487ccf161010b0cca732b`  
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

