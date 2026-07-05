"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export interface TwoColTextProps {
  heading: React.ReactNode;
  children: React.ReactNode[];
}

export default function TwoColText({ heading, children }: TwoColTextProps) {
  return (
    <motion.div className="dcs-twocol" {...fadeIn}>
      <h4 className="dcs-twocol__heading">{heading}</h4>
      <div className="dcs-twocol__body">
        {children.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </motion.div>
  );
}
