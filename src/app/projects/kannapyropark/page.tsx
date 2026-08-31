'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Sparkles,
  Flame,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Database,
  Layers,
  ShoppingBag,
  FileSpreadsheet,
  Globe,
  Lock,
  RefreshCw,
  ShieldAlert,
  Sliders,
  Tag,
  UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function KannaPyroParkCaseStudy() {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const liveSiteUrl = "https://www.kannanpyropark.in/";
  const customerPrototypeUrl = "https://www.figma.com/proto/1Su453JKd3aHLTbr2obFJj/new-brand-of-designs?node-id=4247-156&t=ubF6TDxLBhe9NWcC-1&scaling=min-zoom&content-scaling=fixed&page-id=2030%3A2&starting-point-node-id=4247%3A156";
  const adminPrototypeUrl = "https://www.figma.com/proto/1Su453JKd3aHLTbr2obFJj/new-brand-of-designs?node-id=4308-84&t=McSDATB7BHZga9lT-1&scaling=min-zoom&content-scaling=fixed&page-id=2030%3A2&starting-point-node-id=4308%3A84";

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5F0] text-[#111111]">
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
              08 / 08 · Case Study
            </div>
          </div>
        </section>

        {/* 01 — HERO */}
        <section className="w-full bg-[#F7F5F0] px-6 pt-12 pb-16 md:px-12 md:pt-16 lg:px-16 lg:pt-20">
          <div className="mx-auto max-w-6xl">
            <motion.div initial="hidden" animate="visible" variants={itemVariants} className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
                01 / Hero · Product Architecture & Business Reframing
              </span>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl">
                KANNA PYRO PARK
              </h1>
              <p className="mt-2 font-display text-xl font-bold text-[#FF572F] sm:text-2xl">
                From Fireworks Catalogue to Customer-Request Platform
              </p>
              <p className="mt-4 text-lg text-[#5F5F5F] sm:text-xl leading-relaxed max-w-3xl">
                "The right product wasn't an e-commerce website. It was a digital system built around how the business actually operates."
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
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">2026</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Role</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Product Designer & Frontend Contribution</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Platform</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Responsive Web Application</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Tools</span>
                <p className="mt-1 font-display text-xs font-bold text-[#111111]">ChatGPT · Stitch · Figma · Google Flow · Antigravity</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Tech Stack</span>
                <p className="mt-1 font-display text-xs font-bold text-[#111111]">Next.js · React · TypeScript · Supabase · Tailwind</p>
              </div>
            </motion.div>

            {/* HERO VISUAL SHOWCASE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 relative w-full overflow-hidden rounded-3xl border border-[#E5E1DA] bg-white p-4 sm:p-8 shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#E5E1DA]">
                <Image
                  src="/assets/projects/kanna-hero.png"
                  alt="Kanna Pyro Park Case Study Cover"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E1DA] pt-4 text-xs text-[#8A8A8A]">
                <span>Kanna Pyro Park Platform · Production Website & Multi-Role Prototypes</span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={liveSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rounded-xl bg-[#FF572F] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#E04722]"
                  >
                    <span>View Live Website ↗</span>
                  </a>
                  <a
                    href={customerPrototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rounded-xl border border-[#E5E1DA] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#111111] transition-all hover:border-[#FF572F] hover:text-[#FF572F]"
                  >
                    <span>Customer Prototype ↗</span>
                  </a>
                  <a
                    href={adminPrototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rounded-xl border border-[#E5E1DA] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#111111] transition-all hover:border-[#FF572F] hover:text-[#FF572F]"
                  >
                    <span>Admin Prototype ↗</span>
                  </a>
                </div>
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
              Kanna Pyro Park is a product discovery and customer-request platform that helps customers explore a fireworks catalogue while giving the business a controlled system to manage products, requests, customers, and website content.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <ShoppingBag className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Customer Model</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Product Discovery & Custom Request List</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <FileSpreadsheet className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Bulk Import</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Excel Catalogue Verification & Publication</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <Globe className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Admin Editor</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Live Website Content Management</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <Database className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Architecture</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Supabase Auth & Incremental Rebuild</p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — CONTEXT & PRODUCT MODEL SHIFT */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              03 / Product Model Transformation
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              THE FIRST PRODUCT DECISION WAS TO CHANGE THE PRODUCT ITSELF
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              Early assumptions treated Kanna Pyro Park as a standard e-commerce store. However, business constraints required moving away from direct online cracker checkout toward a customer-request model:
            </p>

            <div className="mt-8 rounded-2xl border border-[#E5E1DA] bg-white p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="border-r-0 md:border-r border-[#E5E1DA] pr-0 md:pr-6">
                  <span className="text-xs font-bold uppercase text-[#8A8A8A]">INITIAL E-COMMERCE ASSUMPTION</span>
                  <p className="mt-2 font-display text-base font-bold text-[#111111]">BROWSE → CART → CHECKOUT → PAYMENT</p>
                  <p className="mt-2 text-xs text-[#5F5F5F]">Assumed conventional online payment and automated delivery checkout.</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-[#FF572F]">REFRAMED PRODUCT MODEL</span>
                  <p className="mt-2 font-display text-base font-bold text-[#111111]">BROWSE → SELECT → REQUEST → BUSINESS HANDLING</p>
                  <p className="mt-2 text-xs text-[#5F5F5F]">Reflects how the fireworks business actually operates: customer discovery followed by direct operational handling.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — KEY PRODUCT & DATA INSIGHTS */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              04 / System Insights
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              UX DECISIONS THAT BECAME DATA-MODEL RULES
            </h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">INSIGHT 01</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Imported ≠ Published</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Bulk importing Excel product data should not automatically make products visible to customers. Products enter an admin review state before explicit verification and publication.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">INSIGHT 02</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Registered User ≠ Business Customer</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  A registered account created on the website is not automatically a business customer. An account enters the operational Customers area only after submitting an active product request.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">INSIGHT 03</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Historical Pricing Preservation</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Updating product prices in the catalogue today must NOT alter historical request prices. Historical request records freeze item pricing at the moment of request submission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — INFORMATION ARCHITECTURE */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              05 / Architecture
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              TWO EXPERIENCES. ONE PRODUCT SYSTEM.
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">CUSTOMER EXPERIENCE</span>
                <ul className="mt-3 space-y-2 text-xs text-[#5F5F5F]">
                  <li>• Home Page & Category Discovery</li>
                  <li>• Product Catalogue & Filtering</li>
                  <li>• Product Details</li>
                  <li>• My List / Request Creation</li>
                  <li>• Request Submission & Status Tracking</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
                <span className="text-xs font-bold uppercase text-[#111111]">ADMIN OPERATIONS</span>
                <ul className="mt-3 space-y-2 text-xs text-[#5F5F5F]">
                  <li>• Admin Dashboard</li>
                  <li>• Product Catalogue & Bulk Excel Import</li>
                  <li>• Product Verification & Publication</li>
                  <li>• Request Management & Customer Context</li>
                  <li>• Live Website Content Editor</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 06 — CUSTOMER & ADMIN EXPERIENCE SHOWCASE */}
        <section className="w-full bg-[#111111] py-20 text-white border-t border-[#262626]">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
                06 & 07 / Interface Showcase
              </span>
              <h2 className="mt-2 font-display text-4xl font-extrabold text-white">
                KANNA PYRO PARK INTERFACE SHOWCASE
              </h2>
              <p className="mt-2 text-base text-[#8A8A8A]">
                Responsive customer product discovery and admin operations system.
              </p>
            </div>

            {/* SCREEN 01: CUSTOMER DISCOVERY */}
            <div className="mt-16 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">01</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Customer Catalogue & Product Discovery
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/kannapyropark/landing page.png"
                    alt="Kanna Pyro Park Landing Page"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/kannapyropark/products page.png"
                    alt="Kanna Pyro Park Products Catalogue Page"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* SCREEN 02: REQUEST LIST & DETAILS */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">02</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Product Details & Customer Request List
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/kannapyropark/products details.png"
                    alt="Kanna Pyro Park Product Details"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/kannapyropark/my list.png"
                    alt="Kanna Pyro Park My Request List"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* SCREEN 03: ADMIN CATALOGUE & WEBSITE EDITOR */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">03</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Admin Products Control & Website Content Settings
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/kannapyropark/admin products.png"
                    alt="Kanna Pyro Park Admin Products Management"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/kannapyropark/admin settings website (1).png"
                    alt="Kanna Pyro Park Admin Website Settings"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 08 — TECHNICAL ARCHITECTURE & BACKEND RESET */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              08 / Technical Architecture
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              BACKEND RESET & INCREMENTAL MODULE REBUILD
            </h2>
            <div className="mt-6 rounded-2xl border border-[#E5E1DA] bg-white p-6">
              <div className="flex items-start space-x-3 text-xs text-[#5F5F5F]">
                <ShieldAlert className="h-5 w-5 text-[#8A8A8A] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#111111]">Architecture Evolution:</span> An earlier business data backend implementation proved unstable and was disconnected. Authentication was retained as a stable foundation, while business modules (Products, Requests, Customers) are being rebuilt incrementally using Next.js and Supabase.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10 — VALIDATION & EVIDENCE BOUNDARIES */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              10 / Audit & Boundaries
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              DEVELOPMENT & VALIDATION STATUS
            </h2>
            <div className="mt-6 rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
              <div className="flex items-start space-x-3 text-xs text-[#5F5F5F]">
                <ShieldAlert className="h-5 w-5 text-[#8A8A8A] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#111111]">Development Boundary:</span> Kanna Pyro Park is currently in active development. Formal user interviews, public launch statistics, and post-launch conversion metrics are omitted in compliance with evidence guidelines.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11 — LEARNINGS & REFLECTION */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              11 / Learnings
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              WHAT KANNA PYRO PARK CHANGED IN MY THINKING
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-[#E5E1DA] bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">
                  Business context overrides default UI patterns.
                </h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  Recognizing that traditional e-commerce checkout didn't align with the client's business rules led to creating a custom request platform.
                </p>
              </div>

              <div className="rounded-xl border border-[#E5E1DA] bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">
                  UX decisions shape underlying data models.
                </h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  Distinguishing imported products from published items and freezing historical request prices directly defined database schemas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12 — FINAL REFLECTION & PORTFOLIO CONCLUSION */}
        <section className="w-full bg-[#111111] py-20 text-white border-t border-[#262626]">
          <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
              12 / Final Reflection
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl text-white">
              "THE BIGGEST CHANGE WASN'T VISUAL."
            </h2>
            <p className="mt-4 text-base text-[#8A8A8A] leading-relaxed max-w-2xl mx-auto">
              "The biggest change in Kanna Pyro Park wasn't visual. It was realizing that the right product was not an e-commerce website. It was a digital system built around how the business actually operates."
            </p>

            <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-[#262626] pt-8 sm:flex-row sm:space-y-0">
              <Link
                href="/projects/fire-pos"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#8A8A8A] transition-colors hover:text-[#FF572F]"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>← Previous: FirePOS</span>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#FF572F] transition-colors hover:underline"
              >
                <span>Back to All Projects →</span>
                <ArrowLeft className="h-4 w-4 rotate-180" />
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
