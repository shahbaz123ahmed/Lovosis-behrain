"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Siren, 
  ShieldAlert, 
  BookOpen, 
  Users, 
  MapPin,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  BellRing,
  Camera
} from 'lucide-react';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

export default function SchoolSolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 bg-brand-navy z-0">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold tracking-widest uppercase mb-4">
              Education Security
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Campus Safety & <br/><span className="text-amber-400">Security Solutions</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
              Create a secure and nurturing learning environment. We equip schools and universities with intelligent systems that prevent incidents and ensure rapid response during emergencies.
            </p>
            <button
              onClick={() => triggerQuoteModal('School Safety Solutions')}
              className="bg-amber-500 hover:bg-amber-600 text-brand-navy font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-amber-500/30 flex items-center gap-2 mx-auto"
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
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            <Link href="/solutions" className="hover:text-amber-600 transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            <span className="text-slate-900">School</span>
          </div>
        </div>
      </div>

      {/* 2. Challenges & Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Fostering Safety for Students & Staff</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Educational institutions are open, busy environments making them difficult to secure. Administrators struggle with monitoring large campuses, managing hundreds of visitors, and responding instantly to bullying, vandalism, or critical emergencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Emergency Response', desc: 'Delays in identifying and broadcasting alerts during critical campus emergencies.', icon: Siren },
              { title: 'Perimeter Breaches', desc: 'Unauthorized access through open campus borders and unsecured playgrounds.', icon: ShieldAlert },
              { title: 'Vandalism & Bullying', desc: 'Lack of coverage in high-risk areas like secluded hallways or bus loading zones.', icon: Users },
            ].map((challenge, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform">
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
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Intelligent Campus Capabilities</h2>
            <p className="text-slate-600 font-medium max-w-2xl leading-relaxed">
              Our holistic solutions not only record events but actively prevent them, ensuring peace of mind for parents, teachers, and students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Active Deterrence',
                icon: BellRing,
                features: ['Flashing lights & sirens', 'Custom voice warnings', 'Immediate intruder alert']
              },
              {
                title: 'Smart Access Control',
                icon: BookOpen,
                features: ['Student attendance tracking', 'Touchless staff entry', 'Visitor badging systems']
              },
              {
                title: 'Rapid Search',
                icon: Camera,
                features: ['Search by clothing color', 'Fast-track incident review', 'AI-assisted video retrieval']
              },
              {
                title: 'Multi-Campus View',
                icon: MapPin,
                features: ['Unified district dashboard', 'Mobile app for principals', 'Cloud backup for records']
              }
            ].map((cap, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <cap.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-4">{cap.title}</h3>
                <ul className="space-y-2">
                  {cap.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
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
            <h2 className="text-3xl font-bold text-brand-navy">Critical Monitoring Scenarios</h2>
          </div>

          <div className="space-y-24">
            {/* Scenario 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" alt="School Hallways" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Main Entrances & Hallways</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Managing who comes in and out is critical. We use access control integrated with high-definition cameras to track visitors and ensure students remain in safe zones. Corridor mode cameras optimize hallway viewing, reducing blind spots where bullying or fights often occur.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" /> 9:16 Corridor Mode for long hallways
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" /> Rapid target search to find wandering students
                  </li>
                </ul>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&w=2070&auto=format&fit=crop" alt="Playgrounds" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Playgrounds & Perimeters</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Playgrounds and sports fields are often exposed to the public. Our Smart Intrusion Prevention (SIP) technology acts as an invisible fence. If a trespasser enters after hours, active deterrence cameras immediately flash lights and play pre-recorded warnings to scare them off.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" /> Tri-Guard technology (Light, Sound, SIP)
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" /> False alarm reduction (ignores animals/leaves)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-lightBlue/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prioritize the Safety of Your Students
          </h2>
          <p className="text-slate-300 font-medium mb-10 text-lg max-w-2xl mx-auto">
            Partner with us to create a unified, proactive security ecosystem for your school district or university campus.
          </p>
          <button
            onClick={() => triggerQuoteModal('School Security Consultation')}
            className="bg-amber-500 hover:bg-amber-600 text-brand-navy font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/30 flex items-center gap-2 mx-auto text-lg"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
}

