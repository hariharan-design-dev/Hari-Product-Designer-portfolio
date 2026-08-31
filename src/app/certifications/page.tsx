'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  BookOpen,
  Clock,
  Target,
  Rocket,
  ArrowRight,
  ExternalLink,
  X,
  ArrowUpRight,
  ArrowUp,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';

interface CertificationItem {
  id: string;
  number: string;
  title: string;
  organization: string;
  date: string;
  category: string;
  description: string;
  logoPath: string;
  imagePath: string;
  verificationUrl: string;
}

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'ai-driven-product-designer',
    number: '01',
    title: 'The AI-Driven Product Designer',
    organization: 'LinkedIn',
    date: 'August 2026',
    category: 'Product',
    description: 'Specialized credential in AI-integrated product design workflows, prompt engineering, and intelligent interface systems.',
    logoPath: '/assets/certifications/logos/linkedin-logo.png',
    imagePath: '/assets/certifications/image 1.png',
    verificationUrl: 'https://www.linkedin.com/learning/certificates/089f306cd1301f52493100dd1163d8be5c6b60f8a321cced971ca5d91efeaa83',
  },
  {
    id: 'prompt-engineering-2023',
    number: '02',
    title: 'Prompt Engineering: How to Talk to the AIs (2023)',
    organization: 'LinkedIn',
    date: 'August 2026',
    category: 'AI & Data',
    description: 'Mastery in structured LLM interaction, context optimization, system instructions, and generative prompt patterns.',
    logoPath: '/assets/certifications/logos/linkedin-logo.png',
    imagePath: '/assets/certifications/image 2.png',
    verificationUrl: 'https://www.linkedin.com/learning/certificates/a93f762d3789b31c6488520c31c5d2311cc842431569e177a93cde124ecb43e9/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BQqvk4OlKTuSqIf1MMC74RQ%3D%3D',
  },
  {
    id: 'ai-skills-for-students',
    number: '03',
    title: 'AI Skills for Students',
    organization: 'Canva',
    date: 'May 2026',
    category: 'Tools',
    description: 'Generative visual design tools, magic media workflows, and AI-assisted creative asset generation.',
    logoPath: '/assets/certifications/logos/canva-logo.png',
    imagePath: '/assets/certifications/image 3.png',
    verificationUrl: 'https://canva.com/design-school/certification-award/141cc8a9-9dfd-4105-a849-229f102de1f1',
  },
  {
    id: 'graphic-design-essentials',
    number: '04',
    title: 'Graphic Design Essentials',
    organization: 'Canva',
    date: '2026',
    category: 'Design',
    description: 'Core visual design fundamentals, typography hierarchy, grid alignment, and brand identity systems.',
    logoPath: '/assets/certifications/logos/canva-logo.png',
    imagePath: '/assets/certifications/image 4.png',
    verificationUrl: 'https://canva.com/design-school/certification-award/829d6f0e-508c-474d-8934-3a95758d8b23',
  },
  {
    id: 'emilio-befeart-internship',
    number: '05',
    title: 'Graphic Design Intern Completion Certificate',
    organization: 'Emilio Befreart',
    date: 'May 2025',
    category: 'Design',
    description: 'Professional graphic design internship creating marketing collateral, brand guidelines, and digital visual assets.',
    logoPath: '/assets/certifications/logos/emilio-logo.png',
    imagePath: '/assets/certifications/image 5.png',
    verificationUrl: 'https://lnkd.in/p/g5j35D3a',
  },
  {
    id: 'vs-kart-internship',
    number: '06',
    title: 'Graphic Design Intern Completion Certificate',
    organization: 'VS KART',
    date: 'April 2025',
    category: 'Design',
    description: 'E-commerce product visual design, promotional banners, UI branding assets, and customer marketing collateral.',
    logoPath: '/assets/certifications/logos/vskart-logo.png',
    imagePath: '/assets/certifications/image 6.png',
    verificationUrl: 'https://lnkd.in/p/g_ZFnXW2',
  },
];

