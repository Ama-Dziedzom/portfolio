"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import AccraClock from "./AccraClock";
import SidebarNav from "./SidebarNav";

export default function PortfolioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isWorkIndex = pathname === "/work";
  // Expanded case studies read as a standalone full page: no sidebar, no content offset.
  const isCaseStudy = pathname.startsWith("/work/");

  return (
    <main className={`main-wrapper${isCaseStudy ? " main-wrapper--full" : ""}`}>
      <ThemeToggle />
      <div className="fixed-clock">
        <AccraClock />
      </div>

      <div className="container">
        {!isCaseStudy && <SidebarNav />}

        {/* ── MAIN CONTENT ── */}
        <div id="main-content">
          {children}
        </div>

        {/* ── FOOTER ── */}
        {/* On the homepage, the Contact section already covers this content, so skip the duplicate footer CTA. */}
        {/* Also skipped on the /work index page. */}
        {!isHome && !isWorkIndex && (
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
        )}
      </div>
    </main>
  );
}
