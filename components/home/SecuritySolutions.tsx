"use client";

import Link from 'next/link';
import { Home, Building2, ShoppingBag, Factory, GraduationCap, Hotel, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const solutionsData = [
  {
    num: '01',
    title: 'Home Security',
    icon: Home,
    desc: 'Smart high-definition cameras and video intercoms for absolute family protection.',
    slug: 'residential-cctv-solutions',
    img: '/section/serv1.jpg'
  },
  {
    num: '02',
    title: 'Office Surveillance',
    icon: Building2,
    desc: 'Centralized network recording and secure access control logs for corporate assets.',
    slug: 'commercial-office-security',
    img: '/section/serv2.jpg'
  },
  {
    num: '03',
    title: 'Retail Security',
    icon: ShoppingBag,
    desc: 'Minimize inventory loss, monitor checkout lanes, and audit billing registers.',
    slug: 'retail-surveillance-systems',
    img: '/section/serv3.jpg'
  },
  {
    num: '04',
    title: 'Industrial Security',
    icon: Factory,
    desc: 'Weatherproof high-range bullet grids for factory yards and heavy logistics bays.',
    slug: 'industrial-monitoring',
    img: '/section/serv1.jpg'
  },
  {
    num: '05',
    title: 'School & Campus Security',
    icon: GraduationCap,
    desc: 'Guard perimeter walls, classroom lobbies, and play areas for student safety.',
    slug: 'school-security',
    img: '/section/serv2.jpg'
  },
  {
    num: '06',
    title: 'Hotel & Hospitality Security',
    icon: Hotel,
    desc: 'Discreet surveillance and smart access locks that blend with luxury decors.',
    slug: 'hotel-security',
    img: '/section/serv3.jpg'
  }
];

export default function SecuritySolutions() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-widest">
            <span className="w-6 h-[1.5px] bg-brand-blue/60" />
            Tailored Security Solutions
            <span className="w-6 h-[1.5px] bg-brand-blue/60" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy tracking-tight">
            Smart Protection <span className="text-brand-blue">for Every Environment</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-text max-w-2xl mx-auto font-medium leading-relaxed pt-1">
            Explore customized CCTV, surveillance, and access-control solutions designed for homes, businesses, industries, and public spaces.
          </p>
        </div>

        {/* 6 Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutionsData.map((sol, idx) => {
            const Icon = sol.icon;
            const isMiddle = idx % 3 === 1;

            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group relative h-[400px] rounded-[24px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200/80 bg-white"
              >
                {/* Background Environment Image */}
                <img
                  src={sol.img}
                  alt={sol.title}
                  onError={(e) => {
                    // Fallback to service image if specific solution photo is not uploaded yet
                    e.currentTarget.src = `/section/serv${(idx % 3) + 1}.jpg`;
                  }}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Dark Navy Wave Overlay Layer */}
                <svg
                  className={`absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-500 ${isMiddle
                      ? 'opacity-0 group-hover:opacity-95'
                      : 'opacity-95 group-hover:opacity-0'
                    }`}
                  viewBox="0 0 400 390"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 100 Q 130 190 400 240 L 400 390 L 0 390 Z"
                    fill="#0B1E3B"
                  />
                </svg>

                {/* White Wave Overlay Layer */}
                <svg
                  className={`absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-500 ${isMiddle
                      ? 'opacity-100 group-hover:opacity-0'
                      : 'opacity-0 group-hover:opacity-100'
                    }`}
                  viewBox="0 0 400 390"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 100 Q 130 190 400 240 L 400 390 L 0 390 Z"
                    fill="#FFFFFF"
                  />
                </svg>

                {/* Floating Icon Box */}
                <div className={`absolute top-5 left-5 z-20 p-3.5 rounded-[16px] shadow-md border flex items-center justify-center group-hover:scale-105 transition-all duration-500 ${isMiddle
                    ? 'bg-[#EFF6FF] text-brand-blue border-blue-100 group-hover:bg-brand-blue group-hover:text-white'
                    : 'bg-white text-brand-blue border-slate-100/80 group-hover:bg-brand-blue group-hover:text-white'
                  }`}>
                  <Icon className="w-6 h-6 transition-colors duration-500" />
                </div>

                {/* Overlay Text Details */}
                <div className="absolute bottom-6 left-6 right-6 z-20 space-y-3">
                  <h3 className={`font-extrabold text-xl sm:text-2xl tracking-tight leading-snug transition-colors duration-500 ${isMiddle
                      ? 'text-[#0B1E3B] group-hover:text-white'
                      : 'text-white group-hover:text-[#0B1E3B]'
                    }`}>
                    {sol.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 font-medium transition-colors duration-500 ${isMiddle
                      ? 'text-slate-600 group-hover:text-slate-300'
                      : 'text-slate-300 group-hover:text-slate-600'
                    }`}>
                    {sol.desc}
                  </p>


                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
