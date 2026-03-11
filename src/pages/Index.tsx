import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Users, Trophy, Star, ChevronRight, Zap, Shield, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-gym.jpg";
import coachImage from "@/assets/coach-portrait.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const features = [
  { icon: Dumbbell, title: "Premium Equipment", desc: "World-class machines and free weights" },
  { icon: Users, title: "Expert Coaching", desc: "1-on-1 personal training sessions" },
  { icon: Zap, title: "High Intensity", desc: "Results-driven training programs" },
  { icon: Shield, title: "Safe Environment", desc: "Clean, secure training space" },
];

const plans = [
  { name: "STARTER", price: "5,000", period: "/month", features: ["Gym Access", "Locker Room", "Basic Support"] },
  { name: "PRO", price: "8,500", period: "/month", features: ["All Starter Features", "Personal Training", "Diet Plan", "Progress Tracking"], popular: true },
  { name: "ELITE", price: "15,000", period: "/month", features: ["All Pro Features", "1-on-1 Coaching", "Supplements Guide", "Priority Booking"] },
];

const testimonials = [
  { name: "Kasun P.", text: "Lost 20kg in 6 months. The coaching here is world-class.", rating: 5 },
  { name: "Amara S.", text: "Best gym in Colombo. The equipment and atmosphere are unmatched.", rating: 5 },
  { name: "Dinesh R.", text: "Transformed my physique completely. Highly recommend NSS Fitness!", rating: 5 },
];

const Index = () => (
  <div className="bg-background min-h-screen">
    <Navbar />

    {/* Hero - stays dark with image */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Elite Fitness Gym" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 mb-6 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-heading text-xs tracking-widest text-primary">NOW OPEN 2025</span>
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-6xl md:text-8xl leading-none mb-2 text-white">
            PLAY
          </motion.h1>
          <motion.h1 variants={fadeUp} custom={2} className="text-6xl md:text-8xl leading-none mb-6 text-primary">
            DIFFERENT
          </motion.h1>
          <motion.p variants={fadeUp} custom={3} className="text-lg text-white/60 mb-8 max-w-md font-light">
            Train with Sri Lanka's Elite Fitness Coach at NSS Fitness Center.
          </motion.p>
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4">
            <Link to="/register" className="bg-primary text-primary-foreground px-8 py-4 font-heading tracking-wider text-sm hover:bg-primary/90 transition-all flex items-center gap-2 group rounded-md">
              JOIN NOW <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/coach" className="border border-white/30 text-white px-8 py-4 font-heading tracking-wider text-sm hover:border-white transition-colors rounded-md">
              VIEW COACH PROFILE
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Coach Highlight */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={coachImage} alt="Head Coach" className="w-full max-w-md mx-auto aspect-[3/4] object-cover rounded-lg shadow-lg" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h4 className="text-primary font-heading text-sm tracking-widest mb-2">HEAD COACH</h4>
            <h2 className="text-4xl md:text-5xl text-foreground mb-4">MEET YOUR<br />COACH</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience in competitive bodybuilding and personal training,
              our head coach has transformed hundreds of lives through discipline, science-backed training,
              and relentless motivation.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[{ val: "15+", label: "Years Exp" }, { val: "500+", label: "Clients" }, { val: "50+", label: "Trophies" }].map((s) => (
                <div key={s.label} className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-heading text-primary">{s.val}</div>
                  <div className="text-xs text-muted-foreground tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <Link to="/coach" className="inline-flex items-center gap-2 text-primary font-heading text-sm tracking-wider hover:gap-3 transition-all">
              FULL PROFILE <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">WHY <span className="text-primary">MSB FITNESS</span></h2>
          <p className="text-muted-foreground max-w-md mx-auto">Everything you need to achieve your fitness goals under one roof.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background p-8 border border-border rounded-lg card-hover group"
            >
              <f.icon size={32} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Membership Plans Preview */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">MEMBERSHIP <span className="text-primary">PLANS</span></h2>
          <p className="text-muted-foreground">Choose the plan that fits your goals.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative p-8 card-hover rounded-lg ${p.popular ? "bg-primary border-primary" : "bg-background border border-border shadow-sm"}`}
            >
              {p.popular && (
                <span className="absolute top-0 right-0 bg-gym-black text-white text-xs font-heading tracking-wider px-3 py-1 rounded-bl-lg">POPULAR</span>
              )}
              <h3 className={`text-sm tracking-widest mb-4 ${p.popular ? "text-white/80" : "text-primary"}`}>{p.name}</h3>
              <div className={`text-4xl font-heading mb-1 ${p.popular ? "text-white" : "text-foreground"}`}>
                LKR {p.price}
              </div>
              <div className={`text-sm mb-6 ${p.popular ? "text-white/60" : "text-muted-foreground"}`}>{p.period}</div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-2 ${p.popular ? "text-white/80" : "text-muted-foreground"}`}>
                    <span className="w-1 h-1 rounded-full bg-current" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/register"
                className={`block text-center py-3 font-heading text-sm tracking-wider transition-colors rounded-md ${
                  p.popular ? "bg-white text-gym-black hover:bg-white/90" : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                GET STARTED
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">WHAT THEY <span className="text-primary">SAY</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-8 border border-border rounded-lg"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/70 text-sm mb-4 italic">"{t.text}"</p>
              <div className="font-heading text-sm text-foreground tracking-wider">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="font-heading text-[20rem] leading-none text-black/20 -rotate-12 -translate-y-20">FIT</div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl text-white mb-4">READY TO <br />START?</h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">Join MSB Fitness Center today and begin your transformation journey.</p>
        <Link to="/register" className="inline-flex items-center gap-2 bg-white text-gym-black px-10 py-4 font-heading tracking-wider text-sm hover:bg-white/90 transition-colors group rounded-md">
          JOIN NOW <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
