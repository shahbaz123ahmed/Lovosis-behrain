import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Layers } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { productMegaMenuData } from '@/data/categories';

export async function generateMetadata({ params }: { params: { category: string } }) {
  const categoryName = Object.keys(productMegaMenuData).find(
    k => k.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === params.category
  );
  return {
    title: categoryName ? `${categoryName} Subcategories | LOVOSIS` : 'Category Not Found',
  };
}

export default function SubcategoriesPage({ params }: { params: { category: string } }) {
  const categoryName = Object.keys(productMegaMenuData).find(
    k => k.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === params.category
  );

  if (!categoryName) {
    notFound();
  }

  const categoryData = productMegaMenuData[categoryName];

  // Force re-render to pick up latest categories.ts changes
  return (
    <div className="bg-brand-softGray min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Categories', href: '/categories' },
          { label: categoryName }
        ]} />

        <div className="mb-10 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
            {categoryName}
          </h1>
          <p className="text-sm md:text-base text-brand-text max-w-2xl font-semibold">
            Select a series below to explore our range of {categoryName.toLowerCase()} solutions.
          </p>
        </div>

        {categoryData.items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-brand-text font-medium text-lg">No subcategories available for {categoryName} yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categoryData.items.map((sub, idx) => {
              const subSlug = sub.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              
              return (
                <Link 
                  href={`/categories/${params.category}/${subSlug}`} 
                  key={idx}
                  className="bg-white rounded-[20px] overflow-hidden border border-brand-borderGray hover:border-brand-blue/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  <div className="aspect-[4/3] bg-gradient-to-b from-brand-softGray to-white relative overflow-hidden flex items-center justify-center p-6 border-b border-brand-borderGray/50">
                     <img
                       src={sub.image || '/images/cat_ip_cameras.png'}
                       alt={sub.title}
                       className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                     />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                      {sub.title}
                    </h3>
                    <p className="text-sm text-brand-text font-medium mb-4 flex-grow line-clamp-2">
                      {sub.desc}
                    </p>
                    <div className="flex items-center text-xs font-bold text-brand-blue uppercase tracking-wider group-hover:text-sky-500 transition-colors mt-auto">
                      View Products <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
