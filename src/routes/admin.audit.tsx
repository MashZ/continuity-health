import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/audit")({
  component: AuditPage,
});

function AuditPage() {
  return (
    <AdminPlaceholder
      title="Audit"
      subtitle="Append-only RBAC + ingest diagnostics."
      description="Tamper-evident audit log of every action (acknowledge, assign, route, manual-entry, agent run) plus ingestion-time validation diagnostics is being ported next."
    />
  );
}
