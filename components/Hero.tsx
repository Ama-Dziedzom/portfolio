"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="hero-simplified">
      {/* Subtle ambient glow */}
      <div className="hero-glow hero-glow--warm" />
      <div className="hero-glow hero-glow--neutral" />

      <motion.div 
        className="hero-inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name & identifier — quiet, confident */}
        <motion.div className="hero-identifier" variants={itemVariants}>
          <span className="hero-identifier__dot" />
          Ama Dziedzom Barnor
        </motion.div>

        {/* The headline — this is the entire hero */}
        <motion.h1 className="hero-headline" variants={itemVariants}>
          Designing things
          <br />
          I then have to <em>build.</em>
        </motion.h1>

        {/* One supporting line */}
        <motion.p className="hero-sub" variants={itemVariants}>
          Product designer &amp; builder in Accra, Ghana.
          <br />
          Currently at a creative agency. Building my own things after hours.
        </motion.p>

        {/* Single CTA */}
        <motion.div variants={itemVariants}>
          <Link href="/work" className="hero-cta">
            See the work
            <span className="hero-cta__arrow">
              <HugeiconsIcon icon={ArrowRight01Icon} size={20} strokeWidth={2} />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
