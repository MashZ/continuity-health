import { Link, useLocation } from "@tanstack/react-router";
import { Heart, Building2 } from "lucide-react";

/**
 * Floating top-level switcher between Patient (User View) and Admin
 * (Continuity Operating Center). Persistent on every route so judges can
 * flip views fluidly during the demo.
 */
export function RoleSwitcher() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <div className="fixed right-4 top-3 z-[60] sm:right-6 sm:top-4">
      <div className="ease-smooth flex items-center gap-1 rounded-full border border-white/15 bg-[#0d1117]/85 p-1 shadow-lg shadow-black/40 backdrop-blur-xl">
        <Link
          to="/"
          aria-pressed={!isAdmin}
          className={`ease-smooth inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium ${
            !isAdmin
              ? "bg-[#00d4aa] text-[#0b1510]"
              : "text-[#94a3b8] hover:text-[#e2e8f0]"
          }`}
        >
          <Heart className="h-3.5 w-3.5" />
          Patient
        </Link>
        <Link
          to="/admin"
          aria-pressed={isAdmin}
          className={`ease-smooth inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium ${
            isAdmin
              ? "bg-[#00d4aa] text-[#0b1510]"
              : "text-[#94a3b8] hover:text-[#e2e8f0]"
          }`}
        >
          <Building2 className="h-3.5 w-3.5" />
          Admin
        </Link>
      </div>
    </div>
  );
}
