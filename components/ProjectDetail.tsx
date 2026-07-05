"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../data/projects";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { fadeIn } from "@/lib/animations";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="project-detail">
      <Link href="/work" className="back-link">
        <span><HugeiconsIcon icon={ArrowLeft01Icon} size={20} strokeWidth={2} /></span> Back to work
      </Link>

      <div className="pd-header">
        <motion.div className="pd-tag" {...fadeIn}>
          {project.category}
        </motion.div>
        <motion.h1 className="pd-title" {...fadeIn} transition={{ delay: 0.1 }}>
          {project.name}
        </motion.h1>
        
        <div className="pd-meta-row">
          <motion.div className="pd-desc" {...fadeIn} transition={{ delay: 0.2 }}>
            {project.desc}
          </motion.div>
          
          <motion.div className="pd-actions" {...fadeIn} transition={{ delay: 0.3 }}>
            {project.figmaLink && (
              <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="pd-btn pd-btn--primary">
                View Figma
              </a>
            )}
            {project.externalLink && (
              <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="pd-btn">
                Visit Site
              </a>
            )}
            <div className="pd-status">
              <span className="dot" /> {project.status}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="pd-main-visual"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.name}. ${project.desc}`}
            width={1200}
            height={750}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        )}
      </motion.div>

      {/* Gallery Section - if more images exist */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="pd-gallery">
          {project.gallery.map((img, i) => (
            <motion.div key={i} className="pd-gallery-item" {...fadeIn}>
              <Image src={img} alt={`${project.name} gallery image ${i + 1}`} width={600} height={400} style={{ width: '100%', height: 'auto' }} />
            </motion.div>
          ))}
        </div>
      )}

      {/* Context/Small Story */}
      <div className="pd-context-grid">
        <motion.div className="pd-context-col" {...fadeIn}>
          <h3 className="pd-section-label">Background</h3>
          <p>
            {project.background ??
              (project.id === 'forex'
                ? "A technical exploration into automated trading and real-time data processing. The focus was entirely on system logic and reliability, eschewing traditional UI in favor of a lean, command-based Telegram interface."
                : project.tier === 'lab'
                  ? "A creative exploration focused on pushing the boundaries of typical interfaces. This project allowed me to experiment with new interaction models and visual styles."
                  : "A focused client project where the goal was to deliver high-fidelity designs that solve specific business needs while maintaining a premium aesthetic.")}
          </p>
        </motion.div>
        <motion.div className="pd-context-col" {...fadeIn}>
          <h3 className="pd-section-label">Outcome</h3>
          <p>
            {project.outcome ??
              (project.id === 'forex'
                ? "Developed a robust backend architecture capable of executing trades in milliseconds and broadcasting live signals to users with zero latency."
                : project.tier === 'lab'
                  ? "Resulted in a set of reusable UI components and a refined understanding of spatial and technical constraints."
                  : "Delivered a complete design system and high-fidelity mockups ready for implementation.")}
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="cs-footer-cta"
        {...fadeIn}
      >
        <div className="cs-section-label">Back to Portfolio</div>
        <Link href="/work" className="cs-footer-cta__link">
          <h2 className="cs-sub-title">
            All Projects <HugeiconsIcon icon={ArrowRight01Icon} size={32} strokeWidth={2} />
          </h2>
        </Link>
      </motion.div>
    </section>
  );
}
