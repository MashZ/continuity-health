# Continuity

**The agentic patient-engagement layer of HealthEngine Enterprise.**

Continuity is white-labeled through HealthEngine's physician and provider-network marketplace and aligned with the **CMS ACCESS Model** (Advancing Chronic Care with Effective, Scalable Solutions) and its **Outcome-Aligned Payments (OAPs)** for technology-supported chronic care, beginning **July 5, 2026**.

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

## Revenue Model — Outcome-Aligned Payments under CMS ACCESS

The CMS ACCESS Model replaces fee-for-service activity codes (RPM, RTM, CCM) with **Outcome-Aligned Payments (OAPs)** — a recurring per-patient payment to the participating care organization, with full payment tied to the share of patients who hit measurable, condition-specific outcome targets. Continuity is built for this payment shape: the entire stack exists to move outcome biomarkers from each patient's starting point.

| ACCESS track | Conditions + outcome targets | Continuity's role |
|---|---|---|
| **eCKM** — Early cardio-kidney-metabolic | Hypertension, dyslipidemia, obesity with central adiposity, prediabetes. Targets: BP, lipids, weight, HbA1c trajectory. | Signal Layer + Intelligence Layer drive the continuous biosignal record; Action Layer delivers the lifestyle micro-interventions that move the biomarkers. |
| **CKM** — Cardio-kidney-metabolic | Diabetes, CKD 3a/3b, ASCVD. Targets: HbA1c, BP, lipid control. | 30-day baseline + agentic tension surfaces non-adherence and decompensation early; escalation routes to clinician before the outcome window closes. |
| **MSK** — Musculoskeletal | Chronic musculoskeletal pain. Targets: validated PROMs (pain, function, mood). | Behavioral-Engagement agent drives PROM capture cadence and movement-based interventions. |
| **BH** — Behavioral health | Depression, anxiety. Targets: validated PROMs (PHQ-9, GAD-7). | Action Layer schedules check-ins; escalation-as-first-class-output routes risk signals to a licensed clinician. |

The HealthEngine provider network is the ACCESS-enrolled care organization; Continuity is its technology-supported care layer. PCPs receive the new ACCESS **co-management payment** for documented review of the electronic patient updates Continuity generates. Continuity earns a share of the OAP the network captures per qualifying patient — paid on outcomes, not activity. Outcome-share thresholds rise with each participation year, so the agentic learning curve compounds directly into revenue. Illustrative: 10,000 ACCESS-enrolled patients across eCKM + CKM tracks → seven-figure ARR on a single network contract; SaaS gross margin profile (inference + storage <10% of fee). Major Medicare Advantage plans have pledged ACCESS-aligned payment options, extending the same shape beyond Original Medicare.

**Incentive alignment:** the provider network only gets paid in full when the cohort hits its outcome targets. Continuity is the system that moves those targets. HealthEngine gets paid when providers buy it. Continuity gets paid when HealthEngine distributes it. Patient stays out of the ER. The trade is *outcomes, not activity*.

---

## Moat

1. **Data moat** — 30-day rolling personal baseline per patient; the calibration curve in the Learning Velocity tab is the visible proof.
2. **Distribution moat** — HealthEngine's provider-network contracts are sticky and take years to build. Continuity inherits them as design partner from day one.
3. **Regulatory moat** — SHAP attribution + `clinical_anchor` requirement + escalation-as-first-class-output + OpenClaw-pattern privacy layer. Competing entrants must rebuild all four.
4. **Clinical-framework moat** — every nudge references AHA Life's Essential 8 / USPSTF Grade B / Allostatic load / ACC-AHA risk tiers. Operationalized peer-reviewed consensus.

---

## Go-To-Market

- **Phase 0 — hackathon (today):** demo the agentic layer end-to-end, lock the HealthEngine partnership on record.
- **Phase 1 — first pilot (90 days):** one HealthEngine-nominated provider network, 200–500 patients across one or two ACCESS tracks (eCKM + CKM). Metrics: share of cohort meeting their outcome target, 30-day calibration curve, escalation precision.
- **Phase 2 — multi-network (180 days):** three additional provider networks. Demonstrate outcome-target attainment rates that clear ACCESS payment thresholds and document reduced ER visits / readmissions.
- **Phase 3 — whole-network rollout + payer contracts (12+ months):** marketplace-wide distribution under ACCESS, plus direct ACCESS-aligned contracts with Medicare Advantage plans (per the published payer pledge).

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
