// src/components/Gallery.jsx
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import img1 from '../assets/img1.jpg'
import img3 from '../assets/img3.jpg'
import img5 from '../assets/img5.jpg'
import img7 from '../assets/img7.jpg'
import img21 from '../assets/img21.jpg'
import img24 from '../assets/img24.jpg'
import img27 from '../assets/img27.jpg'
import img30 from '../assets/img30.jpg'
import img32 from '../assets/img32.jpg'
import img33 from '../assets/img33.jpg'
import img34 from '../assets/img34.jpg'
import img35 from '../assets/img35.jpg'
import img40 from '../assets/img40.jpg'
import img42 from '../assets/img42.jpg'
import img44 from '../assets/img43.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'

const photos = [
 img1, 
 img32, 
 img3,
 img42,
 img5,
 img27,
 img8,
 img9,
 img35,
 img40,
 img7,
 img33,
 img24,
 img30,
 img44,
 img34,
 img21,
];



export default function Gallery() {
  const [openSrc, setOpenSrc] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpenSrc(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#06b6d4] animate-gradient-slow"></div>
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-white">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
            Jemini Digital Studio Gallery
          </h2>
         <p className="mt-3 text-slate-200/80">
  Discover the emotion, creativity, and craftsmanship behind every story we capture.
</p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {photos.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setOpenSrc(src)}
              className="group mb-6 w-full break-inside-avoid overflow-hidden rounded-3xl bg-white/10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition duration-300 group-hover:scale-[1.05] group-active:scale-[.98]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openSrc && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenSrc(null)}
          >
            <motion.img
              src={openSrc}
              alt="Expanded view"
              className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-[0_0_40px_rgba(56,189,248,0.3)] ring-2 ring-cyan-400/50"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close Button */}
            <button
              aria-label="Close lightbox"
              onClick={() => setOpenSrc(null)}
              className="absolute top-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg hover:shadow-xl transition-all"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
