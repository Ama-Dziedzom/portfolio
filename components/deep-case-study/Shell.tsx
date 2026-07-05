"use client";

import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import Toc, { TocSection } from "./Toc";

export interface ShellProps {
  sections: TocSection[];
  children: React.ReactNode;
}

export default function Shell({ sections, children }: ShellProps) {
  return (
    <section className="dcs">
      <Link href="/work" className="dcs-back">
        <HugeiconsIcon icon={ArrowLeft01Icon} size={18} strokeWidth={2} />
        Back
      </Link>

      <div className="dcs-layout">
        <div className="dcs-main">{children}</div>
        <Toc sections={sections} />
      </div>
    </section>
  );
}
