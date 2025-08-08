// /types/index.ts

export type Project = {
    slug: string;
    title: string;
    category: "Residential" | "Commercial" | "Cultural";
    year: number;
    description: string;
    longDescription: string;
    coverImage: string;
    gallery: string[];
  };