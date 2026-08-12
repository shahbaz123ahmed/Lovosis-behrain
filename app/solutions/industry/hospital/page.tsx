"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Stethoscope, 
  Baby, 
  Activity, 
  Lock, 
  Eye,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Hospital as HospitalIcon,
  Video
} from 'lucide-react';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

export default function HospitalSolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy z-0">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/20 text-brand-lightBlue border border-brand-blue/30 text-xs font-bold tracking-widest uppercase mb-4">
              Healthcare Security
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hospital & Healthcare <br/><span className="text-brand-blue">Security Solutions</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
              Protect patients, staff, and sensitive assets. Create a safe, healing environment with our non-intrusive yet highly effective security architecture.
            </p>
            <button
              onClick={() => triggerQuoteModal('Healthcare Security Solutions')}
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
            <span className="text-slate-900">Hospital</span>
          </div>
        </div>
      </div>

      {/* 2. Challenges & Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Securing the Healing Environment</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Hospitals are 24/7 public facilities where tension runs high. Protecting restricted areas like pharmacies and maternity wards while ensuring a welcoming atmosphere is a delicate balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Violence & Disputes', desc: 'Managing aggressive behavior in Emergency Rooms and waiting areas.', icon: HeartPulse },
              { title: 'Restricted Access', desc: 'Preventing unauthorized entry to pharmacies, labs, and surgical wards.', icon: Lock },
              { title: 'Patient Safety', desc: 'Monitoring vulnerable patients like infants and the elderly safely.', icon: Baby },
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
              We provide intelligent solutions tailored to the strict compliance and safety requirements of healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'High-Sec Access',
                icon: Lock,
                features: ['Biometric access for labs', 'Anti-tailgating', 'Role-based entry']
              },
              {
                title: 'Smart Monitoring',
                icon: Video,
                features: ['Corridor mode cameras', 'Privacy masking for wards', 'Audio recording in ERs']
              },
              {
                title: 'Patient Protection',
                icon: Baby,
                features: ['Wandering patient alerts', 'Infant abduction prevention', 'Fall detection AI']
              },
              {
                title: 'Central Command',
                icon: Activity,
                features: ['Unified VMS dashboard', 'Rapid incident search', 'Integration with fire alarms']
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
            <h2 className="text-3xl font-bold text-brand-navy">Critical Monitoring Scenarios</h2>
          </div>

          <div className="space-y-24">
            {/* Scenario 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop" alt="Emergency Rooms" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Emergency Rooms & Triage</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  The ER is highly volatile. High-definition cameras with integrated audio help security personnel defuse disputes before they escalate. Panic buttons are integrated directly with the VMS to bring cameras to full screen instantly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Integrated Audio & Video recording
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> VMS-linked panic buttons for staff
                  </li>
                </ul>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" alt="Pharmacy" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                  <HospitalIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Pharmacies & Labs</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Strict access control is required to prevent drug diversion and protect sensitive samples. We deploy dual-authentication biometric terminals combined with high-res cameras to maintain a strict chain of custody.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Dual-authentication access control
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> High-definition unblinking coverage
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
            Protect What Matters Most
          </h2>
          <p className="text-slate-300 font-medium mb-10 text-lg max-w-2xl mx-auto">
            Contact us to design a HIPAA-compliant, robust security framework for your healthcare facility.
          </p>
          <button
            onClick={() => triggerQuoteModal('Healthcare Security Consultation')}
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

