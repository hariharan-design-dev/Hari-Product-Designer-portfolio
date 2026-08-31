'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function JourneyAbout() {
  return (
    <section className="w-full bg-[#F7F5F0] py-12 md:py-16 border-b border-[#E5E1DA]">
      <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* PROFILE PORTRAIT (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center lg:col-span-5"
          >
            <div className="relative w-full max-w-[340px] aspect-square">
              {/* ORANGE CIRCLE BEHIND PORTRAIT */}
              <div className="absolute inset-4 rounded-full bg-[#FF572F] z-0 shadow-md" />
              
              {/* DECORATIVE DOT GRID */}
              <div className="absolute -top-2 -right-2 z-0 grid grid-cols-5 gap-1.5 p-1 opacity-50">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="h-1 w-1 rounded-full bg-[#FF572F]" />
                ))}
              </div>

              {/* PORTRAIT */}
              <div className="absolute inset-0 z-10 flex items-end justify-center">
                <div className="relative h-full w-full">
                  <Image
                    src="/assets/profile/profile-cutout.png"
                    alt="Hari Haran — About Me Portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-contain object-bottom filter grayscale contrast-110"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* PERSONAL STORY COPY (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col space-y-5 lg:col-span-7"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              About Me
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl md:text-4xl">
              Who I Am Today
            </h2>
            <p className="text-base text-[#5F5F5F] leading-relaxed">
              I'm a Product Designer who loves solving real problems through thoughtful design, AI tools and modern technology. I design with purpose and build with impact.
            </p>
            <p className="text-base text-[#5F5F5F] leading-relaxed">
              My path started with visual communication and graphic design, where I learned how typography, hierarchy, and layout influence human perception. As I moved into digital products, my curiosity pushed me deeper into user research, information architecture, interactive prototyping, and frontend code.
            </p>
            <p className="text-base text-[#5F5F5F] leading-relaxed">
              Today, I blend design thinking with AI-assisted workflows and technology, enabling me to move rapidly from abstract concepts to production-ready design and deployment.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
