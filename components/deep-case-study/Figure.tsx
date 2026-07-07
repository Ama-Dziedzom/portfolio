"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export interface FigureProps {
  number: string;
  caption: React.ReactNode;
  type?: "image" | "video loop" | "interactive";
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function Figure({ number, caption, type = "image", src, alt, width = 1200, height = 750 }: FigureProps) {
  return (
    <motion.figure className="dcs-figure" {...fadeIn}>
      <div className="dcs-figure__visual">
        {type === "video loop" ? (
          <video src={src} autoPlay loop muted playsInline aria-label={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <Image src={src} alt={alt} width={width} height={height} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        )}
      </div>
      <figcaption className="dcs-figure__caption">
        <span className="dcs-figure__number">{number}</span>
        <span className="dcs-figure__text">{caption}</span>
        <span className="dcs-figure__tag">{type.toUpperCase()}</span>
      </figcaption>
    </motion.figure>
  );
}
