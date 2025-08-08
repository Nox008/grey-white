// /app/projects/[slug]/page.tsx

import { fetchProjectBySlug, fetchProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";

// Generate static paths for all projects
export async function generateStaticParams() {
  const projects = fetchProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = fetchProjectBySlug(params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} | Grey White Space Designs`,
    description: project.description,
  };
}


export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = fetchProjectBySlug(params.slug);

  // If project is not found, show the 404 page
  if (!project) {
    notFound();
  }

  return (
    <article className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-heading text-text-primary text-center">{project.title}</h1>
          <div className="flex justify-center items-center space-x-4 mt-4 text-sm text-text-primary/70 font-sans">
            <span>{project.category}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
          </div>
          <p className="mt-8 text-lg font-sans text-text-primary/90 text-center">
            {project.longDescription}
          </p>
        </div>

        {/* Cover Image */}
        <div className="mb-12">
            <Image 
                src={project.coverImage}
                alt={`Cover image for ${project.title}`}
                width={1600}
                height={900}
                className="w-full h-auto object-cover"
                priority
            />
        </div>

        {/* Gallery */}
        <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading text-text-primary mb-8 text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {project.gallery.map((image, index) => (
                    <div key={index} className="overflow-hidden">
                        <Image 
                            src={image}
                            alt={`Gallery image ${index + 1} for ${project.title}`}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </article>
  );
}