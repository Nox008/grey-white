// /lib/data.ts

import { Project } from "@/types";

// Mock data for projects. In a real application, this would come from a CMS or database.
export const PROJECTS: Project[] = [
  {
    slug: "serene-villa-retreat",
    title: "Serene Villa Retreat",
    category: "Residential",
    year: 2024,
    description: "A harmonious blend of modern architecture and natural landscapes.",
    longDescription: "The Serene Villa Retreat is a masterpiece of contemporary residential design, nestled in a lush, secluded valley. Its design philosophy centers on creating a seamless flow between indoor and outdoor spaces, with expansive glass walls and natural materials like stone and wood. The project emphasizes sustainability, incorporating passive cooling techniques and a green roof.",
    coverImage: "https://picsum.photos/seed/villa/1600/900",
    gallery: [
      "https://picsum.photos/seed/villa-1/1200/800",
      "https://picsum.photos/seed/villa-2/1200/800",
      "https://picsum.photos/seed/villa-3/1200/800",
    ],
  },
  {
    slug: "the-urban-obelisk",
    title: "The Urban Obelisk",
    category: "Commercial",
    year: 2023,
    description: "A landmark commercial tower redefining the city skyline.",
    longDescription: "The Urban Obelisk is a 40-story commercial skyscraper designed to be both an architectural icon and a highly functional office space. Its striking, angular form is complemented by a high-performance facade that optimizes natural light while minimizing solar gain. The ground floor features a public plaza, integrating the building with the urban fabric.",
    coverImage: "https://picsum.photos/seed/obelisk/1600/900",
    gallery: [
      "https://picsum.photos/seed/obelisk-1/1200/800",
      "https://picsum.photos/seed/obelisk-2/1200/800",
      "https://picsum.photos/seed/obelisk-3/1200/800",
    ],
  },
  {
    slug: "aethelred-cultural-center",
    title: "Aethelred Cultural Center",
    category: "Cultural",
    year: 2023,
    description: "A dynamic space for art, performance, and community engagement.",
    longDescription: "This cultural center is conceived as a 'living room' for the city. It houses a gallery, a black-box theater, and flexible workshop spaces. The building's form is inspired by the overlapping of different cultures, with intersecting volumes creating a complex and inviting interior landscape. A central, light-filled atrium serves as the heart of the center.",
    coverImage: "https://picsum.photos/seed/cultural/1600/900",
    gallery: [
      "https://picsum.photos/seed/cultural-1/1200/800",
      "https://picsum.photos/seed/cultural-2/1200/800",
      "https://picsum.photos/seed/cultural-3/1200/800",
    ],
  },
  {
    slug: "minimalist-beach-house",
    title: "Minimalist Beach House",
    category: "Residential",
    year: 2022,
    description: "A tranquil oceanfront residence focused on simplicity and views.",
    longDescription: "Designed as a peaceful escape, the Minimalist Beach House features a clean, linear geometry that directs focus towards the stunning ocean vistas. The material palette is restrained, using polished concrete, light wood, and vast panes of glass. The living space opens completely to a cantilevered deck, blurring the line between inside and out.",
    coverImage: "https://picsum.photos/seed/beach/1600/900",
    gallery: [
      "https://picsum.photos/seed/beach-1/1200/800",
      "https://picsum.photos/seed/beach-2/1200/800",
      "https://picsum.photos/seed/beach-3/1200/800",
    ],
  },
  {
    slug: "innovatech-campus",
    title: "Innovatech Campus",
    category: "Commercial",
    year: 2021,
    description: "A collaborative workspace designed for a leading technology firm.",
    longDescription: "The Innovatech Campus is a sprawling complex designed to foster innovation and collaboration. It consists of several interconnected buildings organized around a central green quad. The architecture promotes transparency and flexibility, with open-plan offices, breakout 'pods', and state-of-the-art labs. The design prioritizes employee well-being with ample natural light and access to recreational facilities.",
    coverImage: "https://picsum.photos/seed/campus/1600/900",
    gallery: [
      "https://picsum.photos/seed/campus-1/1200/800",
      "https://picsum.photos/seed/campus-2/1200/800",
      "https://picsum.photos/seed/campus-3/1200/800",
    ],
  },
];

// Function to fetch all projects
export const fetchProjects = () => {
  return PROJECTS;
};

// Function to fetch a single project by its slug
export const fetchProjectBySlug = (slug: string) => {
  return PROJECTS.find((project) => project.slug === slug);
};