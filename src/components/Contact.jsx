// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const gradient = "from-[#1e3a8a] via-[#2563eb] to-[#06b6d4]";

export default function Contact() {
  // NOTE: Wire this up to your handler or service (EmailJS, API route, etc.)
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send form data
    const status = document.getElementById("form-status");
    if (status) status.textContent = "Thanks! We’ll get back to you shortly.";
  };

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0b1b38] to-[#092635]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-white"
          >
            Let’s{" "}
            <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              Create
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-slate-200/90 max-w-2xl mx-auto"
          >
            Planning a photoshoot, wedding film, or a branded campaign?{" "}
            <span className="font-semibold">Jemini Studio</span> would love to bring your story to life.
          </motion.p>
        </div>
      </section>

      {/* ===== CONTACT FORM & INFO ===== */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid gap-10 md:grid-cols-2 md:items-start">
          {/* === FORM === */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md p-8 shadow-lg"
          >
            <h2 className="text-2xl font-extrabold mb-6">
              Send us a{" "}
              <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>message</span>
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              {/* Honeypot (basic spam trap) */}
              <input type="text" name="company" className="hidden" tabIndex="-1" autoComplete="off" />

              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1">
                  Name<span className="text-rose-500"> *</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-300/70 dark:border-white/10 bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1">
                  Email<span className="text-rose-500"> *</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-300/70 dark:border-white/10 bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-slate-300/70 dark:border-white/10 bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-1">
                  Project Type
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Wedding film, portraits, commercial, etc."
                  className="w-full rounded-xl border border-slate-300/70 dark:border-white/10 bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-1">
                  Message<span className="text-rose-500"> *</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your vision, dates, locations, deliverables…"
                  className="w-full rounded-xl border border-slate-300/70 dark:border-white/10 bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className={`mt-3 inline-flex items-center justify-center w-full rounded-2xl bg-gradient-to-r ${gradient} px-5 py-3 text-white font-semibold shadow hover:shadow-lg transition`}
              >
                Send Message
              </button>

              <p
                id="form-status"
                aria-live="polite"
                className="mt-3 text-center text-sm text-emerald-600 dark:text-emerald-400"
              />
            </form>
          </motion.div>

          {/* === CONTACT INFO === */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-extrabold mb-4">Contact Info</h2>
              <p className="text-slate-600 dark:text-slate-300">
                Reach out directly or visit our studio. We’ll align on your story, timeline, and deliverables,
                then craft a plan that fits your vision.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Email",
                  icon: "📧",
                  info: "hello@jeministudio.com",
                  href: "mailto:hello@jeministudio.com",
                },
                {
                  title: "Phone",
                  icon: "📞",
                  info: "+91 98765 43210",
                  href: "tel:+919876543210",
                },
                {
                  title: "WhatsApp",
                  icon: "💬",
                  info: "+91 98765 43210",
                  href: "https://wa.me/919876543210",
                },
                {
                  title: "Location",
                  icon: "📍",
                  info: "Chennai, Tamil Nadu, India",
                  href: "https://maps.google.com/?q=Chennai",
                },
                {
                  title: "Working Hours",
                  icon: "🕓",
                  info: "Mon–Sat, 10:00–19:00 IST",
                },
                {
                  title: "Social",
                  icon: "📸",
                  info: "Instagram",
                  href: "https://instagram.com/yourhandle",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 p-5 shadow-sm"
                >
                  <div className="text-lg" aria-hidden="true">
                    {c.icon}
                  </div>
                  <h4 className="mt-2 font-semibold">{c.title}</h4>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
                    >
                      {c.info}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-600 dark:text-slate-300">{c.info}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="relative" aria-label="Map">
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/70 dark:border-white/10">
            <iframe
              title="Jemini Studio Location — Chennai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.467403003092!2d80.220966!3d13.060422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d93a6b6f67%3A0x8adac0381ad7a0a!2sChennai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <div className={`rounded-3xl p-8 md:p-10 bg-gradient-to-r ${gradient} text-white text-center`}>
            <h3 className="text-2xl font-extrabold mb-3">Let’s Create Something Incredible</h3>
            <p className="text-slate-100/90 max-w-2xl mx-auto">
              Tell us your story — we’ll capture it with cinematic precision and heartfelt imagery.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <Link
                to="/portfolio"
                className="inline-flex items-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
              >
                View Our Work →
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
