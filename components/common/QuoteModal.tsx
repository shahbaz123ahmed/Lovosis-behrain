"use client";

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Global trigger function to open the quote modal from anywhere
export const triggerQuoteModal = (productName: string) => {
  const event = new CustomEvent('open-quote-modal', { detail: { productName } });
  window.dispatchEvent(event);
};

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    quantity: '1',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ productName: string }>;
      setProductName(customEvent.detail.productName);
      setIsOpen(true);
      setIsSuccess(false);
      setErrors({});
    };

    window.addEventListener('open-quote-modal', handleOpen);
    return () => {
      window.removeEventListener('open-quote-modal', handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Reset form after exit animation completes
    setTimeout(() => {
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        quantity: '1',
        message: ''
      });
      setIsSuccess(false);
    }, 300);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden bg-white shadow-2xl rounded-brand-md z-10 border border-brand-borderGray"
          >
            {/* Header */}
            <div className="bg-brand-navy text-white px-6 py-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Request Product Quote</h3>
                <p className="text-xs text-brand-accent truncate max-w-[320px]">
                  For: {productName}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-black mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 text-sm rounded-brand-sm border ${
                          errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-brand-borderGray bg-brand-softGray'
                        } focus:outline-none focus:border-brand-blue`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && <p className="text-red-500 text-[10px] mt-0.5">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-black mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm rounded-brand-sm border border-brand-borderGray bg-brand-softGray focus:outline-none focus:border-brand-blue"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-black mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 text-sm rounded-brand-sm border ${
                          errors.email ? 'border-red-500 bg-red-50/50' : 'border-brand-borderGray bg-brand-softGray'
                        } focus:outline-none focus:border-brand-blue`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-[10px] mt-0.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-black mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 text-sm rounded-brand-sm border ${
                          errors.phone ? 'border-red-500 bg-red-50/50' : 'border-brand-borderGray bg-brand-softGray'
                        } focus:outline-none focus:border-brand-blue`}
                        placeholder="+1 555-0199"
                      />
                      {errors.phone && <p className="text-red-500 text-[10px] mt-0.5">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-black mb-1">
                      Estimated Quantity Required *
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm rounded-brand-sm border border-brand-borderGray bg-brand-softGray focus:outline-none focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-black mb-1">
                      Specific Requirements / Project Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm rounded-brand-sm border border-brand-borderGray bg-brand-softGray focus:outline-none focus:border-brand-blue resize-none"
                      placeholder="Please details if you need installation assistance or bulk pricing details..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold py-2.5 px-4 rounded-brand-sm transition-colors text-sm shadow-md disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Quote Request
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-6"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                  <h4 className="text-xl font-bold text-brand-black mb-2">Quote Request Submitted</h4>
                  <p className="text-sm text-brand-text max-w-sm mb-6">
                    Thank you, <span className="font-semibold text-brand-black">{formData.fullName}</span>! Our security team will review your requirements for <span className="font-semibold text-brand-black">{productName}</span> (Qty: {formData.quantity}) and email you a distributor quotation within 24 hours.
                  </p>
                  <button
                    onClick={handleClose}
                    className="bg-brand-navy hover:bg-brand-navy/90 text-white text-sm font-semibold py-2 px-6 rounded-brand-sm transition-colors"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
