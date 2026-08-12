"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Video, 
  Eye, 
  Map, 
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Target
} from 'lucide-react';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

export default function StadiumSolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy z-0">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/20 text-brand-lightBlue border border-brand-blue/30 text-xs font-bold tracking-widest uppercase mb-4">
              Event Security
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Stadium & Arena <br/><span className="text-brand-blue">Security Solutions</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
              Protect tens of thousands of fans, manage massive crowds, and guarantee event safety with ultra-high-definition, AI-powered surveillance.
            </p>
            <button
              onClick={() => triggerQuoteModal('Stadium Security Solutions')}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-brand-blue/30 flex items-center gap-2 mx-auto"
            >
              <span>Get Custom Blueprint</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            <Link href="/solutions" className="hover:text-brand-blue transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            <span className="text-slate-900">Stadium</span>
          </div>
        </div>
      </div>

      {/* 2. Challenges & Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Securing Massive Crowds</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Stadiums present the ultimate security challenge. Managing the sudden influx of thousands of people, monitoring vast seating bowls, and coordinating emergency responses requires a zero-latency, high-resolution system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Crowd Surges', desc: 'Managing dangerous congestion at entrance gates and concourses.', icon: Users },
              { title: 'Seating Bowl Visibility', desc: 'Identifying specific incidents or unruly fans from hundreds of feet away.', icon: Eye },
              { title: 'Perimeter Breaches', desc: 'Preventing unauthorized access across expansive outdoor campus areas.', icon: ShieldAlert },
            ].map((challenge, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
                  <challenge.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{challenge.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Core Capabilities</h2>
            <p className="text-slate-600 font-medium max-w-2xl leading-relaxed">
              Our stadium solutions combine optical prowess with intelligent analytics to ensure everyone enjoys the game safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Ultra-HD PTZ',
                icon: Target,
                features: ['45x Optical Zoom', 'Laser illumination', 'Track fast-moving subjects']
              },
              {
                title: 'Crowd Density AI',
                icon: Users,
                features: ['Real-time density heatmaps', 'Congestion alerts', 'Queue management']
              },
              {
                title: 'Panoramic Views',
                icon: Video,
                features: ['Multi-sensor stitching', '180° concourse coverage', 'Zero blind spots']
              },
              {
                title: 'Command Center',
                icon: Map,
                features: ['Unified video wall', 'Rapid incident retrieval', 'Multi-agency integration']
              }
            ].map((cap, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-blue/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <cap.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-4">{cap.title}</h3>
                <ul className="space-y-2">
                  {cap.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Application Scenarios */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">Monitoring Scenarios</h2>
          </div>

          <div className="space-y-24">
            {/* Scenario 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1507726420169-08dc80118357?q=80&w=2070&auto=format&fit=crop" alt="Entrance Gates" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Entrance Gates & Concourses</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Manage the flow of thousands of fans seamlessly. Our AI cameras monitor crowd density in real-time, alerting security if a bottleneck forms, while high-speed turnstiles with facial recognition allow VIPs swift entry.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Real-time crowd density alerts
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Seamless VIP facial recognition
                  </li>
                </ul>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2071&auto=format&fit=crop" alt="Seating Bowl" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">The Seating Bowl</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  When an incident occurs in the stands, operators need to see details instantly. We deploy ultra-high-definition PTZ (Pan-Tilt-Zoom) cameras capable of identifying a face from across the stadium, ensuring unruly behavior is caught immediately.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> 45x Optical Zoom for extreme detail
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Smart tracking of moving targets
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-lightBlue/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Upgrade Your Arena's Defense
          </h2>
          <p className="text-slate-300 font-medium mb-10 text-lg max-w-2xl mx-auto">
            Contact us to build a high-performance security network for your stadium or event venue.
          </p>
          <button
            onClick={() => triggerQuoteModal('Stadium Security Consultation')}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-blue/30 flex items-center gap-2 mx-auto text-lg"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
}

