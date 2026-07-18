"use client";

import React from "react";
import { Project } from "../data/projects";
import {
  Shell,
  Hero,
  HeroImage,
  Overview,
  Highlights,
  Figure,
} from "@/components/deep-case-study";
import type { OverviewLink } from "@/components/deep-case-study/Overview";

interface ProjectDetailProps {
  project: Project;
}

/*
 * Light case study, modeled on the reference's Spotlight page:
 * Hero > Overview > Highlights media stack. No TOC, no deep sections.
 */
export default function ProjectDetail({ project }: ProjectDetailProps) {
  const links: OverviewLink[] = [
    ...(project.externalLink ? [{ label: "Visit live site", href: project.externalLink, external: true }] : []),
    ...(project.demoLink ? [{ label: "Try the interactive demo", href: project.demoLink }] : []),
    ...(project.figmaLink ? [{ label: "View in Figma", href: project.figmaLink, external: true }] : []),
  ];

  return (
    <Shell sections={[]}>
      <Hero title={<>{project.name}</>} subtitle={`${project.category} · ${project.status}`} />

      {project.image && (
        <HeroImage src={project.image} alt={`${project.name} ${project.desc}`} />
      )}

      <Overview
        role={project.role ?? project.category}
        team={project.team ?? ["Solo project"]}
        timeline={project.status}
        paragraphs={project.overview ?? [project.desc]}
        links={links}
      />

      {project.highlightStatement && (
        <Highlights statement={project.highlightStatement}>
          {(project.highlights ?? []).map((media, i) => (
            <Figure
              key={media.src}
              number={`0.${i + 1}`}
              caption={media.caption}
              type={media.type ?? "image"}
              src={media.src}
              alt={`${project.name} ${media.caption}`}
              width={media.width}
              height={media.height}
            />
          ))}
        </Highlights>
      )}
    </Shell>
  );
}
