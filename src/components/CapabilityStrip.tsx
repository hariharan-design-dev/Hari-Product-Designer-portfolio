'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CAPABILITY_SIGNALS } from '@/lib/tokens';
import { FolderGit2, Layers, Code2, Target } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';

export default function CapabilityStrip() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'folder':
        return <FolderGit2 className="h-5 w-5 text-[#FF572F]" />;
      case 'layers':
        return <Layers className="h-5 w-5 text-[#FF572F]" />;
      case 'code':
        return <Code2 className="h-5 w-5 text-[#FF572F]" />;
      case 'infinity':
        return <Target className="h-5 w-5 text-[#FF572F]" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* INTRO SENTENCE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center pb-12"
        >
          <p className="font-display text-xl font-medium text-[#111111] sm:text-2xl md:text-3xl">
            Designing with <span className="text-[#FF572F] font-semibold">purpose.</span> Building
            with <span className="text-[#FF572F] font-semibold">impact.</span>
          </p>
        </motion.div>

        {/* DIVIDER LINE */}
        <div className="w-full h-[1px] bg-[#E5E1DA] mb-12" />

        {/* CAPABILITY GRID - 4 COLUMNS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, staggerChildren: 0.1 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
        >
          {CAPABILITY_SIGNALS.map((signal, index) => (
            <div
              key={signal.primaryLabel}
              className={`flex flex-col items-center text-center px-4 ${
                index < CAPABILITY_SIGNALS.length - 1
                  ? 'lg:border-r lg:border-[#E5E1DA]'
                  : ''
              }`}
            >
              {/* ICON */}
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF572F]/10">
                {getIcon(signal.iconName)}
              </div>

              {/* PRIMARY LABEL */}
              <span className="font-display text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
                {signal.primaryLabel}
              </span>

              {/* SUPPORTING LABEL */}
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-[#5F5F5F]">
                {signal.supportingLabel}
              </span>
            </div>
          ))}
        </motion.div>

        {/* SCROLL INDICATOR */}
        <ScrollIndicator />
      </div>
    </section>
  );
}
