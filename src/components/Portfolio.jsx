// src/components/Portfolio.jsx
import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from '../assets/img1.jpg'
import img19 from '../assets/img19.jpg'
import img22 from '../assets/img22.jpg'
import img28 from '../assets/img28.jpg'
import img32 from '../assets/img32.jpg'
import img34 from '../assets/img34.jpg'
import img37 from '../assets/img37.jpg'
import img43 from '../assets/img43.jpg'

const gradient = "from-[#1e3a8a] via-[#2563eb] to-[#06b6d4]";

/** PROJECTS: Photo & Film focus */
const PROJECTS = [
  // --- WEDDINGS ---
  {
    id: "p1",
    title: "Amara & Vihaan — Wedding Film",
    category: "Weddings",
    tags: ["Cinematic", "Story Edit", "Color Grade"],
    cover:
      img28,
    description:
      "A heartfelt wedding narrative captured across two days — handheld intimacy blended with gimbal motion and natural soundscapes.",
  },
  {
    id: "p2",
    title: "Saanvi & Kabir — Candid Portraits",
    category: "Weddings",
    tags: ["Golden Hour", "Portrait", "Natural Light"],
    cover:
      img19,
    description:
      "Golden-hour couple session focused on authentic connection, gentle direction, and timeless color.",
  },

  // --- PORTRAITS / EDITORIAL ---
  {
    id: "p3",
    title: "Editorial Series — ‘Blue Notes’",
    category: "Portraits",
    tags: ["Studio", "Lighting", "Retouch"],
    cover:
      img43,
    description:
      "Minimal, sculpted light with soft negative fill. Clean retouching and a restrained palette for a modern editorial feel.",
  },
  {
    id: "p4",
    title: "Artist Portraits — On Location",
    category: "Portraits",
    tags: ["Location", "Available Light", "35mm Look"],
    cover:
      img22,
    description:
      "Environmental portraits that balance subject and space — texture, tone, and story in every frame.",
  },

  // --- COMMERCIAL / BRAND ---
  {
    id: "p5",
    title: "Luna Skincare — Product Film",
    category: "Commercial",
    tags: ["Macro", "Motion Control", "SFX"],
    cover:
      img1,
    description:
      "A sensorial brand piece combining macro shots, liquid SFX, and rhythmic edits for a premium feel.",
  },
  { 
    id: "p6",
    title: "Urban Brew — Campaign Stills",
    category: "Commercial",
    tags: ["Lifestyle", "Team", "Deliverables"],
    cover:
     img34,
    description:
      "Lifestyle shoot across café and street locations, delivering hero images, reels, and a social kit.",
  },

  // --- MUSIC / FILM ---
  {
    id: "p7",
    title: "‘Neon Tide’ — Music Video",
    category: "Films",
    tags: ["Gimbal", "Low Light", "Color Story"],
    cover:
      img37,
    description:
      "Night shoot with practicals and neon accents. Dynamic blocking, long takes, and a moody grade.",
  },
  {
    id: "p8",
    title: "Short Documentary — ‘Makers’",
    category: "Films",
    tags: ["Docu", "Interviews", "Sound Design"],
    cover:
      img32,
    description:
      "A 7-minute docu short on local artisans — vérité coverage, layered sound, and intimate storytelling.",
  },
];

/** CATEGORIES aligned to studio work */
const CATEGORIES = ["All", "Weddings", "Portraits", "Commercial", "Films"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  // Close lightbox on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0b1b38] to-[#092635]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Stories that{" "}
            <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              live on
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-slate-200/90">
            A curated selection of photography, wedding films, commercial work, and editorial portraits
            by Jemini Studio.
          </p>
        </div>
      </section>

      {/* ===== FILTERS ===== */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const activeBtn = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={[
                    "px-4 py-2 rounded-2xl text-sm font-semibold transition border",
                    activeBtn
                      ? `text-white border-transparent bg-gradient-to-r ${gradient} shadow`
                      : "border-slate-200/70 dark:border-white/10 hover:bg-slate-100/70 dark:hover:bg-slate-900/50",
                  ].join(" ")}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== GRID ===== */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence initial={false}>
              {filtered.map((p, i) => (
                <motion.article
                  layout
                  key={p.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  transition={{ duration: 0.35, delay: 0.02 * i }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 shadow-sm"
                >
                  <button
                    onClick={() => setLightbox(p)}
                    className="block w-full text-left"
                    aria-label={`Open ${p.title}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={p.cover}
                        alt={p.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60" />
                      {/* Hover overlay */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                        <h3 className="text-white text-lg font-bold drop-shadow">{p.title}</h3>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className={`text-[10px] font-semibold text-white/95 rounded-md px-2 py-0.5 bg-gradient-to-r ${gradient}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>

                  <div className="p-4 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {p.category}
                    </span>
                    <Link
                      to="/contact"
                      className={`text-xs font-semibold rounded-xl bg-gradient-to-r ${gradient} px-3 py-1.5 text-white`}
                    >
                      Enquire
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA BAR */}
          <div className="mt-10 rounded-3xl p-6 md:p-8 border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/60">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-sm md:text-base">
                Looking for a detailed case study or a tailored shoot plan?
              </p>
              <div className="flex gap-3">
                <Link
                  to="/portfolio"
                  className={`inline-flex items-center rounded-2xl bg-gradient-to-r ${gradient} px-5 py-2.5 text-white text-sm font-semibold shadow`}
                >
                  View More Work
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-2xl border border-slate-300/70 dark:border-white/20 px-5 py-2.5 text-sm font-semibold"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full overflow-hidden rounded-3xl bg-slate-900 text-white"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[16/9] bg-black">
                <img
                  src={lightbox.cover}
                  alt={lightbox.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`inline-flex items-center rounded-md bg-gradient-to-r ${gradient} px-2 py-0.5 text-[10px] font-bold`}
                  >
                    {lightbox.category}
                  </span>
                  {lightbox.tags.map((t) => (
                    <span key={t} className="text-[10px] font-semibold bg-white/10 rounded-md px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-xl font-bold">{lightbox.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{lightbox.description}</p>
                <div className="mt-4 flex gap-3">
                  <Link
                    to="/contact"
                    className={`inline-flex items-center rounded-xl bg-gradient-to-r ${gradient} px-4 py-2 text-xs font-semibold text-white`}
                  >
                    Discuss Similar Work
                  </Link>
                  <button
                    onClick={() => setLightbox(null)}
                    className="inline-flex items-center rounded-xl border border-white/20 px-4 py-2 text-xs font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
