"use client";

import { notFound, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, FileText, ChevronRight, MessageSquare, ClipboardCheck, ArrowLeft, Shield, Sparkles, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { products } from '@/data/products';
import { triggerQuoteModal } from '@/components/common/QuoteModal';
import React, { useState } from 'react';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const router = useRouter();
  const product = products.find((p) => p.slug === params.slug);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const allImages = product?.imageUrls?.length ? product.imageUrls : (product?.imageUrl ? [product.imageUrl] : []);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeImage = allImages[selectedIdx] || '';
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    quantity: '1',
    message: ''
  });

  if (!product) {
    return notFound();
  }

  // Related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Mapped application settings based on category
  const getApplications = (category: string) => {
    switch (category) {
      case 'Network Cameras':
      case 'Analog Cameras':
        return ['Main Building Entryways', 'Dark Corridors & Hallways', 'Outdoor Parking Fences', 'Reception Front Desk Areas'];
      case 'Network Video Recorders':
      case 'Digital Video Recorders':
        return ['Central Security Guard Rooms', 'Server & IT Control Rackrooms', 'Multi-Camera Commercial Control Centers'];
      case 'Access Control':
      case 'Speed Gates':
        return ['High-Security Server Rooms', 'Corporate Office Front Doors', 'Employee Clock-in Stations', 'Private Executive Suites'];
      default:
        return ['Commercial Spaces', 'Residential Properties', 'Industrial Warehouses', 'Educational Campuses'];
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    setFormSubmitted(true);
  };

  const whatsappNumber = "+1234567890";
  const waMsg = encodeURIComponent(`Hello Lovosis! I am interested in inquiring about pricing and details for: ${product.name}. Please contact me.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${waMsg}`;

  return (
    <div className="bg-brand-softGray min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Products', href: '/products' },
            { label: product.name }
          ]}
        />

        {/* Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-xs font-bold text-brand-navy hover:text-brand-blue mb-8 uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>

        {/* Main Product Panel */}
        <div className="bg-white rounded-brand-lg border border-brand-borderGray shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 md:p-10">
            
            {/* Left Column: Image Area */}
            <div className="space-y-6">
              {/* Active Image container */}
              <div className="aspect-[4/3] w-full rounded-brand-md bg-brand-softGray border border-brand-borderGray flex items-center justify-center p-6 relative overflow-hidden group">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                
                <span className="absolute top-4 left-4 bg-brand-navy text-white text-[10px] font-extrabold uppercase py-1 px-3 rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Thumbnails list */}
              {allImages.length > 1 && (
                <div className="flex flex-wrap justify-center gap-3">
                  {allImages.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedIdx(idx)}
                      className={`w-[calc(25%-9px)] aspect-[4/3] rounded-brand-sm bg-brand-softGray border cursor-pointer hover:border-brand-blue transition-colors flex items-center justify-center p-2 ${
                        idx === selectedIdx ? 'border-brand-blue ring-2 ring-brand-blue/10' : 'border-brand-borderGray'
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt={`${product.name} alternate view ${idx + 1}`}
                        className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Key Details */}
            <div className="flex flex-col space-y-8">
              <div className="space-y-5">
                
                {/* Title and Badges */}
                <div className="space-y-2">
                  <span className={`inline-block text-[10px] font-extrabold uppercase tracking-wider py-1 px-3 rounded-md ${
                    product.availability === 'In Stock'
                      ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                  }`}>
                    {product.availability}
                  </span>
                  <h1 className="text-3xl font-extrabold text-brand-navy leading-tight">
                    {product.name}
                  </h1>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-brand-text font-semibold">
                  {product.description}
                </p>

                {/* Quick specs highlights */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-[15px] font-extrabold text-brand-navy uppercase tracking-widest">Key Specifications:</h4>
                  <ul className="grid grid-cols-1 gap-y-3.5 text-[15px] font-medium text-brand-text">
                    {Object.entries(product.specifications).slice(0, 8).map(([key, val]) => (
                      <li key={key} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 bg-brand-blue rounded-full flex-shrink-0 mt-1.5" />
                        <span className="truncate" title={`${key}: ${val}`}>
                          <span className="font-bold text-brand-navy">{key}:</span> {val}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* CTAs */}
              <div className="pt-8 border-t border-brand-borderGray/80 space-y-5 mt-auto">
                
                <div className="text-sm font-bold text-brand-navy">
                  Price: <span className="text-brand-blue font-extrabold">Contact for Distributor Quote</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <button
                    onClick={() => triggerQuoteModal(product.name)}
                    className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-3 px-4 rounded-brand-sm text-sm transition-colors shadow-md"
                  >
                    <ClipboardCheck className="w-4 h-4" />
                    Request Quote
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-4 rounded-brand-sm text-sm transition-colors shadow-md"
                  >
                    <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                    WhatsApp Chat
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Specs, Features, Applications Tabs layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Detailed Features (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Features block */}
            <div className="bg-white p-6 md:p-8 rounded-brand-lg border border-brand-borderGray shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-brand-navy border-b border-brand-borderGray pb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-blue" />
                Product Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-brand-text font-semibold leading-relaxed">
                    <span className="bg-brand-lightBlue text-brand-blue p-1 rounded-full shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Complete Technical Specifications Table */}
            <div className="bg-white p-6 md:p-8 rounded-brand-lg border border-brand-borderGray shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-brand-navy border-b border-brand-borderGray pb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-blue" />
                Technical Specifications
              </h3>
              <div className="overflow-hidden rounded-brand-sm border border-brand-borderGray">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, val], idx) => (
                      <tr
                        key={key}
                        className={`border-b border-brand-borderGray/60 font-semibold ${
                          idx % 2 === 0 ? 'bg-brand-softGray' : 'bg-white'
                        }`}
                      >
                        <td className="px-4 py-3 font-bold text-brand-navy w-1/3 border-r border-brand-borderGray/60">
                          {key}
                        </td>
                        <td className="px-4 py-3 text-brand-text">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Applications list & Right Inline Quote Form */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Inline Quote request Form */}
            <div className="bg-white p-6 rounded-brand-lg border border-brand-borderGray shadow-sm space-y-4">
              <h3 className="text-base font-bold text-brand-navy border-b border-brand-borderGray pb-2">
                Quick Inquiry
              </h3>
              
              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleFormChange}
                      placeholder="Your name..."
                      className="w-full px-3 py-1.5 text-xs border border-brand-borderGray rounded-brand-sm bg-brand-softGray focus:outline-none focus:border-brand-blue font-semibold text-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="your.email@corp.com"
                      className="w-full px-3 py-1.5 text-xs border border-brand-borderGray rounded-brand-sm bg-brand-softGray focus:outline-none focus:border-brand-blue font-semibold text-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy uppercase mb-1">Phone Number *</label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+1 (555) 0123"
                      className="w-full px-3 py-1.5 text-xs border border-brand-borderGray rounded-brand-sm bg-brand-softGray focus:outline-none focus:border-brand-blue font-semibold text-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy uppercase mb-1">Quantity *</label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleFormChange}
                      className="w-full px-3 py-1.5 text-xs border border-brand-borderGray rounded-brand-sm bg-brand-softGray focus:outline-none focus:border-brand-blue font-semibold text-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy uppercase mb-1">Message Details</label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Any installation needs..."
                      className="w-full px-3 py-1.5 text-xs border border-brand-borderGray rounded-brand-sm bg-brand-softGray focus:outline-none focus:border-brand-blue font-semibold text-brand-navy resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-2 px-4 rounded-brand-sm text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <ClipboardCheck className="w-3.5 h-3.5" />
                    Submit Request
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 bg-emerald-50 border border-emerald-200 rounded-brand-sm space-y-2">
                  <div className="text-emerald-500 text-2xl font-bold flex justify-center">✓</div>
                  <h4 className="font-bold text-xs text-brand-navy">Request Submitted</h4>
                  <p className="text-[10px] text-brand-text px-4 font-semibold">
                    Thank you! We will email your distributor quote shortly.
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-brand-borderGray pt-10">
            <h3 className="font-extrabold text-xl text-brand-navy mb-6">
              Related Security Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-brand-md border border-brand-borderGray overflow-hidden hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="aspect-[4/3] bg-brand-softGray flex items-center justify-center p-4">
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <h4 className="font-bold text-sm text-brand-navy truncate hover:text-brand-blue transition-colors">
                      <Link href={`/products/${prod.slug}`}>{prod.name}</Link>
                    </h4>
                    <Link
                      href={`/products/${prod.slug}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-blue hover:underline uppercase tracking-wider"
                    >
                      View Product
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
