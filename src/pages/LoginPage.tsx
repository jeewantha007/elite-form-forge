import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ChevronRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";

const ADMIN_EMAIL = "admin@powerzone.lk";
const ADMIN_PASSWORD = "admin123";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    setError("");
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      navigate("/admin");
    } else if (email && password) {
      navigate("/member");
    } else {
      setError("Please enter your email and password.");
    }
  };

  return (
    <div className="bg-muted min-h-screen">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="bg-background border border-border rounded-lg p-10 shadow-sm">
            <div className="text-center mb-8">
              <h1 className="text-3xl text-foreground mb-2">WELCOME <span className="text-primary">BACK</span></h1>
              <p className="text-sm text-muted-foreground">Sign in to your account</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
              <div>
                <label className="text-xs font-heading tracking-widest text-muted-foreground mb-2 block">EMAIL</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-muted border border-border pl-11 pr-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors rounded-md" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="text-xs font-heading tracking-widest text-muted-foreground mb-2 block">PASSWORD</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-muted border border-border pl-11 pr-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors rounded-md" placeholder="••••••••" />
                </div>
              </div>

              {error && <p className="text-xs text-status-overdue">{error}</p>}

              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors group rounded-md">
                LOGIN <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-sm text-muted-foreground">Don't have an account? </span>
              <Link to="/register" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">Register</Link>
            </div>

            {/* Admin credentials hint */}
            <div className="mt-6 border-t border-border pt-5">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck size={14} className="text-primary" />
                <span className="text-xs font-heading tracking-widest text-muted-foreground">ADMIN CREDENTIALS</span>
              </div>
              <div className="bg-muted border border-border rounded-md p-3 space-y-1">
                <p className="text-xs text-muted-foreground">Email: <span className="text-foreground font-medium">admin@powerzone.lk</span></p>
                <p className="text-xs text-muted-foreground">Password: <span className="text-foreground font-medium">admin123</span></p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
