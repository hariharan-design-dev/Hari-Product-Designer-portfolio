'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function JourneyApproach() {
  const steps = [
    {
      step: '01',
      title: 'UNDERSTAND',
      desc: 'Define client & user problem, business constraints, and core objectives.',
    },
    {
      step: '02',
      title: 'STRUCTURE',
      desc: 'Map out information architecture, user flows, and key interactions.',
    },
    {
      step: '03',
      title: 'EXPLORE',
      desc: 'Leverage AI prompting and rapid wireframing to test multiple concepts fast.',
    },
    {
      step: '04',
      title: 'DESIGN',
      desc: 'Craft high-fidelity visual interfaces, typography, tokens, and design systems.',
    },
    {
      step: '05',
      title: 'VALIDATE',
      desc: 'Build interactive prototypes and validate workflow clarity with stakeholders.',
    },
    {
      step: '06',
      title: 'BUILD',
      desc: 'Use AI development tools and frontend code to bring design to working software.',
    },
    {
      step: '07',
      title: 'REFINE',
      desc: 'Iterate based on feedback, edge cases, responsiveness, and performance.',
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
          className="mb-14 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
            Product Mindset
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111111] sm:text-4xl">
            How I Approach a Product
          </h2>
          <p className="mt-2 text-sm text-[#5F5F5F]">
            My general working framework for transforming ideas into functional digital products.
          </p>
        </motion.div>

        {/* 7-STEP VERTICAL TIMELINE / PROCESS */}
        <div className="relative border-l-2 border-[#FF572F]/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
          {steps.map((st, idx) => (
            <motion.div
              key={st.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative"
            >
              {/* ACCENT NODE DOT */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#FF572F] bg-[#F7F5F0]">
                <div className="h-2 w-2 rounded-full bg-[#FF572F]" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                <span className="font-display text-sm font-black text-[#FF572F]">
                  STEP {st.step}
                </span>
                <h3 className="font-display text-lg font-bold text-[#111111]">
                  {st.title}
                </h3>
              </div>
              <p className="mt-1 text-sm text-[#5F5F5F] leading-relaxed max-w-xl">
                {st.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
