"use client";

import { ShieldCheck, HelpCircle, HardHat, Award, DollarSign, HeartHandshake, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: '100% Genuine Security Products',
    desc: 'Authorized supply directly sourced from global tier-1 brands with original warranties.',
    icon: ShieldCheck
  },
  {
    title: 'Expert Product Consultation',
    desc: 'Tailored security diagrams matching your building blueprints and coverage needs.',
    icon: HelpCircle
  },
  {
    title: 'Professional Installation Support',
    desc: 'A network of certified local CCTV technicians providing clean conduit runs and setups.',
    icon: HardHat
  },
  {
    title: 'Competitive Distributor Pricing',
    desc: 'Industry-standard pricing models designed for dealers, builders, and corporate projects.',
    icon: DollarSign
  },
  {
    title: 'Warranty & After-Sales Support',
    desc: 'Hassle-free repairs, camera replacements, firmware patches, and cloud configurations.',
    icon: HeartHandshake
  },
  {
    title: 'Solutions for Small & Large Projects',
    desc: 'From simple single-room shops up to full enterprise campuses and multi-floor buildings.',
    icon: Award
  }
];

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '50+', label: 'Product Categories' },
  { value: '24/7', label: 'Technical Assistance' }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2065&auto=format&fit=crop"
                alt="Professional Security Control Room"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/20"></div>
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px] hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="font-bold text-brand-navy leading-tight">Quality Assured Systems</div>
              </div>
              <p className="text-xs text-slate-500 font-medium">100% genuine products with full OEM warranty support.</p>
            </div>
          </motion.div>

          {/* Right Column: Benefits list */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-4 py-1.5 rounded-full">
                The Lovosis Advantage
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-navy leading-tight">
                Why Businesses Trust Our Security Solutions
              </h2>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className="flex gap-4 group"
                  >
                    <div className="bg-white border border-slate-200 text-brand-blue p-3 h-12 w-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-brand-navy">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Statistics Counters */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: 'spring', stiffness: 100 }}
                  className="text-center relative"
                >
                  <p className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider leading-snug">
                    {stat.label}
                  </p>
                  {idx !== 3 && (
                    <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-slate-100"></div>
                  )}
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
