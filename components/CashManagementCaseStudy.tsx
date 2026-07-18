"use client";

import React from "react";
import {
  Shell,
  Hero,
  Overview,
  Section,
  TwoColText,
  Stepper,
  TocSection,
} from "@/components/deep-case-study";

const SECTIONS: TocSection[] = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "problem", label: "The Problem" },
  { id: "delivery", label: "Delivery" },
  { id: "outcome", label: "Outcome" },
];

/* Text-led case study: no design screenshots by intent. The work here was
   product leadership, so the narrative carries the page instead of figures. */
export default function CashManagementCaseStudy() {
  return (
    <Shell sections={SECTIONS}>
      <Hero
        title={<>Enterprise Cash Management Platform.</>}
        subtitle="A major Zambian bank · Live"
      />

      <Overview
        role={<><strong>Product Lead</strong>: Requirements, Agile Delivery, Compliance, Stakeholder Management</>}
        team={["1 designer, 2 engineers (frontend and backend)"]}
        timeline="Live"
        paragraphs={[
          <>A cash-in-transit collections platform for a major Zambian bank. Roaming bank tellers process large cash deposits on behalf of clients who can&apos;t physically visit a branch, and the credit value lands instantly on collection.</>,
          <>I led it end-to-end as Product Lead, from concept through pilot to public launch. This case study is text on purpose: the work here was product leadership, not pixels.</>,
        ]}
      />

      <Section id="context" label="Context">
        <TwoColText heading="Banking for clients who can't come to the bank.">
          {[
            <>The bank&apos;s high-volume clients handle large amounts of physical cash. Getting that cash into an account meant traveling to a branch, and the deposited value was only reflected after a delay.</>,
          ]}
        </TwoColText>
      </Section>

      <Section id="problem" label="The Problem" title="Large deposits, no branch visit, instant value.">
        <TwoColText heading="Move the teller, not the client.">
          {[
            <>High-volume clients needed to deposit large amounts of cash without traveling to a branch, and needed the credit value reflected instantly rather than after a delay.</>,
            <>The answer was to move the teller instead of the client: roaming bank tellers collect deposits at the client&apos;s premises and process them on the spot, with value credited the moment the collection is made.</>,
          ]}
        </TwoColText>
      </Section>

      <Section id="delivery" label="Delivery" title="Concept to public launch, end-to-end.">
        <TwoColText heading="Owning the build, not just the brief.">
          {[
            <>I owned requirements and ran agile delivery with daily standups across a team of one designer and two engineers covering frontend and backend.</>,
            <>Banking-compliance and operational-workflow constraints shaped the product throughout, and I managed stakeholder updates, risks, and blockers through release.</>,
          ]}
        </TwoColText>

        <Stepper steps={["Concept", "Pilot", "Public launch"]} activeIndex={2} />
      </Section>

      <Section id="outcome" label="Outcome" title="Live, with real cash moving through it.">
        <TwoColText heading="From pilot to public launch.">
          {[
            <>Launched with 5 enterprise clients, including MultiChoice and Mount Meru, running live cash operations across 10+ stations and 20+ roaming tellers.</>,
            <>The pilot recorded 1,000+ transactions, and instant credit cut collection-to-value turnaround by roughly 90%.</>,
          ]}
        </TwoColText>
      </Section>
    </Shell>
  );
}
