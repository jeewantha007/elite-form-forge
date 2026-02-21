import { LayoutDashboard, Users, DollarSign, CalendarCheck, CreditCard, Settings } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import StatusBadge from "@/components/StatusBadge";
import Navbar from "@/components/Navbar";

const adminLinks = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Members", path: "/admin/members", icon: Users },
  { label: "Payments", path: "/admin/payments", icon: DollarSign },
  { label: "Attendance", path: "/admin/attendance", icon: CalendarCheck },
  { label: "Plans", path: "/admin/plans", icon: CreditCard },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

const payments = [
  { member: "Kasun Perera", amount: "LKR 15,000", date: "Feb 15, 2025", plan: "Pro", status: "paid" as const },
  { member: "Amara Silva", amount: "LKR 25,000", date: "Feb 10, 2025", plan: "Elite", status: "paid" as const },
  { member: "Dinesh Kumar", amount: "LKR 8,000", date: "Jan 30, 2025", plan: "Starter", status: "overdue" as const },
  { member: "Nadeesha Fernando", amount: "LKR 15,000", date: "Feb 20, 2025", plan: "Pro", status: "pending" as const },
  { member: "Saman Jayawardena", amount: "LKR 25,000", date: "Feb 18, 2025", plan: "Elite", status: "paid" as const },
  { member: "Malini Rajapaksa", amount: "LKR 8,000", date: "Jan 15, 2025", plan: "Starter", status: "overdue" as const },
];

const AdminPayments = () => (
  <>
    <Navbar />
    <DashboardLayout links={adminLinks} title="Admin Panel">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="text-3xl text-foreground">PAYMENTS</h1>
        <div className="flex gap-3">
          <div className="bg-background border border-border rounded-lg px-5 py-3 text-center">
            <div className="text-xs font-heading tracking-widest text-muted-foreground mb-1">TOTAL COLLECTED</div>
            <div className="text-xl font-heading text-status-active">LKR 1.8M</div>
          </div>
          <div className="bg-background border border-border rounded-lg px-5 py-3 text-center">
            <div className="text-xs font-heading tracking-widest text-muted-foreground mb-1">PENDING</div>
            <div className="text-xl font-heading text-status-expiring">LKR 23K</div>
          </div>
          <div className="bg-background border border-border rounded-lg px-5 py-3 text-center">
            <div className="text-xs font-heading tracking-widest text-muted-foreground mb-1">OVERDUE</div>
            <div className="text-xl font-heading text-status-overdue">LKR 16K</div>
          </div>
        </div>
      </div>

      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-muted-foreground">MEMBER</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-muted-foreground">PLAN</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-muted-foreground">AMOUNT</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-muted-foreground">DATE</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-muted-foreground">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-heading text-primary">
                        {p.member[0]}
                      </div>
                      <span className="text-sm text-foreground/80">{p.member}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{p.plan}</td>
                  <td className="px-6 py-4 text-sm font-heading text-foreground">{p.amount}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{p.date}</td>
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

export default AdminPayments;
