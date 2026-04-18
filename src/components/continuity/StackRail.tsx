const items = [
  { icon: "📡", label: "Signal", tip: "Continuous biosignal ingestion from wearables." },
  { icon: "🔒", label: "Privacy", tip: "Local-first processing. Raw biometrics never leave your device." },
  { icon: "🧠", label: "Intelligence", tip: "Three-agent productive tension. Reasons over 30-day trends." },
  { icon: "⚡", label: "Action", tip: "Micro-interventions at the decision moment." },
  { icon: "🔁", label: "Learning", tip: "Every Accept/Modify/Dismiss calibrates the agent." },
];

export function StackRail() {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-40 h-10"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-3 sm:px-6">
        {items.map((it) => (
          <div
            key={it.label}
            title={it.tip}
            className="ease-smooth group relative flex flex-1 items-center justify-center gap-1.5 text-[#64748b] hover:text-[#94a3b8]"
          >
            <span className="relative flex items-center">
              <span className="text-[13px] sm:text-sm leading-none" aria-hidden>
                {it.icon}
              </span>
              <span
                className="animate-breathe ml-1 inline-block h-1.5 w-1.5 rounded-full bg-[#00d4aa]"
              />
            </span>
            <span className="hidden sm:inline text-[11px] font-medium">{it.label}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}
