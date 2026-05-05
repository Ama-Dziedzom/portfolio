"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { containerVariants, itemVariants } from "@/lib/animations";

export default function WorkEditorial() {
  const caseStudies = projects.filter(p => p.tier === 'case-study');
  const selectedWorks = projects.filter(p => p.tier === 'selected');
  const labProjects = projects.filter(p => p.tier === 'lab');

  // Get the correct route for each project
  const getProjectHref = (projectId: string) => {
    if (projectId === 'logit') return '/work/logit';
    if (projectId === 'attendance') return '/work/attendance';
    return `/work/${projectId}`;
  };

  return (
    <section className="work-editorial">
      <div className="work-editorial__header">
        <div className="work-editorial__eyebrow">Selected Work</div>
        <h1 className="work-editorial__title">Eight problems. <em>One brain.</em></h1>
        <p className="work-editorial__subtitle">Product narratives, built systems, and frontier explorations.</p>
      </div>

      {/* Tier 1: Case Studies (Featured) */}
      <div className="work-section">
        <h2 className="work-section__title">01. Case Studies</h2>
        <div className="case-studies-grid">
          {caseStudies.map((project) => (
            <motion.div
              key={project.id}
              className="case-study-card"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href={getProjectHref(project.id)} className="case-study-card__link">
                <div className="case-study-card__visual">
                  <Image
                    src={project.image!}
                    alt={`${project.name} — ${project.desc}`}
                    width={600}
                    height={750}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                  <div className="case-study-card__overlay">
                    <span>Read Story <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} /></span>
                  </div>
                </div>
                <div className="case-study-card__info">
                  <div className="case-study-card__meta">{project.category}</div>
                  <h3 className="case-study-card__name">{project.name}</h3>
                  <p className="case-study-card__desc">{project.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tier 2: Selected Works (Professional) */}
      <div className="work-section">
        <h2 className="work-section__title">02. Selected Works</h2>
        <motion.div 
          className="work-editorial__list" 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {selectedWorks.map((project, idx) => (
            <motion.div
              key={project.id}
              className="work-row"
              variants={itemVariants}
            >
              <Link href={getProjectHref(project.id)} className="work-row__link">
                <div className="work-row__index">{String(idx + 1).padStart(2, '0')}</div>
                <div className="work-row__content">
                  <h3 className="work-row__name">{project.name}</h3>
                  <p className="work-row__desc">{project.desc}</p>
                </div>
                <div className="work-row__meta">
                  <span className="work-row__category">{project.category}</span>
                  <span className={`work-row__status ${project.status.toLowerCase().includes('building') || project.status.toLowerCase().includes('progress') ? 'work-row__status--active' : ''}`}>
                    {project.status.toLowerCase().includes('building') || project.status.toLowerCase().includes('progress') ? <span className="work-row__pulse" /> : null}
                    {project.status}
                  </span>
                </div>
                <div className="work-row__arrow">
                  <HugeiconsIcon icon={ArrowRight01Icon} size={20} strokeWidth={2} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tier 3: The Lab (Experimental) */}
      <div className="work-section">
        <h2 className="work-section__title">03. The Lab</h2>
        <div className="lab-masonry">
          {/* Hero: Figma Playground */}
          {labProjects.filter(p => p.id === 'playground').map((project) => (
            <motion.a
              key={project.id}
              className="lab-card lab-card--hero"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href="https://figma.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="lab-card__visual">
                <Image
                  src={project.image!}
                  alt={`${project.name} — ${project.category}`}
                  width={1200}
                  height={514}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <div className="lab-card__badge">Live Snapshot</div>
              </div>
            </motion.a>
          ))}

          {/* Other Lab Projects */}
          {labProjects.filter(p => p.id !== 'playground').map((project) => (
            <motion.div
              key={project.id}
              className="lab-card"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href={getProjectHref(project.id)}>
                <div className="lab-card__visual">
                  <Image
                    src={project.image!}
                    alt={`${project.name} — ${project.category}`}
                    width={400}
                    height={400}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="lab-card__info">
                  <h4 className="lab-card__name">{project.name}</h4>
                  <p className="lab-card__category">{project.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
