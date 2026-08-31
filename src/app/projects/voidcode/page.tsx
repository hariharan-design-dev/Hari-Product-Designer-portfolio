'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Layers,
  Sparkles,
  Terminal,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Compass,
  Cpu,
  Monitor,
  ShieldAlert,
  FileCode2,
  Workflow,
  Laptop
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function VoidCodeCaseStudy() {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const prototypeUrl = "https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=247-206&t=sSAoT2UDyatH8UU8-1&scaling=min-zoom&content-scaling=fixed&page-id=158%3A178&starting-point-node-id=195%3A245";

  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0F] text-white">
      {/* GLOBAL NAVBAR */}
      <Navbar />

      <main className="flex-grow">
        {/* TOP BREADCRUMB & CASE STUDY NAV BAR */}
        <section className="w-full border-b border-[#1E1E2A] bg-[#0F0F17] px-6 py-4 md:px-12 lg:px-16">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#A1A1AA] transition-colors hover:text-[#7C3AED]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Projects</span>
            </Link>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#71717A]">
              04 / 08 · Case Study
            </div>
          </div>
        </section>

        {/* 01 — HERO */}
        <section className="w-full bg-[#0A0A0F] px-6 pt-12 pb-16 md:px-12 md:pt-16 lg:px-16 lg:pt-20">
          <div className="mx-auto max-w-6xl">
            <motion.div initial="hidden" animate="visible" variants={itemVariants} className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7C3AED]">
                01 / Hero · AI Design-to-Code Concept
              </span>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                VOIDCODE
              </h1>
              <p className="mt-2 font-display text-xl font-bold text-[#7C3AED] sm:text-2xl">
                AI Design-to-Code Platform
              </p>
              <p className="mt-4 text-lg text-[#A1A1AA] sm:text-xl leading-relaxed max-w-3xl">
                "Designing a Figma-first AI workflow that helps designers turn visual intent into code."
              </p>
            </motion.div>

            {/* METADATA STRIP */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-[#1E1E2A] bg-[#12121A] p-6 sm:grid-cols-4 md:gap-8"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">Year</span>
                <p className="mt-1 font-display text-sm font-bold text-white">2025</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">Role</span>
                <p className="mt-1 font-display text-sm font-bold text-white">Product Designer · End to End</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">Status</span>
                <p className="mt-1 font-display text-sm font-bold text-white">Self-Initiated Concept</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">Tools</span>
                <p className="mt-1 font-display text-sm font-bold text-white">Figma · Stitch · Claude</p>
              </div>
            </motion.div>

            {/* HERO VISUAL SHOWCASE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 relative w-full overflow-hidden rounded-3xl border border-[#262636] bg-[#12121C] p-4 sm:p-8 shadow-2xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#1E1E2A]">
                <Image
                  src="/assets/projects/voidcode-hero.png"
                  alt="VoidCode Case Study Cover"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#1E1E2A] pt-4 text-xs text-[#71717A]">
                <span>Desktop 1440px Workspace · Figma Import → Code Generation & Live Preview</span>
                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 rounded-xl bg-[#7C3AED] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#6D28D9]"
                >
                  <span>View Prototype ↗</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 02 — PROJECT SNAPSHOT */}
        <section className="w-full border-t border-[#1E1E2A] bg-[#0E0E14] py-16">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
              02 / Snapshot
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
              THE PROJECT IN ONE VIEW
            </h2>
            <p className="mt-4 text-base text-[#A1A1AA] sm:text-lg leading-relaxed">
              VoidCode is a concept for a Figma-first AI design-to-code platform. The intended experience allows designers to import Figma frames, generate code (React JSX, HTML/CSS, Tailwind), refine output through natural-language prompts, preview results in real time, and export clean code without leaving the workspace.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-[#1E1E2A] bg-[#12121C] p-5">
                <Code2 className="h-6 w-6 text-[#7C3AED]" />
                <h3 className="mt-3 font-display text-sm font-bold text-white">Focus</h3>
                <p className="mt-1 text-xs text-[#A1A1AA]">Design-to-Code AI Workflow</p>
              </div>
              <div className="rounded-xl border border-[#1E1E2A] bg-[#12121C] p-5">
                <Workflow className="h-6 w-6 text-[#7C3AED]" />
                <h3 className="mt-3 font-display text-sm font-bold text-white">Architecture</h3>
                <p className="mt-1 text-xs text-[#A1A1AA]">13 Pages → 8 Workspace States</p>
              </div>
              <div className="rounded-xl border border-[#1E1E2A] bg-[#12121C] p-5">
                <Layers className="h-6 w-6 text-[#7C3AED]" />
                <h3 className="mt-3 font-display text-sm font-bold text-white">Deliverables</h3>
                <p className="mt-1 text-xs text-[#A1A1AA]">14 Screens, 40+ Component System</p>
              </div>
              <div className="rounded-xl border border-[#1E1E2A] bg-[#12121C] p-5">
                <Laptop className="h-6 w-6 text-[#7C3AED]" />
                <h3 className="mt-3 font-display text-sm font-bold text-white">Target User</h3>
                <p className="mt-1 text-xs text-[#A1A1AA]">UI/UX Designers & Builders</p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — PERSONAL TRIGGER & PROBLEM */}
        <section className="w-full bg-[#0A0A0F] py-16 border-t border-[#1E1E2A]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
              03 / Trigger & Problem
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white">
              THE HANDOFF BREAKS THE DESIGN LOOP
            </h2>
            <p className="mt-4 text-base text-[#A1A1AA] sm:text-lg leading-relaxed">
              The concept originated from a personal frustration during design-to-code handoffs: designers complete their work visually in Figma, but implementation often introduces developer dependency, loss of visual intent, and repeated communication cycles.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#1E1E2A] bg-[#12121C] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#7C3AED]">01</span>
                <h3 className="mt-2 font-display text-base font-bold text-white">USER PROBLEM</h3>
                <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                  Designers can lose control of their visual intent during manual developer implementation.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1E1E2A] bg-[#12121C] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#7C3AED]">02</span>
                <h3 className="mt-2 font-display text-base font-bold text-white">PRODUCT PROBLEM</h3>
                <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                  Analyzed code-generation tools (Copilot, Cursor, v0, Bolt) begin primarily from text or code rather than visual artifacts.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1E1E2A] bg-[#12121C] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#7C3AED]">03</span>
                <h3 className="mt-2 font-display text-base font-bold text-white">WORKFLOW PROBLEM</h3>
                <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                  Small design tweaks require repeated handoff communication and slow feedback loops.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — PRODUCT GAP & DISCOVERY */}
        <section className="w-full bg-[#0E0E14] py-16 border-t border-[#1E1E2A]">
          <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
              04 / Product Gap
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
              TEXT/CODE-FIRST vs FIGMA-FIRST
            </h2>
            <div className="mt-8 rounded-2xl border border-[#1E1E2A] bg-[#12121C] p-8 text-left">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="border-r-0 md:border-r border-[#1E1E2A] pr-0 md:pr-6">
                  <span className="text-xs font-bold uppercase text-[#71717A]">CONVENTIONAL TOOLS (Copilot, v0, Bolt)</span>
                  <p className="mt-2 font-display text-base font-bold text-white">TEXT / CODE → GENERATION → REVIEW</p>
                  <p className="mt-2 text-xs text-[#A1A1AA]">Requires designers to translate visual layouts back into text prompts or code syntax.</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-[#7C3AED]">VOIDCODE CONCEPT</span>
                  <p className="mt-2 font-display text-base font-bold text-white">FIGMA FRAME → AI → PROMPT REFINE → CODE</p>
                  <p className="mt-2 text-xs text-[#A1A1AA]">Begins directly with the designer's existing visual Figma frame as the source of truth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — CONSTRAINTS & EVIDENCE BOUNDARIES */}
        <section className="w-full bg-[#0A0A0F] py-16 border-t border-[#1E1E2A]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
              05 / Audit & Boundaries
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white">
              KNOWN, UNKNOWN & DESIGN ASSUMPTIONS
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#1E1E2A] bg-[#12121C] p-6">
                <CheckCircle2 className="h-5 w-5 text-[#7C3AED]" />
                <h3 className="mt-3 font-display text-base font-bold text-white">KNOWN FACTS</h3>
                <ul className="mt-3 space-y-2 text-xs text-[#A1A1AA]">
                  <li>• Designers start in Figma.</li>
                  <li>• Traditional handoff creates friction.</li>
                  <li>• Code output requires visual preview.</li>
                  <li>• Workspace needs persistent controls.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#1E1E2A] bg-[#12121C] p-6">
                <HelpCircle className="h-5 w-5 text-[#7C3AED]" />
                <h3 className="mt-3 font-display text-base font-bold text-white">UNVALIDATED QUESTIONS</h3>
                <ul className="mt-3 space-y-2 text-xs text-[#A1A1AA]">
                  <li>• Preference for prompt vs visual editor?</li>
                  <li>• Export panel slide-in usability?</li>
                  <li>• Designer trust in AI-generated JSX?</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#1E1E2A] bg-[#12121C] p-6">
                <ShieldAlert className="h-5 w-5 text-[#71717A]" />
                <h3 className="mt-3 font-display text-base font-bold text-white">CONCEPT BOUNDARY</h3>
                <p className="mt-3 text-xs text-[#A1A1AA] leading-relaxed">
                  VoidCode is a self-initiated concept project. It was not shipped, has no production customers, and contains no formal user research or engineering validation metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 06 — ARCHITECTURAL EVOLUTION (13 PAGES -> 8 STATES) */}
        <section className="w-full bg-[#0E0E14] py-16 border-t border-[#1E1E2A]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
              06 / Architectural Evolution
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white">
              13 PAGES → 8 WORKSPACE STATES
            </h2>
            <p className="mt-4 text-base text-[#A1A1AA] sm:text-lg leading-relaxed">
              The initial sitemap contained 13 separate pages. By questioning the architecture, I eliminated unnecessary page transitions and consolidated the product into an 8-state persistent three-zone workspace.
            </p>

            <div className="mt-8 rounded-2xl border border-[#1E1E2A] bg-[#12121C] p-8">
              <h3 className="font-display text-lg font-bold text-white text-center">
                THREE-ZONE PERSISTENT WORKSPACE
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-[#1E1E2A] bg-[#0A0A0F] p-4 text-center">
                  <span className="text-[10px] font-bold uppercase text-[#7C3AED]">LEFT ZONE</span>
                  <p className="mt-1 font-display text-sm font-bold text-white">Persistent Sidebar</p>
                  <p className="mt-1 text-[11px] text-[#A1A1AA]">Chats, Saved Prompts, Settings</p>
                </div>
                <div className="rounded-xl border border-[#1E1E2A] bg-[#0A0A0F] p-4 text-center">
                  <span className="text-[10px] font-bold uppercase text-[#7C3AED]">CENTER ZONE</span>
                  <p className="mt-1 font-display text-sm font-bold text-white">Active Workspace</p>
                  <p className="mt-1 text-[11px] text-[#A1A1AA]">Figma Import, Prompt Chat & Code</p>
                </div>
                <div className="rounded-xl border border-[#1E1E2A] bg-[#0A0A0F] p-4 text-center">
                  <span className="text-[10px] font-bold uppercase text-[#7C3AED]">RIGHT ZONE</span>
                  <p className="mt-1 font-display text-sm font-bold text-white">Preview & Export</p>
                  <p className="mt-1 text-[11px] text-[#A1A1AA]">Live Rendering & Slide-in Panel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — KEY DESIGN DECISIONS */}
        <section className="w-full bg-[#0A0A0F] py-16 border-t border-[#1E1E2A]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
              07 / Key Design Decisions
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white">
              DECISIONS THAT SHAPED THE WORKSPACE
            </h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-[#1E1E2A] bg-[#12121C] p-6">
                <span className="text-xs font-bold uppercase text-[#7C3AED]">DECISION 01</span>
                <h3 className="mt-1 font-display text-lg font-bold text-white">Chat as Core Interaction Model</h3>
                <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                  Instead of multi-step upload pages, chat serves as the primary workspace where users import Figma frames, generate code, and prompt refinements without page navigation.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1E1E2A] bg-[#12121C] p-6">
                <span className="text-xs font-bold uppercase text-[#7C3AED]">DECISION 02</span>
                <h3 className="mt-1 font-display text-lg font-bold text-white">Removal of the Dashboard Page</h3>
                <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                  A separate dashboard added another page layer without sufficient value. Removing it allowed users to land directly in their active working environment.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1E1E2A] bg-[#12121C] p-6">
                <span className="text-xs font-bold uppercase text-[#7C3AED]">DECISION 03</span>
                <h3 className="mt-1 font-display text-lg font-bold text-white">Right-Side Slide-In Export Panel</h3>
                <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                  Modals block workspace context. Moving export options to a slide-in right panel keeps generated code visible while selecting React, HTML/CSS, or Tailwind export settings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10 — FINAL EXPERIENCE SHOWCASE */}
        <section className="w-full bg-[#0E0E14] py-20 border-t border-[#1E1E2A]">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
                10 / Final Experience
              </span>
              <h2 className="mt-2 font-display text-4xl font-extrabold text-white">
                THE VOIDCODE INTERFACE SHOWCASE
              </h2>
              <p className="mt-2 text-base text-[#A1A1AA]">
                14-screen desktop dark-mode design-to-code workspace system.
              </p>
            </div>

            {/* SCREEN 01: INITIAL CHAT & WELCOME */}
            <div className="mt-16 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#7C3AED]">01</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Chat Welcome & Figma Import State
                </h3>
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#1E1E2A] shadow-2xl">
                <Image
                  src="/assets/projects/voidcode/initial chat.png"
                  alt="VoidCode Initial Chat Welcome State"
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* SCREEN 02: CODE GENERATION & LIVE PREVIEW */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#7C3AED]">02</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Code Generation & Live Rendering Workspace
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#1E1E2A]">
                  <Image
                    src="/assets/projects/voidcode/code page.png"
                    alt="VoidCode Code Page Interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#1E1E2A]">
                  <Image
                    src="/assets/projects/voidcode/code editor page.png"
                    alt="VoidCode Code Editor Live Preview"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* SCREEN 03: EXPORT PANEL & PROMPT LIBRARY */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#7C3AED]">03</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Slide-in Export Panel & Saved Prompt Sidebar
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#1E1E2A]">
                  <Image
                    src="/assets/projects/voidcode/export2.png"
                    alt="VoidCode Slide-in Export Panel"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#1E1E2A]">
                  <Image
                    src="/assets/projects/voidcode/prompt extraction 1.png"
                    alt="VoidCode Prompt Extraction Sidebar"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11 — 40+ COMPONENT SYSTEM */}
        <section className="w-full bg-[#0A0A0F] py-16 border-t border-[#1E1E2A]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
              11 / System Thinking
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white">
              40+ COMPONENT DESIGN SYSTEM
            </h2>
            <p className="mt-4 text-base text-[#A1A1AA] sm:text-lg leading-relaxed">
              VoidCode required defining AI-native components—including prompt input bars, code blocks, suggestion chips, streaming text states, and copilot panels—organized into a 40+ component design system in Figma.
            </p>
          </div>
        </section>

        {/* 13 — LEARNINGS & CAPABILITY */}
        <section className="w-full bg-[#0E0E14] py-16 border-t border-[#1E1E2A]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
              13 / Learnings & Reflection
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white">
              THE BEST PRODUCT DECISIONS WERE REMOVALS
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-[#1E1E2A] bg-[#12121C] p-6">
                <CheckCircle2 className="h-5 w-5 text-[#7C3AED]" />
                <h3 className="mt-3 font-display text-base font-bold text-white">
                  Simplification over accumulation.
                </h3>
                <p className="mt-1 text-xs text-[#A1A1AA]">
                  Removing the separate dashboard page and consolidating navigation into a persistent 3-zone workspace reduced unnecessary cognitive transitions.
                </p>
              </div>

              <div className="rounded-xl border border-[#1E1E2A] bg-[#12121C] p-6">
                <CheckCircle2 className="h-5 w-5 text-[#7C3AED]" />
                <h3 className="mt-3 font-display text-base font-bold text-white">
                  Fix foundations before polishing.
                </h3>
                <p className="mt-1 text-xs text-[#A1A1AA]">
                  Returning to mid-fidelity after early visual feedback prevented structural flaws from polluting the final high-fidelity system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 14 — FINAL REFLECTION & NEXT PROJECT */}
        <section className="w-full bg-[#0A0A0F] py-20 text-white border-t border-[#1E1E2A]">
          <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7C3AED]">
              14 / Final Reflection
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl text-white">
              "THE PRODUCT BECAME SIMPLER BY REMOVING THINGS."
            </h2>
            <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto">
              VoidCode taught me that product design isn't always about adding capability. Sometimes the strongest decision is removing the page, moving the feature into the sidebar, or reducing the number of steps between intent and outcome.
            </p>

            <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-[#1E1E2A] pt-8 sm:flex-row sm:space-y-0">
              <Link
                href="/projects/corex-ai"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#71717A] transition-colors hover:text-[#7C3AED]"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>← Previous: CoreX AI</span>
              </Link>

              <Link
                href="/projects/cybershield"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#7C3AED] transition-colors hover:underline"
              >
                <span>Next Project: CyberShield →</span>
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
