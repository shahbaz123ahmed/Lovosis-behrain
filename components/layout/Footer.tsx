"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { categories } from '@/data/products';
import { solutions } from '@/data/solutions';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide an email address');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }
    setError('');
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-brand-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Info */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-brand-blue text-white p-2 rounded-brand-sm group-hover:bg-white group-hover:text-brand-blue transition-colors">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white">LOVOSIS</span>
                <span className="text-[8px] uppercase tracking-widest text-brand-accent font-bold">Security Solutions</span>
              </div>
            </Link>
            <p className="text-sm text-brand-borderGray/80 leading-relaxed font-medium">
              Established distributor of top-tier CCTV surveillance products, access control devices, biometric systems, and complete custom security integrations.
            </p>
            {/* Social media icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-brand-blue hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-brand-blue hover:text-white transition-colors" aria-label="Twitter">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-brand-blue hover:text-white transition-colors" aria-label="Linkedin">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-brand-accent">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-brand-borderGray/80 font-medium">
              <li>
                <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand-blue transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-brand-blue transition-colors">Solutions</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-blue transition-colors">Security Blog</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-blue transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-brand-accent">Products</h4>
            <ul className="space-y-2.5 text-sm text-brand-borderGray/80 font-medium">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat}>
                  <Link href={`/products?category=${encodeURIComponent(cat)}`} className="hover:text-brand-blue transition-colors block truncate">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Security Solutions */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-brand-accent">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-brand-borderGray/80 font-medium">
              {solutions.map((sol) => (
                <li key={sol.id}>
                  <Link href={`/solutions/${sol.slug}`} className="hover:text-brand-blue transition-colors block truncate">
                    {sol.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Info & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-brand-accent">Contact Details</h4>
            <ul className="space-y-3 text-sm text-brand-borderGray/80 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>104 Security Plaza, Industrial Zone, Cityville</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <a href="tel:+18005557233" className="hover:text-brand-blue transition-colors">+1 800-555-SAFE</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <a href="mailto:info@lovosis.com" className="hover:text-brand-blue transition-colors">info@lovosis.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block">Mon - Fri: 8 AM - 6 PM</span>
                  <span className="block">Sat: 9 AM - 2 PM</span>
                </div>
              </li>
            </ul>

            {/* Newsletter form */}
            <div className="pt-2">
              <h5 className="text-xs font-bold text-white mb-2 uppercase tracking-wide">Subscribe to Newsletter</h5>
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="relative flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    placeholder="Your email..."
                    className="w-full bg-white/5 border border-white/10 rounded-brand-sm py-2 pl-3 pr-10 text-xs focus:outline-none focus:border-brand-blue text-white"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 bottom-0 bg-brand-blue hover:bg-brand-blue/90 px-3 rounded-r-brand-sm transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  {error && <p className="absolute left-0 bottom-[-16px] text-red-400 text-[9px]">{error}</p>}
                </form>
              ) : (
                <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold py-1 bg-emerald-500/10 px-2 rounded-brand-sm border border-emerald-500/20">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Lower footer: Legal and copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-borderGray/60 font-semibold">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} LOVOSIS Security. All Rights Reserved.</span>
            <span className="hidden md:inline">|</span>
            <span className="text-brand-accent/70">Designed for professional security solutions</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-blue transition-colors">Terms &amp; Conditions</Link>
            <Link href="#" className="hover:text-brand-blue transition-colors">Warranty Policy</Link>
            <Link href="#" className="hover:text-brand-blue transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
