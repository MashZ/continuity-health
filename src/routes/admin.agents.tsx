import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/agents")({
  component: AgentsPage,
});

function AgentsPage() {
  return (
    <AdminPlaceholder
      title="Agents"
      subtitle="Three-agent productive tension · run / inspect / replay."
      description="Findings strip per agent (Triage, Care Plan, Cohort Intelligence, Data Quality, Reimbursement, Communications) with run-button affordance is being ported next."
    />
  );
}
