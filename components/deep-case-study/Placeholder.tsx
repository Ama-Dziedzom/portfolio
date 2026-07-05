"use client";

import React from "react";

export default function Placeholder({ children }: { children: React.ReactNode }) {
  return <p className="dcs-placeholder">[Placeholder] {children}</p>;
}
