"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  ArrowRight,
  ChevronRight,
  Clock,
  BookOpen
} from 'lucide-react';

const featuredPost = {
  id: 1,
  title: 'The Future of AI in Video Surveillance: What to Expect in 2027',
  excerpt: 'Artificial intelligence is fundamentally changing how we approach physical security. From predictive analytics to automated threat response, discover how AI is moving from passive recording to active deterrence.',
  category: 'Technology',
  author: 'Lovosis Security Team',
  date: 'August 10, 2026',
  readTime: '6 min read',
  image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
};

const recentPosts = [
  {
    id: 2,
    title: '5 Reasons Why Retailers Are Upgrading to ColorHunter Cameras',
    excerpt: 'Low light no longer means low security. Learn how retail environments are benefiting from full-color night vision to reduce shrinkage and improve safety.',
    category: 'Retail Security',
    author: 'Sarah Jenkins',
    date: 'August 02, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Securing Remote Farms: A Guide to Off-Grid Solar Surveillance',
    excerpt: 'When there is no power or internet, how do you protect your assets? A comprehensive look at wireless, solar-powered security solutions for agriculture.',
    category: 'SMB Solutions',
    author: 'David Chen',
    date: 'July 28, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Understanding Smart Intrusion Prevention (SIP)',
    excerpt: 'Stop false alarms caused by animals and shadows. Deep learning algorithms can now filter out 99% of environmental noise. Here is how it works.',
    category: 'Innovation',
    author: 'Lovosis Engineering',
    date: 'July 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Upgrading Your Building Intercom System: A Buyer’s Guide',
    excerpt: 'A modern video intercom does more than just open doors. Discover features like face recognition, mobile app control, and SIP integration.',
    category: 'Products',
    author: 'Michael Torres',
    date: 'July 05, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'The Importance of Cybersecurity in Network Cameras',
    excerpt: 'Physical security devices shouldn\'t be a weak link in your IT network. Learn the best practices for hardening your IP cameras against cyber threats.',
    category: 'Cybersecurity',
    author: 'Lovosis Security Team',
    date: 'June 22, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1563207153-f404786d5e78?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'How Heat Map Analytics Optimize Store Layouts',
    excerpt: 'Security cameras can now act as powerful business intelligence tools. Using heat maps to track customer foot traffic can dramatically boost sales.',
    category: 'Retail Security',
    author: 'Sarah Jenkins',
    date: 'June 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* 1. Hero / Header Section */}
      <section className="bg-brand-navy pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Insights & <span className="text-brand-blue">Innovations</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
              Stay updated with the latest trends in video surveillance, security technology, and industry best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            <span className="text-slate-900">Blog</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. Featured Post */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-6 h-6 text-brand-blue" />
            <h2 className="text-2xl font-bold text-brand-navy">Featured Article</h2>
          </div>
          
          <Link href={`/blog/${featuredPost.id}`} className="group block">
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row hover:shadow-2xl transition-all duration-300">
              <div className="lg:w-7/12 relative h-72 lg:h-auto overflow-hidden bg-slate-100">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="lg:w-5/12 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue font-bold text-xs uppercase tracking-wider rounded-full mb-4 w-fit">
                  {featuredPost.category}
                </span>
                <h3 className="text-3xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500 font-medium mt-auto">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-brand-blue" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-blue" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* 3. Recent Posts Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-brand-navy">Latest Posts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id} className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300">
                <div className="h-56 relative overflow-hidden bg-slate-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-navy font-bold text-xs uppercase tracking-wider rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-blue" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm font-bold text-brand-blue uppercase tracking-wider mt-auto group-hover:text-sky-500 transition-colors">
                    Read Article 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 4. Newsletter Signup */}
        <div className="mt-20 bg-brand-navy rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-3">Subscribe to Our Newsletter</h2>
              <p className="text-slate-300 font-medium">Get the latest security insights, product updates, and industry news delivered directly to your inbox.</p>
            </div>
            <div className="md:w-1/2 w-full">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  required
                />
                <button 
                  type="button"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg flex items-center justify-center whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-slate-400 mt-3 text-center md:text-left">We care about your data. Read our <Link href="#" className="underline hover:text-white">Privacy Policy</Link>.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
