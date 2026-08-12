"use client";

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Phone, MessageSquare, ClipboardCheck, Sparkles, BookOpen } from 'lucide-react';

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
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { blogs } from '@/data/blogs';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: PageProps) {
  const post = blogs.find((b) => b.slug === params.slug);

  if (!post) {
    return notFound();
  }

  // Related posts (excluding current post)
  const relatedPosts = blogs.filter((b) => b.id !== post.id).slice(0, 2);

  // Extract H2 headings dynamically for the Table of Contents
  const getHeadings = (markdown: string) => {
    const lines = markdown.split('\n');
    const headings: string[] = [];
    lines.forEach((line) => {
      if (line.startsWith('## ')) {
        headings.push(line.replace('## ', ''));
      }
    });
    return headings;
  };

  const tocHeadings = getHeadings(post.content);

  const whatsappNumber = "+1234567890";
  const waMsg = encodeURIComponent(`Hello Lovosis! I read your article "${post.title}" and would like to request a consultation.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${waMsg}`;

  // Helper to format content into paragraphs and headers since we receive basic markdown
  const renderContent = (content: string) => {
    const sections = content.split('\n\n');
    return sections.map((section, sIdx) => {
      if (section.startsWith('## ')) {
        const title = section.replace('## ', '');
        return (
          <h2 key={sIdx} id={title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="text-xl md:text-2xl font-bold text-brand-navy pt-6 pb-2 border-b border-brand-borderGray mb-4 mt-8">
            {title}
          </h2>
        );
      }
      if (section.startsWith('- ')) {
        const items = section.split('\n');
        return (
          <ul key={sIdx} className="list-disc pl-5 space-y-2.5 my-4">
            {items.map((item, iIdx) => {
              const cleanItem = item.replace('- ', '');
              // Check for bold prefixes inside bullets
              if (cleanItem.includes('**')) {
                const parts = cleanItem.split('**');
                return (
                  <li key={iIdx} className="text-xs md:text-sm text-brand-text font-semibold leading-relaxed">
                    <span className="font-extrabold text-brand-navy">{parts[1]}</span>{parts[2]}
                  </li>
                );
              }
              return (
                <li key={iIdx} className="text-xs md:text-sm text-brand-text font-semibold leading-relaxed">
                  {cleanItem}
                </li>
              );
            })}
          </ul>
        );
      }
      return (
        <p key={sIdx} className="text-xs md:text-sm leading-relaxed text-brand-text font-semibold mb-4">
          {section}
        </p>
      );
    });
  };

  return (
    <div className="bg-brand-softGray min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Security Blog', href: '/blog' },
            { label: post.title }
          ]}
        />

        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-xs font-bold text-brand-navy hover:text-brand-blue mb-8 uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog Listing
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Article Content Area (Span 8) */}
          <article className="lg:col-span-8 bg-white p-6 md:p-10 rounded-brand-lg border border-brand-borderGray shadow-sm space-y-6">
            
            {/* Header info */}
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-extrabold text-brand-blue bg-brand-lightBlue uppercase tracking-wider border border-brand-borderGray/30">
                <Sparkles className="w-3.5 h-3.5" />
                {post.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
                {post.title}
              </h1>

              {/* Author and Date Meta */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-brand-text uppercase border-b border-brand-borderGray/60 pb-5">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4 text-brand-blue" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-brand-blue" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-brand-blue" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Hero Cover Image */}
            <div className="aspect-[16/9] w-full rounded-brand-md overflow-hidden bg-brand-softGray border border-brand-borderGray">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rendered Markdown Body Content */}
            <div className="prose max-w-none pt-4">
              {renderContent(post.content)}
            </div>

            {/* Share and Tags footer */}
            <div className="border-t border-brand-borderGray/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-brand-softGray text-brand-navy text-[10px] font-bold py-1 px-2.5 rounded-md uppercase border border-brand-borderGray/40">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share links */}
              <div className="flex items-center space-x-3 text-xs font-bold uppercase text-brand-navy">
                <span>Share:</span>
                <button className="p-2 rounded-full bg-brand-softGray hover:bg-brand-blue hover:text-white transition-colors" aria-label="Share on Facebook">
                  <FacebookIcon className="w-3.5 h-3.5" />
                </button>
                <button className="p-2 rounded-full bg-brand-softGray hover:bg-brand-blue hover:text-white transition-colors" aria-label="Share on Twitter">
                  <TwitterIcon className="w-3.5 h-3.5" />
                </button>
                <button className="p-2 rounded-full bg-brand-softGray hover:bg-brand-blue hover:text-white transition-colors" aria-label="Share on Linkedin">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </article>

          {/* RIGHT: Table of Contents & Consult CTA (Span 4) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Table of Contents */}
            {tocHeadings.length > 0 && (
              <div className="bg-white p-6 rounded-brand-lg border border-brand-borderGray shadow-sm space-y-4">
                <h3 className="font-extrabold text-brand-navy text-sm border-b border-brand-borderGray pb-3 uppercase tracking-wider">
                  Table of Contents
                </h3>
                <nav className="flex flex-col space-y-2.5 text-xs font-semibold text-brand-text">
                  {tocHeadings.map((heading) => {
                    const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    return (
                      <a
                        key={heading}
                        href={`#${id}`}
                        className="hover:text-brand-blue transition-colors flex items-center gap-1.5 border-l-2 border-transparent hover:border-brand-blue pl-2"
                      >
                        {heading}
                      </a>
                    );
                  })}
                </nav>
              </div>
            )}

            {/* Consultation Card Widget */}
            <div className="bg-brand-navy text-white p-6 rounded-brand-lg border border-brand-accent/20 shadow-lg space-y-4 relative overflow-hidden">
              <div className="absolute top-[-50px] right-[-50px] w-48 h-48 rounded-full bg-white/5 blur-xl" />
              
              <h3 className="font-extrabold text-base border-b border-white/10 pb-3 uppercase tracking-wider text-brand-accent">
                Security Consultation
              </h3>
              <p className="text-xs text-brand-borderGray/90 leading-relaxed font-semibold">
                Get a custom security infrastructure blueprint mapping camera angles, NVR capacity, and active biometrics gates tailored to your building.
              </p>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => triggerQuoteModal(`Consult from Blog Post: ${post.title}`)}
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-2.5 px-4 rounded-brand-sm text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <ClipboardCheck className="w-4 h-4" />
                  Free Expert Consult
                </button>
                <a
                  href="tel:+18005557233"
                  className="w-full bg-white hover:bg-brand-softGray text-brand-navy font-bold py-2.5 px-4 rounded-brand-sm text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Our Support
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-2.5 px-4 rounded-brand-sm text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white stroke-none" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Related Articles Widget */}
            <div className="bg-white p-6 rounded-brand-lg border border-brand-borderGray shadow-sm space-y-4">
              <h3 className="font-extrabold text-brand-navy text-sm border-b border-brand-borderGray pb-3 uppercase tracking-wider">
                Related Articles
              </h3>
              <div className="space-y-4">
                {relatedPosts.map((rPost) => (
                  <div key={rPost.id} className="space-y-1">
                    <h4 className="font-bold text-xs text-brand-navy hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                      <Link href={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                    </h4>
                    <p className="text-[10px] text-brand-text font-bold uppercase tracking-wider">
                      {rPost.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </aside>

        </div>

      </div>
    </div>
  );
}
