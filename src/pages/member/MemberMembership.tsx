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

const MemberMembership = () => (
  <>
    <Navbar />
    <DashboardLayout links={memberLinks} title="Member Panel">
      <h1 className="text-3xl text-foreground mb-8">MEMBERSHIP</h1>
      <div className="max-w-2xl">
        <div className="bg-background border border-border rounded-lg p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-heading text-foreground mb-1">PRO PLAN</h2>
              <p className="text-sm text-muted-foreground">LKR 8,500 / month</p>
            </div>
            <StatusBadge status="active" />
          </div>
          <div className="space-y-4">
            {[
              { label: "START DATE", value: "Jan 15, 2025" },
              { label: "EXPIRY DATE", value: "Feb 15, 2025" },
              { label: "AUTO RENEWAL", value: "Enabled" },
              { label: "PAYMENT METHOD", value: "Card ending 4242" },
            ].map((f) => (
              <div key={f.label} className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-xs font-heading tracking-widest text-muted-foreground">{f.label}</span>
                <span className="text-sm text-foreground">{f.value}</span>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-primary text-primary-foreground px-6 py-3 font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors rounded-md">
            UPGRADE PLAN
          </button>
        </div>
      </div>
    </DashboardLayout>
  </>
);

export default MemberMembership;
