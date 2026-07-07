"use client";

import { useParams } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/data/projects";

export default function ProjectPage() {
  const params = useParams();
  const id = params.id as string;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="dcs" style={{ textAlign: "center", padding: "200px 48px" }}>
        <h1>Project not found</h1>
        <p>The project you&apos;re looking for doesn&apos;t exist.</p>
      </section>
    );
  }

  return <ProjectDetail project={project} />;
}
