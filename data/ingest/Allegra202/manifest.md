# Patient: Allegra202

**Role:** `consent_withdrawn`  
**Patient ID:** `c247e691-cf7a-4ba6-9a62-fcce809e119f`  
**Source filename:** `Allegra202_Nitzsche158_66d017d6-97ae-4de0-b02c-2c1caa5cddf6.json`

> F, 85. Codes: DM(15777000). 419 obs, 37 DxR, 25 meds, last 2019-05-21

## Constructions applied

Added active Consent (HIPAA research authorization, dated 2025-04-18, scope=patient-privacy, purpose=HRESCH+TREAT). Added rejected Consent (dated today, provision=deny) with extension link to the active consent. Added Provenance (activity=UPDATE/revise, entity.role=revision, agent=Patient) recording the withdrawal transition. Wearable window ends at consent withdrawal timestamp — no post-withdrawal data.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.18 MB  
- **SHA-256:** `c45c42ed666e897712189b6a15389b4b5a2963012079f25836af9352e849febb`  
- **Total entries:** 688  
- **Embedded opinions:** 736

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 419 |
| Claim | 68 |
| Encounter | 43 |
| ExplanationOfBenefit | 43 |
| DiagnosticReport | 37 |
| MedicationRequest | 25 |
| Immunization | 12 |
| Condition | 9 |
| Procedure | 7 |
| Goal | 5 |
| Organization | 4 |
| Practitioner | 4 |
| CareTeam | 4 |
| CarePlan | 4 |
| Consent | 2 |
| Patient | 1 |
| Provenance | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 664 |
| outcome | 43 |
| verificationStatus | 9 |
| active | 8 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| data_quality | 1 |
| recorded | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `8c5f0e942306f87fb930553d5e03fdad1e232563532828c63c771b75d5c161d3`  
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
- **SHA-256:** `4d4c6ced73a4c30c628a0ba02966a04aa98e78be7a04b62d0123f5b307795457`  
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

