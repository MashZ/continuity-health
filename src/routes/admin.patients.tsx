import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { AdminPlaceholder } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/patients")({
  validateSearch: z.object({
    bucket: z.enum(["critical", "rising", "watch", "stable", "signal_gap"]).optional(),
  }),
  component: PatientsPage,
});

function PatientsPage() {
  const { bucket } = Route.useSearch();
  return (
    <AdminPlaceholder
      title="Patients"
      subtitle={
        bucket
          ? `Filtered to bucket: ${bucket.replace("_", " ")}`
          : "Panel-wide patient roster with alert buckets, LE8, and last signal."
      }
      description="Patient roster with sortable columns (alert bucket, LE8 composite, last signal, ACCESS track) is being ported next. Click into any row to land on the Patient 360 view."
    />
  );
}