export default function CertificationsPage() {
  const emailAddress = 'harih7397108713@gmail.com';
  const phoneNumber = '+91 73971 08713';
  const locationText = 'Sivakasi, Tamil Nadu, India';

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5F0] text-[#111111]">
      {/* 01. GLOBAL NAVBAR */}
      <Navbar />

      <main className="flex-grow">
        {/* 02. CERTIFICATIONS HERO */}
        <section className="w-full bg-[#F7F5F0] px-6 pt-10 pb-12 md:px-12 md:pt-14 lg:px-16 lg:pt-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
              
              {/* HERO LEFT COLUMN */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="flex flex-col space-y-4 lg:col-span-6 z-10"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
                  CERTIFICATIONS
                </span>

                <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
                  Learning.
                  <br />
                  Unlearning. Relearning.
                  <br />
                  <span className="text-[#FF572F]">Always.</span>
                </h1>

                <p className="max-w-lg pt-2 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
                  A collection of certifications and achievements that reflect my continuous learning journey and commitment to growth.
                </p>
              </motion.div>

              {/* HERO RIGHT COLUMN: PORTRAIT WITH ORANGE CIRCLE & CURSIVE SIGNATURE */}
              <div className="relative flex items-center justify-center lg:col-span-6 lg:justify-end">
                <div className="relative w-full max-w-[460px] aspect-[4/4] sm:aspect-square">
                  
                  {/* CURSIVE SIGNATURE OVERLAY */}
                  <div className="absolute top-8 left-0 z-20 font-serif italic text-2xl font-bold text-[#111111]/80 select-none pointer-events-none">
                    Hari
                    <br />
                    Haran
                  </div>

                  {/* DECORATIVE DOT GRID */}
                  <div className="absolute top-2 right-2 z-0 grid grid-cols-6 gap-2 p-2 opacity-40">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="h-1 w-1 rounded-full bg-[#FF572F]" />
                    ))}
                  </div>

                  {/* THIN EDITORIAL GUIDE LINES */}
                  <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-[#E5E1DA]" />
                  <div className="absolute top-12 left-0 right-0 h-[1px] bg-[#E5E1DA]" />

                  {/* ORANGE CIRCLE */}
                  <div className="absolute right-4 bottom-2 w-[82%] aspect-square rounded-full bg-[#FF572F] z-0 shadow-lg opacity-95" />

                  {/* PORTRAIT IMAGE */}
                  <div className="absolute inset-0 z-10 flex items-end justify-center">
                    <div className="relative h-full w-full">
                      <Image
                        src="/assets/profile/profile-cutout.png"
                        alt="Hari Haran — Product Designer Certifications Portrait"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className="object-contain object-bottom filter grayscale contrast-110"
                      />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 03. MY CERTIFICATIONS GRID CONTAINER */}
        <section id="certifications-grid" className="w-full bg-[#F7F5F0] px-6 pb-12 md:px-12 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-3xl border border-[#E5E1DA] bg-white p-6 sm:p-10 shadow-sm">
              
              {/* HEADER STRIP */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E1DA] pb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF572F]/10 text-[#FF572F]">
                    <Award className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl font-extrabold text-[#111111]">
                    My Certifications
                  </h2>
                </div>

                <div className="text-xs font-extrabold tracking-wider uppercase text-[#111111]">
                  Total Certifications: <span className="text-[#FF572F] font-black text-sm">{CERTIFICATIONS.length < 10 ? `0${CERTIFICATIONS.length}` : CERTIFICATIONS.length}</span>
                </div>
              </div>

              {/* LINKEDIN-STYLE COMPACT CERTIFICATION LISTING */}
              <div className="mt-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  {CERTIFICATIONS.map((cert) => (
                    <a
                      key={cert.id}
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-between rounded-2xl border border-[#E5E1DA] bg-white p-5 transition-all duration-300 hover:border-[#FF572F] hover:shadow-md cursor-pointer text-left"
                    >
                      <div className="flex items-center space-x-4 pr-2 min-w-0">
                        {/* SMALL ISSUER LOGO CONTAINER (OPTICALLY BALANCED 44x44 AREA) */}
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[#E5E1DA] bg-[#F7F5F0]/60 p-1.5 flex items-center justify-center">
                          <Image
                            src={cert.logoPath}
                            alt={`${cert.organization} logo`}
                            fill
                            className="object-contain object-center p-1"
                          />
                        </div>

                        {/* CERTIFICATION INFO */}
                        <div className="flex flex-col min-w-0">
                          <h3 className="font-display text-base font-extrabold text-[#111111] group-hover:text-[#FF572F] transition-colors leading-snug truncate">
                            {cert.title}
                          </h3>
                          <div className="mt-1 flex items-center space-x-2 text-xs font-semibold text-[#8A8A8A]">
                            <span className="text-[#111111] font-bold">{cert.organization}</span>
                            <span>·</span>
                            <span>{cert.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* SUBTLE EXTERNAL LINK AFFORDANCE */}
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F5F0] text-[#111111] border border-[#E5E1DA] transition-all group-hover:bg-[#FF572F] group-hover:border-[#FF572F] group-hover:text-white shrink-0 ml-3">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* 05. MORE LEARNING / MORE GROWING BANNER */}
              <div className="mt-10 rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 sm:p-8">
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF572F]/10 text-[#FF572F]">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-extrabold text-[#111111]">
                        More Learning. More Growing.
                      </h3>
                      <p className="mt-1 max-w-xl text-xs text-[#5F5F5F] leading-relaxed">
                        I believe in continuous learning and staying curious. There's always something new to learn and build.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const gridEl = document.getElementById('certifications-grid');
                      gridEl?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group inline-flex items-center space-x-2 rounded-xl border border-[#E5E1DA] bg-white px-5 py-3 text-xs font-extrabold text-[#111111] transition-all duration-200 hover:border-[#FF572F] hover:bg-[#111111] hover:text-white shrink-0 cursor-pointer"
                  >
                    <span>View All Certificates</span>
                    <ArrowRight className="h-4 w-4 text-[#FF572F] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 06. LEARNING NEVER STOPS SECTION + METRICS */}
        <section className="w-full bg-[#F7F5F0] px-6 pb-20 md:px-12 lg:px-16">
          <div className="mx-auto max-w-7xl border-t border-[#E5E1DA] pt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
              
              {/* LEFT COLUMN: TITLE & SUBTITLE */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
                  CONTINUOUS GROWTH
                </span>
                <h2 className="font-display text-3xl font-extrabold text-[#111111] sm:text-4xl">
                  Learning Never Stops
                </h2>
                <p className="text-xs text-[#5F5F5F] sm:text-sm leading-relaxed max-w-md">
                  Every course, every lesson, every project brings me one step closer to becoming a better designer and problem solver.
                </p>
              </div>

              {/* RIGHT COLUMN: 4 METRIC BLOCKS */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
                
                {/* METRIC 1 */}
                <div className="flex flex-col items-center justify-center rounded-2xl border border-[#E5E1DA] bg-white p-6 shadow-xs">
                  <BookOpen className="h-6 w-6 text-[#FF572F] mb-3" />
                  <span className="font-display text-3xl font-black text-[#111111] sm:text-4xl">06</span>
                  <span className="mt-1 text-[11px] font-bold text-[#8A8A8A] uppercase tracking-wider">Certifications Earned</span>
                </div>

                {/* METRIC 2 */}
                <div className="flex flex-col items-center justify-center rounded-2xl border border-[#E5E1DA] bg-white p-6 shadow-xs">
                  <Clock className="h-6 w-6 text-[#FF572F] mb-3" />
                  <span className="font-display text-3xl font-black text-[#111111] sm:text-4xl">6+</span>
                  <span className="mt-1 text-[11px] font-bold text-[#8A8A8A] uppercase tracking-wider">Learning Milestones</span>
                </div>

                {/* METRIC 3 */}
                <div className="flex flex-col items-center justify-center rounded-2xl border border-[#E5E1DA] bg-white p-6 shadow-xs">
                  <Target className="h-6 w-6 text-[#FF572F] mb-3" />
                  <span className="font-display text-3xl font-black text-[#111111] sm:text-4xl">10+</span>
                  <span className="mt-1 text-[11px] font-bold text-[#8A8A8A] uppercase tracking-wider">Skills Developed</span>
                </div>

                {/* METRIC 4 */}
                <div className="flex flex-col items-center justify-center rounded-2xl border border-[#E5E1DA] bg-white p-6 shadow-xs">
                  <Rocket className="h-6 w-6 text-[#FF572F] mb-3" />
                  <span className="font-display text-3xl font-black text-[#111111] sm:text-4xl">∞</span>
                  <span className="mt-1 text-[11px] font-bold text-[#8A8A8A] uppercase tracking-wider">Curiosity Level</span>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 07. DARK FINAL CONTACT SECTION + RECAP */}
        <section className="w-full bg-[#111111] py-20 text-white border-t border-[#262626]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-12 lg:gap-8 pb-12 border-b border-[#262626]">
              
              {/* DARK LEFT COLUMN */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
                  LET'S CONNECT
                </span>

                <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
                  Let's create something
                  <br />
                  meaningful together.
                </h2>

                <p className="max-w-md text-sm text-[#8A8A8A] sm:text-base leading-relaxed">
                  I'm always open to discussing new opportunities and interesting projects.
                </p>

                <div className="pt-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="group inline-flex items-center space-x-2 rounded-xl border border-[#FF572F] bg-[#111111] px-7 py-3.5 text-sm font-semibold text-[#FF572F] transition-all duration-200 hover:bg-[#FF572F] hover:text-white"
                  >
                    <span>Let's Connect</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* CONDENSED CONTACT DETAILS RECAP */}
                <div className="pt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-[#262626]/80 text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Email</span>
                    <p className="mt-1 font-semibold text-white truncate">{emailAddress}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Phone</span>
                    <p className="mt-1 font-semibold text-white">{phoneNumber}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Location</span>
                    <p className="mt-1 font-semibold text-white">{locationText}</p>
                  </div>
                </div>

                {/* SOCIAL LINKS */}
                <div className="pt-4 flex items-center space-x-6 text-xs text-[#8A8A8A]">
                  <span className="font-bold text-white uppercase tracking-wider">Follow Me</span>
                  <a href="https://www.linkedin.com/in/hari-haran-m-2a625925a" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF572F] transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://github.com/hariharan-design-dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF572F] transition-colors">
                    GitHub
                  </a>
                  <a href="https://www.instagram.com/harisdesigns.studio" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF572F] transition-colors">
                    Instagram
                  </a>
                </div>
              </div>

              {/* DARK RIGHT COLUMN: PORTRAIT VISUAL */}
              <div className="relative flex items-center justify-center lg:col-span-5 lg:justify-end">
                <div className="relative w-full max-w-[380px] aspect-square">
                  <div className="absolute right-4 bottom-0 w-[80%] aspect-square rounded-full bg-[#FF572F] z-0 shadow-lg opacity-90" />
                  <div className="absolute inset-0 z-10 flex items-end justify-center">
                    <div className="relative h-full w-full">
                      <Image
                        src="/assets/profile/profile-cutout.png"
                        alt="Hari Haran — Certifications Footer Portrait"
                        fill
                        sizes="(max-width: 768px) 100vw, 35vw"
                        className="object-contain object-bottom filter grayscale contrast-110"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* FOOTER BOTTOM BAR */}
            <div className="mt-8 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0 text-xs text-[#8A8A8A]">
              <p>© 2026 Hari Haran. All rights reserved.</p>

              <div className="flex items-center space-x-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <Link href="/my-journey" className="hover:text-white transition-colors">My Journey</Link>
                <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
                <Link href="/certifications" className="text-[#FF572F] font-semibold">Certifications</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>

              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center space-x-1.5 hover:text-white transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="h-3.5 w-3.5 text-[#FF572F]" />
              </button>
            </div>

          </div>
        </section>
      </main>

    </div>
  );
}
