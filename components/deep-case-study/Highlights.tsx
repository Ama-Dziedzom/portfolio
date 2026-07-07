"use client";

import React from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { SparklesIcon } from "@hugeicons/core-free-icons";
import { fadeIn } from "@/lib/animations";

export interface HighlightsProps {
  /* One-liner moneyshot statement, 28px centered */
  statement: React.ReactNode;
  /* Figures / media stack shown below the statement */
  children?: React.ReactNode;
}

export default function Highlights({ statement, children }: HighlightsProps) {
  return (
    <div className="dcs-section dcs-section--flush" id="highlights">
      <motion.div className="dcs-highlights" {...fadeIn}>
        <div className="dcs-highlights__head">
          <div className="dcs-highlights__icon" aria-hidden="true">
            <HugeiconsIcon icon={SparklesIcon} size={24} strokeWidth={1.5} />
          </div>
          <div className="dcs-highlights__overline">Highlights</div>
          <p className="dcs-highlights__statement">{statement}</p>
        </div>
        {children && <div className="dcs-highlights__media">{children}</div>}
      </motion.div>
    </div>
  );
}
