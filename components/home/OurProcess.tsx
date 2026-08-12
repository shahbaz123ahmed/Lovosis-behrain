"use client";

import { FileText, Search, Wrench, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Requirement Analysis',
    icon: FileText,
    desc: 'Understanding coverage areas, resolution needs, biometric locations, and project budget.'
  },
  {
    num: '02',
    title: 'Site Inspection',
    icon: Search,
    desc: 'Evaluating physical layout, wall materials, lighting variables, and cable pathway layouts.'
  },
  {
    num: '03',
    title: 'Product Selection',
    icon: Wrench,
    desc: 'Selecting optimized cameras, recording models, storage options, and PoE power configs.'
  },
  {
    num: '04',
    title: 'Installation & Support',
    icon: ShieldAlert,
    desc: 'Conducting clean physical wiring, angles testing, app pairing, and technical handoffs.'
  }
];

export default function OurProcess() {
  return (
    <section className="bg-brand-lightBlue py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-brand-borderGray shadow-xs">
            Our Deployment Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy pt-2">
            From Security Assessment to Installation
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full" />
          <p className="text-base text-brand-text font-medium">
            A systematic layout process ensuring no blind spots, clean setups, and complete peace of mind.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-0.5 bg-brand-borderGray z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex lg:flex-col items-start lg:items-center text-left lg:text-center gap-5 lg:gap-4 p-5 bg-white lg:bg-transparent rounded-brand-sm border border-brand-borderGray/40 lg:border-none shadow-xs lg:shadow-none"
                >
                  {/* Step Icon & Number Indicator */}
                  <div className="relative shrink-0 flex items-center justify-center">
                    {/* Circle icon */}
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Floating number badge */}
                    <span className="absolute -top-1 -right-1 bg-brand-navy text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full border border-white">
                      {step.num}
                    </span>
                  </div>

                  {/* Text descriptions */}
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-base text-brand-navy">
                      {step.title}
                    </h3>
                    <p className="text-xs text-brand-text leading-relaxed font-semibold max-w-xs">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
