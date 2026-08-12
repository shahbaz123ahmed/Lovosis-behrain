"use client";

import Link from 'next/link';
import { Camera, Eye, Server, Key, Tv, Fingerprint, HardDrive, Cpu, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categoriesData = [
  {
    num: '01',
    title: 'Network Cameras',
    icon: Camera,
    desc: 'High-definition IP cameras packed with advanced AI human detection.',
    img: '/section/serv1.jpg'
  },
  {
    num: '02',
    title: 'Analog Cameras',
    icon: Eye,
    desc: 'Professional analog cameras offering dependable security recording.',
    img: '/section/serv2.jpg'
  },
  {
    num: '03',
    title: 'PTZ Cameras',
    icon: Tv,
    desc: 'Pan, tilt, and zoom cameras for comprehensive area coverage.',
    img: '/section/serv3.jpg'
  },
  {
    num: '04',
    title: 'Thermal Cameras',
    icon: Camera,
    desc: 'Thermal imaging cameras for specialized temperature detection.',
    img: '/section/serv1.jpg'
  },
  {
    num: '05',
    title: 'Intelligent Traffic',
    icon: Tv,
    desc: 'Advanced traffic management and monitoring products.',
    img: '/section/serv2.jpg'
  },
  {
    num: '06',
    title: 'Network Video Recorders',
    icon: Server,
    desc: 'Centralized IP recording systems supporting smart search and high-capacity storage.',
    img: '/section/serv3.jpg'
  },
  {
    num: '07',
    title: 'Digital Video Recorders',
    icon: Server,
    desc: 'Hybrid DVRs supporting multiple formats for versatile recording.',
    img: '/section/serv1.jpg'
  },
  {
    num: '08',
    title: 'Storage',
    icon: HardDrive,
    desc: 'High-capacity video storage arrays and expandable enclosures.',
    img: '/section/serv2.jpg'
  }
];

export default function ProductCategories() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
            Our Security Product Range
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full" />
          <p className="text-base text-brand-text font-medium leading-relaxed">
            Explore reliable and advanced surveillance products for every security requirement.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoriesData.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="group relative flex flex-col justify-between bg-white rounded-none border border-brand-borderGray hover:border-brand-blue hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Category Image Area */}
                  <div className="aspect-[4/3] w-full overflow-hidden bg-brand-softGray relative rounded-none">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      onError={(e) => {
                        // fallback to a service image if specific category image doesn't exist yet
                        e.currentTarget.src = `/section/serv${(idx % 3) + 1}.jpg`;
                      }}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    />

                    {/* Subtle Overlay on Hover */}
                    <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-all duration-300" />

                    {/* Hover Floating Icon: Square turns to rotated diamond */}
                    <div className="absolute top-4 right-4 bg-white text-brand-navy w-9 h-9 flex items-center justify-center border border-brand-borderGray shadow-sm transition-all duration-300 z-10 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:rotate-45">
                      <Icon className="w-4.5 h-4.5 group-hover:-rotate-45 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Card Description */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-lg text-brand-navy group-hover:text-brand-blue transition-colors duration-300">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-brand-text line-clamp-3 leading-relaxed font-semibold">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <Link
                    href={`/categories/${cat.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:underline uppercase tracking-wider group-hover:text-brand-navy transition-colors duration-300"
                  >
                    View Categories
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
