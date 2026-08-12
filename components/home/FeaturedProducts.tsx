"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Eye, ClipboardCheck, ArrowUpRight, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/data/products';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

const tabs = [
  { id: 'all', label: 'All Products' },
  { id: 'network-cameras', label: 'Network Cameras' },
  { id: 'nvrs', label: 'Network Video Recorders' },
  { id: 'access', label: 'Access Control' },
  { id: 'storage', label: 'Storage' }
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('all');

  // Filter logic matching product categories to navigation tabs
  const filteredProducts = products.filter(product => {
    if (activeTab === 'all') return true;
    
    const category = product.category.toLowerCase();
    if (activeTab === 'network-cameras') {
      return category.includes('network cameras');
    }
    if (activeTab === 'nvrs') {
      return category.includes('video recorders');
    }
    if (activeTab === 'access') {
      return category.includes('access control') || category.includes('speed gates');
    }
    if (activeTab === 'storage') {
      return category.includes('storage') || category.includes('transmission');
    }
    return false;
  }).slice(0, 6); // Limit to top 6 for the homepage feature grid

  return (
    <section className="bg-gradient-to-br from-brand-softGray via-white to-[#EAF2FA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
              Featured Security Products
            </h2>
            <div className="w-16 h-1 bg-brand-blue rounded-full" />
            <p className="text-base text-brand-text font-medium">
              Distributing heavy-duty, commercial-grade components with full warranty assistance.
            </p>
          </div>
          
          <Link
            href="/categories"
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-blue hover:text-brand-navy transition-colors shrink-0 group uppercase tracking-wider"
          >
            Browse Full Catalog
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-brand-borderGray pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-brand-sm text-sm font-bold transition-all relative ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-brand-black/75 hover:text-brand-blue hover:bg-white/60'
              }`}
            >
              <span className="relative z-10">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-brand-blue rounded-brand-sm z-0 shadow-sm"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[20px] border border-brand-borderGray overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-brand-blue/10 hover:border-brand-blue/40 transition-all duration-500 group"
              >
                <div>
                  
                  {/* Image wrapper */}
                  <div className="aspect-[4/3] bg-brand-softGray relative overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating category & availability badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                      <span className="bg-brand-navy text-white text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full">
                        {prod.category}
                      </span>
                      <span className={`text-[9px] font-bold uppercase tracking-wider py-0.5 px-2 rounded-md ${
                        prod.availability === 'In Stock'
                          ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                      }`}>
                        {prod.availability}
                      </span>
                    </div>

                    {/* Quick compare option */}
                    <button
                      className="absolute top-4 right-4 bg-white/80 backdrop-blur-md text-brand-navy hover:text-white hover:bg-brand-blue p-2.5 rounded-full border border-white/50 transition-all duration-300 shadow-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2"
                      title="Compare product specs"
                      aria-label="Add to compare"
                    >
                      <Scale className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Specifications & Copy */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-extrabold text-lg text-brand-navy leading-snug line-clamp-1 group-hover:text-brand-blue transition-colors">
                      {prod.name}
                    </h3>
                    
                    {/* Specs list (limit to 3 keys) */}
                    <div className="space-y-1.5 text-xs text-brand-text bg-brand-softGray p-3.5 rounded-brand-sm border border-brand-borderGray">
                      {Object.entries(prod.specifications).slice(0, 3).map(([key, val]) => (
                        <div key={key} className="flex justify-between font-medium">
                          <span className="text-brand-black/70 font-semibold">{key}:</span>
                          <span className="truncate max-w-[150px]">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Actions */}
                <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3 border-t border-brand-borderGray/40">
                  <Link
                    href={`/products/${prod.slug}`}
                    className="flex items-center justify-center gap-1.5 border border-brand-borderGray hover:bg-brand-softGray text-brand-navy font-bold py-2 px-3 rounded-brand-sm text-xs transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    View Details
                  </Link>
                  <button
                    onClick={() => triggerQuoteModal(prod.name)}
                    className="flex items-center justify-center gap-1.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-2 px-3 rounded-brand-sm text-xs transition-colors shadow-xs"
                  >
                    <ClipboardCheck className="w-3.5 h-3.5" />
                    Get Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
