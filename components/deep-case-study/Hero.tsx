"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export interface HeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="dcs-hero">
      <motion.h1 className="dcs-hero__title" {...fadeIn}>
        {title}
      </motion.h1>
      <motion.p className="dcs-hero__subtitle" {...fadeIn} transition={{ delay: 0.1 }}>
        {subtitle}
      </motion.p>
    </div>
  );
}
