'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '@/lib/tokens';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F5F0]/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        {/* LOGO */}
        <Link
          href="/"
          className="group text-xl font-extrabold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F] rounded-md px-1 py-0.5"
          aria-label="Hari Haran Portfolio Home"
        >
          <span className="text-[#111111] font-display">HARI</span>{' '}
          <span className="text-[#FF572F] font-display">HARAN</span>
        </Link>

        {/* CENTER NAVIGATION - DESKTOP */}
        <nav className="hidden items-center space-x-8 md:flex" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F] rounded-sm py-1 px-1.5 ${
                  isActive
                    ? 'text-[#111111] font-semibold'
                    : 'text-[#5F5F5F] hover:text-[#FF572F]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FF572F]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT - RESUME BUTTON */}
        <div className="hidden items-center md:flex">
          <a
            href="/assets/documents/resume.pdf"
            download="Hari_Haran_Product_Designer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 rounded-full bg-[#FF572F] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-[#E04722] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F] focus-visible:ring-offset-2"
          >
            <span>Resume</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-[#111111] hover:bg-[#E5E1DA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F] md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-[#E5E1DA] bg-[#F7F5F0] px-6 py-6 md:hidden"
          >
            <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium transition-colors ${
                      isActive ? 'text-[#FF572F] font-semibold' : 'text-[#111111] hover:text-[#FF572F]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <a
                  href="/assets/documents/resume.pdf"
                  download="Hari_Haran_Product_Designer_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center space-x-2 rounded-full bg-[#FF572F] px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white"
                >
                  <span>Resume</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
