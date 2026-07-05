"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function Stepper({ steps, activeIndex }: { steps: string[]; activeIndex: number }) {
  return (
    <motion.div className="dcs-stepper" {...fadeIn}>
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          {i > 0 && <div className={`dcs-stepper__line ${i <= activeIndex ? "done" : ""}`} />}
          <div className="dcs-stepper__step">
            <span className={`dcs-stepper__dot ${i < activeIndex ? "done" : ""} ${i === activeIndex ? "active" : ""}`}>
              {i < activeIndex ? "✓" : i + 1}
            </span>
            <span className={`dcs-stepper__label ${i === activeIndex ? "active" : ""}`}>{step}</span>
          </div>
        </React.Fragment>
      ))}
    </motion.div>
  );
}
