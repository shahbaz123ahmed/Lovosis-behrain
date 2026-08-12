import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight, LayoutGrid, CheckCircle } from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { productMegaMenuData } from '@/data/categories';
import { products } from '@/data/products';

export async function generateMetadata({ params }: { params: { category: string, subcategory: string } }) {
  const categoryName = Object.keys(productMegaMenuData).find(
    k => k.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === params.category
  );
  
  if (categoryName) {
    const subcategoryData = productMegaMenuData[categoryName]?.items.find(
      sub => sub.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === params.subcategory
    );
    if (subcategoryData) {
      return { title: `${subcategoryData.title} | ${categoryName} | LOVOSIS` };
    }
  }
  return { title: 'Products Not Found' };
}

export default function ProductsListingPage({ params }: { params: { category: string, subcategory: string } }) {
  const categoryName = Object.keys(productMegaMenuData).find(
    k => k.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === params.category
  );

  if (!categoryName) notFound();

  const subcategoryData = productMegaMenuData[categoryName]?.items.find(
    sub => sub.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === params.subcategory
  );

  if (!subcategoryData) notFound();

  // Filter products by category and subcategory
  const categoryProducts = products.filter(p => p.category === categoryName);
  const subcategoryProducts = categoryProducts.filter(p => {
    if (p.subcategory) {
      return p.subcategory.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === params.subcategory;
    }
    return false;
  });
  
  const displayProducts = subcategoryProducts;

  return (
    <div className="bg-brand-softGray min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Categories', href: '/categories' },
          { label: categoryName, href: `/categories/${params.category}` },
          { label: subcategoryData.title }
        ]} />

        {/* Header Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 mb-10 shadow-sm border border-brand-borderGray flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="flex-1 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-brand-lightBlue text-brand-blue px-3 py-1 rounded-full text-sm font-bold mb-4">
              <LayoutGrid className="w-4 h-4" />
              <span>{categoryName}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-navy mb-4 leading-tight">
              {subcategoryData.title}
            </h1>
            <p className="text-brand-text text-lg max-w-2xl">
              {subcategoryData.desc} Browse our selection of premium quality products below.
            </p>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center z-10">
            <div className="w-48 h-48 bg-brand-softGray rounded-full flex items-center justify-center p-6 border-8 border-white shadow-lg">
              <img src={subcategoryData.image} alt={subcategoryData.title} className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-6 flex justify-between items-end">
          <h2 className="text-2xl font-bold text-brand-navy">Available Products</h2>
          <span className="text-brand-text font-medium">{displayProducts.length} items</span>
        </div>

        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`/products/${product.slug}`}
                className="bg-white rounded-2xl border border-brand-borderGray overflow-hidden hover:shadow-xl hover:border-brand-blue/30 transition-all group flex flex-col h-full"
              >
                {/* Product Image Area */}
                <div className="aspect-[4/3] bg-brand-softGray relative p-6 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-brand-navy text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {subcategoryData.title}
                    </span>
                  </div>
                </div>
                
                {/* Product Details Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="mt-2 mb-4 space-y-1 flex-grow">
                    {Object.entries(product.specifications).slice(0, 3).map(([key, val]) => (
                      <div key={key} className="text-sm flex items-start text-brand-text">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-blue mt-0.5 mr-2 shrink-0" />
                        <span className="line-clamp-1"><span className="font-semibold">{key}:</span> {val}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-brand-borderGray flex items-center justify-between mt-auto">
                    <span className="text-sm font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-md">
                      {product.availability}
                    </span>
                    <span className="text-brand-blue text-sm font-bold flex items-center group-hover:text-brand-navy transition-colors">
                      Details <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-brand-borderGray p-12 text-center">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">No Products Found</h3>
            <p className="text-brand-text">There are currently no products available in this subcategory. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}
