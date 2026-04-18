import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/patients/$patientId")({
  component: Patient360Page,
});

function Patient360Page() {
  const { patientId } = Route.useParams();
  return (
    <div>
      <Link
        to="/admin/patients"
        className="text-[11px] text-[#94a3b8] hover:text-[#e2e8f0]"
      >
        ← Back to Patients
      </Link>
      <div className="mt-3">
        <AdminPlaceholder
          title={`Patient 360 · ${patientId}`}
          subtitle="Personal data · LE8 card · signal strip · trend strip · agent tension · intervention history · provider summary"
          description="The full Patient 360 surface (signal attribution, agent productive tension, intervention history, LE8 pillar drilldown) is being ported next, wired to the Wilbert FHIR loader."
        />
      </div>
    </div>
  );
}
