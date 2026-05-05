"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import AccraClock from "./AccraClock";

export default function PortfolioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
  ];

  // Determine active nav based on pathname
  const getActiveNav = () => {
    if (pathname === "/") return "/";
    if (pathname.startsWith("/work")) return "/work";
    if (pathname.startsWith("/about")) return "/about";
    return pathname;
  };

  const activeNav = getActiveNav();

  return (
    <main className="main-wrapper">
      <ThemeToggle />
      <div className="fixed-clock">
        <AccraClock />
      </div>

      <div className="container">
        {/* ── NAVIGATION ── */}
        <nav role="navigation" aria-label="Main navigation">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${activeNav === href ? "active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ── MAIN CONTENT ── */}
        <div id="main-content">
          {children}
        </div>

        {/* ── FOOTER ── */}
        <motion.footer
          className="footer-modern"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container">
            <div className="footer-modern__cta">
              <motion.div
                className="footer-modern__label"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Get in touch
              </motion.div>
              <motion.h2
                className="footer-modern__headline"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Let&apos;s work <em>together.</em>
              </motion.h2>
              <motion.div
                className="footer-modern__email-wrap"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              >
                <a href="mailto:dziedzom.barnor@gmail.com" className="footer-modern__email">
                  dziedzom.barnor@gmail.com
                </a>
              </motion.div>
            </div>

            <div className="footer-modern__bottom">
              <div className="footer-modern__info">
                <div className="footer-modern__credit">Ama Dziedzom Barnor · 2026</div>
                <div className="footer-modern__location">
                  <span className="footer-modern__location-dot" />
                  Live in Accra, Ghana
                </div>
              </div>
              <div className="footer-modern__links">
                <a href="https://github.com/Ama-Dziedzom" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/dziedzom-barnor/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://x.com/DBarnor" target="_blank" rel="noopener noreferrer">X / Twitter</a>
                <a href="mailto:dziedzom.barnor@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
