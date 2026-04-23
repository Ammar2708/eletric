"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { div } from "framer-motion/m";

const Work = () => {
  const { setOpen } = useQuoteModal();

  return (
    <div>

      {/* Brand Logos Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-12">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8">

            {["/a2.webp", "/a3.webp", "/a4.webp"].map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt={`Brand ${i}`}
                width={140}
                height={80}
                className="h-12 sm:h-16 md:h-20 w-auto object-contain transition duration-300 hover:scale-105"
              />
            ))}

          </div>
        </div>
      </div>
    <section className="relative w-full bg-[#1a1333] py-20 lg:py-0 lg:h-[450px] flex items-center overflow-hidden">

      
      
      {/* Decorative Cable Graphic (Bottom Right) */}
      <div className="absolute bottom-10 right-0 opacity-40 select-none pointer-events-none">
        <svg width="300" height="100" viewBox="0 0 300 100" fill="none">
          <path d="M0 80C100 80 150 20 300 20" stroke="white" strokeWidth="2" strokeDasharray="8 8" />
          <path d="M0 85C120 85 180 25 300 25" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-14 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-full">
          
          {/* LEFT: Image of Worker (matching the screenshot) */}
          <div className="relative  h-[300px] lg:h-full w-full hidden md:block ">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full w-full "
            >
              <Image
                src="/pic1.png" // Ensure you have a transparent or relevant worker image
                alt="Electrical expert"
                fill
                className="object-cover   rounded-4xl p-7"
              />
            </motion.div>
          </div>

          {/* RIGHT: Content Area */}
          <div className="text-white space-y-8 lg:py-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
                Get in touch <br className="hidden md:block" /> with us today
              </h2>
              <p className="text-white/70 text-lg max-w-md font-light">
                Our expert team is ready to assist with your residential, 
                commercial, or emergency electrical needs across the UK.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center gap-6"
            >
              {/* Contact Button */}
              <button
                onClick={() => setOpen(true)}
                className="bg-[#2E5BFF] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-[#1a1333] transition-all duration-300 shadow-xl shadow-blue-900/20"
              >
                Get a quote now
              </button>

              {/* Phone Link (Screenshot Style) */}
              <a 
                href="tel:02039733443" 
                className="flex items-center gap-4 group hover:opacity-80 transition-opacity"
              >
                <div className="w-14 h-14 bg-[#FF4D4D] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} fill="white" className="text-white" />
                </div>
                <span className="text-2xl md:text-3xl font-bold tracking-tighter">
                  (020) 397-33443
                </span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default Work;