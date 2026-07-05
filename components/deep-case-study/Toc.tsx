"use client";

import React from "react";
import { getLenisInstance } from "@/lib/lenis";
import useScrollSpy from "@/lib/useScrollSpy";

export interface TocSection {
  id: string;
  label: string;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = getLenisInstance();
  if (lenis) {
    lenis.scrollTo(el, { offset: -24 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Toc({ sections }: { sections: TocSection[] }) {
  const activeId = useScrollSpy(sections.map((s) => s.id));

  return (
    <nav className="dcs-toc" aria-label="Case study contents">
      <div className="dcs-toc__label">Contents</div>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`dcs-toc__link ${activeId === section.id ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToId(section.id);
          }}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
