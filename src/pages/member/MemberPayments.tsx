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

const payments = [
  { date: "Feb 15, 2025", amount: "LKR 8,500", status: "paid" as const },
  { date: "Jan 15, 2025", amount: "LKR 8,500", status: "paid" as const },
  { date: "Dec 15, 2024", amount: "LKR 8,500", status: "paid" as const },
  { date: "Nov 15, 2024", amount: "LKR 5,000", status: "paid" as const },
];

const MemberPayments = () => (
  <>
    <Navbar />
    <DashboardLayout links={memberLinks} title="Member Panel">
      <h1 className="text-3xl text-primary-foreground mb-8">PAYMENTS</h1>
      <div className="bg-gym-dark border border-primary-foreground/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary-foreground/10">
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-primary-foreground/40">DATE</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-primary-foreground/40">AMOUNT</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-primary-foreground/40">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p, i) => (
                <tr key={i} className="border-b border-primary-foreground/5 hover:bg-gym-black/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-primary-foreground/70">{p.date}</td>
                  <td className="px-6 py-4 text-sm text-primary-foreground/70">{p.amount}</td>
                  <td className="px-6 py-4"><StatusBadge status={p.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  </>
);

export default MemberPayments;
