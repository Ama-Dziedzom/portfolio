"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

// Placeholder entries. Replace with your real career/background timeline.
const TIMELINE = [
  {
    org: "[Company / Project]",
    role: "[Your Role]",
    period: "[Dates]",
    location: "[City]",
    blurb: "[Placeholder] One or two sentences on what you did and shipped here.",
  },
  {
    org: "[Company / Project]",
    role: "[Your Role]",
    period: "[Dates]",
    location: "[City]",
    blurb: "[Placeholder] One or two sentences on what you did and shipped here.",
  },
  {
    org: "[Company / Project]",
    role: "[Your Role]",
    period: "[Dates]",
    location: "[City]",
    blurb: "[Placeholder] One or two sentences on what you did and shipped here.",
  },
];

export default function Background() {
  return (
    <section className="background-section" id="background">
      <motion.div className="cs-content-col" {...fadeIn}>
        <div className="cs-section-label">Background</div>
        <h2 className="cs-sub-title">Where I&apos;ve <em>worked.</em></h2>
      </motion.div>

      <div className="background-timeline">
        {TIMELINE.map((entry, i) => (
          <motion.div
            key={i}
            className="background-entry"
            {...fadeIn}
            transition={{ delay: 0.05 * i }}
          >
            <span className="background-entry__marker" />
            <div className="background-entry__header">
              <h3 className="background-entry__org">{entry.org}</h3>
              <span className="background-entry__role">{entry.role}</span>
            </div>
            <div className="background-entry__meta">{entry.period} · {entry.location}</div>
            <p className="background-entry__blurb">{entry.blurb}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
