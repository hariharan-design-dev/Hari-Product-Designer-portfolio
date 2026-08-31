'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ProjectLinkItem {
  label: string;
  url: string;
  isPrimary?: boolean;
}

export interface ProjectData {
  number: string;
  slug: string;
  name: string;
  year: string;
  type: string;
  role: string;
  timeline?: string;
  tools?: string;
  positioning: string;
  storyHook: string;
  tags: string[];
  heroImage: string | null;
  secondaryImage?: string | null;
  isDarkTheme?: boolean;
  isPlaceholder?: boolean;
  externalLinks?: ProjectLinkItem[];
}

export default function ProjectTrailerCard({ project }: { project: ProjectData }) {
  if (project.isPlaceholder) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl border border-dashed border-[#E5E1DA] bg-white/60 p-8 md:p-12 text-center"
      >
        <span className="font-display text-2xl font-bold text-[#8A8A8A]">
          {project.number}
        </span>
        <h3 className="mt-2 font-display text-2xl font-bold text-[#8A8A8A]">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-[#8A8A8A]">
          Reserved slot for upcoming product project. Details will be published upon release.
        </p>
        <div className="mt-6 inline-flex items-center rounded-full bg-[#F7F5F0] px-4 py-2 text-xs font-semibold text-[#8A8A8A] border border-[#E5E1DA]">
          In Development
        </div>
      </motion.article>
    );
  }

  const isDark = project.isDarkTheme;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
        isDark
          ? 'border-[#262626] bg-[#111111] text-white shadow-xl'
          : 'border-[#E5E1DA] bg-white text-[#111111] shadow-sm hover:shadow-md'
      }`}
    >
      <div className="p-8 md:p-12 lg:p-16">
        
        {/* HEADER METADATA ROW */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-6 border-opacity-20 border-current">
          <div className="flex items-center space-x-4">
            <span
              className={`font-display text-3xl font-black ${
                isDark ? 'text-[#FF572F]' : 'text-[#FF572F]'
              }`}
            >
              {project.number}
            </span>
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-[#8A8A8A]' : 'text-[#5F5F5F]'}`}>
                {project.year} {project.timeline ? `· ${project.timeline}` : ''}
              </span>
              <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                {project.name}
              </h2>
            </div>
          </div>

          {/* PROJECT TYPE PILL */}
          <span
            className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border ${
              isDark
                ? 'border-[#333333] bg-[#1A1A1A] text-[#FF572F]'
                : 'border-[#E5E1DA] bg-[#F7F5F0] text-[#FF572F]'
            }`}
          >
            {project.type}
          </span>
        </div>

        {/* ROLE & POSITIONING SUMMARY */}
        <div className="mt-6 flex flex-col space-y-3">
          <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-[#8A8A8A]' : 'text-[#5F5F5F]'}`}>
            Role: {project.role} {project.tools ? `· Tools: ${project.tools}` : ''}
          </span>
          <h3 className="font-display text-xl font-bold sm:text-2xl">
            "{project.positioning}"
          </h3>
          <p className={`text-base leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-[#5F5F5F]'}`}>
            {project.storyHook}
          </p>
        </div>

        {/* LARGE VISUAL TRAILER COMPOSITION (16:10 ASPECT RATIO) */}
        {project.heroImage && (
          <div className="mt-8 relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-opacity-20 border-current bg-black/5">
            <Image
              src={project.heroImage}
              alt={`${project.name} Case Study Cover`}
              fill
              priority={project.number === '01'}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        )}

        {/* FOOTER ROW: CAPABILITY TAGS & VIEW CASE STUDY CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-opacity-20 border-current">
          {/* TAGS */}
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-md px-3 py-1 text-xs font-semibold ${
                  isDark
                    ? 'bg-[#222222] text-[#E5E1DA]'
                    : 'bg-[#F7F5F0] text-[#111111] border border-[#E5E1DA]'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* ACTION BUTTONS (CASE STUDY + EXTERNAL LINKS) */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="group/btn inline-flex items-center space-x-2 rounded-xl bg-[#FF572F] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-[#E04722] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F] focus-visible:ring-offset-2"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>

            {project.externalLinks &&
              project.externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-1.5 rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F] ${
                    link.isPrimary
                      ? isDark
                        ? 'bg-[#38BDF8] text-[#0F172A] hover:bg-[#0284C7] hover:text-white'
                        : 'bg-[#111111] text-white hover:bg-[#FF572F]'
                      : isDark
                      ? 'border border-[#333333] bg-[#1A1A1A] text-[#E5E1DA] hover:border-[#FF572F] hover:text-[#FF572F]'
                      : 'border border-[#E5E1DA] bg-white text-[#111111] hover:border-[#FF572F] hover:text-[#FF572F]'
                  }`}
                >
                  <span>{link.label}</span>
                </a>
              ))}
          </div>
        </div>

      </div>
    </motion.article>
  );
}
