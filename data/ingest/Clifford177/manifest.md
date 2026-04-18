# Patient: Clifford177

**Role:** `consent_withdrawn`  
**Patient ID:** `44b9787b-41ad-490c-88bd-db0be7736fcf`  
**Source filename:** `Clifford177_Cole117_888e0907-1552-43d1-ae5d-395a3474553f.json`

> M, 84. Codes: DM(15777000). 417 obs, 37 DxR, 21 meds, last 2019-09-09

## Constructions applied

Added active Consent (HIPAA research authorization, dated 2025-04-18, scope=patient-privacy, purpose=HRESCH+TREAT). Added rejected Consent (dated today, provision=deny) with extension link to the active consent. Added Provenance (activity=UPDATE/revise, entity.role=revision, agent=Patient) recording the withdrawal transition. Wearable window ends at consent withdrawal timestamp — no post-withdrawal data.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.14 MB  
- **SHA-256:** `e6da479e009b63bfff1cc5f9a0c13c3bd8b9e2db2701406522fc4ba946ed5168`  
- **Total entries:** 677  
- **Embedded opinions:** 726

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 417 |
| Claim | 65 |
| Encounter | 44 |
| ExplanationOfBenefit | 44 |
| DiagnosticReport | 37 |
| MedicationRequest | 21 |
| Condition | 11 |
| Immunization | 11 |
| Goal | 5 |
| Procedure | 5 |
| Organization | 3 |
| Practitioner | 3 |
| CareTeam | 3 |
| CarePlan | 3 |
| Consent | 2 |
| Patient | 1 |
| Device | 1 |
| Provenance | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 653 |
| outcome | 44 |
| verificationStatus | 11 |
| active | 6 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| data_quality | 1 |
| recorded | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `d9095b34ea5ce65ecde84232736f0ace558ec2a9449939d251c432fcbbe8743b`  
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
- **SHA-256:** `3e441dee4b71ff9556997c8efb194d1c82260363574ef6a611abdc12c90c49e5`  
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

