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
    <div className="bg-muted min-h-screen">
      <Navbar />
      <section className="pt-28 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl text-foreground mb-4">GALLERY</h1>
            <p className="text-muted-foreground">Inside NSS Fitness Center — where champions are made.</p>
          </div>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 font-heading text-xs tracking-widest transition-colors rounded-full ${
                  filter === c ? "bg-primary text-primary-foreground" : "bg-background text-foreground/60 hover:text-foreground border border-border"
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`mb-4 ${item.aspect} bg-background border border-border cursor-pointer group overflow-hidden relative break-inside-avoid rounded-lg`}
                onClick={() => setLightbox(item.id)}
              >
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <span className="text-white/0 group-hover:text-white/80 font-heading text-xs tracking-widest transition-colors">
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
            <button className="absolute top-6 right-6 text-white/60 hover:text-white" onClick={() => setLightbox(null)}>
              <X size={24} />
            </button>
            <div className="w-full max-w-2xl aspect-video bg-muted flex items-center justify-center rounded-lg">
              <span className="text-muted-foreground font-heading text-sm">Photo {lightbox + 1}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;
