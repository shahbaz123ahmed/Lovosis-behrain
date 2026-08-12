"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Users, 
  CreditCard, 
  TrendingUp, 
  Video, 
  Store,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Package
} from 'lucide-react';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

export default function RetailSolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 bg-brand-navy z-0">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold tracking-widest uppercase mb-4">
              Industry Solution
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Retail Security <br/><span className="text-emerald-400">& Smart Analytics</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
              Transform your retail space. Prevent losses, optimize store layouts, and gain actionable customer insights with our intelligent video surveillance solutions.
            </p>
            <button
              onClick={() => triggerQuoteModal('Retail Security & Analytics')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2 mx-auto"
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
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            <Link href="/solutions" className="hover:text-emerald-600 transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            <span className="text-slate-900">Retail</span>
          </div>
        </div>
      </div>

      {/* 2. Challenges & Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Protect Profits & Enhance Experience</h2>
            <p className="text-slate-600 font-medium">
              Retailers today face challenges beyond just theft. Understanding customer behavior, managing long queues, and integrating transactions with video are crucial for a successful operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Loss Prevention', desc: 'Mitigate shrinkage from shoplifting and internal theft with high-res monitoring.', icon: ShieldCheck },
              { title: 'Customer Analytics', desc: 'Lack of data on store traffic, hot zones, and dwell times affects sales.', icon: Users },
              { title: 'Transaction Disputes', desc: 'Difficulty in resolving POS disputes without clear video evidence.', icon: CreditCard },
            ].map((challenge, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform">
                  <challenge.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{challenge.title}</h3>
                <p className="text-sm text-slate-600 font-medium">{challenge.desc}</p>
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
            <p className="text-slate-600 font-medium max-w-2xl">
              Our intelligent retail solutions do more than record video. They provide business intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'People Counting',
                icon: Users,
                features: ['Real-time footfall data', 'Conversion rate analysis', 'Multi-entrance aggregation']
              },
              {
                title: 'Heat Map Analytics',
                icon: TrendingUp,
                features: ['Track customer paths', 'Identify popular products', 'Optimize store layout']
              },
              {
                title: 'POS Integration',
                icon: CreditCard,
                features: ['Text overlay on video', 'Quick transaction search', 'Dispute resolution']
              },
              {
                title: 'Multi-Store Management',
                icon: Store,
                features: ['Centralized dashboard', 'Remote store auditing', 'Cloud video backup']
              }
            ].map((cap, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <cap.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-4">{cap.title}</h3>
                <ul className="space-y-2">
                  {cap.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
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
            <h2 className="text-3xl font-bold text-brand-navy">Application Scenarios</h2>
          </div>

          <div className="space-y-24">
            {/* Scenario 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop" alt="Checkout & POS" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Checkout & POS Counters</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Monitor cash registers closely to prevent internal theft and resolve customer disputes. Our cameras integrate directly with your POS system to overlay transaction data onto the video feed.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> High-res audio & video recording
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Transaction-linked smart search
                  </li>
                </ul>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" alt="Store Aisles" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Store Aisles & Entrances</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Fisheye and panoramic cameras cover vast areas with zero blind spots. Integrated AI counts customers at the door and generates heatmaps of popular aisles, helping you optimize product placement.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 360° Fisheye cameras for full coverage
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> AI-driven foot traffic heatmaps
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-lightBlue/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Retail Experience?
          </h2>
          <p className="text-slate-300 font-medium mb-10 text-lg">
            Get intelligent video solutions that protect your assets and boost your sales.
          </p>
          <button
            onClick={() => triggerQuoteModal('Retail Security Consultation')}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2 mx-auto text-lg"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
}

