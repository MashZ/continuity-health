import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/trends")({
  component: TrendsPage,
});

function TrendsPage() {
  return (
    <AdminPlaceholder
      title="Health Trends"
      subtitle="Cohort-level signal time series, pillar heatmaps, and intervention efficacy."
      description="Bucket flow, cohort leaderboard, emerging concerns, signal time series, symptom frequency, and intervention efficacy charts are being ported from the COC reference into this page."
    />
  );
}
