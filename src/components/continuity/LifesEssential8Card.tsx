type Pillar = {
  icon: string;
  name: string;
  score?: number;
  hint?: string;
  dot: "teal" | "amber" | "muted";
  note?: string;
};

const pillars: Pillar[] = [
  { icon: "🏃", name: "Physical Activity", score: 68, dot: "teal" },
  { icon: "😴", name: "Sleep Health", score: 62, dot: "amber", note: "added to LE8 in 2022" },
  { icon: "🚭", name: "Nicotine Exposure", hint: "self-report", dot: "muted" },
  { icon: "🥗", name: "Diet Quality", hint: "self-report", dot: "muted" },
  { icon: "⚖️", name: "Body Mass Index", hint: "manual entry", dot: "muted" },
  { icon: "🩸", name: "Blood Pressure", hint: "manual entry", dot: "muted" },
  { icon: "🧪", name: "Blood Lipids", hint: "manual entry", dot: "muted" },
  { icon: "🍬", name: "Blood Glucose", hint: "manual entry", dot: "muted" },
];

const dotColor: Record<Pillar["dot"], string> = {
  teal: "#00d4aa",
  amber: "#f59e0b",
  muted: "#475569",
};

export function LifesEssential8Card() {
  return (
    <div className="glass ease-smooth rounded-2xl p-5">
      <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">
        Life's Essential 8 · Cardiovascular Health (AHA 2022)
      </div>

      <ul className="divide-y divide-white/5">
        {pillars.map((p) => {
          const measured = p.score !== undefined;
          return (
            <li
              key={p.name}
              className="flex items-center gap-3 py-2.5 text-[13px]"
            >
              <span className="w-5 text-base leading-none" aria-hidden>
                {p.icon}
              </span>
              <span
                className={`flex-1 ${measured ? "text-[#e2e8f0]" : "text-[#64748b]"}`}
              >
                {p.name}
              </span>
              <span
                className={`text-[12px] ${
                  measured ? "font-semibold text-[#e2e8f0]" : "italic text-[#64748b]"
                }`}
              >
                {measured ? p.score : p.hint}
              </span>
              {p.note && (
                <span className="hidden sm:inline text-[10px] text-[#64748b]">
                  {p.note}
                </span>
              )}
              <span
                className="ml-1 inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: dotColor[p.dot] }}
                aria-hidden
              />
            </li>
          );
        })}
      </ul>

      <p className="mt-4 text-[11px] leading-relaxed text-[#64748b]">
        4 of 8 pillars observed continuously. PAHI monitors wearable-measurable LE8 factors; the rest require clinical measurement.
      </p>
    </div>
  );
}
