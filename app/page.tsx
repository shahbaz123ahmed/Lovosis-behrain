import Hero from "@/components/home/Hero";
import SecureServices from "@/components/home/SecureServices";
import SecurityStats from "@/components/home/SecurityStats";
import InnovationFeatures from "@/components/home/InnovationFeatures";
import ProductCategories from "@/components/home/ProductCategories";
import SecuritySolutions from "@/components/home/SecuritySolutions";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurProcess from "@/components/home/OurProcess";
import TestimonialsCTA from "@/components/home/TestimonialsCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SecureServices />
      <SecurityStats />
      <InnovationFeatures />
      <ProductCategories />
      <SecuritySolutions />
      <FeaturedProducts />
      <WhyChooseUs />
      <OurProcess />
      <TestimonialsCTA />
    </>
  );
}
