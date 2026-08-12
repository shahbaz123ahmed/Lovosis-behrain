"use client";

import Link from 'next/link';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';
const servicesData = [
  {
    title: 'Network Cameras',
    desc: 'High-definition network cameras with advanced AI features for comprehensive surveillance and security monitoring.',
    img: '/section/serv1.jpg',
    link: '/products?category=Network%20Cameras'
  },
  {
    title: 'Network Video Recorders',
    desc: 'Reliable and scalable NVR systems offering centralized storage, high performance, and smart search capabilities.',
    img: '/section/serv2.jpg',
    link: '/products?category=Network%20Video%20Recorders'
  },
  {
    title: 'Access Control',
    desc: 'Advanced access control solutions including biometric terminals and card readers for secure entry management.',
    img: '/section/serv3.jpg',
    link: '/products?category=Access%20Control'
  }
];

export default function SecureServices() {
  return (
    <section className="bg-white py-12 md:py-16 border-b border-brand-borderGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          {/* CCTV Line Icon divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-brand-borderGray/80" />
            <Camera className="w-5 h-5 text-brand-navy" />
            <div className="h-[1px] w-12 bg-brand-borderGray/80" />
          </div>

          <span className="block text-[10px] md:text-xs font-bold text-brand-navy uppercase tracking-widest">
            Comprehensive Security Solutions
          </span>

          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy">
            Advanced <span className="text-brand-blue">Surveillance Systems</span>
          </h2>

          <p className="text-xs md:text-sm text-brand-text font-medium leading-relaxed max-w-2xl mx-auto">
            Explore our state-of-the-art security products designed to protect your premises. From high-definition network cameras to robust access control systems, we provide reliable and innovative solutions for every security requirement.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center text-center space-y-3 cursor-pointer"
            >
              {/* Title above image */}
              <h3 className="font-extrabold text-lg text-brand-navy group-hover:text-brand-blue transition-colors duration-300">
                {item.title}
              </h3>

              {/* Image with Inset Border Hover Effect */}
              <Link href={item.link} className="w-full">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-none border border-brand-borderGray/60 bg-brand-softGray shadow-xs max-w-sm mx-auto">
                  {/* Visual Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Darkening Overlay on Hover */}
                  <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-300" />

                  {/* Custom Inset White Rectangular Outline on Hover */}
                  <div className="absolute inset-3 border-2 border-white/90 rounded-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-10" />
                </div>
              </Link>

              {/* Description below image */}
              <p className="text-[11px] md:text-xs text-brand-text leading-relaxed font-semibold max-w-xs">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
