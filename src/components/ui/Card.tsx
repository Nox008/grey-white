// /components/ui/Card.tsx

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="overflow-hidden">
        <Image
          src={project.coverImage}
          alt={`Cover image for ${project.title}`}
          width={800}
          height={600}
          className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-heading text-text-primary">{project.title}</h3>
        <p className="text-sm font-sans text-text-primary/70 mt-1">{project.category}</p>
      </div>
    </Link>
  );
}