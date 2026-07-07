"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export interface OverviewLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface OverviewProps {
  role: React.ReactNode;
  team: React.ReactNode[];
  timeline: React.ReactNode;
  paragraphs: React.ReactNode[];
  links?: OverviewLink[];
}

export default function Overview({ role, team, timeline, paragraphs, links }: OverviewProps) {
  return (
    <div className="dcs-section" id="overview">
      <div className="dcs-overview">
        <motion.div className="dcs-overview__meta" {...fadeIn}>
          <div className="dcs-meta-block">
            <div className="dcs-meta-block__label">My Role</div>
            <div className="dcs-meta-block__value">{role}</div>
          </div>
          <div className="dcs-meta-block">
            <div className="dcs-meta-block__label">Team</div>
            <div className="dcs-meta-block__list">
              {team.map((member, i) => (
                <div key={i}>{member}</div>
              ))}
            </div>
          </div>
          <div className="dcs-meta-block">
            <div className="dcs-meta-block__label">Timeline &amp; Status</div>
            <div className="dcs-meta-block__value">{timeline}</div>
          </div>
          {links && links.length > 0 && (
            <div className="dcs-meta-block">
              <div className="dcs-meta-block__label">Links</div>
              <div className="dcs-meta-block__list">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="dcs-meta-block__link"
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        <motion.div className="dcs-overview__body" {...fadeIn} transition={{ delay: 0.1 }}>
          <h2 className="dcs-overview__heading">Overview</h2>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
