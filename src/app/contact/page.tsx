'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Send,
  Headphones,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  HelpCircle,
  Calendar,
  ChevronDown,
  ArrowUpRight,
  ArrowRight,
  ArrowUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const emailAddress = 'harih7397108713@gmail.com';
  const phoneNumber = '+91 73971 08713';
  const locationText = 'Sivakasi, Tamil Nadu, India';

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
  };

  const faqs = [
    {
      q: 'What types of projects do you work on?',
      a: 'I work across product design, UI/UX, visual design, mobile applications, desktop software, and AI-assisted workspace platforms.',
    },
    {
      q: 'Are you available for full-time entry-level roles?',
      a: 'Yes! I am actively looking for full-time entry-level Product Design, UI/UX, and AI-assisted design opportunities.',
    },
    {
      q: 'What is your typical response time?',
      a: 'I value clear communication and usually respond within 24 hours.',
    },
    {
      q: 'Do you work remotely or on-site?',
      a: 'I am open to both remote roles and on-site opportunities depending on team requirements.',
    },
    {
      q: 'How can we start a project together?',
      a: 'Feel free to fill out the message form above or email me directly at hariharan.design.dev@gmail.com.',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5F0] text-[#111111]">
      {/* 01. GLOBAL NAVIGATION */}
      <Navbar />

      <main className="flex-grow">
        {/* 02. CONTACT HERO */}
        <section className="w-full bg-[#F7F5F0] px-6 pt-10 pb-16 md:px-12 md:pt-14 lg:px-16 lg:pt-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
              
              {/* HERO LEFT COLUMN */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="flex flex-col space-y-4 lg:col-span-6 z-10"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
                  CONTACT
                </span>

                <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
                  Let’s Create
                  <br />
                  Something
                  <br />
                  <span className="text-[#FF572F]">Meaningful.</span>
                </h1>

                <p className="max-w-lg pt-2 text-base text-[#5F5F5F] sm:text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, exciting projects, or just having a conversation about design and technology.
                </p>
              </motion.div>

              {/* HERO RIGHT COLUMN: PORTRAIT WITH ORANGE CIRCLE & CURSIVE SIGNATURE */}
              <div className="relative flex items-center justify-center lg:col-span-6 lg:justify-end">
                <div className="relative w-full max-w-[460px] aspect-[4/4] sm:aspect-square">
                  
                  {/* CURSIVE SIGNATURE OVERLAY */}
                  <div className="absolute top-8 left-0 z-20 font-serif italic text-2xl font-bold text-[#111111]/80 select-none pointer-events-none">
                    Hari
                    <br />
                    Haran
                  </div>

                  {/* DECORATIVE DOT GRID */}
                  <div className="absolute top-2 right-2 z-0 grid grid-cols-6 gap-2 p-2 opacity-40">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="h-1 w-1 rounded-full bg-[#FF572F]" />
                    ))}
                  </div>

                  {/* THIN EDITORIAL GUIDE LINES */}
                  <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-[#E5E1DA]" />
                  <div className="absolute top-12 left-0 right-0 h-[1px] bg-[#E5E1DA]" />

                  {/* ORANGE CIRCLE */}
                  <div className="absolute right-4 bottom-2 w-[82%] aspect-square rounded-full bg-[#FF572F] z-0 shadow-lg opacity-95" />

                  {/* PORTRAIT IMAGE */}
                  <div className="absolute inset-0 z-10 flex items-end justify-center">
                    <div className="relative h-full w-full">
                      <Image
                        src="/assets/profile/profile-cutout.png"
                        alt="Hari Haran — Product Designer Contact Portrait"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className="object-contain object-bottom filter grayscale contrast-110"
                      />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 03. CONTACT INTERACTION CARD (SEND A MESSAGE + LET'S CONNECT) */}
        <section className="w-full bg-[#F7F5F0] px-6 pb-12 md:px-12 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-3xl border border-[#E5E1DA] bg-white p-6 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
                
                {/* LEFT COLUMN: SEND A MESSAGE FORM */}
                <div className="lg:col-span-7">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF572F]/10 text-[#FF572F]">
                      <Send className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-xl font-extrabold text-[#111111]">
                      Send a Message
                    </h2>
                  </div>

                  <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-[#8A8A8A] mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Your Name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-[#E5E1DA] bg-[#F7F5F0]/60 px-4 py-3 text-sm text-[#111111] placeholder-[#8A8A8A] transition-colors focus:border-[#FF572F] focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-[#8A8A8A] mb-1.5">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Your Email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-[#E5E1DA] bg-[#F7F5F0]/60 px-4 py-3 text-sm text-[#111111] placeholder-[#8A8A8A] transition-colors focus:border-[#FF572F] focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold text-[#8A8A8A] mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full rounded-xl border border-[#E5E1DA] bg-[#F7F5F0]/60 px-4 py-3 text-sm text-[#111111] placeholder-[#8A8A8A] transition-colors focus:border-[#FF572F] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-[#8A8A8A] mb-1.5">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-[#E5E1DA] bg-[#F7F5F0]/60 px-4 py-3 text-sm text-[#111111] placeholder-[#8A8A8A] transition-colors focus:border-[#FF572F] focus:bg-white focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center space-x-2 rounded-xl bg-[#111111] px-6 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#FF572F]"
                    >
                      <span>Send Message</span>
                      <Send className="h-4 w-4 text-[#FF572F] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white" />
                    </button>
                  </form>
                </div>

                {/* RIGHT COLUMN: LET'S CONNECT STACK */}
                <div className="flex flex-col justify-between border-t border-[#E5E1DA] pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                  <div>
                    <div className="flex items-center space-x-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF572F]/10 text-[#FF572F]">
                        <Headphones className="h-5 w-5" />
                      </div>
                      <h2 className="font-display text-xl font-extrabold text-[#111111]">
                        Let’s Connect
                      </h2>
                    </div>

                    <div className="mt-6 space-y-4">
                      {/* EMAIL CARD */}
                      <a
                        href={`mailto:${emailAddress}`}
                        className="group flex items-center justify-between rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0]/50 p-4 transition-all duration-200 hover:border-[#FF572F] hover:bg-white"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E1DA] bg-white text-[#111111] group-hover:border-[#FF572F] group-hover:text-[#FF572F]">
                            <Mail className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Email</span>
                            <p className="font-display text-xs font-bold text-[#111111] sm:text-sm">{emailAddress}</p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-[#8A8A8A] transition-transform duration-200 group-hover:text-[#FF572F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>

                      {/* PHONE CARD */}
                      <a
                        href={`tel:${phoneNumber}`}
                        className="group flex items-center justify-between rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0]/50 p-4 transition-all duration-200 hover:border-[#FF572F] hover:bg-white"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E1DA] bg-white text-[#111111] group-hover:border-[#FF572F] group-hover:text-[#FF572F]">
                            <Phone className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Phone</span>
                            <p className="font-display text-xs font-bold text-[#111111] sm:text-sm">{phoneNumber}</p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-[#8A8A8A] transition-transform duration-200 group-hover:text-[#FF572F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>

                      {/* LOCATION CARD */}
                      <div className="flex items-center justify-between rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0]/50 p-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E1DA] bg-white text-[#111111]">
                            <MapPin className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Location</span>
                            <p className="font-display text-xs font-bold text-[#111111] sm:text-sm">{locationText}</p>
                          </div>
                        </div>
                        <span className="text-xs text-[#8A8A8A]">India</span>
                      </div>

                      {/* WHATSAPP CARD */}
                      <a
                        href="https://wa.me/917397108713"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0]/50 p-4 transition-all duration-200 hover:border-[#FF572F] hover:bg-white"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E1DA] bg-white text-[#111111] group-hover:border-[#FF572F] group-hover:text-[#FF572F]">
                            <MessageSquare className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">WhatsApp</span>
                            <p className="font-display text-xs font-bold text-[#111111] sm:text-sm">Chat with me on WhatsApp</p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-[#8A8A8A] transition-transform duration-200 group-hover:text-[#FF572F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 04. AVAILABLE FOR SECTION */}
        <section className="w-full bg-[#F7F5F0] px-6 pb-12 md:px-12 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF572F]/10 text-[#FF572F]">
                  <Clock className="h-4 w-4" />
                </div>
                <h2 className="font-display text-base font-extrabold text-[#111111]">
                  Available For
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center space-x-2 rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] px-4 py-2.5 text-xs font-bold text-[#111111]">
                  <span className="h-2 w-2 rounded-full bg-[#FF572F]" />
                  <span>Entry-level Product Design</span>
                </div>

                <div className="flex items-center space-x-2 rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] px-4 py-2.5 text-xs font-bold text-[#111111]">
                  <span className="h-2 w-2 rounded-full bg-[#FF572F]" />
                  <span>Full-time Opportunities</span>
                </div>

                <div className="flex items-center space-x-2 rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] px-4 py-2.5 text-xs font-bold text-[#111111]">
                  <span className="h-2 w-2 rounded-full bg-[#FF572F]" />
                  <span>Design Collaboration</span>
                </div>

                <div className="flex items-center space-x-2 rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] px-4 py-2.5 text-xs font-bold text-[#111111]">
                  <span className="h-2 w-2 rounded-full bg-[#FF572F]" />
                  <span>UI/UX Design</span>
                </div>

                <div className="flex items-center space-x-2 rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] px-4 py-2.5 text-xs font-bold text-[#111111]">
                  <span className="h-2 w-2 rounded-full bg-[#FF572F]" />
                  <span>AI-assisted Product Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05. QUICK ANSWERS + RESPONSE TIME SECTION */}
        <section className="w-full bg-[#F7F5F0] px-6 pb-20 md:px-12 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-3xl border border-[#E5E1DA] bg-white p-6 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
                
                {/* LEFT COLUMN: QUICK ANSWERS ACCORDION */}
                <div className="lg:col-span-7">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF572F]/10 text-[#FF572F]">
                      <HelpCircle className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-xl font-extrabold text-[#111111]">
                      Quick Answers
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {faqs.map((faq, idx) => {
                      const isOpen = openFaq === idx;
                      return (
                        <div
                          key={idx}
                          className="rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0]/40 overflow-hidden transition-colors hover:border-[#FF572F]/50"
                        >
                          <button
                            type="button"
                            onClick={() => setOpenFaq(isOpen ? null : idx)}
                            className="flex w-full items-center justify-between p-4 text-left font-display text-xs font-bold text-[#111111] sm:text-sm"
                          >
                            <span>{faq.q}</span>
                            <ChevronDown
                              className={`h-4 w-4 text-[#8A8A8A] transition-transform duration-200 ${
                                isOpen ? 'rotate-180 text-[#FF572F]' : ''
                              }`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="px-4 pb-4 text-xs text-[#5F5F5F] leading-relaxed border-t border-[#E5E1DA]/60 pt-3"
                              >
                                {faq.a}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 pt-4">
                    <a
                      href={`mailto:${emailAddress}`}
                      className="group inline-flex items-center space-x-2 rounded-xl border border-[#E5E1DA] bg-[#F7F5F0] px-5 py-3 text-xs font-bold text-[#111111] transition-all duration-200 hover:border-[#FF572F] hover:bg-white"
                    >
                      <span>More Questions? Let's Talk</span>
                      <ArrowRight className="h-4 w-4 text-[#FF572F] transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>

                {/* RIGHT COLUMN: RESPONSE TIME & EDITORIAL DESK ILLUSTRATION */}
                <div className="flex flex-col justify-between border-t border-[#E5E1DA] pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF572F]/10 text-[#FF572F]">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <h2 className="font-display text-xl font-extrabold text-[#111111]">
                        Response Time
                      </h2>
                    </div>

                    <div className="mt-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8A8A8A]">Usually within</span>
                      <p className="mt-1 font-display text-4xl font-black text-[#FF572F] sm:text-5xl">
                        24 Hours
                      </p>
                      <p className="mt-3 text-xs text-[#5F5F5F] leading-relaxed">
                        I value clear communication and usually respond within a day.
                      </p>
                    </div>
                  </div>

                  {/* EDITORIAL LINE-ART DESK ILLUSTRATION */}
                  <div className="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#E5E1DA] bg-[#F7F5F0] p-4 flex items-center justify-center">
                    <svg className="w-full h-full text-[#111111]" viewBox="0 0 400 200" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {/* Desk line */}
                      <line x1="20" y1="170" x2="380" y2="170" strokeWidth="2" />
                      
                      {/* Desk Lamp */}
                      <path d="M320 170 L320 110 Q320 70 280 80 L260 90" />
                      <path d="M260 90 L245 105 L275 115 Z" fill="#F7F5F0" />
                      <line x1="245" y1="120" x2="210" y2="160" strokeDasharray="3 3" stroke="#FF572F" />

                      {/* Laptop */}
                      <rect x="120" y="110" width="100" height="55" rx="4" fill="white" />
                      <path d="M140 135 Q160 120 170 140 T200 130" stroke="#FF572F" />
                      <path d="M100 165 L240 165 L230 170 L110 170 Z" fill="white" />

                      {/* Coffee Cup */}
                      <rect x="75" y="145" width="20" height="25" rx="3" fill="white" />
                      <path d="M95 150 C102 150 102 165 95 165" />
                      <path d="M85 140 Q88 135 85 130" stroke="#FF572F" />

                      {/* Plant */}
                      <path d="M40 145 L60 145 L55 170 L45 170 Z" fill="white" />
                      <path d="M50 145 Q40 125 35 135" stroke="#FF572F" />
                      <path d="M50 145 Q50 120 55 130" stroke="#FF572F" />
                      <path d="M50 145 Q60 125 65 135" stroke="#FF572F" />

                      {/* Stack of Books */}
                      <rect x="270" y="155" width="70" height="15" rx="2" fill="white" />
                      <rect x="275" y="142" width="60" height="13" rx="2" fill="white" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 06. DARK FINAL CONTACT SECTION + RECAP */}
        <section className="w-full bg-[#111111] py-20 text-white border-t border-[#262626]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-12 lg:gap-8 pb-12 border-b border-[#262626]">
              
              {/* DARK LEFT COLUMN */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF572F]">
                  LET'S STAY CONNECTED
                </span>

                <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
                  Great design happens
                  <br />
                  when we work together.
                </h2>

                <p className="max-w-md text-sm text-[#8A8A8A] sm:text-base leading-relaxed">
                  Let's turn ideas into impactful digital experiences.
                </p>

                <div className="pt-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="group inline-flex items-center space-x-2 rounded-xl border border-[#FF572F] bg-[#111111] px-7 py-3.5 text-sm font-semibold text-[#FF572F] transition-all duration-200 hover:bg-[#FF572F] hover:text-white"
                  >
                    <span>Let's Connect</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* CONDENSED CONTACT DETAILS RECAP */}
                <div className="pt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-[#262626]/80 text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Email</span>
                    <p className="mt-1 font-semibold text-white truncate">{emailAddress}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Phone</span>
                    <p className="mt-1 font-semibold text-white">{phoneNumber}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">Location</span>
                    <p className="mt-1 font-semibold text-white">{locationText}</p>
                  </div>
                </div>

                {/* SOCIAL LINKS */}
                <div className="pt-4 flex items-center space-x-6 text-xs text-[#8A8A8A]">
                  <span className="font-bold text-white uppercase tracking-wider">Follow Me</span>
                  <a href="https://www.linkedin.com/in/hari-haran-m-2a625925a" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF572F] transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://github.com/hariharan-design-dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF572F] transition-colors">
                    GitHub
                  </a>
                  <a href="https://www.instagram.com/harisdesigns.studio" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF572F] transition-colors">
                    Instagram
                  </a>
                </div>
              </div>

              {/* DARK RIGHT COLUMN: PORTRAIT VISUAL */}
              <div className="relative flex items-center justify-center lg:col-span-5 lg:justify-end">
                <div className="relative w-full max-w-[380px] aspect-square">
                  <div className="absolute right-4 bottom-0 w-[80%] aspect-square rounded-full bg-[#FF572F] z-0 shadow-lg opacity-90" />
                  <div className="absolute inset-0 z-10 flex items-end justify-center">
                    <div className="relative h-full w-full">
                      <Image
                        src="/assets/profile/profile-cutout.png"
                        alt="Hari Haran — Contact Footer Portrait"
                        fill
                        sizes="(max-width: 768px) 100vw, 35vw"
                        className="object-contain object-bottom filter grayscale contrast-110"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* FOOTER BOTTOM BAR */}
            <div className="mt-8 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0 text-xs text-[#8A8A8A]">
              <p>© 2026 Hari Haran. All rights reserved.</p>

              <div className="flex items-center space-x-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <Link href="/my-journey" className="hover:text-white transition-colors">My Journey</Link>
                <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
                <Link href="/certifications" className="hover:text-white transition-colors">Certifications</Link>
                <Link href="/contact" className="text-[#FF572F] font-semibold">Contact</Link>
              </div>

              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center space-x-1.5 hover:text-white transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="h-3.5 w-3.5 text-[#FF572F]" />
              </button>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
