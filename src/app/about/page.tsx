// /app/about/page.tsx

import Image from "next/image";

export const metadata = {
  title: "About Us | Grey White Space Designs",
  description: "Learn about our design philosophy and the team behind Grey White Space Designs.",
};

const teamMembers = [
  { name: "Eleanor Vance", role: "Founder & Principal Architect", image: "https://picsum.photos/seed/person1/400/400" },
  { name: "Marcus Shaw", role: "Lead Designer", image: "https://picsum.photos/seed/person2/400/400" },
  { name: "Isla Chen", role: "Project Manager", image: "https://picsum.photos/seed/person3/400/400" },
  { name: "Leo Martinez", role: "Architectural Technologist", image: "https://picsum.photos/seed/person4/400/400" },
];

export default function AboutPage() {
  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Philosophy Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-heading text-text-primary">Our Philosophy</h1>
          <p className="mt-6 text-lg font-sans text-text-primary/90">
            At Grey White Space Designs, we believe in the power of simplicity. Our work is guided by a minimalist ethos, where every line, material, and space has a purpose. We strip away the non-essential to reveal the underlying beauty and functionality of a structure. Our goal is to create timeless architecture that feels both monumental and intimate, public and personal.
          </p>
        </div>

        {/* Team Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-heading text-text-primary text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    layout="fill" 
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="font-heading text-lg text-text-primary">{member.name}</h3>
                <p className="font-sans text-sm text-text-primary/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}