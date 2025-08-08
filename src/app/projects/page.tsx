// /app/projects/page.tsx

import { fetchProjects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/Card";

export const metadata = {
  title: "Projects | Grey White Space Designs",
  description: "Explore our portfolio of residential, commercial, and cultural architecture projects.",
};

export default function ProjectsPage() {
  const projects = fetchProjects();

  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h1 className="text-4xl font-heading text-text-primary">Our Portfolio</h1>
          <p className="mt-4 max-w-2xl text-lg font-sans text-text-primary/80">
            A curated selection of our work, showcasing our commitment to clean lines, functional beauty, and innovative design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}