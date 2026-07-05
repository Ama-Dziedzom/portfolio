"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

// Placeholder. No testimonials collected yet. This section's final shape is
// undecided: real client/colleague quotes, a rework into something else
// (process notes, tool references), or removal from the nav entirely.
export default function References() {
  return (
    <section className="references-section" id="references">
      <motion.div className="cs-content-col" {...fadeIn}>
        <div className="cs-section-label">References</div>
        <h2 className="cs-sub-title">What people <em>say.</em></h2>
        <div className="cs-text-box" style={{ maxWidth: "760px" }}>
          <p>[Placeholder] Testimonials from clients and collaborators will go here.</p>
        </div>
      </motion.div>
    </section>
  );
}
