"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

const ARTICLES = [
  {
    title: "That's not a design question… until it is",
    note: "6 min read · Medium",
    href: "https://medium.com/@dbarnor56/thats-not-a-design-question-until-it-is-e334314603a6",
  },
  {
    title: "From Curiosity to Clarity: No-Code & AI Tools",
    note: "Medium",
    href: "https://medium.com/@dbarnor56/from-curiosity-to-clarity-the-no-code-ai-tools-i-loved-vs-dropped-one-month-in-c51d574770d0",
  },
];

/* Framed photo card, like the reference's "window" frames on /info */
function InfoWindow({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div className="info-window" {...fadeIn}>
      <div className="info-window__main">
        <Image
          src={src}
          alt={alt}
          width={494}
          height={732}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
    </motion.div>
  );
}

export default function AboutModern() {
  return (
    <section className="about-info" id="about">
      {/* ── ABOUT ME ── */}
      <motion.div className="about-info__head" {...fadeIn}>
        <h2 className="dcs-section__label">
          <span className="dcs-section__dot" aria-hidden="true" />
          About Me
        </h2>
        <h1 className="about-info__headline">
          I design products, and I <em>build them for real</em> as a hobby.
        </h1>
      </motion.div>

      <div className="about-info__story">
        <div className="about-info__col">
          <InfoWindow
            src="/IMG_3937.jpg"
            alt="Ama Dziedzom Barnor, Product Designer based in Accra, Ghana"
          />
          <motion.p className="about-info__body" {...fadeIn}>
            <strong>Product design is my day job. Building is how I push it further.</strong>
            <br />
            <br />
            After work, I build the things I design. Shipping real code teaches me
            system design and the full cycle of a product in a way mockups never
            could. In markets like Accra, trust is the primary product, and a designer
            who understands the stack builds more honest, resilient, and playful
            experiences.
          </motion.p>
          <InfoWindow
            src="/about/art-ekko.png"
            alt="Ekko character illustration, digital art exploration"
          />
        </div>

        <div className="about-info__col about-info__col--offset">
          <motion.p className="about-info__body" {...fadeIn}>
            <strong>This is my story, alongside some of my art.</strong>
          </motion.p>
          <InfoWindow
            src="/about/art-miles-final.png"
            alt="Miles Morales illustration, Spider-Verse inspired digital art"
          />
          <motion.p className="about-info__body" {...fadeIn}>
            <strong>My art is the lab.</strong>
            <br />
            <br />
            It&apos;s where I experiment with form and color without the constraints of
            a grid.{" "}
            <a
              href="https://www.pinterest.com/dbarnor56/_created/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-info__inline-link"
            >
              See more on Pinterest{" "}
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} strokeWidth={2} />
            </a>
          </motion.p>
        </div>
      </div>

      {/* ── EXPERIENCE ── */}
      <div className="about-info__divider" aria-hidden="true" />
      <div className="about-info__section">
        <motion.h2 className="dcs-section__label" {...fadeIn}>
          <span className="dcs-section__dot" aria-hidden="true" />
          Experience
        </motion.h2>

        <motion.div className="about-info__exp-row" {...fadeIn}>
          <h3 className="about-info__exp-company">Creative agency, Accra</h3>
          <div className="about-info__exp-block">
            <div className="about-info__exp-role">Product Designer</div>
            <div className="about-info__exp-date">Present</div>
            <p className="about-info__body">
              Designing client products by day, building my own things after hours.
            </p>
          </div>
        </motion.div>

        <p className="dcs-placeholder">
          [Placeholder] Room for earlier roles and dates once compiled: agency name,
          previous positions, and timelines.
        </p>
      </div>

      {/* ── WRITING ── */}
      <div className="about-info__divider" aria-hidden="true" />
      <div className="about-info__section">
        <motion.h2 className="dcs-section__label" {...fadeIn}>
          <span className="dcs-section__dot" aria-hidden="true" />
          Writing
        </motion.h2>

        <div className="about-info__writing-grid">
          {ARTICLES.map((article) => (
            <motion.div key={article.href} className="about-info__writing-block" {...fadeIn}>
              <div className="about-info__writing-name">
                <div className="about-info__writing-title">{article.title}</div>
                <div className="about-info__writing-note">{article.note}</div>
              </div>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="about-info__writing-link"
              >
                Read piece{" "}
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} strokeWidth={2} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
