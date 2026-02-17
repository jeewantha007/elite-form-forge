import { LayoutDashboard, User, CreditCard, DollarSign, CalendarCheck, TrendingUp, Settings, Plus } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import Navbar from "@/components/Navbar";

const memberLinks = [
  { label: "Dashboard", path: "/member", icon: LayoutDashboard },
  { label: "My Profile", path: "/member/profile", icon: User },
  { label: "Membership", path: "/member/membership", icon: CreditCard },
  { label: "Payments", path: "/member/payments", icon: DollarSign },
  { label: "Attendance", path: "/member/attendance", icon: CalendarCheck },
  { label: "Progress", path: "/member/progress", icon: TrendingUp },
  { label: "Settings", path: "/member/settings", icon: Settings },
];

const progressHistory = [
  { date: "Feb 15, 2025", weight: "78 kg", change: "-1 kg" },
  { date: "Feb 1, 2025", weight: "79 kg", change: "-1 kg" },
  { date: "Jan 15, 2025", weight: "80 kg", change: "-2 kg" },
  { date: "Jan 1, 2025", weight: "82 kg", change: "Start" },
];

const MemberProgress = () => (
  <>
    <Navbar />
    <DashboardLayout links={memberLinks} title="Member Panel">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl text-primary-foreground">PROGRESS</h1>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-heading text-xs tracking-wider hover:bg-primary/90 transition-colors">
          <Plus size={16} /> ADD PROGRESS
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {[
          { label: "STARTING WEIGHT", value: "82 kg" },
          { label: "CURRENT WEIGHT", value: "78 kg" },
          { label: "TOTAL LOST", value: "-4 kg" },
        ].map((c) => (
          <div key={c.label} className="bg-gym-dark border border-primary-foreground/5 p-6">
            <div className="text-xs font-heading tracking-widest text-primary-foreground/40 mb-2">{c.label}</div>
            <div className="text-3xl font-heading text-primary">{c.value}</div>
          </div>
        ))}
      </div>

      {/* History */}
      <div className="bg-gym-dark border border-primary-foreground/5 overflow-hidden">
        <div className="px-6 py-4 border-b border-primary-foreground/10">
          <h3 className="text-xs font-heading tracking-widest text-primary-foreground/60">PROGRESS HISTORY</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary-foreground/10">
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-primary-foreground/40">DATE</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-primary-foreground/40">WEIGHT</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-primary-foreground/40">CHANGE</th>
              </tr>
            </thead>
            <tbody>
              {progressHistory.map((p, i) => (
                <tr key={i} className="border-b border-primary-foreground/5 hover:bg-gym-black/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-primary-foreground/70">{p.date}</td>
                  <td className="px-6 py-4 text-sm text-primary-foreground font-medium">{p.weight}</td>
                  <td className={`px-6 py-4 text-sm font-medium ${p.change.startsWith("-") ? "text-status-active" : "text-primary-foreground/50"}`}>{p.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  </>
);

export default MemberProgress;
