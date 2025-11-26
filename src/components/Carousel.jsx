// src/components/Carousel.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img34 from '../assets/img34.jpg'
import img35 from '../assets/img35.jpg'
import img37 from '../assets/img37.jpg'
import img43 from '../assets/img43.jpg'

const defaultImages = [
  img34,
   img8,
   img9,
   img35,
   img43,
   img37,
];

export default function Carousel({ images = defaultImages, interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [paused, interval, images.length]);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // swipe (mobile)
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40;
    if (dx > threshold) prev();
    if (dx < -threshold) next();
    touchStartX.current = null;
  };

  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
            Featured Moments
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Highlights curated by <span className="font-semibold text-sky-600 dark:text-sky-400">Jemini Digital Studio</span>
          </p>
        </div>

        {/* carousel frame */}
        <div
          className="relative group rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-slate-900/5 dark:bg-white/5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-roledescription="carousel"
        >
          {/* gradient backdrop */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0f172a]/60 via-[#1e3a8a]/40 to-[#06b6d4]/20" />

          {/* slides */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={images[index]}
                src={images[index]}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </AnimatePresence>
          </div>

          {/* prev/next buttons */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-slate-900/70 shadow-md ring-1 ring-black/10 hover:scale-105 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-slate-900/70 shadow-md ring-1 ring-black/10 hover:scale-105 transition"
          >
            →
          </button>

          {/* bottom gradient + caption */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {images.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-2.5 rounded-full transition-all",
                  active
                    ? "w-8 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4]"
                    : "w-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
