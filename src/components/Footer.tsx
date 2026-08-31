'use client';

import React from 'react';
import Link from 'next/link';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/tokens';
import ContactCTA from './ContactCTA';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white">
      {/* CONTACT CTA SECTION */}
      <ContactCTA />

      {/* FOOTER BOTTOM BAR */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* SEPARATOR */}
        <div className="w-full h-[1px] bg-[#262626]" />

        <div className="flex flex-col items-center justify-between space-y-6 py-8 md:flex-row md:space-y-0">
          {/* NAME LOGO */}
          <div className="text-lg font-bold font-display tracking-tight text-white">
            <span>Hari Haran</span>
          </div>

          {/* QUICK NAVIGATION */}
          <nav className="flex flex-wrap justify-center space-x-6 text-xs text-[#8A8A8A]" aria-label="Footer Navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-[#FF572F]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* SOCIAL & RESUME */}
          <div className="flex items-center space-x-5 text-xs text-[#8A8A8A]">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="transition-colors hover:text-[#FF572F]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/assets/documents/resume.pdf"
              download="Hari_Haran_Product_Designer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF572F] font-semibold transition-colors hover:underline"
            >
              Resume ↗
            </a>
          </div>
        </div>

        {/* COPYRIGHT LINE */}
        <div className="border-t border-[#262626] py-6 text-center text-xs text-[#5F5F5F]">
          <p>© 2026 Hari Haran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
