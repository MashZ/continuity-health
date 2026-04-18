import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const STORAGE_KEY = "continuity.cohortShareOptIn";

export function CohortShareChip() {
  const [on, setOn] = useState<boolean>(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === null) {
        localStorage.setItem(STORAGE_KEY, "true");
        setOn(true);
      } else {
        setOn(raw === "true");
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  const toggle = () => {
    setOn((v) => {
      const next = !v;
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const style = on
    ? {
        borderColor: "rgba(0, 212, 170, 0.4)",
        color: "#00d4aa",
      }
    : {
        borderColor: "rgba(100, 116, 139, 0.3)",
        color: "#64748b",
      };

  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={toggle}
            aria-pressed={on}
            className="ease-smooth cursor-pointer rounded-full border bg-transparent px-3 py-1 text-xs"
            style={{
              ...style,
              transitionProperty: "color, border-color, background-color, opacity",
              transitionDuration: "200ms",
              opacity: hydrated ? 1 : 0.6,
            }}
          >
            <span aria-hidden>🤝</span>
            <span className="hidden sm:inline">
              {" "}Cohort share · {on ? "ON" : "OFF"}
            </span>
          </button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          When ON, your anonymized compliance telemetry contributes to the HealthEngine Operating
          Center aggregate. Never PII. Never raw biometrics. Stored locally in localStorage under
          <code className="ml-1">continuity.cohortShareOptIn</code>.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
