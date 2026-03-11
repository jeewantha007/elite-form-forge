import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => (
  <div className="bg-gym-black min-h-screen text-white">
    <Navbar />
    <section className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-lg tracking-[0.3em] uppercase block mb-4">— Contact</span>
          <h1 className="text-4xl md:text-5xl text-white mb-6 font-heading font-bold uppercase tracking-wide">GET IN <span className="text-gradient-gold">TOUCH</span></h1>
          <p className="text-[#888] max-w-xl mx-auto text-lg leading-relaxed">Ready to start your journey? Reach out to us for membership inquiries, personal training, or to claim your free trial.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="bg-[#111] border border-white/10 rounded-lg p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <form className="space-y-6 relative z-10">
                <div>
                  <label className="text-xs font-heading tracking-[0.2em] text-[#888] mb-3 block uppercase">Name</label>
                  <input type="text" className="w-full bg-[#1a1a1a] border border-white/10 px-5 py-4 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-body rounded-sm" placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-xs font-heading tracking-[0.2em] text-[#888] mb-3 block uppercase">Email Address</label>
                  <input type="email" className="w-full bg-[#1a1a1a] border border-white/10 px-5 py-4 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-body rounded-sm" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-xs font-heading tracking-[0.2em] text-[#888] mb-3 block uppercase">Phone Number</label>
                  <input type="tel" className="w-full bg-[#1a1a1a] border border-white/10 px-5 py-4 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-body rounded-sm" placeholder="+94 77 123 4567" />
                </div>
                <div>
                  <label className="text-xs font-heading tracking-[0.2em] text-[#888] mb-3 block uppercase">Message</label>
                  <textarea rows={5} className="w-full bg-[#1a1a1a] border border-white/10 px-5 py-4 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none font-body rounded-sm" placeholder="Tell us about your fitness goals..." />
                </div>
                <button type="button" className="flex items-center justify-center gap-3 bg-primary text-black px-8 py-5 font-heading text-sm tracking-[0.2em] hover:bg-white gym-glow transition-all w-full group uppercase mt-4 shadow-xl">
                  SEND MESSAGE <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info + Map */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Phone / WhatsApp", value: "+94 77 123 4567" },
                { icon: Mail, label: "Email", value: "info@nssfitness.lk" },
                { icon: MapPin, label: "Location", value: "123 Fitness Street, Colombo 03, Sri Lanka" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-6 p-6 bg-[#111] border border-white/5 hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <c.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-heading tracking-[0.2em] text-[#888] mb-1 uppercase">{c.label}</div>
                    <div className="text-[#ddd] text-[15px]">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="flex-1 min-h-[250px] bg-[#1a1a1a] border border-white/5 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <div className="text-center relative z-10">
                <MapPin size={40} className="text-[#555] group-hover:text-primary transition-colors mx-auto mb-3" />
                <span className="text-sm text-[#888] group-hover:text-white transition-colors font-heading tracking-[0.2em] uppercase">VIEW ON MAPS</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="tel:+94771234567" className="flex-1 flex items-center justify-center gap-3 border-2 border-[#333] text-white py-4 font-heading text-sm tracking-[0.2em] uppercase hover:border-white transition-colors">
                <Phone size={16} /> CALL NOW
              </a>
              <a href="https://wa.me/94771234567" className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 font-heading text-sm tracking-[0.2em] uppercase hover:bg-[#1DA851] transition-colors shadow-lg shadow-[#25D366]/20">
                WHATSAPP
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ContactPage;
