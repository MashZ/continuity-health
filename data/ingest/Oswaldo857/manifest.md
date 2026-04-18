# Patient: Oswaldo857

**Role:** `normal`  
**Patient ID:** `df8d2094-9f0e-4fdd-8cbb-3dd43fcfb413`  
**Source filename:** `Oswaldo857_Orn563_78c12855-9079-46d2-aa1d-57cde5fbfc93.json`

> M, 25. 63 obs, 2 DxR, 3 meds, last 2018-12-24

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 426.5 KB  
- **SHA-256:** `ed809fc42e90a633b5a16e20825557b4ef3baa6206237181d6fe47739d2c1972`  
- **Total entries:** 116  
- **Embedded opinions:** 124

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 63 |
| Claim | 11 |
| Immunization | 10 |
| Encounter | 8 |
| ExplanationOfBenefit | 8 |
| Organization | 3 |
| Practitioner | 3 |
| MedicationRequest | 3 |
| DiagnosticReport | 2 |
| Condition | 2 |
| Procedure | 2 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 107 |
| outcome | 8 |
| active | 6 |
| verificationStatus | 2 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `7fa592137455697d6b3ff6081baf4ca1cb23e743bc216f0366438908f0731f62`  
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
- **SHA-256:** `5448829ebfab533c83ef9082edf697a5b38f3371d57107fe6508d93d26ecf47a`  
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

