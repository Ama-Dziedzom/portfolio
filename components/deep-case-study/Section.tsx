"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export interface SectionProps {
  id: string;
  label: string;
  title?: React.ReactNode;
  children: React.ReactNode;
}

export default function Section({ id, label, title, children }: SectionProps) {
  return (
    <div className="dcs-section" id={id}>
      <motion.div className="dcs-section__head" {...fadeIn}>
        <h2 className="dcs-section__label">
          <span className="dcs-section__dot" aria-hidden="true" />
          {label}
        </h2>
        {title && <h3 className="dcs-section__title">{title}</h3>}
      </motion.div>
      {children}
    </div>
  );
}
