'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Printer,
  ShoppingCart,
  Search,
  UserCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Database,
  Monitor,
  ShieldAlert,
  Sliders,
  DollarSign,
  Receipt,
  Flame,
  HardDrive
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FirePOSCaseStudy() {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const adminPrototypeUrl = "https://www.figma.com/proto/1Su453JKd3aHLTbr2obFJj/new-brand-of-designs?node-id=4210-71&t=IQfOGNXtIuGMOmAh-1&scaling=min-zoom&content-scaling=fixed&page-id=2052%3A2&starting-point-node-id=4210%3A71";
  const billingPrototypeUrl = "https://www.figma.com/proto/1Su453JKd3aHLTbr2obFJj/new-brand-of-designs?node-id=4211-126&t=5h9wTSzujcYTjV4A-1&scaling=min-zoom&content-scaling=fixed&page-id=2052%3A2&starting-point-node-id=4211%3A126";

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
              07 / 08 · Case Study
            </div>
          </div>
        </section>

        {/* 01 — HERO */}
        <section className="w-full bg-[#F7F5F0] px-6 pt-12 pb-16 md:px-12 md:pt-16 lg:px-16 lg:pt-20">
          <div className="mx-auto max-w-6xl">
            <motion.div initial="hidden" animate="visible" variants={itemVariants} className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
                01 / Hero · Operational Desktop Software
              </span>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl">
                FIREPOS
              </h1>
              <p className="mt-2 font-display text-xl font-bold text-[#FF572F] sm:text-2xl">
                Offline-First Billing System for Crackers-Shop Operations
              </p>
              <p className="mt-4 text-lg text-[#5F5F5F] sm:text-xl leading-relaxed max-w-3xl">
                "Designing a billing workflow around the realities of a busy retail counter."
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
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Product Designer & Technical Planning</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Platform</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Windows Desktop Application</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Tools</span>
                <p className="mt-1 font-display text-xs font-bold text-[#111111]">ChatGPT · Stitch · Antigravity · Figma</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Tech Stack</span>
                <p className="mt-1 font-display text-xs font-bold text-[#111111]">Electron · React · Python · SQLite</p>
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
                  src="/assets/projects/firepos-hero.png"
                  alt="FirePOS Case Study Cover"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E1DA] pt-4 text-xs text-[#8A8A8A]">
                <span>FirePOS Operational Software · Multi-Role Desktop Interfaces</span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={adminPrototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rounded-xl bg-[#111111] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#FF572F]"
                  >
                    <span>Admin Prototype ↗</span>
                  </a>
                  <a
                    href={billingPrototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rounded-xl border border-[#FF572F] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FF572F] transition-all hover:bg-[#FF572F] hover:text-white"
                  >
                    <span>Billing Counter Prototype ↗</span>
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
              FirePOS is an offline-first desktop billing system designed for crackers shops, bringing customer capture, product billing, invoice verification, printing, reporting, and local data management into one focused application.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <HardDrive className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Architecture</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Offline-First Local SQLite Database</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <Printer className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Verification</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Bill Preview Checkpoint before Printing</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <UserCheck className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Customer Capture</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Embedded inside Billing Transaction</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <Monitor className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Target Platform</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Windows Desktop Executable (.exe)</p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — OPERATIONAL CONTEXT & TENSION */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              03 / Context & Tension
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              BILLING NEEDS TO BE FAST — BUT IT ALSO NEEDS CONTROL
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              Crackers shops operate under intense seasonal demand where operators must bill 100–200 consecutive customers quickly. The design challenge was balancing high-speed keyboard+mouse data entry with essential operational controls (customer identification, bill preview verification, and physical invoice printing).
            </p>

            <div className="mt-8 rounded-2xl border border-[#E5E1DA] bg-white p-8">
              <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-6 text-center md:text-left">
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase text-[#FF572F]">TRANSACTION SPEED</span>
                  <p className="mt-1 text-sm text-[#5F5F5F]">Rapid product search, keyboard focus, and cart calculations.</p>
                </div>
                <div className="font-display text-xl font-bold text-[#111111]">VS</div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase text-[#FF572F]">OPERATIONAL CONTROL</span>
                  <p className="mt-1 text-sm text-[#5F5F5F]">Customer verification, bill preview checkpoint, and print confirmation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — THE TRANSACTION WORKFLOW */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              04 / Transaction Workflow
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              ONE TRANSACTION WORKFLOW. NO UNNECESSARY NAVIGATION.
            </h2>

            <div className="mt-8 rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-8">
              <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-2 text-xs">
                <div className="rounded-xl border border-[#E5E1DA] bg-white p-3 text-center w-full">
                  <span className="font-bold text-[#FF572F]">01 Customer</span>
                  <p className="mt-1 text-[11px] text-[#5F5F5F]">Search / Create</p>
                </div>
                <div className="hidden md:block font-bold text-[#FF572F]">→</div>
                <div className="rounded-xl border border-[#E5E1DA] bg-white p-3 text-center w-full">
                  <span className="font-bold text-[#FF572F]">02 Search</span>
                  <p className="mt-1 text-[11px] text-[#5F5F5F]">Add Crackers</p>
                </div>
                <div className="hidden md:block font-bold text-[#FF572F]">→</div>
                <div className="rounded-xl border border-[#E5E1DA] bg-white p-3 text-center w-full">
                  <span className="font-bold text-[#FF572F]">03 Cart</span>
                  <p className="mt-1 text-[11px] text-[#5F5F5F]">Quantity & Total</p>
                </div>
                <div className="hidden md:block font-bold text-[#FF572F]">→</div>
                <div className="rounded-xl border border-[#E5E1DA] bg-white p-3 text-center w-full">
                  <span className="font-bold text-[#FF572F]">04 Preview</span>
                  <p className="mt-1 text-[11px] text-[#5F5F5F]">Verification Check</p>
                </div>
                <div className="hidden md:block font-bold text-[#FF572F]">→</div>
                <div className="rounded-xl border border-[#E5E1DA] bg-white p-3 text-center w-full">
                  <span className="font-bold text-[#FF572F]">05 Print</span>
                  <p className="mt-1 text-[11px] text-[#5F5F5F]">Invoice Output</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 — KEY DESIGN DECISIONS */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              06 / Key Design Decisions
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              PRODUCT DECISIONS FOR COUNTER REALITIES
            </h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">DECISION 01</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Customer Capture Inside Billing</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Instead of forcing operators to leave billing to create customer profiles, customer search and creation are embedded directly into the active transaction sequence.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">DECISION 02</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Bill Preview as a Trust Checkpoint</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Physical invoice printing is irreversible. A dedicated Bill Preview modal acts as a verification checkpoint for customer and operator before sending to the thermal printer.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">DECISION 03</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Stock Quantity ≠ Product Availability</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Retail crackers inventory data may be uncertain during peak season. Stock quantity is shown as informational data rather than an automated blocker that prevents billing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 08 — DELIVERY PLATFORM REFLECTION */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              08 / Delivery Reflection
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              DESKTOP ARCHITECTURE vs DELIVERED OUTPUT
            </h2>
            <div className="mt-6 rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
              <div className="flex items-start space-x-3 text-xs text-[#5F5F5F]">
                <ShieldAlert className="h-5 w-5 text-[#8A8A8A] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#111111]">Honest Technical Reflection:</span> The intended deliverable for FirePOS was a standalone Windows desktop executable (`.exe`). During development, a web-based output was generated, revealing a mismatch between delivery platform requirements and implementation milestones. Desktop delivery architecture remains an essential product requirement.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10 — FINAL EXPERIENCE SHOWCASE */}
        <section className="w-full bg-[#111111] py-20 text-white border-t border-[#262626]">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
                10 / Final Experience
              </span>
              <h2 className="mt-2 font-display text-4xl font-extrabold text-white">
                THE FIREPOS INTERFACE SHOWCASE
              </h2>
              <p className="mt-2 text-base text-[#8A8A8A]">
                Operational billing and admin management system.
              </p>
            </div>

            {/* SCREEN 01: BILLING INTERFACE & PREVIEW */}
            <div className="mt-16 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">01</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Billing Workspace & Bill Preview Checkpoint
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/firepos/billing interface.png"
                    alt="FirePOS Billing Workspace Interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/firepos/bill previwe.png"
                    alt="FirePOS Bill Preview Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* SCREEN 02: ADMIN DASHBOARD & INVENTORY */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">02</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Admin Analytics Dashboard & Inventory Management
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/firepos/admin dashboard.png"
                    alt="FirePOS Admin Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/firepos/inventory management.png"
                    alt="FirePOS Inventory Management"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* SCREEN 03: BILLS & RECENT TRANSACTIONS */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">03</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Recent Bills & Customer History Management
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/firepos/recent bills.png"
                    alt="FirePOS Recent Bills Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/firepos/admin customers.png"
                    alt="FirePOS Customer Management"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11 — VALIDATION & EVIDENCE BOUNDARIES */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              11 / Audit & Boundaries
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              VALIDATION & TESTING REQUIREMENTS
            </h2>
            <div className="mt-6 rounded-2xl border border-[#E5E1DA] bg-white p-6">
              <div className="flex items-start space-x-3 text-xs text-[#5F5F5F]">
                <ShieldAlert className="h-5 w-5 text-[#8A8A8A] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#111111]">Testing Scope:</span> Processing 100–200 consecutive bills under peak festival load is a documented testing requirement, not a production claim. Formal usability studies and public production analytics are omitted in compliance with evidence guidelines.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12 — LEARNINGS & REFLECTION */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              12 / Learnings
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              WHAT FIREPOS CHANGED IN MY DESIGN THINKING
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">
                  Design around the transaction, not the database.
                </h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  Database tables organize records, but operators think in sequential counter actions (Customer → Products → Calculation → Preview → Print).
                </p>
              </div>

              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">
                  Data uncertainty shouldn't block operations.
                </h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  Treating stock count as informational rather than a strict sale blocker prevents system rigidity during chaotic retail periods.
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
              "THE BEST WORKFLOW MATCHES THE USER'S ACTUAL SEQUENCE OF WORK."
            </h2>
            <p className="mt-4 text-base text-[#8A8A8A] leading-relaxed max-w-2xl mx-auto">
              FirePOS taught me that operational product design isn't about adding more screens. It's about putting customer capture inside the transaction, creating a trust verification checkpoint, and removing unnecessary friction from counter work.
            </p>

            <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-[#262626] pt-8 sm:flex-row sm:space-y-0">
              <Link
                href="/projects/future-you"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#8A8A8A] transition-colors hover:text-[#FF572F]"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>← Previous: FutureYou</span>
              </Link>

              <Link
                href="/projects/kanna-pyro-park"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#FF572F] transition-colors hover:underline"
              >
                <span>Next Project: Kanna Pyro Park →</span>
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
