'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Layout,
  Clock,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  AlertCircle,
  Compass,
  Milestone,
  FileCode,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DrivePortzCaseStudy() {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const prototypeUrl = "https://www.figma.com/proto/4EP68lwl1n3F8lhaPb8nAr/hari-projects?node-id=518-2002&t=yMm4o6hZOq2abeTz-1&scaling=min-zoom&content-scaling=fixed&page-id=217%3A123&starting-point-node-id=375%3A399";

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
              01 / 08 · Case Study
            </div>
          </div>
        </section>

        {/* 01 — HERO */}
        <section className="w-full bg-[#F7F5F0] px-6 pt-12 pb-16 md:px-12 md:pt-16 lg:px-16 lg:pt-20">
          <div className="mx-auto max-w-6xl">
            <motion.div initial="hidden" animate="visible" variants={itemVariants} className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
                01 / Case Study · Personal Milestone Project
              </span>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl">
                DRIVEPORTZ
              </h1>
              <p className="mt-2 font-display text-xl font-bold text-[#FF572F] sm:text-2xl">
                Vehicle Service Booking Platform
              </p>
              <p className="mt-4 text-lg text-[#5F5F5F] sm:text-xl leading-relaxed max-w-3xl">
                "Designing a vehicle-service experience that makes a new service brand easier to trust, understand and book."
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
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">2024</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Role</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Freelance UI/UX Designer · Solo</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Timeline</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">2 Weeks</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Tools</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Figma · ChatGPT</p>
              </div>
            </motion.div>

            {/* CINEMATIC HERO PREVIEW COMPOSITION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 relative w-full overflow-hidden rounded-3xl border border-[#E5E1DA] bg-[#111111] p-4 sm:p-8 shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/assets/projects/driveportz-hero.png"
                  alt="DrivePortz Case Study Cover"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#262626] pt-6 text-white">
                <span className="text-xs text-[#8A8A8A]">
                  20-Screen Responsive Web Application · Interactive Prototype
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
              DrivePortz was a vehicle-service platform concept designed around maintenance and repair services for scooters, cars and vans. The challenge was not simply creating a service website. The platform needed to help a first-time visitor answer: <strong>Can I trust this service? Can I find the right service for my vehicle? Can I book it without unnecessary friction?</strong>
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <ShieldCheck className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Role</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Freelance UI/UX Designer · Solo</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <Clock className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Timeline</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">2 Weeks Sprint</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <Layout className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Tools</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Figma · ChatGPT</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <Layers className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Deliverables</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">20 Screens · UI System · Prototype · Component Library</p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — PRODUCT CONTEXT */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              03 / Context
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              A GOOD SERVICE BUSINESS WITHOUT A DIGITAL EXPERIENCE
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              The client had a strong offline service-business idea around maintenance and repair services for scooters, cars and vans. While the business could provide the physical service, the digital experience needed to communicate its value to people who had never interacted with the brand before.
            </p>
            <p className="mt-3 text-base text-[#5F5F5F] leading-relaxed">
              The platform had no established digital reputation to rely on. Therefore, before asking someone to hand over their vehicle or book an appointment, the experience needed to create immediate confidence and structural clarity.
            </p>
          </div>
        </section>

        {/* 04 — THE REAL PROBLEM */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              04 / Problem Definition
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              THE PROBLEM WASN'T "DESIGN A WEBSITE."
            </h2>
            <p className="mt-2 text-base font-semibold text-[#FF572F]">
              "The challenge was creating enough clarity and confidence for a first-time visitor to move from discovery to booking."
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">01</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">THE TRUST GAP</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  A new service brand does not automatically have the reputation of an established provider.
                </p>
                <div className="mt-4 border-t border-[#E5E1DA] pt-3 text-[11px] font-semibold text-[#111111]">
                  → Design Implication: Trust needed to appear throughout the experience before asking for booking commitment.
                </div>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">02</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">SERVICE CLARITY</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Scooters, cars and vans have completely different maintenance packages and repair requirements.
                </p>
                <div className="mt-4 border-t border-[#E5E1DA] pt-3 text-[11px] font-semibold text-[#111111]">
                  → Design Implication: Vehicle type needed to become a primary organizational layer on the homepage.
                </div>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">03</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">BOOKING FRICTION</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Complex multi-step booking forms cause dropoffs when users are required to fill redundant fields.
                </p>
                <div className="mt-4 border-t border-[#E5E1DA] pt-3 text-[11px] font-semibold text-[#111111]">
                  → Design Implication: The primary booking flow should remain focused into 3 clear steps.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — CONSTRAINTS */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              05 / Scope & Boundaries
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              DESIGNING WITHIN A TWO-WEEK WINDOW
            </h2>
            <div className="mt-6 rounded-2xl border border-[#E5E1DA] bg-white p-8">
              <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
                <div className="border-r border-[#E5E1DA] pr-4">
                  <span className="font-display text-2xl font-bold text-[#FF572F]">2 WEEKS</span>
                  <p className="text-[11px] text-[#5F5F5F]">Sprint Timeline</p>
                </div>
                <div className="border-r border-[#E5E1DA] pr-4">
                  <span className="font-display text-2xl font-bold text-[#111111]">SOLO</span>
                  <p className="text-[11px] text-[#5F5F5F]">UI/UX Designer</p>
                </div>
                <div className="border-r border-[#E5E1DA] pr-4">
                  <span className="font-display text-2xl font-bold text-[#111111]">3 TYPES</span>
                  <p className="text-[11px] text-[#5F5F5F]">Scooter, Car, Van</p>
                </div>
                <div>
                  <span className="font-display text-2xl font-bold text-[#FF572F]">20</span>
                  <p className="text-[11px] text-[#5F5F5F]">Screen System</p>
                </div>
              </div>
              <p className="mt-6 text-xs text-[#5F5F5F] leading-relaxed">
                The project had to move from initial business requirement to a complete product design within a short two-week timeline. The design needed to establish a coherent structure while also producing a complete visual system, partner dashboard flows, and a clickable prototype.
              </p>
            </div>
          </div>
        </section>

        {/* 06 — WHAT I KNEW / DIDN'T KNOW */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              06 / Knowledge Audit
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              WHAT I KNEW vs WHAT I NEEDED TO UNDERSTAND
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">WHAT I KNEW</h3>
                <ul className="mt-3 space-y-2 text-xs text-[#5F5F5F]">
                  <li>• Platform needed to support vehicle services.</li>
                  <li>• Covered scooters, cars, and vans.</li>
                  <li>• Users needed to discover & book services.</li>
                  <li>• Required a complete multi-screen product.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <HelpCircle className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">WHAT I NEEDED TO UNDERSTAND</h3>
                <ul className="mt-3 space-y-2 text-xs text-[#5F5F5F]">
                  <li>• How should services be organized?</li>
                  <li>• How should vehicle types influence nav?</li>
                  <li>• What info creates first-time trust?</li>
                  <li>• How could booking remain simple?</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <AlertCircle className="h-5 w-5 text-[#8A8A8A]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">WHAT REMAINED UNKNOWN</h3>
                <p className="mt-3 text-xs text-[#5F5F5F] leading-relaxed">
                  The project window did not include documented real-user interviews, formal usability testing or post-launch analytics. This design was built on competitive analysis and structural logic rather than quantitative user metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — DESIGN CHALLENGE */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              07 / Design Objective
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              HOW MIGHT WE...
            </h2>
            <p className="mt-3 text-xl font-bold font-display text-[#111111]">
              "How might we make a first vehicle service booking feel confident and effortless?"
            </p>
            <div className="mt-8 rounded-2xl border border-[#E5E1DA] bg-white p-8">
              <div className="flex flex-wrap items-center justify-center gap-3 text-base font-bold font-display sm:text-xl text-[#111111]">
                <span className="rounded-lg bg-[#F7F5F0] px-4 py-2 border border-[#E5E1DA]">TRUST</span>
                <span className="text-[#FF572F]">+</span>
                <span className="rounded-lg bg-[#F7F5F0] px-4 py-2 border border-[#E5E1DA]">CLARITY</span>
                <span className="text-[#FF572F]">+</span>
                <span className="rounded-lg bg-[#F7F5F0] px-4 py-2 border border-[#E5E1DA]">SIMPLICITY</span>
                <span className="text-[#FF572F]">=</span>
                <span className="rounded-lg bg-[#FF572F] px-4 py-2 text-white shadow-sm">CONFIDENT BOOKING</span>
              </div>
            </div>
          </div>
        </section>

        {/* 08 — DISCOVERY & 09 — OBSERVATIONS */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              08 / Discovery & 09 / Observations
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              UNDERSTANDING THE BOOKING PROBLEM
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              I conducted competitive analysis across 4–5 nearby vehicle service booking websites and benchmarked UI references on Dribbble and Pinterest focusing on service categorization, homepage hierarchy, vehicle separation, booking flows, and trust signals.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Observation 01</span>
                <h3 className="mt-2 font-display text-lg font-bold text-[#111111]">Clear categories reduce search effort.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  When users can select their vehicle type upfront, they avoid wading through irrelevant service packages.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Observation 02</span>
                <h3 className="mt-2 font-display text-lg font-bold text-[#111111]">Vehicle context matters.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  Scooter owners care about quick turnaround and oil changes; commercial van owners prioritize fleet reliability and scheduled maintenance.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Observation 03</span>
                <h3 className="mt-2 font-display text-lg font-bold text-[#111111]">Clutter weakens first interaction.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  Overloading the landing page with technical jargon increases anxiety. Clean visual cards build confidence.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Observation 04</span>
                <h3 className="mt-2 font-display text-lg font-bold text-[#111111]">Trust needs early visual proof.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  Highlighting verified partner garages, customer ratings, and transparent service inclusions directly influences booking willingness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10 — AI-ASSISTED EXPLORATION */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              10 / AI-Assisted Workflow
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              USING AI TO STRUCTURE THE PROBLEM SPACE
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              ChatGPT was utilized as an AI-assisted exploration tool to brainstorm first-time customer needs, map trust factors, and structure information architecture choices during the initial 2-week sprint.
            </p>
            <div className="mt-6 rounded-2xl border border-[#E5E1DA] bg-white p-6">
              <div className="flex items-center space-x-3 text-xs font-bold text-[#111111]">
                <Sparkles className="h-5 w-5 text-[#FF572F]" />
                <span>Positioning Note: AI conducted structural exploration; human design judgment led UI decisions.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 11 — KEY INSIGHTS */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              11 / Key Insights
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              INSIGHTS → DESIGN RESPONSES
            </h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Insight 01</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Trust must appear before the booking decision.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  → Design Response: Strengthened the landing page hero with verified partner garage badges and ratings.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Insight 02</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Vehicle type is a primary decision point.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  → Design Response: Structured service discovery into dedicated Scooter, Car, and Van portals.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Insight 03</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Users should not have to understand the whole platform to book.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  → Design Response: Streamlined the checkout into a focused 3-step scheduling process.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Insight 04</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Important services need fast discovery.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  → Design Response: Introduced a Popular Services module with upfront pricing and estimated times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12 — IA & 13 — USER JOURNEY */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              12 / IA & 13 / Primary Journey
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              STRUCTURING THE EXPERIENCE AROUND THE VEHICLE
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              The information architecture guides users from high-level brand discovery down to vehicle selection, package choice, and 3-step booking confirmation.
            </p>

            <div className="mt-8 rounded-2xl border border-[#E5E1DA] bg-white p-8">
              <div className="flex flex-col space-y-6 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4">
                <div className="flex flex-col items-center rounded-xl bg-[#F7F5F0] p-4 border border-[#E5E1DA] text-center w-full">
                  <span className="text-[10px] font-bold uppercase text-[#FF572F]">Step 01</span>
                  <span className="mt-1 font-display text-sm font-bold text-[#111111]">Discover & Select Vehicle</span>
                  <span className="mt-1 text-[11px] text-[#5F5F5F]">Scooter / Car / Van</span>
                </div>

                <div className="hidden md:block font-bold text-[#FF572F]">→</div>

                <div className="flex flex-col items-center rounded-xl bg-[#F7F5F0] p-4 border border-[#E5E1DA] text-center w-full">
                  <span className="text-[10px] font-bold uppercase text-[#FF572F]">Step 02</span>
                  <span className="mt-1 font-display text-sm font-bold text-[#111111]">Choose Service Package</span>
                  <span className="mt-1 text-[11px] text-[#5F5F5F]">General / Oil / Repair</span>
                </div>

                <div className="hidden md:block font-bold text-[#FF572F]">→</div>

                <div className="flex flex-col items-center rounded-xl bg-[#F7F5F0] p-4 border border-[#E5E1DA] text-center w-full">
                  <span className="text-[10px] font-bold uppercase text-[#FF572F]">Step 03</span>
                  <span className="mt-1 font-display text-sm font-bold text-[#111111]">Schedule & Confirm</span>
                  <span className="mt-1 text-[11px] text-[#5F5F5F]">Time slot & Location</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 14 — DESIGN PRINCIPLES */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              14 / Design Principles
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              GUIDING DESIGN PRINCIPLES
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="font-display text-xl font-black text-[#FF572F]">01</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">TRUST FIRST</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">Build confidence before asking for commitment.</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="font-display text-xl font-black text-[#FF572F]">02</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">VEHICLE FIRST</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">Use vehicle context to make service discovery relevant.</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="font-display text-xl font-black text-[#FF572F]">03</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">FEWER DECISIONS</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">Avoid unnecessary complexity in the booking journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 16 — DESIGN DECISION: VEHICLE STRUCTURE & 17 — TRUST */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              16 & 17 / Design Decisions
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              KEY DESIGN DECISIONS
            </h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">DECISION 01</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Vehicle Category as Core Organizational Layer</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Instead of listing all services in one long list, the platform separates Scooter, Car, and Commercial Van services at the homepage entry point. This eliminates mental filtering effort for vehicle owners.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">DECISION 02</span>
                <h3 className="mt-1 font-display text-lg font-bold text-[#111111]">Experience-Level Trust Architecture</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Trust was treated as a fundamental layout concern. Ratings, verified garage badges, upfront cost estimates, and real-time customer tracking dashboards were designed to be present across the 20-screen system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 18 — ITERATION: POPULAR SERVICES & 19 — TYPOGRAPHY */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              18 & 19 / Design Iterations
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              DESIGN ITERATIONS
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">ITERATION 01</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">Popular Services Module</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  A featured Popular Services section was introduced with selected packages and ratings to strengthen service discoverability for first-time visitors.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">ITERATION 02</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">Typography Pair Shift</h3>
                <div className="mt-3 space-y-2">
                  <div className="rounded-lg bg-white p-2 text-xs text-[#5F5F5F]">
                    <span className="font-bold text-[#111111]">BEFORE:</span> Generic sans-serif font direction
                  </div>
                  <div className="rounded-lg bg-[#111111] p-2 text-xs text-white">
                    <span className="font-bold text-[#FF572F]">AFTER:</span> Anton (Bold Headers) + Nunito (Warm Body Copy)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 20 — DESIGN SYSTEM */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              20 / Design System
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              DESIGNING 20 SCREENS AS ONE PRODUCT
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              The objective was not to design 20 independent screens, but to build a reusable component library ensuring typographic hierarchy, color token consistency, and UI button states across customer and workshop partner portals.
            </p>
          </div>
        </section>

        {/* 21 — FINAL EXPERIENCE & 22 — 20-SCREEN PRODUCT */}
        <section className="w-full bg-white py-20 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
                21 & 22 / Product Showcase
              </span>
              <h2 className="mt-2 font-display text-4xl font-extrabold text-[#111111]">
                THE FINAL DRIVEPORTZ EXPERIENCE
              </h2>
              <p className="mt-2 text-base text-[#5F5F5F]">
                Complete 20-screen vehicle service booking platform organized by user journey.
              </p>
            </div>

            {/* JOURNEY 01: HOMEPAGE */}
            <div className="mt-16 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">01</span>
                <h3 className="font-display text-xl font-bold text-[#111111]">
                  First Impression — Homepage & Vehicle Discovery
                </h3>
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#E5E1DA] shadow-md">
                <Image
                  src="/assets/projects/driveportz/landing page.png"
                  alt="DrivePortz Landing Page Screen"
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* JOURNEY 02: VEHICLE CATEGORIES */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">02</span>
                <h3 className="font-display text-xl font-bold text-[#111111]">
                  Find Your Context — Scooter, Car & Commercial Portals
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/driveportz/bike service page.png"
                    alt="DrivePortz Scooter Service Page"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/driveportz/car SERVICES PAGE.png"
                    alt="DrivePortz Car Service Page"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/driveportz/commercial service.png"
                    alt="DrivePortz Commercial Service Page"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* JOURNEY 03: BOOKING FLOW & DASHBOARD */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">03</span>
                <h3 className="font-display text-xl font-bold text-[#111111]">
                  Make the Booking & Customer Dashboard Tracking
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/driveportz/service booking.png"
                    alt="DrivePortz Service Booking Interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/driveportz/customer dashboard.png"
                    alt="DrivePortz Customer Dashboard Interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* JOURNEY 04: WORKSHOP PARTNER INTERFACE */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">04</span>
                <h3 className="font-display text-xl font-bold text-[#111111]">
                  Partner Ecosystem — Workshop Dashboard & Registration
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/driveportz/workshop dashboard.png"
                    alt="DrivePortz Workshop Partner Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#E5E1DA]">
                  <Image
                    src="/assets/projects/driveportz/garage-registration.png"
                    alt="DrivePortz Garage Registration Page"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 23 — PROTOTYPE */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              23 / Interactive Prototype
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              FROM SCREENS TO AN EXPERIENCE
            </h2>
            <p className="mt-2 text-sm text-[#5F5F5F]">
              Experience the full 20-screen DrivePortz clickable user flow directly in Figma.
            </p>

            <div className="mt-8 rounded-2xl border border-[#E5E1DA] bg-white p-8 shadow-sm">
              <a
                href={prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 rounded-xl bg-[#FF572F] px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#E04722] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F]"
              >
                <span>VIEW INTERACTIVE PROTOTYPE ↗</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* 24 — CLIENT FEEDBACK & 25 — WHAT I DELIVERED */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              24 / Feedback & 25 / Deliverables
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              FROM CONCEPT TO APPROVAL
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              The project went through two rounds of feedback, with the typography pair shift being the final correction before client sign-off.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 text-center">
                <span className="font-display text-3xl font-black text-[#FF572F]">20</span>
                <p className="mt-2 text-xs font-bold uppercase text-[#111111]">SCREENS</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 text-center">
                <span className="font-display text-3xl font-black text-[#111111]">01</span>
                <p className="mt-2 text-xs font-bold uppercase text-[#111111]">UI DESIGN SYSTEM</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 text-center">
                <span className="font-display text-3xl font-black text-[#111111]">01</span>
                <p className="mt-2 text-xs font-bold uppercase text-[#111111]">COMPONENT LIBRARY</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 text-center">
                <span className="font-display text-3xl font-black text-[#FF572F]">01</span>
                <p className="mt-2 text-xs font-bold uppercase text-[#111111]">INTERACTIVE PROTOTYPE</p>
              </div>
            </div>
          </div>
        </section>

        {/* 26 — OUTCOME & 27 — WHAT I LEARNED */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              26 / Outcome & 27 / Reflections
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              WHAT I LEARNED
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-[#E5E1DA] bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">
                  A screen is only one part of the product.
                </h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  Creating a 20-screen ecosystem taught me to think about edge cases, garage onboarding, customer tracking, and post-booking flows.
                </p>
              </div>

              <div className="rounded-xl border border-[#E5E1DA] bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">
                  Trust is a UX problem.
                </h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  For a new brand, visual clarity, upfront pricing, and rating transparency directly influence conversion.
                </p>
              </div>

              <div className="rounded-xl border border-[#E5E1DA] bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">
                  Structure should come before polish.
                </h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  Defining information architecture and 3-step booking user flows upfront prevented mid-project re-layouts.
                </p>
              </div>

              <div className="rounded-xl border border-[#E5E1DA] bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">
                  AI can accelerate exploration.
                </h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  Using ChatGPT helped organize trust factors and first-time customer needs quickly without sacrificing design judgment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 28 — WHAT I WOULD DO DIFFERENTLY & 29 — LIMITATIONS */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              28 / Next Steps & 29 / Limitations
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              IF I REVISITED DRIVEPORTZ TODAY...
            </h2>
            <div className="mt-6 rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-8">
              <ul className="space-y-3 text-sm text-[#5F5F5F]">
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF572F]" />
                  <span>Conduct real user interviews with vehicle owners to validate trust priority ranking.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF572F]" />
                  <span>Run usability testing on the 3-step booking flow to identify potential input bottlenecks.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF572F]" />
                  <span>Validate trust assumptions with real post-launch customer analytics.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 30 — PERSONAL MILESTONE & 31 — FINAL REFLECTION */}
        <section className="w-full bg-[#111111] py-20 text-white border-t border-[#262626]">
          <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
              30 & 31 / Personal Milestone
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              "DRIVEPORTZ WAS WHERE THE JOURNEY BECAME REAL."
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#A3A3A3] leading-relaxed max-w-3xl mx-auto">
              "The biggest takeaway wasn't learning another Figma technique. It was learning that product design is a chain of decisions. Every screen exists because something came before it: a problem, an assumption, a constraint, an insight, a trade-off, a decision. DrivePortz was my first opportunity to experience that chain from beginning to end."
            </p>

            {/* 32 — NEXT PROJECT NAVIGATION */}
            <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-[#262626] pt-8 sm:flex-row sm:space-y-0">
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#8A8A8A] transition-colors hover:text-[#FF572F]"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>← Back to Projects</span>
              </Link>

              <Link
                href="/projects/cheezycrust"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#FF572F] transition-colors hover:underline"
              >
                <span>Next Project: CheezyCrust</span>
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
