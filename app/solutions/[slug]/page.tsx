"use client";

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, HelpCircle, HardHat, FileText, MessageSquare, ClipboardCheck, ArrowLeft, Building2, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { solutions } from '@/data/solutions';
import { products } from '@/data/products';
import { triggerQuoteModal } from '@/components/common/QuoteModal';
import React, { useState } from 'react';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function SolutionDetailPage({ params }: PageProps) {
  const solution = solutions.find((s) => s.slug === params.slug);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    propertyType: 'Residential',
    message: ''
  });

  if (!solution) {
    return notFound();
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }
    setFormSubmitted(true);
  };

  // Resolve matching product slugs for core product linking
  const getProductLink = (prodName: string) => {
    const matched = products.find(p => p.name === prodName);
    return matched ? `/products/${matched.slug}` : '/products';
  };

  const whatsappNumber = "+1234567890";
  const waMsg = encodeURIComponent(`Hello Lovosis! I am interested in inquiring about security integration plans for: ${solution.name}. Please contact me.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${waMsg}`;

  return (
    <div className="bg-brand-softGray min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: solution.name }
          ]}
        />

        {/* Back Link */}
        <Link
          href="/solutions"
          className="inline-flex items-center gap-1 text-xs font-bold text-brand-navy hover:text-brand-blue mb-8 uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Solutions
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-brand-lg border border-brand-borderGray shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 items-center">
            
            {/* Left Column: Solution Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-brand-blue bg-brand-lightBlue uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5" />
                  Site Security blueprints
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
                  {solution.name}
                </h1>
              </div>

              <p className="text-sm md:text-base leading-relaxed text-brand-text font-semibold">
                {solution.longDesc}
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => triggerQuoteModal(`Consultation for ${solution.name}`)}
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-3 px-6 rounded-brand-sm text-xs transition-colors shadow-md flex items-center gap-1.5"
                >
                  <ClipboardCheck className="w-4 h-4" />
                  Free Design Blueprint
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-brand-sm text-xs transition-colors shadow-md flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                  WhatsApp Consult
                </a>
              </div>
            </div>

            {/* Right Column: Visual SVG Cover */}
            <div className="lg:col-span-5 bg-brand-softGray rounded-brand-md overflow-hidden border border-brand-borderGray flex items-center justify-center p-4">
              <img
                src={solution.imageUrl}
                alt={solution.name}
                className="w-full h-auto object-cover"
              />
            </div>

          </div>
        </div>

        {/* Detailed Breakdown Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Main Case Studies details (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Challenge & Proposed Setup card */}
            <div className="bg-white p-6 md:p-8 rounded-brand-lg border border-brand-borderGray shadow-sm space-y-6">
              
              <div className="space-y-3.5">
                <h3 className="text-lg font-bold text-brand-navy border-b border-brand-borderGray pb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-red-500" />
                  Operational Security Challenge
                </h3>
                <p className="text-xs md:text-sm text-brand-text leading-relaxed font-semibold">
                  {solution.problem}
                </p>
              </div>

              <div className="space-y-3.5 pt-4">
                <h3 className="text-lg font-bold text-brand-navy border-b border-brand-borderGray pb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  Proposed Surveillance Architecture
                </h3>
                <p className="text-xs md:text-sm text-brand-text leading-relaxed font-semibold">
                  {solution.solution}
                </p>
              </div>

            </div>

            {/* Core products & equipment links */}
            <div className="bg-white p-6 md:p-8 rounded-brand-lg border border-brand-borderGray shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-brand-navy border-b border-brand-borderGray pb-3">
                Key Security Products Used
              </h3>
              <p className="text-xs text-brand-text font-semibold mb-4">
                Click on the authorized equipment below to view full specifications, datasheets, or request bulk pricing:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {solution.products.map((pName) => (
                  <Link
                    key={pName}
                    href={getProductLink(pName)}
                    className="p-4 bg-brand-softGray border border-brand-borderGray rounded-brand-md text-xs font-bold text-brand-navy hover:text-brand-blue hover:border-brand-blue transition-all flex flex-col justify-between"
                  >
                    <span>{pName}</span>
                    <span className="text-[10px] text-brand-blue font-bold uppercase tracking-wider mt-4 flex items-center gap-1">
                      View Specs
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* In-depth Benefits */}
            <div className="bg-white p-6 md:p-8 rounded-brand-lg border border-brand-borderGray shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-brand-navy border-b border-brand-borderGray pb-3 flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-brand-blue" />
                Operational Benefits &amp; Safe Safeguards
              </h3>
              <ul className="space-y-3">
                {solution.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-brand-text font-semibold leading-relaxed">
                    <span className="bg-brand-lightBlue text-brand-blue p-1 rounded-full shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Site Survey Request Form Sidebar (Span 1) */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-brand-lg border border-brand-borderGray shadow-sm sticky top-24 space-y-4">
              <h3 className="text-base font-bold text-brand-navy border-b border-brand-borderGray pb-2 flex items-center gap-1.5">
                <HardHat className="w-4 h-4 text-brand-blue" />
                Request Site Survey
              </h3>
              <p className="text-[11px] text-brand-text font-semibold">
                Our technicians will inspect your building, map light issues, and outline camera cabling runs.
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleFormChange}
                      placeholder="Your name..."
                      className="w-full px-3 py-2 border border-brand-borderGray rounded-brand-sm bg-brand-softGray focus:outline-none focus:border-brand-blue font-semibold text-brand-navy"
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
                      className="w-full px-3 py-2 border border-brand-borderGray rounded-brand-sm bg-brand-softGray focus:outline-none focus:border-brand-blue font-semibold text-brand-navy"
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
                      placeholder="email@company.com"
                      className="w-full px-3 py-2 border border-brand-borderGray rounded-brand-sm bg-brand-softGray focus:outline-none focus:border-brand-blue font-semibold text-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy uppercase mb-1">City / Region *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleFormChange}
                      placeholder="City..."
                      className="w-full px-3 py-2 border border-brand-borderGray rounded-brand-sm bg-brand-softGray focus:outline-none focus:border-brand-blue font-semibold text-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy uppercase mb-1">Property Type</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleFormChange}
                      className="w-full px-3 py-2 border border-brand-borderGray rounded-brand-sm bg-brand-softGray focus:outline-none focus:border-brand-blue font-semibold text-brand-navy"
                    >
                      <option value="Residential">Residential Home</option>
                      <option value="Commercial">Commercial Office</option>
                      <option value="Retail">Retail Store</option>
                      <option value="Industrial">Industrial Factory</option>
                      <option value="School">School/Campus</option>
                      <option value="Hospitality">Hotel/Restaurant</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy uppercase mb-1">Specific Requirements</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Detail if you have a blueprint ready..."
                      className="w-full px-3 py-2 border border-brand-borderGray rounded-brand-sm bg-brand-softGray focus:outline-none focus:border-brand-blue font-semibold text-brand-navy resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-2.5 px-4 rounded-brand-sm text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <ClipboardCheck className="w-4 h-4" />
                    Book Free Site Survey
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 bg-emerald-50 border border-emerald-200 rounded-brand-sm space-y-3">
                  <div className="text-emerald-500 text-3xl font-bold flex justify-center">✓</div>
                  <h4 className="font-bold text-sm text-brand-navy">Survey Request Sent</h4>
                  <p className="text-xs text-brand-text px-4 font-semibold">
                    Thank you! Our technical coordinator will call you to schedule the site survey within 1 business day.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

// ChevronRight custom icon
function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}
