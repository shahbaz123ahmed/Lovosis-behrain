"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  User, 
  ArrowRight,
  ChevronRight,
  Clock,
  BookOpen,
  X,
  ClipboardCheck,
  MessageSquare
} from 'lucide-react';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

const featuredPost = {
  id: 1,
  title: 'The Future of AI in Video Surveillance: What to Expect in 2027',
  excerpt: 'Artificial intelligence is fundamentally changing how we approach physical security. From predictive analytics to automated threat response, discover how AI is moving from passive recording to active deterrence.',
  category: 'Technology',
  author: 'Lovosis Security Team',
  date: 'August 10, 2026',
  readTime: '6 min read',
  image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
  content: `Artificial intelligence is no longer just a buzzword in security technology; it is the fundamental core driving the next generation of surveillance. As we look towards 2027, the role of security systems is evolving from passive recording devices to proactive threat deterrence machines.

## 1. Real-time Predictive Analytics
Instead of reviewing footage after an event has occurred, AI systems are trained to recognize patterns and behaviors that precede incidents. For instance, loitering detection combined with facial tracking can alert security staff before vandalism or unauthorized access happens.

## 2. Automated Threat Response
AI-enabled cameras can trigger automated systems, such as locking down specific entry gates, turning on intense floodlights, or broadcasting pre-recorded warning messages through IP speakers to scare off intruders.

## 3. High-efficiency Search
Searching through hundreds of hours of video footage is now a matter of seconds. Operators can filter searches by specific attributes, such as "person wearing a red shirt" or "blue delivery truck," making event investigations exceptionally fast.`
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
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    content: `Traditional security cameras switch to black-and-white infrared mode at night, causing the loss of crucial color details. ColorHunter cameras solve this by utilizing advanced light capture capabilities to deliver vibrant, full-color footage 24/7.

## 1. Ultra-large F1.0 Aperture
A larger aperture allows significantly more light to reach the sensor (up to four times more than standard cameras), outputting clear color details even in near-pitch darkness.

## 2. Highly Sensitive Sensors
Back-illuminated CMOS sensors pull ambient starlight and street lighting to build high-contrast color video without relying on heavy external floodlights.

## 3. Soft Warm Light Deterrence
If the scene goes into absolute zero light, built-in warm LED light sources activate to illuminate the area gently, acting as a direct deterrent to trespassers.`
  },
  {
    id: 3,
    title: 'Securing Remote Farms: A Guide to Off-Grid Solar Surveillance',
    excerpt: 'When there is no power or internet, how do you protect your assets? A comprehensive look at wireless, solar-powered security solutions for agriculture.',
    category: 'SMB Solutions',
    author: 'David Chen',
    date: 'July 28, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop',
    content: `Protecting remote agricultural land, storage facilities, and farms presents a serious challenge: the lack of cabling for electricity and network connection. Off-grid solar-powered surveillance is the modern answer.

## 1. Renewable Standalone Power
High-efficiency solar panels charge industrial-grade batteries during daylight, keeping low-power dome and PTZ cameras running continuously through the night.

## 2. 4G/5G Wireless Connectivity
Equipped with built-in cellular routers, these cameras broadcast real-time video alerts directly to your smartphone app without requiring physical Wi-Fi routers.

## 3. Rugged Weatherproofing
Built to withstand dust storm sweeps, heavy agricultural rains, and high heat, these systems operate reliably in extreme farm environments.`
  },
  {
    id: 4,
    title: 'Understanding Smart Intrusion Prevention (SIP)',
    excerpt: 'Stop false alarms caused by animals and shadows. Deep learning algorithms can now filter out 99% of environmental noise. Here is how it works.',
    category: 'Innovation',
    author: 'Lovosis Engineering',
    date: 'July 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop',
    content: `False alarms are a major problem for security personnel, often triggered by wind, leaves, small animals, or heavy rainfall. Smart Intrusion Prevention (SIP) uses deep-learning algorithms to target only human and vehicle threats.

## 1. Target Classification
SIP ignores environmental movements and focuses purely on classifying humans and cars, eliminating up to 99% of false alerts.

## 2. Line Crossing & Intrusion Detection
Users can draw virtual lines on the camera view. If a classified person crosses this line, the system immediately registers it and triggers alert warnings.

## 3. Active Deterrence Lights
If a threat is detected inside a restricted zone, the system can instantly flash blue and red lights to notify the intruder that they have been detected.`
  },
  {
    id: 5,
    title: 'Upgrading Your Building Intercom System: A Buyer’s Guide',
    excerpt: 'A modern video intercom does more than just open doors. Discover features like face recognition, mobile app control, and SIP integration.',
    category: 'Products',
    author: 'Michael Torres',
    date: 'July 05, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop',
    content: `Intercom systems are the first line of defense for residential complexes and office buildings. Modern video intercoms offer superior access control features beyond simply speaking through a speaker.

## 1. Crystal-clear Video Intercom
High-definition wide-angle cameras allow residents to visually verify the identity of visitors before granting entry access.

## 2. Mobile App Integration
Receive doorbell calls, view live video feeds, and unlock gates remotely from your smartphone from anywhere in the world.

## 3. Smart Access Cards & Face Recognition
Enable keyless entry for employees and residents using touchless face recognition terminals or RFID tags.`
  },
  {
    id: 6,
    title: 'The Importance of Cybersecurity in Network Cameras',
    excerpt: 'Physical security devices shouldn\'t be a weak link in your IT network. Learn the best practices for hardening your IP cameras against cyber threats.',
    category: 'Cybersecurity',
    author: 'Lovosis Security Team',
    date: 'June 22, 2026',
    readTime: '8 min read',
    image: '/cyber.png',
    content: `As network-connected physical security devices grow in popularity, they also become targets for hackers. Protecting your IP cameras from cyber attacks is essential to maintain complete system integrity.

## 1. Change Default Credentials
Always change factory default passwords to strong, complex passwords immediately during setup.

## 2. Firmware Updates
Regularly install security patches and firmware updates from manufacturers to resolve discovered software vulnerabilities.

## 3. Network Isolation
Run your security camera infrastructure on a separate virtual local area network (VLAN) isolated from the primary corporate data network.`
  },
  {
    id: 7,
    title: 'How Heat Map Analytics Optimize Store Layouts',
    excerpt: 'Security cameras can now act as powerful business intelligence tools. Using heat maps to track customer foot traffic can dramatically boost sales.',
    category: 'Retail Security',
    author: 'Sarah Jenkins',
    date: 'June 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    content: `Security cameras can double as powerful business intelligence tools. Heat map analytics help retailers optimize store layouts by tracking foot traffic.

## 1. High-traffic Zone Identification
Identify which aisles attract the most shoppers and where customer dwell time is highest.

## 2. Visual Path Analysis
Optimize product placement and layout flow based on the pathways most frequently walked by shoppers.

## 3. Staffing Optimization
Deploy sales representatives to high-traffic areas during peak shopper hours.`
  }
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const renderContent = (content: string) => {
    if (!content) return null;
    const sections = content.split('\n\n');
    return sections.map((section, sIdx) => {
      if (section.startsWith('## ')) {
        const title = section.replace('## ', '');
        return (
          <h3 key={sIdx} className="text-lg md:text-xl font-bold text-brand-navy pt-5 pb-1 border-b border-slate-100 mb-3 mt-6">
            {title}
          </h3>
        );
      }
      if (section.startsWith('- ')) {
        const items = section.split('\n');
        return (
          <ul key={sIdx} className="list-disc pl-5 space-y-2 my-3">
            {items.map((item, iIdx) => {
              const cleanItem = item.replace('- ', '');
              if (cleanItem.includes('**')) {
                const parts = cleanItem.split('**');
                return (
                  <li key={iIdx} className="text-sm text-slate-600 font-medium leading-relaxed">
                    <span className="font-bold text-brand-navy">{parts[1]}</span>{parts[2]}
                  </li>
                );
              }
              return (
                <li key={iIdx} className="text-sm text-slate-600 font-medium leading-relaxed">
                  {cleanItem}
                </li>
              );
            })}
          </ul>
        );
      }
      return (
        <p key={sIdx} className="text-sm leading-relaxed text-slate-600 font-medium mb-3">
          {section}
        </p>
      );
    });
  };

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
          
          <div 
            onClick={() => setSelectedPost(featuredPost)}
            className="group block cursor-pointer"
          >
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
          </div>
        </div>

        {/* 3. Recent Posts Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-brand-navy">Latest Posts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div 
                onClick={() => setSelectedPost(post)}
                key={post.id} 
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
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
              </div>
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

      {/* Blog Details Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
            />

            {/* Modal Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white w-full max-w-4xl max-h-[85vh] rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden z-10"
            >
              {/* Top Bar with Close Button */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
                <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue font-bold text-xs uppercase tracking-wider rounded-full">
                  {selectedPost.category}
                </span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Container */}
              <div className="overflow-y-auto p-6 md:p-10 space-y-6 custom-scrollbar">
                
                {/* Title */}
                <h2 className="text-2xl md:text-4xl font-extrabold text-brand-navy leading-tight">
                  {selectedPost.title}
                </h2>

                {/* Author and Date Meta */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500 uppercase border-b border-slate-100 pb-5">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4 text-brand-blue" />
                    {selectedPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-brand-blue" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-brand-blue" />
                    {selectedPost.readTime}
                  </span>
                </div>

                {/* Cover Image */}
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rendered Body Content */}
                <div className="prose max-w-none pt-4 text-slate-700">
                  {renderContent(selectedPost.content)}
                </div>

              </div>

              {/* Footer Consult CTA */}
              <div className="sticky bottom-0 bg-slate-50 border-t border-slate-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-xs text-slate-500 font-semibold">
                  <span>Want to learn more? Consult with our technology experts.</span>
                </div>
                <div className="flex gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setSelectedPost(null);
                      triggerQuoteModal(`Consult from Blog Modal: ${selectedPost.title}`);
                    }}
                    className="flex-grow sm:flex-grow-0 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <ClipboardCheck className="w-4 h-4" />
                    Free Consultation
                  </button>
                  <a
                    href={`https://wa.me/+1234567890?text=${encodeURIComponent(`Hello Lovosis! I read your article "${selectedPost.title}" and would like to inquire.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow sm:flex-grow-0 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                    WhatsApp
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
