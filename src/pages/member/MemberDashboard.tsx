import { LayoutDashboard, User, CreditCard, DollarSign, CalendarCheck, TrendingUp, Settings } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import StatusBadge from "@/components/StatusBadge";
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

const cards = [
  { title: "Membership Status", value: <StatusBadge status="active" />, sub: "Pro Plan" },
  { title: "Next Payment", value: "Mar 15, 2025", sub: "LKR 8,500" },
  { title: "This Month", value: "18 Days", sub: "Attendance" },
  { title: "Current Weight", value: "78 kg", sub: "-2kg this month" },
];

const MemberDashboard = () => (
  <>
    <Navbar />
    <DashboardLayout links={memberLinks} title="Member Panel">
      <h1 className="text-3xl text-primary-foreground mb-8">DASHBOARD</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((c) => (
          <div key={c.title} className="bg-gym-dark border border-primary-foreground/5 p-6 card-hover">
            <div className="text-xs font-heading tracking-widest text-primary-foreground/40 mb-3">{c.title}</div>
            <div className="text-2xl font-heading text-primary-foreground mb-1">{c.value}</div>
            <div className="text-xs text-primary-foreground/40">{c.sub}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gym-dark border border-primary-foreground/5 p-6">
          <h3 className="text-sm font-heading tracking-widest text-primary-foreground/60 mb-4">RECENT ATTENDANCE</h3>
          <div className="space-y-3">
            {["Feb 15", "Feb 14", "Feb 13"].map((d) => (
              <div key={d} className="flex justify-between items-center text-sm py-2 border-b border-primary-foreground/5">
                <span className="text-primary-foreground/70">{d}</span>
                <span className="text-primary-foreground/40">6:00 AM - 7:30 AM</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gym-dark border border-primary-foreground/5 p-6">
          <h3 className="text-sm font-heading tracking-widest text-primary-foreground/60 mb-4">WEIGHT PROGRESS</h3>
          <div className="space-y-3">
            {[{ date: "Feb 15", w: "78 kg" }, { date: "Feb 1", w: "79 kg" }, { date: "Jan 15", w: "80 kg" }].map((p) => (
              <div key={p.date} className="flex justify-between items-center text-sm py-2 border-b border-primary-foreground/5">
                <span className="text-primary-foreground/70">{p.date}</span>
                <span className="text-primary font-medium">{p.w}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  </>
);

export default MemberDashboard;
