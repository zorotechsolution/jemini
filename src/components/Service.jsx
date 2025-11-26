// src/components/Service.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const gradient = "from-[#1e3a8a] via-[#2563eb] to-[#06b6d4]";

/** Photo & Film services */
const services = [
  {
    title: "Photography",
    blurb: "Editorial portraits, weddings, and campaigns crafted with artful light and authentic emotion.",
    points: ["Portraits & Fashion", "Weddings & Events", "Commercial & Product"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M3 8h18v10H3z" fill="currentColor" opacity="0.2" />
        <path d="M9 5h6l1 2h4v3H4V7h4l1-2z" fill="currentColor" />
        <circle cx="12" cy="13" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Cinematography",
    blurb: "Cinematic stories for weddings, music, and brands — directed, shot, and edited end-to-end.",
    points: ["Wedding Films", "Brand / Product Films", "Music & Short Films"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M3 6h14v12H3z" opacity="0.2" />
        <path d="M17 9l4-2v10l-4-2V9zM6 10h8v4H6z" />
      </svg>
    ),
  },
  {
    title: "Post-Production",
    blurb: "Premium finishing that elevates every frame — edit, grade, sound, and delivery for every platform.",
    points: ["Video Editing", "Color Grading", "Sound Design & Mix"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M4 4h16v16H4z" opacity="0.2" />
        <path d="M7 7h10v3H7zM7 12h6v5H7z" />
      </svg>
    ),
  },
  {
    title: "Retouching & Finishing",
    blurb: "Refined, natural retouch and creative compositing that preserves texture and tone.",
    points: ["Skin & Color Work", "Product Cleanup", "Creative Composites"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M5 5h14v14H5z" opacity="0.2" />
        <path d="M8 12l3 3 5-5" />
      </svg>
    ),
  },
  {
    title: "Creative Direction",
    blurb: "From concept to call sheet — moodboards, styling, and on-set direction for cohesive visuals.",
    points: ["Concept & Storyboards", "Location & Styling", "On-Set Direction"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <circle cx="8" cy="12" r="4" opacity="0.2" />
        <path d="M14 6h6v12h-6z" />
      </svg>
    ),
  },
  {
    title: "Social & Reels",
    blurb: "Short-form content designed for engagement — fast turnarounds, strong hooks, native formats.",
    points: ["Reels/Shorts", "Ad Creatives", "Platform-Ready Exports"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M4 6h16v12H4z" opacity="0.2" />
        <path d="M9 9l7 3-7 3z" />
      </svg>
    ),
  },
];

export default function Service() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0b1b38] to-[#092635]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Services crafted for{" "}
            <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              stunning visuals
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-200/90">
            Photography, cinematography, and post — seamlessly integrated to create emotive stories,
            editorial polish, and results your audience will feel.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              to="/portfolio"
              className={`inline-flex items-center rounded-2xl bg-gradient-to-r ${gradient} px-5 py-3 text-white text-sm font-semibold shadow`}
            >
              See our work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-2xl border border-white/30 px-5 py-3 text-white/90 text-sm font-semibold"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="group relative rounded-3xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-transparent group-hover:ring-2 group-hover:ring-[#2563eb]/40 transition" />
                <div className="flex items-start gap-4">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white bg-gradient-to-r ${gradient} shadow`}>
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.blurb}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                      <span className={`mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${gradient} px-4 py-2 text-xs font-semibold text-white shadow`}
                  >
                    Get a Quote →
                  </Link>
                  <a href="#process" className="text-xs font-semibold hover:text-sky-600 dark:hover:text-sky-400">
                    Our process
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section id="process" className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-6">
          <div className="rounded-3xl p-6 md:p-8 border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/60">
            <h2 className="text-2xl font-extrabold">Our Process</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-4">
              {[
                { t: "Discover", d: "Goals, references, moodboards, and shotlists to align vision." },
                { t: "Plan", d: "Locations, styling, lighting plans, schedule, and crew." },
                { t: "Shoot", d: "Guided direction and cinematic coverage for authentic moments." },
                { t: "Deliver", d: "Selects, retouching, edit, color grade, and platform-ready exports." },
              ].map((s, i) => (
                <div key={s.t} className="rounded-2xl p-5 border border-slate-200/70 dark:border-white/10">
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-r ${gradient} text-white grid place-items-center text-xs font-bold`}>
                    {i + 1}
                  </div>
                  <h4 className="mt-3 font-semibold">{s.t}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-extrabold">Packages</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Essentials",
                // price: "₹",
                desc: "Perfect for portraits or a half-day brand shoot.",
                features: ["Up to 3 hours", "30+ Edited Photos", "1 Location", "Basic Color Grade"],
              },
              {
                name: "Signature",
                // price: "₹₹",
                desc: "Full-day coverage for campaigns or wedding events.",
                features: ["6–8 hours", "75+ Edited Photos / 1–2 min Film", "2–3 Locations", "Pro Retouch & Grade"],
              },
              {
                name: "Cinematic",
                // price: "₹₹₹",
                desc: "Directed production with crew, lighting, and full post.",
                features: ["Pre-Production", "Crew & Lighting", "Hero Film + Stills", "Advanced Edit & Sound"],
              },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl border border-slate-200/70 dark:border-white/10 p-6 bg-white/70 dark:bg-slate-900/60">
                <div className={`inline-block rounded-md px-2 py-0.5 text-xs font-bold text-white bg-gradient-to-r ${gradient}`}>
                  {p.name}
                </div>
                <div className="mt-3 text-3xl font-extrabold">{p.price}</div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className={`mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Link
                    to="/contact"
                    className={`inline-flex items-center rounded-xl bg-gradient-to-r ${gradient} px-4 py-2 text-xs font-semibold text-white`}
                  >
                    Get this package
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            Pricing is tailored to scope, crew, and deliverables — these tiers help estimate time and approach.
          </p>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-2xl font-extrabold">FAQs</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              {
                q: "How do we start?",
                a: "Book a short discovery call. We’ll align on story, references, timeline, and deliverables, then share a proposal.",
              },
              {
                q: "Do you travel for shoots?",
                a: "Yes — we travel across cities and destinations. Travel and stay are scoped into the proposal.",
              },
              {
                q: "What do we receive?",
                a: "Curated selects, professionally retouched photos, and films exported for web, social, and archive — plus optional raw backups.",
              },
              {
                q: "How long is delivery?",
                a: "Essentials: 5–7 days. Signature/Cinematic: 2–4 weeks depending on scope. Rush options are available.",
              },
            ].map((f) => (
              <div key={f.q} className="rounded-2xl border border-slate-200/70 dark:border-white/10 p-6 bg-white/70 dark:bg-slate-900/60">
                <h4 className="font-semibold">{f.q}</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/contact"
              className={`inline-flex items-center rounded-2xl bg-gradient-to-r ${gradient} px-6 py-3 text-sm font-semibold text-white shadow`}
            >
              Still have questions? Let’s chat →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
