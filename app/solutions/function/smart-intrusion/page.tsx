"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  BellRing, 
  Siren, 
  Search, 
  Video, 
  Building2,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Eye,
  Crosshair
} from 'lucide-react';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

export default function SmartIntrusionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 bg-brand-navy z-0">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/20 text-brand-lightBlue border border-brand-blue/30 text-xs font-bold tracking-widest uppercase mb-4">
              Function Solution
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Smart Intrusion <br/><span className="text-brand-blue">Prevention</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
              Eliminate false alarms and stop intruders in their tracks. Our AI-powered intrusion detection accurately identifies humans and vehicles while actively deterring threats.
            </p>
            <button
              onClick={() => triggerQuoteModal('Smart Intrusion Prevention')}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-brand-blue/30 flex items-center gap-2 mx-auto"
            >
              <span>Explore SIP Technology</span>
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
            <span className="text-slate-900">Smart Intrusion Prevention</span>
          </div>
        </div>
      </div>

      {/* 2. Challenges & Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">The Challenge with Traditional Motion Detection</h2>
            <p className="text-slate-600 font-medium">
              Standard motion detection triggers on everything—leaves blowing, animals passing, or shadows shifting. This leads to alert fatigue and delayed responses to real security breaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Excessive False Alarms', desc: 'Over 90% of traditional motion alerts are triggered by non-threatening environmental factors.', icon: BellRing },
              { title: 'Delayed Deterrence', desc: 'Passive recording means you only find out about a break-in after the damage is already done.', icon: ShieldAlert },
              { title: 'Inefficient Searching', desc: 'Hours wasted manually reviewing footage to find the specific moment an intruder entered.', icon: Search },
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

      {/* 3. Core Capabilities (Now with Images) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">How Smart Intrusion Prevention Works</h2>
            <p className="text-slate-600 font-medium max-w-2xl">
              Our advanced deep learning algorithms filter out the noise and focus on what matters: Humans and Vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'AI Target Classification',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
                features: ['Filters animals & shadows', 'Human/Vehicle recognition', '99% false alarm reduction']
              },
              {
                title: 'Active Deterrence',
                image: 'https://images.unsplash.com/photo-1621252179027-9d7a22a36b13?q=80&w=2070&auto=format&fit=crop',
                features: ['Flashing strobe lights', 'Customizable audio warnings', 'Stops intruders immediately']
              },
              {
                title: 'Line Crossing & Zones',
                image: 'https://images.unsplash.com/photo-1517722014278-c256a91a6fba?q=80&w=2070&auto=format&fit=crop',
                features: ['Custom virtual boundaries', 'Multi-zone configuration', 'Directional detection']
              },
              {
                title: 'Smart Search Retrieval',
                image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
                features: ['Search by human/vehicle', 'Instant event playback', 'Saves hours of review']
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
            <h2 className="text-3xl font-bold text-brand-navy">Application Scenarios</h2>
          </div>

          <div className="space-y-24">
            {/* Scenario 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1541888078696-932d0f3dfa74?q=80&w=2070&auto=format&fit=crop" alt="Perimeter Protection" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Perimeter Protection</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Secure the boundaries of residential complexes, industrial parks, or corporate campuses. By drawing virtual lines along fences or walls, the system instantly detects anyone attempting to cross, while ignoring moving branches or roaming animals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Virtual line-crossing detection
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Ignore environmental motion
                  </li>
                </ul>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1563207153-f404786d5e78?q=80&w=2071&auto=format&fit=crop" alt="Restricted Areas" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Restricted Area Enforcement</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Protect hazardous zones, server rooms, or private driveways. Draw an intrusion box over the specific area. If a human or vehicle enters the zone, active deterrence kicks in with flashing lights and a voice warning to leave immediately.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Custom intrusion zones
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Audio-visual deterrence warnings
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
            Stop Intruders Before They Act
          </h2>
          <p className="text-slate-300 font-medium mb-10 text-lg">
            Upgrade to AI-powered Smart Intrusion Prevention and secure your property with true active deterrence.
          </p>
          <button
            onClick={() => triggerQuoteModal('Smart Intrusion SIP Inquiry')}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-blue/30 flex items-center gap-2 mx-auto text-lg"
          >
            <span>Request SIP Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
}
