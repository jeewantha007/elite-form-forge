import { LayoutDashboard, Users, DollarSign, CalendarCheck, CreditCard, Settings, Search } from "lucide-react";
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

const members = [
  { name: "Kasun Perera", plan: "Pro", expiry: "Mar 15, 2025", status: "active" as const },
  { name: "Amara Silva", plan: "Elite", expiry: "Feb 28, 2025", status: "expiring" as const },
  { name: "Dinesh Kumar", plan: "Starter", expiry: "Jan 30, 2025", status: "expired" as const },
  { name: "Nadeesha Fernando", plan: "Pro", expiry: "Apr 1, 2025", status: "active" as const },
  { name: "Saman Jayawardena", plan: "Elite", expiry: "Mar 20, 2025", status: "active" as const },
  { name: "Malini Rajapaksa", plan: "Starter", expiry: "Feb 10, 2025", status: "expired" as const },
];

const AdminMembers = () => (
  <>
    <Navbar />
    <DashboardLayout links={adminLinks} title="Admin Panel">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="text-3xl text-primary-foreground">MEMBERS</h1>
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/30" />
          <input
            type="text"
            placeholder="Search members..."
            className="bg-gym-dark border border-primary-foreground/10 pl-11 pr-4 py-3 text-primary-foreground text-sm focus:border-primary focus:outline-none transition-colors w-64"
          />
        </div>
      </div>

      <div className="bg-gym-dark border border-primary-foreground/5 overflow-hidden">
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
              {members.map((m, i) => (
                <tr key={i} className="border-b border-primary-foreground/5 hover:bg-gym-black/30 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gym-black flex items-center justify-center text-sm font-heading text-primary">
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

export default AdminMembers;
