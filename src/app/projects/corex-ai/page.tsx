'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Layers,
  Sparkles,
  Tag,
  CheckCircle2,
  Sliders,
  ShieldAlert,
  HelpCircle,
  Code,
  Lock,
  Cpu,
  Layout,
  Clock,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CoreXAICaseStudy() {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const prototypeUrl = "https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=396-178&t=9nFiGDf3QFjavorE-1&scaling=min-zoom&content-scaling=fixed&page-id=295%3A231";

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
              03 / 08 · Case Study
            </div>
          </div>
        </section>

        {/* 01 — HERO */}
        <section className="w-full bg-[#F7F5F0] px-6 pt-12 pb-16 md:px-12 md:pt-16 lg:px-16 lg:pt-20">
          <div className="mx-auto max-w-6xl">
            <motion.div initial="hidden" animate="visible" variants={itemVariants} className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
                01 / Hero · AI Product & System Thinking
              </span>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl">
                COREX AI
              </h1>
              <p className="mt-2 font-display text-xl font-bold text-[#FF572F] sm:text-2xl">
                AI SaaS / AI Workspace Platform
              </p>
              <p className="mt-4 text-lg text-[#5F5F5F] sm:text-xl leading-relaxed max-w-3xl">
                "Designing an AI workspace that turns complex AI capabilities into a structured product experience."
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
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">2025</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Role</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Product Designer · AI Concept</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Platform</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Desktop AI SaaS</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Tools</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Figma · Claude AI · ChatGPT Pro</p>
              </div>
            </motion.div>

            {/* HERO VISUAL SHOWCASE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 relative w-full overflow-hidden rounded-3xl border border-[#262626] bg-[#111111] p-4 sm:p-8 shadow-2xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#262626]">
                <Image
                  src="/assets/projects/corex-hero.png"
                  alt="CoreX AI Case Study Cover"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#262626] pt-6 text-white">
                <span className="text-xs text-[#8A8A8A]">
                  AI Productivity Workspace · Multi-Thread Conversation & Prompt UX
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
              CoreX AI is a dark-themed productivity workspace that structures conversational AI interactions into organized project threads, customizable prompt tags, and accessible chat overlays.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <Bot className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Focus</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">AI Conversational & Workspace UX</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <Tag className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Feature</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Prompt Tagging & Organization</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <Layers className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Deliverables</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">12 Screens, 30+ Component UI System</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <Code className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Handoff</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Component Specs & Tokens</p>
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
              WHY THIS PRODUCT NEEDED STRUCTURE
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              As AI models proliferate, users struggle with scattered chat threads, lost prompt contexts, unorganized conversation histories, and lack of visual structure. CoreX AI was designed to move conversational AI from simple text chatboxes toward a structured productivity workspace with tag organization, active chat overlays, workspace settings, and multi-thread conversation management.
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
              PRODUCT PROBLEM → USER PROBLEM → DESIGN PROBLEM
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">01</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">PROMPT FRAGMENTING</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Users lose track of past effective prompts and contextual instructions across multiple chat windows.
                </p>
                <div className="mt-4 border-t border-[#E5E1DA] pt-3 text-[11px] font-semibold text-[#111111]">
                  → Design Response: Integrated prompt tag management architecture and category overlays.
                </div>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">02</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">SIDEBAR CLUTTER</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Unstructured linear conversation lists make retrieving historical project threads tedious.
                </p>
                <div className="mt-4 border-t border-[#E5E1DA] pt-3 text-[11px] font-semibold text-[#111111]">
                  → Design Response: Categorized workspace project folders and search filters.
                </div>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">03</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">CONTEXT SWITCHING</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Navigating away from active work to change model parameters breaks creative focus.
                </p>
                <div className="mt-4 border-t border-[#E5E1DA] pt-3 text-[11px] font-semibold text-[#111111]">
                  → Design Response: Collapsible chat overlays and instant parameter setting panels.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — CONSTRAINTS & 06 — KNOWN / UNKNOWN / ASSUMPTIONS */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              05 & 06 / Scope & Audit
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              KNOWN, UNKNOWN & DESIGN ASSUMPTIONS
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">KNOWN FACTS</h3>
                <ul className="mt-3 space-y-2 text-xs text-[#5F5F5F]">
                  <li>• Workspace requires multi-thread handling.</li>
                  <li>• Prompts need categorization tags.</li>
                  <li>• High contrast dark UI aids focus.</li>
                  <li>• Handoff requires 30+ UI components.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
                <HelpCircle className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">UNVALIDATED QUESTIONS</h3>
                <ul className="mt-3 space-y-2 text-xs text-[#5F5F5F]">
                  <li>• Optimal tag limit per conversation?</li>
                  <li>• Preferred overlay trigger shortcuts?</li>
                  <li>• Multi-modal input placement?</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
                <ShieldAlert className="h-5 w-5 text-[#8A8A8A]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">TRANSPARENT BOUNDARY</h3>
                <p className="mt-3 text-xs text-[#5F5F5F] leading-relaxed">
                  User-validation evidence and quantitative A/B testing metrics are not currently included in the available case-study assets. This project represents a product design and system exploration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — MY ROLE & 08 — DISCOVERY */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              07 & 08 / Ownership & Discovery
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              UNDERSTANDING AI WORKSPACE PARADIGMS
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              Analyzed AI workspace paradigms (ChatGPT, Claude, Perplexity, Cursor) focusing on sidebar IA, prompt library organization, tag management, and active chat overlay states. Claude AI and ChatGPT Pro were used as supporting tools for prompt refinement and structural exploration.
            </p>
          </div>
        </section>

        {/* 09 — KEY INSIGHTS */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              09 / Key Insights
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              INSIGHTS → DESIGN RESPONSES
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Insight 01</span>
                <h3 className="mt-2 font-display text-lg font-bold text-[#111111]">Tags replace search guesswork.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  Categorizing prompts with visual tags enables one-click filtering for specific tasks.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Insight 02</span>
                <h3 className="mt-2 font-display text-lg font-bold text-[#111111]">Overlays preserve workflow context.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  Quick AI overlays allow asking questions without abandoning the primary workspace screen.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">Insight 03</span>
                <h3 className="mt-2 font-display text-lg font-bold text-[#111111]">High contrast aids focus.</h3>
                <p className="mt-2 text-xs text-[#5F5F5F]">
                  Dark high-contrast theme reduces visual fatigue during extended AI exploration sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10 — AI + HUMAN CONTROL & 11 — FINAL EXPERIENCE SHOWCASE */}
        <section className="w-full bg-[#111111] py-20 text-white border-t border-[#262626]">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
                10 & 11 / Product Showcase
              </span>
              <h2 className="mt-2 font-display text-4xl font-extrabold text-white">
                THE COREX AI INTERFACE SHOWCASE
              </h2>
              <p className="mt-2 text-base text-[#8A8A8A]">
                High-fidelity 12-screen dark-mode desktop AI workspace system.
              </p>
            </div>

            {/* SCREEN 01: WORKSPACE OVERVIEW */}
            <div className="mt-16 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">01</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Workspace Overview & Conversation Dashboard
                </h3>
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#262626] shadow-2xl">
                <Image
                  src="/assets/projects/corex-ai/workspace.png"
                  alt="CoreX AI Workspace Overview Screen"
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* SCREEN 02: ACTIVE CHAT & OVERLAY */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">02</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Active AI Chat & Collapsible Chat Overlay
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/corex-ai/active chat.png"
                    alt="CoreX AI Active Chat Interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/corex-ai/chat overlay.png"
                    alt="CoreX AI Chat Overlay Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* SCREEN 03: TAGS & SETTINGS */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">03</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Prompt Tag Architecture & Workspace Settings
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/corex-ai/tags.png"
                    alt="CoreX AI Tag Management Interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/corex-ai/setting page.png"
                    alt="CoreX AI Workspace Settings Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12 — DESIGN SYSTEM & DEVELOPER HANDOFF */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              12 / System & Handoff
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              30+ COMPONENT DESIGN SYSTEM & HANDOFF
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              CoreX AI was developed with a 30+ component design system including button states, prompt tag pills, conversation cards, modal overlays, and developer specifications to ensure consistency across the 12 desktop screens.
            </p>
          </div>
        </section>

        {/* 13 — LEARNINGS & CAPABILITY */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              13 / Reflections
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              WHAT COREX AI CHANGED IN MY THINKING
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-[#E5E1DA] bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">
                  AI products require interaction structure.
                </h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  Moving beyond simple chatboxes requires designing clear navigation, prompt tagging, and context overlays.
                </p>
              </div>

              <div className="rounded-xl border border-[#E5E1DA] bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">
                  Human control must remain central.
                </h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  AI tools accelerate exploration, but human design judgment guides information architecture and usability decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 14 — FINAL REFLECTION & NEXT PROJECT */}
        <section className="w-full bg-[#111111] py-20 text-white border-t border-[#262626]">
          <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
              14 / Final Reflection
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl text-white">
              "DESIGNING AI TOOLS IS ABOUT ORGANIZING HUMAN THOUGHT AND MODEL CAPABILITIES."
            </h2>
            <p className="mt-4 text-base text-[#8A8A8A] leading-relaxed max-w-2xl mx-auto">
              CoreX AI pushed my thinking beyond individual screens toward how an AI product is structured, how users interact with intelligent systems, and how a design system allows that experience to scale.
            </p>

            <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-[#262626] pt-8 sm:flex-row sm:space-y-0">
              <Link
                href="/projects/cheezycrust"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#8A8A8A] transition-colors hover:text-[#FF572F]"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>← Previous: CheezyCrust</span>
              </Link>

              <Link
                href="/projects/voidcode"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#FF572F] transition-colors hover:underline"
              >
                <span>Next Project: VoidCode →</span>
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
