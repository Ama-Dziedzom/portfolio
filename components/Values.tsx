"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

// Placeholder. Swap these for your own design values and philosophy paragraph.
const VALUES = ["Useful", "Honest", "Considered", "Well-built"];

export default function Values() {
  return (
    <section className="values-section" id="values">
      <motion.div className="cs-content-col" {...fadeIn}>
        <div className="cs-section-label">Values</div>
        <ul className="values-list">
          {VALUES.map((value) => (
            <li key={value} className="values-list__item">{value}</li>
          ))}
        </ul>
        <div className="cs-text-box" style={{ maxWidth: "760px" }}>
          <p>
            [Placeholder] These are the principles that guide how I approach design and building.
            Replace this paragraph with your own philosophy on what makes work worth shipping.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
