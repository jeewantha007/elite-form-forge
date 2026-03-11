import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-gym-black text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="NSS Fitness Centre" className="h-16 w-auto brightness-200" />
            <h3 className="text-2xl tracking-widest text-white">
              NSS <span className="text-primary">FITNESS CENTRE</span>
            </h3>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            Sri Lanka's premier fitness destination. Train with the best, become the best.
          </p>
        </div>

        <div>
          <h4 className="text-sm tracking-widest mb-4 text-white">QUICK LINKS</h4>
          <div className="flex flex-col gap-2">
            {["Home", "Coach", "Plans", "Gallery", "Contact"].map((l) => (
              <Link key={l} to={`/${l === "Home" ? "" : l.toLowerCase()}`} className="text-sm text-white/60 hover:text-primary transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm tracking-widest mb-4 text-white">CONTACT</h4>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <span className="flex items-center gap-2"><Phone size={14} /> +94 77 123 4567</span>
            <span className="flex items-center gap-2"><Mail size={14} /> info@nssfitness.lk</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Colombo 03, Sri Lanka</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm tracking-widest mb-4 text-white">FOLLOW US</h4>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-white/40">
        © 2025 NSS Fitness Center. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
