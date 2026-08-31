'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function JourneyCapabilities() {
  const capabilityGroups = [
    {
      title: 'PRODUCT DESIGN',
      skills: [
        'UX thinking',
        'Information architecture',
        'User flows',
        'Wireframing',
        'Prototyping',
        'UI design',
        'Design systems',
      ],
    },
    {
      title: 'VISUAL DESIGN',
      skills: [
        'Visual hierarchy',
        'Typography',
        'Branding & identity',
        'Composition',
        'Communication design',
      ],
    },
    {
      title: 'AI-ASSISTED WORKFLOW',
      skills: [
        'AI prompting & ideation',
        'AI-assisted UI exploration',
        'Rapid prototyping',
        'Design-to-code workflows',
        'Workflow automation',
      ],
    },
    {
      title: 'TECHNOLOGY & CODE',
      skills: [
        'HTML5 & CSS3',
        'JavaScript & TypeScript',
        'Python',
        'Modern frontend (React / Next.js)',
        'AI development tools (Antigravity, Codex)',
      ],
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 border-t border-[#E5E1DA]">
      <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
            Skills & Capabilities
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111] sm:text-4xl">
            What I Work With
          </h2>
          <p className="mt-2 text-sm text-[#5F5F5F]">
            A practical grouping of my design thinking, visual craft, AI tools, and technical capabilities.
          </p>
        </motion.div>

        {/* 4 GROUPS GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-2xl border border-[#E5E1DA] bg-white p-6 shadow-sm"
            >
              <h3 className="border-b border-[#E5E1DA] pb-3 font-display text-sm font-extrabold tracking-wider text-[#FF572F]">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-[#111111] font-medium">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF572F]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
