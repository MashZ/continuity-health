import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/escalations")({
  component: EscalationsPage,
});

function EscalationsPage() {
  return (
    <AdminPlaceholder
      title="Escalations"
      subtitle="Open and recently-resolved provider routing queue."
      description="Threshold breaches, agent-tension flags, and consent-withdrawal events route here. Triage table with acknowledge/assign/route actions is being ported next."
    />
  );
}
