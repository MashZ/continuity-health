# Patient: Season349

**Role:** `consent_withdrawn`  
**Patient ID:** `f17f12b5-ad30-44ef-8166-5f7fbcbda89e`  
**Source filename:** `Season349_Kulas532_fbf7da40-a027-4c60-a872-e04d718bb505.json`

> F, 58. Active: diabetes. 459 obs, 44 DxR, 21 meds — rich history.

## Constructions applied

Added active Consent (HIPAA research authorization, dated 2025-04-18, scope=patient-privacy, purpose=HRESCH+TREAT). Added rejected Consent (dated today, provision=deny) with extension link to the active consent. Added Provenance (activity=UPDATE/revise, entity.role=revision, agent=Patient) recording the withdrawal transition. Wearable window ends at consent withdrawal timestamp — no post-withdrawal data.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.87 MB  
- **SHA-256:** `409fc80063367672824b9256a9d91a86857ff5a2a895eefbf816ffe387f8bdb4`  
- **Total entries:** 826  
- **Embedded opinions:** 887

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 459 |
| Claim | 77 |
| Procedure | 58 |
| Encounter | 56 |
| ExplanationOfBenefit | 56 |
| DiagnosticReport | 44 |
| MedicationRequest | 21 |
| Condition | 16 |
| Immunization | 12 |
| CareTeam | 6 |
| CarePlan | 6 |
| Goal | 5 |
| Organization | 3 |
| Practitioner | 3 |
| Consent | 2 |
| Patient | 1 |
| Provenance | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 797 |
| outcome | 56 |
| verificationStatus | 16 |
| active | 6 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| data_quality | 1 |
| recorded | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `c2a10e430ef53c78186343505a7f7c5924145bc6f8b323e18c5106496d5c7492`  
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
- **Size:** 5.58 MB  
- **SHA-256:** `29d5482b25def7b61c32e338cb9c6fc7acc5492d3ed93e6769a061c1c6a0848e`  
- **Total entries:** 2,311  
- **Window:** `2026-03-19T00:00:00Z` → `2026-04-17T23:45:00Z`  
- **Embedded opinions:** 2,310

### Measurements

| Measurement | Samples |
|---|---:|
| Heart rate (hourly mean, wearable-derived) | 720 |
| Hourly steps (wearable-derived) | 720 |
| Hourly active minutes (wearable-derived) | 720 |
| Resting heart rate (overnight minimum) | 30 |
| Heart rate variability, RMSSD (overnight, PPG-derived) | 30 |
| Sleep efficiency (wearable-derived) | 30 |
| Sleep stages, duration, and fragmentation | 30 |
| SpO2 (nocturnal mean, wearable-derived) | 30 |

### Trust tier distribution

| Tier | Opinions |
|---|---:|
| medium | 1,500 |
| medium_high | 810 |

