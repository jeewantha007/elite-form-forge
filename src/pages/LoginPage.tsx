import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Lock, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const LoginPage = () => (
  <div className="bg-gym-black min-h-screen">
    <Navbar />
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="bg-gym-dark border border-primary-foreground/10 p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl text-primary-foreground mb-2">WELCOME <span className="text-primary">BACK</span></h1>
            <p className="text-sm text-primary-foreground/50">Sign in to your account</p>
          </div>

          <form className="space-y-5">
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

            <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors group">
              LOGIN <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-sm text-primary-foreground/40">Don't have an account? </span>
            <Link to="/register" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">Register</Link>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default LoginPage;
