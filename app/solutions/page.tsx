"use client";

import Link from 'next/link';
import { ShieldCheck, HelpCircle, HardHat, Phone, MessageSquare, ArrowRight, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { solutions } from '@/data/solutions';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

export default function SolutionsPage() {
  const whatsappNumber = "+1234567890";
  const waMsg = encodeURIComponent("Hello Lovosis! I am interested in scheduling a site security survey for my property.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${waMsg}`;

  return (
    <div className="bg-brand-softGray min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Solutions' }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-brand-borderGray shadow-xs">
            Environmental Security
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy pt-2">
            Security Solutions for Every Environment
          </h1>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full" />
          <p className="text-base text-brand-text font-medium leading-relaxed">
            From single-door access checkpoints up to multi-site camera layouts, we design reliable, scalable security systems.
          </p>
        </div>

        {/* Alternating Solutions Grid */}
        <div className="space-y-16">
          {solutions.map((sol, idx) => {
            const isEven = idx % 2 === 0;
            
            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className={`bg-white rounded-brand-lg border border-brand-borderGray shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                
                {/* SVG Visual (Span 5 on Desktop) */}
                <div className={`lg:col-span-5 flex items-center justify-center bg-brand-softGray rounded-brand-md overflow-hidden border border-brand-borderGray/60 min-h-[220px] ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <img
                    src={sol.imageUrl}
                    alt={sol.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Copy info (Span 7 on Desktop) */}
                <div className={`lg:col-span-7 flex flex-col justify-between space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  
                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <h2 className="text-2xl font-extrabold text-brand-navy hover:text-brand-blue transition-colors">
                        <Link href={`/solutions/${sol.slug}`}>{sol.name}</Link>
                      </h2>
                      <p className="text-xs font-bold text-brand-blue uppercase tracking-wider mt-1">{sol.shortDesc}</p>
                    </div>

                    {/* Problem vs Proposed Solution split */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-3 bg-red-50/50 border-l-2 border-red-500 rounded-r-brand-sm">
                        <p className="font-extrabold text-red-700 flex items-center gap-1 mb-1">
                          <HelpCircle className="w-3.5 h-3.5" />
                          Security Challenge
                        </p>
                        <p className="text-brand-text font-semibold leading-relaxed">{sol.problem}</p>
                      </div>
                      <div className="p-3 bg-blue-50/50 border-l-2 border-brand-blue rounded-r-brand-sm">
                        <p className="font-extrabold text-brand-blue flex items-center gap-1 mb-1">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Recommended Solution
                        </p>
                        <p className="text-brand-text font-semibold leading-relaxed">{sol.solution}</p>
                      </div>
                    </div>

                    {/* Key Products and Benefits list */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold text-brand-navy uppercase tracking-wider">Operational Benefits:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-brand-text">
                        {sol.benefits.slice(0, 3).map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-1.5 truncate">
                            <span className="w-1.5 h-1.5 bg-brand-blue rounded-full flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-brand-text font-semibold">
                      <span className="font-bold text-brand-navy">Core Products:</span>
                      {sol.products.map((p, pIdx) => (
                        <span key={p} className="bg-brand-softGray border border-brand-borderGray px-2 py-0.5 rounded-md text-[10px]">
                          {p}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-brand-borderGray/50 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => triggerQuoteModal(`Site Survey for ${sol.name}`)}
                      className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-2.5 px-6 rounded-brand-sm text-xs transition-colors shadow-xs flex items-center justify-center gap-1.5"
                    >
                      <ClipboardCheck className="w-4 h-4" />
                      Request Site Survey
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto border border-brand-borderGray hover:bg-brand-softGray text-brand-navy font-bold py-2.5 px-6 rounded-brand-sm text-xs transition-colors text-center flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366] stroke-none" />
                      WhatsApp Inquiry
                    </a>
                    <Link
                      href={`/solutions/${sol.slug}`}
                      className="text-xs font-bold text-brand-blue hover:underline uppercase tracking-wider py-2 sm:ml-auto flex items-center gap-1"
                    >
                      View Case Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
