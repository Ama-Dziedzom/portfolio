"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export interface Takeaway {
  title: React.ReactNode;
  desc: React.ReactNode;
}

export default function Takeaways({ items }: { items: Takeaway[] }) {
  return (
    <motion.div className="dcs-takeaways" {...fadeIn}>
      <div className="dcs-takeaways__label">Project Takeaways</div>
      <ol className="dcs-takeaways__list">
        {items.map((item, i) => (
          <li key={i}>
            <div className="dcs-takeaways__title">{item.title}</div>
            <div className="dcs-takeaways__desc">{item.desc}</div>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}
