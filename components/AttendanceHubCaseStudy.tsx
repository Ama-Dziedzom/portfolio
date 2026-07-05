"use client";

import React from "react";
import {
  Shell,
  Hero,
  HeroImage,
  Overview,
  Section,
  TwoColText,
  KeyDiscovery,
  Figure,
  Takeaways,
  Placeholder,
  NextProject,
  Comparison,
  Stepper,
  TocSection,
} from "@/components/deep-case-study";

const SECTIONS: TocSection[] = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "problem", label: "The Problem" },
  { id: "system", label: "The System" },
  { id: "layout", label: "Layout" },
  { id: "interactions", label: "Interactions" },
  { id: "visual-design", label: "Visual Design" },
  { id: "final-designs", label: "Final Designs" },
  { id: "retrospective", label: "Retrospective" },
];

export default function AttendanceHubCaseStudy() {
  return (
    <Shell sections={SECTIONS}>
      <Hero title={<>Attendance Hub.</>} subtitle="Full-Stack · Biometric · Live product" />

      <HeroImage
        src="/1.png"
        alt="Attendance Hub real-time dashboard showing biometric check-in data, employee list, and live attendance metrics"
      />

      <Overview
        role={<><strong>Architect &amp; Lead Designer</strong>: System Design, Full-Stack Build, Biometric Integration</>}
        team={["Solo project"]}
        timeline="Live product"
        paragraphs={[
          <>My first build. Attendance Hub took a designer&apos;s sketch all the way to a real-time biometric management system, live and handling real check-ins today.</>,
          <>This project was my playground for learning how things actually work. I wasn&apos;t just moving pixels; I was figuring out how a fingerprint scanner talks to a database in real-time.</>,
        ]}
      />

      <Section id="context" label="Context">
        <TwoColText heading="More than just a dashboard.">
          {[
            <>I learned that design is easy. System reliability is the real challenge. Handling 400+ simultaneous check-ins requires more than a pretty UI, it requires an architecture that doesn&apos;t fall over under real load.</>,
          ]}
        </TwoColText>
        <p className="dcs-placeholder">
          [Placeholder] Room for the specific origin story, who the first users were, and what the paper/manual process looked like before this existed.
        </p>
      </Section>

      <Section id="problem" label="The Problem" title="Reliability at scale, on a first build.">
        <TwoColText heading="Two ways to check in, one system to trust.">
          {[
            <>Supporting both fingerprint and RFID meant the system couldn&apos;t assume a single, uniform input. Each method carries its own tradeoffs, and both had to feed the same reliable check-in record.</>,
          ]}
        </TwoColText>

        <Comparison
          options={[
            {
              label: "Fingerprint",
              points: [
                "Harder to share between people, tied to one person by design.",
                "Needs clean, direct scanner contact to register reliably.",
                "Slower per check-in under high traffic.",
              ],
            },
            {
              label: "RFID",
              points: [
                "Fast, contactless check-ins, better for high-traffic periods.",
                "Card or tag can be lost, shared, or forgotten.",
                "Requires issuing and tracking physical hardware per person.",
              ],
            },
          ]}
        />

        <p className="dcs-placeholder">
          [Placeholder] Room for a concrete constraints list here (network reliability on-site, concurrency issues at peak check-in times) once documented in detail.
        </p>
      </Section>

      <Section id="system" label="The System" title="The biometric handshake.">
        <TwoColText heading="A hash, not a photo.">
          {[
            <>Implementing the matching algorithm taught me about data templates and secure encoding. A fingerprint isn&apos;t stored as an image, but as a mathematical hash that must be matched in milliseconds.</>,
          ]}
        </TwoColText>

        <Stepper steps={["Capture", "Hash Encode", "Database Match"]} activeIndex={1} />

        <KeyDiscovery>
          Architecture is just design on a different scale. Instead of choosing a font, you&apos;re choosing a database schema.
        </KeyDiscovery>

        <Figure
          number="1.0"
          caption="Full-stack architecture: React frontend, Node.js API, fingerprint scanner integration, and database layer."
          type="image"
          src="/projects/attendance/architecture.png"
          alt="Full-stack architecture diagram showing React frontend, Node.js API, fingerprint scanner integration, and database layer"
        />

        <Figure
          number="1.1"
          caption="Biometric authentication workflow: capture, hash encoding, and database matching."
          type="image"
          src="/projects/attendance/logic.png"
          alt="Biometric authentication workflow diagram showing fingerprint capture, hash encoding, and database matching process"
        />
      </Section>

      <Section id="layout" label="Layout">
        <Placeholder>
          Room to document the dashboard's grid system and how it adapts across the admin view, kiosk check-in screen, and mobile reporting view.
        </Placeholder>
      </Section>

      <Section id="interactions" label="Interactions">
        <Placeholder>
          Room to document the live check-in feed's real-time update behavior and how error states (failed scan, duplicate check-in) are communicated.
        </Placeholder>
      </Section>

      <Section id="visual-design" label="Visual Design">
        <Placeholder>
          Room to document the design system for the dashboard: status color coding, typography for data-dense tables, and the component library once formalized.
        </Placeholder>
      </Section>

      <Section id="final-designs" label="Final Designs">
        <Figure
          number="2.0"
          caption="Live dashboard: real-time check-ins, employee list, and attendance metrics."
          type="image"
          src="/1.png"
          alt="Attendance Hub real-time dashboard showing biometric check-in data, employee list, and live attendance metrics"
        />
      </Section>

      <Section id="retrospective" label="Retrospective">
        <Takeaways
          items={[
            {
              title: "System reliability is a design decision.",
              desc: "A polished interface means nothing if the underlying architecture can't handle real concurrent load, so the schema and API design were as much a design problem as the UI.",
            },
            {
              title: "First builds teach you the whole stack, not just your layer.",
              desc: "Owning this end to end, from hardware handshake to dashboard, forced a working understanding of every layer in between.",
            },
          ]}
        />

        <p className="dcs-placeholder">
          [Placeholder] Room for live usage metrics (daily check-ins, uptime, user feedback) once available.
        </p>
      </Section>

      <NextProject href="/work/logit" name="LogIt" />
    </Shell>
  );
}
