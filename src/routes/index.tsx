import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/continuity/Header";
import { SignalRibbon } from "@/components/continuity/SignalRibbon";
import { InterventionCard } from "@/components/continuity/InterventionCard";
import { LearningVelocity } from "@/components/continuity/LearningVelocity";
import { LifesEssential8Card } from "@/components/continuity/LifesEssential8Card";
import { EscalationBanner } from "@/components/continuity/EscalationBanner";
import { StackRail } from "@/components/continuity/StackRail";
import { OperatingCenter } from "@/components/continuity/OperatingCenter";
import { ConditionsCard } from "@/components/continuity/ConditionsCard";
import { useCohortShare } from "@/lib/useCohortShare";

export const Route = createFileRoute("/")({
  component: Index,
});

type Tab = "dashboard" | "learning" | "operating";

function TabNav({
  tab,
  setTab,
  showOperating,
}: {
  tab: Tab;
  setTab: (t: Tab) => void;
  showOperating: boolean;
}) {
  const base =
    "ease-smooth relative px-4 py-2 text-sm font-medium text-[#94a3b8] hover:text-[#e2e8f0]";
  return (
    <nav className="sticky top-[57px] z-30 border-b border-white/10 bg-[#0d1117]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl gap-1 px-4">
        <button
          onClick={() => setTab("dashboard")}
          className={`${base} ${tab === "dashboard" ? "text-[#e2e8f0]" : ""}`}
        >
          Dashboard
          {tab === "dashboard" && (
            <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#00d4aa]" />
          )}
        </button>
        <button
          onClick={() => setTab("learning")}
          className={`${base} ${tab === "learning" ? "text-[#e2e8f0]" : ""}`}
        >
          Learning Velocity
          {tab === "learning" && (
            <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#00d4aa]" />
          )}
        </button>
        {showOperating && (
          <button
            onClick={() => setTab("operating")}
            className={`${base} ${tab === "operating" ? "text-[#e2e8f0]" : ""}`}
          >
            Continuity Operating Center
            {tab === "operating" && (
              <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#00d4aa]" />
            )}
          </button>
        )}
      </div>
    </nav>
  );
}

function Index() {
  const [tab, setTab] = useState<Tab>("dashboard");
  const [escalation, setEscalation] = useState(false);
  const [cohortShare] = useCohortShare();
  const activeTab: Tab = tab === "operating" && !cohortShare ? "dashboard" : tab;
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e2e8f0]">
      <Header
        escalation={escalation}
        onToggleEscalation={() => setEscalation((v) => !v)}
      />
      <TabNav tab={activeTab} setTab={setTab} showOperating={cohortShare} />
      <main className="mx-auto max-w-6xl space-y-4 px-4 py-5 pb-16">
        {activeTab === "dashboard" && (
          <>
            <SignalRibbon />
            <EscalationBanner active={escalation} />
            <ConditionsCard />
            <InterventionCard />
            <LifesEssential8Card />
          </>
        )}
        {activeTab === "learning" && <LearningVelocity />}
        {activeTab === "operating" && <OperatingCenter />}
      </main>
      <StackRail />
    </div>
  );
}
