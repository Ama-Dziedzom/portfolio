"use client";

import React from "react";
import { motion } from "framer-motion";
import { getOrderedProjects, getProjectHref } from "../data/projects";
import WorkCard from "./WorkCard";
import { containerVariants, itemVariants } from "@/lib/animations";

export default function WorkEditorial() {
  const orderedProjects = getOrderedProjects();

  return (
    <section className="work-editorial" id="work">
      <div className="work-editorial__header">
        <div className="work-editorial__eyebrow">Selected Work</div>
        <h1 className="work-editorial__title">Seven problems. <em>One brain.</em></h1>
        <p className="work-editorial__subtitle">Product narratives, built systems, and frontier explorations.</p>
      </div>

      <motion.div
        className="work-list-unified"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {orderedProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <WorkCard project={project} href={getProjectHref(project.id)} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
