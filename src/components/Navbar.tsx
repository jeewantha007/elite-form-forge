import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Coach", path: "/coach" },
  { label: "Plans", path: "/plans" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="NSS Fitness Centre" className="h-20 w-auto -mt-2" />
          <span className="font-heading text-xl tracking-widest text-foreground hidden sm:inline">NSS <span className="text-primary">FITNESS CENTRE</span></span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`font-heading text-sm tracking-wider transition-colors hover:text-primary ${
                pathname === l.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="font-heading text-sm tracking-wider text-foreground/70 hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-primary text-primary-foreground px-5 py-2 font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors rounded-md"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`block py-3 font-heading text-sm tracking-wider ${
                pathname === l.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-3 border-t border-border">
            <Link to="/login" onClick={() => setOpen(false)} className="text-foreground/70 font-heading text-sm">Login</Link>
            <Link to="/register" onClick={() => setOpen(false)} className="bg-primary text-primary-foreground px-5 py-2 font-heading text-sm rounded-md">Join Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
