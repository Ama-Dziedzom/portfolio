"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export interface ComparisonOption {
  label: React.ReactNode;
  points: React.ReactNode[];
  accent?: boolean;
}

export default function Comparison({ options }: { options: ComparisonOption[] }) {
  return (
    <motion.div className="dcs-comparison" {...fadeIn}>
      {options.map((option, i) => (
        <div key={i} className={`dcs-comparison__option ${option.accent ? "accent" : ""}`}>
          <div className="dcs-comparison__label">{option.label}</div>
          <ul className="dcs-comparison__points">
            {option.points.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}
