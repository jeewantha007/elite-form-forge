import { LayoutDashboard, User, CreditCard, DollarSign, CalendarCheck, TrendingUp, Settings, LogIn, LogOut } from "lucide-react";
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

const attendance = [
  { date: "Feb 15, 2025", checkIn: "6:00 AM", checkOut: "7:30 AM" },
  { date: "Feb 14, 2025", checkIn: "6:15 AM", checkOut: "7:45 AM" },
  { date: "Feb 13, 2025", checkIn: "5:45 AM", checkOut: "7:15 AM" },
  { date: "Feb 12, 2025", checkIn: "6:30 AM", checkOut: "8:00 AM" },
  { date: "Feb 11, 2025", checkIn: "6:00 AM", checkOut: "7:30 AM" },
];

const MemberAttendance = () => (
  <>
    <Navbar />
    <DashboardLayout links={memberLinks} title="Member Panel">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl text-foreground">ATTENDANCE</h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-status-active text-white px-5 py-3 font-heading text-xs tracking-wider hover:opacity-90 transition-opacity rounded-md">
            <LogIn size={16} /> CHECK IN
          </button>
          <button className="flex items-center gap-2 bg-background border border-border text-foreground px-5 py-3 font-heading text-xs tracking-wider hover:bg-muted transition-colors rounded-md">
            <LogOut size={16} /> CHECK OUT
          </button>
        </div>
      </div>

      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-muted-foreground">DATE</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-muted-foreground">CHECK IN</th>
                <th className="text-left px-6 py-4 text-xs font-heading tracking-widest text-muted-foreground">CHECK OUT</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((a, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-foreground/70">{a.date}</td>
                  <td className="px-6 py-4 text-sm text-status-active">{a.checkIn}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{a.checkOut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  </>
);

export default MemberAttendance;
