import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import JourneyHero from '@/components/JourneyHero';
import JourneyAbout from '@/components/JourneyAbout';
import JourneyTimeline from '@/components/JourneyTimeline';
import JourneyPhotoRail from '@/components/JourneyPhotoRail';
import JourneyCapabilities from '@/components/JourneyCapabilities';
import JourneyApproach from '@/components/JourneyApproach';
import JourneyClosing from '@/components/JourneyClosing';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'My Journey — Hari Haran | Product Designer',
  description:
    'The evolution of Hari Haran from visual communication to product design, AI-assisted workflows, and design-to-deployment.',
};

export default function JourneyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5F0]">
      {/* GLOBAL NAVIGATION */}
      <Navbar />

      {/* MY JOURNEY NARRATIVE EXPERIENCE */}
      <main className="flex-grow">
        <JourneyHero />
        <JourneyAbout />
        <JourneyTimeline />
        <JourneyPhotoRail />
        <JourneyCapabilities />
        <JourneyApproach />
        <JourneyClosing />
      </main>

      {/* FOOTER & CONTACT SECTION */}
      <Footer />
    </div>
  );
}
