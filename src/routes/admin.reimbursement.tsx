import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/reimbursement")({
  component: ReimbursementPage,
});

function ReimbursementPage() {
  return (
    <AdminPlaceholder
      title="Reimbursement"
      subtitle="ACCESS Model OAP candidates and outcome-aligned posture."
      description="Per-track cohort eligibility (eCKM / CKM / MSK / BH), 30-day outcome baselines, and OAP candidate counts are being ported next."
    />
  );
}
