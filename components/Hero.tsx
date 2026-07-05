"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Audience {
  id: string;
  label: string;
  headline: React.ReactNode;
  sub: React.ReactNode;
}

// Draft copy per audience. Refine together once the structure is confirmed.
const AUDIENCES: Audience[] = [
  {
    id: "anyone",
    label: "For anyone",
    headline: <>Designing things<br />I then have to <em>build.</em></>,
    sub: (
      <>
        Product designer &amp; builder in Accra, Ghana.
        <br />
        Currently at a creative agency. Building my own things after hours.
      </>
    ),
  },
  {
    id: "recruiters",
    label: "Recruiters",
    headline: <>A product designer<br />who <em>ships.</em></>,
    sub: <>Product designer &amp; builder based in Accra, Ghana, currently at a creative agency. Case studies below show the full process, not just the polish.</>,
  },
  {
    id: "design-directors",
    label: "Design Directors",
    headline: <>I sweat the details<br />other designers <em>skip.</em></>,
    sub: <>Case studies below cover system design, information architecture, and shipped product, not just polished screens.</>,
  },
  {
    id: "product-designers",
    label: "Product Designers",
    headline: <>Design and code,<br />same <em>brain.</em></>,
    sub: <>I prototype in Figma and ship in React. Explore the process behind LogIt, Attendance Hub, and more below.</>,
  },
  {
    id: "product-managers",
    label: "Product Managers",
    headline: <>Ambiguous problems,<br />shipped <em>features.</em></>,
    sub: <>The case studies below show the full arc: context, constraints, decisions, and what actually shipped.</>,
  },
  {
    id: "engineers",
    label: "Engineers",
    headline: <>if (design !== code)<br />{"{"} <em>throw;</em> {"}"}</>,
    sub: <>I ship in React and Next.js, hacked iOS Shortcuts into a working SMS parser for LogIt, and read your PRs as closely as your Figma comments.</>,
  },
];

export default function Hero() {
  const [activeId, setActiveId] = useState(AUDIENCES[0].id);
  const active = AUDIENCES.find((a) => a.id === activeId) ?? AUDIENCES[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="hero-simplified" id="intro">
      {/* Subtle ambient glow */}
      <div className="hero-glow hero-glow--warm" />
      <div className="hero-glow hero-glow--neutral" />

      <div className="hero-audience-tabs" role="tablist" aria-label="View intro for">
        {AUDIENCES.map((audience) => (
          <button
            key={audience.id}
            type="button"
            role="tab"
            aria-selected={activeId === audience.id}
            className={`hero-audience-tab ${activeId === audience.id ? "active" : ""}`}
            onClick={() => setActiveId(audience.id)}
          >
            {audience.label}
          </button>
        ))}
      </div>

      <motion.div
        className="hero-inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline + sub, swaps per audience tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            className="hero-headline-group"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-headline">{active.headline}</h1>
            <p className="hero-sub">{active.sub}</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
