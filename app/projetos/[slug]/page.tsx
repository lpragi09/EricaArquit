import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import { ProjectDetailsClient } from "./ProjectDetailsClient";

type ProjectPageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
