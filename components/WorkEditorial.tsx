"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { containerVariants, itemVariants } from "@/lib/animations";

const PLAYGROUND_FIGMA_LINK = "https://www.figma.com/design/Jeck3YYRm9V67sZKxlTORk/Ama-s-playground?node-id=0-1&t=vmxcCo8K1abxScAH-1";

export default function WorkEditorial() {
  const orderedProjects = [
    ...projects.filter((p) => p.tier === "case-study"),
    ...projects.filter((p) => p.tier === "selected"),
    ...projects.filter((p) => p.tier === "lab"),
  ];

  // Get the correct route for each project
  const getProjectHref = (projectId: string) => {
    if (projectId === "logit") return "/work/logit";
    if (projectId === "attendance") return "/work/attendance";
    if (projectId === "fraud-net") return "/fraud-net";
    if (projectId === "playground") return PLAYGROUND_FIGMA_LINK;
    return `/work/${projectId}`;
  };

  return (
    <section className="work-editorial" id="work">
      <div className="work-editorial__header">
        <div className="work-editorial__eyebrow">Selected Work</div>
        <h1 className="work-editorial__title">Eight problems. <em>One brain.</em></h1>
        <p className="work-editorial__subtitle">Product narratives, built systems, and frontier explorations.</p>
      </div>

      <motion.div
        className="work-list-unified"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {orderedProjects.map((project) => {
          const href = getProjectHref(project.id);
          const isExternal = project.id === "playground";

          return (
            <motion.div key={project.id} className="work-card" variants={itemVariants}>
              <Link
                href={href}
                className="work-card__link"
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div className="work-card__top">
                  <h3 className="work-card__name">{project.name}</h3>
                  <span className="work-card__arrow">
                    <HugeiconsIcon icon={ArrowRight01Icon} size={20} strokeWidth={2} />
                  </span>
                </div>
                <div className="work-card__body">
                  <p className="work-card__meta">
                    <span className="work-card__category">{project.category}</span> · {project.desc}
                  </p>
                  {project.image && (
                    <div className="work-card__thumb">
                      <Image
                        src={project.image}
                        alt={`${project.name}. ${project.desc}`}
                        width={160}
                        height={110}
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      />
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
