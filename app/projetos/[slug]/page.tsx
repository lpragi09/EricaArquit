import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import { ProjectDetailsClient } from "./ProjectDetailsClient";

export const dynamic = "force-static";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
