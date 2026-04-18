import { Link, Outlet, useLocation } from "@tanstack/react-router";
import {
  AlertTriangle,
  Bot,
  ChevronDown,
  FileText,
  LayoutDashboard,
  LineChart,
  ScrollText,
  Settings,
  Users,
  Activity,
  BookOpen,
  Brain,
  Radio,
  ShieldCheck,
  Zap,
  Bell,
  User,
} from "lucide-react";

const NAV = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/admin/escalations", label: "Escalations", icon: AlertTriangle },
  { to: "/admin/patients", label: "Patients", icon: Users },
  { to: "/admin/trends", label: "Health Trends", icon: LineChart },
  { to: "/admin/agents", label: "Agents", icon: Bot },
  { to: "/admin/reimbursement", label: "Reimbursement", icon: FileText },
  { to: "/admin/audit", label: "Audit", icon: ScrollText },
  { to: "/admin/settings", label: "Settings", icon: Settings },
] as const;

const RAIL_LAYERS = [
  { key: "signal", label: "Signal", Icon: Radio },
  { key: "privacy", label: "Privacy", Icon: ShieldCheck },
  { key: "intelligence", label: "Intelligence", Icon: Brain },
  { key: "action", label: "Action", Icon: Zap },
  { key: "learning", label: "Learning", Icon: BookOpen },
] as const;

export function AdminShell({ openEscalations = 4 }: { openEscalations?: number }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0d1117] text-[#e2e8f0]">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminLeftNav escalationCount={openEscalations} />
        <main className="flex-1 overflow-x-hidden px-6 py-6">
          <Outlet />
        </main>
      </div>
      <AhisRail />
    </div>
  );
}

function AdminHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b border-white/10 bg-[#0d1117]/85 px-4 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold tracking-tight">
          Continuity{" "}
          <span className="font-normal text-[#94a3b8]">Operating Center</span>
        </span>
        <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[11px] text-[#94a3b8]">
          Powered by HealthEngine
        </span>
      </div>

      <div className="ml-4 hidden items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs sm:flex">
        <span className="text-[#94a3b8]">Entity</span>
        <span className="text-[#e2e8f0]">HealthEngine Enterprise</span>
        <ChevronDown className="h-3.5 w-3.5 text-[#64748b]" />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00d4aa]/30 bg-[#00d4aa]/10 px-2 py-0.5 text-[11px] font-medium text-[#00d4aa]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00d4aa] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00d4aa]" />
          </span>
          LIVE
        </span>
        <button
          className="ease-smooth hidden h-9 w-9 items-center justify-center rounded-md text-[#94a3b8] hover:bg-white/5 hover:text-[#e2e8f0] sm:inline-flex"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
        </button>
        {/* Spacer so the floating Patient/Admin pill never overlaps the user chip */}
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 lg:flex">
          <User className="h-3.5 w-3.5 text-[#94a3b8]" />
          <span className="text-xs text-[#e2e8f0]">Dr. Reyes</span>
          <span className="text-[10px] uppercase tracking-wider text-[#64748b]">
            CLINICIAN
          </span>
        </div>
        <div className="w-[160px]" aria-hidden />
      </div>
    </header>
  );
}

function AdminLeftNav({ escalationCount }: { escalationCount: number }) {
  const { pathname } = useLocation();
  return (
    <aside className="hidden w-[220px] shrink-0 border-r border-white/10 bg-[#0d1117]/60 px-3 py-4 md:block">
      <nav className="flex flex-col gap-0.5">
        {NAV.map((it) => {
          const active = it.exact
            ? pathname === it.to
            : pathname === it.to || pathname.startsWith(it.to + "/");
          const Icon = it.icon;
          return (
            <Link
              key={it.to}
              to={it.to}
              className={`group ease-smooth relative flex items-center gap-2.5 rounded-md px-3 py-2 text-sm ${
                active
                  ? "bg-white/[0.06] text-[#e2e8f0]"
                  : "text-[#94a3b8] hover:bg-white/[0.03] hover:text-[#e2e8f0]"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{it.label}</span>
              {it.to === "/admin/escalations" && escalationCount > 0 && (
                <span className="ml-auto rounded-full bg-[#f59e0b]/20 px-2 py-0.5 text-[10px] font-semibold text-[#f59e0b]">
                  {escalationCount}
                </span>
              )}
              {active && (
                <span className="absolute left-0 top-1/2 h-6 w-[2px] -translate-y-1/2 rounded-r bg-[#00d4aa]" />
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

function AhisRail() {
  return (
    <div className="sticky bottom-0 z-30 flex h-10 items-center justify-around border-t border-white/10 bg-white/[0.02] px-4 backdrop-blur-xl">
      {RAIL_LAYERS.map(({ key, label, Icon }) => (
        <div
          key={key}
          className="flex items-center gap-2 text-[11px] text-[#94a3b8]"
        >
          <Icon className="h-3.5 w-3.5" />
          <span className="inline-block h-2 w-2 animate-breathe rounded-full bg-[#00d4aa]" />
          <span>{label}</span>
        </div>
      ))}
      <div className="ml-auto hidden items-center gap-1.5 text-[10px] text-[#64748b] md:flex">
        <Activity className="h-3 w-3" />
        AHIS · 5-layer health intelligence stack
      </div>
    </div>
  );
}

export function PageTitle({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-[#e2e8f0]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-sm text-[#94a3b8]">{subtitle}</p>
        )}
      </div>
      {right}
    </div>
  );
}

export function AdminPlaceholder({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle?: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-[1400px]">
      <PageTitle title={title} subtitle={subtitle} />
      <div className="glass rounded-[14px] p-10 text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748b]">
          Port in progress
        </div>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[#94a3b8]">
          {description}
        </p>
      </div>
    </div>
  );
}
