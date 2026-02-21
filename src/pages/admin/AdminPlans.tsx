import { LayoutDashboard, Users, DollarSign, CalendarCheck, CreditCard, Settings, Edit, Trash2 } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import Navbar from "@/components/Navbar";

const adminLinks = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Members", path: "/admin/members", icon: Users },
  { label: "Payments", path: "/admin/payments", icon: DollarSign },
  { label: "Attendance", path: "/admin/attendance", icon: CalendarCheck },
  { label: "Plans", path: "/admin/plans", icon: CreditCard },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

const plans = [
  { name: "STARTER", price: "LKR 8,000", duration: "1 Month", members: 45, features: ["Gym Access", "Locker Room", "Basic Equipment"] },
  { name: "PRO", price: "LKR 15,000", duration: "1 Month", members: 120, features: ["All Starter Features", "Personal Training", "Nutrition Plan", "Progress Tracking"] },
  { name: "ELITE", price: "LKR 25,000", duration: "1 Month", members: 45, features: ["All Pro Features", "1-on-1 Coaching", "Diet Consultation", "Priority Booking", "Sauna Access"] },
];

const AdminPlans = () => (
  <>
    <Navbar />
    <DashboardLayout links={adminLinks} title="Admin Panel">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="text-3xl text-foreground">PLANS</h1>
        <button className="bg-primary text-primary-foreground px-6 py-3 text-sm font-heading tracking-wider hover:bg-primary/90 transition-colors rounded-md">
          + ADD NEW PLAN
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-background border border-border rounded-lg p-6 card-hover group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-heading text-lg text-primary mb-1">{plan.name}</h3>
                <div className="text-2xl font-heading text-foreground">{plan.price}</div>
                <div className="text-xs text-muted-foreground mt-1">{plan.duration}</div>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-8 h-8 flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors rounded">
                  <Edit size={14} className="text-muted-foreground" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-muted hover:bg-status-overdue/20 transition-colors rounded">
                  <Trash2 size={14} className="text-muted-foreground" />
                </button>
              </div>
            </div>

            <div className="text-xs font-heading tracking-widest text-muted-foreground mb-3">
              {plan.members} ACTIVE MEMBERS
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              {plan.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  </>
);

export default AdminPlans;
