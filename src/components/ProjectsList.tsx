'use client';

import React from 'react';
import ProjectTrailerCard, { ProjectData } from './ProjectTrailerCard';

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    slug: 'driveportz',
    name: 'DRIVEPORTZ',
    year: '2024',
    type: 'Vehicle Service Booking Platform',
    role: 'Freelance UI/UX Designer · Solo',
    timeline: '2 Weeks',
    tools: 'Figma · ChatGPT',
    positioning: 'Designed a vehicle-service booking experience that helps first-time customers understand services, build trust and book with less friction.',
    storyHook:
      'My first complete end-to-end real-world product design project. Designed 20+ responsive screens covering garage registration, service discovery, transparent pricing, and real-time booking tracking.',
    tags: ['Product Design', 'UX/UI', 'Mobile & Web', 'Design System'],
    heroImage: '/assets/projects/driveportz-hero.png',
    secondaryImage: '/assets/projects/driveportz-screen2.png',
    isDarkTheme: false,
    externalLinks: [
      {
        label: 'View Prototype ↗',
        url: 'https://www.figma.com/proto/4EP68lwl1n3F8lhaPb8nAr/hari-projects?node-id=518-2002&t=yMm4o6hZOq2abeTz-1&scaling=min-zoom&content-scaling=fixed&page-id=217%3A123&starting-point-node-id=375%3A399',
      },
    ],
  },
  {
    number: '02',
    slug: 'cheezycrust',
    name: 'CHEEZYCRUST',
    year: '2024 – 2025',
    type: 'Food Ordering & Discovery App',
    role: 'Product Designer · Mobile Concept',
    timeline: 'Product Exploration',
    tools: 'Figma · ChatGPT · Flow · Stitch',
    positioning: 'Refined digital food ordering experience focused on visual food presentation, intuitive customization, and seamless cart-to-checkout flows.',
    storyHook:
      'Explored visual hierarchy, appetizing product display card architecture, custom pizza ingredient selection, and friction-free payment flows.',
    tags: ['Product Design', 'UI/UX', 'Mobile App', 'Visual Hierarchy'],
    heroImage: '/assets/projects/cheezycrust-hero.png',
    secondaryImage: '/assets/projects/cheezycrust-screen2.png',
    isDarkTheme: false,
    externalLinks: [
      {
        label: 'View Prototype ↗',
        url: 'https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=135-1841&t=rMNAGEtT5CdCikeQ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=135%3A1841&show-proto-sidebar=1',
      },
    ],
  },
  {
    number: '03',
    slug: 'corex-ai',
    name: 'COREX AI',
    year: '2025',
    type: 'AI Workspace & Conversation Platform',
    role: 'Product Designer · AI Concept',
    timeline: 'AI Workspace',
    tools: 'Figma · ChatGPT',
    positioning: 'AI-powered productivity workspace designed for structured prompt engineering, multi-thread conversation organization, and active task assistance.',
    storyHook:
      'Organized multi-model AI conversations into structured workspaces. Focused on sidebar information architecture, prompt tag filtering, and overlay settings.',
    tags: ['AI Workspace', 'UX Thinking', 'Information Architecture', 'Prompt UX'],
    heroImage: '/assets/projects/corex-hero.png',
    secondaryImage: '/assets/projects/corex-screen2.png',
    isDarkTheme: true,
    externalLinks: [
      {
        label: 'View Prototype ↗',
        url: 'https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=396-178&t=9nFiGDf3QFjavorE-1&scaling=min-zoom&content-scaling=fixed&page-id=295%3A231',
      },
    ],
  },
  {
    number: '04',
    slug: 'voidcode',
    name: 'VOIDCODE',
    year: '2025',
    type: 'AI & Design-to-Code Platform',
    role: 'Product Designer · Solo Concept',
    timeline: 'AI Exploration',
    tools: 'Figma · AI Prompts · Code Tools',
    positioning: 'AI-powered web platform bridging Figma design tokens and production code, allowing developers and designers to generate responsive frontend components.',
    storyHook:
      'Explored the relationship between design tokens and code execution. Designed intuitive prompt interfaces, code editor previews, and multi-tier pricing plans.',
    tags: ['AI Product', 'Design Systems', 'Developer Tools', 'Figma-to-Code'],
    heroImage: '/assets/projects/voidcode-hero.png',
    secondaryImage: '/assets/projects/voidcode-screen2.png',
    isDarkTheme: true,
    externalLinks: [
      {
        label: 'View Prototype ↗',
        url: 'https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=247-206&t=sSAoT2UDyatH8UU8-1&scaling=min-zoom&content-scaling=fixed&page-id=158%3A178&starting-point-node-id=195%3A245',
      },
    ],
  },
  {
    number: '05',
    slug: 'cybershield',
    name: 'CYBERSHIELD',
    year: '2023 – 2024',
    type: 'Cybersecurity Threat Intelligence Dashboard',
    role: 'Product Designer · Final-Year Project',
    timeline: 'Academic Project',
    tools: 'ChatGPT · Gemini · Claude · Figma · Antigravity',
    positioning: 'Complex cybersecurity monitoring dashboard designed to simplify network threat detection, trap systems, and alert triaging using AI-assisted development tools.',
    storyHook:
      'Applied product design thinking to a complex technical security domain. Used AI development tools to transform high-fidelity Figma dashboards into a working implementation.',
    tags: ['Cybersecurity UX', 'Dashboard Design', 'Technical Product', 'AI Development'],
    heroImage: '/assets/projects/cybershield-hero.png',
    secondaryImage: '/assets/projects/cybershield-screen2.png',
    isDarkTheme: true,
    externalLinks: [
      {
        label: 'View Live Site ↗',
        url: 'https://cyber-shield-ai-six.vercel.app/',
        isPrimary: true,
      },
      {
        label: 'View Prototype ↗',
        url: 'https://www.figma.com/proto/4EP68lwl1n3F8lhaPb8nAr/hari-projects?node-id=518-109&t=V26aPcLW0IL1upYB-1&scaling=min-zoom&content-scaling=fixed&page-id=345%3A107',
      },
    ],
  },
  {
    number: '06',
    slug: 'futureyou',
    name: 'FUTUREYOU',
    year: '2026',
    type: 'AI Personal Growth & Conversational Experience',
    role: 'Product Designer · UI/UX Designer',
    timeline: 'AI Concept',
    tools: 'ChatGPT · Claude · Stitch · Figma',
    positioning: 'Conversational AI product designed around personal growth paths, future-self visual simulation, and interactive video-call interfaces.',
    storyHook:
      'Explored personal development paths (Career, Relationships, Growth) through AI conversational journeys, palmistry analysis, and interactive video call simulations.',
    tags: ['AI Experience', 'Conversational UI', 'Interactive Prototyping', 'Product Design'],
    heroImage: '/assets/projects/futureyou-hero.png',
    secondaryImage: '/assets/projects/futureyou-screen2.png',
    isDarkTheme: false,
    externalLinks: [
      {
        label: 'View Prototype ↗',
        url: 'https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=599-306&p=f&t=XKGvRJ5SDjDiA6Dy-1&scaling=scale-down&content-scaling=fixed&page-id=424%3A206&starting-point-node-id=599%3A306',
      },
    ],
  },
  {
    number: '07',
    slug: 'firepos',
    name: 'FIREPOS',
    year: '2026',
    type: 'Billing & POS Operational Software',
    role: 'Product Designer & Technical Planning',
    timeline: 'Freelance Product',
    tools: 'ChatGPT · Stitch · Antigravity · Figma',
    positioning: 'Comprehensive POS operational software built for high-speed retail billing, inventory management, customer tracking, and admin analytics.',
    storyHook:
      'Balanced business operations with speed. Designed separate admin and billing interfaces that reduce cashier transaction time and give store managers real-time analytics.',
    tags: ['SaaS & POS', 'Product Architecture', 'Desktop UX', 'Design-to-Deployment'],
    heroImage: '/assets/projects/firepos-hero.png',
    secondaryImage: '/assets/projects/firepos-screen2.png',
    isDarkTheme: false,
    externalLinks: [
      {
        label: 'Admin Prototype ↗',
        url: 'https://www.figma.com/proto/1Su453JKd3aHLTbr2obFJj/new-brand-of-designs?node-id=4210-71&t=IQfOGNXtIuGMOmAh-1&scaling=min-zoom&content-scaling=fixed&page-id=2052%3A2&starting-point-node-id=4210%3A71',
      },
      {
        label: 'Billing Counter Prototype ↗',
        url: 'https://www.figma.com/proto/1Su453JKd3aHLTbr2obFJj/new-brand-of-designs?node-id=4211-126&t=5h9wTSzujcYTjV4A-1&scaling=min-zoom&content-scaling=fixed&page-id=2052%3A2&starting-point-node-id=4211%3A126',
      },
    ],
  },
  {
    number: '08',
    slug: 'kanna-pyro-park',
    name: 'KANNA PYRO PARK',
    year: '2026',
    type: 'E-Commerce & Back-Office Admin System',
    role: 'Product Designer & Frontend Contribution',
    timeline: 'Client Product',
    tools: 'ChatGPT · Stitch · Figma · Google Flow · Antigravity',
    positioning: 'Dual-sided client product managing customer list creation, bulk order requests, product discovery, and back-office admin inventory control.',
    storyHook:
      'Designed for real business constraints in Sivakasi. Created customer-facing catalog request flows alongside an admin dashboard managing inventory, products, and customer requests.',
    tags: ['Real Client Work', 'E-Commerce UX', 'Admin Dashboard', 'Design-to-Deployment'],
    heroImage: '/assets/projects/kanna-hero.png',
    secondaryImage: '/assets/projects/kanna-screen2.png',
    isDarkTheme: false,
    externalLinks: [
      {
        label: 'View Live Website ↗',
        url: 'https://www.kannanpyropark.in/',
        isPrimary: true,
      },
      {
        label: 'Customer Prototype ↗',
        url: 'https://www.figma.com/proto/1Su453JKd3aHLTbr2obFJj/new-brand-of-designs?node-id=4247-156&t=ubF6TDxLBhe9NWcC-1&scaling=min-zoom&content-scaling=fixed&page-id=2030%3A2&starting-point-node-id=4247%3A156',
      },
      {
        label: 'Admin Prototype ↗',
        url: 'https://www.figma.com/proto/1Su453JKd3aHLTbr2obFJj/new-brand-of-designs?node-id=4308-84&t=McSDATB7BHZga9lT-1&scaling=min-zoom&content-scaling=fixed&page-id=2030%3A2&starting-point-node-id=4308%3A84',
      },
    ],
  },
];

export default function ProjectsList() {
  return (
    <section className="w-full bg-[#F7F5F0] py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col space-y-16 md:space-y-24">
          {PROJECTS.map((project) => (
            <ProjectTrailerCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
