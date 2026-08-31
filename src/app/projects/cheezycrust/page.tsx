'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Pizza,
  Layers,
  Smartphone,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Compass,
  Palette,
  Eye,
  Sliders,
  ShieldAlert,
  Flame
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CheezyCrustCaseStudy() {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const prototypeUrl = "https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=135-1841&t=rMNAGEtT5CdCikeQ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=135%3A1841&show-proto-sidebar=1";

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5F0]">
      {/* GLOBAL NAVBAR */}
      <Navbar />

      <main className="flex-grow">
        {/* TOP BREADCRUMB & CASE STUDY NAV BAR */}
        <section className="w-full border-b border-[#E5E1DA] bg-white px-6 py-4 md:px-12 lg:px-16">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#5F5F5F] transition-colors hover:text-[#FF572F]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Projects</span>
            </Link>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#8A8A8A]">
              02 / 08 · Case Study
            </div>
          </div>
        </section>

        {/* 01 — HERO */}
        <section className="w-full bg-[#F7F5F0] px-6 pt-12 pb-16 md:px-12 md:pt-16 lg:px-16 lg:pt-20">
          <div className="mx-auto max-w-6xl">
            <motion.div initial="hidden" animate="visible" variants={itemVariants} className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
                01 / Hero · Brand & Product Exploration
              </span>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl">
                CHEEZYCRUST
              </h1>
              <p className="mt-2 font-display text-xl font-bold text-[#FF572F] sm:text-2xl">
                Brand Website · Mobile App · Food Ordering
              </p>
              <p className="mt-4 text-lg text-[#5F5F5F] sm:text-xl leading-relaxed max-w-3xl">
                "Designing a pizza-first ordering experience where the product, brand, and food itself work together."
              </p>
            </motion.div>

            {/* METADATA STRIP */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-[#E5E1DA] bg-white p-6 sm:grid-cols-4 md:gap-8"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Year</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">2024 – 2025</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Role</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Brand Designer · UI/UX Designer · Product Thinker</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Platform</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Mobile-First</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Tools</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Figma · ChatGPT · Flow · Stitch</p>
              </div>
            </motion.div>

            {/* HERO VISUAL SHOWCASE (16:10 ASPECT RATIO COVER + MOBILE SCREENS) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 relative w-full overflow-hidden rounded-3xl border border-[#E5E1DA] bg-[#111111] p-4 sm:p-8 shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/assets/projects/cheezycrust-hero.png"
                  alt="CheezyCrust Case Study Cover"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl border border-[#262626] bg-[#1A1A1A]">
                  <Image
                    src="/assets/projects/cheezycrust/cheezy crust Refined Onboarding 2.png"
                    alt="CheezyCrust Onboarding Screen"
                    fill
                    priority
                    sizes="33vw"
                    className="object-contain object-center"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl border border-[#262626] bg-[#1A1A1A]">
                  <Image
                    src="/assets/projects/cheezycrust/Refined Production-Ready Home Screen.png"
                    alt="CheezyCrust Home Screen"
                    fill
                    priority
                    sizes="33vw"
                    className="object-contain object-center"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl border border-[#262626] bg-[#1A1A1A]">
                  <Image
                    src="/assets/projects/cheezycrust/Refined Product Detail.png"
                    alt="CheezyCrust Product Detail Screen"
                    fill
                    priority
                    sizes="33vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#262626] pt-6 text-white">
                <span className="text-xs text-[#8A8A8A]">
                  Mobile Food Ordering & Customization Experience · Interactive Prototype
                </span>
                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 rounded-xl bg-[#FF572F] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#E04722]"
                >
                  <span>View Prototype ↗</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 02 — PROJECT SNAPSHOT */}
        <section className="w-full border-t border-[#E5E1DA] bg-white py-16">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              02 / Snapshot
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#111111] sm:text-3xl">
              THE PROJECT IN ONE VIEW
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              CheezyCrust started as an exploration into how a pizza brand and its digital product could work together. The project evolved beyond isolated visual design into a complete mobile-first ordering experience connecting brand identity, appetizing food presentation, topping customization, and lightweight checkout.
            </p>

            <div className="mt-8 rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
              <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4">
                <div className="flex flex-col items-center rounded-xl bg-white p-4 border border-[#E5E1DA] text-center w-full">
                  <span className="text-[10px] font-bold uppercase text-[#FF572F]">Stage 01</span>
                  <span className="mt-1 font-display text-sm font-bold text-[#111111]">Home / Discovery</span>
                </div>
                <div className="hidden md:block font-bold text-[#FF572F]">→</div>
                <div className="flex flex-col items-center rounded-xl bg-white p-4 border border-[#E5E1DA] text-center w-full">
                  <span className="text-[10px] font-bold uppercase text-[#FF572F]">Stage 02</span>
                  <span className="mt-1 font-display text-sm font-bold text-[#111111]">Product Details</span>
                </div>
                <div className="hidden md:block font-bold text-[#FF572F]">→</div>
                <div className="flex flex-col items-center rounded-xl bg-white p-4 border border-[#E5E1DA] text-center w-full">
                  <span className="text-[10px] font-bold uppercase text-[#FF572F]">Stage 03</span>
                  <span className="mt-1 font-display text-sm font-bold text-[#111111]">Customize Toppings</span>
                </div>
                <div className="hidden md:block font-bold text-[#FF572F]">→</div>
                <div className="flex flex-col items-center rounded-xl bg-white p-4 border border-[#E5E1DA] text-center w-full">
                  <span className="text-[10px] font-bold uppercase text-[#FF572F]">Stage 04</span>
                  <span className="mt-1 font-display text-sm font-bold text-[#111111]">Cart & Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — CONTEXT */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              03 / Context
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              WHEN THE FOOD BECOMES THE PRODUCT
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              Food-ordering products are highly functional, but the experience is also fundamentally visual. Existing food-ordering interfaces often prioritize information, menus, and functional UI patterns. The design opportunity was to explore a pizza-first experience where <strong>BRAND + FOOD + ORDERING</strong> work together as one product.
            </p>
          </div>
        </section>

        {/* 04 — THE PROBLEM */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              04 / Problem Definition
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              THE PROBLEM WASN'T FINDING FOOD.
            </h2>
            <p className="mt-2 text-base font-semibold text-[#FF572F]">
              "It was making the food feel like the primary product."
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">01</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">TOO MUCH INFORMATION</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Dense interfaces make browsing feel overwhelming and text-heavy.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">02</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">FOOD LACKS VISUAL DOMINANCE</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  The actual product becomes secondary to menus, metadata and UI elements.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">03</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">GENERIC PRODUCT IDENTITY</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Branding acts as a secondary layer rather than shaping the product UX.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">04</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">REPETITIVE ORDERING PATTERNS</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Repeated cards make the experience functional but emotionally flat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — DESIGN CHALLENGE */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              05 / Design Challenge
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              HOW MIGHT I...
            </h2>
            <p className="mt-4 text-xl font-bold font-display text-[#111111] leading-relaxed">
              "How might I create a pizza ordering experience that feels visually appetizing and distinctive without sacrificing clarity during browsing, customization and checkout?"
            </p>
          </div>
        </section>

        {/* 06 — GOALS & OWNERSHIP */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              06 / Goals & Ownership
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              WHAT I OWNED & WANTED TO ACHIEVE
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <Palette className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">BRAND IDENTITY</h3>
                <ul className="mt-3 space-y-2 text-xs text-[#5F5F5F]">
                  <li>• Brand concept & name</li>
                  <li>• Tagline & logo direction</li>
                  <li>• Color identity</li>
                  <li>• Visual personality</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <Compass className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">UX & STRUCTURE</h3>
                <ul className="mt-3 space-y-2 text-xs text-[#5F5F5F]">
                  <li>• Ordering journey flow</li>
                  <li>• Product discovery</li>
                  <li>• Topping customization</li>
                  <li>• Cart & checkout UX</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <Smartphone className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">UI & SYSTEM</h3>
                <ul className="mt-3 space-y-2 text-xs text-[#5F5F5F]">
                  <li>• Screen composition</li>
                  <li>• Typography hierarchy</li>
                  <li>• 14 mobile screens</li>
                  <li>• Component consistency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — CORE DESIGN TENSION */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              07 / Design Tension
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              HOW MUCH VISUAL IMPACT IS TOO MUCH?
            </h2>
            <div className="mt-6 rounded-2xl border border-[#E5E1DA] bg-white p-8">
              <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-6 text-center md:text-left">
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase text-[#FF572F]">VISUAL IMPACT</span>
                  <p className="mt-1 text-sm text-[#5F5F5F]">Large food imagery is essential for appetite appeal.</p>
                </div>
                <div className="font-display text-xl font-bold text-[#111111]">VS</div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase text-[#FF572F]">USABILITY</span>
                  <p className="mt-1 text-sm text-[#5F5F5F]">Excessive visual scale can make the UI feel crowded.</p>
                </div>
              </div>
              <div className="mt-6 border-t border-[#E5E1DA] pt-4 text-xs font-semibold text-[#111111]">
                → DECISION: Keep food imagery prominent while controlling density through generous spacing, strict typographic hierarchy, and clean action buttons.
              </div>
            </div>
          </div>
        </section>

        {/* 08 — KEY INSIGHTS */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              08 / Insights
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              INSIGHTS → DESIGN RESPONSES
            </h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Insight 01</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Food must remain visually important without overwhelming the UI.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  → Design Response: Used high-contrast food card containers and controlled spacing.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Insight 02</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Brand identity can influence product feel and behavior.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  → Design Response: Carried warm brand typography and color identity directly into UI components.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Insight 03</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Customization contains crucial decision-making information.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  → Design Response: Organized crust selection and extra toppings into visual selector pills.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Insight 04</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Checkout should feel lightweight and clear.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  → Design Response: Kept ordering path focused from product review to live order status tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 09 — EXPERIENCE BREAKDOWN */}
        <section className="w-full bg-[#F7F5F0] py-20 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
                09 / Product Showcase
              </span>
              <h2 className="mt-2 font-display text-4xl font-extrabold text-[#111111]">
                THE CHEEZYCRUST PRODUCT EXPERIENCE
              </h2>
            </div>

            {/* STAGE 01: ONBOARDING & SIGNUP */}
            <div className="mt-16 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">01</span>
                <h3 className="font-display text-xl font-bold text-[#111111]">
                  Onboarding & Seamless Signup
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/cheezycrust/Cheezy crust Refined Splash Screen.png"
                    alt="CheezyCrust Splash Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/cheezycrust/cheezy crust Refined Onboarding 2.png"
                    alt="CheezyCrust Onboarding Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/cheezycrust/cheeezy crust Refined Login Screen.png"
                    alt="CheezyCrust Login Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/cheezycrust/Refined sign up Screen.png"
                    alt="CheezyCrust Signup Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* STAGE 02: HOME & CUSTOMIZATION */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">02</span>
                <h3 className="font-display text-xl font-bold text-[#111111]">
                  Product Discovery & Customization UX
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/cheezycrust/Refined Production-Ready Home Screen.png"
                    alt="CheezyCrust Home Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/cheezycrust/cheezy crust Refined Explore & Search.png"
                    alt="CheezyCrust Explore Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/cheezycrust/Refined Product Detail.png"
                    alt="CheezyCrust Product Detail Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* STAGE 03: CART & CHECKOUT */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">03</span>
                <h3 className="font-display text-xl font-bold text-[#111111]">
                  Cart, Checkout & Live Order Status
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/cheezycrust/Refined Premium Cart.png"
                    alt="CheezyCrust Cart Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/cheezycrust/Refined Checkout.png"
                    alt="CheezyCrust Checkout Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/cheezycrust/order confirm status.png"
                    alt="CheezyCrust Order Confirmation Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/cheezycrust/Refined Order Tracking.png"
                    alt="CheezyCrust Order Tracking Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10 — DELIVERABLES & OUTCOMES */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              10 / Achieved Deliverables
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              WHAT THIS PROJECT ACHIEVED
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              CheezyCrust brought brand identity and product thinking together into a 14-screen mobile product system covering discovery, customization, cart, and live order tracking.
            </p>
          </div>
        </section>

        {/* 11 — TRANSPARENCY & EVIDENCE */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              11 / Evidence Transparency
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              VALIDATION & EVIDENCE STATUS
            </h2>
            <div className="mt-6 rounded-2xl border border-[#E5E1DA] bg-white p-6">
              <div className="flex items-start space-x-3 text-xs text-[#5F5F5F]">
                <ShieldAlert className="h-5 w-5 text-[#8A8A8A] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#111111]">Transparent Disclosure:</span> User-validation evidence and quantitative testing metrics are not currently included in the available case-study assets. This project represents a product design and visual system exploration.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12 — LEARNINGS & CAPABILITY */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              12 / Learnings & Capability
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              TURNING VISUAL DESIGN INTO PRODUCT THINKING
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">
                  Visual hierarchy drives decision making.
                </h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  Strong visual design is about deciding which element deserves attention first, not overloading the screen.
                </p>
              </div>

              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">
                  Brand and UX work together.
                </h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  A product becomes stronger when brand personality influences component interaction rather than sitting on top as styling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 13 — FINAL REFLECTION & NEXT PROJECT */}
        <section className="w-full bg-[#111111] py-20 text-white border-t border-[#262626]">
          <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
              13 / Final Reflection
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl text-white">
              "A PIZZA BRAND BECAME A PRODUCT DESIGN EXERCISE."
            </h2>
            <p className="mt-4 text-base text-[#8A8A8A] leading-relaxed max-w-2xl mx-auto">
              CheezyCrust started as a visual exploration. It became an exercise in understanding how brand, food presentation, product discovery, customization, and checkout work together as one experience.
            </p>

            <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-[#262626] pt-8 sm:flex-row sm:space-y-0">
              <Link
                href="/projects/driveportz"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#8A8A8A] transition-colors hover:text-[#FF572F]"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>← Previous: DrivePortz</span>
              </Link>

              <Link
                href="/projects/corex-ai"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#FF572F] transition-colors hover:underline"
              >
                <span>Next Project: CoreX AI →</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
