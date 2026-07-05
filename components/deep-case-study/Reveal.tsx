"use client";

import React, { useState } from "react";

export interface RevealProps {
  showLabel: string;
  hideLabel: string;
  children: React.ReactNode;
}

export default function Reveal({ showLabel, hideLabel, children }: RevealProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dcs-reveal">
      <button type="button" className="dcs-reveal__toggle" onClick={() => setOpen((v) => !v)}>
        {open ? hideLabel : showLabel}
      </button>
      {open && <div className="dcs-reveal__content">{children}</div>}
    </div>
  );
}
