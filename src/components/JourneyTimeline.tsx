'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function JourneyTimeline() {
  const chapters = [
    {
      stepNumber: '01',
      year: '2024',
      title: 'THE FIRST REAL PRODUCT',
      subtitle: 'DrivePortz',
      role: 'Freelance UI/UX Designer · Solo · 2 Weeks · Figma · ChatGPT',
      story:
        'DrivePortz was my first complete end-to-end real-world product design project. This was the point where I moved from designing individual screens toward thinking about a complete product ecosystem.',
      process: [
        'Client problem definition',
        'Market & user research',
        'Information architecture',
        'User flow mapping',
        'Wireframing',
        'UI design & tokens',
        'Design system setup',
        'Interactive prototype',
        'Client review & handoff',
      ],
      learning:
        'I learned that product design is not just about how a screen looks. It is about how the entire experience works together seamlessly.',
      image: '/assets/projects/driveportz-hero.png',
      imageAlt: 'DrivePortz UI Design Thumbnail',
    },
    {
      stepNumber: '02',
      year: '2024–2025',
      title: 'VISUAL COMMUNICATION & LEADERSHIP',
      subtitle: 'CheezyCrust & Scorecraft Club',
      role: 'Graphic Design Head & Food App Mobile Concept',
      story:
        'As Graphic Design Head for Scorecraft Club and designer for CheezyCrust, I strengthened my foundation in visual hierarchy, typography, brand assets, and mobile product presentation.',
      process: [
        'Visual hierarchy & layout',
        'Event branding & identity',
        'Food app mobile UI design',
        'Information architecture',
        'Design team leadership',
        'Mentorship & feedback',
      ],
      learning:
        'Before product design became my primary direction, visual communication taught me how to make complex information understandable and engaging.',
      image: '/assets/projects/cheezycrust-hero.png',
      imageAlt: 'CheezyCrust App Thumbnail',
    },
    {
      stepNumber: '03',
      year: '2025',
      title: 'EXPANDING THE DESIGN FOUNDATION',
      subtitle: 'KARE ACM-W Student Chapter',
      role: 'Student Chapter Design Lead & Workshop Mentor',
      story:
        'Working with the KARE ACM-W Student Chapter allowed me to apply product design, UI/UX, and visual design across organizational events and workshops. I conducted workshops for juniors focused on AI-powered UI/UX design workflows.',
      process: [
        'Organizational UI/UX design',
        'Event experience design',
        'AI + Design workshops',
        'Peer collaboration',
        'Community building',
      ],
      learning:
        'I was no longer only experimenting with design myself. I was beginning to share what I learned with others and inspire the next wave of designers.',
      image: null,
      imageAlt: null,
    },
    {
      stepNumber: '04',
      year: '2025',
      title: 'THE AI SHIFT & WORKSPACE UX',
      subtitle: 'CoreX AI Platform',
      role: 'Workflow Evolution · AI Tools (Stitch, Figma AI, ChatGPT, Antigravity)',
      story:
        'In 2025, I actively integrated AI tools into my design process. CoreX AI explored structured conversation workspaces, prompt UX, and AI-assisted productivity tools.',
      process: [
        'Problem definition',
        'AI-assisted prompting',
        'Rapid UI iteration',
        'Design exploration',
        'Interactive prototyping',
        'Development handoff',
      ],
      learning:
        'AI did not replace design thinking — it amplified speed, curiosity, and my ability to test multiple design solutions in minutes.',
      image: '/assets/projects/corex-hero.png',
      imageAlt: 'CoreX AI Workspace Thumbnail',
    },
    {
      stepNumber: '05',
      year: '2025',
      title: 'AI PRODUCT EXPLORATION',
      subtitle: 'VoidCode, CoreX AI & CyberShield',
      role: 'Product Designer · Design to Technical Implementation',
      story:
        'During this phase, I explored the intersection of AI, design, and code through three distinct products: VoidCode (exploring design & code interaction), CoreX AI (AI-product workflows & IA), and CyberShield (applying product design to cybersecurity as a final-year project).',
      process: [
        'VoidCode: Design-to-code relationship',
        'CoreX AI: AI interface & chat UX',
        'CyberShield: Complex security dashboard',
        'AI tools: Antigravity & Codex integration',
      ],
      learning:
        'CyberShield pushed me from pure UI design into understanding technical architecture and leveraging AI development tools to move design to a working product.',
      image: '/assets/projects/cybershield-hero.png',
      imageAlt: 'CyberShield Pro Dashboard Thumbnail',
    },
    {
      stepNumber: '06',
      year: '2026',
      title: 'FREELANCE PRODUCT WORK',
      subtitle: 'FirePOS & Kanna Pyro Park',
      role: 'Product Designer · Design to Deployment',
      story:
        'Freelance client projects pushed my workflow from visual design into full design-to-deployment. FirePOS focused on complex billing/POS workflows and design systems, while Kanna Pyro Park solved real-world customer and admin e-commerce constraints.',
      process: [
        'Business constraint mapping',
        'Product strategy & UX',
        'Design system architecture',
        'Customer & Admin flows',
        'AI-assisted frontend build',
        'Deployment & handoff',
      ],
      learning:
        'Real client products demand balancing business constraints with user experience and building software that is ready for deployment.',
      image: '/assets/projects/firepos-hero.png',
      imageAlt: 'FirePOS Operational Software Thumbnail',
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-16">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
            Evolution & Growth
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111] sm:text-4xl">
            The Journey Narrative
          </h2>
        </motion.div>

        {/* NARRATIVE CHAPTERS */}
        <div className="flex flex-col space-y-20">
          {chapters.map((ch, idx) => (
            <motion.article
              key={ch.stepNumber}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl border border-[#E5E1DA] bg-white p-8 md:p-12 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              {/* TOP HEADER ROW */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E1DA] pb-6">
                <div className="flex items-center space-x-4">
                  <span className="font-display text-2xl font-black text-[#FF572F]">
                    {ch.stepNumber}
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8A8A8A]">
                      {ch.year}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[#111111] sm:text-2xl">
                      {ch.title}
                    </h3>
                  </div>
                </div>
                <span className="rounded-full bg-[#F7F5F0] px-4 py-1.5 text-xs font-semibold text-[#FF572F] border border-[#E5E1DA]">
                  {ch.subtitle}
                </span>
              </div>

              {/* ROLE & CONTEXT */}
              <div className="pt-4 pb-2 text-xs font-medium uppercase tracking-wider text-[#5F5F5F]">
                {ch.role}
              </div>

              {/* CONTENT GRID */}
              <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className={`flex flex-col space-y-4 ${ch.image ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
                  <p className="text-base text-[#111111] leading-relaxed font-normal">
                    {ch.story}
                  </p>

                  {/* PROCESS STEPS */}
                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8A8A8A]">
                      Key Process & Execution:
                    </span>
                    <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5F5F5F]">
                      {ch.process.map((step) => (
                        <li key={step} className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FF572F]" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* KEY LEARNING HIGHLIGHT */}
                  <div className="mt-4 rounded-xl border-l-4 border-[#FF572F] bg-[#F7F5F0] p-4 text-sm font-medium italic text-[#111111]">
                    "{ch.learning}"
                  </div>
                </div>

                {/* OPTIONAL VISUAL EVIDENCE IMAGE */}
                {ch.image && (
                  <div className="relative flex items-center justify-center lg:col-span-5">
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-[#E5E1DA] bg-[#111111]/5">
                      <Image
                        src={ch.image}
                        alt={ch.imageAlt || ch.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 35vw"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
