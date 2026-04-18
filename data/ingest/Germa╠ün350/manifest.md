# Patient: Germa╠ün350

**Role:** `cardiovascular`  
**Patient ID:** `dcfd640f-6c5d-4544-9ce6-65d0181ab648`  
**Source filename:** `Germa╠ün350_Aguirre875_abeb1256-5658-471f-9ec7-928518c5e404.json`

> M, 107. Codes: CV(53741008;59621000); DM(15777000). 399 obs, 36 DxR, 45 meds, last 2019-09-05

## EHR bundle

- **File:** `ehr_bundle.fhir.json`  
- **Size:** 2.44 MB  
- **SHA-256:** `596dff4527a48b1727d03f2e357a8dc75ba9255f47117acb5b7e1ce05393199f`  
- **Total entries:** 754  
- **Embedded opinions:** 821

### Resource type breakdown

| Type | Count |
|---|---:|
| Observation | 399 |
| Claim | 105 |
| Encounter | 60 |
| ExplanationOfBenefit | 60 |
| MedicationRequest | 45 |
| DiagnosticReport | 36 |
| Condition | 10 |
| CareTeam | 7 |
| Goal | 7 |
| CarePlan | 7 |
| Procedure | 7 |
| Immunization | 4 |
| Organization | 3 |
| Practitioner | 3 |
| Patient | 1 |

### Opinions by field

| Field | Count |
|---|---:|
| status | 730 |
| outcome | 60 |
| verificationStatus | 10 |
| lifecycleStatus | 7 |
| achievementStatus | 7 |
| active | 6 |
| data_quality | 1 |

## Ring bundle (today's session)

- **File:** `ring_bundle.fhir.json`  
- **Size:** 150.7 KB  
- **SHA-256:** `8895ecb0d07fd416775ed6a26bee8fc59f50693cffa2686b0e2bf2cdd48509c2`  
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
- **SHA-256:** `387ff74dd2781089be90cc9fb7513eef5f7e753e438d6d0058dee03efaac7e0a`  
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

