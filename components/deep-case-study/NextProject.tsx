"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { projects } from "@/data/projects";
import WorkCard from "@/components/WorkCard";

export interface NextProjectProps {
  href: string;
  /* id of the next project in data/projects.ts; renders the same card as the Work listing */
  projectId: string;
}

export default function NextProject({ href, projectId }: NextProjectProps) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;

  return (
    <motion.div className="dcs-next" {...fadeIn}>
      <h2 className="dcs-next__heading">Next project:</h2>
      <WorkCard project={project} href={href} />
    </motion.div>
  );
}
