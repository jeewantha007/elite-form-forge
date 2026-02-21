import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => (
  <div className="bg-muted min-h-screen">
    <Navbar />
    <section className="pt-28 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-foreground mb-4">GET IN <span className="text-primary">TOUCH</span></h1>
          <p className="text-muted-foreground">Ready to start your journey? Reach out to us.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-background border border-border rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="text-xs font-heading tracking-widest text-muted-foreground mb-2 block">NAME</label>
                  <input type="text" className="w-full bg-muted border border-border px-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors rounded-md" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs font-heading tracking-widest text-muted-foreground mb-2 block">EMAIL</label>
                  <input type="email" className="w-full bg-muted border border-border px-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors rounded-md" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-xs font-heading tracking-widest text-muted-foreground mb-2 block">PHONE</label>
                  <input type="tel" className="w-full bg-muted border border-border px-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors rounded-md" placeholder="+94 77 123 4567" />
                </div>
                <div>
                  <label className="text-xs font-heading tracking-widest text-muted-foreground mb-2 block">MESSAGE</label>
                  <textarea rows={4} className="w-full bg-muted border border-border px-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors resize-none rounded-md" placeholder="Tell us about your goals..." />
                </div>
                <button type="button" className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors w-full justify-center group rounded-md">
                  SEND MESSAGE <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info + Map */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-8">
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Phone / WhatsApp", value: "+94 77 123 4567" },
                { icon: Mail, label: "Email", value: "info@elitefit.lk" },
                { icon: MapPin, label: "Location", value: "123 Fitness Street, Colombo 03, Sri Lanka" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-5 bg-background border border-border rounded-lg">
                  <c.icon size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-heading tracking-widest text-muted-foreground mb-1">{c.label}</div>
                    <div className="text-sm text-foreground">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-background border border-border flex items-center justify-center rounded-lg">
              <div className="text-center">
                <MapPin size={32} className="text-muted-foreground mx-auto mb-2" />
                <span className="text-xs text-muted-foreground font-heading tracking-wider">MAP PLACEHOLDER</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="tel:+94771234567" className="flex-1 flex items-center justify-center gap-2 bg-status-active text-white py-3 font-heading text-sm tracking-wider hover:opacity-90 transition-opacity rounded-md">
                <Phone size={16} /> CALL NOW
              </a>
              <a href="https://wa.me/94771234567" className="flex-1 flex items-center justify-center gap-2 bg-status-active text-white py-3 font-heading text-sm tracking-wider hover:opacity-90 transition-opacity rounded-md">
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
