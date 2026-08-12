"use client";

import Link from 'next/link';
import { Cpu, ShieldCheck, Lightbulb, Lock, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const featuresList = [
  {
    title: 'Hardware Never Fails',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor. Sed eget sit amet egestas.',
    icon: Cpu
  },
  {
    title: 'Always Reliable Installation',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor. Sed eget sit amet egestas.',
    icon: ShieldCheck
  },
  {
    title: 'Leading by Innovation',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor. Sed eget sit amet egestas.',
    icon: Lightbulb
  },
  {
    title: 'Smart Perimeter Security',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor. Sed eget sit amet egestas.',
    icon: Eye
  },
  {
    title: 'Highly Secured Systems',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor. Sed eget sit amet egestas.',
    icon: Lock
  }
];

export default function InnovationFeatures() {
  return (
    <section className="bg-white py-16 border-b border-brand-borderGray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 items-stretch">
          
          {/* Left Column: Image, Heading, and Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between h-full"
          >
            <div className="w-full max-w-[90%] ml-auto flex flex-col justify-between h-full">
              <div>
                {/* Product Image */}
                <div className="relative aspect-square w-full overflow-hidden border border-brand-borderGray/40 bg-brand-softGray shadow-xs rounded-none">
                  <img
                    src="/images/three_cameras.png"
                    alt="Three security cameras"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                  />
                </div>

                {/* Title & Description */}
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827] mt-4 uppercase tracking-wide">
                  Innovation is our middle name
                </h2>
                
                <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-semibold mt-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
              </div>

              {/* Custom Outline Button (Left and Bottom Blue Border) */}
              <div className="mt-5 self-start">
                <Link
                  href="/products"
                  className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-brand-blue hover:bg-brand-blue/5 transition-colors duration-300"
                >
                  {/* Custom outline: left border */}
                  <span className="absolute left-0 bottom-0 top-0 w-[2px] bg-brand-blue" />
                  {/* Custom outline: bottom border */}
                  <span className="absolute left-0 bottom-0 right-0 h-[2px] bg-brand-blue" />
                  View Our Store
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Features Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col justify-stretch h-full"
          >
            <div className="w-full max-w-[90%] mr-auto bg-[#F4F6F8]/60 py-3 px-6 sm:py-3.5 sm:px-8 rounded-none border border-brand-borderGray/40 flex flex-col justify-start relative overflow-hidden h-full z-10">
              {/* Background image pattern */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <img
                  src="/section/transparent.jpg"
                  alt="Background pattern"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Soft decorative background dot pattern */}
              <div className="absolute right-0 top-0 w-32 h-32 bg-brand-lightBlue/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-10 w-full">
                {/* Header */}
                <div className="space-y-1 pt-2">
                  <span className="block text-[10px] font-bold text-brand-navy uppercase tracking-widest">
                    Latest Devices
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-blue">
                    Unbelievable Results
                  </h3>
                </div>

                {/* Features List */}
                <div className="space-y-10">
                  {featuresList.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-5 group cursor-pointer">
                        {/* Rotated Diamond Icon Wrapper */}
                        <div className="flex-shrink-0 w-10 h-10 bg-white border border-brand-borderGray/80 rounded-xs rotate-45 flex items-center justify-center shadow-xs group-hover:border-brand-blue group-hover:shadow-sm transition-all duration-300">
                          <Icon className="-rotate-45 w-5 h-5 text-brand-navy group-hover:text-brand-blue transition-colors duration-300" />
                        </div>
                        
                        {/* Details */}
                        <div className="flex-1">
                          <h4 className="font-extrabold text-sm sm:text-base text-brand-navy mb-0 group-hover:text-brand-blue transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-xs text-brand-text leading-relaxed font-semibold">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
