// /app/page.tsx

import { fetchProjects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/Card";
import Link from "next/link";

export default function HomePage() {
  const featuredProjects = fetchProjects().slice(0, 3); // Get first 3 projects as featured

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary">
            Designing Tomorrow's Spaces.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-text-primary/80 font-sans">
            We are an architecture firm dedicated to creating buildings and spaces that inspire, function, and endure through minimalist design and thoughtful execution.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-foreground py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading text-text-primary">Featured Projects</h2>
            <div className="mt-4 h-1 w-24 bg-border-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/projects" className="font-sans text-text-primary hover:underline">
              View All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}