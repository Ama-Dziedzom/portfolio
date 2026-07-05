"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="footer-modern"
      id="contact"
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
    </motion.div>
  );
}
