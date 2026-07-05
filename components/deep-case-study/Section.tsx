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
      <motion.h2 className="dcs-section__label" {...fadeIn}>
        {label}
      </motion.h2>
      {title && (
        <motion.h3 className="dcs-section__title" {...fadeIn}>
          {title}
        </motion.h3>
      )}
      {children}
    </div>
  );
}
