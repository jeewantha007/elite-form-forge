import { LayoutDashboard, User, CreditCard, DollarSign, CalendarCheck, TrendingUp, Settings, Camera, Edit } from "lucide-react";
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

const MemberProfile = () => (
  <>
    <Navbar />
    <DashboardLayout links={memberLinks} title="Member Panel">
      <h1 className="text-3xl text-foreground mb-8">MY PROFILE</h1>
      <div className="max-w-2xl">
        <div className="bg-background border border-border rounded-lg p-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-muted border-2 border-border flex items-center justify-center flex-shrink-0">
              <Camera size={24} className="text-muted-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-heading text-foreground">KASUN PERERA</h2>
              <p className="text-sm text-muted-foreground">Member since Jan 2024</p>
            </div>
          </div>

          <div className="space-y-5">
            {[
              { label: "FULL NAME", value: "Kasun Perera" },
              { label: "EMAIL", value: "kasun@email.com" },
              { label: "PHONE", value: "+94 77 123 4567" },
              { label: "HEIGHT", value: "178 cm" },
              { label: "WEIGHT", value: "78 kg" },
              { label: "FITNESS GOAL", value: "Muscle Gain" },
            ].map((f) => (
              <div key={f.label} className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-xs font-heading tracking-widest text-muted-foreground">{f.label}</span>
                <span className="text-sm text-foreground">{f.value}</span>
              </div>
            ))}
          </div>

          <button className="mt-8 flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors rounded-md">
            <Edit size={16} /> EDIT PROFILE
          </button>
        </div>
      </div>
    </DashboardLayout>
  </>
);

export default MemberProfile;
