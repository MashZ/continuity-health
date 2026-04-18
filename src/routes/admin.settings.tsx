import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <AdminPlaceholder
      title="Settings"
      subtitle="Tenant configuration, RBAC roles, integration credentials."
      description="Entity profile, role assignments, FHIR endpoint configuration, and consent-policy controls are being ported next."
    />
  );
}
