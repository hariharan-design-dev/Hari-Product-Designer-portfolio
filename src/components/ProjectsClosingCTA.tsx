'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectsClosingCTA() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 border-t border-[#E5E1DA]">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF572F]">
            Product Case Studies
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[#111111] sm:text-4xl md:text-5xl">
            Want to see how I think?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
            Explore the decisions, iterations and product thinking behind the work.
          </p>

          <div className="pt-4">
            <Link
              href="/projects/driveportz"
              className="group inline-flex items-center space-x-3 rounded-xl bg-[#FF572F] px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#E04722] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F] focus-visible:ring-offset-2"
            >
              <span>Explore Featured Case Study</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
