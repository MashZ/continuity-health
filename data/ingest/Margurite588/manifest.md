# Patient: Margurite588

**Role:** `stale_data`  
**Patient ID:** `09cb7ea4-34f9-43ba-b577-3615ca22a8cc`  
**Source filename:** `Margurite588_Frami345_91d46f0d-b2c3-4f3a-829d-fb95f60535a7.json`

> F, 31. Codes: CV(59621000). 47 obs, 2 DxR, 7 meds, last 2016-10-06

## Constructions applied

Added active Consent (HIPAA authorization, dated 2016-09-01) with provision.period.end=2021-09-01 — 5-year retention window now 4.5+ years past. No Observation data modified; patient's own clinical record already ends 2016-09-21. Wearable window ends today (fresh wearable over stale EHR).

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 1.41 MB  
- **SHA-256:** `aa8f24c0e036f54ec810a86216cd6edeccb16912179a9a2281208750f3359d61`  
- **Total entries:** 295  
- **Embedded opinions:** 336

### Resource type breakdown

| Type | Count |
|---|---:|
| Procedure | 70 |
| Observation | 47 |
| Claim | 46 |
| Encounter | 39 |
| ExplanationOfBenefit | 39 |
| Condition | 15 |
| Immunization | 8 |
| MedicationRequest | 7 |
| Organization | 5 |
| Practitioner | 5 |
| CareTeam | 4 |
| CarePlan | 4 |
| Goal | 2 |
| DiagnosticReport | 2 |
| Patient | 1 |
| Consent | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 267 |
| outcome | 39 |
| verificationStatus | 15 |
| active | 10 |
| lifecycleStatus | 2 |
| achievementStatus | 2 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `f64562633ea1960bad2ad0ecbdd4708acba8bae031f2cc55543652a66f163e2c`  
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
- **SHA-256:** `b7cad80efaf756c2f0b0ffc418c570e3aa61e277bce48a688df0ce6c238d8955`  
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

