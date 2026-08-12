"use client";

import { Star, MessageSquare, Phone, ShieldAlert, CheckCircle2, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

export default function TestimonialsCTA() {
  const whatsappNumber = "+1234567890";
  const msg = encodeURIComponent("Hello! I saw your CCTV & Security Solutions banner and would like to request a free system consultation.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${msg}`;

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-lightBlue/30 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Segment Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-lightBlue/50 px-4 py-1.5 rounded-full border border-brand-lightBlue">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy leading-tight">
            Trusted by Enterprise <br className="hidden md:block"/> and Residential Clients
          </h2>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-slate-50 border border-slate-200 p-8 rounded-3xl flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-6">
                <Quote className="w-10 h-10 text-brand-blue/20 group-hover:text-brand-blue transition-colors" />
                
                {/* Star rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                  ))}
                </div>
                {/* Testimonial message */}
                <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                  &quot;{test.comment}&quot;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200 mt-8">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-lg">
                  {test.initials}
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">{test.name}</h4>
                  <p className="text-xs text-brand-blue font-bold uppercase tracking-wider">{test.businessType}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glowing circular backgrounds */}
          <div className="absolute top-[-100px] right-[-100px] w-96 h-96 rounded-full bg-white/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-100px] left-[-100px] w-80 h-80 rounded-full bg-black/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="space-y-6 max-w-2xl text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white uppercase tracking-wider border border-white/20 backdrop-blur-sm">
                <ShieldAlert className="w-4 h-4" />
                Free Security Blueprint
              </span>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Secure Your Property With True Experts.
              </h3>
              <p className="text-lg text-blue-50 leading-relaxed font-medium">
                Stop guessing. Our engineers will help you select the right cameras, recording systems, and access control for your exact layout.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => triggerQuoteModal("General Consultation Request")}
                className="bg-brand-navy hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-brand-navy/20 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                Get Free Consultation
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:+18005557233"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-3 rounded-xl text-sm transition-all border border-white/10 flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-4 py-3 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                  WhatsApp
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
