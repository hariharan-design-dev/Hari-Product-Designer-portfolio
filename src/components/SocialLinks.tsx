'use client';

import React from 'react';
import { SOCIAL_LINKS } from '@/lib/tokens';
import { ArrowUpRight } from 'lucide-react';

export default function SocialLinks() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'linkedin':
        return (
          <svg className="h-4 w-4 fill-current shrink-0 text-[#0A66C2] group-hover:text-white transition-colors" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        );
      case 'github':
        return (
          <svg className="h-4 w-4 fill-current shrink-0 text-[#111111] group-hover:text-white transition-colors" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg className="h-4 w-4 fill-none stroke-current stroke-2 shrink-0 text-[#E4405F] group-hover:text-white transition-colors" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      case 'email':
        return (
          <svg className="h-4 w-4 fill-none stroke-current stroke-2 shrink-0 text-[#FF572F] group-hover:text-white transition-colors" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col space-y-3 pt-4">
      <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#8A8A8A]">
        Let's Connect
      </span>
      <div className="flex flex-wrap items-center gap-3">
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group inline-flex items-center space-x-2 rounded-xl border border-[#E5E1DA] bg-white px-3.5 py-2 text-xs font-bold text-[#111111] transition-all duration-200 hover:border-[#FF572F] hover:bg-[#111111] hover:text-white shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F]"
            aria-label={`Connect on ${item.name}`}
          >
            {getIcon(item.icon)}
            <span>{item.name}</span>
            <ArrowUpRight className="h-3 w-3 text-[#8A8A8A] transition-colors group-hover:text-[#FF572F]" />
          </a>
        ))}
      </div>
    </div>
  );
}
