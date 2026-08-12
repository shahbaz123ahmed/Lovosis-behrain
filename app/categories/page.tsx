import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { productMegaMenuData, categoryImages } from '@/data/categories';

export const metadata = {
  title: 'All Product Categories | LOVOSIS',
  description: 'Browse our complete range of security product categories.',
};

export default function CategoriesPage() {
  const categories = Object.keys(productMegaMenuData);

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Categories' }]} />

        <div className="mb-16 space-y-4 text-center max-w-3xl mx-auto mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
            Our Security Ecosystem
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            Explore our comprehensive range of high-end security solutions. Built for enterprise performance and unparalleled reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const data = productMegaMenuData[category];
            const Icon = data?.icon || Layers;
            const subCategoryCount = data?.items?.length || 0;
            const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            // Use the clean image from the first subcategory, fallback to others
            const imageUrl = data?.items?.[0]?.image || categoryImages[category] || '/images/cat_accessories.png';

            return (
              <Link 
                href={`/categories/${slug}`} 
                key={category}
                className="bg-white rounded-[2rem] border border-slate-200/60 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 group flex flex-col relative overflow-hidden"
              >
                {/* Top Section with Light Blue Background & Original PNG Image */}
                <div className="h-56 w-full relative flex items-center justify-center p-8 bg-[#F1F7FE]/50 group-hover:bg-[#F1F7FE] transition-colors">
                  <div className="w-56 h-auto transform group-hover:scale-110 transition-transform duration-500 ease-out">
                    <img 
                      src={imageUrl} 
                      alt={category} 
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-6 left-6 w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Bottom Content Section */}
                <div className="p-8 flex flex-col flex-grow border-t border-slate-100 bg-white">
                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">
                    {category}
                  </h3>
                  
                  <p className="text-sm text-slate-500 font-medium mb-8 flex-grow leading-relaxed">
                    {subCategoryCount > 0 
                      ? `Discover ${subCategoryCount} specialized subcategories engineered for your security requirements.` 
                      : 'Explore our range of premium products in this category.'}
                  </p>
                  
                  <div className="flex items-center justify-between w-full mt-auto">
                    <span className="text-sm font-bold text-brand-blue uppercase tracking-wider group-hover:text-brand-navy transition-colors">
                      View Products
                    </span>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white text-brand-blue transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
