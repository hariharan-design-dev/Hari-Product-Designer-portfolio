'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  ShieldAlert,
  Activity,
  Lock,
  Cpu,
  Layers,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Code,
  Filter,
  Eye,
  RefreshCw,
  Server
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CyberShieldCaseStudy() {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const prototypeUrl = "https://www.figma.com/proto/4EP68lwl1n3F8lhaPb8nAr/hari-projects?node-id=518-109&t=V26aPcLW0IL1upYB-1&scaling=min-zoom&content-scaling=fixed&page-id=345%3A107";
  const liveSiteUrl = "https://cyber-shield-ai-six.vercel.app/";

  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F17] text-white">
      {/* GLOBAL NAVBAR */}
      <Navbar />

      <main className="flex-grow">
        {/* TOP BREADCRUMB & CASE STUDY NAV BAR */}
        <section className="w-full border-b border-[#1E2638] bg-[#0E1422] px-6 py-4 md:px-12 lg:px-16">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#94A3B8] transition-colors hover:text-[#FF572F]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Projects</span>
            </Link>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">
              05 / 08 · Case Study
            </div>
          </div>
        </section>

        {/* 01 — HERO */}
        <section className="w-full bg-[#0B0F17] px-6 pt-12 pb-16 md:px-12 md:pt-16 lg:px-16 lg:pt-20">
          <div className="mx-auto max-w-6xl">
            <motion.div initial="hidden" animate="visible" variants={itemVariants} className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
                01 / Hero · Network Security Product & Implementation
              </span>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                CYBERSHIELD
              </h1>
              <p className="mt-2 font-display text-xl font-bold text-[#FF572F] sm:text-2xl">
                AI-Enhanced Network Security Platform
              </p>
              <p className="mt-4 text-lg text-[#94A3B8] sm:text-xl leading-relaxed max-w-3xl">
                "Designing a security experience that turns complex network activity into signals people can investigate and understand."
              </p>
            </motion.div>

            {/* METADATA STRIP */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-[#1E2638] bg-[#111827] p-6 sm:grid-cols-4 md:gap-8"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Year</span>
                <p className="mt-1 font-display text-sm font-bold text-white">2023 – 2024</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Role</span>
                <p className="mt-1 font-display text-sm font-bold text-white">Product Designer & Frontend Implementer</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Status</span>
                <p className="mt-1 font-display text-sm font-bold text-white">Live Functional Product</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Tools</span>
                <p className="mt-1 font-display text-xs font-bold text-white">ChatGPT · Gemini · Claude · Figma · Antigravity</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Tech Stack</span>
                <p className="mt-1 font-display text-xs font-bold text-white">HTML · CSS · JavaScript</p>
              </div>
            </motion.div>

            {/* HERO VISUAL SHOWCASE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 relative w-full overflow-hidden rounded-3xl border border-[#1E2638] bg-[#111827] p-4 sm:p-8 shadow-2xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#1E2638]">
                <Image
                  src="/assets/projects/cybershield-hero.png"
                  alt="CyberShield Pro Case Study Cover"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#1E2638] pt-4 text-xs text-[#64748B]">
                <span>CyberShield Security Operations Dashboard · Real-Time Intrusion Monitoring</span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rounded-xl bg-[#FF572F] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#E04722]"
                  >
                    <span>View Prototype ↗</span>
                  </a>
                  <a
                    href={liveSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rounded-xl border border-[#38BDF8] bg-[#0F172A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#38BDF8] transition-all hover:bg-[#38BDF8] hover:text-[#0F172A]"
                  >
                    <span>View Live Site ↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 02 — PROJECT SNAPSHOT */}
        <section className="w-full border-t border-[#1E2638] bg-[#0E1422] py-16">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              02 / Snapshot
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
              THE PROJECT IN ONE VIEW
            </h2>
            <p className="mt-4 text-base text-[#94A3B8] sm:text-lg leading-relaxed">
              CyberShield is a real-time intrusion detection system designed to monitor network traffic and identify known attack patterns. CyberShield Pro extends this foundation with AI-based LSTM behavioral anomaly detection and multi-layer correlation.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-[#1E2638] bg-[#111827] p-5">
                <ShieldAlert className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-white">Detection</h3>
                <p className="mt-1 text-xs text-[#94A3B8]">Rule-Based IDS + LSTM Behavioral Anomaly</p>
              </div>
              <div className="rounded-xl border border-[#1E2638] bg-[#111827] p-5">
                <Filter className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-white">Noise Control</h3>
                <p className="mt-1 text-xs text-[#94A3B8]">Time-Window Aggregation & Grouping</p>
              </div>
              <div className="rounded-xl border border-[#1E2638] bg-[#111827] p-5">
                <Code className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-white">Implementation</h3>
                <p className="mt-1 text-xs text-[#94A3B8]">Frontend HTML, CSS, JS Implementation</p>
              </div>
              <div className="rounded-xl border border-[#1E2638] bg-[#111827] p-5">
                <RefreshCw className="h-6 w-6 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-sm font-bold text-white">Session Control</h3>
                <p className="mt-1 text-xs text-[#94A3B8]">Reset Session Memory with Forensic Log Preservation</p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — CONTEXT & THE PROBLEM */}
        <section className="w-full bg-[#0B0F17] py-16 border-t border-[#1E2638]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              03 / Context & Problem
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white">
              SECURITY SYSTEMS SEE A LOT. USERS NEED TO SEE WHAT MATTERS.
            </h2>
            <p className="mt-4 text-base text-[#94A3B8] sm:text-lg leading-relaxed">
              Network monitoring engines generate thousands of raw packet events per second. The primary product design challenge was to turn raw technical network events into a structured, prioritize-first investigation workflow without hiding the critical evidence security analysts require.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#1E2638] bg-[#111827] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">01</span>
                <h3 className="mt-2 font-display text-base font-bold text-white">RAW DATA OVERLOAD</h3>
                <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                  Raw packet captures produce dense event logs that lack visual hierarchy and prioritization.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1E2638] bg-[#111827] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">02</span>
                <h3 className="mt-2 font-display text-base font-bold text-white">ALERT NOISE</h3>
                <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                  Repeated port scans and duplicate events flood alert lists, obscuring high-priority threats.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1E2638] bg-[#111827] p-6 shadow-sm">
                <span className="font-display text-2xl font-black text-[#FF572F]">03</span>
                <h3 className="mt-2 font-display text-base font-bold text-white">INVESTIGATION CONTEXT</h3>
                <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                  When an alert triggers, operators need instant clarity on Source IP, Destination IP, Threat Type, and Confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — TECHNICAL ARCHITECTURE & PIPELINE */}
        <section className="w-full bg-[#0E1422] py-16 border-t border-[#1E2638]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              04 / Technical Architecture
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white">
              TECHNICAL PIPELINE → INFORMATION ARCHITECTURE
            </h2>
            <p className="mt-4 text-base text-[#94A3B8] sm:text-lg leading-relaxed">
              Understanding how backend packet capture translates into user-facing UI screens:
            </p>

            <div className="mt-8 rounded-2xl border border-[#1E2638] bg-[#111827] p-8 text-center">
              <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-2 text-xs">
                <div className="rounded-xl border border-[#1E2638] bg-[#0B0F17] p-3 w-full">
                  <span className="font-bold text-[#FF572F]">01 Packet Capture</span>
                  <p className="mt-1 text-[11px] text-[#94A3B8]">Npcap / Raw Packets</p>
                </div>
                <div className="hidden md:block font-bold text-[#FF572F]">→</div>
                <div className="rounded-xl border border-[#1E2638] bg-[#0B0F17] p-3 w-full">
                  <span className="font-bold text-[#FF572F]">02 Rule Engine</span>
                  <p className="mt-1 text-[11px] text-[#94A3B8]">ICMP Flood, Nmap Scan</p>
                </div>
                <div className="hidden md:block font-bold text-[#FF572F]">→</div>
                <div className="rounded-xl border border-[#1E2638] bg-[#0B0F17] p-3 w-full">
                  <span className="font-bold text-[#FF572F]">03 Noise Filter</span>
                  <p className="mt-1 text-[11px] text-[#94A3B8]">Duplicate Aggregation</p>
                </div>
                <div className="hidden md:block font-bold text-[#FF572F]">→</div>
                <div className="rounded-xl border border-[#1E2638] bg-[#0B0F17] p-3 w-full">
                  <span className="font-bold text-[#FF572F]">04 Alert Store</span>
                  <p className="mt-1 text-[11px] text-[#94A3B8]">Forensic Log Records</p>
                </div>
                <div className="hidden md:block font-bold text-[#FF572F]">→</div>
                <div className="rounded-xl border border-[#1E2638] bg-[#0B0F17] p-3 w-full">
                  <span className="font-bold text-[#FF572F]">05 GUI Dashboard</span>
                  <p className="mt-1 text-[11px] text-[#94A3B8]">Investigation UI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — CYBERSHIELD PRO EVOLUTION (3-LAYER DETECTION) */}
        <section className="w-full bg-[#0B0F17] py-16 border-t border-[#1E2638]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              07 / Product Evolution
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white">
              CYBERSHIELD PRO: 3-LAYER THREAT DETECTION
            </h2>
            <p className="mt-4 text-base text-[#94A3B8] sm:text-lg leading-relaxed">
              CyberShield Pro extends rule-based intrusion detection with an LSTM behavioral anomaly model and threat correlation engine:
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#1E2638] bg-[#111827] p-6">
                <span className="text-xs font-bold uppercase text-[#FF572F]">LAYER 01</span>
                <h3 className="mt-2 font-display text-base font-bold text-white">Rule-Based IDS</h3>
                <p className="mt-2 text-xs text-[#94A3B8]">Deterministic signature matching for known attack signatures (Nmap, ICMP flood, suspicious TCP).</p>
              </div>

              <div className="rounded-2xl border border-[#1E2638] bg-[#111827] p-6">
                <span className="text-xs font-bold uppercase text-[#38BDF8]">LAYER 02</span>
                <h3 className="mt-2 font-display text-base font-bold text-white">LSTM AI Behavioral Model</h3>
                <p className="mt-2 text-xs text-[#94A3B8]">Learns normal network flow parameters (duration, packet rate, byte distribution) to flag anomalous deviations.</p>
              </div>

              <div className="rounded-2xl border border-[#1E2638] bg-[#111827] p-6">
                <span className="text-xs font-bold uppercase text-[#10B981]">LAYER 03</span>
                <h3 className="mt-2 font-display text-base font-bold text-white">Correlation Engine</h3>
                <p className="mt-2 text-xs text-[#94A3B8]">Correlates rule hits with behavioral anomaly scores to output confidence levels and Threat Stories.</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#1E2638] bg-[#111827] p-4 text-xs text-[#94A3B8]">
              <span className="font-bold text-white">Technical Boundaries:</span> AI complements the rule engine without replacing signature matches, and operates strictly on flow metadata without inspecting encrypted packet payloads.
            </div>
          </div>
        </section>

        {/* 10 — FINAL EXPERIENCE SHOWCASE */}
        <section className="w-full bg-[#0E1422] py-20 border-t border-[#1E2638]">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
                10 / Final Experience
              </span>
              <h2 className="mt-2 font-display text-4xl font-extrabold text-white">
                THE CYBERSHIELD INTERFACE SHOWCASE
              </h2>
              <p className="mt-2 text-base text-[#94A3B8]">
                High-density 14-screen security monitoring and investigation environment.
              </p>
            </div>

            {/* SCREEN 01: DASHBOARD & MONITORING */}
            <div className="mt-16 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">01</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Security Operations Dashboard & Real-Time Monitor
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#1E2638]">
                  <Image
                    src="/assets/projects/cybershield/cyber shield dashboard.png"
                    alt="CyberShield Main Security Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#1E2638]">
                  <Image
                    src="/assets/projects/cybershield/cybershield monitor.png"
                    alt="CyberShield Real-Time Monitor"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* SCREEN 02: ALERTS & TRAP SYSTEM */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">02</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Alert Prioritization Table & HoneyPot Trap System
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#1E2638]">
                  <Image
                    src="/assets/projects/cybershield/alerts.png"
                    alt="CyberShield Alert Monitoring Table"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#1E2638]">
                  <Image
                    src="/assets/projects/cybershield/cybershield trap system.png"
                    alt="CyberShield Trap System Interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* SCREEN 03: DETECTION ENGINE & FORENSIC LOGS */}
            <div className="mt-20 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-display text-2xl font-black text-[#FF572F]">03</span>
                <h3 className="font-display text-xl font-bold text-white">
                  Detection Engine Configuration & Forensic Logs
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#1E2638]">
                  <Image
                    src="/assets/projects/cybershield/detection engine.png"
                    alt="CyberShield Detection Engine Configuration"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#1E2638]">
                  <Image
                    src="/assets/projects/cybershield/logs.png"
                    alt="CyberShield Forensic Logs Interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12 — VALIDATION & EVIDENCE BOUNDARIES */}
        <section className="w-full bg-[#0B0F17] py-16 border-t border-[#1E2638]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              12 / Audit & Boundaries
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white">
              VALIDATION & EVIDENCE STATUS
            </h2>
            <div className="mt-6 rounded-2xl border border-[#1E2638] bg-[#111827] p-6">
              <div className="flex items-start space-x-3 text-xs text-[#94A3B8]">
                <ShieldAlert className="h-5 w-5 text-[#64748B] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Transparent Disclosure:</span> CyberShield was built and implemented as a functional network security product. Formal SOC analyst user interviews, enterprise deployment analytics, and quantitative false-positive metrics are not included in the project assets.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13 — LEARNINGS & REFLECTION */}
        <section className="w-full bg-[#0E1422] py-16 border-t border-[#1E2638]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
              13 / Learnings
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white">
              WHAT CYBERSHIELD CHANGED IN MY DESIGN THINKING
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-[#1E2638] bg-[#111827] p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-white">
                  Technical pipelines drive UX architecture.
                </h3>
                <p className="mt-1 text-xs text-[#94A3B8]">
                  Understanding how packet capture engines filter duplicates directly informs how alerts are structured in the UI.
                </p>
              </div>

              <div className="rounded-xl border border-[#1E2638] bg-[#111827] p-6">
                <CheckCircle2 className="h-5 w-5 text-[#FF572F]" />
                <h3 className="mt-3 font-display text-base font-bold text-white">
                  Frontend implementation sharpens design.
                </h3>
                <p className="mt-1 text-xs text-[#94A3B8]">
                  Implementing the interface in HTML, CSS, and JS ensures design decisions survive technical constraints.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 14 — FINAL REFLECTION & NEXT PROJECT */}
        <section className="w-full bg-[#0B0F17] py-20 text-white border-t border-[#1E2638]">
          <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
              14 / Final Reflection
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl text-white">
              "THE GOAL ISN'T TO SHOW EVERYTHING. IT IS TO HELP SOMEONE DECIDE WHAT MATTERS."
            </h2>
            <p className="mt-4 text-base text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
              CyberShield taught me that designing complex technical software isn't about hiding complexity. It's about organizing it so users can move quickly from raw signal to clear decision.
            </p>

            <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-[#1E2638] pt-8 sm:flex-row sm:space-y-0">
              <Link
                href="/projects/voidcode"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#64748B] transition-colors hover:text-[#FF572F]"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>← Previous: VoidCode</span>
              </Link>

              <Link
                href="/projects/future-you"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#FF572F] transition-colors hover:underline"
              >
                <span>Next Project: FutureYou →</span>
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
