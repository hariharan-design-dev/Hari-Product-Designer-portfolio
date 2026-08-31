import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ProjectsHero from '@/components/ProjectsHero';
import ProjectsList from '@/components/ProjectsList';
import ProjectsClosingCTA from '@/components/ProjectsClosingCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Projects — Hari Haran | Product Designer',
  description:
    'Explore the product design showcase of Hari Haran — featuring DrivePortz, CheezyCrust, FirePOS, VoidCode, CoreX AI, CyberShield, Kanna Pyro Park, and FutureYou.',
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5F0]">
      {/* GLOBAL NAVIGATION */}
      <Navbar />

      {/* PROJECTS SHOWCASE EXPERIENCE */}
      <main className="flex-grow">
        <ProjectsHero />
        <ProjectsList />
        <ProjectsClosingCTA />
      </main>

      {/* FOOTER & CONTACT SECTION */}
      <Footer />
    </div>
  );
}
