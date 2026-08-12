"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, ShieldCheck, Fingerprint, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const trustItems = [
  'Authorized Distributor',
  'Genuine Products Only',
  'Professional Installation',
  '24/7 Technical Support',
  'Warranty Assistance'
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = 5;

  // Exact time for each slide's content animations to finish + 1 second pause before auto-advancing
  const slideDurations = [6600, 5700, 7000, 5300, 5300];

  // Auto-play slider effect timed to switch 1 second after all slide content finishes appearing
  useEffect(() => {
    if (isPaused) return;
    const duration = slideDurations[currentSlide] || 6000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, duration);

    return () => clearTimeout(timer);
  }, [currentSlide, isPaused, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      {/* Full Hero Banner Section */}
      <section 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className={`relative h-[520px] sm:h-[600px] lg:h-[680px] flex items-center overflow-hidden transition-colors duration-700 ${currentSlide === 1 ? 'bg-slate-900' : 'bg-[#1489f5]'}`}
      >
        
        {/* Blurred Background Texture Image ONLY for Slide 3 */}
        {currentSlide === 2 && (
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: `url('/section/blur.jpg')` }}
          />
        )}

        {/* Slide 2 Full Background Image */}
        {currentSlide === 1 && (
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{ backgroundImage: `url('/section/slider2.jpg')` }}
          >
            {/* Soft Ambient Overlay for readability */}
            <div className="absolute inset-0 bg-white/20 sm:bg-transparent" />
          </div>
        )}

        {/* Slide 4 Full Background Image (Cloud Surveillance) */}
        {currentSlide === 3 && (
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{ backgroundImage: `url('/section/slider4.jpg')` }}
          >
            <div className="absolute inset-0 bg-black/20 sm:bg-black/10" />
          </div>
        )}

        {/* Slide 5 Full Background (Clean Brand Blue #1489f5) */}
        {currentSlide === 4 && (
          <div className="absolute inset-0 z-0 bg-[#1489f5] transition-all duration-700" />
        )}

        {/* Slider Nav Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Slide Content with AnimatePresence for Smooth Transitions */}
        <AnimatePresence mode="wait">
          {/* SLIDE 1 CONTENT */}
          {currentSlide === 0 && (
            <motion.div
              key="slide-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 w-full h-full relative z-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center h-full">
                
                {/* Left Column: Text & Features */}
                <div className="lg:col-span-7 space-y-7 sm:space-y-9 text-white z-10 py-6 lg:-ml-4 flex flex-col justify-center">
                  
                  {/* Main Headings */}
                  <div className="space-y-1.5">
                    <motion.h1
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1.0] }}
                      className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-tight bg-gradient-to-r from-white via-blue-50 to-cyan-100 bg-clip-text text-transparent drop-shadow-sm"
                    >
                      SAFETY &amp; SECURITY
                    </motion.h1>

                    <motion.h2
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.45, ease: [0.215, 0.61, 0.355, 1.0] }}
                      className="text-lg sm:text-2xl lg:text-3xl font-extralight text-cyan-200 tracking-[0.2em] uppercase"
                    >
                      AT YOUR FINGERTIPS
                    </motion.h2>
                  </div>

                  {/* 3 Glass Icon Feature Cards - Sequential Entrance */}
                  <div className="flex items-center gap-6 sm:gap-8 pt-3 pb-3">
                    <motion.div
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                      initial={{ opacity: 0, scale: 0.75, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 1.4, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                        <ProtectionShieldIcon className="w-full h-full object-contain" />
                      </div>
                      <span className="text-[12px] sm:text-sm font-semibold tracking-wider text-white">Protection</span>
                    </motion.div>

                    <motion.div
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                      initial={{ opacity: 0, scale: 0.75, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 1.4, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                        <SecurityShieldIcon className="w-full h-full object-contain" />
                      </div>
                      <span className="text-[12px] sm:text-sm font-semibold tracking-wider text-white">Security</span>
                    </motion.div>

                    <motion.div
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                      initial={{ opacity: 0, scale: 0.75, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 1.4, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                        <FingerprintShieldIcon className="w-full h-full object-contain" />
                      </div>
                      <span className="text-[12px] sm:text-sm font-semibold tracking-wider text-white">Fingerprint</span>
                    </motion.div>
                  </div>

                  {/* Description Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, delay: 3.4, ease: [0.16, 1, 0.3, 1] }}
                    className="border-l-2 border-cyan-300/80 pl-4 text-xs sm:text-sm text-blue-50/90 leading-relaxed font-normal max-w-lg"
                  >
                    Comprehensive security systems including intrusion detection, access control, video surveillance, fire detection, and 24/7 monitoring.
                  </motion.p>

                  {/* Read More Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, delay: 4.0, ease: [0.16, 1, 0.3, 1] }}
                    className="pt-4 sm:pt-6"
                  >
                    <Link
                      href="/products"
                      className="inline-flex items-center justify-center gap-2 bg-white text-[#1489f5] hover:bg-cyan-50 font-extrabold px-8 py-3.5 rounded-full text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                    >
                      Read More
                    </Link>
                  </motion.div>

                </div>

                {/* Right Column: Technician Image */}
                <motion.div
                  className="hidden lg:flex lg:col-span-5 absolute right-0 top-0 bottom-0 h-full w-[52%] justify-end items-end pointer-events-none z-0"
                  initial={{ x: '45%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 2.2,
                    delay: 0.1,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                >
                  <img
                    src="/section/slider1-img1.webp"
                    alt="Security Technician installing CCTV Camera"
                    className="h-full w-auto max-w-none object-cover object-right-top lg:object-contain lg:object-right-bottom"
                  />
                </motion.div>

              </div>
            </motion.div>
          )}

          {/* SLIDE 2 CONTENT (Slow motion reveal for all elements) */}
          {currentSlide === 1 && (
            <motion.div
              key="slide-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 w-full h-full relative z-10 flex items-center justify-end"
            >
              <div className="max-w-lg sm:max-w-xl space-y-5 sm:space-y-6 text-right flex flex-col items-end z-10 -mt-8 sm:-mt-12 py-4 pr-2 sm:pr-6">

                {/* Motion 1 & 2: Main Headings (Slow Motion Entrance) */}
                <div className="space-y-3 sm:space-y-4 text-right flex flex-col items-end">
                  {/* 1. Line 1 glides up slowly */}
                  <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-normal text-[#0a0a0a] uppercase leading-tight"
                  >
                    MONITOR YOUR
                  </motion.h1>

                  {/* 2. Line 2 slides in from the RIGHT side slowly */}
                  <motion.h1
                    initial={{ opacity: 0, x: 70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-normal text-[#0a0a0a] uppercase leading-tight"
                  >
                    HOME AND BUSINESS
                  </motion.h1>
                </div>

                {/* 3. Blue Highlight Box glides up slowly */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.6, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-1 pb-1"
                >
                  <div className="bg-[#1b9bf0] text-white px-4 sm:px-6 py-2 sm:py-2.5 font-medium text-sm sm:text-xl lg:text-2xl tracking-normal shadow-sm inline-block">
                    From anywhere in the world 24/7
                  </div>
                </motion.div>

                {/* 4. White Border Button glides up slowly */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.6, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-2"
                >
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-black font-semibold px-6 sm:px-8 py-2 sm:py-2.5 rounded-none text-xs sm:text-xs tracking-wider uppercase transition-all duration-300 shadow-md"
                  >
                    Read More
                  </Link>
                </motion.div>

              </div>
            </motion.div>
          )}

          {/* SLIDE 3 CONTENT (Sequence: Image appears middle -> glides to bottom; Heading comes middle -> glides up; Subheading comes center -> glides up) */}
          {currentSlide === 2 && (
            <motion.div
              key="slide-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 w-full h-full relative z-10 flex flex-col justify-between items-center pt-8 sm:pt-12 pb-0 text-center"
            >
              {/* Top Centered Text Container */}
              <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 max-w-4xl lg:max-w-5xl z-10">

                {/* 2. Main Heading: Glides UP into top place after slow-motion image entrance (delay: 2.2s) */}
                <motion.h1
                  initial={{ opacity: 0, y: 55 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.6, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-normal text-white uppercase leading-tight drop-shadow-sm whitespace-nowrap"
                >
                  PROTECT YOUR BUSINESS &amp; HOME NOW
                </motion.h1>

                {/* 3. Subtitle: Glides UP into place (delay: 3.2s) */}
                <motion.p
                  initial={{ opacity: 0, y: 45 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.6, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-sm sm:text-lg text-blue-100/90 font-normal tracking-wide"
                >
                  We guarantee you total safety and happiness
                </motion.p>

                {/* 4. White Border Outline Button: Glides UP (delay: 4.0s) */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, delay: 4.0, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-2"
                >
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center border border-white/90 text-white hover:bg-white hover:text-[#1489f5] font-semibold px-7 sm:px-9 py-2 sm:py-2.5 rounded-none text-xs sm:text-xs tracking-wider uppercase transition-all duration-300 shadow-md backdrop-blur-xs"
                  >
                    Read More
                  </Link>
                </motion.div>

              </div>

              {/* 1. Hardware Assembly Image (slider3.webp): Appears slowly in slow-motion (duration: 2.5s) */}
              <motion.div
                className="w-full flex justify-center items-end mt-2 mb-8 sm:mb-12 lg:mb-16 pointer-events-none z-0 overflow-hidden"
                initial={{ opacity: 0, y: -160, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 2.5,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <img
                  src="/section/slider3.webp"
                  alt="Security Alarm Console, Sensors, Keyfob, and Dome Cameras"
                  className="max-h-[260px] sm:max-h-[350px] lg:max-h-[410px] w-auto object-contain object-bottom drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}

          {/* SLIDE 4 CONTENT (slider4.jpg - Cloud Surveillance, Left-Aligned) */}
          {currentSlide === 3 && (
            <motion.div
              key="slide-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 w-full h-full relative z-10 flex items-center justify-start"
            >
              <div className="max-w-lg sm:max-w-xl space-y-5 sm:space-y-6 text-left flex flex-col items-start z-10 -mt-6 sm:-mt-10 py-4 pl-2 sm:pl-6">

                {/* Main Headings */}
                <div className="space-y-3 sm:space-y-4 text-left flex flex-col items-start">
                  <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight drop-shadow-md"
                  >
                    CLOUD SURVEILLANCE
                  </motion.h1>

                  <motion.h2
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg sm:text-2xl lg:text-3xl font-medium tracking-normal text-cyan-200 uppercase leading-tight drop-shadow-sm"
                  >
                    AI POWERED REMOTE STORAGE
                  </motion.h2>
                </div>

                {/* Subtitle / Description */}
                <motion.p
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xs sm:text-sm text-blue-50/90 leading-relaxed font-normal max-w-md border-l-2 border-cyan-300 pl-4"
                >
                  Secure encrypted cloud backup with real-time mobile alerts and 24/7 remote video playback from anywhere.
                </motion.p>

                {/* White Border Button */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-2"
                >
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-black font-semibold px-7 sm:px-9 py-2.5 sm:py-3 rounded-none text-xs sm:text-xs tracking-wider uppercase transition-all duration-300 shadow-md"
                  >
                    Read More
                  </Link>
                </motion.div>

              </div>
            </motion.div>
          )}

          {/* SLIDE 5 CONTENT (slider5.png- Ultra HD 4K Vision, Right-Aligned) */}
          {currentSlide === 4 && (
            <motion.div
              key="slide-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 w-full h-full relative z-10 flex items-center justify-end"
            >
              {/* Left Column: 3 CCTV Security Cameras Pole (slider5.png) */}
              <motion.div
                className="flex absolute -left-6 sm:-left-10 lg:-left-14 top-0 bottom-0 h-full w-[50%] sm:w-[55%] lg:w-[60%] items-end justify-start pointer-events-none z-0"
                initial={{ x: '-20%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <img
                  src="/section/slider5.png"
                  alt="Ultra HD 4K Multi-Camera Security Pole"
                  className="h-full max-h-[500px] sm:max-h-[600px] lg:max-h-[680px] w-auto object-contain object-bottom object-left drop-shadow-2xl"
                />
              </motion.div>

              {/* Right Column: Text Content */}
              <div className="max-w-lg sm:max-w-xl space-y-5 sm:space-y-6 text-right flex flex-col items-end z-10 -mt-6 sm:-mt-10 py-4 pr-2 sm:pr-6">

                {/* Main Headings */}
                <div className="space-y-3 sm:space-y-4 text-right flex flex-col items-end">
                  <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight drop-shadow-md"
                  >
                    ULTRA HD 4K VISION
                  </motion.h1>

                  <motion.h1
                    initial={{ opacity: 0, x: 70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl sm:text-3xl lg:text-4xl font-semibold tracking-normal text-blue-100 uppercase leading-tight"
                  >
                    SMART NIGHT VISION
                  </motion.h1>
                </div>

                {/* Highlight Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-1 pb-1"
                >
                  <div className="bg-white text-[#1489f5] px-4 sm:px-6 py-2 sm:py-2.5 font-bold text-xs sm:text-base lg:text-lg tracking-wider uppercase shadow-md inline-block">
                    Next-Gen Smart Security Solutions
                  </div>
                </motion.div>

                {/* White Border Button */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-2"
                >
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-[#1489f5] font-semibold px-7 sm:px-9 py-2.5 sm:py-3 rounded-none text-xs sm:text-xs tracking-wider uppercase transition-all duration-300 shadow-md"
                  >
                    Read More
                  </Link>
                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>

      {/* Trust Strip */}
      <section className="bg-white border-b border-brand-borderGray py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {trustItems.map((text, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 p-3 bg-brand-softGray rounded-brand-sm border border-brand-borderGray shadow-xs text-xs font-bold text-brand-navy"
              >
                <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// 1. Protection Icon (Heraldic Shield with Quadrants & Rivet Dots - 70x70 Proportional Width)
function ProtectionShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M35 6 C50 6 61 13 61 13 C61 41 48 59 35 66 C22 59 9 41 9 13 C9 13 20 6 35 6 Z"
        fill="white"
        stroke="#1c4974"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="23" cy="13" r="1.5" fill="#1c4974" />
      <circle cx="47" cy="13" r="1.5" fill="#1c4974" />
      <circle cx="15" cy="24" r="1.5" fill="#1c4974" />
      <circle cx="55" cy="24" r="1.5" fill="#1c4974" />
      <circle cx="18" cy="40" r="1.5" fill="#1c4974" />
      <circle cx="52" cy="40" r="1.5" fill="#1c4974" />
      <circle cx="25" cy="52" r="1.5" fill="#1c4974" />
      <circle cx="45" cy="52" r="1.5" fill="#1c4974" />

      <path
        d="M35 15 C45 15 51 20 51 20 C51 39 42 51 35 56 C28 51 19 39 19 20 C19 20 25 15 35 15 Z"
        fill="white"
        stroke="#1c4974"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      <path d="M35 15 C25 15 19 20 19 20 V35 H35 V15 Z" fill="#93c5fd" />
      <path d="M35 35 H51 C50.5 43 42 51 35 56 V35 Z" fill="#93c5fd" />

      <line x1="35" y1="15" x2="35" y2="56" stroke="#1c4974" strokeWidth="3" />
      <line x1="19" y1="35" x2="51" y2="35" stroke="#1c4974" strokeWidth="3" />

      <path
        d="M35 15 C45 15 51 20 51 20 C51 39 42 51 35 56 C28 51 19 39 19 20 C19 20 25 15 35 15 Z"
        fill="none"
        stroke="#1c4974"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 2. Security Shield Icon (Checkmark inside Shield - 70x70 Proportional Width)
function SecurityShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M35 6 C50 6 61 13 61 13 C61 41 48 59 35 66 C22 59 9 41 9 13 C9 13 20 6 35 6 Z"
        fill="white"
        stroke="#1c4974"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M 50 30 A 17 17 0 1 1 35 18"
        fill="none"
        stroke="#1c4974"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M26 35 L34 43 L50 24"
        fill="none"
        stroke="#7dd3fc"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 35 L34 43 L50 24"
        fill="none"
        stroke="#1c4974"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 3. Fingerprint Shield Icon (Fingerprint inside Shield - 70x70 Proportional Width)
function FingerprintShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M35 6 C50 6 61 13 61 13 C61 41 48 59 35 66 C22 59 9 41 9 13 C9 13 20 6 35 6 Z"
        fill="white"
        stroke="#1c4974"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M 31 46 C 27 42 25 36.5 25 31 C 25 25.5 29 20.5 35 20.5 C 41 20.5 45 25.5 45 31 C 45 35.5 43.5 41 39.5 44" stroke="#1c4974" strokeWidth="3" strokeLinecap="round" />
      <path d="M 27 51 C 22 45 20 37.5 20 31 C 20 22.5 26.5 16 35 16 C 43.5 16 50 22.5 50 31 C 50 38.5 47.5 45 43.5 49" stroke="#1c4974" strokeWidth="3" strokeLinecap="round" />
      <path d="M 37 31 C 37 29.5 36 27.5 35 27.5 C 34 27.5 33 29.5 33 31 C 33 35.5 34 39 35 42.5" stroke="#1c4974" strokeWidth="3" strokeLinecap="round" />
      <path d="M 29.5 26.5 C 31 25.5 33 24.5 35 24.5 C 37 24.5 39 25.5 40.5 26.5 C 41 28.5 41 32 40.5 34.5 C 39.5 37 37.5 40.5 37.5 46.5" stroke="#1c4974" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// Custom simple CheckCircle graphic
function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}
