'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function JourneyClosing() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 border-t border-[#E5E1DA]">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
        {/* WHERE I AM NOW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
            Current Direction
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[#111111] sm:text-4xl md:text-5xl">
            Where I Am Now
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
            I am currently looking for my first opportunity to bring this mix of
            product thinking, design craft, AI workflows and technology into a
            real product team.
          </p>
        </motion.div>

        {/* DIVIDER */}
        <div className="my-14 mx-auto w-24 h-[1px] bg-[#E5E1DA]" />

        {/* SEE WHAT I'VE BUILT CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-6"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A8A8A]">
            See What I've Built
          </span>
          <div>
            <Link
              href="/projects"
              className="group inline-flex items-center space-x-3 rounded-xl bg-[#FF572F] px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#E04722] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F] focus-visible:ring-offset-2"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
