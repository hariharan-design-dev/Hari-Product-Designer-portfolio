'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <div id="contact" className="relative w-full overflow-hidden bg-[#111111] px-6 pt-16 pb-12 text-white md:px-12 md:pt-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 pb-16">
          
          {/* LEFT COLUMN: CONTACT TEXT & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col space-y-6 lg:col-span-6 z-10"
          >
            {/* SMALL ORANGE EYEBROW */}
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              Let's Connect
            </span>

            {/* HEADLINE */}
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
              Have a project in mind?
            </h2>

            {/* SUPPORTING COPY */}
            <p className="max-w-lg text-base text-[#8A8A8A] sm:text-lg leading-relaxed">
              I'm always open to discussing new opportunities and building
              meaningful products together.
            </p>

            {/* CTA BUTTON */}
            <div className="pt-2">
              <a
                href="mailto:harih7397108713@gmail.com"
                className="group inline-flex items-center space-x-2 rounded-xl border border-[#FF572F] bg-[#111111] px-7 py-3.5 text-sm font-semibold text-[#FF572F] transition-all duration-200 hover:bg-[#FF572F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: PORTRAIT + ORANGE CIRCLE */}
          <div className="relative flex items-center justify-center lg:col-span-6 lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/4] sm:aspect-square">
              
              {/* DECORATIVE DOT GRID */}
              <div className="absolute top-0 right-0 z-0 grid grid-cols-6 gap-2 p-2 opacity-40">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="h-1 w-1 rounded-full bg-[#FF572F]" />
                ))}
              </div>

              {/* ORANGE CIRCLE */}
              <div className="absolute right-4 bottom-0 w-[80%] aspect-square rounded-full bg-[#FF572F] z-0 shadow-lg opacity-90" />

              {/* PORTRAIT */}
              <div className="absolute inset-0 z-10 flex items-end justify-center">
                <div className="relative h-full w-full">
                  <Image
                    src="/assets/profile/profile-cutout.png"
                    alt="Hari Haran — Contact Portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain object-bottom filter grayscale contrast-110"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
