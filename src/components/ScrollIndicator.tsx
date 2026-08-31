'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 pt-12 pb-4">
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8A8A8A]">
        Scroll to Explore
      </span>
      <div className="relative flex flex-col items-center">
        {/* Minimal Mouse SVG outline */}
        <div className="flex h-7 w-4 justify-center rounded-full border border-[#8A8A8A]/60 pt-1">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-0.5 rounded-full bg-[#FF572F]"
          />
        </div>
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        >
          <ArrowDown className="mt-1 h-3 w-3 text-[#FF572F]" />
        </motion.div>
      </div>
    </div>
  );
}
