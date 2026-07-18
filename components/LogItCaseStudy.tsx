"use client";

import React from "react";
import {
  Shell,
  Hero,
  HeroImage,
  Overview,
  Highlights,
  Section,
  TwoColText,
  KeyDiscovery,
  Figure,
  Takeaways,
  Placeholder,
  Comparison,
  Stepper,
  Reveal,
  TocSection,
} from "@/components/deep-case-study";

const SECTIONS: TocSection[] = [
  { id: "overview", label: "Overview" },
  { id: "highlights", label: "Highlights" },
  { id: "context", label: "Context" },
  { id: "problem", label: "The Problem" },
  { id: "system", label: "The System" },
  { id: "layout", label: "Layout" },
  { id: "interactions", label: "Interactions" },
  { id: "visual-design", label: "Visual Design" },
  { id: "final-designs", label: "Final Designs" },
  { id: "retrospective", label: "Retrospective" },
];

export default function LogItCaseStudy() {
  return (
    <Shell sections={SECTIONS}>
      <Hero title={<>LogIt.</>} subtitle="Personal project · Currently building" />

      <HeroImage
        src="/projects/logit/hero.png"
        alt="LogIt app hero screen showing the automated transaction dashboard with parsed MoMo SMS data"
      />

      <Overview
        role={<><strong>Designer &amp; Builder</strong>: Product Design, iOS Automation, Full-Stack Build</>}
        team={["Solo project"]}
        timeline="Currently building"
        paragraphs={[
          <>The manual logging era is over. LogIt is a zero-friction financial system that turns MoMo SMS receipts into an honest, automated source of truth for the Ghanaian mobile money generation.</>,
          <>In mature markets, fintech apps rely on Plaid or bank APIs to sync transactions. In Ghana, the &quot;bank&quot; is Mobile Money (MoMo). It&apos;s fast, ubiquitous, and completely closed off from third-party apps, so I designed and built the bridge myself.</>,
        ]}
      />

      <Highlights
        statement={<>A zero-touch financial record for a market with no banking APIs, parsed straight from the SMS receipts everyone already has.</>}
      >
        <Figure
          number="0.1"
          caption="Automated dashboard, populated without a single manual entry."
          type="image"
          src="/projects/logit/dashboard.png"
          alt="LogIt dashboard screen showing transaction categories, spending trends, and balance overview"
        />
      </Highlights>

      <Section id="context" label="Context">
        <TwoColText heading="A market without APIs.">
          {[
            <>Every MoMo transaction triggers an SMS receipt. This is the only digital record millions of people have. But these messages are scattered, unformatted, and eventually buried in a crowded inbox.</>,
          ]}
        </TwoColText>
        <TwoColText heading={<>&quot;Data Decay&quot; kills manual logging.</>}>
          {[
            <>Manual logging fails because if you miss just two days, your entire monthly balance is inaccurate. Most people simply give up, so the record millions of Ghanaians rely on for their own money stays fragmented by default.</>,
          ]}
        </TwoColText>
      </Section>

      <Section id="problem" label="The Problem" title="This wasn't going to be a typical logging app.">
        <TwoColText heading="No API, no shortcuts (yet).">
          {[
            <>Without transaction APIs, the only reliable signal is the SMS receipt itself, and reading a user&apos;s messages from within a normal app is exactly what mobile OS sandboxing exists to prevent.</>,
          ]}
        </TwoColText>

        <Comparison
          options={[
            {
              label: "In-app message reading",
              points: [
                "Would need permissions Apple does not grant to normal apps.",
                "Blocked entirely by iOS sandboxing, not just discouraged.",
                "No path to App Store distribution even if it worked.",
              ],
            },
            {
              label: "iOS Shortcuts Automation",
              accent: true,
              points: [
                "Runs at the OS level, outside the app sandbox restriction.",
                "Triggers automatically on incoming SMS, no user action needed.",
                "Feels like a native background listener once set up.",
              ],
            },
          ]}
        />

        <p className="dcs-placeholder">
          [Placeholder] Room for a fuller constraints breakdown here, e.g. specific regex edge cases across MoMo message formats and offline handling, once documented in detail.
        </p>
      </Section>

      <Section id="system" label="The System" title="Turning text into intelligence.">
        <TwoColText heading="Hacking the sandbox.">
          {[
            <>Apple&apos;s security model prevents apps from reading your messages. On Android, this project would be trivial. On iOS, it required a system-level rethink.</>,
            <>I utilized <strong>iOS Shortcuts Automations</strong> to act as the bridge. When a message from a specific sender arrives, the Shortcut triggers, parses the text using Regex, and sends the payload to the LogIt app.</>,
          ]}
        </TwoColText>

        <Stepper steps={["SMS Received", "Shortcut Parses", "Dashboard Updates"]} activeIndex={1} />

        <KeyDiscovery>
          By leveraging iOS Shortcuts Automations as a background trigger, a &quot;zero-touch&quot; experience became possible without ever needing message-reading permissions Apple would never grant.
        </KeyDiscovery>

        <Figure
          number="1.0"
          caption="System architecture: SMS trigger, iOS Shortcut parser, LogIt dashboard."
          type="image"
          src="/projects/logit/logic.png"
          alt="System architecture diagram showing iOS Shortcuts automation pipeline from SMS to LogIt app"
        />
      </Section>

      <Section id="layout" label="Layout">
        <Placeholder>
          Room to document the layout grid, breakpoints, and responsive rules used across the dashboard and detail screens once formalized.
        </Placeholder>
      </Section>

      <Section id="interactions" label="Interactions">
        <Placeholder>
          Room to document specific micro-interactions (e.g. category re-assignment, fee breakdown reveal) with before/after comparisons, similar in spirit to the update-flow explorations in the reference case study.
        </Placeholder>
      </Section>

      <Section id="visual-design" label="Visual Design" title="Mapping the transaction DNA.">
        <TwoColText heading="14 patterns, one parser.">
          {[
            <>I mapped 14 distinct transaction patterns, from merchant payments to airtime top-ups. Each pattern has a unique &quot;DNA&quot; within the SMS body, so the parser can tell a &quot;Cash-out fee&quot; apart from a &quot;Transfer amount&quot; without confusing the two.</>,
          ]}
        </TwoColText>

        <Reveal showLabel="Show pattern examples" hideLabel="Hide pattern examples">
          <ul className="dcs-comparison__points">
            <li><strong>Merchant Payment</strong>: extracts &quot;Sent to [Name]&quot; → logged as Outflow.</li>
            <li><strong>MoMo Fee</strong>: extracts &quot;Fee is GHS [X]&quot; → logged under the Fee category.</li>
            <li><strong>Cash-In</strong>: extracts &quot;Received from [Agent]&quot; → logged as Inflow.</li>
          </ul>
        </Reveal>

        <p className="dcs-placeholder">
          [Placeholder] Room for the design-system specifics: typography, color decisions for financial states (inflow/outflow/fee), and component documentation once written up.
        </p>
      </Section>

      <Section id="final-designs" label="Final Designs">
        <Figure
          number="2.0"
          caption={<>Dashboard: designed to reduce &quot;financial anxiety.&quot;</>}
          type="image"
          src="/projects/logit/dashboard.png"
          alt="LogIt dashboard screen showing transaction categories, spending trends, and balance overview"
        />
        <Figure
          number="2.1"
          caption={<>Transaction detail: every MoMo fee accounted for.</>}
          type="image"
          src="/projects/logit/detail.png"
          alt="Transaction detail view showing MoMo fee breakdown and categorization"
        />
      </Section>

      <Section id="retrospective" label="Retrospective" title="Honesty as a design feature.">
        <TwoColText heading="A frictionless benefit, hidden behind a system-level hurdle.">
          {[
            <>This project taught me that user experience isn&apos;t just about the interface you build. It&apos;s about the technical hurdles you hide. By leveraging iOS Automations, I turned a system-level hurdle into a frictionless user benefit.</>,
          ]}
        </TwoColText>

        <Takeaways
          items={[
            {
              title: "Constraints reveal the real interaction model.",
              desc: "iOS's message-reading restriction forced a background-automation approach that ended up feeling more native than a bolted-on in-app inbox reader would have.",
            },
            {
              title: "Trust is the product, not a feature of it.",
              desc: "In a market where fees are hidden and APIs are non-existent, honesty about every deducted fee is what makes the dashboard worth checking daily.",
            },
          ]}
        />

        <p className="dcs-placeholder">
          [Placeholder] Room for launch metrics (active users, parsing accuracy rate, retention) once LogIt ships publicly.
        </p>
      </Section>
    </Shell>
  );
}
