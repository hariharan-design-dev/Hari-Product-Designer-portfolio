import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CapabilityStrip from '@/components/CapabilityStrip';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5F0]">
      {/* GLOBAL NAVIGATION */}
      <Navbar />

      {/* HERO & CAPABILITY SECTIONS */}
      <main className="flex-grow">
        <Hero />
        <CapabilityStrip />
      </main>

      {/* FOOTER & CONTACT SECTION */}
      <Footer />
    </div>
  );
}
