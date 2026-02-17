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
  <div className="bg-gym-black min-h-screen">
    <Navbar />
    <section className="pt-28 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-primary-foreground mb-4">MEMBERSHIP <span className="text-primary">PLANS</span></h1>
          <p className="text-primary-foreground/50 max-w-md mx-auto">Invest in yourself. Choose the plan that matches your ambition.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative p-10 card-hover flex flex-col ${
                p.popular ? "bg-primary" : "bg-gym-dark border border-primary-foreground/10"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gym-black text-primary text-xs font-heading tracking-widest px-4 py-1">
                  MOST POPULAR
                </span>
              )}
              <h3 className={`text-sm tracking-widest mb-6 ${p.popular ? "text-primary-foreground/70" : "text-primary"}`}>{p.name}</h3>
              <div className={`mb-1 ${p.popular ? "text-primary-foreground" : "text-primary-foreground"}`}>
                <span className="text-5xl font-heading">LKR {p.price}</span>
              </div>
              <div className={`text-sm mb-8 ${p.popular ? "text-primary-foreground/50" : "text-primary-foreground/40"}`}>per {p.period}</div>
              <ul className="space-y-4 mb-10 flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`text-sm flex items-start gap-3 ${p.popular ? "text-primary-foreground/80" : "text-primary-foreground/60"}`}>
                    <Check size={16} className="flex-shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/register"
                className={`flex items-center justify-center gap-2 py-4 font-heading text-sm tracking-wider transition-colors group ${
                  p.popular ? "bg-gym-black text-primary-foreground hover:bg-gym-dark" : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                GET STARTED <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
