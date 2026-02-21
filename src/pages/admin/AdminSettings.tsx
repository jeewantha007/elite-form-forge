import { LayoutDashboard, Users, DollarSign, CalendarCheck, CreditCard, Settings } from "lucide-react";
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

const AdminSettings = () => (
  <>
    <Navbar />
    <DashboardLayout links={adminLinks} title="Admin Panel">
      <h1 className="text-3xl text-foreground mb-8">SETTINGS</h1>

      <div className="space-y-6 max-w-2xl">
        <div className="bg-background border border-border rounded-lg p-6">
          <h3 className="text-xs font-heading tracking-widest text-muted-foreground mb-6">GYM INFORMATION</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-muted-foreground mb-2">Gym Name</label>
              <input defaultValue="PowerZone Fitness" className="w-full bg-muted border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors rounded-md" />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-2">Address</label>
              <input defaultValue="123 Fitness Road, Colombo 07" className="w-full bg-muted border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors rounded-md" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-muted-foreground mb-2">Phone</label>
                <input defaultValue="+94 77 123 4567" className="w-full bg-muted border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors rounded-md" />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-2">Email</label>
                <input defaultValue="info@powerzone.lk" className="w-full bg-muted border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors rounded-md" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-background border border-border rounded-lg p-6">
          <h3 className="text-xs font-heading tracking-widest text-muted-foreground mb-6">OPERATING HOURS</h3>
          <div className="space-y-3">
            {[
              { day: "Monday – Friday", hours: "5:00 AM – 10:00 PM" },
              { day: "Saturday", hours: "6:00 AM – 8:00 PM" },
              { day: "Sunday", hours: "7:00 AM – 6:00 PM" },
            ].map((h) => (
              <div key={h.day} className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-sm text-foreground">{h.day}</span>
                <span className="text-sm text-muted-foreground">{h.hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-background border border-border rounded-lg p-6">
          <h3 className="text-xs font-heading tracking-widest text-muted-foreground mb-6">ADMIN ACCOUNT</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-muted-foreground mb-2">Admin Email</label>
              <input defaultValue="admin@powerzone.lk" className="w-full bg-muted border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors rounded-md" />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-2">Change Password</label>
              <input type="password" placeholder="New password" className="w-full bg-muted border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors rounded-md" />
            </div>
          </div>
        </div>

        <button className="bg-primary text-primary-foreground px-8 py-3 text-sm font-heading tracking-wider hover:bg-primary/90 transition-colors rounded-md">
          SAVE CHANGES
        </button>
      </div>
    </DashboardLayout>
  </>
);

export default AdminSettings;
