# Patient: Garth972

**Role:** `normal`  
**Patient ID:** `680b86e1-dc49-425a-baf2-1b0bfd9e5437`  
**Source filename:** `Garth972_Gleason633_5078e1b1-a9ac-410a-9bde-dec8cf327519.json`

> M, 65. No flagged chronic conditions.

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 612.4 KB  
- **SHA-256:** `5480de677a1d18c96e77ee777f72e14412c86cc934a2d2093ea0d47aa0bbb522`  
- **Total entries:** 163  
- **Embedded opinions:** 177

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 89 |
| Claim | 15 |
| Encounter | 14 |
| ExplanationOfBenefit | 14 |
| Immunization | 10 |
| Procedure | 7 |
| DiagnosticReport | 5 |
| Condition | 3 |
| Organization | 2 |
| Practitioner | 2 |
| Patient | 1 |
| MedicationRequest | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 155 |
| outcome | 14 |
| active | 4 |
| verificationStatus | 3 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `5727e20e933c10c8fa4a040ad34d3626501323f350dfe6053ffd658e93e54a4c`  
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
- **SHA-256:** `192fb3bb1dfc859016ca387dce90c11b89622fa53e9d48c270f6bf218be663e3`  
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

