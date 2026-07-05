"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function KeyDiscovery({ children }: { children: React.ReactNode }) {
  return (
    <motion.div className="dcs-key-discovery" {...fadeIn}>
      <div className="dcs-key-discovery__label">Key Discovery</div>
      <p className="dcs-key-discovery__text">{children}</p>
    </motion.div>
  );
}
