import { motion } from "framer-motion";
import { Trophy, Award, Camera, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import coachImage from "@/assets/coach.jpeg";

const positions = [
  { title: "Vice President", org: "Master Body Building", year: "2024 - Present" },
  { title: "President", org: "Sri Lanka Strengthlifting Federation", year: "2024 - Present" },
  { title: "Executive Member", org: "World Strength Lifting Federation", year: "2023 - Present" },
  { title: "Vice President & Executive Committee Member", org: "Gym Association of Sri Lanka", year: "Ongoing" },
];

const career = [
  { role: "Founder, Director & CEO", org: "NSS Fitness Centre", period: "2012 - Present" },
  { role: "Director & Senior Lecturer", org: "BFSS Institute", period: "2020 - Present" },
];

const CoachPage = () => (
  <div className="bg-gym-black min-h-screen text-white">
    <Navbar />

    {/* Hero */}
    <section className="pt-28 pb-16 bg-gym-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <img src={coachImage} alt="Coach" className="w-full max-w-lg mx-auto aspect-[3/4] object-cover rounded-lg shadow-lg" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-primary font-heading text-lg tracking-[0.3em] uppercase mb-4">— HEAD COACH</h4>
            <h1 className="text-4xl md:text-5xl text-white mb-2 font-heading font-bold uppercase tracking-wide">MOHAMMED</h1>
            <h1 className="text-4xl md:text-5xl text-gradient-gold mb-8 font-heading font-bold uppercase tracking-wide drop-shadow-lg">ARAFATH</h1>
            <p className="text-[#888] leading-relaxed mb-10 text-lg border-l-4 border-primary pl-6 py-2 bg-gradient-to-r from-primary/5 to-transparent">
              With over 15 years in competitive bodybuilding and personal training, Coach Mohammed has dedicated
              his life to transforming bodies and minds. His science-backed approach combined with raw discipline
              has produced champions across Sri Lanka and beyond.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[{ val: "15+", label: "Years Exp" }, { val: "500+", label: "Transformations" }, { val: "50+", label: "Awards" }].map((s) => (
                <div key={s.label} className="bg-[#111] p-6 text-center border-t-2 border-primary/30 hover:border-primary transition-colors card-hover">
                  <div className="text-3xl font-heading text-white mb-1">{s.val}</div>
                  <div className="text-xs text-primary font-heading tracking-widest uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Achievements */}
    <section className="py-28 bg-[#111] border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-lg tracking-[0.3em] uppercase block mb-4">— Records</span>
          <h2 className="text-4xl md:text-5xl text-white font-heading font-bold uppercase tracking-wide">CAREER <span className="text-gradient-gold">ACHIEVEMENTS</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gym-black p-8 border border-white/5 card-hover group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Trophy size={24} className="text-primary" />
              </div>
              <div className="text-sm font-heading text-primary tracking-widest mb-3 uppercase">{a.year}</div>
              <h3 className="text-lg text-white mb-2 uppercase tracking-wide">{a.title}</h3>
              <p className="text-[#888] text-sm leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-28 bg-gym-black relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-lg tracking-[0.3em] uppercase block mb-4">— Qualifications</span>
          <h2 className="text-4xl md:text-5xl text-white font-heading font-bold uppercase tracking-wide">PRO <span className="text-gradient-gold">CERTIFICATIONS</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-5 bg-[#111] p-6 border-l-4 border-l-primary/50 hover:border-l-primary transition-colors group"
            >
              <Award size={24} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-white text-lg tracking-wide">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Transformations */}
    <section className="py-28 bg-[#111] border-t border-primary/20">
      <div className="container mx-auto px-4 text-center">
        <span className="text-primary font-heading text-lg tracking-[0.3em] uppercase block mb-4">— Results</span>
        <h2 className="text-4xl md:text-5xl text-white mb-4 font-heading font-bold uppercase tracking-wide">CLIENT <span className="text-gradient-gold">TRANSFORMATIONS</span></h2>
        <p className="text-[#888] mb-16 text-lg">Real results from real clients trained under Coach Mohammed.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="aspect-square bg-gym-black flex items-center justify-center border border-white/10 group overflow-hidden card-hover cursor-pointer relative">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-colors" />
              <div className="text-center z-10 relative">
                <Camera size={32} className="text-[#555] group-hover:text-primary transition-colors mx-auto mb-3" />
                <span className="text-sm font-heading tracking-widest text-[#555] group-hover:text-white transition-colors uppercase">Before / After</span>
              </div>
            </div>
          ))}
        </div>
        <Link to="/gallery" className="inline-flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 font-heading tracking-[0.1em] mt-16 hover:bg-primary hover:text-black transition-all uppercase group">
          VIEW FULL GALLERY <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default CoachPage;
