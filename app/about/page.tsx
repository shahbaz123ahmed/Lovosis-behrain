"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  CheckCircle2,
  Building2,
  Headset,
  Globe2
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy z-0">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/20 text-brand-lightBlue border border-brand-blue/30 text-xs font-bold tracking-widest uppercase mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We Don&apos;t Just Sell Cameras. <br/><span className="text-brand-blue">We Engineer Peace of Mind.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
              Lovosis was built on a simple premise: enterprise-grade security shouldn&apos;t be overly complicated or impossibly expensive. We bring you the hardware, the software, and the support you actually need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Mission & Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">
                Bridging the Gap Between High-End Tech and Real Usability
              </h3>
              
              <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                <p>
                  Security technology moves fast. A few years ago, AI-driven analytics and 4K perimeter defense were reserved for multi-million dollar government projects. Today, every business needs them. But navigating the market to find reliable equipment without getting ripped off is a nightmare.
                </p>
                <p>
                  That's why we started Lovosis. We realized that what businesses actually want isn't just a box of cameras. They want a system that works out of the box, doesn't break down after a year, and comes with a team that picks up the phone when something goes wrong.
                </p>
                <p>
                  By partnering directly with industry leaders like Uniview as an OEM provider, we cut out the middlemen. We control the quality, we control the software ecosystem, and most importantly, we control the customer experience.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-6">
                <div>
                  <div className="text-3xl font-bold text-brand-blue mb-1">10+</div>
                  <div className="text-sm text-slate-500 font-medium">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div>
                  <div className="text-3xl font-bold text-brand-blue mb-1">OEM</div>
                  <div className="text-sm text-slate-500 font-medium">Direct Partner</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Lovosis Team" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy">Quality Assured</div>
                      <div className="text-sm text-slate-500 font-medium">Strict OEM Testing</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Every camera and NVR goes through rigorous stress testing before it leaves our facility.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. By The Numbers (Stats) */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { number: '500+', label: 'Enterprise Projects' },
              { number: '50k+', label: 'Cameras Deployed' },
              { number: '99.9%', label: 'System Uptime' },
              { number: '24/7', label: 'Technical Support' },
            ].map((stat, idx) => (
              <div key={idx} className="relative">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-brand-lightBlue font-medium text-sm md:text-base">{stat.label}</div>
                {idx !== 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">Core Values</h2>
            <h3 className="text-3xl font-bold text-brand-navy">What Drives Us Forward</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Uncompromising Quality',
                desc: "We don't cut corners. From the lens glass to the server chassis, if it carries the Lovosis name, it's built to last and endure harsh environments."
              },
              {
                icon: Lightbulb,
                title: 'Relentless Innovation',
                desc: "Security isn't static. We constantly update our firmware, improve our AI algorithms, and adopt new technologies to keep you ahead of threats."
              },
              {
                icon: Users,
                title: 'Customer Obsession',
                desc: "Our job doesn't end when the invoice is paid. We pride ourselves on post-sales support that actually solves problems quickly and efficiently."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-4">{value.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Lovosis Advantage */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-lightBlue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  The Lovosis Advantage
                </h3>
                <p className="text-slate-300 font-medium leading-relaxed mb-8">
                  Why do system integrators and businesses choose us? Because we eliminate the friction from purchasing and managing security hardware.
                </p>

                <ul className="space-y-5">
                  {[
                    { title: 'Direct OEM Pricing', desc: 'Get top-tier Uniview-backed hardware without the insane markups.' },
                    { title: 'Unified Ecosystem', desc: 'Cameras, NVRs, Access Control, and Software that actually talk to each other seamlessly.' },
                    { title: 'Local Stock & Fast RMA', desc: 'No waiting months for a replacement part. We keep stock local and handle RMAs fast.' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-brand-blue/20 p-1 rounded-full flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-brand-lightBlue" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                    <Globe2 className="w-8 h-8 text-brand-lightBlue mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">Global Tech</h4>
                    <p className="text-slate-400 text-sm font-medium">World-class R&D powering every device.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm translate-y-8">
                    <Headset className="w-8 h-8 text-brand-lightBlue mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">Local Support</h4>
                    <p className="text-slate-400 text-sm font-medium">Real engineers ready to troubleshoot.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            Ready to Build a Safer Environment?
          </h2>
          <p className="text-slate-600 font-medium mb-10 text-lg">
            Stop dealing with piecemeal security systems. Let's design a unified, intelligent architecture for your business today.
          </p>
          <Link 
            href="/contact"
            className="inline-flex bg-brand-blue hover:bg-brand-blue/90 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-blue/30 items-center gap-2 text-lg"
          >
            <span>Talk to Our Experts</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
