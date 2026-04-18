import { createFileRoute, Link } from "@tanstack/react-router";
import mashPhoto from "@/assets/team/mash-zahid.jpeg";
import eliasPhoto from "@/assets/team/elias-jimenez.jpeg";
import muntaserPhoto from "@/assets/team/muntaser-syed.jpeg";
import jonathanPhoto from "@/assets/team/jonathan-weiss.jpeg";
import stephenPhoto from "@/assets/team/stephen-borstelmann.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Continuity — Agentic patient engagement for HealthEngine" },
      {
        name: "description",
        content:
          "Continuity is the agentic patient-engagement layer of HealthEngine Enterprise — aligned with the CMS ACCESS Model and its Outcome-Aligned Payments for technology-supported chronic care.",
      },
      { property: "og:title", content: "Continuity — Agentic patient engagement for HealthEngine" },
      {
        property: "og:description",
        content:
          "White-labeled through HealthEngine's provider-network marketplace. Upstream of any single condition. Escalation as a first-class output.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

const accessTracks = [
  {
    name: "eCKM",
    full: "Early cardio-kidney-metabolic",
    covers:
      "Hypertension, dyslipidemia, obesity with central adiposity, prediabetes. Outcome targets: BP, lipids, weight, HbA1c trajectory from each patient's starting point.",
    role: "Signal Layer + Intelligence Layer drive the continuous biosignal record. Action Layer delivers the lifestyle micro-interventions that move the outcome biomarkers.",
  },
  {
    name: "CKM",
    full: "Cardio-kidney-metabolic",
    covers:
      "Diabetes, CKD stage 3a/3b, atherosclerotic cardiovascular disease. Outcome targets: HbA1c control, BP control, lipid management.",
    role: "30-day baseline + agentic tension surfaces non-adherence and decompensation early. Escalation routes to clinician before the outcome window closes.",
  },
  {
    name: "MSK",
    full: "Musculoskeletal",
    covers:
      "Chronic musculoskeletal pain. Outcome targets: validated PROMs for pain, function, mood.",
    role: "Behavioral-Engagement agent drives PROM capture cadence and movement-based interventions.",
  },
  {
    name: "BH",
    full: "Behavioral health",
    covers:
      "Depression and anxiety. Outcome targets: validated PROMs (PHQ-9, GAD-7) of mood and function.",
    role: "Action Layer schedules check-ins; escalation-as-first-class-output routes risk signals to a licensed clinician immediately.",
  },
];

const moats = [
  {
    title: "Data moat",
    body: "30-day rolling personal baseline per patient. The longer the system runs, the more precisely the agent calibrates — the calibration curve in the Learning Velocity tab is the visible proof.",
  },
  {
    title: "Distribution moat",
    body: "HealthEngine's provider-network contracts are sticky and take years to build. Continuity inherits them as design partner from day one.",
  },
  {
    title: "Regulatory moat",
    body: "SHAP attribution + clinical_anchor requirement + escalation-as-first-class-output + OpenClaw-pattern privacy. Competing entrants must rebuild all four.",
  },
  {
    title: "Clinical-framework moat",
    body: "Every nudge references AHA Life's Essential 8, USPSTF Grade B, allostatic load, ACC-AHA risk tiers. Operationalized peer-reviewed consensus.",
  },
];

const phases = [
  {
    tag: "Phase 0",
    when: "Today",
    title: "Hackathon",
    body: "Demo the agentic layer end-to-end. Lock the HealthEngine partnership on record.",
  },
  {
    tag: "Phase 1",
    when: "90 days",
    title: "First pilot provider network",
    body: "HealthEngine nominates one provider network. Continuity deploys to 200–500 patients. Metrics: CCM-documented-time PPPM, RPM billing-event frequency, 30-day calibration curve.",
  },
  {
    tag: "Phase 2",
    when: "180 days",
    title: "Multi-network expansion",
    body: "Three additional HealthEngine provider networks. Demonstrate reduced ER visits and readmissions — the outcome metrics that drive a national contract.",
  },
  {
    tag: "Phase 3",
    when: "12+ months",
    title: "Whole-network rollout + payer contracts",
    body: "Marketplace-wide distribution plus direct contracts with Medicare Advantage plans where capitation rewards prevention directly.",
  },
];

const notList = [
  "Not a condition-specific disease management program (not Livongo, not Omada, not Biofourmis). Continuity operates upstream of any single condition — on the allostatic-load precursors — and hands off to whichever program the provider prescribes.",
  "Not a diagnostic tool. The agent is constitutionally prohibited from diagnostic claims. Escalation to a human clinician is a first-class output.",
  "Not a D2C subscription. The app is the provider's, not ours. HealthEngine is the distribution.",
  "Not a research tool. The clinical frameworks (LE8, USPSTF, ACC-AHA, allostatic load) are peer-reviewed consensus. Continuity operationalizes; it does not re-litigate the science.",
];

const team = [
  {
    name: "Mash Zahid",
    role: "Co-founder",
    bio: "IBM Associate Partner, GM AskGM (engagement enabled everything in track 1 for GM), OpenAI Academy speaker (6,800+ attendees), Chicago Booth MBA. Founder of Discimen — AI enablement & AI risk valuation, with a live agentic AI enablement demo and a top-tier client pipeline.",
    initials: "MZ",
    photo: mashPhoto,
  },
  {
    name: "Elias Jimenez",
    role: "Co-founder",
    bio: "Merging XR (VR, AR) with outdoor themed movement-based pursuits. XR Founder at VentR-out. 17 years as engineer at Cisco.",
    initials: "EJ",
    photo: eliasPhoto,
  },
  {
    name: "Muntaser Syed",
    role: "Co-founder",
    bio: "Hardcore IEEE engineer; inventor of the underlying biosensor hardware during this project. PhD Computer Engineering.",
    initials: "MS",
    photo: muntaserPhoto,
  },
  {
    name: "Dr. Jonathan Weiss",
    role: "Design partner — HealthEngine",
    bio: "Founder & CEO of HealthEngine (Miami — 1101 Brickell Ave). UChicago MD/MBA, Oxford, Harvard. Distribution, enterprise GTM, provider-network credibility.",
    initials: "JW",
    photo: jonathanPhoto,
  },
  {
    name: "Dr. Stephen Borstelmann",
    role: "Clinical lead",
    bio: "Interventional radiology (non-practicing). Goldman Sachs commodities trading. Algorithmic trading systems engineer. Clinical validation + health-economics framing. Columbia, NY Medical.",
    initials: "SB",
    photo: stephenPhoto,
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e2e8f0]">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0d1117]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/about" className="font-bold tracking-tight text-[#e2e8f0] text-lg">
            Continuity
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            <Link
              to="/"
              className="ease-smooth rounded-md px-3 py-1.5 text-[#94a3b8] hover:text-[#e2e8f0]"
            >
              Live demo
            </Link>
            <a
              href="#team"
              className="ease-smooth hidden sm:inline-block rounded-md px-3 py-1.5 text-[#94a3b8] hover:text-[#e2e8f0]"
            >
              Team
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 30% 20%, rgba(0,212,170,0.18), transparent 60%), radial-gradient(40% 40% at 80% 10%, rgba(0,212,170,0.10), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-wider text-[#94a3b8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00d4aa]" />
            Powered by HealthEngine · CMS-aligned
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#e2e8f0] sm:text-6xl">
            The agentic patient-engagement layer of{" "}
            <span className="bg-gradient-to-r from-[#00d4aa] to-[#22d3ee] bg-clip-text text-transparent">
              HealthEngine Enterprise
            </span>
            .
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#94a3b8] sm:text-lg">
            White-labeled through HealthEngine's physician and provider-network marketplace.
            Priced per-patient-per-month. Aligned with established CMS reimbursement
            pathways — RPM, RTM, and CCM. Continuity operates upstream of any single
            condition and hands off to whichever program the provider prescribes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="ease-smooth inline-flex items-center gap-2 rounded-lg bg-[#00d4aa] px-5 py-2.5 text-sm font-semibold text-[#0d1117] hover:bg-[#00d4aa]/90 active:scale-[0.98]"
            >
              See the live demo →
            </Link>
            <a
              href="#model"
              className="ease-smooth inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-[#e2e8f0] hover:bg-white/5"
            >
              Read the business model
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-4">
            {[
              { k: "PPPM", v: "Per-patient-per-month pricing" },
              { k: "RPM · RTM · CCM", v: "CMS reimbursement pathways" },
              { k: "30-day", v: "Rolling personal baseline" },
              { k: "0", v: "Diagnostic claims, by design" },
            ].map((s) => (
              <div key={s.k} className="bg-[#0d1117] p-5">
                <dt className="text-lg font-semibold text-[#e2e8f0]">{s.k}</dt>
                <dd className="mt-1 text-[12px] leading-snug text-[#94a3b8]">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <main className="mx-auto max-w-6xl space-y-20 px-4 pb-24">
        {/* Customer + Distribution */}
        <section>
          <div className="mb-6 text-xs font-semibold uppercase tracking-wider text-[#00d4aa]">
            Customer + Distribution
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Design partner",
                b: "HealthEngine (Dr. Jonathan Weiss) — the marketplace connecting physicians and provider networks to the facilities they operate in. They already own the hardest asset in healthcare GTM: the provider relationship.",
              },
              {
                t: "End user",
                b: "The patient inside a HealthEngine provider network, consuming Continuity as their physician's branded app.",
              },
              {
                t: "Billing customer",
                b: "The provider network (physician practice, ACO, primary-care group, specialty clinic) that contracts Continuity through HealthEngine.",
              },
            ].map((x) => (
              <div key={x.t} className="glass rounded-2xl p-5">
                <div className="text-[13px] font-semibold text-[#e2e8f0]">{x.t}</div>
                <p className="mt-2 text-[13px] leading-relaxed text-[#94a3b8]">{x.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-[#94a3b8]">
            <span className="text-[#e2e8f0]">Why this beats D2C:</span> trust arrives
            pre-assembled — the app is the patient's own doctor's tool, not a third-party
            subscription. No cold acquisition. Reimbursement is already in place.
          </p>
        </section>

        {/* Revenue Model */}
        <section id="model">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#00d4aa]">
            Revenue Model
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#e2e8f0] sm:text-3xl">
            Per-patient-per-month, CMS-aligned.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#94a3b8]">
            Continuity licenses a per-patient-per-month fee to the provider network.
            Providers cover the fee through three Medicare reimbursement pathways
            Continuity is designed to support.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <div className="hidden grid-cols-12 gap-4 bg-white/[0.04] px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8] md:grid">
              <div className="col-span-3">CMS pathway</div>
              <div className="col-span-5">What it covers</div>
              <div className="col-span-4">Continuity's role</div>
            </div>
            {cmsRows.map((r) => (
              <div
                key={r.name}
                className="grid grid-cols-1 gap-3 border-t border-white/10 bg-white/[0.02] px-5 py-4 text-[13px] md:grid-cols-12 md:gap-4"
              >
                <div className="md:col-span-3">
                  <div className="font-semibold text-[#e2e8f0]">{r.name}</div>
                  <div className="text-[11px] text-[#64748b]">{r.full}</div>
                </div>
                <div className="text-[#94a3b8] md:col-span-5">{r.covers}</div>
                <div className="text-[#94a3b8] md:col-span-4">{r.role}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="glass rounded-2xl p-5">
              <div className="text-[13px] font-semibold text-[#e2e8f0]">Unit economics, illustrative</div>
              <ul className="mt-3 space-y-2 text-[13px] text-[#94a3b8]">
                <li>License fee in the low-to-mid double digits PPPM, well below the CMS reimbursement envelope.</li>
                <li>10,000 chronic-care patients × 12 months → seven-figure ARR on a single network contract.</li>
                <li>SaaS gross margin: marginal cost (inference + storage) under 10% of license fee.</li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="text-[13px] font-semibold text-[#e2e8f0]">Incentive alignment</div>
              <p className="mt-3 text-[13px] leading-relaxed text-[#94a3b8]">
                Provider gets reimbursed more when Continuity runs well. HealthEngine gets
                paid when providers buy it. Continuity gets paid when HealthEngine
                distributes it. Patient stays out of the ER. All four parties on the same
                side of the trade.
              </p>
            </div>
          </div>
        </section>

        {/* Moat */}
        <section>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#00d4aa]">
            Moat
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#e2e8f0] sm:text-3xl">
            Why this compounds.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {moats.map((m, i) => (
              <div key={m.title} className="glass rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#00d4aa]/15 text-[12px] font-semibold text-[#00d4aa]">
                    {i + 1}
                  </span>
                  <div className="text-[14px] font-semibold text-[#e2e8f0]">{m.title}</div>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-[#94a3b8]">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GTM Phases */}
        <section>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#00d4aa]">
            Go-To-Market
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#e2e8f0] sm:text-3xl">
            The motion, in four phases.
          </h2>
          <ol className="mt-6 space-y-3">
            {phases.map((p) => (
              <li key={p.tag} className="glass flex flex-col gap-2 rounded-2xl p-5 sm:flex-row sm:items-start sm:gap-5">
                <div className="shrink-0 sm:w-40">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#00d4aa]">
                    {p.tag}
                  </div>
                  <div className="text-[12px] text-[#64748b]">{p.when}</div>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#e2e8f0]">{p.title}</div>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#94a3b8]">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* What we are not */}
        <section>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#f59e0b]">
            What we are not
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#e2e8f0] sm:text-3xl">
            Boundaries, stated explicitly.
          </h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {notList.map((n) => (
              <li
                key={n}
                className="rounded-2xl border border-[#f59e0b]/25 bg-[#f59e0b]/[0.06] p-4 text-[13px] leading-relaxed text-[#e2e8f0]"
              >
                <span className="mr-2 font-semibold text-[#f59e0b]">✕</span>
                {n}
              </li>
            ))}
          </ul>
        </section>

        {/* Team */}
        <section id="team">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#00d4aa]">
            Team
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#e2e8f0] sm:text-3xl">
            The three scarcest assets in healthcare AI, on one team.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#94a3b8]">
            Enterprise distribution, clinical credibility, and agentic-architecture
            execution — each represented by a named human who can be on a customer call
            tomorrow.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {team.map((t) => (
              <article key={t.name} className="glass rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-[#00d4aa]/40"
                  />
                  <span className="sr-only">{t.initials}</span>
                  <div>
                    <div className="text-[14px] font-semibold text-[#e2e8f0]">{t.name}</div>
                    <div className="text-[11px] uppercase tracking-wider text-[#00d4aa]">
                      {t.role}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-[#94a3b8]">{t.bio}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="glass rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-[#e2e8f0] sm:text-2xl">
            See the agent reasoning live.
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[#94a3b8]">
            Open the working demo — Signal, Privacy, Intelligence, Action, Learning —
            with three-agent productive tension and a first-class clinical escalation path.
          </p>
          <div className="mt-5">
            <Link
              to="/"
              className="ease-smooth inline-flex items-center gap-2 rounded-lg bg-[#00d4aa] px-5 py-2.5 text-sm font-semibold text-[#0d1117] hover:bg-[#00d4aa]/90 active:scale-[0.98]"
            >
              Launch the demo →
            </Link>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-6 text-center text-[11px] text-[#64748b]">
          © {new Date().getFullYear()} Continuity Health · Powered by HealthEngine
        </footer>
      </main>
    </div>
  );
}
