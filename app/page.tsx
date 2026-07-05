"use client";

import Hero from "@/components/Hero";
import WorkEditorial from "@/components/WorkEditorial";
import Values from "@/components/Values";
import Background from "@/components/Background";
import References from "@/components/References";
import AboutModern from "@/components/AboutModern";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkEditorial />
      <Values />
      <Background />
      <References />
      <AboutModern />
      <Contact />
    </>
  );
}
