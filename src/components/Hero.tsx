'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

export default function Hero() {
  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
    },
  };

  const portraitVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden px-6 pt-6 pb-16 md:px-12 lg:px-16 lg:pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT COLUMN: ~45% (5 cols out of 12) */}
          <motion.div
            className="flex flex-col justify-center space-y-6 lg:col-span-5 z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* EYEBROW */}
            <motion.div variants={itemVariants}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5F5F5F]">
                Product Designer
              </span>
            </motion.div>

            {/* HEADLINE */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl font-extrabold tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.05]"
            >
              I DESIGN
              <br />
              PRODUCTS
              <br />
              THAT MAKE
              <br />
              COMPLEX
              <br />
              THINGS
              <br />
              <span className="text-[#FF572F]">FEEL SIMPLE.</span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={itemVariants}
              className="max-w-md text-base text-[#5F5F5F] sm:text-lg leading-relaxed"
            >
              I craft meaningful digital experiences with a blend of design
              thinking, AI tools and modern technology.
            </motion.p>

            {/* CTAS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* PRIMARY CTA */}
              <Link
                href="/projects"
                className="group inline-flex items-center space-x-2 rounded-xl bg-[#FF572F] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#E04722] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F] focus-visible:ring-offset-2"
              >
                <span>View My Work</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* SECONDARY CTA */}
              <a
                href="/assets/documents/resume.pdf"
                download="Hari_Haran_Product_Designer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 rounded-xl border border-[#FF572F]/60 bg-[#F7F5F0] px-6 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-200 hover:border-[#FF572F] hover:bg-[#FF572F]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F] focus-visible:ring-offset-2"
              >
                <span>Download Resume</span>
                <ArrowDown className="h-4 w-4 text-[#FF572F] transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div variants={itemVariants} className="pt-2">
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: ~55% (7 cols out of 12) */}
          <div className="relative flex items-center justify-center lg:col-span-7 lg:justify-end">
            
            {/* COMPOSITION CONTAINER */}
            <div className="relative w-full max-w-[560px] aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
              
              {/* 1. DECORATIVE TOP-RIGHT ORANGE DOT MATRIX */}
              <div className="absolute top-0 right-0 z-0 grid grid-cols-6 gap-2 p-2 opacity-60">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="h-1 w-1 rounded-full bg-[#FF572F]" />
                ))}
              </div>

              {/* 2. DECORATIVE THIN GRID LINES */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-12 left-0 right-0 h-[1px] bg-[#E5E1DA]/80" />
                <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-[#E5E1DA]/60" />
                <div className="absolute bottom-12 left-0 right-0 h-[1px] bg-[#E5E1DA]/80" />
                <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-[#E5E1DA]/80" />
                <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-[#E5E1DA]/60" />
              </div>

              {/* 3. LARGE ORANGE CIRCLE BEHIND PORTRAIT */}
              <motion.div
                variants={circleVariants}
                initial="hidden"
                animate="visible"
                className="absolute right-0 bottom-0 top-12 w-[85%] aspect-square rounded-full bg-[#FF572F] z-0 shadow-lg"
              />

              {/* 4. CURSIVE SIGNATURE DETAIL */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute left-6 top-1/3 z-20 hidden sm:block"
              >
                <span className="font-cursive text-3xl md:text-4xl text-[#111111] opacity-80 select-none">
                  Hari
                  <br />
                  Haran
                </span>
              </motion.div>

              {/* 5. PORTRAIT IMAGE */}
              <motion.div
                variants={portraitVariants}
                initial="hidden"
                animate="visible"
                className="absolute inset-0 z-10 flex items-end justify-center"
              >
                <div className="relative h-full w-full">
                  <Image
                    src="/assets/profile/profile-cutout.png"
                    alt="Hari Haran — Product Designer Portrait"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="object-contain object-bottom filter grayscale contrast-110 drop-shadow-md"
                  />
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
