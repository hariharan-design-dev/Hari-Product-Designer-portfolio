'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  UserCheck,
  Compass,
  Layers,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Video,
  Heart,
  Target,
  MessageSquare,
  ShieldAlert,
  Flame
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FutureYouCaseStudy() {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const prototypeUrl = "https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=599-306&p=f&t=XKGvRJ5SDjDiA6Dy-1&scaling=scale-down&content-scaling=fixed&page-id=424%3A206&starting-point-node-id=599%3A306";

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
              06 / 08 · Case Study
            </div>
          </div>
        </section>

        {/* 01 — HERO */}
        <section className="w-full bg-[#F7F5F0] px-6 pt-12 pb-16 md:px-12 md:pt-16 lg:px-16 lg:pt-20">
          <div className="mx-auto max-w-6xl">
            <motion.div initial="hidden" animate="visible" variants={itemVariants} className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
                01 / Hero · AI Personal Growth Companion
              </span>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl">
                FUTUREYOU
              </h1>
              <p className="mt-2 font-display text-xl font-bold text-[#FF572F] sm:text-2xl">
                AI-Powered Personal Growth Companion
              </p>
              <p className="mt-4 text-lg text-[#5F5F5F] sm:text-xl leading-relaxed max-w-3xl">
                "Designing an AI experience that makes the future feel personal."
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
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Product Designer / UI/UX Designer</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Status</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Conceptual AI Product Design</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Tools</span>
                <p className="mt-1 font-display text-xs font-bold text-[#111111]">ChatGPT · Claude · Stitch · Figma</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Platform</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Mobile Application</p>
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
                  src="/assets/projects/futureyou-hero.png"
                  alt="FutureYou Case Study Cover"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl border border-[#262626] bg-[#1A1A1A]">
                  <Image
                    src="/assets/projects/futureyou/home screen 2.png"
                    alt="FutureYou Home Screen"
                    fill
                    priority
                    sizes="33vw"
                    className="object-contain object-center"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl border border-[#262626] bg-[#1A1A1A]">
                  <Image
                    src="/assets/projects/futureyou/screen-active-video-call.png"
                    alt="FutureYou Active Video Call Screen"
                    fill
                    priority
                    sizes="33vw"
                    className="object-contain object-center"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl border border-[#262626] bg-[#1A1A1A]">
                  <Image
                    src="/assets/projects/futureyou/ai engineer journey.png"
                    alt="FutureYou Journey Screen"
                    sizes="33vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#262626] pt-6 text-white">
                <span className="text-xs text-[#8A8A8A]">
                  Conversational AI Growth Experience · Interactive Video Call Prototype
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
              FutureYou is an AI-powered personal growth companion that helps people explore their goals, career direction, and future possibilities through conversations with a future version of themselves.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <UserCheck className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Core Concept</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Future-Self Conversational Interaction</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <Target className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Journeys</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Goal-Driven Path Progression</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <MessageSquare className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Onboarding</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Conversational Gathering (MCQ/MSQ)</p>
              </div>
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-5">
                <Video className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-[#111111]">Premium</h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">Interactive Video & Voice Interaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — STARTING POINT & PRODUCT EVOLUTION */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              03 / Product Evolution
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              FROM PREDICTION TO REFLECTION & FEATURE CONSOLIDATION
            </h2>
            <p className="mt-4 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
              The initial exploration began with future prediction and palmistry ideas, but evolved toward meaningful reflection. As multiple feature concepts emerged (Path Analyzer, Career Coach, Simulation Engine), feature overlap was identified and consolidated into one core product experience:
            </p>

            <div className="mt-8 rounded-2xl border border-[#E5E1DA] bg-white p-8">
              <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4 text-center">
                <div className="rounded-xl bg-[#F7F5F0] p-4 border border-[#E5E1DA] w-full">
                  <span className="text-[10px] font-bold uppercase text-[#FF572F]">INITIAL IDEA</span>
                  <p className="mt-1 font-display text-sm font-bold text-[#111111]">Future Prediction</p>
                </div>
                <div className="hidden md:block font-bold text-[#FF572F]">→</div>
                <div className="rounded-xl bg-[#F7F5F0] p-4 border border-[#E5E1DA] w-full">
                  <span className="text-[10px] font-bold uppercase text-[#FF572F]">EXPLORATION</span>
                  <p className="mt-1 font-display text-sm font-bold text-[#111111]">Overlapping Features</p>
                </div>
                <div className="hidden md:block font-bold text-[#FF572F]">→</div>
                <div className="rounded-xl bg-[#F7F5F0] p-4 border border-[#E5E1DA] w-full">
                  <span className="text-[10px] font-bold uppercase text-[#FF572F]">REFINEMENT</span>
                  <p className="mt-1 font-display text-sm font-bold text-[#111111]">Conversation + Journeys</p>
                </div>
                <div className="hidden md:block font-bold text-[#FF572F]">→</div>
                <div className="rounded-xl bg-[#F7F5F0] p-4 border border-[#E5E1DA] w-full">
                  <span className="text-[10px] font-bold uppercase text-[#FF572F]">FINAL DIRECTION</span>
                  <p className="mt-1 font-display text-sm font-bold text-[#111111]">Future Self Companion</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — PROBLEM HYPOTHESIS & PRODUCT GAP */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              04 / Problem Hypothesis
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              PRODUCTIVITY MANAGES TODAY. WHAT ABOUT TOMORROW?
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">01</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">CAREER UNCERTAINTY</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Hypothesis: Users often struggle to connect daily tasks with long-term career aspirations.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">02</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">FORM FRICTION</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Hypothesis: Traditional multi-step forms create high onboarding drop-off before value is experienced.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">03</span>
                <h3 className="mt-2 font-display text-base font-bold text-[#111111]">EMOTIONAL DISTANCE</h3>
                <p className="mt-2 text-xs text-[#5F5F5F] leading-relaxed">
                  Hypothesis: Generic chatbots lack the emotional connection needed for personal growth reflection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 06 — INFORMATION ARCHITECTURE (5 DESTINATIONS) */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              06 / Architecture
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              FIVE DESTINATIONS. ONE CONTINUOUS EXPERIENCE.
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-5">
              <div className="rounded-xl border border-[#E5E1DA] bg-white p-4 text-center">
                <span className="text-[10px] font-bold uppercase text-[#FF572F]">01</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Home</p>
                <p className="mt-1 text-[11px] text-[#5F5F5F]">Re-entry & Goals</p>
              </div>

              <div className="rounded-xl border border-[#E5E1DA] bg-white p-4 text-center">
                <span className="text-[10px] font-bold uppercase text-[#FF572F]">02</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Chat</p>
                <p className="mt-1 text-[11px] text-[#5F5F5F]">Conversations</p>
              </div>

              <div className="rounded-xl border border-[#E5E1DA] bg-white p-4 text-center">
                <span className="text-[10px] font-bold uppercase text-[#FF572F]">03</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Journey</p>
                <p className="mt-1 text-[11px] text-[#5F5F5F]">Goal Paths</p>
              </div>

              <div className="rounded-xl border border-[#E5E1DA] bg-white p-4 text-center">
                <span className="text-[10px] font-bold uppercase text-[#FF572F]">04</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Predictor</p>
                <p className="mt-1 text-[11px] text-[#5F5F5F]">Reflection</p>
              </div>

              <div className="rounded-xl border border-[#E5E1DA] bg-white p-4 text-center">
                <span className="text-[10px] font-bold uppercase text-[#FF572F]">05</span>
                <p className="mt-1 font-display text-sm font-bold text-[#111111]">Settings</p>
                <p className="mt-1 text-[11px] text-[#5F5F5F]">Profile & Account</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10 — FINAL EXPERIENCE SHOWCASE */}
        <section className="w-full bg-[#111111] py-20 text-white border-t border-[#262626]">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
                10 / Experience Showcase
              </span>
              <h2 className="mt-2 font-display text-4xl font-extrabold text-white">
                THE FUTUREYOU PRODUCT EXPERIENCE
              </h2>
              <p className="mt-2 text-base text-[#8A8A8A]">
                High-fidelity mobile personal growth & future-self companion interface system.
              </p>
            </div>

            {/* SCREEN 01: HOME & ACTIVE VIDEO CALL */}
            <div className="mt-16 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">01</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Future-Self Video Interaction & Home Dashboard
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/futureyou/home screen 2.png"
                    alt="FutureYou Home Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/futureyou/screen-active-video-call.png"
                    alt="FutureYou Active Video Call Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/futureyou/video call.png"
                    alt="FutureYou Video Call Interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* SCREEN 02: JOURNEYS */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">02</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Active Goal Journeys (AI Engineer & Personal Growth)
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/futureyou/ai engineer journey.png"
                    alt="FutureYou AI Engineer Journey"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/futureyou/Personal Growth Path journey.png"
                    alt="FutureYou Personal Growth Path Journey"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/futureyou/Relationship journey.png"
                    alt="FutureYou Relationship Journey"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* SCREEN 03: PRICING & CHAT */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">03</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Conversational Onboarding & Premium Membership Strategy
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/futureyou/chat1.png"
                    alt="FutureYou Conversational Onboarding"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/futureyou/futureyou-pricing.png"
                    alt="FutureYou Pricing Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-[#262626]">
                  <Image
                    src="/assets/projects/futureyou/yearly.png"
                    alt="FutureYou Yearly Subscription Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12 — VALIDATION & EVIDENCE BOUNDARIES */}
        <section className="w-full bg-[#F7F5F0] py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              12 / Audit & Boundaries
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              VALIDATION & CONCEPT BOUNDARIES
            </h2>
            <div className="mt-6 rounded-2xl border border-[#E5E1DA] bg-white p-6">
              <div className="flex items-start space-x-3 text-xs text-[#5F5F5F]">
                <ShieldAlert className="h-5 w-5 text-[#8A8A8A] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#111111]">Transparent Disclosure:</span> FutureYou is a conceptual product design project. Formal user research, live production analytics, and quantitative user-testing metrics are omitted in compliance with evidence guidelines.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13 — LEARNINGS & REFLECTION */}
        <section className="w-full bg-white py-16 border-t border-[#E5E1DA]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              13 / Learnings
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111]">
              WHAT FUTUREYOU CHANGED IN MY DESIGN THINKING
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">
                  Feature consolidation over accumulation.
                </h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  Identified overlapping features (Path Analyzer, Career Coach, Simulation) and unified them into a core future-self conversation experience.
                </p>
              </div>

              <div className="rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-[#111111]">
                  Conversational onboarding lowers friction.
                </h3>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  Moving questions into a natural conversation with predefined MCQ/MSQ chips makes profile setup feel intuitive.
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
              "THE PRODUCT HAD TO BECOME CLEAR BEFORE IT COULD BECOME BEAUTIFUL."
            </h2>
            <p className="mt-4 text-base text-[#8A8A8A] leading-relaxed max-w-2xl mx-auto">
              FutureYou taught me that AI products aren't just about output generation. They are about shaping how an interface helps someone reflect on who they want to become.
            </p>

            <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-[#262626] pt-8 sm:flex-row sm:space-y-0">
              <Link
                href="/projects/cyber-shield"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#8A8A8A] transition-colors hover:text-[#FF572F]"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>← Previous: CyberShield</span>
              </Link>

              <Link
                href="/projects/firepos"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#FF572F] transition-colors hover:underline"
              >
                <span>Next Project: FirePOS →</span>
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
