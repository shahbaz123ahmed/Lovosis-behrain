"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Grid, List, Search as SearchIcon, SlidersHorizontal, ArrowRight, ShieldCheck, ClipboardCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { products, categories } from '@/data/products';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

function ProductsCatalog() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Extract initial filters from search params
  const paramCategory = searchParams.get('category') || '';
  const paramSearch = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(paramCategory);
  const [searchQuery, setSearchQuery] = useState(paramSearch);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const itemsPerPage = 6;

  // Sync category and search query when URL parameters change
  useEffect(() => {
    setActiveCategory(paramCategory);
  }, [paramCategory]);

  useEffect(() => {
    setSearchQuery(paramSearch);
  }, [paramSearch]);

  // Reset pagination on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, sortBy]);

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === '' || product.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name-asc') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    return 0; // default featured / position sorting
  });

  // Paginated products
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    const params = new URLSearchParams(window.location.search);
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    router.replace(`/products?${params.toString()}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    const params = new URLSearchParams(window.location.search);
    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }
    router.replace(`/products?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setActiveCategory('');
    setSearchQuery('');
    router.replace('/products');
  };

  return (
    <div className="bg-brand-softGray min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: 'Products' }]} />

        {/* Page Header */}
        <div className="mb-10 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
            Security Products Directory
          </h1>
          <p className="text-sm md:text-base text-brand-text max-w-2xl font-semibold">
            Browse our full catalog of premium CCTV cameras, recording hardware, access control systems, and central networking accessories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT SIDEBAR: Categories list & Filters (Desktop only) */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-brand-md border border-brand-borderGray shadow-sm space-y-6">
              
              <div className="flex justify-between items-center border-b border-brand-borderGray pb-3">
                <h3 className="font-extrabold text-brand-navy text-sm uppercase tracking-wider">Categories</h3>
                {(activeCategory || searchQuery) && (
                  <button
                    onClick={handleClearFilters}
                    className="text-[11px] text-brand-blue font-bold hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter list */}
              <nav className="flex flex-col space-y-1.5">
                <button
                  onClick={() => handleCategorySelect('')}
                  className={`px-3 py-2 rounded-brand-sm text-left text-xs font-bold transition-colors ${
                    activeCategory === ''
                      ? 'bg-brand-blue text-white'
                      : 'text-brand-navy hover:bg-brand-lightBlue hover:text-brand-blue'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`px-3 py-2 rounded-brand-sm text-left text-xs font-bold transition-colors ${
                      activeCategory === cat
                        ? 'bg-brand-blue text-white'
                        : 'text-brand-navy hover:bg-brand-lightBlue hover:text-brand-blue'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* MAIN PRODUCT REGION */}
          <main className="lg:col-span-3 space-y-6">
            
            {/* Top Toolbar */}
            <div className="bg-white p-4 rounded-brand-md border border-brand-borderGray shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
              
              {/* Search Bar Input */}
              <div className="relative w-full sm:max-w-xs">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search catalog..."
                  className="w-full pl-9 pr-4 py-2 border border-brand-borderGray rounded-brand-sm bg-brand-softGray focus:outline-none focus:border-brand-blue text-xs text-brand-navy font-semibold"
                />
                <SearchIcon className="absolute left-3 top-2.5 w-4 h-4 text-brand-text opacity-70" />
              </div>

              {/* View switches & sorting */}
              <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-1.5 border border-brand-borderGray hover:bg-brand-softGray text-xs font-bold text-brand-navy py-2 px-3.5 rounded-brand-sm transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-brand-text font-bold uppercase tracking-wider hidden sm:inline">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-brand-borderGray rounded-brand-sm py-1.5 px-3 bg-brand-softGray text-xs text-brand-navy font-bold focus:outline-none focus:border-brand-blue"
                  >
                    <option value="featured">Featured</option>
                    <option value="name-asc">Name (A - Z)</option>
                    <option value="name-desc">Name (Z - A)</option>
                  </select>
                </div>

                {/* Grid vs List view toggle */}
                <div className="flex border border-brand-borderGray rounded-brand-sm bg-brand-softGray p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-brand-sm transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-white text-brand-blue shadow-xs'
                        : 'text-brand-navy hover:bg-white/50'
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-brand-sm transition-colors ${
                      viewMode === 'list'
                        ? 'bg-white text-brand-blue shadow-xs'
                        : 'text-brand-navy hover:bg-white/50'
                    }`}
                    aria-label="List view"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

            {/* Results Count Banner */}
            <div className="text-xs font-bold text-brand-navy">
              Found {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} 
              {activeCategory && <span> in &ldquo;{activeCategory}&rdquo;</span>}
              {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
            </div>

            {/* Products Grid or List layout */}
            {paginatedProducts.length > 0 ? (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'flex flex-col gap-4'
              }>
                {paginatedProducts.map((prod) => (
                  <motion.div
                    key={prod.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`bg-white rounded-brand-md border border-brand-borderGray overflow-hidden hover:shadow-lg transition-all duration-300 flex ${
                      viewMode === 'grid' ? 'flex-col justify-between' : 'flex-row items-center p-4 gap-6'
                    }`}
                  >
                    {/* Image space */}
                    <div className={`bg-brand-softGray relative shrink-0 flex items-center justify-center p-4 ${
                      viewMode === 'grid' ? 'aspect-[4/3] w-full' : 'w-36 h-36 rounded-brand-sm'
                    }`}>
                      <img
                        src={prod.imageUrl}
                        alt={prod.name}
                        className="max-h-full max-w-full object-contain"
                      />
                      <span className="absolute top-2 left-2 bg-brand-navy text-white text-[9px] font-extrabold uppercase py-0.5 px-2 rounded-full">
                        {prod.category}
                      </span>
                    </div>

                    {/* Meta info & text */}
                    <div className="flex-grow p-5 space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-brand-navy text-base leading-snug hover:text-brand-blue transition-colors">
                          <a href={`/products/${prod.slug}`}>{prod.name}</a>
                        </h3>
                        <p className="text-xs text-brand-text line-clamp-2 leading-relaxed font-semibold">
                          {prod.description}
                        </p>
                      </div>

                      {/* Specs snippet (grid mode shows specs, list mode can hide or stack) */}
                      <div className="space-y-1 text-[11px] font-medium text-brand-navy bg-brand-softGray/50 p-2.5 rounded-brand-sm border border-brand-borderGray/60">
                        {Object.entries(prod.specifications).slice(0, 2).map(([key, val]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-brand-black/70 font-semibold">{key}:</span>
                            <span className="truncate max-w-[120px]">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions panel */}
                    <div className={`flex gap-2 ${
                      viewMode === 'grid' 
                        ? 'p-5 border-t border-brand-borderGray/40 grid grid-cols-2' 
                        : 'flex-col justify-center shrink-0 border-l border-brand-borderGray/40 pl-6 pr-2'
                    }`}>
                      <a
                        href={`/products/${prod.slug}`}
                        className="flex items-center justify-center gap-1.5 border border-brand-borderGray hover:bg-brand-softGray text-brand-navy font-bold py-2 px-3 rounded-brand-sm text-[11px] transition-colors"
                      >
                        Details
                      </a>
                      <button
                        onClick={() => triggerQuoteModal(prod.name)}
                        className="flex items-center justify-center gap-1.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-2 px-3 rounded-brand-sm text-[11px] transition-colors shadow-xs"
                      >
                        Get Quote
                      </button>
                    </div>

                  </motion.div>
                ))}
              </div>
            ) : (
              // Empty search / filter state
              <div className="bg-white p-12 rounded-brand-md border border-brand-borderGray text-center space-y-4 shadow-sm">
                <ShieldCheck className="w-16 h-16 text-brand-text/50 mx-auto" />
                <h3 className="font-extrabold text-brand-navy text-lg">No Products Found</h3>
                <p className="text-brand-text text-sm max-w-md mx-auto leading-relaxed font-semibold">
                  We couldn&rsquo;t find any items matching your active filter criteria. Try clearing search fields or selected categories.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs py-2 px-6 rounded-brand-sm transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2 pt-6 border-t border-brand-borderGray/30">
                {[...Array(totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-9 h-9 rounded-brand-sm text-xs font-bold transition-all ${
                        currentPage === pageNum
                          ? 'bg-brand-blue text-white shadow-md'
                          : 'bg-white hover:bg-brand-lightBlue text-brand-navy border border-brand-borderGray'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
            )}

          </main>

        </div>

      </div>

      {/* MOBILE FILTER SIDE DRAWER */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-brand-navy/60 z-50 lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 bottom-0 left-0 w-72 max-w-[80vw] bg-white z-50 shadow-2xl p-6 overflow-y-auto lg:hidden flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-brand-borderGray pb-3">
                  <h3 className="font-extrabold text-brand-navy text-sm uppercase tracking-wider">Product Categories</h3>
                  <button onClick={() => setIsMobileFilterOpen(false)}>
                    <X className="w-5 h-5 text-brand-navy" />
                  </button>
                </div>
                <nav className="flex flex-col space-y-1.5">
                  <button
                    onClick={() => {
                      handleCategorySelect('');
                      setIsMobileFilterOpen(false);
                    }}
                    className={`px-3 py-2 rounded-brand-sm text-left text-xs font-bold transition-colors ${
                      activeCategory === ''
                        ? 'bg-brand-blue text-white'
                        : 'text-brand-navy hover:bg-brand-lightBlue hover:text-brand-blue'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        handleCategorySelect(cat);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`px-3 py-2 rounded-brand-sm text-left text-xs font-bold transition-colors ${
                        activeCategory === cat
                          ? 'bg-brand-blue text-white'
                          : 'text-brand-navy hover:bg-brand-lightBlue hover:text-brand-blue'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </nav>
              </div>

              {(activeCategory || searchQuery) && (
                <button
                  onClick={() => {
                    handleClearFilters();
                    setIsMobileFilterOpen(false);
                  }}
                  className="bg-brand-softGray border border-brand-borderGray hover:bg-brand-borderGray/20 text-brand-navy text-xs font-bold py-2.5 rounded-brand-sm w-full block mt-8"
                >
                  Clear Filters
                </button>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Separate component representing a small close icon for drawer
function X({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-brand-softGray">
        <div className="w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ProductsCatalog />
    </Suspense>
  );
}
