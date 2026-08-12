"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, AlertCircle, CheckCircle2, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

const requirementOptions = [
  'General Inquiry',
  'Product Demo & Sales',
  'Installation Services',
  'Become a Partner / Dealer',
  'Technical Support',
  'Bulk Enterprise Purchase'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    city: '',
    requirementType: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please tell us your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      city: '',
      requirementType: 'General Inquiry',
      message: ''
    });
    setIsSuccess(false);
    setErrors({});
  };

  const whatsappNumber = "+1234567890";
  const waMsg = encodeURIComponent("Hi Lovosis team! I have an inquiry about your security systems.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${waMsg}`;

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Premium Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy z-0">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1554147090-e1221a04aabcd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Get in Touch with <span className="text-brand-blue">Lovosis</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
              Whether you need a custom enterprise blueprint or have a quick question about a camera model, our team is ready to help. No bots, just real security experts.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-brand-navy/5">
              <h3 className="text-xl font-bold text-brand-navy mb-8">Reach Us Directly</h3>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Sales & Support</span>
                    <a href="tel:+18005557233" className="text-lg font-bold text-brand-navy hover:text-brand-blue transition-colors">+1 800-555-SAFE</a>
                    <span className="block text-sm text-slate-500 mt-1">Mon-Fri, 8am - 6pm</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Email Us</span>
                    <a href="mailto:hello@lovosis.com" className="text-lg font-bold text-brand-navy hover:text-brand-blue transition-colors">hello@lovosis.com</a>
                    <span className="block text-sm text-slate-500 mt-1">We typically reply within 2 hours</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Headquarters</span>
                    <span className="text-brand-navy font-bold leading-relaxed block">104 Security Plaza,<br/>Industrial Zone, Cityville</span>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold p-4 rounded-xl transition-all shadow-lg hover:shadow-[#25D366]/30 w-full flex items-center justify-center gap-3"
                >
                  <MessageSquare className="w-5 h-5 fill-white stroke-none" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Global Reach Card */}
            <div className="bg-brand-navy p-8 rounded-3xl relative overflow-hidden shadow-xl shadow-brand-navy/10">
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <Globe2 className="w-48 h-48" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">Global Distribution</h3>
              <p className="text-slate-300 font-medium text-sm leading-relaxed relative z-10">
                We work with authorized dealers worldwide. If you're looking to become a certified Lovosis partner, select "Become a Partner" in the form.
              </p>
            </div>

          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-brand-navy/5">
            
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">Let's Talk Security</h2>
              <p className="text-slate-500 font-medium">Fill out the form below and the right person from our team will get back to you shortly.</p>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">First & Last Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-navy ${
                        errors.fullName ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-brand-blue'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1.5 font-bold flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name (Optional)</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-navy"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Work Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-navy ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-brand-blue'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5 font-bold flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-navy ${
                        errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-brand-blue'
                      }`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-bold flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">City / Location</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-navy"
                      placeholder="New York, USA"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">How can we help? <span className="text-red-500">*</span></label>
                    <select
                      name="requirementType"
                      value={formData.requirementType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-navy cursor-pointer appearance-none"
                      style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
                    >
                      {requirementOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Additional Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-navy resize-none"
                    placeholder="Tell us a bit about your project size, specific camera requirements, or timeline..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-brand-blue/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Your Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 space-y-6"
              >
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-brand-navy mb-2">Message Received!</h4>
                  <p className="text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
                    Thanks for reaching out, <span className="text-brand-navy font-bold">{formData.fullName}</span>. Our team will review your inquiry regarding <span className="text-brand-navy font-bold">{formData.requirementType}</span> and get back to you shortly.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="text-brand-blue hover:text-brand-blue/80 font-bold underline mt-4 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            )}

          </div>

        </div>
      </div>

      {/* 3. Global Presence Map & Offices */}
      <section className="py-20 bg-brand-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Global Presence</h2>
            <p className="text-slate-300 font-medium">We operate globally with regional offices designed to provide you with localized support, fast shipping, and direct tech assistance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { region: 'North America', city: 'Cityville, HQ', phone: '+1 800-555-SAFE', desc: 'Central command, R&D, and primary distribution.' },
              { region: 'Middle East', city: 'Dubai, UAE', phone: '+971 4 123 4567', desc: 'Serving the MENA region with dedicated enterprise support.' },
              { region: 'Asia Pacific', city: 'Mumbai, India', phone: '+91 22 1234 5678', desc: 'Rapid deployment center and technical support hub.' },
            ].map((office, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <span className="text-brand-lightBlue font-bold text-sm uppercase tracking-wider mb-2 block">{office.region}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{office.city}</h3>
                <p className="text-slate-400 font-medium text-sm mb-6">{office.desc}</p>
                <div className="flex items-center gap-3 text-white font-bold">
                  <Phone className="w-4 h-4 text-brand-lightBlue" />
                  {office.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-medium">Quick answers to help you get started.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Do you sell directly to end-users?",
                a: "For large enterprise projects, yes. However, for smaller residential or commercial setups, we highly recommend working with one of our certified local dealers for professional installation."
              },
              {
                q: "How long does shipping usually take?",
                a: "Because we maintain local stock in our regional hubs, most standard orders are shipped within 24-48 hours. Custom enterprise configurations may take 1-2 weeks."
              },
              {
                q: "What is your warranty policy?",
                a: "We offer an industry-leading 3-year warranty on all Lovosis hardware. If something fails due to a manufacturing defect, we replace it. No runarounds."
              },
              {
                q: "Can I integrate Lovosis cameras with my existing NVR?",
                a: "Yes. All our cameras are ONVIF compliant, meaning they will work with the vast majority of third-party NVRs and VMS platforms on the market."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="text-lg font-bold text-brand-navy mb-3">{faq.q}</h4>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
