import { motion } from "framer-motion";
import { Trophy, Award, Camera, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import coachImage from "@/assets/coach.jpeg";

const achievements = [
  { title: "National Bodybuilding Champion", year: "2020", desc: "1st Place - Men's Physique" },
  { title: "South Asian Games", year: "2019", desc: "Gold Medal - Powerlifting" },
  { title: "Best Trainer Award", year: "2021", desc: "Sri Lanka Fitness Federation" },
  { title: "IFBB Pro Card", year: "2022", desc: "International Federation" },
];

const certifications = [
  "NASM Certified Personal Trainer",
  "ACE Fitness Nutrition Specialist",
  "CrossFit Level 2 Trainer",
  "Sports Rehabilitation Specialist",
];

const CoachPage = () => (
  <div className="bg-background min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-24 pb-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <img src={coachImage} alt="Coach" className="w-full max-w-lg mx-auto aspect-[3/4] object-cover rounded-lg shadow-lg" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-primary font-heading text-sm tracking-widest mb-2">HEAD COACH</h4>
            <h1 className="text-5xl md:text-6xl text-foreground mb-2">MOHAMMED</h1>
            <h1 className="text-5xl md:text-6xl text-primary mb-6">ARAFATH</h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over 15 years in competitive bodybuilding and personal training, Coach Mohammed has dedicated
              his life to transforming bodies and minds. His science-backed approach combined with raw discipline
              has produced champions across Sri Lanka and beyond.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[{ val: "15+", label: "Years" }, { val: "500+", label: "Transformations" }, { val: "50+", label: "Awards" }].map((s) => (
                <div key={s.label} className="bg-background p-4 text-center rounded-lg border border-border">
                  <div className="text-3xl font-heading text-primary">{s.val}</div>
                  <div className="text-xs text-muted-foreground tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Achievements */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-foreground mb-12 text-center">ACHIEVEMENTS</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-muted p-6 border border-border rounded-lg card-hover"
            >
              <Trophy size={24} className="text-primary mb-3" />
              <div className="text-xs text-primary tracking-wider mb-2">{a.year}</div>
              <h3 className="text-sm text-foreground mb-1 normal-case">{a.title}</h3>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl text-foreground mb-12 text-center">CERTIFICATIONS</h2>
        <div className="space-y-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-background p-5 border border-border rounded-lg"
            >
              <Award size={20} className="text-primary flex-shrink-0" />
              <span className="text-foreground/80 text-sm">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Transformations */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl text-foreground mb-4">TRANSFORMATIONS</h2>
        <p className="text-muted-foreground mb-12">Real results from real clients.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="aspect-square bg-muted flex items-center justify-center border border-border group overflow-hidden card-hover rounded-lg">
              <div className="text-center">
                <Camera size={24} className="text-muted-foreground mx-auto mb-2" />
                <span className="text-xs text-muted-foreground">Before / After</span>
              </div>
            </div>
          ))}
        </div>
        <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-heading text-sm tracking-wider mt-8 hover:gap-3 transition-all">
          VIEW FULL GALLERY <ChevronRight size={16} />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default CoachPage;
