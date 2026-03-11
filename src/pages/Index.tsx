import { Link } from "react-router-dom";
import { motion, type Easing } from "framer-motion";
import { useState } from "react";
import { Dumbbell, Users, Trophy, Star, ChevronRight, Zap, Shield, Clock, ArrowRight, CheckCircle2, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-gym.jpg";
import coachImage from "@/assets/coach.jpeg";
import logo from "@/assets/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  { title: "1-On-1 TRAINING", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
  { title: "Elderly Training", img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=800&q=80" },
  { title: "Pre & Postnatal Training", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80" },
  { title: "Body Conditioning Training", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80" },
  { title: "Muscle Rehabilitation Training", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" },
];

const plans = [
  { name: "STARTER", price: "5,000", period: "/month", features: ["Gym Access", "Locker Room", "Basic Support"] },
  { name: "PRO", price: "8,500", period: "/month", features: ["All Starter Features", "Personal Training", "Diet Plan", "Progress Tracking"], popular: true },
  { name: "ELITE", price: "15,000", period: "/month", features: ["All Pro Features", "1-on-1 Coaching", "Supplements Guide", "Priority Booking"] },
];

const testimonials = [
  { name: "Marshmello Gomez", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", rating: 5 },
  { name: "Marshmello Gomez", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.", rating: 5 },
  { name: "John Doe", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.", rating: 5 },
];

const stats = [
  { value: "1000+", label: "Active Members" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Trophies Won" },
  { value: "98%", label: "Success Rate" },
];

const Index = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (height && weight) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      setBmiResult(w / (h * h));
    }
  };

  return (
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
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 mb-6 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-heading text-xs tracking-[0.2em] text-primary">NSS FITNESS CENTRE</span>
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl leading-[1] mb-2 text-white font-heading uppercase">
            Be strong with a
          </motion.h1>
          <motion.h1 variants={fadeUp} custom={2} className="text-4xl md:text-6xl leading-[1] mb-8 text-gradient-gold font-heading drop-shadow-xl uppercase">
            professional
          </motion.h1>
          <motion.p variants={fadeUp} custom={3} className="text-lg md:text-xl text-white/70 mb-10 max-w-xl font-light leading-relaxed border-l-4 border-primary pl-6 py-2 bg-gradient-to-r from-primary/10 to-transparent">
            Your fitness journey is personal, and so is our approach. Reach your goals faster with our guidance.
          </motion.p>
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-primary text-primary-foreground px-10 py-5 font-heading tracking-[0.15em] text-sm hover:bg-primary/90 transition-all flex items-center gap-3 group rounded-none shadow-lg shadow-primary/20 gym-glow uppercase">
              Try Out Free Day Trial <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
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
            <h2 className="text-3xl md:text-5xl text-foreground mb-6 leading-[0.9]">MEET YOUR<br /><span className="text-primary">COACH</span></h2>
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

    {/* Push Your Limits */}
    <section className="py-28 bg-gym-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <span className="text-primary font-heading text-lg tracking-[0.3em] uppercase block mb-4">— Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-heading font-bold uppercase tracking-wide">
            PUSH YOUR <span className="text-gradient-gold">LIMITS FORWARD</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Dumbbell, title: "Modern equipment", desc: "Our gym is equipped with the latest state-of-the-art fitness machines and technology, designed to deliver maximum performance and safety." },
            { icon: Users, title: "Healthy nutrition plan", desc: "With Fitness First meal plans, you'll get nutritious, ready-to-follow food guidance that fuels performance and supports lasting health." },
            { icon: Trophy, title: "Pro training plan", desc: "Our certified trainers create structured, results-driven programs that help you train smarter, not harder." },
            { icon: Shield, title: "Unique to your needs", desc: "Your fitness journey is personal, and so is our approach. From training plans to meal programs, everything matches your individual needs." }
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-[#111] p-10 border-t-2 border-primary/50 hover:border-primary transition-colors text-left group card-hover relative"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                <f.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading text-white uppercase mb-4">{f.title}</h3>
              <p className="text-[#888] text-base leading-relaxed">{f.desc}</p>
              
              <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                <ArrowRight size={20} className="text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services We Offer */}
    <section className="py-28 bg-[#111]">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-primary font-heading text-lg tracking-[0.3em] uppercase block mb-4">— What We Do</span>
            <h2 className="text-4xl md:text-5xl text-white font-heading font-bold uppercase tracking-wide">
              SERVICE <span className="text-gradient-gold">WE OFFER</span>
            </h2>
          </div>
          <Link to="/contact" className="border-2 border-primary text-primary px-8 py-4 font-heading tracking-[0.1em] hover:bg-primary hover:text-black transition-all uppercase flex items-center gap-3">
            View All Services <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={s.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden group cursor-pointer ${i === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[2/1]' : 'aspect-square md:aspect-[4/3]'} `}
            >
              <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.6] group-hover:brightness-[0.4]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-heading text-white uppercase tracking-wide mb-3">{s.title}</h3>
                  <div className="w-12 h-1 bg-primary mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                  <span className="text-primary font-heading tracking-widest text-sm uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* BMI Calculator */}
    <section className="relative py-32 bg-gym-black overflow-hidden border-t border-b border-primary/20">
      <div className="absolute inset-0 opacity-20">
        <img src={heroImage} alt="Background" className="w-full h-full object-cover filter grayscale" />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-heading uppercase font-bold">
            CALCULATE YOUR <span className="text-gradient-gold">BMI</span>
          </h2>
          <p className="text-[#888] text-lg mb-10 max-w-xl leading-relaxed">
            Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Check your fitness status below.
          </p>
          
          <div className="grid grid-cols-2 gap-4 max-w-xl mb-10 text-white font-heading text-lg">
            <div className="border border-white/10 p-4 border-l-4 border-l-blue-500 bg-white/5">Underweight: &lt; 18.5</div>
            <div className="border border-white/10 p-4 border-l-4 border-l-green-500 bg-white/5">Healthy: 18.5 - 24.9</div>
            <div className="border border-white/10 p-4 border-l-4 border-l-yellow-500 bg-white/5">Overweight: 25.0 - 29.9</div>
            <div className="border border-white/10 p-4 border-l-4 border-l-red-500 bg-white/5">Obese: &gt; 30.0</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full max-w-md bg-[#111] p-10 border-t-4 border-primary shadow-2xl">
          <h3 className="text-3xl text-white font-heading mb-8 uppercase text-center">BMI <span className="text-primary">Calculator</span></h3>
          <form className="space-y-6" onSubmit={calculateBMI}>
            <div>
              <input id="h-input" type="number" placeholder="Height / cm" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full bg-[#222] border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-primary transition-colors font-body" required />
            </div>
            <div>
              <input id="w-input" type="number" placeholder="Weight / kg" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full bg-[#222] border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-primary transition-colors font-body" required />
            </div>
            <button type="submit" className="w-full bg-primary text-black font-heading tracking-widest uppercase py-5 hover:bg-white transition-colors duration-300">
              Calculate Now
            </button>
          </form>
          
          {bmiResult !== null && (
            <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center" id="bmi-result-container">
              <span className="text-white/50 uppercase font-heading tracking-widest text-sm">Your BMI:</span>
              <span id="bmi-result-display" className="text-4xl text-primary font-heading">{bmiResult.toFixed(1)}</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>

    {/* Membership Plans */}
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-primary font-heading text-sm tracking-[0.2em] mb-3 block">PRICING</span>
          <h2 className="text-3xl md:text-5xl text-foreground mb-4">MEMBERSHIP <span className="text-primary">PLANS</span></h2>
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
              <div className={`text-4xl font-heading mb-1 ${p.popular ? "text-background" : "text-foreground"}`}>
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
                to="/contact"
                className={`block text-center py-4 font-heading text-sm tracking-[0.15em] transition-all rounded-xl ${
                  p.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 gym-glow"
                    : "bg-gym-black text-white hover:bg-gym-black/90 border border-white/10"
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
    <section className="py-28 bg-gym-black bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80')] bg-cover bg-center bg-fixed relative">
      <div className="absolute inset-0 bg-black/90" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-primary font-heading text-lg tracking-[0.3em] uppercase block mb-4">— Testimonial</span>
          <h2 className="text-4xl md:text-5xl text-white mb-4 font-heading font-bold uppercase tracking-wide">OUR CLIENT <span className="text-gradient-gold">SAY</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#111]/80 backdrop-blur p-12 border-t-4 border-primary relative"
            >
              <div className="text-6xl font-heading text-primary/10 absolute top-4 right-8 select-none">"</div>
              <p className="text-[#888] mb-8 leading-relaxed text-lg italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <User size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-heading text-lg text-white tracking-widest uppercase">{t.name}</div>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
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
          <div className="bg-white p-2 rounded-xl inline-block mb-8 shadow-xl">
            <img src={logo} alt="NSS Fitness Centre" className="h-16 w-auto mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl text-background mb-6 font-heading leading-[0.9]">READY TO<br /><span className="text-gradient-gold drop-shadow-lg">TRANSFORM?</span></h2>
          <p className="text-background/50 mb-10 max-w-md mx-auto text-lg">Join NSS Fitness Centre today and begin your transformation journey.</p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-5 font-heading tracking-[0.15em] text-sm hover:bg-primary/90 transition-all group rounded-xl shadow-lg shadow-primary/30 gym-glow">
            JOIN NOW <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
  );
};

export default Index;
