# Patient: Ardath226

**Role:** `stale_data`  
**Patient ID:** `8ef11370-b5b1-4051-a0f0-7f9982aba39c`  
**Source filename:** `Ardath226_Zboncak558_cb96223c-c32b-45be-8aa7-36795883a060.json`

> F, 28. 38 obs, 1 DxR, 7 meds, last 2016-10-17

## Constructions applied

Added active Consent (HIPAA authorization, dated 2016-09-01) with provision.period.end=2021-09-01 — 5-year retention window now 4.5+ years past. No Observation data modified; patient's own clinical record already ends 2016-09-21. Wearable window ends today (fresh wearable over stale EHR).

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 403.8 KB  
- **SHA-256:** `c5d53e22b6592137ce3397e1ab41636f7aa81a8bedd3ca53bf921e0f0713def0`  
- **Total entries:** 107  
- **Embedded opinions:** 120

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 38 |
| Claim | 20 |
| Encounter | 13 |
| ExplanationOfBenefit | 13 |
| Immunization | 7 |
| MedicationRequest | 7 |
| Organization | 2 |
| Practitioner | 2 |
| Condition | 2 |
| Patient | 1 |
| DiagnosticReport | 1 |
| Consent | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 100 |
| outcome | 13 |
| active | 4 |
| verificationStatus | 2 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `6fedc642ee3083b5dbc662555f33eb1b49947167c9e9ec924c354c6e17db31d3`  
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
- **SHA-256:** `6e638d27b8a0a5603b57998e2ffc154889a8d5513ea6fe93a4ebd859954d648c`  
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

