"use client";

import React from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Idea01Icon } from "@hugeicons/core-free-icons";
import { fadeIn } from "@/lib/animations";

export interface KeyDiscoveryProps {
  /* Overline label above the callout text */
  label?: string;
  children: React.ReactNode;
}

export default function KeyDiscovery({ label = "Key Discovery", children }: KeyDiscoveryProps) {
  return (
    <motion.div className="dcs-key-discovery" {...fadeIn}>
      <div className="dcs-key-discovery__icon" aria-hidden="true">
        <HugeiconsIcon icon={Idea01Icon} size={20} strokeWidth={1.5} />
      </div>
      <div className="dcs-key-discovery__label">{label}</div>
      <p className="dcs-key-discovery__text">{children}</p>
    </motion.div>
  );
}
