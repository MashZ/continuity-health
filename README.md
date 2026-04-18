# Continuity

**The agentic patient-engagement layer of HealthEngine Enterprise.**

Continuity is white-labeled through HealthEngine's physician and provider-network marketplace, priced per-patient-per-month, and aligned with established CMS reimbursement pathways (RPM, RTM, CCM).

> Continuity operates upstream of any single condition — on the allostatic-load precursors — and hands off to whichever program the provider prescribes. It is **not** a diagnostic tool. Escalation to a human clinician is a first-class output.

---

## What this repo contains

A live, end-to-end demo of the Continuity agentic layer:

- **Signal Layer** — continuous biosignal ingestion (HRV, sleep, resting HR) from wearables.
- **Privacy Layer** — local-first processing; raw biometrics never leave the device (OpenClaw pattern).
- **Intelligence Layer** — three-agent productive tension (Clinical / Prevention-Economics / Behavioral-Engagement) reasoning over a 30-day rolling personal baseline.
- **Action Layer** — micro-interventions delivered at the decision moment, with `Accept / Modify / Dismiss`.
- **Learning Layer** — every decision compounds into a calibration curve, visible in the Learning Velocity tab.
- **Clinical escalation** — first-class output, drafted as a provider-routable message via HealthEngine.
- **Life's Essential 8** — AHA 2022 cardiovascular pillars, with wearable-measurable factors observed continuously.

---

## Customer + Distribution

- **Design partner / distribution channel:** HealthEngine (Dr. Jonathan Weiss) — the marketplace connecting physicians and provider networks to the facilities they operate in.
- **End user:** the patient inside a HealthEngine provider network, consuming Continuity as their physician's branded app.
- **Billing customer:** the provider network (physician practice, ACO, primary-care group, specialty clinic) that contracts Continuity through HealthEngine.

**Why this channel beats D2C:** trust arrives pre-assembled (it's the patient's own doctor's tool), no cold acquisition, and reimbursement is already in place.

---

## Revenue Model — Per-Patient-Per-Month, CMS-Aligned

| CMS pathway | What it covers | Continuity's role |
|---|---|---|
| **RPM** — Remote Physiologic Monitoring | Continuous physiological data (HR, HRV, SpO2, BP) with clinician review, PPPM. | Signal Layer + Intelligence Layer produce the continuous record and summaries. |
| **RTM** — Remote Therapeutic Monitoring | Non-physiological data (behavior, adherence, activity) with clinician oversight, PPPM. | Action Layer + Learning Layer document nudge delivery and patient response. |
| **CCM** — Chronic Care Management | 20+ minutes/month of non-face-to-face care coordination for patients with 2+ chronic conditions. | Each provider-visible, provider-reviewed agent interaction counts toward documented time. |

License fee per patient per month sits in the low-to-mid double digits — well below the CMS reimbursement envelope so the provider network captures the upside. SaaS gross margin profile (inference + storage <10% of license fee). Illustrative: 10,000 chronic-care patients × 12 months → seven-figure ARR on a single network contract.

**Incentive alignment:** provider gets reimbursed more when Continuity runs well. HealthEngine gets paid when providers buy it. Continuity gets paid when HealthEngine distributes it. Patient stays out of the ER.

---

## Moat

1. **Data moat** — 30-day rolling personal baseline per patient; the calibration curve in the Learning Velocity tab is the visible proof.
2. **Distribution moat** — HealthEngine's provider-network contracts are sticky and take years to build. Continuity inherits them as design partner from day one.
3. **Regulatory moat** — SHAP attribution + `clinical_anchor` requirement + escalation-as-first-class-output + OpenClaw-pattern privacy layer. Competing entrants must rebuild all four.
4. **Clinical-framework moat** — every nudge references AHA Life's Essential 8 / USPSTF Grade B / Allostatic load / ACC-AHA risk tiers. Operationalized peer-reviewed consensus.

---

## Go-To-Market

- **Phase 0 — hackathon (today):** demo the agentic layer end-to-end, lock the HealthEngine partnership on record.
- **Phase 1 — first pilot (90 days):** one HealthEngine-nominated provider network, 200–500 patients. Metrics: CCM-documented-time PPPM, RPM billing-event frequency, 30-day calibration curve.
- **Phase 2 — multi-network (180 days):** three additional provider networks. Demonstrate reduced ER visits and readmissions.
- **Phase 3 — whole-network rollout + payer contracts (12+ months):** marketplace-wide distribution plus direct contracts with Medicare Advantage plans (capitation rewards prevention directly).

---

## What Continuity is *not*

- **Not** condition-specific disease management (not Livongo, not Omada, not Biofourmis).
- **Not** a diagnostic tool — the agent is constitutionally prohibited from diagnostic claims.
- **Not** a D2C subscription — the app is the provider's, distributed by HealthEngine.
- **Not** a research tool — Continuity operationalizes peer-reviewed consensus; it does not re-litigate the science.

---

## Team

- **Mash Zahid** — co-founder. IBM Associate Partner, GM AskGM, OpenAI Academy speaker (6,800+ attendees), Chicago Booth MBA. Founder of Discimen (AI enablement & risk valuation).
- **Elias Jimenez** — co-founder. XR founder at VentR-out, merging VR/AR with outdoor movement-based pursuits. 17 years engineering at Cisco.
- **Muntaser Syed** — co-founder. Hardcore IEEE engineer; inventor of the underlying biosensor hardware. PhD Computer Engineering.
- **Dr. Jonathan Weiss** — design partner. Founder & CEO of HealthEngine (Miami). UChicago MD/MBA, Oxford, Harvard. Distribution, enterprise GTM, provider-network credibility.
- **Dr. Stephen Borstelmann** — clinical lead. Interventional radiology (non-practicing), Goldman Sachs commodities trading, algorithmic trading systems engineer. Clinical validation + health-economics framing. Columbia, NY Medical.

The three scarcest assets in healthcare AI — enterprise distribution, clinical credibility, and agentic-architecture execution — each represented by a named human who can be on a customer call tomorrow.

---

## Tech stack

TanStack Start v1 (React 19 + Vite 7), Tailwind CSS v4, shadcn/ui, deployed on Cloudflare Workers via Lovable Cloud.

## Development

```bash
bun install
bun dev
```

Routes:
- `/` — the live agentic demo (Dashboard + Learning Velocity)
- `/about` — business model + team

## License

Proprietary — Continuity Health, 2026.
