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

const attendance = [
  { name: "Kasun Perera", date: "Feb 21, 2025", checkIn: "06:30 AM", checkOut: "08:15 AM", duration: "1h 45m" },
  { name: "Amara Silva", date: "Feb 21, 2025", checkIn: "07:00 AM", checkOut: "08:30 AM", duration: "1h 30m" },
  { name: "Saman Jayawardena", date: "Feb 21, 2025", checkIn: "05:45 AM", checkOut: "07:30 AM", duration: "1h 45m" },
  { name: "Nadeesha Fernando", date: "Feb 21, 2025", checkIn: "08:00 AM", checkOut: "—", duration: "In progress" },
  { name: "Kasun Perera", date: "Feb 20, 2025", checkIn: "06:15 AM", checkOut: "08:00 AM", duration: "1h 45m" },
  { name: "Dinesh Kumar", date: "Feb 20, 2025", checkIn: "07:30 AM", checkOut: "09:00 AM", duration: "1h 30m" },
];

const AdminAttendance = () => (
  <>
    <Navbar />
    <DashboardLayout links={adminLinks} title="Admin Panel">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="text-3xl text-foreground">ATTENDANCE</h1>
        <div className="flex gap-3">
          <div className="bg-background border border-border rounded-lg px-5 py-3 text-center">
            <div className="text-xs font-heading tracking-widest text-muted-foreground mb-1">TODAY</div>
            <div className="text-xl font-heading text-primary">42</div>
          </div>
          <div className="bg-background border border-border rounded-lg px-5 py-3 text-center">
            <div className="text-xs font-heading tracking-widest text-muted-foreground mb-1">ACTIVE NOW</div>
            <div className="text-xl font-heading text-status-active">8</div>
          </div>
        </div>
      </div>

      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-muted-foreground">MEMBER</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-muted-foreground">DATE</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-muted-foreground">CHECK IN</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-muted-foreground">CHECK OUT</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-muted-foreground">DURATION</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((a, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-heading text-primary">
                        {a.name[0]}
                      </div>
                      <span className="text-sm text-foreground/80">{a.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{a.date}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{a.checkIn}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{a.checkOut}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{a.duration === "In progress" ? <span className="text-status-active">{a.duration}</span> : a.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  </>
);

export default AdminAttendance;
