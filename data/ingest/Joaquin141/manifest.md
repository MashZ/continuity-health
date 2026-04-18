# Patient: Joaquin141

**Role:** `consent_withdrawn`  
**Patient ID:** `5c4c04df-84d3-4b7b-b16a-552ee006ed53`  
**Source filename:** `Joaquin141_Rice937_75b72703-7516-472e-b73f-c539638a5955.json`

> M, 56. Codes: DM(15777000;44054006). 443 obs, 43 DxR, 20 meds, last 2018-10-01

## Constructions applied

Added active Consent (HIPAA research authorization, dated 2025-04-18, scope=patient-privacy, purpose=HRESCH+TREAT). Added rejected Consent (dated today, provision=deny) with extension link to the active consent. Added Provenance (activity=UPDATE/revise, entity.role=revision, agent=Patient) recording the withdrawal transition. Wearable window ends at consent withdrawal timestamp — no post-withdrawal data.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.30 MB  
- **SHA-256:** `ccd26d1bf0e934d686606aafb0ef39d71d9e3f84f455b5bb70e322af4effaf40`  
- **Total entries:** 724  
- **Embedded opinions:** 775

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 443 |
| Claim | 63 |
| Encounter | 43 |
| ExplanationOfBenefit | 43 |
| DiagnosticReport | 43 |
| MedicationRequest | 20 |
| Condition | 16 |
| Immunization | 13 |
| Procedure | 8 |
| CareTeam | 6 |
| CarePlan | 6 |
| Goal | 5 |
| Organization | 4 |
| Practitioner | 4 |
| AllergyIntolerance | 3 |
| Consent | 2 |
| Patient | 1 |
| Provenance | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 690 |
| outcome | 43 |
| verificationStatus | 19 |
| active | 8 |
| lifecycleStatus | 5 |
| achievementStatus | 5 |
| criticality | 3 |
| data_quality | 1 |
| recorded | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `06b912f97dda5abe3ab97b874d92e220e478011d2a112a6bd26455aef4cf14e0`  
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
- **SHA-256:** `985093b6aa5965f30fc7ba0089027c722bbb34657dd3ac868d4b9408d19c846e`  
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

