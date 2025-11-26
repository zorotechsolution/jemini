// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/jeminiLogo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/service", label: "Services" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("system");

  // Init theme from storage (fallback to system)
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "system";
    setTheme(saved);
  }, []);

  // Apply theme + watch for system changes if user chooses "system"
  useEffect(() => {
    const root = document.documentElement;

    const apply = (mode) => {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDark = mode === "dark" || (mode === "system" && prefersDark);
      root.classList.remove("light", "dark");
      root.classList.add(isDark ? "dark" : "light");
    };

    apply(theme);
    localStorage.setItem("theme", theme);

    // respond to OS theme changes when in "system"
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => theme === "system" && apply("system");
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [theme]);

  const handleNavClick = () => setOpen(false);

  // Link styles
  const linkBase =
    "group/nav relative px-3 py-2 text-sm font-semibold tracking-wide transition rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400";
  const linkInactive =
    "text-slate-700/80 hover:text-slate-900 dark:text-slate-300/80 dark:hover:text-white";
  const linkActive = "text-slate-900 dark:text-white";

  const underline =
    "pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 h-px w-0 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] transition-[width] duration-300 group-hover/nav:w-8";

  return (
    <header className="sticky top-0 z-50">
      {/* Blue gradient accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4]" />

      {/* Frosted Navbar */}
      <nav
        className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-slate-900/50 border-b border-slate-200/40 dark:border-slate-800/50 shadow-sm"
        role="navigation"
        aria-label="Primary"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl"
              aria-label="Jemini Studio — Home"
              onClick={handleNavClick}
            >
              <img
                src={Logo}
                alt="Jemini Studio logo"
                className="h-9 w-9 rounded-xl shadow-sm ring-1 ring-black/5 object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4]">
                  Jemini Studio
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  Photo • Film • Stories
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    [linkBase, isActive ? linkActive : linkInactive].join(" ")
                  }
                >
                  {({ isActive }) => (
                    <span className="relative">
                      {item.label}
                      <span
                        className={`${underline} ${isActive ? "w-10" : ""}`}
                        aria-hidden="true"
                      />
                    </span>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() =>
                  setTheme((prev) =>
                    prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
                  )
                }
                title={`Theme: ${theme}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-slate-800/60 shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label={`Toggle theme (current: ${theme})`}
              >
                {theme === "light" ? (
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-sky-600" fill="currentColor" aria-hidden="true">
                    <path d="M6.76 4.84l-1.8-1.79-1.42 1.41 1.79 1.8 1.43-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9.66-19.95l-1.41 1.41 1.79 1.8 1.41-1.42-1.79-1.79zM17.24 4.84l1.43 1.42 1.79-1.8-1.42-1.41-1.8 1.79zM20 11v2h3v-2h-3zM4.22 18.36l-1.79 1.79 1.41 1.42 1.8-1.8-1.42-1.41zM12 6a6 6 0 100 12A6 6 0 0012 6z" />
                  </svg>
                ) : theme === "dark" ? (
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-sky-400" fill="currentColor" aria-hidden="true">
                    <path d="M9.37 5.51A7 7 0 0012 19a7 7 0 006.92-5.97A8 8 0 119.37 5.51z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-sky-500" fill="currentColor" aria-hidden="true">
                    <path d="M12 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm0 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4 11a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm13 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM6.22 5.22a1 1 0 011.42 0L8.3 5.88a1 1 0 11-1.41 1.41l-.67-.66a1 1 0 010-1.41zm9.18 9.19a1 1 0 011.41 0l.67.66a1 1 0 01-1.41 1.41l-.67-.66a1 1 0 010-1.41zM5.22 17.78a1 1 0 011.41 0l.67.66a1 1 0 01-1.41 1.41l-.67-.66a1 1 0 010-1.41zm12.56-12.56a1 1 0 011.41 0l.67.66a1 1 0 01-1.41 1.41l-.67-.66a1 1 0 010-1.41z" />
                  </svg>
                )}
              </button>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-transparent bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
              >
                Book a Shoot
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M5 12h12l-4.5 4.5 1.4 1.4L21.8 12l-7.9-5.9-1.4 1.4L17 11H5z" />
                </svg>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen((o) => !o)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-slate-800/60 shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="Toggle navigation menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                <div className="relative h-4 w-5" aria-hidden="true">
                  <span
                    className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-slate-900 dark:bg-white transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-slate-900 dark:bg-white transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
                  />
                  <span
                    className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-slate-900 dark:bg-white transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          aria-hidden={!open}
        >
          <div className="px-4 pb-4 pt-2">
            <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 shadow-lg p-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    [
                      "flex w-full items-center justify-between px-3 py-3 rounded-xl transition",
                      isActive
                        ? "bg-slate-100/80 dark:bg-slate-800/60 text-slate-900 dark:text-white"
                        : "text-slate-700/90 hover:bg-slate-100/70 dark:text-slate-300/90 dark:hover:bg-slate-800/50",
                    ].join(" ")
                  }
                >
                  <span className="text-sm font-semibold">{item.label}</span>
                  <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-70" fill="currentColor" aria-hidden="true">
                    <path d="M9.29 6.71L13.58 11l-4.29 4.29 1.42 1.42L16.41 12l-5.7-5.71-1.42 1.42z" />
                  </svg>
                </NavLink>
              ))}
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#06b6d4] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
                >
                  Book a Shoot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
