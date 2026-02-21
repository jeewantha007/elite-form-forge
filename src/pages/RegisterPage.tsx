import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Mail, Phone, Lock, Ruler, Weight, Target, Camera, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const RegisterPage = () => (
  <div className="bg-muted min-h-screen">
    <Navbar />
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-lg">
        <div className="bg-background border border-border rounded-lg p-10 shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-3xl text-foreground mb-2">JOIN <span className="text-primary">ELITEFIT</span></h1>
            <p className="text-sm text-muted-foreground">Start your transformation today</p>
          </div>

          <form className="space-y-5">
            {/* Profile Upload */}
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-muted border-2 border-border flex items-center justify-center cursor-pointer hover:border-primary transition-colors group">
                <Camera size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-heading tracking-widest text-muted-foreground mb-2 block">FULL NAME</label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input type="text" className="w-full bg-muted border border-border pl-11 pr-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors rounded-md" placeholder="Full name" />
                </div>
              </div>
              <div>
                <label className="text-xs font-heading tracking-widest text-muted-foreground mb-2 block">PHONE</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input type="tel" className="w-full bg-muted border border-border pl-11 pr-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors rounded-md" placeholder="+94" />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-heading tracking-widest text-muted-foreground mb-2 block">EMAIL</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input type="email" className="w-full bg-muted border border-border pl-11 pr-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors rounded-md" placeholder="your@email.com" />
              </div>
            </div>

            <div>
              <label className="text-xs font-heading tracking-widest text-muted-foreground mb-2 block">PASSWORD</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input type="password" className="w-full bg-muted border border-border pl-11 pr-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors rounded-md" placeholder="••••••••" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-heading tracking-widest text-muted-foreground mb-2 block">HEIGHT (cm)</label>
                <div className="relative">
                  <Ruler size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input type="number" className="w-full bg-muted border border-border pl-11 pr-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors rounded-md" placeholder="175" />
                </div>
              </div>
              <div>
                <label className="text-xs font-heading tracking-widest text-muted-foreground mb-2 block">WEIGHT (kg)</label>
                <div className="relative">
                  <Weight size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input type="number" className="w-full bg-muted border border-border pl-11 pr-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors rounded-md" placeholder="75" />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-heading tracking-widest text-muted-foreground mb-2 block">FITNESS GOAL</label>
              <div className="relative">
                <Target size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <select className="w-full bg-muted border border-border pl-11 pr-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors appearance-none rounded-md">
                  <option value="">Select your goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="strength">Strength Training</option>
                  <option value="endurance">Endurance</option>
                  <option value="general">General Fitness</option>
                </select>
              </div>
            </div>

            <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors group rounded-md">
              CREATE ACCOUNT <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-sm text-muted-foreground">Already have an account? </span>
            <Link to="/login" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">Login</Link>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default RegisterPage;
