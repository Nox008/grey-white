// /components/sections/HeroSlideshow.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Project } from '@/types';

interface HeroSlideshowProps {
  slides: Project[];
}

export function HeroSlideshow({ slides }: HeroSlideshowProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section className="relative embla h-[100vh] md:h-screen w-full">
      
      {/* Layer 1: The Image Slideshow (base layer) */}
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((project, index) => (
            <div className="embla__slide" key={project.slug}>
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ** FIX: Layer 2 z-index set to 10 */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/50 z-10" />

      {/* ** FIX: Layer 3 z-index set to 20 to sit below the header (which is z-30) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Designing Tomorrow&apos;s Spaces.
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-lg text-white/90 font-sans">
          We are an architecture firm dedicated to creating buildings and spaces that inspire, function, and endure through minimalist design and thoughtful execution.
        </p>
      </div>
    </section>
  );
}