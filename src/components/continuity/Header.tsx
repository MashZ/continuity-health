import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0d1117]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="font-bold tracking-tight text-[#e2e8f0] text-lg">Continuity</div>

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

        <div className="flex items-center gap-1.5 text-xs font-medium text-[#e2e8f0]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00d4aa] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00d4aa]" />
          </span>
          LIVE
        </div>
      </div>
    </header>
  );
}
