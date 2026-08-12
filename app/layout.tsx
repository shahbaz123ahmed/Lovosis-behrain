import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QuoteModal from "@/components/common/QuoteModal";
import ScrollToTop from "@/components/common/ScrollToTop";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Network Cameras & Advanced Security Solutions Distributor | LOVOSIS",
  description: "Explore professional network cameras, analog cameras, surveillance systems, NVRs, access control, video intercoms, and complete security solutions for homes and businesses.",
  metadataBase: new URL("https://lovosis-security.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Network Cameras & Advanced Security Solutions Distributor | LOVOSIS",
    description: "Explore professional network cameras, analog cameras, surveillance systems, NVRs, access control, video intercoms, and complete security solutions for homes and businesses.",
    url: "/",
    siteName: "LOVOSIS Security",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Cameras & Advanced Security Solutions Distributor | LOVOSIS",
    description: "Explore professional network cameras, analog cameras, surveillance systems, NVRs, access control, video intercoms, and complete security solutions for homes and businesses.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-brand-text min-h-screen flex flex-col justify-between`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Global Overlays & Modals */}
        <QuoteModal />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
