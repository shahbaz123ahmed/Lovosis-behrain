"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Moon, 
  Eye, 
  Sun, 
  ShieldAlert, 
  Car, 
  Building2,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Zap
} from 'lucide-react';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

export default function NightSecurityPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 bg-brand-navy z-0">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1549558549-415fe4c37b60?q=80&w=2019&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/20 text-brand-lightBlue border border-brand-blue/30 text-xs font-bold tracking-widest uppercase mb-4">
              SMB Solution
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              24/7 Night Security <br/><span className="text-brand-blue">& ColorHunter Tech</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
              Darkness is no longer a hiding place. Our ColorHunter technology ensures vibrant, full-color surveillance even in ultra-low light environments.
            </p>
            <button
              onClick={() => triggerQuoteModal('Night Security Blueprint')}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-brand-blue/30 flex items-center gap-2 mx-auto"
            >
              <span>Explore Night Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            <Link href="/solutions" className="hover:text-brand-blue transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            <span className="text-slate-900">Night Security</span>
          </div>
        </div>
      </div>

      {/* 2. Challenges & Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">The Dangers of the Dark</h2>
            <p className="text-slate-600 font-medium">
              Over 70% of break-ins occur during the night. Traditional IR cameras capture grainy, black-and-white footage that makes identifying suspects and vehicles incredibly difficult.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Loss of Vital Details', desc: 'Black-and-white footage cannot capture the color of a suspect\'s clothing or a getaway car.', icon: Eye },
              { title: 'High Noise & Blur', desc: 'Low-light environments cause traditional cameras to produce blurry images when there is motion.', icon: Zap },
              { title: 'Increased Vulnerability', desc: 'Intruders exploit unlit areas like alleys and back lots, knowing cameras are less effective.', icon: Moon },
            ].map((challenge, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
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
            <h2 className="text-3xl font-bold text-brand-navy mb-4">ColorHunter Technology</h2>
            <p className="text-slate-600 font-medium max-w-2xl">
              Turn night into day. Our specialized hardware and AI algorithms work together to extract true colors from pitch-black environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'F1.0 Super Aperture',
                image: 'https://images.unsplash.com/photo-1516315720917-231fd9aca1ee?q=80&w=2069&auto=format&fit=crop',
                features: ['Captures 4x more light', 'Crystal clear low-light imaging', 'Reduces motion blur']
              },
              {
                title: 'Warm Supplemental Light',
                image: 'https://images.unsplash.com/photo-1498677231914-50fed3623340?q=80&w=2070&auto=format&fit=crop',
                features: ['Soft LED illumination', 'Turns on automatically', 'Acts as a visual deterrent']
              },
              {
                title: 'BSI Sensor Technology',
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
                features: ['Advanced light gathering', 'Minimal image noise', 'High megapixel clarity']
              },
              {
                title: 'Smart IR Switching',
                image: 'https://images.unsplash.com/photo-1549558549-415fe4c37b60?q=80&w=2019&auto=format&fit=crop',
                features: ['Auto transitions to color', 'Adapts to ambient light', 'No overexposure']
              }
            ].map((cap, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 hover:border-brand-blue/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col">
                <div className="h-40 w-full relative overflow-hidden bg-slate-100">
                  <img src={cap.image} alt={cap.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-lg font-bold text-brand-navy mb-4">{cap.title}</h3>
                  <ul className="space-y-2">
                    {cap.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Application Scenarios */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">Where Night Security Excels</h2>
          </div>

          <div className="space-y-24">
            {/* Scenario 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop" alt="Dark Parking Lots" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Dark Parking Lots & Alleys</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Unlit parking lots are hotspots for vehicle theft and vandalism. ColorHunter cameras provide enough illumination and clarity to capture license plates and suspect features, ensuring a safe environment for employees leaving late.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Accurately identify vehicle colors
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Prevent after-hours vandalism
                  </li>
                </ul>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2012&auto=format&fit=crop" alt="Industrial Warehouses" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Industrial Perimeters at Night</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Warehouses and factories often have massive, poorly lit perimeters. Combining night security cameras with AI intrusion detection ensures that any perimeter breach is immediately caught on crystal clear color video.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> 24/7 full-color perimeter monitoring
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Superior evidence for law enforcement
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-lightBlue/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Let the Dark Compromise Your Security
          </h2>
          <p className="text-slate-300 font-medium mb-10 text-lg">
            Upgrade to our ColorHunter technology and get unmatched clarity when you need it most.
          </p>
          <button
            onClick={() => triggerQuoteModal('Night Security Consultation')}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-blue/30 flex items-center gap-2 mx-auto text-lg"
          >
            <span>Request Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
}
