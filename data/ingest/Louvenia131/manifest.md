# Patient: Louvenia131

**Role:** `stale_data`  
**Patient ID:** `fb51046a-0dc2-4a67-91b6-46e5087d537e`  
**Source filename:** `Louvenia131_McClure239_a5ea7ef1-e265-4812-aed2-64fb157f1774.json`

> F, 31. 42 obs, 2 DxR, 8 meds, last 2016-09-28

## Constructions applied

Added active Consent (HIPAA authorization, dated 2016-09-01) with provision.period.end=2021-09-01 — 5-year retention window now 4.5+ years past. No Observation data modified; patient's own clinical record already ends 2016-09-21. Wearable window ends today (fresh wearable over stale EHR).

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 1.27 MB  
- **SHA-256:** `e49c67a52e6de1fc2eadbf5ceca7b4c7dd39bf02c8763d1f9ae3c9394deb2c7a`  
- **Total entries:** 258  
- **Embedded opinions:** 290

### Resource type breakdown

| Type | Count |
|---|---:|
| Procedure | 72 |
| Observation | 42 |
| Claim | 40 |
| Encounter | 32 |
| ExplanationOfBenefit | 32 |
| Condition | 13 |
| MedicationRequest | 8 |
| Immunization | 6 |
| Organization | 2 |
| Practitioner | 2 |
| DiagnosticReport | 2 |
| CareTeam | 2 |
| CarePlan | 2 |
| Patient | 1 |
| Device | 1 |
| Consent | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 240 |
| outcome | 32 |
| verificationStatus | 13 |
| active | 4 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `03be199df2097a98717ab30d69239063a053c32dda287d533212f12651ad9589`  
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
- **SHA-256:** `07e1788a272fee1a970150b443e219de89efa94e7c9a5cd941a66138ac91bc5c`  
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

