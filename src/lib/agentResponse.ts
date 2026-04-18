// Mock JSON output from the Intelligence Layer agent.
// The nudge card and Signal Explanation Panel both read from this object.

export const mockAgentResponse = {
  nudge:
    "Your HRV is trending 15% below baseline and your afternoon is blocked with back-to-back meetings. Pre-order a low-glycemic lunch now — your autonomic stress markers stabilize faster when blood sugar stays even.",
  signal_basis: "HRV -15% · Sleep debt: moderate · Calendar: high-density afternoon",
  clinical_anchor: "Allostatic load model — autonomic dysregulation",
  action_buttons: ["Accept", "Modify", "Dismiss"],
  agent_tension_log: {
    clinical_agent: {
      rationale: "Address autonomic dysregulation before allostatic load compounds",
      confidence: 0.82,
    },
    prevention_economics_agent: {
      rationale:
        "7-day HRV decline correlates with ~40% elevated sick-day probability, $300-500 productivity event",
      confidence: 0.71,
    },
    behavioral_engagement_agent: {
      rationale: "Pre-order option is 2-tap, zero willpower, aligns with Fogg B=M·A·T model",
      confidence: 0.9,
    },
  },
  signal_attribution: [
    { feature: "HRV 15% below 30-day baseline", direction: "increases_urgency", weight: 0.85 },
    { feature: "Sleep debt 4.5h this week", direction: "increases_urgency", weight: 0.7 },
    { feature: "Back-to-back meetings next 4h", direction: "increases_urgency", weight: 0.55 },
    { feature: "Sedentary 5+ hours today", direction: "increases_urgency", weight: 0.4 },
    { feature: "Resting HR within range", direction: "reduces_urgency", weight: 0.2 },
  ],
  compound_learning_weight: 0.75,
  risk_tier: "MODERATE" as const,
  escalation_flag: false,
  escalation_message: null as string | null,
};

export type AgentResponse = typeof mockAgentResponse;
