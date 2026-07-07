"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import type { Project } from "../data/projects";

export interface WorkCardProps {
  project: Project;
  href: string;
  external?: boolean;
}

/*
 * Reference card anatomy (perryw-2023.webflow.io):
 * outline wrapper (8px pad, 24px radius, faint bg, deep shadow, 1px glare line on top)
 *   > card link (column: title row + meta line, then a large bottom-bleeding thumbnail)
 */
export default function WorkCard({ project, href, external = false }: WorkCardProps) {
  return (
    <div className="work-card-outline">
      <Link
        href={href}
        className="work-card"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <div className="work-card__top">
          <div className="work-card__title-row">
            <h3 className="work-card__name">{project.name}</h3>
            <span className="work-card__arrow">
              <HugeiconsIcon icon={ArrowRight02Icon} size={28} strokeWidth={1.5} />
            </span>
          </div>
          <p className="work-card__meta">
            <span className="work-card__category">{project.category}</span>
            {" · "}
            {project.desc}
          </p>
        </div>
        {project.image && (
          <div className="work-card__thumb">
            <Image
              src={project.image}
              alt={`${project.name} ${project.desc}`}
              width={866}
              height={560}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        )}
      </Link>
    </div>
  );
}
