import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Users, Trophy, Star, ChevronRight, Zap, Shield, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-gym.jpg";
import coachImage from "@/assets/coach-portrait.jpg";
import logo from "@/assets/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" } }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const features = [
  { icon: Dumbbell, title: "Premium Equipment", desc: "World-class machines and free weights for every training style" },
  { icon: Users, title: "Expert Coaching", desc: "Certified personal trainers with proven track records" },
  { icon: Zap, title: "High Intensity", desc: "Results-driven programs tailored to your goals" },
  { icon: Shield, title: "Safe Environment", desc: "Clean, secure, and motivating training space" },
];

const plans = [
  { name: "STARTER", price: "5,000", period: "/month", features: ["Gym Access", "Locker Room", "Basic Support"] },
  { name: "PRO", price: "8,500", period: "/month", features: ["All Starter Features", "Personal Training", "Diet Plan", "Progress Tracking"], popular: true },
  { name: "ELITE", price: "15,000", period: "/month", features: ["All Pro Features", "1-on-1 Coaching", "Supplements Guide", "Priority Booking"] },
];

const testimonials = [
  { name: "Kasun P.", text: "Lost 20kg in 6 months. The coaching here is world-class.", rating: 5 },
  { name: "Amara S.", text: "Best gym in Colombo. The equipment and atmosphere are unmatched.", rating: 5 },
  { name: "Dinesh R.", text: "Transformed my physique completely. Highly recommend NSS Fitness Centre!", rating: 5 },
];

const stats = [
  { value: "1000+", label: "Active Members" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Trophies Won" },
  { value: "98%", label: "Success Rate" },
];

const Index = () => (
  <div className="bg-background min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="NSS Fitness Centre Gym" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 px-5 py-2.5 mb-8 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-heading text-xs tracking-[0.2em] text-primary">NSS FITNESS CENTRE • EST. 2010</span>
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-7xl md:text-9xl leading-[0.85] mb-2 text-white font-heading">
            PLAY
          </motion.h1>
          <motion.h1 variants={fadeUp} custom={2} className="text-7xl md:text-9xl leading-[0.85] mb-8 text-primary font-heading">
            DIFFERENT
          </motion.h1>
          <motion.p variants={fadeUp} custom={3} className="text-lg md:text-xl text-white/50 mb-10 max-w-lg font-light leading-relaxed">
            Train with Sri Lanka's Elite Fitness Coach. Transform your body, elevate your mind.
          </motion.p>
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4">
            <Link to="/register" className="bg-primary text-primary-foreground px-10 py-4 font-heading tracking-[0.15em] text-sm hover:bg-primary/90 transition-all flex items-center gap-3 group rounded-lg shadow-lg shadow-primary/20">
              START YOUR JOURNEY <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/coach" className="border border-white/20 text-white px-10 py-4 font-heading tracking-[0.15em] text-sm hover:border-primary hover:text-primary transition-all rounded-lg backdrop-blur-sm">
              MEET THE COACH
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-heading tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>

    {/* Stats Bar */}
    <section className="bg-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-heading text-primary">{s.value}</div>
              <div className="text-xs text-background/50 tracking-[0.15em] mt-1 font-heading">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Coach Highlight */}
    <section className="py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl" />
            <img src={coachImage} alt="Head Coach" className="relative w-full max-w-md mx-auto aspect-[3/4] object-cover rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading tracking-wider text-sm shadow-lg">
              15+ YEARS EXPERIENCE
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-primary font-heading text-sm tracking-[0.2em] mb-3 block">HEAD COACH</span>
            <h2 className="text-4xl md:text-6xl text-foreground mb-6 leading-[0.9]">MEET YOUR<br /><span className="text-primary">COACH</span></h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              With over 15 years of experience in competitive bodybuilding and personal training,
              our head coach has transformed hundreds of lives through discipline, science-backed training,
              and relentless motivation.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[{ val: "15+", label: "Years Exp" }, { val: "500+", label: "Clients" }, { val: "50+", label: "Trophies" }].map((s) => (
                <div key={s.label} className="text-center p-5 bg-muted rounded-xl border border-border">
                  <div className="text-3xl font-heading text-primary">{s.val}</div>
                  <div className="text-xs text-muted-foreground tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <Link to="/coach" className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-heading tracking-[0.15em] text-sm hover:bg-foreground/90 transition-all rounded-lg group">
              FULL PROFILE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-28 bg-muted relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-primary font-heading text-sm tracking-[0.2em] mb-3 block">OUR ADVANTAGES</span>
          <h2 className="text-4xl md:text-6xl text-foreground mb-4">WHY <span className="text-primary">NSS FITNESS CENTRE</span></h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">Everything you need to achieve your fitness goals under one roof.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background p-8 border border-border rounded-2xl card-hover group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-lg text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Membership Plans */}
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-primary font-heading text-sm tracking-[0.2em] mb-3 block">PRICING</span>
          <h2 className="text-4xl md:text-6xl text-foreground mb-4">MEMBERSHIP <span className="text-primary">PLANS</span></h2>
          <p className="text-muted-foreground text-lg">Choose the plan that fits your goals.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative p-10 card-hover rounded-2xl ${
                p.popular
                  ? "bg-foreground border-2 border-primary shadow-2xl shadow-primary/10 scale-105"
                  : "bg-background border border-border shadow-sm"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-heading tracking-[0.15em] px-5 py-1.5 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className={`text-sm tracking-[0.2em] mb-6 ${p.popular ? "text-primary" : "text-primary"}`}>{p.name}</h3>
              <div className={`text-5xl font-heading mb-1 ${p.popular ? "text-background" : "text-foreground"}`}>
                LKR {p.price}
              </div>
              <div className={`text-sm mb-8 ${p.popular ? "text-background/50" : "text-muted-foreground"}`}>{p.period}</div>
              <ul className="space-y-4 mb-10">
                {p.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-3 ${p.popular ? "text-background/70" : "text-muted-foreground"}`}>
                    <CheckCircle2 size={16} className="text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/register"
                className={`block text-center py-4 font-heading text-sm tracking-[0.15em] transition-all rounded-xl ${
                  p.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                    : "bg-foreground text-background hover:bg-foreground/90"
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
    <section className="py-28 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-primary font-heading text-sm tracking-[0.2em] mb-3 block">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-6xl text-foreground mb-4">WHAT THEY <span className="text-primary">SAY</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-10 border border-border rounded-2xl relative"
            >
              <div className="text-6xl font-heading text-primary/10 absolute top-4 left-6">"</div>
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/70 mb-6 leading-relaxed">"{t.text}"</p>
              <div className="font-heading text-sm text-foreground tracking-wider">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-28 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <img src={logo} alt="NSS Fitness Centre" className="h-20 w-auto mx-auto mb-8 brightness-200 opacity-30" />
          <h2 className="text-5xl md:text-7xl text-background mb-6 font-heading leading-[0.9]">READY TO<br /><span className="text-primary">TRANSFORM?</span></h2>
          <p className="text-background/50 mb-10 max-w-md mx-auto text-lg">Join NSS Fitness Centre today and begin your transformation journey.</p>
          <Link to="/register" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-5 font-heading tracking-[0.15em] text-sm hover:bg-primary/90 transition-all group rounded-xl shadow-lg shadow-primary/30">
            JOIN NOW <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
