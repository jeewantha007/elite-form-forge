import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "STARTER",
    price: "5,000",
    period: "month",
    features: ["Full Gym Access", "Locker Room Access", "Basic Support", "Open Gym Hours"],
  },
  {
    name: "PRO",
    price: "8,500",
    period: "month",
    popular: true,
    features: ["Everything in Starter", "Personal Training (2x/week)", "Custom Diet Plan", "Progress Tracking", "Priority Support"],
  },
  {
    name: "ELITE",
    price: "15,000",
    period: "month",
    features: ["Everything in Pro", "1-on-1 Head Coach Sessions", "Supplements Guide", "Priority Booking", "Recovery Sessions", "24/7 Access"],
  },
];

const PlansPage = () => (
  <div className="bg-gym-black min-h-screen text-white">
    <Navbar />
    <section className="pt-32 pb-28 relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary font-heading text-lg tracking-[0.3em] uppercase block mb-4">— Pricing</span>
          <h1 className="text-4xl md:text-5xl text-white mb-6 font-heading font-bold uppercase tracking-wide">MEMBERSHIP <span className="text-gradient-gold">PLANS</span></h1>
          <p className="text-[#888] max-w-xl mx-auto text-lg leading-relaxed">Invest in yourself. Choose the plan that matches your ambition.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative p-12 card-hover flex flex-col ${
                p.popular ? "bg-[#111] border-2 border-primary shadow-2xl shadow-primary/20 scale-105 z-10" : "bg-[#111] border border-white/10 shadow-xl opacity-90 hover:opacity-100"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-sm font-heading tracking-widest uppercase px-6 py-1.5 shadow-lg shadow-primary/30 gym-glow">
                  MOST POPULAR
                </span>
              )}
              <h3 className={`text-xl font-heading tracking-widest uppercase mb-6 text-center ${p.popular ? "text-primary" : "text-white"}`}>{p.name}</h3>
              <div className="mb-2 text-center text-white">
                <span className="text-5xl font-heading drop-shadow-md">LKR {p.price}</span>
              </div>
              <div className="text-center text-[#888] text-sm uppercase tracking-widest mb-10 pb-10 border-b border-white/10">PER {p.period}</div>
              
              <ul className="space-y-5 mb-12 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="text-[15px] flex items-start gap-4 text-[#aaa]">
                    <Check size={20} className={`${p.popular ? "text-primary" : "text-white/40"} flex-shrink-0 mt-0.5`} /> {f}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/register"
                className={`flex items-center justify-center gap-3 py-5 font-heading text-sm tracking-[0.2em] transition-all uppercase group ${
                  p.popular ? "bg-primary text-black hover:bg-white gym-glow shadow-md" : "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black"
                }`}
              >
                GET STARTED <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default PlansPage;
