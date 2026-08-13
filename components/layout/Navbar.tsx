"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Shield,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Camera,
  Eye,
  Server,
  Key,
  Tv,
  Cpu,
  Award,
  HelpCircle,
  ArrowRight,
  HardHat,
  ShieldCheck,
  Building2,
  Home,
  ShoppingBag,
  Archive,
  Factory,
  GraduationCap,
  Layers,
  Lock,
  Wifi,
  Disc,
  Radio,
  CheckCircle2,
  Settings,
  ShieldAlert,
  Leaf
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '@/data/products';
import { solutionsMegaMenuData, solutions } from '@/data/solutions';
import { triggerQuoteModal } from '@/components/common/QuoteModal';

import { categoryImages, productMegaMenuData } from '@/data/categories';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // Active hover category for products mega menu
  const [activeCategory, setActiveCategory] = useState<string>('Network Cameras');
  // Active hover solution category for solutions mega menu
  const [activeSolutionCategory, setActiveSolutionCategory] = useState<string>('Solutions by Industry');

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setProductsDropdownOpen(false);
    setSolutionsDropdownOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products', hasDropdown: true, type: 'products' },
    { name: 'Solutions', href: '/solutions', hasDropdown: true, type: 'solutions' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-brand-borderGray py-2'
            : 'bg-white border-b border-brand-borderGray py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-brand-blue text-white p-2 rounded-brand-sm group-hover:bg-brand-navy transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-brand-navy">LOVOSIS</span>
                <span className="text-[9px] uppercase tracking-widest text-brand-blue font-bold">Security Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 relative">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative py-2"
                  onMouseEnter={() => {
                    if (item.type === 'products') {
                      setProductsDropdownOpen(true);
                      setSolutionsDropdownOpen(false);
                    }
                    if (item.type === 'solutions') {
                      setSolutionsDropdownOpen(true);
                      setProductsDropdownOpen(false);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.type === 'products') setProductsDropdownOpen(false);
                    if (item.type === 'solutions') setSolutionsDropdownOpen(false);
                  }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 font-semibold text-base transition-colors py-1 ${
                      (item.href === '/' && pathname === '/') || (item.href !== '/' && pathname.startsWith(item.href))
                        ? 'text-brand-blue'
                        : 'text-brand-black hover:text-brand-blue'
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-75" />}
                  </Link>

                  {/* Active Page Indicator Bar */}
                  {((item.href === '/' && pathname === '/') || (item.href !== '/' && pathname.startsWith(item.href))) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-[-10px] left-0 right-0 h-[3px] bg-brand-blue rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              ))}

              {/* Mega Menu Dropdown: Products (Fixed Dead-Center on Screen Viewport) */}
              <AnimatePresence>
                {productsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: "-50%", y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, x: "-50%", y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: "-50%", y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                    className="fixed left-1/2 top-[68px] w-[820px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 z-50 grid grid-cols-12 gap-5"
                  >
                    {/* Left Sidebar: Categories */}
                    <div className="col-span-4 border-r border-slate-100 pr-4 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3 block">
                          Product Categories
                        </span>
                        <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                          {Object.keys(productMegaMenuData).map((catName) => {
                            const catData = productMegaMenuData[catName];
                            const Icon = catData.icon;
                            const isActive = activeCategory === catName;

                            return (
                              <button
                                key={catName}
                                onMouseEnter={() => setActiveCategory(catName)}
                                onClick={() => router.push(`/categories/${catName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`)}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all text-left group/cat ${
                                  isActive
                                    ? 'bg-blue-50/80 text-brand-blue font-bold shadow-sm'
                                    : 'text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900'
                                }`}
                              >
                                <div className="flex items-center gap-2.5">
                                  {/* Blue rounded image box like reference design */}
                                  <div className={`w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-all ${
                                    isActive
                                      ? 'bg-brand-blue shadow-sm'
                                      : 'bg-brand-blue group-hover/cat:bg-brand-navy shadow-sm'
                                  }`}>
                                    <div className="w-[34px] h-[34px] bg-white rounded-[8px] flex items-center justify-center overflow-hidden">
                                      <img
                                        src={catData.items[0]?.image || '/images/cat_ip_cameras.png'}
                                        alt={catName}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  </div>
                                  <span>{catName}</span>
                                </div>
                                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-brand-blue translate-x-0.5' : 'text-slate-300 group-hover/cat:text-slate-500'}`} />
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Bottom Genuine Products Card */}
                      <div className="bg-blue-50/60 rounded-xl p-3.5 border border-blue-100/80 flex items-start gap-3 mt-4">
                        <div className="w-8 h-8 rounded-lg bg-brand-blue text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-brand-blue">100% Genuine Products</h5>
                          <p className="text-[11px] text-slate-600 font-medium leading-tight mt-0.5">
                            We provide original &amp; high-quality security products.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Main Area: Sub-products Grid */}
                    <div className="col-span-8 flex flex-col justify-between pl-1">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                            Explore {activeCategory}
                          </span>
                          <Link
                            href={`/categories/${activeCategory.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                            className="text-[11px] font-bold text-brand-blue hover:underline flex items-center gap-1"
                          >
                            View Category &raquo;
                          </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-2.5 mb-4">
                          {productMegaMenuData[activeCategory]?.items.slice(0, 9).map((prod) => (
                            <Link
                              key={prod.title}
                              href={prod.href}
                              className="group/item flex flex-col rounded-xl border border-slate-100 hover:border-brand-blue/30 hover:shadow-md transition-all overflow-hidden bg-white"
                            >
                              {/* Product image area */}
                              <div className="bg-slate-50 flex items-center justify-center h-[72px] overflow-hidden rounded-t-xl">
                                <img
                                  src={prod.image}
                                  alt={prod.title}
                                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                                />
                              </div>
                              {/* Product info */}
                              <div className="p-2">
                                <h4 className="text-[11px] font-bold text-slate-800 group-hover/item:text-brand-blue transition-colors leading-tight line-clamp-1">
                                  {prod.title}
                                </h4>
                                <p className="text-[9px] text-slate-400 font-medium line-clamp-1 mt-0.5 leading-tight">
                                  {prod.desc}
                                </p>
                                <span className="text-[9px] font-bold text-brand-blue uppercase tracking-wide mt-1 flex items-center gap-0.5">
                                  Explore <ChevronRight className="w-2.5 h-2.5" />
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Banner Callout */}
                      <div className="bg-blue-50/50 rounded-xl p-3 border border-blue-100 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center flex-shrink-0">
                            <HelpCircle className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-brand-navy">Need Help Choosing the Right Product?</h5>
                            <p className="text-[11px] text-slate-500 font-medium">
                              Our experts can help you find the perfect solution.
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => triggerQuoteModal(`Consultation for ${activeCategory}`)}
                          className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5 whitespace-nowrap"
                        >
                          <span>Get Free Consultation</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mega Menu Dropdown: Solutions (Fixed Dead-Center on Screen Viewport) */}
              <AnimatePresence>
                {solutionsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: "-50%", y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, x: "-50%", y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: "-50%", y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setSolutionsDropdownOpen(true)}
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                    className="fixed left-1/2 top-[68px] w-[820px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 z-50 grid grid-cols-12 gap-5"
                  >
                    {/* Left Sidebar: Solutions List */}
                    <div className="col-span-4 border-r border-slate-100 pr-4 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3 block">
                          Our Solutions
                        </span>
                        <div className="space-y-0.5">
                          {Object.keys(solutionsMegaMenuData).map((catName) => {
                            const catData = solutionsMegaMenuData[catName];
                            const isActive = activeSolutionCategory === catName;
                            const SolIcon =
                               catData.icon === 'Building2' ? Building2 :
                               catData.icon === 'Briefcase' ? Archive :
                               catData.icon === 'Settings' ? Settings : ShieldCheck;

                            return (
                              <button
                                key={catName}
                                onMouseEnter={() => setActiveSolutionCategory(catName)}
                                onClick={() => {
                                  // Can route to a general page or specific industry page
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all text-left group/sol ${
                                  isActive
                                    ? 'bg-blue-50/80 text-brand-blue font-bold shadow-xs'
                                    : 'text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900'
                                }`}
                              >
                                <div className="flex items-center gap-2.5">
                                  <SolIcon className={`w-4 h-4 transition-colors ${isActive ? 'text-brand-blue' : 'text-slate-400 group-hover/sol:text-brand-blue'}`} />
                                  <span className="truncate max-w-[140px]">{catName}</span>
                                </div>
                                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-brand-blue translate-x-0.5' : 'text-slate-300 group-hover/sol:text-slate-500'}`} />
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Bottom Site Survey Card */}
                      <div className="bg-blue-50/60 rounded-xl p-3.5 border border-blue-100/80 flex items-start gap-3 mt-4">
                        <div className="w-8 h-8 rounded-lg bg-brand-navy text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                          <HardHat className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-brand-navy">Free Site Inspection</h5>
                          <p className="text-[11px] text-slate-600 font-medium leading-tight mt-0.5">
                            Certified technical site audit &amp; camera cabling blueprints.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Main Area: Sub-categories Grid */}
                    <div className="col-span-8 flex flex-col justify-between pl-1">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                            Explore {activeSolutionCategory}
                          </span>
                        </div>

                        <div className="flex flex-col gap-4 mb-4">
                          {solutionsMegaMenuData[activeSolutionCategory]?.sections ? (
                            solutionsMegaMenuData[activeSolutionCategory].sections.map((section, idx) => (
                              <div key={idx}>
                                <h5 className="text-[11px] font-bold text-slate-500 mb-2">{section.title}</h5>
                                <div className="grid grid-cols-3 gap-3">
                                  {section.items.map((item) => {
                                    const ItemIcon =
                                      item.icon === 'ShieldAlert' ? ShieldAlert :
                                      item.icon === 'Leaf' ? Leaf :
                                      item.icon === 'Briefcase' ? Archive : Building2;

                                    return (
                                      <Link
                                        key={item.title}
                                        href={item.href}
                                        className="group/item flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-brand-blue/30 hover:shadow-sm transition-all bg-white"
                                      >
                                        <div className="w-10 h-10 rounded-lg bg-slate-50 flex flex-shrink-0 items-center justify-center text-slate-400 group-hover/item:text-brand-blue group-hover/item:bg-blue-50 transition-colors">
                                          <ItemIcon className="w-5 h-5" />
                                        </div>
                                        <div>
                                          <h4 className="text-xs font-bold text-slate-800 group-hover/item:text-brand-blue transition-colors">
                                            {item.title}
                                          </h4>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ))
                          ) : solutionsMegaMenuData[activeSolutionCategory]?.items && solutionsMegaMenuData[activeSolutionCategory].items.length > 0 ? (
                            <div className="grid grid-cols-3 gap-3">
                              {solutionsMegaMenuData[activeSolutionCategory].items.map((item) => {
                                const ItemIcon =
                                   item.icon === 'Building2' ? Building2 :
                                   item.icon === 'ShoppingBag' ? ShoppingBag :
                                   item.icon === 'Landmark' ? Building2 : // using Building2 as fallback
                                   item.icon === 'GraduationCap' ? GraduationCap :
                                   item.icon === 'ShoppingCart' ? ShoppingBag : // using ShoppingBag as fallback
                                   item.icon === 'Hospital' ? Building2 : // using Building2 as fallback
                                   item.icon === 'Truck' ? Archive : // using Archive as fallback
                                   item.icon === 'Trophy' ? Award :
                                   item.icon === 'Hotel' ? Building2 : 
                                   item.icon === 'ShieldAlert' ? ShieldAlert :
                                   item.icon === 'Leaf' ? Leaf : Building2;

                                return (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    className="group/item flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-brand-blue/30 hover:shadow-sm transition-all bg-white"
                                  >
                                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex flex-shrink-0 items-center justify-center text-slate-400 group-hover/item:text-brand-blue group-hover/item:bg-blue-50 transition-colors">
                                      <ItemIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                      <h4 className="text-xs font-bold text-slate-800 group-hover/item:text-brand-blue transition-colors">
                                        {item.title}
                                      </h4>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="text-center py-8 text-sm text-slate-500 font-medium border-2 border-dashed border-slate-200 rounded-xl">
                              Subcategories coming soon
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Bottom Callout */}
                      <div className="bg-blue-50/50 rounded-xl p-3 border border-blue-100 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center flex-shrink-0">
                            <HelpCircle className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-brand-navy">Need a Custom Security Blueprint?</h5>
                            <p className="text-[11px] text-slate-500 font-medium">
                              Schedule an expert technician property audit.
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => triggerQuoteModal(`Site Survey for ${activeSolutionCategory}`)}
                          className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5 whitespace-nowrap"
                        >
                          <span>Request Site Survey</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-brand-black hover:text-brand-blue p-2 rounded-full hover:bg-brand-softGray transition-colors"
                aria-label="Search site"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/contact"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-sm px-5 py-2.5 rounded-brand-sm transition-all shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Actions and Hamburger */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-brand-black hover:text-brand-blue p-2 rounded-full hover:bg-brand-softGray transition-colors"
                aria-label="Search site"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-brand-black hover:text-brand-blue p-2 rounded-full hover:bg-brand-softGray transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Search Bar Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[70px] left-0 right-0 bg-white border-b border-brand-borderGray py-4 px-4 z-30 shadow-md"
          >
            <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for security products (e.g. dome camera, biometric lock, NVR)..."
                className="flex-grow px-4 py-2 border border-brand-borderGray rounded-brand-sm bg-brand-softGray focus:outline-none focus:border-brand-blue text-sm text-brand-black"
                autoFocus
              />
              <button
                type="submit"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-5 py-2 rounded-brand-sm text-sm font-semibold transition-colors flex items-center gap-1.5"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Slide-in Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-navy/50 backdrop-blur-xs z-30 lg:hidden"
            />

            {/* Menu container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-30 shadow-2xl border-l border-brand-borderGray p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div className="space-y-6 pt-14">
                <div className="border-b border-brand-borderGray pb-4">
                  <span className="text-xs uppercase tracking-widest text-brand-text font-bold">Navigation Links</span>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-base font-bold transition-colors block ${
                          (item.href === '/' && pathname === '/') || (item.href !== '/' && pathname.startsWith(item.href))
                            ? 'text-brand-blue'
                            : 'text-brand-navy hover:text-brand-blue'
                        }`}
                      >
                        {item.name}
                      </Link>

                      {/* Expandable sub-items for Products and Solutions on mobile */}
                      {item.type === 'products' && (
                        <div className="pl-4 border-l border-brand-borderGray space-y-2 py-1">
                          {categories.slice(0, 4).map((cat) => (
                            <Link
                              key={cat}
                              href={`/products?category=${encodeURIComponent(cat)}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs text-brand-text hover:text-brand-blue block font-medium"
                            >
                              {cat}
                            </Link>
                          ))}
                          <Link
                            href="/products"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xs text-brand-blue hover:underline block font-semibold"
                          >
                            All Categories &raquo;
                          </Link>
                        </div>
                      )}

                      {item.type === 'solutions' && (
                        <div className="pl-4 border-l border-brand-borderGray space-y-2 py-1">
                          {solutions.slice(0, 4).map((sol) => (
                            <Link
                              key={sol.id}
                              href={`/solutions/${sol.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs text-brand-text hover:text-brand-blue block font-medium"
                            >
                              {sol.name}
                            </Link>
                          ))}
                          <Link
                            href="/solutions"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xs text-brand-blue hover:underline block font-semibold"
                          >
                            All Solutions &raquo;
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Bottom CTAs inside mobile drawer */}
              <div className="border-t border-brand-borderGray pt-6 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-3 text-center rounded-brand-sm block shadow-md text-sm transition-colors"
                >
                  Contact Us Now
                </Link>
                <div className="flex items-center justify-center gap-2 text-xs text-brand-text font-semibold">
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Call support: +1 800-555-SAFE</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

