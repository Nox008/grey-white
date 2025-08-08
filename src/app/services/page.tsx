// /app/services/page.tsx

export const metadata = {
    title: "Services | Grey White Space Designs",
    description: "Our architectural services, from conceptual design to project management.",
  };
  
  const services = [
    {
      title: "Architectural Design",
      description: "From initial concept sketches to detailed construction drawings, we provide comprehensive design services for projects of all scales.",
    },
    {
      title: "Interior Design",
      description: "We create cohesive interior spaces that complement the architectural vision, focusing on material, light, and flow.",
    },
    {
      title: "Master Planning",
      description: "Our team develops long-term strategies for large-scale developments, ensuring sustainable growth and a coherent urban fabric.",
    },
    {
      title: "Project Management",
      description: "We oversee the entire construction process, ensuring the project is delivered on time, within budget, and to the highest quality standards.",
    },
  ];
  
  export default function ServicesPage() {
    return (
      <div className="bg-background py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-heading text-text-primary">Our Services</h1>
            <p className="mt-6 text-lg font-sans text-text-primary/90">
              We offer a full suite of architectural services, guiding our clients from the earliest stages of planning to the final details of construction.
            </p>
          </div>
  
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div key={service.title} className="border-l-2 border-border-accent pl-6">
                <h3 className="text-xl font-heading text-text-primary mb-2">{service.title}</h3>
                <p className="font-sans text-text-primary/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }