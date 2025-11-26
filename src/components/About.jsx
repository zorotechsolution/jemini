// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img33 from '../assets/img33.jpg'

const gradient = "from-[#1e3a8a] via-[#2563eb] to-[#06b6d4]";

export default function About() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0b1b38] to-[#092635]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-white"
          >
            We are{" "}
            <span
              className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
            >
              Jemini Studio
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 max-w-2xl text-slate-200/90"
          >
            A photography & cinematography studio crafting emotive visuals that
            tell real stories. We blend light, motion, and meticulous craft to
            turn your moments into timeless imagery — from intimate portraits
            and weddings to commercial films and brand narratives.
          </motion.p>
        </div>
      </section>

      {/* OUR STORY + PHOTO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold">
              Our{" "}
              <span
                className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
              >
                Story
              </span>
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Jemini Studio began behind the lens — documenting candid moments,
              crafting visual poems, and chasing light across real-life stories.
              What started with local shoots and wedding films has grown into a
              full-service visual studio trusted by couples, creators, and
              brands to bring ideas to life with cinematic flair.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Today, we partner from concept to delivery: moodboards, location
              scouting, direction, shooting, and post. Every frame is guided by
              purpose — emotion first, aesthetics always, and storytelling at
              the heart of it all.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                to="/portfolio"
                className={`inline-flex items-center rounded-2xl bg-gradient-to-r ${gradient} px-5 py-3 text-white text-sm font-semibold shadow-sm`}
              >
                See Our Work
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-2xl border border-slate-300/70 dark:border-white/20 px-5 py-3 text-sm font-semibold"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              <img
                src={img33}
                alt="Cinematic camera setup in studio"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-8">
          <h3 className="text-2xl font-extrabold">Our Values</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Story-First",
                desc: "We capture feeling before everything else — every frame must serve the narrative.",
              },
              {
                title: "Craft-Obsessed",
                desc: "Light, color, composition, and sound — refined with precision in-camera and in post.",
              },
              {
                title: "Client-Centered",
                desc: "Collaborative planning, clear direction, and a smooth, transparent process on set.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-200/70 dark:border-white/10 p-5 bg-white/70 dark:bg-slate-900/60 backdrop-blur"
              >
                <div
                  className={`inline-block rounded-md px-2 py-0.5 text-xs font-bold text-white bg-gradient-to-r ${gradient}`}
                >
                  {v.title}
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS + BADGES */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { k: "8+", v: "Years Capturing" },
              { k: "400+", v: "Photoshoots & Films" },
              { k: "20+", v: "Cities & Locations" },
              { k: "98%", v: "5-Star Reviews" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-slate-200/70 dark:border-white/10 p-6 text-center"
              >
                <div
                  className={`text-3xl font-extrabold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                >
                  {s.k}
                </div>
                <div className="mt-1 text-xs tracking-wide text-slate-600 dark:text-slate-400">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h3 className="text-2xl font-extrabold">Our Process</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Discover",
                desc: "Goals, references, moodboards, and shotlists to align on vision and scope.",
              },
              {
                title: "Plan",
                desc: "Locations, styling, lighting plan, schedule, and crew — all dialed in.",
              },
              {
                title: "Shoot",
                desc: "Guided direction for natural performances; crafted coverage for every scene.",
              },
              {
                title: "Deliver",
                desc: "Culling, retouching, editing, grading, sound, and exports for every platform.",
              },
            ].map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl p-5 border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/60"
              >
                <div
                  className={`h-8 w-8 rounded-lg bg-gradient-to-r ${gradient} text-white grid place-items-center text-xs font-bold`}
                >
                  {i + 1}
                </div>
                <h4 className="mt-3 font-semibold">{p.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-[#0f172a] via-[#0b1b38] to-[#092635]">
            <h3 className="text-2xl font-extrabold text-white">
              Ready to create something{" "}
              <span
                className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
              >
                cinematic
              </span>
              ?
            </h3>
            <p className="mt-2 text-slate-200/90">
              Tell us about your story. We’ll bring the light, lens, and vision.
            </p>
            <div className="mt-5">
              <Link
                to="/contact"
                className={`inline-flex items-center rounded-2xl bg-gradient-to-r ${gradient} px-6 py-3 text-white text-sm font-semibold shadow`}
              >
                Book a Shoot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
