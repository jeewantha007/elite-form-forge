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

const stats = [
  { label: "TOTAL MEMBERS", value: "248", change: "+12 this month" },
  { label: "ACTIVE PLANS", value: "210", change: "85% active" },
  { label: "REVENUE", value: "LKR 1.8M", change: "+8% vs last month" },
  { label: "TODAY'S CHECK-INS", value: "42", change: "Active now" },
];

const AdminDashboard = () => (
  <>
    <Navbar />
    <DashboardLayout links={adminLinks} title="Admin Panel">
      <h1 className="text-3xl text-primary-foreground mb-8">ADMIN DASHBOARD</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-gym-dark border border-primary-foreground/5 p-6 card-hover">
            <div className="text-xs font-heading tracking-widest text-primary-foreground/40 mb-3">{s.label}</div>
            <div className="text-3xl font-heading text-primary mb-1">{s.value}</div>
            <div className="text-xs text-primary-foreground/40">{s.change}</div>
          </div>
        ))}
      </div>

      {/* Recent Members */}
      <div className="bg-gym-dark border border-primary-foreground/5 overflow-hidden">
        <div className="px-6 py-4 border-b border-primary-foreground/10 flex justify-between items-center">
          <h3 className="text-xs font-heading tracking-widest text-primary-foreground/60">RECENT MEMBERS</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary-foreground/10">
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-primary-foreground/40">MEMBER</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-primary-foreground/40">PLAN</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-primary-foreground/40">EXPIRY</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-primary-foreground/40">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Kasun Perera", plan: "Pro", expiry: "Mar 15, 2025", status: "active" as const },
                { name: "Amara Silva", plan: "Elite", expiry: "Feb 28, 2025", status: "expiring" as const },
                { name: "Dinesh Kumar", plan: "Starter", expiry: "Jan 30, 2025", status: "expired" as const },
                { name: "Nadeesha F.", plan: "Pro", expiry: "Apr 1, 2025", status: "active" as const },
              ].map((m, i) => (
                <tr key={i} className="border-b border-primary-foreground/5 hover:bg-gym-black/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gym-black flex items-center justify-center text-xs font-heading text-primary">
                        {m.name[0]}
                      </div>
                      <span className="text-sm text-primary-foreground/80">{m.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-primary-foreground/60">{m.plan}</td>
                  <td className="px-6 py-4 text-sm text-primary-foreground/60">{m.expiry}</td>
                  <td className="px-6 py-4"><StatusBadge status={m.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  </>
);

export default AdminDashboard;
