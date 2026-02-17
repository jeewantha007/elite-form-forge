import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Mail, Phone, Lock, Ruler, Weight, Target, Camera, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const RegisterPage = () => (
  <div className="bg-gym-black min-h-screen">
    <Navbar />
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-lg">
        <div className="bg-gym-dark border border-primary-foreground/10 p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl text-primary-foreground mb-2">JOIN <span className="text-primary">ELITEFIT</span></h1>
            <p className="text-sm text-primary-foreground/50">Start your transformation today</p>
          </div>

          <form className="space-y-5">
            {/* Profile Upload */}
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-gym-black border-2 border-primary-foreground/10 flex items-center justify-center cursor-pointer hover:border-primary transition-colors group">
                <Camera size={24} className="text-primary-foreground/30 group-hover:text-primary transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-heading tracking-widest text-primary-foreground/60 mb-2 block">FULL NAME</label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/30" />
                  <input type="text" className="w-full bg-gym-black border border-primary-foreground/10 pl-11 pr-4 py-3 text-primary-foreground text-sm focus:border-primary focus:outline-none transition-colors" placeholder="Full name" />
                </div>
              </div>
              <div>
                <label className="text-xs font-heading tracking-widest text-primary-foreground/60 mb-2 block">PHONE</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/30" />
                  <input type="tel" className="w-full bg-gym-black border border-primary-foreground/10 pl-11 pr-4 py-3 text-primary-foreground text-sm focus:border-primary focus:outline-none transition-colors" placeholder="+94" />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-heading tracking-widest text-primary-foreground/60 mb-2 block">EMAIL</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/30" />
                <input type="email" className="w-full bg-gym-black border border-primary-foreground/10 pl-11 pr-4 py-3 text-primary-foreground text-sm focus:border-primary focus:outline-none transition-colors" placeholder="your@email.com" />
              </div>
            </div>

            <div>
              <label className="text-xs font-heading tracking-widest text-primary-foreground/60 mb-2 block">PASSWORD</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/30" />
                <input type="password" className="w-full bg-gym-black border border-primary-foreground/10 pl-11 pr-4 py-3 text-primary-foreground text-sm focus:border-primary focus:outline-none transition-colors" placeholder="••••••••" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-heading tracking-widest text-primary-foreground/60 mb-2 block">HEIGHT (cm)</label>
                <div className="relative">
                  <Ruler size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/30" />
                  <input type="number" className="w-full bg-gym-black border border-primary-foreground/10 pl-11 pr-4 py-3 text-primary-foreground text-sm focus:border-primary focus:outline-none transition-colors" placeholder="175" />
                </div>
              </div>
              <div>
                <label className="text-xs font-heading tracking-widest text-primary-foreground/60 mb-2 block">WEIGHT (kg)</label>
                <div className="relative">
                  <Weight size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/30" />
                  <input type="number" className="w-full bg-gym-black border border-primary-foreground/10 pl-11 pr-4 py-3 text-primary-foreground text-sm focus:border-primary focus:outline-none transition-colors" placeholder="75" />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-heading tracking-widest text-primary-foreground/60 mb-2 block">FITNESS GOAL</label>
              <div className="relative">
                <Target size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/30" />
                <select className="w-full bg-gym-black border border-primary-foreground/10 pl-11 pr-4 py-3 text-primary-foreground text-sm focus:border-primary focus:outline-none transition-colors appearance-none">
                  <option value="">Select your goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="strength">Strength Training</option>
                  <option value="endurance">Endurance</option>
                  <option value="general">General Fitness</option>
                </select>
              </div>
            </div>

            <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors group">
              CREATE ACCOUNT <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-sm text-primary-foreground/40">Already have an account? </span>
            <Link to="/login" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">Login</Link>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default RegisterPage;
