import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Gym", "Training", "Events", "Transformations"];

const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  category: categories[1 + (i % 4)],
  aspect: i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[3/4]",
}));

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <div className="bg-gym-black min-h-screen text-white">
      <Navbar />
      <section className="pt-32 pb-24 relative">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-heading text-lg tracking-[0.3em] uppercase block mb-4">— Media</span>
            <h1 className="text-4xl md:text-5xl text-white mb-6 font-heading font-bold uppercase tracking-wide">INSIDE <span className="text-gradient-gold">NSS</span></h1>
            <p className="text-[#888] max-w-xl mx-auto text-lg">Inside NSS Fitness Centre — where champions are made.</p>
          </div>

          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-8 py-3 font-heading text-sm tracking-widest uppercase transition-all duration-300 border-2 ${
                  filter === c 
                    ? "bg-primary border-primary text-black gym-glow shadow-lg" 
                    : "bg-transparent border-[#333] text-[#888] hover:border-primary hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-6xl mx-auto">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`mb-4 ${item.aspect} bg-[#111] border border-white/5 cursor-pointer group overflow-hidden relative break-inside-avoid`}
                onClick={() => setLightbox(item.id)}
              >
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500 backdrop-blur-0 group-hover:backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white/0 group-hover:text-white font-heading text-sm tracking-widest transition-colors duration-500 uppercase translate-y-4 group-hover:translate-y-0">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <div className="w-full max-w-5xl aspect-video bg-[#111] border border-white/5 flex items-center justify-center shadow-2xl relative overflow-hidden">
              <span className="text-[#555] font-heading text-xl uppercase tracking-widest">Photo {lightbox + 1}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;
