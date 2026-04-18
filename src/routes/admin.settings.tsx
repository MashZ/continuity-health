import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, Key, ShieldCheck, Users } from "lucide-react";
import { PageTitle } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/settings")({
  component: SettingsPage,
});

type RoleAssignment = { name: string; email: string; role: "admin" | "clinician" | "analyst" | "viewer" };

const ROLES: RoleAssignment[] = [
  { name: "Dr. Reyes", email: "reyes@healthengine.example", role: "admin" },
  { name: "Dr. Patel", email: "patel@healthengine.example", role: "clinician" },
  { name: "Dr. Lin", email: "lin@healthengine.example", role: "clinician" },
  { name: "RN. Owens", email: "owens@healthengine.example", role: "clinician" },
  { name: "J. Martinez", email: "martinez@healthengine.example", role: "analyst" },
  { name: "Compliance Desk", email: "compliance@healthengine.example", role: "viewer" },
];

function SettingsPage() {
  const [policy, setPolicy] = useState({
    requireOptIn: true,
    suppressSmallCells: true,
    differentialPrivacy: true,
    secondaryResearch: false,
  });
  const [endpoint, setEndpoint] = useState("https://fhir.healthengine.example/r4");
  const [apiKey, setApiKey] = useState("••••••••••••••••••sk_live_3a91");

  return (
    <div className="mx-auto max-w-[1400px] space-y-4">
      <PageTitle
        title="Settings"
        subtitle="Tenant configuration · RBAC roles · integration credentials · consent policy"
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Entity profile */}
        <div className="glass rounded-[14px] p-5">
          <SectionHeader Icon={Building2} title="Entity profile" />
          <div className="mt-3 grid gap-3 text-xs">
            <Field label="Organization" value="HealthEngine Enterprise" />
            <Field label="Tenant ID" value="he-enterprise-001" mono />
            <Field label="Region" value="US · EU dual-region" />
            <Field label="Plan" value="Operating Center · Enterprise" />
          </div>
        </div>

        {/* FHIR endpoint */}
        <div className="glass rounded-[14px] p-5">
          <SectionHeader Icon={Key} title="Integration credentials" />
          <div className="mt-3 space-y-3 text-xs">
            <label className="block">
              <div className="text-[10px] uppercase tracking-wider text-[#64748b]">FHIR R4 endpoint</div>
              <input
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
                className="mt-1 w-full rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[11px] text-[#e2e8f0] focus:border-[#00d4aa]/40 focus:outline-none"
              />
            </label>
            <label className="block">
              <div className="text-[10px] uppercase tracking-wider text-[#64748b]">API key</div>
              <input
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="mt-1 w-full rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[11px] text-[#e2e8f0] focus:border-[#00d4aa]/40 focus:outline-none"
              />
            </label>
            <button className="ease-smooth rounded-md border border-[#00d4aa]/40 bg-[#00d4aa]/10 px-3 py-1.5 text-[11px] font-medium text-[#00d4aa] hover:bg-[#00d4aa]/20">
              Test connection
            </button>
          </div>
        </div>
      </div>

      {/* RBAC */}
      <div className="glass rounded-[14px] p-5">
        <SectionHeader Icon={Users} title="Role assignments" />
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-xs">
            <thead className="border-b border-white/10 text-[10px] uppercase tracking-[0.12em] text-[#64748b]">
              <tr>
                <th className="px-3 py-2">Member</th>
                <th className="px-3 py-2">Email</th>
                <th className="px-3 py-2">Role</th>
                <th className="px-3 py-2">Scope</th>
              </tr>
            </thead>
            <tbody>
              {ROLES.map((r) => (
                <tr key={r.email} className="border-b border-white/5">
                  <td className="px-3 py-2 text-[#e2e8f0]">{r.name}</td>
                  <td className="px-3 py-2 font-mono text-[10px] text-[#94a3b8]">{r.email}</td>
                  <td className="px-3 py-2">
                    <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] capitalize text-[#e2e8f0]">
                      {r.role}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-[#94a3b8]">
                    {r.role === "admin"
                      ? "Tenant-wide"
                      : r.role === "clinician"
                      ? "Panel · read+write"
                      : r.role === "analyst"
                      ? "Cohort aggregates only"
                      : "Read-only · audit"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Consent policy */}
      <div className="glass rounded-[14px] p-5">
        <SectionHeader Icon={ShieldCheck} title="Consent policy controls" />
        <div className="mt-3 space-y-2 text-xs">
          <Toggle
            label="Require explicit opt-in (Art. 7(1))"
            value={policy.requireOptIn}
            onChange={(v) => setPolicy({ ...policy, requireOptIn: v })}
          />
          <Toggle
            label="Suppress small cells (n < 10)"
            value={policy.suppressSmallCells}
            onChange={(v) => setPolicy({ ...policy, suppressSmallCells: v })}
          />
          <Toggle
            label="Differential privacy on aggregates"
            value={policy.differentialPrivacy}
            onChange={(v) => setPolicy({ ...policy, differentialPrivacy: v })}
          />
          <Toggle
            label="Permit secondary research use"
            value={policy.secondaryResearch}
            onChange={(v) => setPolicy({ ...policy, secondaryResearch: v })}
          />
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ Icon, title }: { Icon: typeof Building2; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-[#94a3b8]" />
      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
        {title}
      </div>
    </div>
  );
}

function Field({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
      <span className="text-[10px] uppercase tracking-wider text-[#64748b]">{label}</span>
      <span className={mono ? "font-mono text-[11px] text-[#e2e8f0]" : "text-[#e2e8f0]"}>
        {value}
      </span>
    </div>
  );
}

function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="ease-smooth flex w-full items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-left hover:border-white/20"
    >
      <span className="text-[#e2e8f0]">{label}</span>
      <span
        className={`flex h-5 w-9 items-center rounded-full border px-0.5 ${
          value ? "border-[#00d4aa]/40 bg-[#00d4aa]/20" : "border-white/15 bg-white/[0.04]"
        }`}
      >
        <span
          className={`h-3.5 w-3.5 rounded-full transition-transform ${
            value ? "translate-x-4 bg-[#00d4aa]" : "bg-[#64748b]"
          }`}
        />
      </span>
    </button>
  );
}
