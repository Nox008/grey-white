// /app/page.tsx

import { fetchProjects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/Card";
import Link from "next/link";
import { HeroSlideshow } from "@/components/sections/HeroSlideshow"; // Import the new component

export default function HomePage() {
  const featuredProjects = fetchProjects().slice(0, 3);

  return (
    <div>
      {/* Dynamic Hero Slideshow */}
      <HeroSlideshow slides={featuredProjects} />

      {/* Featured Projects Section (remains the same) */}
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