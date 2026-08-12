"use client";

import { Users, MapPin, Smartphone, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const statsData = [
  {
    number: '250+',
    label: 'Residential Area',
    icon: Users
  },
  {
    number: '15+',
    label: 'Malls & Building',
    icon: MapPin
  },
  {
    number: '100+',
    label: 'Commercial Space',
    icon: Smartphone
  },
  {
    number: '10+',
    label: 'Years of Experience',
    icon: Award
  }
];

export default function SecurityStats() {
  return (
    <section className="bg-[#F4F6F8]/60 py-12 border-b border-brand-borderGray relative overflow-hidden">
      {/* Soft ambient background highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-lightBlue/10 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          {statsData.map((item, idx) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="group relative flex flex-col items-center justify-center p-2 w-full max-w-[230px] select-none cursor-pointer"
              >
                {/* Background watermark icon */}
                <Icon className="absolute right-5 top-1/2 -translate-y-1/2 w-16 h-16 text-brand-navy/5 group-hover:text-brand-blue/10 transition-colors duration-500 ease-in-out pointer-events-none z-0" />

                {/* Inner Text & Lines Bracket Wrapper */}
                <div className="relative p-4 py-6 w-full flex flex-col items-center justify-center z-10">
                  
                  {/* Top-Left Corner lines */}
                  {/* Horizontal line: slides right along the top */}
                  <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#111827] group-hover:bg-brand-blue group-hover:left-[calc(100%-48px)] transition-all duration-700 ease-in-out" />
                  
                  {/* Vertical line: slides down along the left */}
                  <div className="absolute top-0 left-0 w-[2px] h-12 bg-[#111827] group-hover:bg-brand-blue group-hover:top-[calc(100%-48px)] transition-all duration-700 ease-in-out" />

                  {/* Bottom-Right Corner lines */}
                  {/* Horizontal line: slides left along the bottom */}
                  <div className="absolute bottom-0 right-0 w-12 h-[2px] bg-[#111827] group-hover:bg-brand-blue group-hover:right-[calc(100%-48px)] transition-all duration-700 ease-in-out" />
                  
                  {/* Vertical line: slides up along the right */}
                  <div className="absolute bottom-0 right-0 w-[2px] h-12 bg-[#111827] group-hover:bg-brand-blue group-hover:bottom-[calc(100%-48px)] transition-all duration-700 ease-in-out" />

                  {/* Stat value */}
                  <span className="text-2xl sm:text-3xl font-extrabold text-brand-navy group-hover:text-brand-blue transition-colors duration-300 z-10">
                    {item.number}
                  </span>
                  
                  {/* Label */}
                  <span className="text-[9px] sm:text-[10px] font-bold text-brand-navy/80 group-hover:text-brand-navy uppercase tracking-widest text-center mt-2 transition-colors duration-300 z-10 max-w-[140px]">
                    {item.label}
                  </span>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
