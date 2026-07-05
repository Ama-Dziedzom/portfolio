"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { fadeIn } from "@/lib/animations";

export interface NextProjectProps {
  href: string;
  name: React.ReactNode;
}

export default function NextProject({ href, name }: NextProjectProps) {
  return (
    <motion.div className="dcs-next" {...fadeIn}>
      <div className="dcs-section__label">Next Project</div>
      <Link href={href} className="dcs-next__link">
        <h2 className="dcs-next__name">
          {name} <HugeiconsIcon icon={ArrowRight01Icon} size={28} strokeWidth={2} />
        </h2>
      </Link>
    </motion.div>
  );
}
