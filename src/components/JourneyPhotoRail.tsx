'use client';

import React from 'react';
import Image from 'next/image';

const JOURNEY_IMAGES = [
  '/assets/journey/1000076946.jpg',
  '/assets/journey/1000103912.jpg',
  '/assets/journey/1707056819250.jpg',
  '/assets/journey/1729442714157.jpg',
  '/assets/journey/1743421214090.jpg',
  '/assets/journey/1758090354218.jpg',
  '/assets/journey/IMG-20240204-WA0005.jpg',
  '/assets/journey/IMG-20240323-WA0007.jpg',
  '/assets/journey/IMG-20240323-WA0011.jpg',
  '/assets/journey/IMG-20240906-WA0070.jpg',
  '/assets/journey/IMG-20240906-WA0241.jpg',
  '/assets/journey/IMG-20250224-WA0000.jpg',
  '/assets/journey/IMG-20250330-WA0003.jpg',
  '/assets/journey/IMG-20250704-WA0007.jpg',
  '/assets/journey/IMG-20250704-WA0022.jpg',
  '/assets/journey/IMG-20250706-WA0055.jpg',
  '/assets/journey/IMG-20250910-WA0019.jpg',
  '/assets/journey/IMG-20250910-WA0020.jpg',
  '/assets/journey/IMG-20260410-WA0000.jpg',
  '/assets/journey/IMG-20260802-WA0003.jpg',
  '/assets/journey/IMG-20260802-WA0015.jpg',
  '/assets/journey/IMG-20260802-WA0029.jpg',
  '/assets/journey/IMG_20250329_181039294_HDR.jpg',
];

export default function JourneyPhotoRail() {
  return (
    <section className="w-full bg-[#111111] py-16 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-8 text-center md:px-12">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
          Moments & Events
        </span>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          The Journey Photo Rail
        </h2>
        <p className="mt-1 text-sm text-[#8A8A8A]">
          A continuous visual timeline of workshops, projects, community events, and milestones.
        </p>
      </div>

      {/* CONTINUOUS INFINITE HORIZONTAL MARQUEE (LEFT TO RIGHT) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* GRADIENT FADE EDGES */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-[#111111] to-transparent md:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-[#111111] to-transparent md:w-32" />

        <div className="flex w-max animate-journeyMarquee space-x-4 md:space-x-6">
          {/* FIRST REPEAT */}
          {JOURNEY_IMAGES.map((src, i) => (
            <div
              key={`a-${i}`}
              className="relative h-56 w-72 shrink-0 overflow-hidden rounded-xl border border-[#262626] bg-[#1A1A1A] sm:h-64 sm:w-80 md:h-72 md:w-96"
            >
              <Image
                src={src}
                alt={`Hari Haran Journey Photograph ${i + 1}`}
                fill
                sizes="(max-width: 768px) 288px, 384px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}

          {/* SECOND REPEAT FOR SEAMLESS LOOP */}
          {JOURNEY_IMAGES.map((src, i) => (
            <div
              key={`b-${i}`}
              className="relative h-56 w-72 shrink-0 overflow-hidden rounded-xl border border-[#262626] bg-[#1A1A1A] sm:h-64 sm:w-80 md:h-72 md:w-96"
            >
              <Image
                src={src}
                alt={`Hari Haran Journey Photograph ${i + 1} repeat`}
                fill
                sizes="(max-width: 768px) 288px, 384px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
