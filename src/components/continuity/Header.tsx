import { Link } from "@tanstack/react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type HeaderProps = {
  escalation?: boolean;
  onToggleEscalation?: () => void;
};

export function Header({ escalation = false, onToggleEscalation }: HeaderProps = {}) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0d1117]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="font-bold tracking-tight text-[#e2e8f0] text-lg">Continuity</div>
          <Link
            to="/about"
            className="ease-smooth hidden sm:inline-block rounded-md px-2 py-1 text-xs text-[#94a3b8] hover:text-[#e2e8f0]"
          >
            About
          </Link>
        </div>

        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="cursor-default rounded-full border border-white/15 px-3 py-1 text-xs text-[#94a3b8]">
                <span className="hidden sm:inline">Powered by </span>HealthEngine
              </div>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              HealthEngine is the physician and provider-network marketplace Continuity extends.
              Design partner for this build.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex items-center gap-2">
          {onToggleEscalation && (
            <button
              type="button"
              onClick={onToggleEscalation}
              aria-pressed={escalation}
              className="ease-smooth hidden sm:inline-flex cursor-pointer items-center rounded-full border border-[#f59e0b] px-3 py-1 text-[11px] font-medium text-[#f59e0b] hover:bg-[#f59e0b]/10 active:scale-[0.98]"
            >
              {escalation ? "Demo: clear escalation" : "Demo: trigger escalation"}
            </button>
          )}
          {onToggleEscalation && (
            <button
              type="button"
              onClick={onToggleEscalation}
              aria-pressed={escalation}
              aria-label={escalation ? "Clear escalation" : "Trigger escalation"}
              className="ease-smooth sm:hidden inline-flex cursor-pointer items-center rounded-full border border-[#f59e0b] px-2 py-1 text-[11px] font-medium text-[#f59e0b] hover:bg-[#f59e0b]/10"
            >
              ⚠️
            </button>
          )}

          <div className="flex items-center gap-1.5 text-xs font-medium text-[#e2e8f0]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00d4aa] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00d4aa]" />
            </span>
            LIVE
          </div>
        </div>
      </div>
    </header>
  );
}

