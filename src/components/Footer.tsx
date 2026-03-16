import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-[#0a0a0a] border-t-4 border-primary text-[#888]">
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-4 group inline-flex mb-2">
            <div className="relative p-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)] border border-white/50 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] group-hover:scale-105 transition-all duration-300 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-200"></div>
              <img src={logo} alt="NSS Fitness Centre" className="relative h-12 w-auto object-contain z-10" />
            </div>
            <h3 className="text-xl font-heading tracking-widest text-white uppercase drop-shadow-md">
              NSS <span className="text-primary">FITNESS CENTRE</span>
            </h3>
          </Link>
          <p className="text-[15px] leading-relaxed max-w-sm">
            Sri Lanka's premier fitness destination. State-of-the-art equipment, professional coaching, and a community dedicated to excellence.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-heading tracking-[0.2em] mb-6 text-white uppercase flex items-center gap-2">
            <span className="w-4 h-1 bg-primary"></span> Quick Links
          </h4>
          <div className="flex flex-col gap-3">
            {["Home", "Coach", "Plans", "Gallery", "Contact"].map((l) => (
              <Link key={l} to={`/${l === "Home" ? "" : l.toLowerCase()}`} className="text-[#888] hover:text-white hover:pl-2 transition-all flex items-center gap-2 text-sm uppercase font-heading tracking-widest">
                <ArrowRight size={12} className="text-primary" /> {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-heading tracking-[0.2em] mb-6 text-white uppercase flex items-center gap-2">
            <span className="w-4 h-1 bg-primary"></span> Contact Us
          </h4>
          <div className="flex flex-col gap-5 text-sm">
            <a href="tel:+94713018615" className="flex items-start gap-4 hover:text-primary transition-colors group">
              <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20">
                <Phone size={14} className="text-primary" />
              </div>
              <span className="mt-1">071 301 8615</span>
            </a>
            <a href="mailto:info@nssfitness.lk" className="flex items-start gap-4 hover:text-primary transition-colors group">
              <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20">
                <Mail size={14} className="text-primary" />
              </div>
              <span className="mt-1">info@nssfitness.lk</span>
            </a>
            <div className="flex items-start gap-4 group">
              <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20">
                <MapPin size={14} className="text-primary" />
              </div>
              <span className="mt-1 group-hover:text-white transition-colors">Welipara Rd, Welivita,<br />Sri Lanka</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-heading tracking-[0.2em] mb-6 text-white uppercase flex items-center gap-2">
            <span className="w-4 h-1 bg-primary"></span> Newsletter
          </h4>
          <p className="text-sm mb-4 leading-relaxed">Subscribe for fitness tips and exclusive offers.</p>
          <form className="flex">
            <input type="email" placeholder="Your Email Address" className="bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-primary w-full rounded-l-md font-body transition-colors" />
            <button type="button" className="bg-primary text-black px-4 py-3 hover:bg-white transition-colors rounded-r-md">
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest font-heading uppercase">
        <div>© 2025 <span className="text-primary">NSS FITNESS CENTRE</span>. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
