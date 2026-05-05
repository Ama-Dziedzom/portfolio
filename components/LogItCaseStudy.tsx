"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { fadeIn } from "@/lib/animations";

export default function LogItCaseStudy() {
  return (
    <section className="case-study-modern">
      <Link href="/work" className="back-link">
        <span><HugeiconsIcon icon={ArrowLeft01Icon} size={20} strokeWidth={2} /></span> Back to work
      </Link>

      {/* ── HERO SECTION ── */}
      <div className="cs-hero-modern">
        <motion.div className="cs-hero-tag" {...fadeIn}>
          Case Study · Fintech · 2026
        </motion.div>
        <motion.h1 className="cs-hero-title" {...fadeIn} transition={{ delay: 0.1 }}>
          Log<em>It.</em>
        </motion.h1>
        <motion.p className="cs-hero-hook" {...fadeIn} transition={{ delay: 0.2 }}>
          <strong>The manual logging era is over.</strong><br />
          Building a zero-friction financial system that turns SMS receipts into an honest, automated source of truth for the MoMo generation.
        </motion.p>

        <motion.div className="cs-meta-grid" {...fadeIn} transition={{ delay: 0.3 }}>
          <div className="cs-meta-item">
            <div className="cs-meta-label">Role</div>
            <div className="cs-meta-value">Designer &amp; Builder</div>
          </div>
          <div className="cs-meta-item">
            <div className="cs-meta-label">Focus</div>
            <div className="cs-meta-value">Fintech · Automation</div>
          </div>
          <div className="cs-meta-item">
            <div className="cs-meta-label">Market</div>
            <div className="cs-meta-value">Accra, Ghana</div>
          </div>
          <div className="cs-meta-item">
            <div className="cs-meta-label">Challenge</div>
            <div className="cs-meta-value accent">System Limitations</div>
          </div>
        </motion.div>
      </div>

      {/* ── IMMERSIVE VISUAL (Hero) ── */}
      <motion.div 
        className="cs-image-container cs-visual-full"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <Image 
          src="/projects/logit/hero.png" 
          alt="LogIt app hero screen showing the automated transaction dashboard with parsed MoMo SMS data"
          width={1920}
          height={1080}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.3))', pointerEvents: 'none' }} />
      </motion.div>

      {/* ── SECTION 01: THE CONTEXT ── */}
      <div className="cs-grid-editorial">
        <motion.div className="cs-content-col" {...fadeIn}>
          <div className="cs-section-label">01 / The Context</div>
          <h2 className="cs-sub-title">A market without <em>APIs.</em></h2>
          <div className="cs-text-box">
            <p>In mature markets, fintech apps rely on Plaid or bank APIs to sync transactions. In Ghana, the &quot;bank&quot; is Mobile Money (MoMo). It&apos;s fast, ubiquitous, and completely closed off from third-party apps.</p>
            <p>Every transaction triggers an SMS receipt. This is the only digital record millions of people have. But these messages are scattered, unformatted, and eventually buried.</p>
            <p><strong>Manual logging fails because of &quot;Data Decay.&quot;</strong> If you miss just two days of logging, your entire monthly balance is inaccurate. Most people simply give up.</p>
          </div>
        </motion.div>
        <motion.div className="cs-image-container cs-image-container--tall" {...fadeIn}>
          <Image src="/projects/logit/problem.png" alt="Screenshot showing scattered, unorganized MoMo SMS receipts on a phone" width={600} height={700} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          <div className="cs-image-caption">The raw, unorganized reality of Ghanaian financial data.</div>
        </motion.div>
      </div>

      {/* ── SECTION 02: THE LOGIC (The Diagram) ── */}
      <div className="cs-system-logic-section">
        <motion.div className="cs-content-col" {...fadeIn}>
          <div className="cs-section-label">02 / The System</div>
          <h2 className="cs-sub-title">Turning text into <em>intelligence.</em></h2>
        </motion.div>

        <div className="cs-logic-viz">
          <motion.div className="logic-node" {...fadeIn} transition={{ delay: 0.1 }}>
            <div className="node-icon">SMS</div>
            <div className="node-label">The Trigger</div>
            <div className="node-desc">Transaction receipt arrives via native iOS message.</div>
          </motion.div>
          <div className="logic-connector" />
          <motion.div className="logic-node logic-node--accent" {...fadeIn} transition={{ delay: 0.2 }}>
            <div className="node-icon">Regex</div>
            <div className="node-label">The Parser</div>
            <div className="node-desc">iOS Shortcut extracts Amount, Type, and Fee.</div>
          </motion.div>
          <div className="logic-connector" />
          <motion.div className="logic-node" {...fadeIn} transition={{ delay: 0.3 }}>
            <div className="node-icon">UI</div>
            <div className="node-label">The Dashboard</div>
            <div className="node-desc">Structured data is logged and visualized instantly.</div>
          </motion.div>
        </div>
      </div>

      {/* ── SECTION 03: THE WORKAROUND ── */}
      <div className="cs-grid-editorial cs-grid-editorial--reverse">
        <motion.div className="cs-content-col" {...fadeIn}>
          <div className="cs-section-label">03 / The Workaround</div>
          <h2 className="cs-sub-title">Hacking the <em>Sandboxes.</em></h2>
          <div className="cs-text-box">
            <p>Apple&apos;s security model prevents apps from reading your messages. On Android, this project would be trivial. On iOS, it required a system-level rethink.</p>
            <p>I utilized <strong>iOS Shortcuts Automations</strong> to act as the bridge. When a message from a specific sender arrives, the Shortcut triggers, parses the text using Regex, and sends the payload to the LogIt app. It&apos;s a &quot;zero-touch&quot; experience that feels like a native background listener.</p>
          </div>
        </motion.div>
        <motion.div className="cs-image-container cs-image-container--medium" {...fadeIn}>
          <Image src="/projects/logit/logic.png" alt="System architecture diagram showing iOS Shortcuts automation pipeline from SMS to LogIt app" width={600} height={600} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          <div className="cs-image-caption">System architecture: Leveraging native automation hooks.</div>
        </motion.div>
      </div>

      {/* ── VISUAL GRID ── */}
      <div className="cs-visual-grid cs-visual-grid--staggered">
        <motion.div className="cs-image-container cs-image-container--tall" {...fadeIn}>
          <Image src="/projects/logit/dashboard.png" alt="LogIt dashboard screen showing transaction categories, spending trends, and balance overview" width={600} height={700} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          <div className="cs-image-caption">Dashboard: Designed to reduce &quot;Financial Anxiety.&quot;</div>
        </motion.div>
        <motion.div className="cs-image-container cs-image-container--medium" {...fadeIn}>
          <Image src="/projects/logit/detail.png" alt="Transaction detail view showing MoMo fee breakdown and categorization" width={600} height={500} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          <div className="cs-image-caption">Transparency: Every MoMo fee is accounted for.</div>
        </motion.div>
      </div>

      {/* ── PULLQUOTE ── */}
      <motion.div className="cs-pullquote-editorial" {...fadeIn}>
        &quot;In a market where fees are hidden and APIs are non-existent, honesty is a design feature.&quot;
      </motion.div>

      {/* ── SECTION 04: IA & CATEGORIZATION ── */}
      <div className="cs-ia-section">
        <motion.div className="cs-content-col" {...fadeIn}>
          <div className="cs-section-label">04 / IA &amp; Categorization</div>
          <h2 className="cs-sub-title">Mapping the <em>Transaction DNA.</em></h2>
          <div className="cs-text-box" style={{ maxWidth: '800px' }}>
            <p>I mapped 14 distinct transaction patterns—from merchant payments to airtime top-ups. Each pattern has a unique &quot;DNA&quot; within the SMS body. The parser handles these variations, ensuring that a &quot;Cash-out fee&quot; isn&apos;t confused with the &quot;Transfer amount.&quot;</p>
          </div>
        </motion.div>
        
        <motion.div className="cs-ia-table-wrap" {...fadeIn}>
          <table className="cs-ia-table">
            <thead>
              <tr>
                <th>Pattern Type</th>
                <th>Regex Logic</th>
                <th>UI Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Merchant Payment</td>
                <td>{"Extract: 'Sent to [Name]'"}</td>
                <td>Outflow (-)</td>
              </tr>
              <tr>
                <td>MoMo Fee</td>
                <td>{"Extract: 'Fee is GHS [X]'"}</td>
                <td>Tax/Fee Category</td>
              </tr>
              <tr>
                <td>Cash-In</td>
                <td>{"Extract: 'Received from [Agent]'"}</td>
                <td>Inflow (+)</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>

      {/* ── SECTION 05: HONEST REFLECTION ── */}
      <div className="cs-honest-bento">
        <motion.div className="cs-honest-card cs-honest-card--dark" {...fadeIn}>
          <div className="cs-section-label">The Tech Stack</div>
          <ul className="cs-list-editorial">
            <li><span>iOS Shortcuts</span><span>Trigger Hub</span></li>
            <li><span>Swift / SwiftUI</span><span>Core App</span></li>
            <li><span>Regex101</span><span>Logic Testing</span></li>
            <li><span>JSON Payload</span><span>Data Bridge</span></li>
          </ul>
        </motion.div>
        <motion.div className="cs-honest-card" {...fadeIn}>
          <div className="cs-section-label">The Senior Insight</div>
          <div className="cs-text-box" style={{ marginTop: '32px' }}>
            <p>This project taught me that user experience isn&apos;t just about the interface you build—it&apos;s about the technical hurdles you hide. By leveraging iOS Automations, I turned a system-level hurdle into a frictionless user benefit.</p>
          </div>
        </motion.div>
      </div>

      {/* ── NEXT PROJECT FOOTER ── */}
      <motion.div 
        className="cs-footer-cta"
        {...fadeIn}
      >
        <div className="cs-section-label">Next Case Study</div>
        <Link href="/work/attendance" className="cs-footer-cta__link">
          <h2 className="cs-sub-title">
            Attendance Hub <HugeiconsIcon icon={ArrowRight01Icon} size={32} strokeWidth={2} />
          </h2>
        </Link>
      </motion.div>
    </section>
  );
}
