import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  links: { label: string; path: string; icon: LucideIcon }[];
  title: string;
}

const DashboardLayout = ({ children, links, title }: DashboardLayoutProps) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-gym-black flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-gym-dark border-r border-primary-foreground/10 pt-20">
        <div className="px-6 py-4">
          <h2 className="font-heading text-xs tracking-widest text-primary-foreground/40 uppercase">{title}</h2>
        </div>
        <nav className="flex-1 px-3">
          {links.map((l) => {
            const active = pathname === l.path;
            return (
              <Link
                key={l.path}
                to={l.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-md mb-1 text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/5"
                }`}
              >
                <l.icon size={18} />
                {l.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 pt-20 px-4 md:px-8 pb-12 overflow-auto">
        {/* Mobile nav */}
        <div className="md:hidden flex gap-2 overflow-x-auto pb-4 mb-4 border-b border-primary-foreground/10">
          {links.map((l) => {
            const active = pathname === l.path;
            return (
              <Link
                key={l.path}
                to={l.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  active ? "bg-primary text-primary-foreground" : "bg-gym-dark text-primary-foreground/60"
                }`}
              >
                <l.icon size={14} />
                {l.label}
              </Link>
            );
          })}
        </div>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
