"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Map, 
  Car, 
  Store, 
  Users, 
  CreditCard,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Video,
  ShieldCheck
} from 'lucide-react';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

export default function ShoppingMallSolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy z-0">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/20 text-brand-lightBlue border border-brand-blue/30 text-xs font-bold tracking-widest uppercase mb-4">
              Commercial Security
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Shopping Mall <br/><span className="text-brand-blue">Security Solutions</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
              Manage large crowds, secure expansive parking lots, and protect retail tenants with our centralized, intelligent surveillance systems.
            </p>
            <button
              onClick={() => triggerQuoteModal('Shopping Mall Security')}
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
            <span className="text-slate-900">Shopping Mall</span>
          </div>
        </div>
      </div>

      {/* 2. Challenges & Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Securing Massive Retail Spaces</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Shopping malls host thousands of visitors daily. Ensuring their safety while managing traffic flow, parking, and shoplifting incidents requires a robust, scalable security architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Crowd Management', desc: 'Difficulty in monitoring high-traffic zones and preventing stampedes or congestion.', icon: Users },
              { title: 'Parking Security', desc: 'Vehicle theft, vandalism, and traffic jams in sprawling parking complexes.', icon: Car },
              { title: 'Tenant Protection', desc: 'Providing unified security for hundreds of individual retail stores.', icon: Store },
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
              We provide end-to-end coverage, from the perimeter parking lots to the central atrium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Crowd Analytics',
                icon: Users,
                features: ['Heatmapping', 'People counting', 'Congestion alerts']
              },
              {
                title: 'Smart Parking',
                icon: Car,
                features: ['ANPR / LPR cameras', 'Vehicle search by plate', 'Parking guidance']
              },
              {
                title: 'Panoramic Surveillance',
                icon: Video,
                features: ['180° & 360° cameras', 'Zero blind spots', 'High optical zoom PTZ']
              },
              {
                title: 'Centralized VMS',
                icon: Map,
                features: ['Unified control room', 'E-map integration', 'Multi-tenant access']
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
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" alt="Mall Atrium" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Main Atrium & Corridors</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Expansive indoor areas require fewer cameras with wider coverage. We deploy multi-sensor panoramic cameras that capture a complete 180° or 360° view, ensuring that no incident goes unnoticed in crowded spaces.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Multi-sensor 180° panoramic cameras
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> AI-based people counting and heatmaps
                  </li>
                </ul>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=2070&auto=format&fit=crop" alt="Retail Stores" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Retail Fronts & Escalators</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Protecting individual storefronts and monitoring escalators is critical for safety. Our high-definition domes blend into the mall architecture while providing crystal-clear footage to resolve disputes and track shoplifters.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Discreet dome cameras for aesthetics
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Smart tracking for suspect movement
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
            Secure Your Entire Shopping Complex
          </h2>
          <p className="text-slate-300 font-medium mb-10 text-lg max-w-2xl mx-auto">
            Design a comprehensive mall security infrastructure that scales with your property.
          </p>
          <button
            onClick={() => triggerQuoteModal('Shopping Mall Security Consultation')}
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

