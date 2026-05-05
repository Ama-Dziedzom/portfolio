"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { fadeIn } from "@/lib/animations";

export default function AttendanceHubCaseStudy() {
  return (
    <section className="case-study-modern">
      <Link href="/work" className="back-link">
        <span><HugeiconsIcon icon={ArrowLeft01Icon} size={20} strokeWidth={2} /></span> Back to work
      </Link>

      {/* ── HERO SECTION ── */}
      <div className="cs-hero-modern">
        <motion.div className="cs-hero-tag" {...fadeIn}>
          Case Study · Full-Stack · System Architecture
        </motion.div>
        <motion.h1 className="cs-hero-title" {...fadeIn} transition={{ delay: 0.1 }}>
          Attendance <em>Hub.</em>
        </motion.h1>
        <motion.p className="cs-hero-hook" {...fadeIn} transition={{ delay: 0.2 }}>
          <strong>My first build.</strong><br />
          From a designer&apos;s sketch to a real-time biometric management system.
        </motion.p>

        <motion.div className="cs-meta-grid" {...fadeIn} transition={{ delay: 0.3 }}>
          <div className="cs-meta-item">
            <div className="cs-meta-label">Role</div>
            <div className="cs-meta-value">Architect &amp; Lead Designer</div>
          </div>
          <div className="cs-meta-item">
            <div className="cs-meta-label">Stack</div>
            <div className="cs-meta-value">React · Node · Biometrics</div>
          </div>
          <div className="cs-meta-item">
            <div className="cs-meta-label">Impact</div>
            <div className="cs-meta-value">Real-time Automation</div>
          </div>
          <div className="cs-meta-item">
            <div className="cs-meta-label">Status</div>
            <div className="cs-meta-value accent">Live Product</div>
          </div>
        </motion.div>
      </div>

      {/* ── HERO IMAGE ── */}
      <motion.div 
        className="cs-image-container cs-visual-full"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Image 
          src="/projects/attendance/hero.png" 
          alt="Attendance Hub real-time dashboard showing biometric check-in data, employee list, and live attendance metrics"
          width={1920}
          height={1080}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          priority
        />
      </motion.div>

      {/* ── SECTION 01: THE ORIGIN ── */}
      <div className="cs-grid-editorial">
        <motion.div className="cs-content-col" {...fadeIn}>
          <div className="cs-section-label">01 / The Origin</div>
          <h2 className="cs-sub-title">More than just a <em>Dashboard.</em></h2>
          <div className="cs-text-box">
            <p>This project was my playground for learning how things actually work. I wasn&apos;t just moving pixels; I was figuring out how a fingerprint scanner talks to a database in real-time.</p>
            <p>I learned that design is easy—system reliability is the real challenge. Handling 400+ simultaneous check-ins requires more than a pretty UI.</p>
          </div>
        </motion.div>
        <motion.div className="cs-image-container cs-image-container--medium" {...fadeIn}>
          <Image src="/projects/attendance/architecture.png" alt="Full-stack architecture diagram showing React frontend, Node.js API, fingerprint scanner integration, and database layer" width={600} height={600} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          <div className="cs-image-caption">Visualizing the full-stack architecture I built.</div>
        </motion.div>
      </div>

      {/* ── SECTION 02: BIOMETRIC LOGIC ── */}
      <div className="cs-grid-editorial cs-grid-editorial--reverse">
        <motion.div className="cs-content-col" {...fadeIn}>
          <div className="cs-section-label">02 / Technical Depth</div>
          <h2 className="cs-sub-title">The Biometric <em>Handshake.</em></h2>
          <div className="cs-text-box">
            <p>Implementing the matching algorithm taught me about data templates and secure encoding. A fingerprint isn&apos;t stored as an image, but as a mathematical hash that must be matched in milliseconds.</p>
          </div>
        </motion.div>
        <motion.div className="cs-image-container cs-image-container--medium" {...fadeIn}>
          <Image src="/projects/attendance/logic.png" alt="Biometric authentication workflow diagram showing fingerprint capture, hash encoding, and database matching process" width={600} height={500} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          <div className="cs-image-caption">Mapping the biometric authentication workflow.</div>
        </motion.div>
      </div>

      {/* ── PULLQUOTE ── */}
      <motion.div className="cs-pullquote-editorial" {...fadeIn}>
        &quot;Architecture is just design on a different scale. Instead of choosing a font, you&apos;re choosing a database schema.&quot;
      </motion.div>

      {/* ── NEXT PROJECT FOOTER ── */}
      <motion.div 
        className="cs-footer-cta"
        {...fadeIn}
      >
        <div className="cs-section-label">Next Case Study</div>
        <Link href="/work/logit" className="cs-footer-cta__link">
          <h2 className="cs-sub-title">
            LogIt <HugeiconsIcon icon={ArrowRight01Icon} size={32} strokeWidth={2} />
          </h2>
        </Link>
      </motion.div>
    </section>
  );
}
