import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Instagram, Facebook } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Bar - Hidden entirely now based on feedback */}
      <div className="hidden">
        <div className="container mx-auto px-4 h-full flex items-center justify-between text-xs text-black font-heading tracking-widest uppercase">
          <div className="flex items-center gap-6">
            <a href="tel:+94771234567" className="flex items-center gap-2 hover:bg-black/10 px-2 py-1 rounded transition-colors">
              <Phone size={12} className="text-black" /> +94 77 123 4567
            </a>
            <a href="mailto:info@nssfitness.lk" className="flex items-center gap-2 hover:bg-black/10 px-2 py-1 rounded transition-colors">
              <Mail size={12} className="text-black" /> info@nssfitness.lk
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-70">Follow Us:</span>
            <a href="#" className="hover:bg-black/10 p-1 rounded transition-colors"><Instagram size={14} /></a>
            <a href="#" className="hover:bg-black/10 p-1 rounded transition-colors"><Facebook size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${scrolled ? 'bg-[#111]/95 backdrop-blur-md shadow-lg border-b border-white/5 py-0' : 'bg-[#111]/90 backdrop-blur-sm border-b border-white/5 py-1'}`}>
        <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative p-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)] border border-white/50 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] group-hover:scale-105 transition-all duration-300 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-200"></div>
              <img src={logo} alt="NSS Fitness Centre" className="relative h-12 w-auto object-contain z-10" />
            </div>
            <span className="font-heading text-xl tracking-[0.2em] text-white hidden sm:inline uppercase drop-shadow-md">NSS <span className="text-primary">FITNESS CENTRE</span></span>
          </Link>

        {/* Desktop */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className={`font-heading text-sm tracking-[0.2em] transition-all uppercase relative group py-2 ${
                    pathname === l.path ? "text-primary" : "text-[#aaa] hover:text-white"
                  }`}
                >
                  {l.label}
                  {pathname === l.path && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-t-full shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 rounded-t-full" />
                </Link>
              ))}
              <Link to="/contact" className="ml-4 border border-primary text-primary px-6 py-2.5 font-heading text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-black transition-all">
                JOIN NOW
              </Link>
            </div>

          <button className="lg:hidden text-white hover:text-primary transition-colors p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden bg-gym-black border-t border-white/10 overflow-hidden transition-all duration-300 ${open ? 'max-h-[400px] opacity-100 shadow-xl' : 'max-h-0 opacity-0 border-transparent'}`}>
          <div className="px-4 py-4 flex flex-col gap-2">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 font-heading text-sm tracking-[0.2em] uppercase rounded-md transition-colors ${
                pathname === l.path ? "bg-primary/10 text-primary border-l-2 border-primary" : "text-[#aaa] hover:bg-white/5 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="mt-4 block w-full text-center bg-primary text-black px-4 py-3 font-heading text-sm tracking-[0.2em] uppercase hover:bg-white transition-all gym-glow">
            JOIN NOW
          </Link>
          <div className="mt-6 pt-6 border-t border-white/5 flex justify-center gap-6 pb-2">
            <a href="#" className="text-[#888] hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-[#888] hover:text-primary transition-colors"><Facebook size={20} /></a>
          </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
