"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShieldAlert, 
  Wallet, 
  LockKeyhole, 
  Video, 
  Briefcase,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Landmark,
  Eye
} from 'lucide-react';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

export default function BankSolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 bg-brand-navy z-0">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold tracking-widest uppercase mb-4">
              Financial Security
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Banking & Finance <br/><span className="text-indigo-400">Security Solutions</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
              Protect your most valuable assets, ensure regulatory compliance, and guarantee the safety of your staff and customers with our robust, end-to-end security architecture.
            </p>
            <button
              onClick={() => triggerQuoteModal('Banking Security Solutions')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center gap-2 mx-auto"
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
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            <Link href="/solutions" className="hover:text-indigo-600 transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            <span className="text-slate-900">Bank</span>
          </div>
        </div>
      </div>

      {/* 2. Challenges & Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Securing Trust & Transactions</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Financial institutions operate under strict scrutiny. From mitigating physical attacks on ATMs to preventing insider threats and ensuring continuous compliance, banks require a security system that leaves absolutely zero room for error.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Physical Threats', desc: 'Robberies, vandalism, and sophisticated physical attacks targeting ATMs and branches.', icon: ShieldAlert },
              { title: 'Operational Compliance', desc: 'Strict regulatory requirements mandate clear, continuous, and tamper-proof video retention.', icon: Briefcase },
              { title: 'False Alarms', desc: 'High rates of false alarms outside business hours disrupt operations and drain resources.', icon: Eye },
            ].map((challenge, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
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
            <h2 className="text-3xl font-bold text-brand-navy mb-4">High-Security Capabilities</h2>
            <p className="text-slate-600 font-medium max-w-2xl leading-relaxed">
              Our enterprise-grade systems provide proactive threat detection and uncompromising reliability for banking environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'VIP & Threat Recognition',
                icon: Landmark,
                features: ['Facial recognition at entry', 'VIP customer alerts', 'Known-offender watchlists']
              },
              {
                title: 'ATM & Vault Monitoring',
                icon: LockKeyhole,
                features: ['Skimming device detection', 'Loitering alarms', 'Vibration & tamper sensors']
              },
              {
                title: 'High-Def Surveillance',
                icon: Video,
                features: ['4K resolution cameras', 'WDR for bright lobbies', 'Zero-blind-spot coverage']
              },
              {
                title: 'Multi-Branch Management',
                icon: Building2,
                features: ['Centralized remote viewing', 'Secure redundant storage', 'Automated health checks']
              }
            ].map((cap, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <cap.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-4">{cap.title}</h3>
                <ul className="space-y-2">
                  {cap.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
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
                  <img src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=2070&auto=format&fit=crop" alt="Bank Branch Lobbies" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Branch Lobbies & Teller Counters</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Protect your staff and clearly capture every transaction. Lobbies often suffer from severe backlighting from glass doors, making standard cameras ineffective. We deploy Wide Dynamic Range (WDR) cameras that guarantee crystal-clear facial details regardless of lighting conditions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" /> True WDR (120dB) for harsh lighting
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Panic buttons integrated with video pop-ups
                  </li>
                </ul>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=1974&auto=format&fit=crop" alt="ATM Security" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Wallet className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">24/7 ATM Vestibules</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  ATMs are highly vulnerable to vandalism, skimming, and physical extraction. Our solutions utilize intelligent analytics to trigger alerts if someone loiters for too long, attempts to obscure the camera, or triggers vibration sensors on the machine.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Intelligent loitering and abandoned object detection
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Pinhole covert cameras for discreet monitoring
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-lightBlue/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ensure Uncompromising Security for Your Bank
          </h2>
          <p className="text-slate-300 font-medium mb-10 text-lg max-w-2xl mx-auto">
            Speak with our financial security specialists to design a compliant, high-availability architecture tailored to your branches.
          </p>
          <button
            onClick={() => triggerQuoteModal('Bank Security Consultation')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-indigo-600/30 flex items-center gap-2 mx-auto text-lg"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
}

