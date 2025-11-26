// src/components/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import Carousel from "./Carousel";
import img4 from '../assets/img3.jpg'
import img41 from '../assets/img41.jpg'


const bgImage =img41;

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* ===================== HERO ===================== */}
      <header className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 px-6 text-center text-white max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] text-transparent bg-clip-text">
              Jemini Digital Studio
            </span>
            <br />
            Creating Stories that Speak Without Words.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-xl text-slate-200/90 mb-8"
          >
            At <span className="font-semibold">Jemini Digital Studio</span>, we
            bring stories to life through the art of photography and film. From
            portraits and weddings to cinematic visuals, we capture moments that
            inspire, connect, and last forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
            >
              Start a Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 text-white/70 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[2px] h-8 bg-gradient-to-b from-white/70 to-transparent animate-bounce" />
        </motion.div>
      </header>

      {/* ===================== STUDIO INTRO ===================== */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-700 dark:opacity-25"
        />
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900 dark:text-white">
  The Art of{" "}
  <span className="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] text-transparent bg-clip-text">
    Visual Storytelling
  </span>
</h2>
<p className="mt-4 text-slate-600 dark:text-slate-300">
  At <span className="font-semibold">Jemini Studio</span>, we capture more than moments — we capture emotions. 
  Through photography and film, we craft timeless stories that speak to the heart, blending creativity, light, and meaning in every frame.
</p>

              <ul className="mt-6 space-y-3">
                {[
                 "Photography & Cinematography",
"Creative Editing & Retouching",
"Visual Storytelling & Production"

                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-200"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] text-white text-[10px] font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] px-5 py-3 text-white text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  View Our Work
                </Link>
                <Link
                  to="/service"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300/70 dark:border-white/20 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-50/70 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                {[
                  { k: "120+", v: "Projects" },
                  { k: "8", v: "Years Experience" },
                  { k: "99%", v: "Happy Clients" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-2xl border border-slate-200/70 dark:border-white/10 p-4 text-center"
                  >
                    <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      {s.k}
                    </div>
                    <div className="text-xs tracking-wide text-slate-600 dark:text-slate-400">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                  <img
                    src={img4}
                    alt="Studio creative workspace"
                    className="h-80 w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden sm:block">
                  <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-white/10 shadow-xl p-4">
                    <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      Featured Project
                    </div>
                    <div className="mt-1 text-sm font-semibold">
                      Jemini Digital Studio — Creative Branding
                    </div>
                    <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                      Photography • Cinematography • Storytelling
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section id="services" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-white to-[#e6f9ff] dark:from-[#0b1220] dark:via-[#0e1830] dark:to-[#05202a]" />
        <div
          aria-hidden
          className="absolute -top-20 -left-20 h-72 w-72 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-[#1e3a8a] via-[#2563eb] to-[#06b6d4]"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-[#06b6d4] via-[#2563eb] to-[#1e3a8a]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              What We{" "}
              <span className="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
                Do Best
              </span>
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
  At <span className="font-semibold">Jemini Studio</span>, creativity and precision come together. 
  We capture stories that feel natural — yet leave a lasting impression.
</p>
          </motion.div>

          <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {[
       {
  title: "Photography",
  blurb:
    "Capturing emotions, stories, and details through stunning visuals that stand the test of time.",
  points: [
    "Portraits & Fashion",
    "Weddings & Events",
    "Product & Brand Shoots",
  ],
  icon: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M4 7h16v10H4z" opacity="0.2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M9 3h6l1 2h5v3H3V5h5l1-2z" />
    </svg>
  ),
},
{
  title: "Cinematography",
  blurb:
    "Telling stories through motion — from cinematic wedding films to creative brand storytelling.",
  points: ["Wedding Films", "Music Videos", "Commercial Shoots"],
  icon: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M3 5h18v14H3z" opacity="0.2" />
      <path d="M8 9l7 3-7 3zM3 5h18v2H3z" />
    </svg>
  ),
},
{
  title: "Post-Production",
  blurb:
    "From color grading to sound and motion editing, we bring every story to life with cinematic polish.",
  points: ["Video Editing", "Color Grading", "Sound Design"],
  icon: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M4 4h16v16H4z" opacity="0.2" />
      <path d="M6 6h12v12H6zM9 9h6v6H9z" />
    </svg>
  ),
},
{
  title: "Creative Direction",
  blurb:
    "Leading every project with vision — from mood boards and lighting to location and styling.",
  points: ["Concept & Storyboard", "Lighting & Mood", "On-set Direction"],
  icon: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <circle cx="8" cy="12" r="4" opacity="0.2" />
      <path d="M14 6h6v12h-6z" />
    </svg>
  ),
},
{
  title: "Retouching & Editing",
  blurb:
    "Perfecting every detail with professional-grade retouching and creative photo manipulation.",
  points: ["Color Correction", "Skin Retouching", "Creative Compositing"],
  icon: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M4 4h16v16H4z" opacity="0.2" />
      <path d="M7 7h10v3H7zM7 12h6v5H7z" />
    </svg>
  ),
},
{
  title: "Social Media Content",
  blurb:
    "Creating short-form videos, reels, and visuals tailored for social engagement and brand growth.",
  points: ["Reels & Shorts", "Ad Visuals", "Brand Highlights"],
  icon: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M4 6h16v12H4z" opacity="0.2" />
      <path d="M9 9l7 3-7 3z" />
    </svg>
  ),
},

            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.05 * i, ease: "easeOut" }}
                className="group relative rounded-3xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-transparent group-hover:ring-2 group-hover:ring-[#2563eb]/40 transition" />
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] shadow">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {s.blurb}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200"
                    >
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] px-4 py-2 text-xs font-semibold text-white shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    Get a Quote →
                  </Link>
                  <a
                    href="#services"
                    className="text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400"
                  >
                    Learn more
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0b1b38] to-[#092635] dark:from-[#0f172a] dark:via-[#0b1b38] dark:to-[#092635]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(600px 200px at 20% 10%, rgba(37,99,235,.35), transparent), radial-gradient(600px 200px at 80% 90%, rgba(6,182,212,.35), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 text-white">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
                Jemini Digital Studio
              </span>
            </h2>
           <p className="mt-4 text-slate-200/80">
  A creative partner who blends vision, artistry, and precision to craft visuals that inspire and endure.
</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
  title: "Story-Driven Creativity",
  desc: "Every frame has purpose — we capture visuals that evoke emotion and meaning.",
  badge: "Vision",
},
{
  title: "Professional Excellence",
  desc: "Over 8 years of experience crafting powerful visuals across photography and film.",
  badge: "Expertise",
},
{
  title: "Cinematic Precision",
  desc: "High-quality visuals, seamless editing, and rich color grading that elevate every story.",
  badge: "Quality",
},
{
  title: "Collaborative Storytelling",
  desc: "From concept to creation, we work closely with clients to bring their vision to life.",
  badge: "Process",
},

            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
              >
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] px-3 py-1 text-xs font-semibold">
                  {f.badge}
                </span>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-200/90">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Book a Discovery Call
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== GALLERY ===================== */}
      <Gallery />

      {/* ===================== CAROUSEL ===================== */}
      <Carousel />
    </div>
  );
}
