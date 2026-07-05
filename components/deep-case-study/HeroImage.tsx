"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface HeroImageProps {
  src: string;
  alt: string;
}

export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <motion.div
      className="dcs-hero-image"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Image src={src} alt={alt} width={1600} height={1000} style={{ width: "100%", height: "100%", objectFit: "cover" }} priority />
    </motion.div>
  );
}
