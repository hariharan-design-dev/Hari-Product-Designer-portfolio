'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectsHero() {
  return (
    <section className="relative w-full bg-[#F7F5F0] px-6 pt-12 pb-16 md:px-12 md:pt-16 lg:px-16 lg:pt-20">
      <div className="mx-auto max-w-4xl text-center">
        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
            Selected Work
          </span>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 font-display text-4xl font-extrabold tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
        >
          PRODUCTS I'VE
          <br />
          <span className="text-[#FF572F]">DESIGNED & BUILT.</span>
        </motion.h1>

        {/* SUPPORTING TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-[#5F5F5F] sm:text-lg leading-relaxed"
        >
          From my first end-to-end product to AI-powered products and real client
          work, these projects show how my thinking has evolved from designing
          interfaces to shaping complete product experiences.
        </motion.p>
      </div>
    </section>
  );
}
