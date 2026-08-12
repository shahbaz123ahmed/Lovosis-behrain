"use client";

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const whatsappNumber = "+1234567890"; // Sample representative number
  const message = encodeURIComponent("Hello Lovosis! I am interested in your security solutions and would like to request an expert consultation.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 rounded-full shadow-xl transition-colors focus:outline-none border border-emerald-400/30"
      aria-label="Contact us on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.1, 1] }}
      transition={{ delay: 1, duration: 0.6 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping z-[-1]" />
      <MessageCircle className="w-6 h-6 fill-white stroke-none" />
    </motion.a>
  );
}
