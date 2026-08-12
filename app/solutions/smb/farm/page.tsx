"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Tractor, 
  Sun, 
  Wifi, 
  Eye, 
  ShieldAlert, 
  Leaf,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Map,
  Moon
} from 'lucide-react';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

export default function FarmSolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 bg-brand-navy z-0">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop')] bg-cover bg-center"></div>
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
              Smart Farm <br/><span className="text-brand-blue">& Agricultural Security</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
              Protect vast perimeters, remote equipment, and livestock with advanced, off-grid security systems powered by solar energy and wireless transmission.
            </p>
            <button
              onClick={() => triggerQuoteModal('Farm Security Blueprint')}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-brand-blue/30 flex items-center gap-2 mx-auto"
            >
              <span>Get Your Farm Blueprint</span>
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
            <span className="text-slate-900">Farm & Agriculture</span>
          </div>
        </div>
      </div>

      {/* 2. Challenges & Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Unique Challenges of Farm Security</h2>
            <p className="text-slate-600 font-medium">
              Farms face unique vulnerabilities including massive perimeters, lack of electrical infrastructure in fields, and the high value of isolated heavy machinery and livestock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Vast Perimeters', desc: 'Monitoring hundreds of acres manually is impossible, leaving fences and borders vulnerable.', icon: Map },
              { title: 'No Power or Internet', desc: 'Remote fields and barns often lack the electrical and network wiring needed for traditional cameras.', icon: Wifi },
              { title: 'Livestock & Asset Theft', desc: 'Tractors, expensive fertilizers, and livestock are prime targets in isolated rural areas.', icon: Tractor },
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
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Tailored Agricultural Technology</h2>
            <p className="text-slate-600 font-medium max-w-2xl">
              We provide heavy-duty, off-grid solutions specifically engineered to withstand harsh agricultural environments while providing enterprise-grade security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Solar Powered Setups',
                image: 'https://images.unsplash.com/photo-1509391366360-12009a325852?q=80&w=2070&auto=format&fit=crop',
                features: ['100% wire-free operation', 'Built-in lithium batteries', 'Continuous recording in rain']
              },
              {
                title: 'Wireless Transmission',
                image: 'https://images.unsplash.com/photo-1620912189868-30778f9022cb?q=80&w=2069&auto=format&fit=crop',
                features: ['Long-range 4G/LTE connectivity', 'Point-to-point Wi-Fi bridges', 'No cabling required']
              },
              {
                title: 'Color Night Vision',
                image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=2000&auto=format&fit=crop',
                features: ['24/7 full-color imaging', 'Exceptional detail in the dark', 'Identify vehicles at night']
              },
              {
                title: 'Perimeter Intrusion',
                image: 'https://images.unsplash.com/photo-1560026774-8b64e62bf078?q=80&w=2070&auto=format&fit=crop',
                features: ['Virtual tripwires', 'AI human/vehicle filtering', 'Active siren deterrence']
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
            <h2 className="text-3xl font-bold text-brand-navy">Key Monitoring Areas</h2>
          </div>

          <div className="space-y-24">
            {/* Scenario 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1592982537447-6f2c6a0c201a?q=80&w=2070&auto=format&fit=crop" alt="Barns and Equipment Storage" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                  <Tractor className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Barns & Machinery Storage</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Secure high-value tractors, combine harvesters, and chemical storage areas. High-definition PTZ (Pan-Tilt-Zoom) cameras provide comprehensive coverage of large indoor and outdoor storage facilities, deterring vandalism and theft.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> 360° PTZ camera coverage
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Vandal-proof heavy-duty housing
                  </li>
                </ul>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=2070&auto=format&fit=crop" alt="Livestock and Pasture" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Pasture & Livestock Monitoring</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Keep an eye on distant herds without driving miles across the property. Solar-powered 4G cameras allow you to monitor livestock health, calving seasons, and prevent rustling directly from your smartphone, anytime, anywhere.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Solar & 4G remote monitoring
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Real-time mobile alerts
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
            Secure Your Farm&apos;s Future
          </h2>
          <p className="text-slate-300 font-medium mb-10 text-lg">
            Don&apos;t let vast perimeters and lack of power leave your livelihood vulnerable. Get a customized, off-grid security system today.
          </p>
          <button
            onClick={() => triggerQuoteModal('Farm Security Consultation')}
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
