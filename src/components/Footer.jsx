// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/jeminiLogo.png";

const branches = [
  {
    label: "H.O",
    name: "Jemini Digital Studio, Video & E-Sevai Center",
    address: "Arockiapuram, Thingal Nagar",
    phone: "+91 9384273712",
    email: "jeministudio2013@gmail.com",
  },
  {
    label: "B.O",
    name: "Jemini Digital Studio & Pancard Center",
    address: "Shop No. 8, Kamaraj Bus Stand, Thingal Nagar",
    phone: "+91 7448466979",
    email: "jeministudio2021@gmail.com",
  },
  {
    label: "B.O",
    name: "Jemini Digital Pancard & Photo Frame Center",
    address: "Colachel Road, Near Petrol Bunk, Thingal Nagar",
    phone: "+91 9342471885",
    email: "jeminidigital2023@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-slate-200/70 dark:border-white/10 bg-white dark:bg-slate-950">
      {/* top gradient accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4]" />

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top row: brand + main CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-slate-200/70 dark:border-white/10">
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Jemini Studio logo"
              className="h-12 w-12 rounded-xl ring-1 ring-black/5 object-contain"
            />
            <div>
              <h3 className="text-xl font-extrabold tracking-tight">
                Jemini Studio
              </h3>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Design • Photo • Digital Services
              </p>
            </div>
          </div>

          {/* Primary phone from the poster */}
          <a
            href="tel:+919047383033"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] px-4 py-3 text-white text-sm font-semibold shadow-md hover:shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="Call Jemini Studio at +91 9047383033"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.25 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
            </svg>
            +91&nbsp;9047383033
          </a>
        </div>

        {/* Middle: branches */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
          {branches.map((b) => (
            <div
              key={b.email}
              className="rounded-2xl border border-slate-200/70 dark:border-white/10 p-5 bg-white/70 dark:bg-slate-900/60 backdrop-blur"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-md bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] px-2 py-0.5 text-[10px] font-bold text-white">
                  {b.label}
                </span>
                <h4 className="text-sm font-bold">{b.name}</h4>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {b.address}
              </p>

              <div className="mt-3 space-y-1 text-sm">
                <a
                  className="inline-flex items-center gap-2 text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400"
                  href={`tel:${b.phone.replace(/\s+/g, "")}`}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.25 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
                  </svg>
                  {b.phone}
                </a>
                <a
                  className="group inline-flex items-center gap-2 text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400"
                  href={`mailto:${b.email}`}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M4 4h16a2 2 0 012 2v1.2l-10 5.8-10-5.8V6a2 2 0 012-2zm16 6.3V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-7.7l9.2 5.3a1 1 0 001 0L20 10.3z" />
                  </svg>
                  {b.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: hours + quick links */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Working hours (from poster) */}
          <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 p-5 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
            <h5 className="text-sm font-bold">Working Hours</h5>
            <ul className="mt-3 text-sm text-slate-700 dark:text-slate-200 space-y-1.5">
              <li>
                <span className="font-medium">Shift A:</span> 7:30 A.M – 4:30 P.M
              </li>
              <li>
                <span className="font-medium">Shift B:</span> 11:00 A.M – 8:30 P.M
              </li>
            </ul>
          </div>

          {/* Quick navigation */}
          <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 p-5 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
            <h5 className="text-sm font-bold">Quick Links</h5>
            <ul className="mt-3 text-sm space-y-2">
              <li>
                <Link className="hover:text-sky-600 dark:hover:text-sky-400" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-sky-600 dark:hover:text-sky-400" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="hover:text-sky-600 dark:hover:text-sky-400" to="/service">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-sky-600 dark:hover:text-sky-400" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Big callout */}
          <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 p-5 bg-gradient-to-br from-[#1e3a8a]/10 via-[#2563eb]/10 to-[#06b6d4]/10">
            <p className="text-sm text-slate-700 dark:text-slate-200">
              Have basic computer knowledge and want to join our team?
            </p>
            <a
              href="tel:+919047383033"
              className="mt-3 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] px-4 py-2 text-white text-sm font-semibold shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Apply / Contact: +91&nbsp;9047383033
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Jemini Studio. All rights reserved.</p>
          <p>
            Made with ♥ by Jemini Studio —{" "}
            <span className="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent font-semibold">
              Design • Motion • Web
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
